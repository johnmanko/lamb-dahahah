import boto3
import re
import os
import json

def lambda_handler(event, context):

    #function_name = "helloworld"
    log_group_name = os.environ.get("LOG_GROUP_NAME") #f"/aws/lambda/{function_name}"

    logs_client = boto3.client('logs')
    

    log_streams = logs_client.describe_log_streams(
        logGroupName=log_group_name,
        orderBy='LastEventTime',
        descending=True,
        limit=1
    )

    headers = {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'OPTIONS,GET'
    }

    regex_pattern = os.environ.get("REGEX_PATTERN") #r'(?i)error'
    regex_type = os.environ.get("REGEX_TYPE") #r'(?i)error'
        
    response = {
        'requestId': context.aws_request_id,
        'regexPattern': regex_pattern,
        'regexType': regex_type,
        'original': [],
        'augmented': []
    }

    statusCode = 404
   
    if log_streams['logStreams']:

        log_stream_name = log_streams['logStreams'][0]['logStreamName']
        print(log_stream_name)
        #print(log_streams['logStreams'][0])

        log_events = logs_client.get_log_events(
            logGroupName=log_group_name,
            logStreamName=log_stream_name,
            startFromHead=True,
            limit=20  # Adjust as needed
        )
        
        #print(log_events)
        # Print or return log events
        augmented = []
        for event in log_events['events']:
            if re.search(regex_pattern, event['message']):
              augmented.append(event)
            
        response['original'] = log_events['events']
        response['augmented'] = augmented
        statusCode = 200
    
    return {
        'statusCode': statusCode,
        "headers": headers,
        'body': json.dumps(response)
    }