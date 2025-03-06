output "s3_bucket_arn" {
    description = "ARN of the s3 bucket"
    value = aws_s3_bucket.lambdahahah_bucket.arn
}