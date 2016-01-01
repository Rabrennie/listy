import _ from 'lodash';

const module = angular.module('Listy', []);

module.run(($rootScope) => $rootScope._ = _);

export default module;
