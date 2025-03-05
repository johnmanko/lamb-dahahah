import boto3

def is_text_file(content_type):

    text_mime_types = [
        'text/plain',
        'text/html',
        'text/x-log',
        'text/log',
        'application/json',
        'application/xml',
        'text/csv',
        'text/javascript',
        'application/x-sh',
        'application/x-python-code'
    ]
    

    return any(content_type.startswith(mime_type) for mime_type in text_mime_types)


def read_s3_object_if_text(bucket_name, object_key):
    
    s3_client = boto3.client('s3')

    response = s3_client.get_object(Bucket=bucket_name, Key=object_key)
    
    content_type = response['ContentType']
    
    if is_text_file(content_type):
        
        object_data = response['Body'].read().decode('utf-8')

        return {
            'contentType': content_type,
            'content': object_data
        }
    
    else:
        
        return None
