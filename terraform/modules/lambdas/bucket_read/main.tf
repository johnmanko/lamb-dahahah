# Module for creating a lambda function that will be updated with a proper code update
# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_function

resource "aws_lambda_function" "lambda_function" {

  function_name     = var.lambda_function_name
  runtime           = var.runtime
  handler           = var.handler
  role              = var.role_arn
  filename          = var.filename
  source_code_hash  = var.source_code_hash

  environment {
    variables = var.environment_variables
  }

  tags = var.tags
  
}