aws_region = "us-east-2"
s3_bucket_name = "my_bucket_name"
s3_bucket_key_prefix = "logs/"
cloudwatch_log_group_name = "/aws/lambda/{function_name}"
cloudwatch_log_match_regex = "(?i)Billed"
enable_lambda_url = false