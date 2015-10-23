angular.module('Booya')

.controller('MainCtrl', function($scope, $http, Items){
    //business here
   // $scope.myVar = "Cheese";
    $scope.allData;
    
    //$http({method: 'GET', url: 'data/items.json'})
    Items.getAll()
    .then(function(response){
        //success
        $scope.allData = response.data;
        
    }, function(response){
        //failure
        
        
    });
    
});