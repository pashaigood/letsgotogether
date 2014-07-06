'use strict';

var ProposalList = require('collections/ProposalList'),
    proposal_list = require('datas/proposal_list');

module.exports = function(app) {

    app.controller('MainCtrl', ['$scope', function ($scope) {
        $scope.activeProposal = new ProposalList(proposal_list);

    }]);
};

