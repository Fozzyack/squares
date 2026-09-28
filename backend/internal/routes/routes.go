package routes

import (
	"encoding/json"
	"net/http"
	"os"
	"strings"

	"github.com/Fozzyack/habit-tracker/internal/app"
	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"
)

func healthCheck(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"msg": "Server is Healthy!"})
}

func allowedOrigins() []string {
	if raw := strings.TrimSpace(os.Getenv("CORS_ALLOWED_ORIGINS")); raw != "" {
		origins := make([]string, 0, len(strings.Split(raw, ",")))
		for _, origin := range strings.Split(raw, ",") {
			if origin = strings.TrimSpace(origin); origin != "" {
				origins = append(origins, origin)
			}
		}
		if len(origins) > 0 {
			return origins
		}
	}

	origins := []string{"http://localhost:3000", "http://127.0.0.1:3000"}
	for _, key := range []string{"FRONTEND_URL", "FRONTEND_URL_DEV"} {
		if origin := strings.TrimSpace(os.Getenv(key)); origin != "" {
			origins = append(origins, origin)
		}
	}
	return origins
}

func SetupRoutes(app *app.Application) *chi.Mux {
	r := chi.NewRouter()

	ch := cors.Handler(cors.Options{
		AllowedOrigins:   allowedOrigins(),
		AllowedMethods:   []string{http.MethodGet, http.MethodPost, http.MethodPut, http.MethodDelete, http.MethodOptions},
		AllowedHeaders:   []string{"Accept", "Content-Type", "X-CSRF-Token"},
		AllowCredentials: true,
		MaxAge:           300,
	})

	r.Use(ch)
	r.Use(middleware.RequestID)
	r.Use(middleware.Logger)
	r.Use(middleware.RealIP)
	r.Use(middleware.Recoverer)

	r.Get("/health", healthCheck)
	r.Post("/users", app.UserHandler.HandleCreateUser)
	r.Post("/users/login", app.UserHandler.HandleLoginUser)
	r.Group(func(r chi.Router) {
		r.Use(CheckSession(app))
		r.Get("/users", app.UserHandler.HandleGetUserBySession)
		r.Put("/users", app.UserHandler.HandleUpdateUser)
		r.Delete("/users", app.UserHandler.HandleDeleteUser)
		r.Post("/habits", app.HabitHandler.HandleCreateHabit)
		r.Get("/habits", app.HabitHandler.HandleGetHabitsBySession)
		r.Get("/habits/logs", app.HabitHandler.HandleGetHabitLogsByDate)
		r.Get("/habits/{habitId}", app.HabitHandler.HandleGetHabitById)
		r.Get("/habits/{habitId}/records", app.HabitHandler.HandleGetHabitYearDailyCounts)
		r.Put("/habits/{habitId}", app.HabitHandler.HandleUpdateHabit)
		r.Delete("/habits/{habitId}", app.HabitHandler.HandleDeleteHabit)
		r.Post("/habits/{habitId}/record", app.HabitHandler.HandleRecordHabit)
		r.Delete("/habits/{habitId}/record", app.HabitHandler.HandleUndoHabit)
	})

	return r
}
