package models

import "time"

type Login struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type CreateNew struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type User struct {
	Id        uint      `gorm:"primaryKey" json:"id"`
	Name      string    `json:"name"`
	Email     string    `json:"email" gorm:"unique"`
	Password  string    `json:"-"`
	Ai        []Ai      `gorm:"foreignKey:UserId;references:Id; constraint:OnUpdate:CASCADE,OnDelete:SET NULL;" json:"ais"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

type Ai struct {
	Id         uint      `gorm:"primaryKey" json:"id"`
	UserId     uint      `gorm:"index" json:"userId"`
	Name       string    `json:"name"`
	Backstory  string    `json:"backstory"`
	Mood       string    `json:"mood"`
	Humor      int       `json:"humor"`
	Aggression int       `json:"aggression"`
	Wisdom     int       `json:"wisdom"`
	Empathy    int       `json:"empathy"`
	CreatedAt  time.Time `json:"createdAt"`
	UpdatedAt  time.Time `json:"updatedAt"`
}
