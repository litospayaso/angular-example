/**
 * Function get url
 */
const getUrl =  async function (page) {
    return await page.evaluate(() => window.location.href);
};
module.exports = getUrl;