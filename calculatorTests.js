describe('my first test suite', function() {	
	
	var pageObj = require("./calcLocators.js")	
	
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
	
	it('Calculator ADD Tests ', function() {		
		
		addTest(10,5,"15");
		
		addTest(10,10,"20");
		
		addTest(15,25,"40");
		

	});
});