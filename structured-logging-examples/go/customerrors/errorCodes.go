package customerrors

type ErrorCode int

const EX_GO_E0001 = "EX_GO_E0001"

var ErrorCodeDescription = map[string]string{
	EX_GO_E0001: "this is an example of error code",
}
