import { Stack, StackProps } from 'aws-cdk-lib';
import { Bucket, BucketProps, HttpMethods } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, BucketDeploymentProps, Source } from 'aws-cdk-lib/aws-s3-deployment';
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
    
    new Bucket(this, stackConfig.environments.development.resources.buckets[0].name, bucketProps);


    const bucketAppProps: BucketProps = {
      bucketName: 'angular-app-one',
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: '404.html',
      publicReadAccess: true,
      cors: [
        {
          allowedMethods: [HttpMethods.GET, HttpMethods.POST, HttpMethods.PUT, HttpMethods.DELETE, HttpMethods.HEAD],
          allowedOrigins: ["*"],
          allowedHeaders: ["*"]
        }
      ]

    };
    
    const angularAppBucket = new Bucket(this, 'web-deploy', bucketProps);

    
    const bucketDeploymentProps: BucketDeploymentProps = {
      sources: [Source.asset("/Users/dsylv/projects/samples/angular-demo/dist/angular-demo")],
      destinationBucket: angularAppBucket
    };
    new BucketDeployment(this, 'angular-app-deploy', bucketDeploymentProps)
  }
}
