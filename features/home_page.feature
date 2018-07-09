Feature: Guest user visiting the website
 As a user
 I should be able to access the website and see the correct title
 
 Scenario: User lands on home page
 Given I go to my website
 Then the title should equal "MyWebsite"
