import random
import json

from lib.translations import translations

def lambda_handler(event,context):
    
    random_translation = random.choice(translations)
    language, translation = random_translation.split(":", 1)
    request_id = context.aws_request_id
    body = {
        'translation': translation.strip(),
        'language': language.strip(),
        'requestId': request_id
    }

    return body  #json.dumps(body)

    # return {
    #     'statusCode': 200,
    #     "headers": {
    #         "Content-Type": "application/json",
    #         'Access-Control-Allow-Origin': '*',
    #         'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
    #         'Access-Control-Allow-Methods': 'OPTIONS,GET'
    #     },
    #     'body': json.dumps(body)
    # }