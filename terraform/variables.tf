variable "aws_region" {
    description = "AWS region"
    default = "us-east-2"
}

variable "tags" {
    description = "Tags to apply to all resources"
    type = map(string)
    default = {
        Owner = "John Manko"
        Environment = "dev"
        AppGroup = "Portfolio"
        App = "Lambdahahah"
        Repo = "lamb-dahahah"
    }
  
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
