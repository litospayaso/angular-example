Feature('Go to github');
const assert = require('assert');

Scenario('Click in github button', async (I) => {
    I.goToHome();
    I.click('#goToGithub');
    const url = await I.getUrl();
    I.say(url);
    assert.equal(url, 'https://github.com/litospayaso');
});
 