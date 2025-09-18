import os
from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Set a larger viewport to see the whole grid on desktop
    page.set_viewport_size({"width": 1280, "height": 1024})

    # Get the absolute path to the index.html file
    file_path = os.path.abspath('index.html')

    # Go to the local HTML file
    page.goto(f'file://{file_path}')

    # It's possible the consent dialog is loaded from an external script
    # that doesn't run on file:// protocol. Let's add a wait to be sure.
    page.wait_for_timeout(2000) # wait 2 seconds for page to settle

    # Take screenshots of the individual cards we changed
    cards_to_capture = {
        "bieber": 'a[href="coachella-2026.html"]',
        "redford": 'a[href="robert_redford.html"]',
        "banksy": 'a[href="banksy.html"]',
        "ben_and_jerrys": 'a[href="ben_and_jerrys.html"]'
    }

    for name, selector in cards_to_capture.items():
        card = page.locator(selector)
        expect(card).to_be_visible()
        card.screenshot(path=f'jules-scratch/verification/{name}.png')
        print(f"Screenshot saved for {name}")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
