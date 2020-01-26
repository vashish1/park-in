package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"park-in/db"
	"strconv"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/mongo"
)

var cl *mongo.Collection
var c *mongo.Client

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/Parking", parking).Methods("GET","POST")
	r.HandleFunc("/Parking/{id}", testing).Methods("GET")
	http.Handle("/", r)
	http.ListenAndServe(":80", nil)
}

func init() {
	cl, c = db.Createdb()

}

func setupResponse(w *http.ResponseWriter, req *http.Request) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}

func parking(w http.ResponseWriter, r *http.Request) {
	setupResponse(&w, r)
	if (r).Method == "OPTIONS" {
		return
	}
	w.Header().Set("Content-Type", "application/json")
	switch r.Method {
	case "GET":
		d := db.FetchData(cl)
		fmt.Println(d)
		if len(d) != 12 {
			w.WriteHeader(http.StatusNotFound)
			w.Write([]byte(`{"error": "not created"}`))
			return
		}
		json.NewEncoder(w).Encode(d)
	case "POST":
		fmt.Println(r.Header)
		type use struct {
			Id int
		}
		var id use
		body, _ := ioutil.ReadAll(r.Body)
		err := json.Unmarshal(body, &id)
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			w.Write([]byte(`{"error": "body not parsed"}`))
			return
		}
		ok := db.UpdateData(cl, id.Id)
		if ok {
			json.NewEncoder(w).Encode("working")
		}

	}
}

func testing(w http.ResponseWriter, r *http.Request) {

	vars := mux.Vars(r)
	i := vars["id"]
	id,err:= strconv.Atoi(i)
	if err==nil{
	ok := db.UpdateData(cl, id)
	if ok {
		json.NewEncoder(w).Encode("working")
	}
}

}


