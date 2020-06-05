(function(){'use strict';

angular.module('ShoppingListCheckOff',[])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
		.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
		
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var buyList = this;
		
		buyList.bought = function (index){
			ShoppingListCheckOffService.boughtItems(index);
		}
		
		buyList.isEmpty = function()
		{
			return ShoppingListCheckOffService.emptyBuy();
		}
		
		buyList.items = ShoppingListCheckOffService.showBuyItems();
	}
	
	
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var boughtList = this;
		
		boughtList.items = ShoppingListCheckOffService.showBoughtItems();
		
		boughtList.isEmpty = function()
		{
			return ShoppingListCheckOffService.emptyBought();
		}	
	}
	
	
	function ShoppingListCheckOffService(){
		var service = this;
		var toBuy = [
		{
			name : "pizza",
			quant : "4"
		},
		{
			name : "Eggs",
			quant : "8"
		},
		{
			name : "Sugar Drinks",
			quant : "2"
		},
		{
			name : "ButterMilk",
			quant : "1"
		},
		{
			name : "Maggi",
			quant : "3"
		},
		{
			name : "Veg Soup Packet",
			quant : "1"
		},
		{
			name : "Vanilla ice cream",
			quant : "1"
		},
		{
			name : "Toast",
			quant : "1"
		}
		];
		
		var alreadyBought = [];
		
		service.boughtItems = function(index){
			alreadyBought.push(toBuy[index]);
			toBuy.splice(index,1);
		}
		
		service.showBuyItems = function(){
			return toBuy;
		}
		
		service.showBoughtItems = function(){
			return alreadyBought;
		}
		
		service.emptyBuy = function(){
			if (toBuy.length === 0){
				return true;
			}
			else return false;
		}
		
		service.emptyBought = function(){
			if (alreadyBought.length === 0){
				return true;
			}
			else return false;
		}
		
	}

})();