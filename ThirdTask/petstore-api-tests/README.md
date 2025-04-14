# Petstore API Tests

This project contains automated tests for the Swagger Petstore API.

## Prerequisites

- Apache Maven
- Python 3.6+
- Swagger Petstore API running on http://localhost:8080

## Setup

### 1. Set up Maven

- Maven is already included in the project directory at `N26/ThirdTask/apache-maven-3.9.9/bin`.
- Add this directory to your `PATH` environment variable.
- Confirm the setup with:
  ```bash
  mvn -v
  ```

### 2. Download and install Python

- Download Python from [https://www.python.org/downloads/](https://www.python.org/downloads/)
- Install with administrator privileges and choose the option to automatically add Python to `PATH`.
- Confirm installation with:
  ```bash
  python --version
  pip --version
  ```

### 3. Download the project files

- Download the ZIP from: [https://github.com/SaadiIftikhar/N26/tree/main](https://github.com/SaadiIftikhar/N26/tree/main)

### 4. Unzip the downloaded archive

- Extract the files and navigate to the directory:
  ```bash
  cd N26/ThirdTask
  ```

### 5. Run the server with Maven

To run the server:
```bash
mvn package jetty:run
```

### 6. Install Python dependencies

Navigate to the tests directory:
```bash
cd N26/ThirdTask/petstore-api-tests
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