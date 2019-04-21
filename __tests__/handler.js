const handler = require('../handler');

describe('handler.js - hello', () => {
  it('Should return test message', async () => {
    const response = await handler.hello({});
    expect(response).toMatchSnapshot();
  });
});
