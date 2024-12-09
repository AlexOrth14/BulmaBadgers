// the purpose of this script is to test logging in as a regular user and sending a contact us message

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
  await page.type("#signin_email", "alexmiorth@gmail.com");
  await page.type("#signin_password", "Ux'Y0|G38P20");
  //   click on submit button
  await page.click("#signin_form > div:nth-child(4) > div > button");
  //wait for page to load in case elements need to populate
  await new Promise((r) => setTimeout(r, 3000));
  // Navigate to Contact Us
  console.log("Navigating to Contact Us...");
  await page.click("body > nav > div.navbar-brand > span");
  await page.click("#contact_button");
  // submit contact us message
  console.log("Sending Contact Us message...");

  await page.type("#contact_email", "PuppeteerTest1@Test.com");
  await page.type("#subject", "Puppeteer Test Subject 1");
  await page.type("#message_body", "Puppeteer Test message body 1");

  await page.click("#submit_btn");

  // Wait for message upload to complete
  await new Promise((r) => setTimeout(r, 3000));

  console.log("Test completed successfully");

  //   sign out BHC website
  await page.click("body > nav > div.navbar-brand > span");
  await page.click("#logout_button");

  // Close browser
  await browser.close();
}
go();
