import requests
from geopy.geocoders import Nominatim

def search_psychologists(location):
    try:
        
        geolocator = Nominatim(user_agent="psychologist_search")
        location = geolocator.geocode(location)

        if not location:
            print("Location not found. Please check your query.")
            return

        
        overpass_url = "http://overpass-api.de/api/interpreter"
        overpass_query = f"""
            [out:json];
            (
              node["healthcare"="psychiatrist"](around:1000000,{location.latitude},{location.longitude});
              node["healthcare"="psychologist"](around:1000000,{location.latitude},{location.longitude});
            );
            out center;
        """

        response = requests.get(overpass_url, params={"data": overpass_query})
        response.raise_for_status()  

        data = response.json()

        results = data.get("elements", [])

        if not results:
            print("No psychiatrists or psychologists found in the vicinity.")
            return

        print("Psychiatrists and Psychologists in the vicinity:")
        for result in results:
            name = result.get("tags", {}).get("name", "Unnamed")
            print(f"- {name}")

    except requests.exceptions.RequestException as e:
        print(f"An error occurred during the request: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if _name_ == "_main_":
    location_query = input("Enter a location: ")
    search_psychologists(location_query)
