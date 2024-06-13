const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");

async function bot() {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--window-size=1366,900"],
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1366,
    height: 768,
  });

  await page.goto("https://www.youtube.com/");

  const searchSelector = "#search-form";
  await page.waitForSelector(searchSelector);

  await page.click("#search-form");
  const searchTerm =
    readlineSync.question("Pesquisa: ") || "cats";
  await page.type("#search-form", searchTerm);
  await page.keyboard.press("Enter");
  await new Promise((r) => setTimeout(r, 2000));
  const channelSelector = "#content-section";
  await page.waitForSelector(channelSelector);

  await page.click("#content-section");

  await new Promise((r) => setTimeout(r, 5000));
  await browser.close();
}

bot();
