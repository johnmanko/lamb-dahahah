output "lambda_role_arn" {
    description = "ARN of the lambda role"
    value = module.iam_roles.lambda_role_arn
}

output "lambda_hello_lambda_function_name" {
    description = "Name of the hello_lambda lambda function"
    value = module.lambdas.lambda_hello_lambda_function_name
}

output "lambda_hello_lambda_function_arn" {
    description = "ARN of the hello lambda function"
    value = module.lambdas.lambda_hello_lambda_function_arn
}

output "lambda_hello_lambda_function_url" {
    description = "URL of the hello lambda function"
    value = module.lambdas.lambda_hello_lambda_function_url
}

output "lambda_logread_lambda_function_name" {
    description = "Name of the logread_lambda lambda function"
    value = module.lambdas.lambda_logread_lambda_function_name
}

output "lambda_logread_lambda_function_arn" {
    description = "ARN of the logread_lambda lambda function"
    value = module.lambdas.lambda_logread_lambda_function_arn
}

output "lambda_logread_lambda_function_url" {
    description = "URL of the logread_lambda lambda function"
    value = module.lambdas.lambda_logread_lambda_function_url
}

output "lambda_bucket_list_lambda_function_name" {
    description = "Name of the bucket_list_lambda lambda function"
    value = module.lambdas.lambda_bucket_list_lambda_function_name
}

output "lambda_bucket_list_lambda_function_arn" {
    description = "ARN of the bucket_list_lambda lambda function"
    value = module.lambdas.lambda_bucket_list_lambda_function_arn
}

output "lambda_bucket_list_lambda_function_url" {
    description = "URL of the bucket_list_lambda lambda function"
    value = module.lambdas.lambda_bucket_list_lambda_function_url
}
output "lambda_bucket_read_lambda_function_name" {
    description = "Name of the bucket_read_lambda lambda function"
    value = module.lambdas.lambda_bucket_read_lambda_function_name
}

output "lambda_bucket_read_lambda_function_arn" {
    description = "ARN of the bucket_read_lambda lambda function"
    value = module.lambdas.lambda_bucket_read_lambda_function_arn
}

output "lambda_bucket_read_lambda_function_url" {
    description = "URL of the bucket_read_lambda lambda function"
    value = module.lambdas.lambda_bucket_read_lambda_function_url
}