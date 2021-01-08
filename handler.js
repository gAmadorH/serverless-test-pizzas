module.exports.hello = async (event) => {
  // eslint-disable-next-line no-console
  console.log('Hello world');

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2,
    ),
  };
};
