import os
import requests
from PIL import Image
from io import BytesIO

api_key = os.getenv("SECRET_API_KEY")
response = requests.get("https://api.os.uk/maps/vector/v1/vts?key=" + api_key, headers={"Authorization": "Bearer " + api_key})

url = 'https://api.os.uk/maps/raster/v1/tiles'
params = {
    'key': api_key,
    'bbox': '-7.666998,58.267621,-7.550182,58.294967',  # Define the bounding box for your region (replace with actual coordinates)
    'zoom': 14,  # Choose the zoom level
    'layer': 'OS Explorer',  # Choose the map layer
}

# Send a request to get the map tile
response = requests.get(url, params=params)

# Check if the request was successful (status code 200)

img = Image.open(BytesIO(response.content))

# Save the image as "FlannanMapOS.png"
img.save("FlannanMapOS.png")
print("OS map saved as 'FlannanMapOS.png'")

print(f"Failed to retrieve map tile. Status code: {response.status_code}")