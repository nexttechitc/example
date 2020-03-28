Feature: Validate Login functionality 


@Login @Login_valid
Scenario Outline: User with valid user name and password are able to login

Given I navigate through "<URL>" 
When I enter "<userName>" and "<passWord>"
Then I click on Sign In button
Then I validate Flight Finder page appeared 

Examples:
|URL|userName|passWord|
|https://www.newtours.demoaut.com/mercuryreservation.php|Xcode|Xcode123|