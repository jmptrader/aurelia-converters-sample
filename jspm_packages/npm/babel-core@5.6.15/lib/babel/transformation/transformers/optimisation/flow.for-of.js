/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

var _es6ForOf = require("../es6/for-of");

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var metadata = {
  optional: true
};

exports.metadata = metadata;
var visitor = {
  ForOfStatement: function ForOfStatement(node, parent, scope, file) {
    if (this.get("right").isGenericType("Array")) {
      return _es6ForOf._ForOfStatementArray.call(this, node, scope, file);
    }
  }
};
exports.visitor = visitor;