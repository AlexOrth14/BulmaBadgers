// import puppeteer

const puppeteer = require("puppeteer");

async function go() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });

  const page = await browser.newPage();
  await page.goto("https://bhc-wisc.web.app/");

  //   sign in BHC website
  await page.click("body > nav > div.navbar-brand > span");
  await page.click("#login_button");
  // provide email and password to sign in
  await page.type("#signin_email", "admin@admin.com");
  await page.type("#signin_password", "admin123");
  //   click on submit button
  await page.click("#signin_form > div:nth-child(4) > div > button");
}

go();
