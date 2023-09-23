from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options as ChromeOptions


def scrape_clinic_and_rating(city):
    # Set up Chrome WebDriver options (same as your existing code)
    chrome_options = ChromeOptions()

    chrome_options.add_argument("--headless")

    # Initialize the Chrome WebDriver (same as your existing code)
    # https://drive.google.com/file/d/1zpS0-hQyD4ZvUeHEcLpiZBZdcspm_-7z/view?usp=sharing
    # webdriver_service = ChromeService(executable_path="C:/Users/K B Chowdhury/Downloads/chromedriver-win64/chromedriver-win64/chromedriver.exe")
    webdriver_service = ChromeService(
        executable_path="C:/test/chromedriver.exe")

    driver = webdriver.Chrome(
        service=webdriver_service, options=chrome_options)

    # Define the search query and search engine URL (same as your existing code)
    query = "Best psychologists near "
    search_url = f"https://www.google.com/search?q={query}{city}"
    print("City", city)
    print("url", search_url)
    # Navigate to the Google search page (same as your existing code)
    driver.get(search_url)

    # Initialize an empty list to store clinic and rating information
    clinic_and_rating_info = []

    # Extract and store search results
    search_results = driver.find_elements(By.CSS_SELECTOR, 'div.rllt__details')
    for result in search_results:
        title_element = result.find_element(By.CSS_SELECTOR, 'span.OSrXXb')
        try:
            snippet_element = result.find_element(
                By.CSS_SELECTOR, 'span.yi40Hd.YrbPuc')
            snippet = snippet_element.text
        except:
            snippet = "Rating not available"
        contact_element = result.find_element(By.XPATH, ".//div[position()=3]")
        contact = contact_element.text
        title = title_element.text

        # Append clinic and rating information to the list
        clinic_and_rating_info.append(
            {"clinic": title, "rating": snippet, "Contact and address": contact})

    # Close the browser
    driver.quit()
    print(clinic_and_rating_info)
    return clinic_and_rating_info
