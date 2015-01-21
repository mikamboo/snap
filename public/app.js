'use strict';

//-- Create the app module
var app = angular.module('MySnap',[]);

//-- Create a simple controller
app.controller('AppCtlr',['$scope', function($scope){
	$scope.title = 'Snap !';
}]);
