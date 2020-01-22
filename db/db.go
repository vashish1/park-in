package db

import (
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/bson"
)

//Createdb creates a database
func Createdb() (*mongo.Collection, *mongo.Client) {

	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")

	// Connect to MongoDB
	client, err := mongo.Connect(context.TODO(), clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	// Check the connection
	err = client.Ping(context.TODO(), nil)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to MongoDB!")
	usercollection := client.Database("Parking").Collection("Data")
	return usercollection, client
}

//Insertdata inserts the data into the database
func Insertdata(collection *mongo.Collection, u Data) bool {

	fmt.Println(u.Boxno)
	insertResult, err := collection.InsertOne(context.TODO(), u)
	if err != nil {
		log.Print(err)
		return false
	}

	fmt.Println("Inserted a single document: ", insertResult.InsertedID)
	return true
}

//Fetchdata .............
func Fetchdata(collection *mongo.Collection, id int) Data {
	filter := bson.D{primitive.E{Key: "boxno", Value: id}}
	var result Data

	err := collection.FindOne(context.TODO(), filter).Decode(&result)
	if err != nil {
		fmt.Println(err)
		return result
	}
	return result
}
