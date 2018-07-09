Feature: Guest user visiting the website
 As a user
 I should be able to access the website and see the correct title

    Scenario: User lands on home page
        Given User is on home page
        Then Browser title should be equal 'Zoo Adoption | Home'
