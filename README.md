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

#### **`isActivePath` function**

- Returns `true` when current path matches `href` exactly.
- Returns `true` for root path `/` when path is `/` or `/index.html`.
- Returns `true` when current path includes the `href`.
- Returns `false` when paths don't match.

#### **`getUserName` function**

- Returns the name from the user object in storage.
- Returns `null` when no user exists in storage.

---

### **End-to-End Tests (Playwright)**

#### **`login`**

- User can log in successfully with valid credentials.
- Displays error message for invalid credentials.

#### **`navigation`**

- Navigates to the home page.
- Waits for the venue list to load.
- Clicks the first venue and verifies that the venue details page contains “Venue details” in the heading.

---

## 📜 Environment Variables

### Required Environment Variables:

- `API_URL`: URL of the API.
- `LOGIN_USERNAME`: Username for testing login.
- `LOGIN_PASSWORD`: Password for testing login.

### Instructions:

1. Ensure `.env` is in `.gitignore`.
2. Add an `.env.example` file with placeholders for the environment variables.

---

## 📋 Checklist

### Development Tools

- [ ] **ESLint** is installed and configured to handle test globals. 🛠️
- [ ] **Prettier** is installed and configured. ✨
- [ ] Pre-commit hooks are set up to handle linting and formatting. 🔧

### Testing Tools

- [ ] **Vitest** is installed and configured. 🧪
- [ ] Unit tests are written and passing. ✔️
- [ ] **Playwright** is installed and configured. 🎭
- [ ] E2E tests are written and passing. ✅

### Project Documentation

- [ ] Updated **README** with installation instructions, scripts, and environment variable details. 📝
- [ ] `.env` is included in `.gitignore`. 🚫
- [ ] `.env.example` is created with placeholder variables. 📂

---

## 📤 Submission

1. Open a **Pull Request (PR)** from the `workflow` branch into your default branch.
2. Do **not merge** the PR.
3. Request a review from peers and incorporate feedback.
4. Submit the PR link on Moodle.
