package handlers

import (
	"Ai_Companion/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Health(c *gin.Context) {
	var User models.Ai
	err := c.ShouldBindJSON(&User)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"reponse": User,
	})
}
