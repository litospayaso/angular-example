/**
 * Function get url
 */
const getUrl =  async function (page) {
    await page.evaluate(() => location.href);
};
module.exports = getUrl;