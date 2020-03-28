#Author: Ahammedsorif@gmail.com
#Keywords Summary: It will verify Login functionality
#URL :http://www.executeautomation.com/demosite/Login.html
Feature: Login Functionality
  	This Feature deal with the login functionality of the application
@test
  Scenario Outline: User should able to login with correct username and password
    Given Launch "<URL>"
    Then Enter Hello World on Search field
    Then click on Search
    
    Examples:
    |URL|
    |http://google.com|
    
    @test2
  Scenario: Google search
    Given Launch "<URL>"
    Then Enter Hello World on Search field
    Then click on Search
    
     @test3
  Scenario: User should able to login with correct username and password
    Given Launch "<URL>"
    Then Click on Signin Button
    Then Enter "<username>" and "<password>"
    Then Click SignIn 
    Then Verify User In Home Page
    
    
   
    
    
    

    
    