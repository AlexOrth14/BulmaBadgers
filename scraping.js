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
  // Create Announcement
  console.log("Creating announcement...");
  await page.type("#ann_title", "Puppeteer Test Title Number One");
  await page.type("#ann_topic", "Puppeteer created topic number one");
  await page.type(
    "#ann_content",
    "Hello, this is the first puppeteer test topic. Change the content as needed for further test announcements."
  );
  await page.click("#ann_submit");

  // Wait for announcement submission
  await page.waitForTimeout(2000);
  // Navigate to Gallery
  console.log("Navigating to gallery...");
  await page.click("#gallery_button");

  // Upload Image
  console.log("Uploading image...");
  await page.type("#gal_ttl", "This is a test image upload by the script");

  // Handle file upload
  const inputFile = await page.$("#gal_image");
  await inputFile.uploadFile("BulmaBadgers/placeholder.jpg");

  // Submit gallery upload
  await page.click("#gal_submit");

  // Wait for upload to complete
  await page.waitForTimeout(3000);

  console.log("Test completed successfully");

  // Close browser
  await browser.close();
}

go();
