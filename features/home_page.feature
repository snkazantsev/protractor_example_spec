Feature: Guest user visiting the website
 As a user
 I should be able to access the website and see the correct title

    # @current
    Scenario: User lands on home page
        Given User is on home page
        Then Browser title should be equal 'Zoo Adoption | Home'

    @current
    Scenario: User lands on home page
        Given User is on home page
        Then Proper elements should be on the HomePage

    # @current
    Scenario: User lands on home page
        Given User is on home page
        Then THETESTROOM.COM link should be legitimate

    # @current
    Scenario: User lands on home page
        Given User is on home page
        Then Input and label fields by default should be empty 

    # @current
    Scenario: User lands on home page
        Given User is on home page
        Then Text in the Input field should be reflected in the Label
        
