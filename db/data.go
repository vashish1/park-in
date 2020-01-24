package db

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/bson"
)

//Data is structure
type Data struct {
	Now      time.Time
	Then     time.Time
	Boxno    int
	Occupied bool
}

//InsertData inserts the data into the database
func InsertData(collection *mongo.Collection, u Data) bool {

	fmt.Println(u.Boxno)
	insertResult, err := collection.InsertOne(context.TODO(), u)
	if err != nil {
		log.Print(err)
		return false
	}

	fmt.Println("Inserted a single document: ", insertResult.InsertedID)
	return true
}

//FetchData .............
func FetchData(collection *mongo.Collection) []Data {
	var results []Data
	for i := 1; i <= 12; i++ {
		filter := bson.D{primitive.E{Key: "boxno", Value: i}}
		var result Data

		err := collection.FindOne(context.TODO(), filter).Decode(&result)
		if err != nil {
			fmt.Println(err)
			return results
		}
		results = append(results, result)
	}
	return results
}

//UpdateData updates the data of respective slot
func  UpdateData(c *mongo.Collection, id int) bool {

	filter := bson.D{{"boxno", id}}
    t:=time.Now()
	update := bson.D{{
		"$set", bson.D{
			{"occupied", true},
		{"now",t},
		}},
	}

	updateResult, err := c.UpdateOne(context.TODO(), filter, update)
	if err != nil {
		log.Fatal(err)
		return false
	}

	fmt.Printf("Matched %v documents and updated %v documents.\n", updateResult.MatchedCount, updateResult.ModifiedCount)
	return true
}
