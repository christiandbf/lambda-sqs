// eslint-disable-next-line import/no-unresolved
const AWS = require('aws-sdk');

const region = process.env.AWS_REGION;
const lambda2URL = process.env.SQS_LAMBDA2_URL;

const sqs = new AWS.SQS({ region });

const hello = async event => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    },
    null,
    2,
  ),
});

const processSQSLambda1 = async (event) => {
  const { Records } = event;

  const promises = Records
    .map(record => record.body)
    .map(body => ({ MessageBody: JSON.stringify(body), QueueUrl: lambda2URL }))
    .map(params => sqs.sendMessage(params).promise());

  return Promise.all(promises);
};

module.exports = {
  hello,
  processSQSLambda1,
};
