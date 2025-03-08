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

  tags = merge(
    {
      // Custom ID for the lambda function URL with LocalStack
      // https://docs.localstack.cloud/user-guide/aws/lambda/
      "_custom_id_" = var.lambda_function_name
    },
    var.tags
  )
  
}

resource "aws_lambda_function_url" "lambda_url" {
  depends_on = [aws_lambda_function.lambda_function] 
  count               = var.enable_lambda_url ? 1 : 0  # If true, create; if false, do nothing
  function_name       = aws_lambda_function.lambda_function.function_name
  authorization_type  = "NONE"  # "NONE" makes it publicly accessible

  cors {
    allow_credentials = false
    allow_origins     = ["*", "http://localhost:4200"]  # Allow all origins (Can be restricted)
    allow_methods     = ["GET", "OPTIONS"]  # Allow GET and OPTIONS methods
  }
}

# Allow Public Access to the Lambda URL
resource "aws_lambda_permission" "allow_public_access" {
  depends_on = [aws_lambda_function.lambda_function] 
  count         = var.enable_lambda_url ? 1 : 0
  statement_id  = "AllowPublicAccess"
  action        = "lambda:InvokeFunctionUrl"
  function_name = aws_lambda_function.lambda_function.function_name
  principal     = "*"
}