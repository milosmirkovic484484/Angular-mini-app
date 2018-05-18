angular.module('mainCtrl',[])
    .controller('mainController',function ($scope,db) {
        $scope.bands = [];
        $scope.activeBand = [];
        db.getData().then(function (result) {
            console.log(result.data)
            $scope.bands = result.data;

        },function (error) {
            console.log(error)

        })
        $scope.displey = function (band) {
            $scope.activeBand = band;
        }
        
    })