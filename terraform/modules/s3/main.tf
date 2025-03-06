resource "aws_s3_bucket" "lambdahahah_bucket" {
    bucket = var.s3_bucket_name
    tags = var.tags
}

# List all files in the "local-files/" directory
locals {
    logs = fileset("${path.module}/sample-logs/", "*.log") # Gets all files inside 'sample/'
}

# Upload each file dynamically
resource "aws_s3_object" "upload_files" {
    for_each = local.logs

    bucket = aws_s3_bucket.lambdahahah_bucket.id
    key    = "logs/${each.value}"  # S3 destination path
    source = "${path.module}/sample-logs/${each.value}"  # Local path
    etag   = filemd5("${path.module}/sample-logs/${each.value}")  # Ensures re-upload only if the file changes
}