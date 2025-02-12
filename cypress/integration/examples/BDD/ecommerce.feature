Feature: ecommerce validation
@skip
Scenario:login page practice
Given customer launchs url
When user enters username and password
And add items in the cart and checkout
And validate the total limit
Then select the country and validate success

@smoke
Scenario:login page practice datatable
Given customer launchs url
When user enters username and password portal
|username|password|
|rahulshettyacademy|learning|
And add items in the cart and checkout
And validate the total limit
Then select the country and validate success
