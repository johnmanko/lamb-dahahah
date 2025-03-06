![Lamb-dahahah](./header.webp "Lamb-dahahah")

## Preparation

Install any dependencies (if your function uses external libraries). Use a virtual environment for this:

```
python3 -m venv .venv
source .venv/bin/activate
```

### Terraform Create/Update

Review the Terraform AWS Provider [documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs) for details on how to configure resources.

Install `OpenTofu` and `terraform-local` (if using [LocalStack](https://www.localstack.cloud/))
```shell
brew install opentofu
brew install terraform-local
```

Customize `example.tfvars`:
```terraform
aws_region = "us-east-2"
s3_bucket_name = "my_bucket_name"
s3_bucket_key_prefix = "logs/"
cloudwatch_log_group_name = "/aws/lambda/{function_name}"
cloudwatch_log_match_regex = "(?i)Billed"
```

From within `./terraform`, initialize the state:
```shell
cd ./terraform
tofu init
```

Validate the IaS:
```shell
tofu validate -var-file dev.tfvars
Success! The configuration is valid.
```

View the provisioning plan:
```shell
tofu plan -var-files=dev.tfvars
```

or 

```shell
TF_CMD=tofu tflocal plan -var-file=dev.tfvars
```

If using LocalStack, you can apply like such:
```shell
TF_CMD=tofu tflocal apply -var-file=dev.tfvars
```

---

<details>
  <summary>Expand To View "apply" Output</summary>

```shell
module.lambdas.data.archive_file.lambda_zip: Reading...
module.lambdas.data.archive_file.lambda_zip: Read complete after 0s [id=9e3a86ffbe84d62d4991d3ec98129bc938f30eac]

OpenTofu used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

OpenTofu will perform the following actions:

  # module.iam_roles.aws_iam_role.lambda_role will be created
  + resource "aws_iam_role" "lambda_role" {
      + arn                   = (known after apply)
      + assume_role_policy    = jsonencode(
            {
              + Statement = [
                  + {
                      + Action    = "sts:AssumeRole"
                      + Effect    = "Allow"
                      + Principal = {
                          + Service = "lambda.amazonaws.com"
                        }
                    },
                ]
              + Version   = "2012-10-17"
            }
        )
      + create_date           = (known after apply)
      + force_detach_policies = false
      + id                    = (known after apply)
      + managed_policy_arns   = (known after apply)
      + max_session_duration  = 3600
      + name                  = "portfolio-lambdahahah-lambda-role"
      + name_prefix           = (known after apply)
      + path                  = "/"
      + tags                  = {
          + "App"         = "Lambdahahah"
          + "AppGroup"    = "Portfolio"
          + "Environment" = "dev"
          + "Owner"       = "John Manko"
          + "Repo"        = "lamb-dahahah"
        }
      + tags_all              = {
          + "App"         = "Lambdahahah"
          + "AppGroup"    = "Portfolio"
          + "Environment" = "dev"
          + "Owner"       = "John Manko"
          + "Repo"        = "lamb-dahahah"
        }
      + unique_id             = (known after apply)

      + inline_policy (known after apply)
    }

  # module.lambdas.module.bucket_list_lambda.aws_lambda_function.lambda_function will be created
  + resource "aws_lambda_function" "lambda_function" {
      + architectures                  = (known after apply)
      + arn                            = (known after apply)
      + code_sha256                    = (known after apply)
      + filename                       = "./lambda.zip"
      + function_name                  = "lambdahahah-bucket_list"
      + handler                        = "lambda.lambda_handler"
      + id                             = (known after apply)
      + invoke_arn                     = (known after apply)
      + last_modified                  = (known after apply)
      + memory_size                    = 128
      + package_type                   = "Zip"
      + publish                        = false
      + qualified_arn                  = (known after apply)
      + qualified_invoke_arn           = (known after apply)
      + reserved_concurrent_executions = -1
      + role                           = (known after apply)
      + runtime                        = "python3.12"
      + signing_job_arn                = (known after apply)
      + signing_profile_version_arn    = (known after apply)
      + skip_destroy                   = false
      + source_code_hash               = "o9Q3GTobgPf881UpTgn33oi65MnFCYZjG0ZcSDZ0xm4="
      + source_code_size               = (known after apply)
      + tags                           = {
          + "App"         = "Lambdahahah"
          + "AppGroup"    = "Portfolio"
          + "Environment" = "dev"
          + "Owner"       = "John Manko"
          + "Repo"        = "lamb-dahahah"
        }
      + tags_all                       = {
          + "App"         = "Lambdahahah"
          + "AppGroup"    = "Portfolio"
          + "Environment" = "dev"
          + "Owner"       = "John Manko"
          + "Repo"        = "lamb-dahahah"
        }
      + timeout                        = 3
      + version                        = (known after apply)

      + environment {
          + variables = {
              + "BUCKET_KEY_PREFIX" = "logs/"
              + "BUCKET_NAME"       = "com.johnmanko.portfolio.lambdahahah"
            }
        }

      + ephemeral_storage (known after apply)

      + logging_config (known after apply)

      + tracing_config (known after apply)
    }

  # module.lambdas.module.bucket_read_lambda.aws_lambda_function.lambda_function will be created
  + resource "aws_lambda_function" "lambda_function" {
      + architectures                  = (known after apply)
      + arn                            = (known after apply)
      + code_sha256                    = (known after apply)
      + filename                       = "./lambda.zip"
      + function_name                  = "lambdahahah-bucket_read"
      + handler                        = "lambda.lambda_handler"
      + id                             = (known after apply)
      + invoke_arn                     = (known after apply)
      + last_modified                  = (known after apply)
      + memory_size                    = 128
      + package_type                   = "Zip"
      + publish                        = false
      + qualified_arn                  = (known after apply)
      + qualified_invoke_arn           = (known after apply)
      + reserved_concurrent_executions = -1
      + role                           = (known after apply)
      + runtime                        = "python3.12"
      + signing_job_arn                = (known after apply)
      + signing_profile_version_arn    = (known after apply)
      + skip_destroy                   = false
      + source_code_hash               = "o9Q3GTobgPf881UpTgn33oi65MnFCYZjG0ZcSDZ0xm4="
      + source_code_size               = (known after apply)
      + tags                           = {
          + "App"         = "Lambdahahah"
          + "AppGroup"    = "Portfolio"
          + "Environment" = "dev"
          + "Owner"       = "John Manko"
          + "Repo"        = "lamb-dahahah"
        }
      + tags_all                       = {
          + "App"         = "Lambdahahah"
          + "AppGroup"    = "Portfolio"
          + "Environment" = "dev"
          + "Owner"       = "John Manko"
          + "Repo"        = "lamb-dahahah"
        }
      + timeout                        = 3
      + version                        = (known after apply)

      + environment {
          + variables = {
              + "BUCKET_NAME" = "com.johnmanko.portfolio.lambdahahah"
            }
        }

      + ephemeral_storage (known after apply)

      + logging_config (known after apply)

      + tracing_config (known after apply)
    }

  # module.lambdas.module.hello_lambda.aws_lambda_function.lambda_function will be created
  + resource "aws_lambda_function" "lambda_function" {
      + architectures                  = (known after apply)
      + arn                            = (known after apply)
      + code_sha256                    = (known after apply)
      + filename                       = "./lambda.zip"
      + function_name                  = "lambdahahah-hello"
      + handler                        = "lambda.lambda_handler"
      + id                             = (known after apply)
      + invoke_arn                     = (known after apply)
      + last_modified                  = (known after apply)
      + memory_size                    = 128
      + package_type                   = "Zip"
      + publish                        = false
      + qualified_arn                  = (known after apply)
      + qualified_invoke_arn           = (known after apply)
      + reserved_concurrent_executions = -1
      + role                           = (known after apply)
      + runtime                        = "python3.12"
      + signing_job_arn                = (known after apply)
      + signing_profile_version_arn    = (known after apply)
      + skip_destroy                   = false
      + source_code_hash               = "o9Q3GTobgPf881UpTgn33oi65MnFCYZjG0ZcSDZ0xm4="
      + source_code_size               = (known after apply)
      + tags                           = {
          + "App"         = "Lambdahahah"
          + "AppGroup"    = "Portfolio"
          + "Environment" = "dev"
          + "Owner"       = "John Manko"
          + "Repo"        = "lamb-dahahah"
        }
      + tags_all                       = {
          + "App"         = "Lambdahahah"
          + "AppGroup"    = "Portfolio"
          + "Environment" = "dev"
          + "Owner"       = "John Manko"
          + "Repo"        = "lamb-dahahah"
        }
      + timeout                        = 3
      + version                        = (known after apply)

      + environment {
          + variables = {
              + "NOT_USED" = "NOT_USED"
            }
        }

      + ephemeral_storage (known after apply)

      + logging_config (known after apply)

      + tracing_config (known after apply)
    }

  # module.lambdas.module.logread_lambda.aws_lambda_function.lambda_function will be created
  + resource "aws_lambda_function" "lambda_function" {
      + architectures                  = (known after apply)
      + arn                            = (known after apply)
      + code_sha256                    = (known after apply)
      + filename                       = "./lambda.zip"
      + function_name                  = "lambdahahah-logread"
      + handler                        = "lambda.lambda_handler"
      + id                             = (known after apply)
      + invoke_arn                     = (known after apply)
      + last_modified                  = (known after apply)
      + memory_size                    = 128
      + package_type                   = "Zip"
      + publish                        = false
      + qualified_arn                  = (known after apply)
      + qualified_invoke_arn           = (known after apply)
      + reserved_concurrent_executions = -1
      + role                           = (known after apply)
      + runtime                        = "python3.12"
      + signing_job_arn                = (known after apply)
      + signing_profile_version_arn    = (known after apply)
      + skip_destroy                   = false
      + source_code_hash               = "o9Q3GTobgPf881UpTgn33oi65MnFCYZjG0ZcSDZ0xm4="
      + source_code_size               = (known after apply)
      + tags                           = {
          + "App"         = "Lambdahahah"
          + "AppGroup"    = "Portfolio"
          + "Environment" = "dev"
          + "Owner"       = "John Manko"
          + "Repo"        = "lamb-dahahah"
        }
      + tags_all                       = {
          + "App"         = "Lambdahahah"
          + "AppGroup"    = "Portfolio"
          + "Environment" = "dev"
          + "Owner"       = "John Manko"
          + "Repo"        = "lamb-dahahah"
        }
      + timeout                        = 3
      + version                        = (known after apply)

      + environment {
          + variables = {
              + "LOG_GROUP_NAME" = "/aws/lambda/lambdahahah_hello"
              + "REGEX_PATTERN"  = "(?i)Billed"
            }
        }

      + ephemeral_storage (known after apply)

      + logging_config (known after apply)

      + tracing_config (known after apply)
    }

Plan: 5 to add, 0 to change, 0 to destroy.

Changes to Outputs:
  + lambda_bucket_list_lambda_function_arn  = (known after apply)
  + lambda_bucket_list_lambda_function_name = "lambdahahah-bucket_list"
  + lambda_bucket_read_lambda_function_arn  = (known after apply)
  + lambda_bucket_read_lambda_function_name = "lambdahahah-bucket_read"
  + lambda_hello_lambda_function_arn        = (known after apply)
  + lambda_hello_lambda_function_name       = "lambdahahah-hello"
  + lambda_logread_lambda_function_arn      = (known after apply)
  + lambda_logread_lambda_function_name     = "lambdahahah-logread"
  + lambda_role_arn                         = (known after apply)

Do you want to perform these actions?
  OpenTofu will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes 

module.iam_roles.aws_iam_role.lambda_role: Creating...
module.iam_roles.aws_iam_role.lambda_role: Creation complete after 0s [id=portfolio-lambdahahah-lambda-role]
module.lambdas.module.hello_lambda.aws_lambda_function.lambda_function: Creating...
module.lambdas.module.logread_lambda.aws_lambda_function.lambda_function: Creating...
module.lambdas.module.bucket_list_lambda.aws_lambda_function.lambda_function: Creating...
module.lambdas.module.bucket_read_lambda.aws_lambda_function.lambda_function: Creating...
module.lambdas.module.bucket_read_lambda.aws_lambda_function.lambda_function: Creation complete after 5s [id=lambdahahah-bucket_read]
module.lambdas.module.hello_lambda.aws_lambda_function.lambda_function: Still creating... [10s elapsed]
module.lambdas.module.logread_lambda.aws_lambda_function.lambda_function: Still creating... [10s elapsed]
module.lambdas.module.bucket_list_lambda.aws_lambda_function.lambda_function: Still creating... [10s elapsed]
module.lambdas.module.hello_lambda.aws_lambda_function.lambda_function: Creation complete after 10s [id=lambdahahah-hello]
module.lambdas.module.logread_lambda.aws_lambda_function.lambda_function: Creation complete after 16s [id=lambdahahah-logread]
module.lambdas.module.bucket_list_lambda.aws_lambda_function.lambda_function: Still creating... [20s elapsed]
module.lambdas.module.bucket_list_lambda.aws_lambda_function.lambda_function: Creation complete after 21s [id=lambdahahah-bucket_list]

Apply complete! Resources: 5 added, 0 changed, 0 destroyed.

Outputs:

lambda_bucket_list_lambda_function_arn = "arn:aws:lambda:us-east-2:000000000000:function:lambdahahah-bucket_list"
lambda_bucket_list_lambda_function_name = "lambdahahah-bucket_list"
lambda_bucket_read_lambda_function_arn = "arn:aws:lambda:us-east-2:000000000000:function:lambdahahah-bucket_read"
lambda_bucket_read_lambda_function_name = "lambdahahah-bucket_read"
lambda_hello_lambda_function_arn = "arn:aws:lambda:us-east-2:000000000000:function:lambdahahah-hello"
lambda_hello_lambda_function_name = "lambdahahah-hello"
lambda_logread_lambda_function_arn = "arn:aws:lambda:us-east-2:000000000000:function:lambdahahah-logread"
lambda_logread_lambda_function_name = "lambdahahah-logread"
lambda_role_arn = "arn:aws:iam::000000000000:role/portfolio-lambdahahah-lambda-role"
```
</details>

---

Update the function(s) with the correct code:
```shell
./lambda-install.sh hello
./lambda-install.sh logread
./lambda-install.sh bucket_list
./lambda-install.sh bucket_read
```

Test:
```shell
awslocal lambda invoke --function-name lambdahahah-hello results.json
cat results.json
```

```shell
awslocal s3 ls
2025-03-06 01:28:46 my_bucket_name
```

```shell
awslocal s3 ls s3://my_bucket_name --recursive
2025-03-06 12:48:23      20746 logs/server_01.log
2025-03-06 12:48:23      20743 logs/server_02.log
2025-03-06 12:48:23      21060 logs/server_03.log
2025-03-06 12:48:23      21135 logs/server_04.log
2025-03-06 12:48:23      20701 logs/server_05.log
2025-03-06 12:48:23      20604 logs/server_06.log
2025-03-06 12:48:23      20817 logs/server_07.log
2025-03-06 12:48:23      20994 logs/server_08.log
2025-03-06 12:48:23      20934 logs/server_09.log
2025-03-06 12:48:23      20943 logs/server_10.log
2025-03-06 12:48:23      20885 logs/server_11.log
2025-03-06 12:48:23      20872 logs/server_12.log
2025-03-06 12:48:23      20920 logs/server_13.log
2025-03-06 12:48:23      21055 logs/server_14.log
2025-03-06 12:48:23      20569 logs/server_15.log
2025-03-06 12:48:23      21017 logs/server_16.log
2025-03-06 12:48:23      21193 logs/server_17.log
2025-03-06 12:48:23      20696 logs/server_18.log
2025-03-06 12:48:23      20782 logs/server_19.log
2025-03-06 12:48:23      20918 logs/server_20.log
```

### Manually Create/Update

Available Lambda functions:

* `hello` - A randomized multilingual "Hello World"
* `bucket_list` - Lists objects in a pre-defined bucket and prefix
* `bucket_read` - Reads an object from a pre-defined bucket
* `logread` - Reads CloudWatch logs 

```shell
AWS_CMD="awslocal" ./lambda-install.sh hello
arn:aws:iam::000000000000:role/lambdahahah-execution-role

[notice] A new release of pip is available: 25.0 -> 25.0.1
[notice] To update, run: pip install --upgrade pip
  adding: lambda.py (deflated 55%)
  adding: lib/ (stored 0%)
  adding: lib/translations.py (deflated 32%)
{
    "FunctionName": "lambdahahah-hello",
    "FunctionArn": "arn:aws:lambda:us-east-2:000000000000:function:lambdahahah-hello",
    "Runtime": "python3.12",
    "Role": "arn:aws:iam::000000000000:role/lambdahahah-execution-role",
    "Handler": "lambda.lambda_handler",
    "CodeSize": 1392,
    "Description": "",
    "Timeout": 3,
    "MemorySize": 128,
    "LastModified": "2025-03-05T23:53:11.658613+0000",
    "CodeSha256": "atzrszSMPN66m/6hJyQL9kzoE87HiccG6iWiXPVD+5A=",
    "Version": "$LATEST",
    "Environment": {
        "Variables": {
            "UNUSED_ENV_VAR": "unused"
        }
    },
    "TracingConfig": {
        "Mode": "PassThrough"
    },
    "RevisionId": "845fe971-3ff8-4222-baa3-5d082cc9ede6",
    "State": "Pending",
    "StateReason": "The function is being created.",
    "StateReasonCode": "Creating",
    "PackageType": "Zip",
    "Architectures": [
        "x86_64"
    ],
    "EphemeralStorage": {
        "Size": 512
    },
    "SnapStart": {
        "ApplyOn": "None",
        "OptimizationStatus": "Off"
    },
    "RuntimeVersionConfig": {
        "RuntimeVersionArn": "arn:aws:lambda:us-east-2::runtime:8eeff65f6809a3ce81507fe733fe09b835899b99481ba22fd75b5a7338290ec1"
    },
    "LoggingConfig": {
        "LogFormat": "Text",
        "LogGroup": "/aws/lambda/lambdahahah-hello"
    }
}
```

## Verify

1. Check the function details to verify that it was created successfully:

```shell
awslocal lambda list-functions  --query 'Functions[].{Name:FunctionName, Runtime:Runtime}' --output table

-------------------------------------------
|              ListFunctions              |
+--------------------------+--------------+
|           Name           |   Runtime    |
+--------------------------+--------------+
|  lambdahahah-bucket_read |  python3.12  |
|  lambdahahah-hello       |  python3.12  |
|  lambdahahah-logread     |  python3.12  |
|  lambdahahah-bucket_list |  python3.12  |
+--------------------------+--------------+
```

2. Invoke the function to test it:

```shell
awslocal lambda invoke --function-name lambdahahah-hello results.json
{
    "StatusCode": 200,
    "ExecutedVersion": "$LATEST"
}
cat results.json
{"translation": "こんにちは、世界！", "language": "Japanese", "requestId": "5b6cb3b9-2b97-43f2-aa05-885e9971948d"}%
```

```shell
awslocal lambda invoke --function-name lambdahahah-bucket_list results.json
cat results.json | jq .
{
  "statusCode": 200,
  "headers": {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "OPTIONS,GET"
  },
  "body": "[{\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 20746, \"key\": \"logs/server_01.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 20743, \"key\": \"logs/server_02.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 21060, \"key\": \"logs/server_03.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 21135, \"key\": \"logs/server_04.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 20701, \"key\": \"logs/server_05.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 20604, \"key\": \"logs/server_06.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 20817, \"key\": \"logs/server_07.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 20994, \"key\": \"logs/server_08.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 20934, \"key\": \"logs/server_09.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 20943, \"key\": \"logs/server_10.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 20885, \"key\": \"logs/server_11.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 20872, \"key\": \"logs/server_12.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 20920, \"key\": \"logs/server_13.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 21055, \"key\": \"logs/server_14.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 20569, \"key\": \"logs/server_15.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 21017, \"key\": \"logs/server_16.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 21193, \"key\": \"logs/server_17.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 20696, \"key\": \"logs/server_18.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 20782, \"key\": \"logs/server_19.log\"}, {\"lastModified\": \"2025-03-06T17:48:23+00:00\", \"size\": 20918, \"key\": \"logs/server_20.log\"}]"
}
```

3. Clean up

```shell
awslocal lambda delete-function --function-name lambdahahah-hello
awslocal iam delete-role --role-name lambdahahah-execution-role
```

# Handler Parameters

The lambda handler accepts two parameters: `event` and `context`.

## `event` Object

Event Object Properties

The `event` object contains the input data that triggers the Lambda function. The structure and properties of the `event` object depend on the source of the invocation (e.g., API Gateway, S3, DynamoDB, etc.). Here are some common examples:

1. API Gateway Invocation:

* `httpMethod`: The HTTP method used (GET, POST, etc.).
* `path`: The path of the request.
* `headers`: A dictionary of HTTP headers.
* `queryStringParameters`: A dictionary of query string parameters.
* `body`: The body of the request (usually a JSON string).

2. S3 Event:

* `Records`: A list of records containing details about the S3 bucket and the object (e.g., bucket name, object key).

3. DynamoDB Stream Event:

* `Records`: A list of records, each containing details about changes to items in the DynamoDB table.

4. CloudWatch Events:

* `detail`: Details about the event that triggered the Lambda function.

Example of Event Object in API Gateway

Here’s an example of how the event object might look when invoked via API Gateway:

```json
{
    "httpMethod": "POST",
    "path": "/example",
    "headers": {
        "Content-Type": "application/json"
    },
    "queryStringParameters": {
        "key": "value"
    },
    "body": "{\"key\": \"value\"}"
}
```

## `context` Object

The `context` object contains information about the invocation, function, and execution environment. Key properties include:

* `aws_request_id`: A unique identifier for the invocation.
* `function_name`: The name of the Lambda function.
* `function_version`: The version of the function being invoked.
* `invoked_function_arn`: The ARN (Amazon Resource Name) of the function being invoked.
* `memory_limit_in_mb`: The amount of memory allocated to the function.
* `remaining_time_in_millis`: The amount of time remaining before the function times out (in milliseconds).
* `log_group_name`: The name of the CloudWatch log group for the function.
* `log_stream_name`: The name of the CloudWatch log stream for the current invocation.
* `identity`: Information about the Amazon Cognito identity (if applicable).
* `client_context`: Information about the client that invoked the function (if applicable).
