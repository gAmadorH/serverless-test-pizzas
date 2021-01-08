const { hello } = require('../handler');

describe('lambda service basic test', () => {
  test('should return data', async () => {
    const event = {};
    const actualValue = await hello(event);

    expect(actualValue).toHaveProperty('statusCode', 200);
    expect(actualValue).toHaveProperty('body');
  });
});
