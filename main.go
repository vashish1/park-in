package main

import (
	"api/Parking/db"
	"encoding/json"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/mongo"
)

var cl *mongo.Collection
var c *mongo.Client

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/Parking", parking).Methods("POST")
	http.Handle("/", r)
	http.ListenAndServe(":80", nil)
}

func init() {
	cl, c = db.Createdb()
	var data db.Data
	data.Now = time.Now()
	data.Boxno = 1
	data.Occupied = false
	db.Insertdata(cl, data)

}

func parking(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	d := db.Fetchdata(cl, 1)
	if d.Boxno != 1 {
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte(`{"error": "not created"}`))
		return
	}
	
	json.NewEncoder(w).Encode(d)
	w.Write([]byte("hello its parking"))
}
