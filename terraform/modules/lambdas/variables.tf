variable "aws_region" {
    description = "AWS region"
    type = string
}

variable "tags" {
    description = "Tags for the lambda function"
    type = map(string)
}

variable "role_arn" {
  description = "Name of the IAM role ARN"
  type = string
}

variable "s3_bucket_name" {
    description = "Name of the S3 bucket"
    type = string
}

variable "s3_bucket_key_prefix" {
    description = "Key Prefix of the S3 bucket"
    type = string
}

variable "cloudwatch_log_group_name" {
    description = "Name of the Cloudwatch log group"
    type = string
}

variable "cloudwatch_log_match_regex" {
    description = "Lambda bucket read regex"
    type = string
}
