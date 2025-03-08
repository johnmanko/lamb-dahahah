output "arn" {
    description = "ARN of the lambda"
    value = aws_lambda_function.lambda_function.arn
}

output "function_name" {
    description = "Name of the lambda"
    value = aws_lambda_function.lambda_function.function_name
}
output "function_url" {
    description = "Name of the lambda"
    value = length(aws_lambda_function_url.lambda_url) > 0 ? aws_lambda_function_url.lambda_url[0].function_url : null
}
