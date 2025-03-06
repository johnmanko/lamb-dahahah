## Config

Lambda environment variables.

* `BUCKET_NAME` - The S3 bucket name
* `BUCKET_KEY_PREFIX` - The prefix key for all objects

## S3 Contents Object

In the response of the `list_objects_v2()` call from the `boto3` S3 client, the `Contents` field contains a list of objects, each of which represents an S3 object. The standard fields included for each object do not have many `datetime` fields. The primary field that is a `datetime` type is the `LastModified` field.

Here are the key fields returned in the `Contents` list:
Fields in the `Contents`:

* `Key` (`str`): The key (or path) of the object.
* `LastModified` (`datetime`): The date and time the object was last modified. This is the only field in `Contents` that is of type `datetime`.
* `ETag` (`str`): The entity tag (a unique identifier for the specific version of the object).
* `Size` (`int`): The size of the object in bytes.
* `StorageClass` (`str`): The storage class of the object (e.g., `STANDARD`, `GLACIER`, etc.).
* `Owner` (dict):
  * `DisplayName` (`str`): The display name of the object owner.
  * `ID` (`str`): The ID of the object owner.

The only field in the `Contents` object that would trigger the "Object of type datetime is not JSON serializable" error is the `LastModified` field.

```json
{
    "Key": "folder/file.txt",
    "LastModified": "2024-10-17T12:34:56",
    "ETag": "\"abc123etag\"",
    "Size": 12345,
    "StorageClass": "STANDARD",
    "Owner": {
        "DisplayName": "owner_name",
        "ID": "owner_id"
    }
}
```