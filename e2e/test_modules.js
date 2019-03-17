'use strict';

const goToHome = require ('./modules/goToHome');
const goToLocationdetail = require ('./modules/goToLocationdetail');
const goToMyRegulations = require ('./modules/goToMyRegulations');

module.exports = function() {
    return actor({
        goToHome: goToHome,
    });
}
