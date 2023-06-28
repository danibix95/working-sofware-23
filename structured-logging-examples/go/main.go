package main

import (
	"fmt"
	"os"

	"golang.org/x/exp/slog"

	"loggin-example/customerrors"
)

func main() {
	logger := slog.New(slog.NewJSONHandler(os.Stdout, nil))

	logger.Info("hello from Working Software conference")

	ee := customerrors.ExampleError{Cause: fmt.Errorf("this is an intended error")}
	logger.Error(
		"example of error",
		slog.String("code", ee.Code()),
		slog.String("explanation", ee.Explanation()),
		slog.Any("cause", ee.GetCause()),
	)
}
