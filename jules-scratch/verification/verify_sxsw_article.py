from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    try:
        page.goto("file:///app/index.html")
        page.screenshot(path="jules-scratch/verification/index_page.png")
        page.goto("file:///app/sxsw-2026-article.html")
        page.screenshot(path="jules-scratch/verification/sxsw_article_page.png")
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        browser.close()