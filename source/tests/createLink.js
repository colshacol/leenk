const chromedriver = require('chromedriver')

const createLink = (browser) => {
  browser = browser.url('http://localhost:4123')
    .pause(500)
    .setValue('input.Shortener', 'www.twitter.com')
    .pause(100)
    .keys(browser.Keys.ENTER)
    .pause(100)
    .perform(() => assertions0(browser))
    .click('input.Shortener + div > button')
    .pause(100)
    .click('input.Shortener')
    .pause(100)
    .clearValue('input.Shortener')
    .pause(100)
    .keys([browser.Keys.CONTROL, "v"])
    .pause(100)
    .perform(() => assertions1(browser))
    .pause(100)
    .closeWindow()
    .end()
}

const assertions0 = (browser) => {
  browser.expect.element('input.Shortener + div').to.be.visible
  browser.expect.element('input.Shortener + div > p').to.be.visible
  browser.expect.element('input.Shortener + div > button').to.be.visible
}

const assertions1 = (browser) => {
  browser.getText('input.Shortener + div > p', ({ value: textValue }) => {
    browser.expect.element('input.Shortener').to.have.value.that.equals(textValue)
  })
}

module.exports = {
  createLink
}