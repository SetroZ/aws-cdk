import { ListBucketsCommand, S3Client } from '@aws-sdk/client-s3'
import { HttpMethod } from 'aws-cdk-lib/aws-events'
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda'
const s3Client = new S3Client({})
async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  switch ((event.httpMethod)) {
    case 'GET':

    case 'POST':

    default:
      break
  }
  const command = new ListBucketsCommand({})

  const listBuckets = (await s3Client.send(command)).Buckets

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify('Hello from lambda, this is the id' + listBuckets),
  }
  console.log(event)
  console.log(context)
  return response
}

export { handler }
