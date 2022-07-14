#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LambdaGithubActionsStack } from '../lib/lambda-github-actions-stack';

const app = new cdk.App();
new LambdaGithubActionsStack(app, 'LambdaGithubActionsStack', {
  
});