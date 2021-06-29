import {getSecretWord} from '../getSecretWord';
const moxios = require('moxios');

describe(`getSecretWord`, () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test(`secret word is returned`, async () => {
    // When moxios get request, .wait() get response...
    moxios.wait(() => {
      // Get last request...
      const request = moxios.requests.mostRecent();
      // Create response with custom response...
      request.respondWith({
        status: 200,
        response: `party`,
      });
    });

    // Get result and expect...
    const result = await getSecretWord();
    expect(result).toBe(`party`);
  });
});
