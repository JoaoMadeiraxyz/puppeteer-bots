const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");

console.log("Running ICMS bot script");

async function bot() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const state = readlineSync.question("Estado: ") || "parana";

  const pageUrl = `https://www.google.com/search?q=aliquota%20icms%20${state}`;

  await page.goto(pageUrl);

  const resultSelector = ".IZ6rdc";
  await page.waitForSelector(resultSelector);
  const result = await page.evaluate(() => {
    return document.querySelector(".IZ6rdc").innerHTML;
  });

  const resultTextSelector = ".hgKElc";
  await page.waitForSelector(resultTextSelector);
  const resultText = await page.evaluate(() => {
    return document.querySelector(".hgKElc").innerHTML;
  });

  console.log(result);
  console.log(resultText);
  console.log("ICMS bot finished running");
  await browser.close();
}

bot();
