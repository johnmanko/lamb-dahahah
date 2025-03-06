terraform {
    # Terraform/OpenTofu version
    required_version = ">= 1.9.0" 
    required_providers {
        aws = {
            source  = "hashicorp/aws"
            # HashiCorp Terraform AWS provider version
            # https://registry.terraform.io/providers/hashicorp/aws/latest
            version = "~> 5.89.0"
        }
    }
}

provider "aws" {
  region = var.aws_region
  
}