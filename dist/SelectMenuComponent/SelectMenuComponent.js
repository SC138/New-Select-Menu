"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectMenuComponent;
var _styleModule = _interopRequireDefault(require("./style.module.css"));
function SelectMenuComponent(_ref) {
  let {
    options,
    value,
    onChange
  } = _ref;
  return /*#__PURE__*/React.createElement("select", {
    className: _styleModule.default.select,
    value: value,
    onChange: onChange
  }, options.map((option, index) => /*#__PURE__*/React.createElement("option", {
    key: index,
    value: option.value
  }, option.label)));
}