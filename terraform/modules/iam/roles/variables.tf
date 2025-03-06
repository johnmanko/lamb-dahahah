variable "aws_region" {
  description = "AWS region"
  type = string
}

variable "lambda_role_name" {
  description = "Name of the IAM role"
  type = string
  default = "portfolio-lambdahahah-lambda-role"
}

variable "tags" {
    description = "Tags for the lambda role"
    type = map(string)
}