import module from '../module'

const Q = require('q');
const asyncSort = Q.nfbind(require('async-merge-sort'));

module.controller('List', ($scope, $rootScope, $location) => {

  if($location.$$path !== '/start' && !$rootScope.list) {
    $location.path('/start');
  } else if($location.$$path === '/choose') {
    $scope.list = $rootScope.list;
    $scope.selected ='lel';

    const arr = $scope.list.split('\n');

    const humanSort = arr => {
      console.log(arr);
      return asyncSort(arr, (a, b, cb) => {
        $scope.select = { a, b }
        $scope.$apply()
        console.log("test")
        console.log($scope.select)
        $scope.chooseA = () => {
          $scope.selected = a;
        }
        $scope.chooseB = () => {
          $scope.selected = b;
        }

        const watchCb = () => {
          listener();
           // need this timeout or stuff breaks
          window.setTimeout(getSelected, 33)
        }

        const getSelected = () => {
          const sel = $scope.selected;
          $scope.selected = 'lel';
          console.log(sel)
          if(sel === a) {
            return cb(null, -1)
          }
          if (sel === b) {
            return cb(null, 1)
          }
        }

        const listener = $scope.$watch('selected', watchCb);


      });
    }

    humanSort(arr).then(value => {
      $rootScope.sortedList = value;
      $location.path('/result');
      $scope.$apply()
    });
  } else if($location.$$path === '/result') {
    $scope.results = $rootScope.sortedList;
  }

  $scope.chooseStep = () => {
    $rootScope.list = $scope.list;
    $location.path('/choose');
  }

});
