const puppeteer = require("puppeteer");

async function go() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });

  const page = await browser.newPage();
  await page.goto("https://bhc-wisc.web.app/");

  // Sign in to BHC website
  console.log("Signing in...");
  await page.click("body > nav > div.navbar-brand > span");
  await page.click("#login_button");
  await page.type("#signin_email", "admin@admin.com");
  await page.type("#signin_password", "admin123");
  await page.click("#signin_form > div:nth-child(4) > div > button");

  // Wait for login to complete
  await new Promise((r) => setTimeout(r, 2000));

  // Navigate to Resources
  console.log("Navigating to resources...");
  await page.click("body > nav > div.navbar-brand > span");
  await page.click("#resources_button");

  // Upload resource
  console.log("Uploading resource...");
  await page.type("#tile_content", "This is a test for Puppeteer");
  await page.type("#tile_title", "Puppeteer test 1");
  await page.type("#tile_link", "https://www.wisc.edu/");

  // Handle resource image upload
  const resourceFile = await page.$("#tile_image");
  await resourceFile.uploadFile("./placeholder.jpg");

  // Submit resource
  await page.click("#tile_submit");

  // Wait after resource upload
  await new Promise((r) => setTimeout(r, 3000));

  // Navigate to Our Team
  console.log("Navigating to Our Team...");
  await page.click("body > nav > div.navbar-brand > span");
  await page.click("#team_button");

  // Upload officer
  console.log("Creating officer entry...");
  await page.type("#officer_name", "test name 1");
  await page.type("#officer_email", "test1@wisc.edu");
  await page.type("#officer_title", "test title 1");

  // Handle officer photo upload
  const officerPhoto = await page.$("#officer_photo");
  await officerPhoto.uploadFile("./placeholder.jpg");

  // Submit officer
  await page.click("#officer_creation_form > div.control.mt-3 > button");

  // Wait after officer creation
  await new Promise((r) => setTimeout(r, 3000));

  // Sign out BHC website
  console.log("Signing out...");
  await page.click("body > nav > div.navbar-brand > span");
  await page.click("#logout_button");

  console.log("Test completed successfully");

  // Close browser
  await browser.close();
}

go();
