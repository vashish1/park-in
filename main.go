package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/mongo"
	"io/ioutil"
	"net/http"
	"park-in/db"
)

var cl *mongo.Collection
var c *mongo.Client

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/Parking", parking).Methods("GET", "POST")
	http.Handle("/", r)
	http.ListenAndServe(":80", nil)
}

func init() {
	cl, c = db.Createdb()

}

func parking(w http.ResponseWriter, r *http.Request) {
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
		type use struct{
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
