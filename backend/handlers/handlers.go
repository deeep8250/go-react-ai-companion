package handlers

import (
	"Ai_Companion/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

var UserAll []models.Ai

func AddUser(c *gin.Context) {

	var User models.Ai
	err := c.ShouldBindJSON(&User)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	UserAll = append(UserAll, User)

	c.JSON(http.StatusOK, gin.H{
		"reponse": UserAll,
	})
}

func GetUser(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"response": UserAll,
	})
}
