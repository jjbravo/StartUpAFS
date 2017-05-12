'use strict';

angular.module("startUpApp")
.factory('AuthService',AuthService);

AuthService.$inject  = ['$auth','$state'];
function AuthService($auth,$state){
	var Auth = {
		login:login,
		logout:logout,
		isAdmin:isAdmin
	}

	function login(user,collback){
		$auth.login(user)
		.then(response => {
			console.log("Login ok",response);
			$state.go('main');
		})
		.catch(err =>{
			console.log("Error de login");
			$state.go('login');
		})
	}

	function logout(){}
	function isAdmin(){}

	return Auth;

}
