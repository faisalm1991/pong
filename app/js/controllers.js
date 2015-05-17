'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

  phonecatControllers.controller('PingPongGameCtrl', ['$scope',
  function($scope) {
    
    $scope.start = function(){
    if ($scope.topLeftPlayerName != undefined && $scope.bottomLeftPlayerName != undefined && $scope.topRightPlayerName != undefined && $scope.bottomRightPlayerName != undefined){
    $scope.reset();
    $scope.isDisabled = true;
    }else{
    alert("You must fill out player names");
    }
    }
    
    $scope.reset = function(){
    $scope.topLeftPG = 0; 
    $scope.topLeftPC = 0; 
    
    $scope.bottomLeftPG = 0; 
    $scope.bottomLeftPC = 0; 
    
    $scope.topRightPG = 0; 
    $scope.topRightPC = 0; 

    $scope.bottomRightPG = 0; 
    $scope.bottomRightPC = 0; 
    
    $scope.leftTeamScore =  0; 
    $scope.rightTeamScore =  0;  
    
    $scope.isDisabled = false;
    }
    
   $scope.reset();
    
    $scope.changeScore = function(good, whichPlayer){
    switch (whichPlayer){
    case 1:
    if (good){
    $scope.topLeftPG +=1;
    }
    else{
    $scope.topLeftPC  +=1;
    }
    break;
    case 2:
    if (good){
    $scope.bottomLeftPG +=1;
    }
    else{
    $scope.bottomLeftPC  +=1;
    }
    break;
    case 3:
    if (good){
    $scope.topRightPG +=1;
    }
    else{
    $scope.topRightPC  +=1;
    }
    break;
    case 4:
    if (good){
    $scope.bottomRightPG +=1;
    }
    else{
    $scope.bottomRightPC  +=1;
    }
    break;
    }
    $scope.scoreLogic();
    }
    
    $scope.scoreLogic = function(){
        $scope.leftTeamScore =  $scope.topLeftPG + $scope.bottomLeftPG + $scope.topRightPC + $scope.bottomRightPC; 
	$scope.rightTeamScore =  $scope.topRightPG + $scope.bottomRightPG + $scope.topLeftPC + $scope.bottomLeftPC; 
    
    if ($scope.leftTeamScore >= 21|| $scope.rightTeamScore >= 21){
	if ($scope.leftTeamScore - $scope.rightTeamScore > 1 || $scope.rightTeamScore - $scope.leftTeamScore > 1){ //overtime logic
	
	var mvp = $scope.getMvp();
	
	if ($scope.leftTeamScore >  $scope.rightTeamScore){
	alert($scope.topLeftPlayerName + " & " + $scope.bottomLeftPlayerName + " wins! " + $scope.leftTeamScore + "-" + $scope.rightTeamScore + " \n"  + mvp);
	}else{
	alert($scope.topRightPlayerName + " & " + $scope.bottomRightPlayerName + " wins! " + $scope.rightTeamScore + "-" + $scope.leftTeamScore + " \n" + mvp);
	}
	
	$scope.reset();
	}
    }
    }
    
    $scope.getMvp = function(){
    var player1 = $scope.topLeftPG - $scope.topLeftPC,
    player2 = $scope.bottomLeftPG - $scope.bottomLeftPC,
    player3 = $scope.topRightPG - $scope.topRightPC,
    player4 = $scope.bottomRightPG - $scope.bottomRightPC;

var scoreDifferentials = [player1, player2, player3, player4],
    bestDifferential = Math.max.apply(Math.max, scoreDifferentials),
    worstDifferential = Math.min.apply(Math.min, scoreDifferentials),
    playerNames = [$scope.topLeftPlayerName, $scope.bottomLeftPlayerName, $scope.topRightPlayerName, $scope.bottomRightPlayerName],
    mvp = playerNames[scoreDifferentials.indexOf(bestDifferential)],
    lvp = playerNames[scoreDifferentials.indexOf(worstDifferential)];

    
    return "MVP = " + mvp + "\nLVP = " + lvp;
    }
 
 }]);
