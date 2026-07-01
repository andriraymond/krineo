# krineo

Krineo, from the Greek word "krínō" (to judge and examine), is a Playwright automation framework for API testing, database validation, and business rule verification. Evidence before trust.

---

## 📋 Prerequisites

Before you clone and run this project, make sure you have the following installed on your machine:

1. **[Node.js](https://nodejs.org/)** (v18 or higher is recommended)
   - Verify installation: `node -v`
2. **[npm](https://www.npmjs.com/)** (comes with Node.js)
   - Verify installation: `npm -v`
3. **[Git](https://git-scm.com/)** (To clone the repository)
   - Verify installation: `git -v`
4. **[Java](https://www.java.com/)** (Required to generate Allure Reports)
   - Verify installation: `java -version`

---

## 🚀 Getting Started (Clone Existing Project)

Follow these steps if you are cloning this repository to run or develop tests.

### 1. Clone the repository
```bash
git clone https://github.com/andriraymond/krineo.git
cd krineo
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install Playwright Browsers
Playwright requires specific browser binaries to execute tests.
```bash
npx playwright install
```

### 4. Setup Environment Variables
If the project uses environment variables, create a `.env` file in the root directory and configure the required variables.

---

## 💻 How to Run

The following commands are available to run tests and manage reports:

### Run Tests
To execute all Playwright tests:
```bash
npm run test
```

### View Allure Report
After running the tests, generate and open the Allure HTML report:
```bash
npm run report
```

### Clean Previous Reports
To delete old test results and report folders (`reports` and `playwright-report`):
```bash
npm run clean
```

---

## 🛠️ Project Setup Guide (From Scratch)

If you want to recreate this exact project setup from an empty folder, follow these steps:

### 1. Initialize the project
```bash
mkdir krineo-clone
cd krineo-clone
npm init -y
```

### 2. Install Dependencies
Install Playwright, Allure, and TypeScript types as development dependencies:
```bash
npm install -D @playwright/test @types/node allure-playwright allure-commandline
```

Install production dependencies (like `dotenv` for environment variables):
```bash
npm install dotenv
```

### 3. Install Playwright Browsers
```bash
npx playwright install
```

### 4. Configuration
1. Create a `playwright.config.ts` and configure the Allure reporter:
   ```typescript
   import { defineConfig } from '@playwright/test';

   export default defineConfig({
     reporter: [
       ['html'], // Optional: default Playwright HTML report
       ['allure-playwright', { outputFolder: 'reports/allure-results' }]
     ],
     // ... other config (projects, use, etc.)
   });
   ```

2. Update `package.json` to include the run scripts:
   ```json
   "scripts": {
     "test": "playwright test",
     "report": "allure generate ./reports/allure-results --clean -o ./reports/allure-report && allure open ./reports/allure-report",
     "clean": "node -e \"const fs=require('fs'); ['reports', 'playwright-report'].forEach(d => fs.rmSync(d, {recursive:true, force:true}))\""
   }
   ```

---

## 🥒 Step-by-Step BDD Installation (From Scratch)

If you are building the **Playwright BDD (Cucumber)** integration from an empty directory, follow these steps:

### 1. Initialize Node Project
```bash
npm init -y
```

### 2. Initialize Playwright
```bash
npm init playwright@latest
```
> **Note:** During setup, choose **TypeScript** and name the tests folder as **tests**.

### 3. Install Cucumber & Playwright-BDD
```bash
npm install -D playwright-bdd @cucumber/cucumber
```

### 4. Create BDD Folder Structure
Create the following directories to organize your framework (features, steps, and page objects):
```bash
mkdir tests/features tests/pages tests/steps
```
