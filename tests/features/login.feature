Feature: Login

  Scenario: Verify user can login with valid credentials
    Given user on the login page
    When user enters email "${process.env.EMAIL}"
    And user enters password "${process.env.PASSWORD}"
    And user clicks on the login button
    Then user is redirected to the dashboard

  Scenario: [NEGATIVE] Verify user cannot login with empty email and password
    Given user on the login page
    When user clicks on the login button
    Then the sistem displays the error message "Email is required"

  Scenario: [NEGATIVE] Verify user cannot login with empty email
    Given user on the login page
    When user enters password "invalid"
    And user clicks on the login button
    Then the sistem displays the error message "Email is required"

  Scenario: [NEGATIVE] Verify user cannot login with invalid format email
    Given user on the login page
    When user enters email "invalid@example"
    And user enters password "${process.env.PASSWORD}"
    And user clicks on the login button
    Then the sistem displays the error message "Invalid email format"

  Scenario: [NEGATIVE] Verify user cannot login with empty password
    Given user on the login page
    When user enters email "${process.env.EMAIL}"
    And user clicks on the login button
    Then the sistem displays the error message "Password is required"

  Scenario: [NEGATIVE] Verify user cannot login with invalid email or password
    Given user on the login page
    When user enters email "${process.env.EMAIL}"
    And user enters password "invalid"
    And user clicks on the login button
    Then the sistem displays the error message "Invalid credentials"
