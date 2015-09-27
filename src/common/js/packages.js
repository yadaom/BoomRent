/**
 * Organization: Boom Rent India.
 * User: om
 * Date: 20/09/15
 * Time: 11:16 PM
 */

var Boom = Boom || {};
Boom.client = Boom.client || {};
Boom.server = Boom.server || {};

Boom.util = Boom.util || {};//All utility classes will be in it like: StringUtil


Boom.register = function (pkg) {
  //Todo: Create method to register a package..
};


//For node.js
if (!(typeof module == 'undefined' || (typeof window != 'undefined' && this == window))) {
  module.exports = Boom;
}

