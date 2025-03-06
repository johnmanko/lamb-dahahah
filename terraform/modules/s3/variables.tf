variable "aws_region" {
    description = "AWS region"
    type = string
}

variable "tags" {
    description = "Tags for the lambda function"
    type = map(string)
}

variable "s3_bucket_name" {
    description = "Name of the S3 bucket"
    type = string
}