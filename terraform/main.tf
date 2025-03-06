module "iam_roles" {
  source = "./modules/iam/roles"
  aws_region = var.aws_region
  tags = var.tags 
}

module "lambdas" {
  source = "./modules/lambdas"
  aws_region = var.aws_region
  tags = var.tags  
  role_arn = module.iam_roles.lambda_role_arn
  s3_bucket_name = var.s3_bucket_name
  s3_bucket_key_prefix = var.s3_bucket_key_prefix
  cloudwatch_log_group_name = var.cloudwatch_log_group_name
  cloudwatch_log_match_regex = var.cloudwatch_log_match_regex
}

