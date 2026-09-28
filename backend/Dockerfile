# syntax=docker/dockerfile:1

FROM golang:1.26-alpine AS build
WORKDIR /src
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -trimpath -ldflags="-s -w" -o /out/server .

FROM alpine:3.22
RUN apk add --no-cache ca-certificates tzdata
WORKDIR /app
COPY --from=build /out/server /app/server
# main.go loads a .env file unconditionally, so create an empty one and rely on
# the real configuration being injected through the container environment.
RUN touch /app/.env
EXPOSE 8800
ENTRYPOINT ["/app/server"]
