import os
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Navigate to the local index.html file
        index_path = os.path.abspath('index.html')
        page.goto(f'file://{index_path}')
        page.screenshot(path='jules-scratch/verification/homepage.png')

        # Click the link to the new article
        page.click('a[href="feng-shui-article.html"]')
        page.wait_for_load_state()

        # Take a screenshot of the article page
        page.screenshot(path='jules-scratch/verification/article.png')

        browser.close()

if __name__ == "__main__":
    run()
