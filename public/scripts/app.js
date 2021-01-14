"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _AppRouter = _interopRequireDefault(require("./routers/AppRouter"));

var _reactRedux = require("react-redux");

var _configureStore = _interopRequireDefault(require("./store/configureStore"));

var _expenses = require("./actions/expenses");

var _filters = require("./actions/filters");

var _expenses2 = _interopRequireDefault(require("./selectors/expenses"));

require("normalize.css/normalize.css");

require("./styles/styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore.default)();
var unsubscribe = store.subscribe(function () {
  var state = store.getState();
  var visibleExpenses = (0, _expenses2.default)(state.expenses, state.filters);
  console.log(visibleExpenses);
});
store.dispatch((0, _expenses.addExpense)({
  description: 'Water Bill',
  amount: 250,
  createdAt: Date.now()
}));
store.dispatch((0, _expenses.addExpense)({
  description: 'Gas Bill',
  amount: 96,
  createdAt: Date.now() - 120000
}));
store.dispatch((0, _filters.setTextFilter)('bill'));
store.dispatch((0, _filters.setTextFilter)('water'));

var jsx = /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: store
}, /*#__PURE__*/_react.default.createElement(_AppRouter.default, null));

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_AppRouter.default, null), document.getElementById('app'));
