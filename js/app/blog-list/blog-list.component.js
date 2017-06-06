'use strict';

angular.module('blogList').
	component('blogList',{
		//template : "<div class=''><h1>{{ title }}</h1><button ng-click='someClickTest()'>Click Me</button></div>",
		templateUrl : "/templates/blog-list.html",
		controller : function($scope){
			console.log('Hello')
			var blogItems = [
				{title: "Some Title", id:1, description:"This is a Book"},
				{title: "Title ", id:2, description:"This is a Book"},
				{title: "Tea", id:3, description:"This is a Book"},
				{title: "Lite", id:4, description:"This is a Book"},
			]

			$scope.items = blogItems;

			$scope.title = 'Hi There Scope'
			$scope.clicks = 0
			$scope.someClickTest = function(){
				console.log("Clicked")
				$scope.clicks += 1
				$scope.title = 'Clicked ' + $scope.clicks + ' times'
			}
		}

	});

/*	
	<div class='' ng-controller='BlogListController'>
		<h1>{{ title }}</h1>
		<button ng-click='someClickTest()'>Click Me</button>
	</div>

	controller('BlogListController',function($scope){
		console.log('Hello')
		$scope.title = 'Hi There Scope'
		$scope.clicks = 0
		$scope.someClickTest = function(){
			console.log("Clicked")
			$scope.clicks += 1
			$scope.title = 'Clicked ' + $scope.clicks + ' times'
		}
	});*/