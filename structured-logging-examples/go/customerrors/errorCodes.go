package customerrors

type ErrorCode string

const EX_GO_E0001 = "EX_GO_E0001"

var ErrorCodeDescription = map[ErrorCode]string{
	EX_GO_E0001: "this is an example of error code",
}
