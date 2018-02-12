var myApp = angular.modules('myApp',[]);

myApp.controller('mainController', function($scope){
    
    console.log($scope);
    //Consider that if you log out a function without including (), it will log a string versin of the function. This means that angular can that a function, convert it to a string, and then parse out vertain pieces of it. So for dependency injection, angular will parse out the paramters of controller functions to see which are angular variables (ie, which begin with $), it will create the relevant objects and pass them as parameters to the function.
    
    //this is why we have access to the $scope object
    
});