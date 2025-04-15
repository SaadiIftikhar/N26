# Petstore API Tests

This project contains automated tests for the Swagger Petstore API.

## Prerequisites

- Apache Maven
- Python 3.6+
- Swagger Petstore API running on http://localhost:8080

## Setup

### 1. Download the project files

- Download the ZIP from: https://github.com/SaadiIftikhar/Saad-Iftikhar and upzip it.

### 2. Download and install Python

- Download Python from [https://www.python.org/downloads/](https://www.python.org/downloads/)
- Install with administrator privileges and choose the option to automatically add Python to `PATH`.
- Confirm installation with:
  ```bash
  python --version
  pip --version
  ```

### 3. Set up Maven

- Maven is already included in the project directory at `../ThirdTask/apache-maven-3.9.9/bin`.
- Add this directory to your `PATH` environment variable.
- Confirm the setup with:
  ```bash
  mvn -v
  ```

### 4. Directory

- Navigate to the directory:
  ```bash
  cd ../ThirdTask
  ```

### 5. Run the server with Maven

To run the server:
```bash
mvn package jetty:run
```

### 6. Install Python dependencies

Navigate to the tests directory:
```bash
cd ../ThirdTask/petstore-api-tests
```

Install the required dependencies:
```bash
pip install -r requirements.txt
```

## Running Tests

1. Run the tests with:
   ```bash
   python -m pytest
   ```

2. For verbose output, use:
   ```bash
   python -m pytest -v
   ```

3. To generate an HTML report, run:
   ```bash
   python -m pytest --html=report.html
   ```

## Test Structure

- `conftest.py` - Contains shared fixtures and configurations
- `tests/test_pet.py` - Tests for the Pet API endpoints

## Approach and Tech Stack

For this test automation framework, I chose to focus on the **Pet API** domain. The solution is designed to be easy to scale and maintain, utilizing **Python** for its simplicity and readability, along with **pytest** for its powerful testing capabilities. This combination allows for efficient test writing and execution, making it suitable for CRUD operations on the Pet API endpoints.

## Test Execution Report

The test execution report is available at `petstore-api-tests/report.html`.
