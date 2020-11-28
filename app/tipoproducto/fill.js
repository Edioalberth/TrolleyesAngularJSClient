miModulo.controller("tipoproductoFillController", [
	"$scope",
	"auth",
	"$location",
	"ajaxService",
	function ($scope, auth, $location, ajaxService) {
		$scope.controller = "tipoproductoFillController";
		if (auth.data.status == 200) {
			$scope.datosDeSesion = auth.data;
		} else {
			$location.path("/home");
		}
		$scope.operationIcon = "fas fa-plus";
		$scope.operationName = "Auto relleno de ";
		$scope.entityName = "tipoproducto";
		$scope.entityIcon = "fas fa-cubes";

		$scope.status = {};
		$scope.status.success = "";
		$scope.status.error = "";

		$scope.crear = function (numero) {
			ajaxService.ajaxFill($scope.entityName, numero).then(function (response) {
				$scope.status.success = "Se creo " + numero + " " + $scope.entityName + "s correctamente."
			}, function () {
				$scope.status.error = "ERROR: No se pudo crear los datos en " + $scope.entityName;
			});
		}

		$scope.back = function () {
			window.history.back();
		};
	},
]);