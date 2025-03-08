# Some different techniques for handling lambda functions in Terraform
# https://www.reddit.com/r/aws/comments/1d3e8ou/how_do_you_handle_lambdas_when_using_terraform/

# Create an empty lambda function that will be updated with a proper code update
data "archive_file" "lambda_zip" {
  type        = "zip"
  source_dir = "${path.root}/lambda_payload"
  output_path = "${path.root}/lambda.zip"
}

module "hello_lambda" {
  source = "./hello"
  aws_region = var.aws_region
  role_arn = var.role_arn
  filename = data.archive_file.lambda_zip.output_path
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256 
  tags = var.tags
  enable_lambda_url = var.enable_lambda_url
}

module "bucket_list_lambda" {
  source = "./bucket-list"
  aws_region = var.aws_region
  role_arn = var.role_arn
  filename = data.archive_file.lambda_zip.output_path
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256 
  tags = var.tags
  enable_lambda_url = var.enable_lambda_url
  environment_variables = {
    BUCKET_NAME = var.s3_bucket_name
    BUCKET_KEY_PREFIX = var.s3_bucket_key_prefix
  }
}

module "bucket_read_lambda" {
  source = "./bucket-read"
  aws_region = var.aws_region
  role_arn = var.role_arn
  filename = data.archive_file.lambda_zip.output_path
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256 
  tags = var.tags
  enable_lambda_url = var.enable_lambda_url
  environment_variables = {
    BUCKET_NAME = var.s3_bucket_name
  }
}

module "logread_lambda" {
  source = "./logread"
  aws_region = var.aws_region
  role_arn = var.role_arn
  filename = data.archive_file.lambda_zip.output_path
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256 
  tags = var.tags
  enable_lambda_url = var.enable_lambda_url
  environment_variables = {
    LOG_GROUP_NAME = var.cloudwatch_log_group_name
    REGEX_PATTERN = var.cloudwatch_log_match_regex
  }
}