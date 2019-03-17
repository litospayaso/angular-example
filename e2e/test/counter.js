Feature('Counter test');

Scenario('Check counter is 0', async (I) => {
    I.goToHome();
    I.see('Counter: 0');
});
Scenario('Update counter and check value', async (I) => {
    I.goToHome();
    I.click('#increase');
    I.see('Counter: 1');
});
Scenario('Update counter and check value again', async (I) => {
    I.goToHome();
    I.click('#increase');
    I.click('#increase');
    I.see('Counter: 2');
});
Scenario('reset counter', async (I) => {
    I.goToHome();
    I.click('#increase');
    I.see('Counter: 1');
    I.click('#reset');
    I.see('Counter: 0');
});
 