from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Navigate to the index page
    page.goto("file:///app/index.html")
    page.screenshot(path="jules-scratch/verification/index_page.png")

    # Navigate to the austin music page
    page.goto("file:///app/austin-music.html")
    page.screenshot(path="jules-scratch/verification/austin_music_page.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)