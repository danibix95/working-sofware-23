package customerrors

import "fmt"

type CustomError interface {
	Code() string
	Explanation() string
	GetCause() error
	Error() string
	String() string
}

type ExampleError struct {
	Cause error
}

func (ee *ExampleError) Code() string {
	return EX_GO_E0001
}

func (ee *ExampleError) Explanation() string {
	return ErrorCodeDescription[EX_GO_E0001]
}

func (ee *ExampleError) GetCause() error {
	return ee.Cause
}

func (ee *ExampleError) Error() string {
	return fmt.Sprintf("%s %s %v", ee.Code(), ee.Explanation(), ee.GetCause())
}

func (ee *ExampleError) String() string {
	return ee.Error()
}
