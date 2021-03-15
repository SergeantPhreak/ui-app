app.controller("homeCtrl", function ($scope, $http, $cookies) {
    $scope.username = $cookies.get('username');
    if($scope.username != undefined) {
        loggedIn = true;
    }
    console.log(loggedIn)

});

app.controller("userCtrl", function ($scope, $http, $cookies, $location) {
    $scope.username = $cookies.get('username');
    if($scope.username != undefined) {
        loggedIn = true;
        $location.path("/sale");
    } else {
        $location.path("/login");
    }
    console.log(loggedIn)

    $scope.authenticate = function () {

        $http.get(userBaseURL + '/auth/' + $scope.username + '/' + $scope.password)
            .then(function (response) {

                loggedIn = true;
                $cookies.put('username', $scope.username);
                $location.path("/sale");
            });
    }

    $scope.registerUser = function () {

        $http.get(userBaseURL + '/create/' + $scope.username + '/' + $scope.password)
            .then(function (response) {

                loggedIn = true;
                $cookies.put('username', $scope.username);
                $scope.hideLoginOptn = loggedIn;
                $location.path("/sale");
            });
    }
});

app.controller("appCtrl", function ($scope, $http, $cookies, $location) {
    $scope.username = $cookies.get('username');
    if($scope.username != undefined) {
        loggedIn = true;
    } else {
        $location.path("/login");
    }
    console.log(loggedIn)

    $http.get(productBaseURL + '/all')
        .then(function (response) {

            $scope.products = response.data;

        });
});