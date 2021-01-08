# serverless-test

Serverless Framework hello world test.

## requirements

- [NodeJS](https://nodejs.org/en/)
- [AWS Account](https://aws.amazon.com/)
  - Access Key Id (key)
  - Secret Access Key (secret)

## Install serverless framework

Install globally `serverless framework` using npm:

```bash
npm i -g serverless
```

Now you can use it with `serverless` or `sls` command in your terminal.

## Config serverless framework credentials

Config serverless framework credentials (AWS as provider):

```bash
sls config credentials \
  --provider aws \
  --key your-aws-key \
  --secret your-aws-secret
```

This command has configured the AWS credentials in the `default profile`.  
You can use the `--profile` flag to specific a profile.
