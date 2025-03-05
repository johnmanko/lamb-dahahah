#!/bin/sh

ZIP_FILE="lambda.zip"
BUILD_DIR="package"
LIB_DIR="lib"
REQUIREMENTS="requirements.txt"
RUNTIME="python3.12"
FUNCTION_NAME=""
FUNCTION_ROLE=""
LAMBDAS_PATH="lambdas"
AWS_CMD=${AWS_CMD:-awslocal}
FUNCTION_GROUP_PREFIX="lambdahahah"
ROLE_NAME="lambdahahah-execution-role"
TRUST_POLICY="file://lambdas/trust-policy.json"

get_or_create_role() {

  local _ROLE_ARN=$($AWS_CMD iam get-role --role-name "$ROLE_NAME" --query 'Role.Arn' --output text 2>/dev/null)

  if [ "$_ROLE_ARN" != "None" ] && [ -n "$_ROLE_ARN" ]; then
    FUNCTION_ROLE="$_ROLE_ARN"
  else
    echo "Role '$ROLE_NAME' does not exist. Creating role..."
    # Create the role and extract its ARN
    _ROLE_ARN=$($AWS_CMD iam create-role --role-name "$ROLE_NAME" \
      --assume-role-policy-document "$TRUST_POLICY" \
      --query 'Role.Arn' --output text)
    FUNCTION_ROLE="$_ROLE_ARN"
    echo "Role created. ARN: $_ROLE_ARN"
    $AWS_CMD iam attach-role-policy --role-name $_ROLE_ARN --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaExecutionRole
  fi

}

build() {

  if [ ! -e lambda.py ]; then
    echo "No lambda.py found. Exiting."
    exit
  fi

  if [ -e "$ZIP_FILE" ]; then
    rm $ZIP_FILE
  fi

  if [ -d "$BUILD_DIR" ]; then
    rm -r $BUILD_DIR
  fi

  mkdir $BUILD_DIR

  cp lambda.py $BUILD_DIR

  if [ -d "$LIB_DIR" ]; then
    cp -r $LIB_DIR $BUILD_DIR/
  fi

  pip install -r $REQUIREMENTS -t $BUILD_DIR
  cd $BUILD_DIR

  zip -r ../$ZIP_FILE .

  cd ..

  rm -r $BUILD_DIR

}

parse_args() {

  usage() {
    echo -e "Usage: $0 <name> \n \
    <name>\t\tThe name of the lambda function (hello, logread, bucket_list, bucket_read, bucket_read_pii) \
    "
    exit 1
  }

  # Initialize variables
  local _name=""

  # Process command-line arguments
  if [ $# -ne 1 ]; then
    usage 
  fi

  _name="$1"

  # Validate required parameters
  if [[ -z "$_name" ]]; then
    echo "Error: Name of lamdba is required."
    usage
  fi

  FUNCTION_NAME="$_name"
}

parse_args "$@"

if [ $? -ne 0 ]; then
  exit 1
fi

if [ ! -d "$LAMBDAS_PATH/$FUNCTION_NAME" ]; then
  echo "Lambda function $FUNCTION_NAME project not found"
  exit 1
fi

get_or_create_role

echo "$FUNCTION_ROLE"

FUNCTION_FULL_NAME="$FUNCTION_GROUP_PREFIX-$FUNCTION_NAME"

if $AWS_CMD lambda get-function --function-name "$FUNCTION_FULL_NAME" &>/dev/null; then
  cd "$LAMBDAS_PATH/$FUNCTION_NAME"
  build
  $AWS_CMD lambda update-function-code \
            --function-name "$FUNCTION_FULL_NAME" \
            --zip-file fileb://$ZIP_FILE \
            --tags "Group=Portfolio,App=Lambdahahah,Repo=lamb-dahahah" \
            --environment file://lambda-env.json 
elif [[ -z "$FUNCTION_ROLE" ]]; then
  echo "Error: role required for function creation."
  usage
else
  cd "$LAMBDAS_PATH/$FUNCTION_NAME"
  build
  $AWS_CMD lambda create-function --function-name "$FUNCTION_FULL_NAME" \
      --zip-file fileb://$ZIP_FILE \
      --handler lambda.lambda_handler \
      --runtime $RUNTIME \
      --role $FUNCTION_ROLE \
      --tags "Group=Portfolio,App=Lambdahahah,Repo=lamb-dahahah" \
      --environment file://lambda-env.json 
fi
