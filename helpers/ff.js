/**
 * Simple feature flags
 * @type {Object}
 */
var features = require('../ff.json'),
    featureFlags = function(alias) {
        return !!features[alias];
    };

module.exports = featureFlags;
