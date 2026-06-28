import { chromium, devices } from 'playwright'

const BASE = process.env.BASE_URL || 'http://localhost:4173/eitan/'
const iPhone = devices['iPhone 13']

const browser = await chromium.launch()
const context = await browser.newContext({ ...iPhone })
const page = await context.newPage()
page.on('pageerror', (e) => console.log(`[pageerror] ${e.message}`))

await page.goto(BASE, { waitUntil: 'networkidle' })

const targetTop = (id) =>
  page.evaluate((i) => {
    const el = i === 'top' ? document.body : document.getElementById(i)
    if (!el) return null
    return i === 'top' ? 0 : Math.round(el.getBoundingClientRect().top + window.scrollY - 80)
  }, id)

let pass = 0
let fail = 0

async function testMenuLink(label, id) {
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(200)
  await page.locator('button[aria-label="Open menu"]').click()
  await page.waitForTimeout(400)
  await page.locator('.md\\:hidden a', { hasText: label }).last().click()
  await page.waitForTimeout(1600) // animation + lazy-load settle

  const y = await page.evaluate(() => Math.round(window.scrollY))
  const want = await targetTop(id)
  const ok = Math.abs(y - want) <= 60
  console.log(`menu "${label}" -> scrollY=${y}, want~${want}, diff=${y - want}  ${ok ? 'PASS' : 'FAIL'}`)
  ok ? pass++ : fail++
}

async function testHeroButton(label, id) {
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(200)
  await page.locator('section#top a', { hasText: label }).click()
  await page.waitForTimeout(1600)

  const y = await page.evaluate(() => Math.round(window.scrollY))
  const want = await targetTop(id)
  const ok = Math.abs(y - want) <= 60
  console.log(`hero "${label}" -> scrollY=${y}, want~${want}, diff=${y - want}  ${ok ? 'PASS' : 'FAIL'}`)
  ok ? pass++ : fail++
}

console.log('--- mobile menu links ---')
await testMenuLink('About', 'about')
await testMenuLink('Reels', 'reels')
await testMenuLink('Gallery', 'gallery')
await testMenuLink('Press', 'press')
await testMenuLink('Contact', 'contact')

console.log('--- hero CTA buttons ---')
await testHeroButton('Watch reels', 'reels')
await testHeroButton('Get in touch', 'contact')

console.log(`\nRESULT: ${pass} passed, ${fail} failed`)
await browser.close()
process.exit(fail ? 1 : 0)
