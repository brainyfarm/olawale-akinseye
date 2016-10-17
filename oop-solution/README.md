# OOP - Mobile Phone Class
## This is a javascript application that models a Mobile Phone.

## Documentation and Usage

* ### Create an instance of a mobile phone passing in the phone make, model and network provide as argument
    `let myPhone = new NetworkEnabledMobile("Nokia", "3310", "MTN NIGERIA");`
    
    Now you are ready to use the application, properties and methods are now available to the new instance => `myPhone`

## Available Methods
* `currentTime()`    - Returns the current time
* `getPhoneInfo()`   - Gives you the phone make, model and network provider
* `checkDateTime()`  - Returns the current date and time in local format

* `dialNumber()`     - Make a call, requires parameter `phoneNumber`
* `sendMessage()`    - Send a message, requires you supply the `message` and `recipient` number.
* `getCallHistory()` - Get the call log
* `clearCallLog()`   - Clear/ reset the call log 

