output "arn" {
    description = "ARN of the lambda"
    value = aws_lambda_function.lambda_function.arn
}

output "function_name" {
    description = "Name of the lambda"
    value = aws_lambda_function.lambda_function.function_name
}