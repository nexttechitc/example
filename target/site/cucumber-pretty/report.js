$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/loginTest.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Ahammedsorif@gmail.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary: It will verify Login functionality"
    },
    {
      "line": 3,
      "value": "#URL :http://www.executeautomation.com/demosite/Login.html"
    }
  ],
  "line": 4,
  "name": "Login Functionality",
  "description": "\tThis Feature deal with the login functionality of the application",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 23,
  "name": "User should able to login with correct username and password",
  "description": "",
  "id": "login-functionality;user-should-able-to-login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@test3"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Launch \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Click on Signin Button",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Click SignIn",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Verify User In Home Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cURL\u003e",
      "offset": 8
    }
  ],
  "location": "LoginSteps.i_navigate_through(String)"
});
formatter.result({
  "duration": 7955621100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Click_on_Signin_Button()"
});
formatter.result({
  "duration": 6613737600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 7
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 24
    }
  ],
  "location": "LoginSteps.Enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 964523000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Click_SignIn()"
});
formatter.result({
  "duration": 285115800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Verify_User_In_Home_Page()"
});
formatter.result({
  "duration": 3521307700,
  "status": "passed"
});
});