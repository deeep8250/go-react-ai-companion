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
	Id        uint          `gorm:"primaryKey" json:"id"`
	UserId    uint          `gorm:"index" json:"userId"`
	Name      string        `json:"name"`
	Backstory string        `json:"backstory"`
	Avatar    string        `json:"avatar"`
	Mood      Moods         `json:"mood"`
	Sliders   SlidersStruct `json:"sliders"`
	CreatedAt time.Time     `json:"createdAt"`
	UpdatedAt time.Time     `json:"updatedAt"`
}

type SlidersStruct struct {
	Empathy    int `json:"empathy"`
	Humor      int `json:"humor"`
	Aggression int `json:"aggression"`
	Wisdom     int `json:"wisdom"`
}

type Moods struct {
	Label string `json:"label"`
	Emoji string `json:"emoji"`
}
