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
  return Records;
};

module.exports = {
  hello,
  processSQSLambda1,
};
