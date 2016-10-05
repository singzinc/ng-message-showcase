var singControllers = angular.module('singControllers',[]);


singControllers.controller('test',function($scope) {

    $scope.models = {
        selected: null,
        lists: {"A": []}
    };

    // Generate initial model
    for (var i = 1; i <= 4; ++i) {
        $scope.models.lists.A.push({label: "Item A" + i ,id: i } );
       /* $scope.models.lists.B.push({label: "Item B" + i}); */
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
		console.log("--------");
        $scope.modelAsJson = angular.toJson(model, true);
		console.log($scope.modelAsJson);
    }, true);

});

