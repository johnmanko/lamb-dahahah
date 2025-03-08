variable "aws_region" {
  description = "AWS region"
  type = string
}

variable "role_arn" {
  description = "Name of the IAM role ARN"
  type = string
}

variable "filename" {
    description = "value of the lambda zip file"
    type = string
}

variable "source_code_hash" {
    description = "Hash of the lambda zip file"
    type = string
}

variable "tags" {
    description = "Tags for the lambda function"
    type = map(string)
}

variable "lambda_function_name" {
  description = "Lambda function name"
  type        = string
  default     = "lambdahahah-logread"
}

variable "runtime" {
    description = "Lambda runtime"
    type = string
    default = "python3.12"
}

variable "handler" {
    description = "Lambda handler"
    type = string
    default = "lambda.lambda_handler"
}

variable "environment_variables" {
    description = "Environment variables for the lambda function"
    type = map(string)
}
variable "enable_lambda_url" {
  description = "Enable the lambda url"
  type    = bool
}