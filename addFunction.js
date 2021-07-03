var pageObj = require("./calcLocators.js")

function addTest(a,b) {
	pageObj.input1.sendKeys(a);
	pageObj.input2.sendKeys(b);		
	pageObj.goButton.click();	
	
	
}
	module.exports = new addTest();