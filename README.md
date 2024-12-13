# 🚀 Workflow Course Assignment

This project is part of the **FED2-24 Workflow Course Assignment**. The goal of this assignment is to configure tools and define tests to improve the quality and efficiency of the development process for a website.

---

## 📖 Table of Contents

- [📦 Installation](#-installation)
- [🛠️ Tools and Configuration](#️-tools-and-configuration)
- [✅ Testing](#-testing)
- [📜 Environment Variables](#-environment-variables)
- [📋 Checklist](#-checklist)

---

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   ```

2. Navigate into the project directory:

   ```bash
   cd <repo-name>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the project:

   ```bash
   npm start
   ```

---

## 🛠️ Tools and Configuration

### **1. ESLint and Prettier**

- Configured to lint and format JavaScript and HTML files.
- ESLint handles globals used in the test files.

### **2. Pre-commit Hooks**

- Set up to ensure linting and formatting are run before committing code.

---

## ✅ Testing

### **Unit Tests (Vitest)**

Vitest is used for unit testing utility functions and individual components.

#### **Commands to Run Vitest Tests**

1. Run all tests:

   ```bash
   npx vitest
   ```

2. Run a specific test file:

   ```bash
   npx vitest tests/unit/<test-file-name>.test.js
   ```

3. Run tests in watch mode:

   ```bash
   npx vitest --watch
   ```

4. Generate a test coverage report:

   ```bash
   npx vitest --coverage
   ```

---

### **End-to-End Tests (Playwright)**

Playwright is used for testing the application's UI and simulating user interactions.

#### **Commands to Run Playwright Tests**

1. Run all E2E tests:

   ```bash
   npx playwright test
   ```

2. Run a specific test file:

   ```bash
   npx playwright test tests/e2e/<test-file-name>.spec.js
   ```

3. Run tests in debug mode:

   ```bash
   npx playwright test --debug
   ```

4. Generate a test report:

   ```bash
   npx playwright show-report
   ```

---

## 📜 Environment Variables

### Required Environment Variables:

- `LOGIN_USERNAME`: Username for testing login.
- `LOGIN_PASSWORD`: Password for testing login.

### Instructions:

1. Ensure `.env` is in `.gitignore`.
2. Add an `.env.example` file with placeholders for the environment variables:

---

## 📋 Checklist

### Development Tools

- ✅ **ESLint** is installed and configured to handle test globals. 🛠️
- ✅ **Prettier** is installed and configured. ✨
- ✅ Pre-commit hooks are set up to handle linting and formatting. 🔧

### Testing Tools

- ✅ **Vitest** is installed and configured. 🧪
- ✅ Unit tests are written and passing. ✔️
- ✅ **Playwright** is installed and configured. 🎭
- ✅ E2E tests are written and passing. ✅

### Project Documentation

- ✅ Updated **README** with installation instructions, scripts, and environment variable details. 📝
- ✅ `.env` is included in `.gitignore`. 🚫
- ✅ `.env.example` is created with placeholder variables. 📂
