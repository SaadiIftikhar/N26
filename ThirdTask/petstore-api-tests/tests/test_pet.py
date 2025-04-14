# tests/test_pet.py

import requests
import pytest

BASE_URL = "http://localhost:8080/api/v3/pet"

# The headers are now provided by the api_headers fixture in conftest.py

def test_create_pet(pet_data, api_headers):
    response = requests.post(BASE_URL, json=pet_data, headers=api_headers)
    assert response.status_code == 200
    assert response.json()["name"] == pet_data["name"]

def test_get_pet(api_headers):
    response = requests.get(f"{BASE_URL}/10", headers=api_headers)
    assert response.status_code == 200
    assert response.json()["id"] == 10

def test_update_pet(pet_data, api_headers):
    pet_data["name"] = "updated_doggie"
    response = requests.put(BASE_URL, json=pet_data, headers=api_headers)
    assert response.status_code == 200
    assert response.json()["name"] == pet_data["name"]

def test_delete_pet(api_headers):
    response = requests.delete(f"{BASE_URL}/10", headers=api_headers)
    assert response.status_code == 200

    # Verify deletion
    response = requests.get(f"{BASE_URL}/10", headers=api_headers)
    assert response.status_code == 404