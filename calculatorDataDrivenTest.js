describe('my first test suite', function() {	
	
	var pageObj = require("./calcLocators.js");
	var d = require("./TestDataFile.js");
	var using = require('jasmine-data-provider');
	
	beforeEach(function() {
		pageObj.getURL();
	});
	
	function addTest(a,b,c) {
		pageObj.input1.sendKeys(a);
		pageObj.input2.sendKeys(b);		
		pageObj.goButton.click();	
		
		expect(pageObj.resultTable.element(by.css("td:nth-child(3)")).getText()).toBe(c);
		
		pageObj.resultTable.element(by.css("td:nth-child(3)")).getText().then(function(text)
				{
					console.log("result is : "+text);					
			
				});
		
	}
	
	function subTest(a,b,c) {
		pageObj.input1.sendKeys(a);
		pageObj.input2.sendKeys(b);	
		pageObj.subOperator.click();
		pageObj.goButton.click();	
		
		expect(pageObj.resultTable.element(by.css("td:nth-child(3)")).getText()).toBe(c);
		
		pageObj.resultTable.element(by.css("td:nth-child(3)")).getText().then(function(text)
				{
					console.log("result is : "+text);					
			
				});
		
	}
	
	using(d.Datadriven, function (data, description) {
		
		it('Calculator ADD Tests'+description, function() {		
			
			addTest(data.input1,data.input2,data.resultAdd);			

		});
		
		it('Calculator SUB Tests'+description, function() {				
			
			subTest(data.input1,data.input2,data.resultSub);

		});
	});
	
	
});