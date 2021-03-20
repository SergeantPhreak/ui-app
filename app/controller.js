app.controller("homeCtrl", function ($scope, $http, $cookies) {
    $scope.username = $cookies.get('username');
    if ($scope.username != undefined) {
        loggedIn = true;
    }
    setMenuItems();
    console.log(loggedIn)

});

app.controller("userCtrl", function ($scope, $http, $cookies, $location) {
    $scope.username = $cookies.get('username');
    if ($scope.username != undefined) {
        loggedIn = true;
        $location.path("/sale");
    } else {
        $location.path("/login");
    }
    setMenuItems();
    console.log(loggedIn)

    $scope.authenticate = function () {

        $http.get(userBaseURL + '/auth/' + $scope.username + '/' + $scope.password)
            .then(function (response) {

                loggedIn = true;
                $cookies.put('username', $scope.username);
                $location.path("/sale");
            }, 
            function (response) {
                console.log(response.status)
                console.log('Error callback method');
            });
    }

    $scope.registerUser = function () {

        $http.get(userBaseURL + '/create/' + $scope.username + '/' + $scope.password)
            .then(function (response) {

                loggedIn = true;
                $cookies.put('username', $scope.username);
                $scope.hideLoginOptn = loggedIn;
                $location.path("/sale");
            }, 
            function (response) {
                console.log(response.status)
                console.log('Error callback method');
            });
    }
});

app.controller("appCtrl", function ($scope, $http, $cookies, $location) {
    $scope.username = $cookies.get('username');
    if ($scope.username != undefined) {
        loggedIn = true;
    } else {
        $location.path("/login");
    }
    setMenuItems();
    console.log(loggedIn)

    $http.get(productBaseURL + '/all')
        .then(function (response) {

            $scope.products = response.data;

        }, 
        function (response) {
            console.log(response.status)
            console.log('Error callback method');
        });
    $http.get(customerBaseURL + '/all')
        .then(function (response) {

            $scope.customers = response.data;

        }, 
        function (response) {
            console.log(response.status)
            console.log('Error callback method');
        });
    $http.get(supplierBaseURL + '/all')
        .then(function (response) {

            $scope.suppliers = response.data;

        }, 
        function (response) {
            console.log(response.status)
            console.log('Error callback method');
        });
    
    $scope.search = function() {
        $http.get(productBaseURL + '/name/' + $scope.search_string)
        .then(function (response) {
            $scope.productCode = response.data[0].productCode;
            $scope.name = response.data[0].name;
            $scope.price = response.data[0].price;
            $scope.description = response.data[0].description;
            $scope.stock = response.data[0].stock;
            $scope.status = response.data[0].status;
            $scope.visibility = response.data[0].visibility;
            $scope.category_id = response.data[0].category_id; 

            console.log('search data : ', response.data);
        }, 
        function (response) {
            console.log(response.status)
            console.log('Error callback method');
        });
    }
});