package db

import "time"

//Data is structure
type Data struct {
	Now      time.Time
	Then     time.Time
	Boxno    int
	Occupied bool
}
