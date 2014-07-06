'use strict';
var Proposal = require('models/Proposal');

module.exports = Backbone.Collection.extend({
    model: Proposal
});