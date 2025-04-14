# conftest.py

# This file can be used for shared fixtures or configurations

import pytest

# Fixtures that can be shared across test files
@pytest.fixture
def pet_data():
    return {
        "id": 10,
        "name": "doggie",
        "category": {
            "id": 1,
            "name": "Dogs"
        },
        "photoUrls": ["string"],
        "tags": [{"id": 0, "name": "string"}],
        "status": "available"
    }

@pytest.fixture
def api_headers():
    API_KEY = "testing"  # Replace with your actual API key
    return {
        "api_key": API_KEY
    }
