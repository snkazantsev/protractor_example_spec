Feature: Guest user visiting the website
 As a user
 I should be able to access the website and see the correct title

    Scenario: User lands on home page
        Given User is on home page
        Then Browser title should be equal 'Zoo Adoption | Home'

    Scenario: User lands on home page
        Given User is on home page
        Then Proper elements should be on the HomePage

    Scenario: User lands on home page
        Given User is on home page
        Then THETESTROOM.COM link should be legitimate

    Scenario: User lands on home page
        Given User is on home page
        Then Input field by default should be empty 

    Scenario: User lands on home page
        Given User is on home page
        Then Text in the Input firld should be reflected in the Label
        
