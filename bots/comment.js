const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const readlineSync = require("readline-sync");

const stealth = StealthPlugin();
stealth.enabledEvasions.delete("iframe.contentWindow");
stealth.enabledEvasions.delete("media.codecs");
puppeteer.use(stealth);

const { executablePath } = require("puppeteer");

const url =
  "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AS5LTAQTtYf2QPSD3X7XH8vXxPCr6UK-YJxC3jTFBXojGw8yBApradbV3x4M8gO6Omjn5tSYDnAAMw&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1123072797%3A1718197740730294&ddm=0";

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: executablePath(),
    args: ["--window-size=1366,900"],
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1366,
    height: 768,
  });
  await page.goto(url);

  const email = readlineSync.question("Email: ") || "";

  if (email === "") {
    console.log("Email não fornecido, finalizando.");
    browser.close();
  }

  await page.click('input[type="email"]');
  await page.type('input[type="email"]', email);
  await page.keyboard.press("Enter");

  const password = readlineSync.question("Senha: ") || "";

  if (password === "") {
    console.log("Senha não fornecida, finalizando");
    browser.close();
  }

  await page.click('input[type="password"]');
  await page.type('input[type="password"]', password);
  await page.keyboard.press("Enter");
  await new Promise((r) => setTimeout(r, 5000));

  await page.goto("https://www.youtube.com/watch?v=JxS5E-kZc2s");

  await new Promise((r) => setTimeout(r, 8000));
  await page.evaluate(() => {
    window.scrollTo(0, 500);
  });

  await new Promise((r) => setTimeout(r, 4000));
  const comment = readlineSync.question("Comentario: ") || "legal!";
  await page.click("#placeholder-area");
  await page.type("#contenteditable-root", comment);
  await page.click("#submit-button");

  await browser.close();
};

main();
