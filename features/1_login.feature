Feature: Login to Kasiraja Demo Apps

  @feature=login
  Scenario Outline: User Success Login to KasirAja Demo Apps

    Given user already on login page
    When user input email <email> and password <password> 
    Then url contain <pathName> and showing title kasirAja

    Examples:
      | email                  | password             | pathName   |
      | trianikamila@gmail.com | triani123@           | dashboard  |

  Scenario Outline: User Unsuccessfull Login to KasirAja Demo Apps

    Given user already on login page
    When user input invalid email <invalidemail> and invalid password <invalidpassword> 
    Then alert message displayed <alertMessage>

    Examples:
      | invalidemail          | invalidpassword       | alertMessage                       |
      | abcd123               | abcd123@              | "email" must be a valid email      |

