import json
import os
import logging

from lib.util import read_s3_object_if_text

# https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3/client/list_objects_v2.html

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    
    query_params = event.get('queryStringParameters', {})
    
    BUCKET_NAME = os.environ.get("BUCKET_NAME")
    OBJECT_KEY = query_params.get('key')

    content = None
    headers = {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'OPTIONS,GET'
    }

    if BUCKET_NAME == None or OBJECT_KEY == None:
        return {
            'statusCode': 404,
            'headers': headers,
            'body': json.dumps("Bucket or Object not valid")
        }

    try:
        content = read_s3_object_if_text(BUCKET_NAME, OBJECT_KEY)

    except Exception as e:
        logger.info(msg=e)
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps("Error reading object")
        }

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps(content)
    }


    