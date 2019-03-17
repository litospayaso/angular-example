'use strict';

const getUrl = require('./helpers/getUrl');

class page extends Helper {
  async page() { return this.helpers['Puppeteer'].page }
}

class test_helper extends page {
  async getUrl() { return await getUrl(await this.page()) }
}

module.exports = test_helper;
