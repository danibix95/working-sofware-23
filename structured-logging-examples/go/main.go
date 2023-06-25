package main

import (
	"fmt"
	"os"

	"golang.org/x/exp/slog"
)

func main() {
	logger := slog.New(slog.NewJSONHandler(os.Stdout, nil))

	logger.Info("hello from Working Software conference")
	logger.Error(
		"example of error",
		"cause", fmt.Errorf("this error was intended"),
	)
}
