![Lamb-dahahah](./header.webp "Lamb-dahahah")

## Preparation

Install any dependencies (if your function uses external libraries). Use a virtual environment for this:

```
python3 -m venv .venv
source .venv/bin/activate
```

### Terraform Create/Update



### Manually Create/Update

Available Lambda functions:

* `hello` - A randomized multilingual "Hello World"
* `bucket_list` - Lists objects in a pre-defined bucket and prefix
* `bucket_read` - Reads an object from a pre-defined bucket
* `logread` - Reads CloudWatch logs 

```shell
❯ AWS_CMD="awslocal" ./lambda-install.sh hello
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
❯ awslocal lambda list-functions  --query 'Functions[].{Name:FunctionName, Runtime:Runtime}' --output table
-------------------------------------
|           ListFunctions           |
+--------------------+--------------+
|        Name        |   Runtime    |
+--------------------+--------------+
|  lambdahahah-hello |  python3.12  |
+--------------------+--------------+
```

2. Invoke the function to test it:

```shell
❯ awslocal lambda invoke --function-name lambdahahah-hello results.json
{
    "StatusCode": 200,
    "ExecutedVersion": "$LATEST"
}
❯ cat results.json
{"translation": "こんにちは、世界！", "language": "Japanese", "requestId": "5b6cb3b9-2b97-43f2-aa05-885e9971948d"}%
```

3. Clean up

```shell
❯ awslocal lambda delete-function --function-name lambdahahah-hello
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
