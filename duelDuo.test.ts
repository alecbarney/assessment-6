
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('Draw button displays div with id=choices', async ()=>{
    const dbtn = await driver.findElement(By.id('draw'))
    await dbtn.click()
    await driver.sleep(2000)

    const displayed = await driver.findElement(By.id('choices'))
    const test = await displayed.isDisplayed()


    const duoBtn = await driver.findElement(By.xpath("//button[@class='bot-btn']"))
    await duoBtn.click()
    await driver.sleep(2000)

    const duo = await driver.findElement(By.id('player-duo'))
    const result = await duo.isDisplayed()

    expect(result).toBe(true)
    expect(test).toBe(true)
})

// test('Add to Duo display div with id=player duo', async()=>{
//     const duoBtn = await driver.findElement(By.xpath("//button[@class='bot-btn']"))
//     await duoBtn.click()
//     await driver.sleep(2000)

//     const duo = await driver.findElement(By.id('player-duo'))
//     const result = await duo.isDisplayed()

//     expect(result).toBe(true)
// })