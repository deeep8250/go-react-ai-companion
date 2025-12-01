package routes

import (
	"Ai_Companion/handlers"

	"github.com/gin-gonic/gin"
)

func Routes(c *gin.Engine) {
	c.POST("/health", handlers.AddUser)
	c.GET("/get", handlers.GetUser)

}
