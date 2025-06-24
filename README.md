# Final Task - WebdriverIO Login Test Automation

This project is an automated end-to-end test suite for the [SauceDemo Login Page](https://www.saucedemo.com/), implemented using **WebdriverIO**, the **Page Object Model (POM)** pattern, and **Mocha** as the test framework.

## 🚀 Tech Stack

- WebdriverIO
- Mocha
- Chai
- Page Object Model (POM)
- ChromeDriver

## 🌐 Browsers

- Chrome
- MicrosoftEdge

## 📂 Project Structure
```
Final Task
├── test
│   ├── specs
│   │   └── test.e2e.js # Main test scenarios
│   └── pageobjects
│       ├── login.page.js # Login page object
│       └── page.js # Base page object
├── wdio.conf.js # WebdriverIO config file
├── package.json
└── README.md # You are here :)
```

## 🧪 Test Cases

### UC-1: Username and Password are empty  
✅ Expects: Error message "Username is required"

### UC-2: Password is empty  
✅ Expects: Error message containing "Epic sadface"

### UC-3: Login attempts with various users

 ✅ Users;                
    `standard_user`           
    `locked_out_user`         
    `problem_user`            
    `performance_glitch_user` 
    `error_user`              
    `visual_user`             

## 🛠️ Installation & Running the Tests

### 1. Install dependencies

```npm install```


### 2. Run the test suite

```npm run wdio```


### 📌 Notes

  - All tests are written using async/await syntax.
  - The LoginPage object abstracts all interactions with the login form.
  - Assertions are made using chai's expect for readability.
