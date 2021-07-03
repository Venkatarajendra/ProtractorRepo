function calcPageElements()
{
	this.input1 = element(by.model("first"));
	this.input2 = element(by.model("second"));
	this.subOperator = element(by.model("operator")).element(by.css("option[value='SUBTRACTION']"));
	this.goButton = element(by.id("gobutton"));
	this.resultTable = element(by.repeater("result in memory"));
	
	this.getURL = function() {
		browser.get('https://juliemr.github.io/protractor-demo/');
	}

};

module.exports = new calcPageElements();