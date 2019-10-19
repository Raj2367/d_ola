'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _patientFactory = require('../ethereum/patientFactory');

var _patientFactory2 = _interopRequireDefault(_patientFactory);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\user\\Desktop\\let\'s_go\\d_ola\\pages\\index.js?entry';


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex(props) {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call(this, props));

    _this.state = { value: '' };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handlePush = _this.handlePush.bind(_this);
    _this.handleCheck = _this.handleCheck.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {

      console.log(this.props.patientsIds);
      console.log(this.props.addresses);

      var id = this.state.value;
      this.handlePush(id);
    }
  }, {
    key: 'handlePush',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(item) {
        var account;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.handleCheck(item) == false)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 3;
                return web3.eth.getAccounts();

              case 3:
                account = _context.sent;

                console.log(account[0]);

                // try {

                //     const newPat = await factory.methods
                //     .createPatient(this.state.value)
                //     .send({
                //         from: account[0]
                //     });

                //       const campaigns = await factory.methods.getDeployedPatientsAddress().call();

                //       const address = campaigns[campaigns.length - 1];

                //       console.log(newPat);
                //       console.log(address);
                // } catch (err) {
                //   console.log(err);
                // }

                _context.next = 8;
                break;

              case 7:
                console.log('Exists');

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handlePush(_x) {
        return _ref.apply(this, arguments);
      }

      return handlePush;
    }()
  }, {
    key: 'handleCheck',
    value: function handleCheck(val) {
      return this.props.patientsIds.some(function (item) {
        return val === item;
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'Enter your Aadhar number'), _react2.default.createElement(_semanticUiReact.Input, { type: 'text', value: this.state.value, onChange: this.handleChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      })), _react2.default.createElement(_semanticUiReact.Input, { type: 'submit', value: 'Submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      })))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var patientsIds, addresses;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _factory2.default.methods.getDeployedIds().call();

              case 2:
                patientsIds = _context2.sent;
                _context2.next = 5;
                return _factory2.default.methods.getDeployedPatientsAddress().call();

              case 5:
                addresses = _context2.sent;
                return _context2.abrupt('return', { patientsIds: patientsIds, addresses: addresses });

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJJbnB1dCIsIkZvcm0iLCJHcmlkIiwiQ2FtcGFpZ24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduSW5kZXgiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlUHVzaCIsImhhbmRsZUNoZWNrIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJwYXRpZW50c0lkcyIsImFkZHJlc3NlcyIsImlkIiwiaXRlbSIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnQiLCJ2YWwiLCJzb21lIiwibWV0aG9kcyIsImdldERlcGxveWVkSWRzIiwiY2FsbCIsImdldERlcGxveWVkUGF0aWVudHNBZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQU8sQUFBTTs7QUFDcEMsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjt5Q0FFSjs7eUJBQUEsQUFBWSxPQUFPO3dDQUFBOztvSkFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSyxRQUFRLEVBQUMsT0FBZCxBQUFhLEFBQVEsQUFHckI7O1VBQUEsQUFBSyxlQUFlLE1BQUEsQUFBSyxhQUFMLEFBQWtCLEtBQXRDLEFBQ0E7VUFBQSxBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FBdEMsQUFDQTtVQUFBLEFBQUssYUFBYSxNQUFBLEFBQUssV0FBTCxBQUFnQixLQUFsQyxBQUNBO1VBQUEsQUFBSyxjQUFjLE1BQUEsQUFBSyxZQUFMLEFBQWlCLEtBUm5CLEFBUWpCO1dBQ0Q7Ozs7O2lDLEFBV1UsT0FBTyxBQUNsQjtXQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sTUFBQSxBQUFNLE9BQTVCLEFBQWMsQUFBcUIsQUFDcEM7Ozs7aUMsQUFFWSxPQUFPLEFBRWxCOztjQUFBLEFBQVEsSUFBSSxLQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7Y0FBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQWpCLEFBQXVCLEFBRXZCOztVQUFNLEtBQUssS0FBQSxBQUFLLE1BQWhCLEFBQXNCLEFBQ3RCO1dBQUEsQUFBSyxXQUFMLEFBQWdCLEFBRWpCOzs7OzsyRyxBQUVnQjs7Ozs7O3NCQUVYLEtBQUEsQUFBSyxZQUFMLEFBQWlCLFMsQUFBUzs7Ozs7O3VCQUVOLEtBQUEsQUFBSyxJLEFBQUwsQUFBUzs7bUJBQXpCO0EsbUNBRU47O3dCQUFBLEFBQVEsSUFBSSxRQUFaLEFBQVksQUFBUSxBQUVwQjs7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7bUJBR0E7d0JBQUEsQUFBUSxJQUFSLEFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQyxBQUlKLEtBQUssQUFDZjtrQkFBTyxBQUFLLE1BQUwsQUFBVyxZQUFYLEFBQXVCLEtBQUssZ0JBQUE7ZUFBUSxRQUFSLEFBQWdCO0FBQW5ELEFBQU8sQUFDUCxPQURPOzs7OzZCQUdJLEFBRVA7OzZCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDQTtBQURBO3lCQUNBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQjtvQkFBckI7c0JBQUEsQUFDTTtBQUROO3lCQUNPLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDZDQUFBLEFBQUMsd0NBQU0sTUFBUCxBQUFZLFFBQU8sT0FBTyxLQUFBLEFBQUssTUFBL0IsQUFBcUMsT0FBTyxVQUFVLEtBQXRELEFBQTJEO29CQUEzRDtzQkFIUixBQUNNLEFBRUUsQUFFRjtBQUZFOzJCQUVGLEFBQUMsd0NBQU0sTUFBUCxBQUFZLFVBQVMsT0FBckIsQUFBMkI7b0JBQTNCO3NCQVRWLEFBQ0EsQUFDRSxBQUNFLEFBQ0EsQUFLTSxBQU1iO0FBTmE7Ozs7Ozs2RyxBQXBFZTs7Ozs7Ozt1QkFFRCxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsaUIsQUFBaEIsQUFBaUM7O21CQUFyRDtBOzt1QkFDa0Isa0JBQUEsQUFBUSxRQUFSLEFBQWdCLDZCLEFBQWhCLEFBQTZDOzttQkFBL0Q7QTtrREFFQyxFQUFFLGFBQUYsYUFBZSxXLEFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RVgsQSxBQTNGNEI7O2tCQTJGNUIsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy91c2VyL0Rlc2t0b3AvbGV0J3NfZ28vZF9vbGEifQ==