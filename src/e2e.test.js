import puppeteer from "puppeteer";

describe("Navigate to My Course", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],
    });
    page = await browser.newPage();
  });

  it("should display all courses when clicking on `My Course`", async () => {
    await page.goto("http://localhost:3001");
    const [button] = await page.$x("//a[contains(., 'My Progress')]");
    await button.click();
    const text = await page.$eval("#MyCourse", (e) => e.textContent);
    expect(text).toBeTruthy();
  });

  afterAll((done) => {
    browser.close();
    done();
  });
});
