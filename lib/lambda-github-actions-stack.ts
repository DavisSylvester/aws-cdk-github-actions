import { Stack, StackProps } from 'aws-cdk-lib';
import { Bucket, BucketProps } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { stackConfig } from '../config/stackConfig';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LambdaGithubActionsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const bucketProps: BucketProps = {
      bucketName: stackConfig.environments.development.resources.buckets[0].name
    };
    
    new Bucket(this, stackConfig.environments.development.resources.buckets[0].name, bucketProps)
  }
}
