
/* Class modelling a mobile phone */
class Mobile {
	/**
	 * Creates a basic mobile phone
	 * @param {string} make - The phone make
	 * @param {string} model - The mobile phone model
	 * @param {string} provider - The mobile network provider.
	 */
    constructor(make, model, provider) {
        this.make = make;
        this.model = model;
        this.provider = provider;
        this.callHistory = [];
    }

	/**
	 * Get the current time
	 * @return {string} The current local time
	 */
    currentTime() {
        return new Date().toLocaleTimeString();
    }

	/**
	 * Get the mobile phone information
	 * @return {string} the mobile phone information
	 */
    getPhoneInfo() {
        return this.make + " " + this.model + " - " + this.provider;
    }

	/**
	 * Check the phone current local date and time
	 * @return {string} The current date and time in local format 
	 */
    checkDateTime() {
        let date = new Date();
        return date.toLocaleDateString() + " => " + this.currentTime();
    }

}

/**
 * Class modelling a basic but fully functional mobile phone
 * @extends Mobile
 */
class NetworkEnabledMobile extends Mobile {

	/**
	 * Dial a phone number 
	 * @param {number} phoneNumber - The mobile number to call.
	 * @return {string} Phone call status
	 */
    dialNumber(phoneNumber) {
        if ((typeof phoneNumber === "number") && phoneNumber.toString().length >= 3) {
            let thisCallData = [phoneNumber, this.currentTime()];

            // Save the call history and dial number
            this.callHistory.push(thisCallData);
            return "Calling " + phoneNumber;
        }

        return "Call failed: mobile number";
    }

	/**
	 * Send an SMS 
	 * @param {string} message - Message to send 
	 * @param {number} recipient - Phone number to send message to 
	 * @return {string} SMS sending status
	 */
    sendMessage(message, recipient) {
        if ((typeof message === "string") && (message.length > 1)) {

            if ((typeof recipient === "number") && (recipient.toString().length >= 3)) {
                return "Message sent to " + recipient;
            }

            return "Sending failed: Invalid mobile number";
        }
        return "Sending failed: Invalid message";
    }

	/**
	 * View history of call log 
	 * @return {string} The record of numbers called with time 
	 */
    getCallHistory() {
        if (this.callHistory.length > 0) {
            let allCallData = '';
            for (let i = 0; i < this.callHistory.length; i++) {
                let currentCallData = this.callHistory[i];
                allCallData += currentCallData[1] + " => " + currentCallData[0] + "\n";
            }
            return allCallData;
        }
        return "Call log empty";
    }

	/**
	 * Clear all call logs
	 * @return {string} Call log deletion status
	 */
    clearCallLog() {
        this.callHistory = [];
        return "Call log cleared";
    }

}

let myPhone = new NetworkEnabledMobile("Nokia", "3310", "MTN NIGERIA");
myPhone.getPhoneInfo();
myPhone.checkDateTime();
myPhone.dialNumber(180);
myPhone.dialNumber(444);
console.log(myPhone.getCallHistory());
myPhone.sendMessage("Hi", 8039170087)