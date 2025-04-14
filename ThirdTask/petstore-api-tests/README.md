# Petstore API Tests

This project contains automated tests for the Swagger Petstore API.

## Prerequisites

- Python 3.6+
- Swagger Petstore API running on http://localhost:8080

## Installation

Install the required dependencies:

```bash
pip install -r requirements.txt
```

## Running Tests

Run the tests with:

```bash
python -m pytest
```

For verbose output:

```bash
python -m pytest -v
```

To generate an HTML report:

```bash
python -m pytest --html=report.html
```

## Test Structure

- `conftest.py` - Contains shared fixtures and configurations
- `tests/test_pet.py` - Tests for the Pet API endpoints 