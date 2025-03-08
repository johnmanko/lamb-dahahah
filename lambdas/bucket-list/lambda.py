import os
import boto3
import json
import logging

# https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3/client/list_objects_v2.html

s3 = boto3.client('s3')
logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):

    BUCKET_NAME = os.environ.get("BUCKET_NAME")
    BUCKET_KEY_PREFIX = os.environ.get("BUCKET_KEY_PREFIX")

    response = s3.list_objects_v2(Bucket=BUCKET_NAME, Prefix=BUCKET_KEY_PREFIX)

    files = []

    if 'Contents' in response:
        for obj in response['Contents']:
            if BUCKET_KEY_PREFIX == obj['Key']:
                continue
            if 'LastModified' in obj:
                obj['LastModified'] = obj['LastModified'].isoformat()
            files.append({
                'lastModified': obj['LastModified'],
                'size': obj['Size'],
                'key': obj['Key']
            })

    headers = {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'OPTIONS,GET'
    }
    
    return {
        'statusCode': 200,
        "headers": headers,
        'body': json.dumps(files)
    }

    