'use strict';

const goToHome = require ('./modules/goToHome');

module.exports = function() {
    return actor({
        goToHome: goToHome,
    });
}
