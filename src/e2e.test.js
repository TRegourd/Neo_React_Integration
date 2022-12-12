import puppeteer from "puppeteer";
import courseData from "./data/coursesData.json";

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
    // Navigate to My Course
    await page.goto("http://localhost:3001");
    const [button] = await page.$x("//a[contains(., 'My Progress')]");
    await button.click();
    const text = await page.$eval("#MyCourse", (e) => e.textContent);
    expect(text).toBeTruthy();

    // Verify that there is as many card as in courseData
    const cards = await page.$$("#CourseCard");
    expect(cards.length).toEqual(courseData.length);
  });

  it("should navigate to a single course page when clicking on `Continue Course` button", async () => {
    await page.goto("http://localhost:3001/progress");
    const cards = await page.$$("#CourseCard");
    const button = await cards[1].$("#ContinueButton");
    await button.click();
    const url = await page.evaluate(() => document.location.href);
    expect(url).toEqual("http://localhost:3001/courses/2");
  });

  afterAll((done) => {
    browser.close();
    done();
  });
});
