
/**
 * Function to go to Home page
 */
const goToHome =  function () {
    const I = this;
    I.amOnPage('/');
    I.see('Angular');
};
module.exports = goToHome;