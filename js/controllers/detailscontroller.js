angular.module('Booya')



.controller('DetailsCtrl', function($scope, $routeParams, Items){
    //business here
    $scope.itemID = $routeParams.itemID;
    $scope.item = {}
    
     //$http({method: 'GET', url: 'data/items.json'})
    Items.getOne($scope.itemID)
    .then(function(response){
        //success
        var items = response.data.items;
        items.forEach(function( i ){
            if( i.id == $scope.itemID) {
                $scope.item = i;
                
            } 
            
        });
        
    }, function(response){
        //failure
        
        
    });
    
});