var mathObj = (function (mathObj, $){
	var math = this;
	mathObj.getCalculator =  function(calc)
	{
		var calculator = calc;
		
		var getcal = this;
		
		var funclist = { calculate : function(num1, num2, comp)
												{
													var func = this;
												
													comp.value = num1 + " " + calculator + " " + num2 + " = " + eval(num1+calculator+num2);
												},
								test1 : function()
										{
											console.log(test1)
										}
								};
		
		return funclist;
	};
	
	return mathObj;
})(window.mathObj || {}, jQuery);