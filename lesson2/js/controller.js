angular.module('cart.controller', [])
  .controller('mainController', function ($scope) {
    $scope.categories = [
      'телефоны',
      'планшеты',
      'ноутбуки'
    ];
    $scope.goods = [
      {
        name: 'Iphone',
        price: 50000,
        category: 'телефоны',
        amount: 1
      },
      {
        name: 'Samsung',
        price: 45000,
        category: 'ноутбуки',
        amount: 1
      }
    ];
    $scope.cartGoods = [];
    $scope.createCategory = function () {
      console.log($scope.newCategory);
      $scope.categories.push($scope.newCategory)
    };
    $scope.createNewGood = function () {
      $scope.newGood.amount = 1;
      var goodToAdd = {};
      for (var x in $scope.newGood) {
        if ($scope.newGood.hasOwnProperty(x)) {
          goodToAdd[x] = $scope.newGood[x]
        }
      }
      $scope.goods.push(goodToAdd);
    };
    $scope.addToCart = function (item) {
      console.log(item);
      $scope.cartGoods.push(item)
    };
    $scope.getTotal = function () {
      var total = 0;
      for (var good in $scope.cartGoods) {
        if ($scope.cartGoods.hasOwnProperty(good)) {
          total += $scope.cartGoods[good].price * $scope.cartGoods[good].amount
        }
      }
      return total
    }
  });
