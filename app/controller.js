app.controller("homeCtrl", function($scope, $http, $cookies) {
	console.log(loggedIn)
});

app.controller("userCtrl", function($scope, $http, $cookies) {
	
    $scope.authenticate = function(){

        $http.get(userBaseURL+'/auth/'+$scope.username+'/'+$scope.password)
        .then(function(response) {

           console.log('data: ', response.data)
           console.log('response: ', response.status)

           loggedIn = true;
           $cookies.put('username', $scope.username);
        });
    }
});