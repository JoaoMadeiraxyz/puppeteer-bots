const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");

console.log("Running currency bot script");

async function bot() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const coinBase = readlineSync.question("Coin Base: ") || "dolar";
  const coinFinal = readlineSync.question("Final Coin: ") || "real";

  const pageUrl = `https://www.google.com/search?q=${coinBase}+para+${coinFinal}&oq=${coinBase}+para+${coinFinal}&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTINCAEQABiDARixAxiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDE1MjFqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8`;

  await page.goto(pageUrl);
  const result = await page.evaluate(() => {
    return document.querySelector(".lWzCpb.a61j6").value;
  });

  console.log(`O valor de 1 ${coinBase} em ${coinFinal} é ${result}`);
  console.log("Currency bot finished running");
  await browser.close();
}

bot();

/* await new Promise((r) => setTimeout(r, 2000)); */