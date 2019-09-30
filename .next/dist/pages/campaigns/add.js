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

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _googleMapsReact = require('google-maps-react');

var _CurrentLocation = require('./CurrentLocation');

var _CurrentLocation2 = _interopRequireDefault(_CurrentLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/sibu/Desktop/d_ola/pages/campaigns/add.js?entry';


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew(props) {
        (0, _classCallCheck3.default)(this, RequestNew);

        var _this = (0, _possibleConstructorReturn3.default)(this, (RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
            stores: [{ latitude: 47.359423, longitude: -122.021071 }, { latitude: 47.2052192687988, longitude: -121.988426208496 }]
        };
        return _this;
    }

    (0, _createClass3.default)(RequestNew, [{
        key: 'render',

        // renderRows() {

        //     const items = this.props.requests.map((request, index) => {
        //         return {
        //             image: request.dropLocation,
        //             header: request.pickupLocation,
        //             meta: request.cName
        //         }
        //     });
        //     return <Card.Group itemsPerRow={3} items={items} style={{ marginRight: '30px' }} />;
        // }

        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 11, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, _react2.default.createElement(_CurrentLocation2.default, {
                centerAroundCurrentLocation: true,
                google: this.props.google,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            }, _react2.default.createElement(_googleMapsReact.Marker, { onClick: this.onMarkerClick, name: 'current location', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }), _react2.default.createElement(_googleMapsReact.InfoWindow, {
                marker: this.state.activeMarker,
                visible: this.state.showingInfoWindow,
                onClose: this.onClose,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                }
            }, _react2.default.createElement('h6', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                }
            }, 'current location'))))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 158
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 159
                }
            }, 'Book Cab'), _react2.default.createElement(_semanticUiReact.Form, { disabled: this.state.flag2, onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }, 'Name of the Customer'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.cName,
                onChange: function onChange(event) {
                    return _this2.setState({ name: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                }
            }, 'Enter pickup location'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.pickupLocation,
                onChange: function onChange(event) {
                    return _this2.setState({ pickupLocation: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 171
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 177
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                }
            }, 'Enter drop location'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.dropLocation,
                onChange: function onChange(event) {
                    return _this2.setState({ dropLocation: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 179
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, disabled: this.state.flag2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            }, 'Check for the nearest cabs')), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'blue', style: { marginTop: '25px' }, disabled: !this.state.flag, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 188
                }
            }, 'Start Election!')), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onShowResult, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'blue', style: { marginTop: '25px' }, disabled: !this.state.flag, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 191
                }
            }, 'Show Result')))), _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loading, inverted: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                }
            }, _react2.default.createElement(_semanticUiReact.Loader, { size: 'large', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                }
            }, 'Searching for cabs')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                //const requestCount = await campaign.methods.getRequestsCount().call();

                                // const requests = await Promise.all(
                                //     Array(parseInt(requestCount))
                                //         .fill()
                                //         .map((element, index) => {
                                //             return campaign.methods.requests(index).call();
                                //         })
                                // );

                                return _context.abrupt('return', { requests: requests, address: address });

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.displayMarkers = function () {
        return _this3.state.stores.map(function (store, index) {
            return _react2.default.createElement(_googleMapsReact.Marker, { key: index, id: index, position: {
                    lat: store.latitude,
                    lng: store.longitude
                },
                onClick: function onClick() {
                    return console.log("You clicked me!");
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            });
        });
    };

    this.state = {
        cName: '',
        pickupLocation: '',
        dropLocation: '',
        flag: false,
        loading: false,
        flag2: false,
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };

    this.onMarkerClick = function (props, marker, e) {
        return _this3.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    this.onClose = function (props) {
        if (_this3.state.showingInfoWindow) {
            _this3.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    this.onFinalize = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            event.preventDefault();

                            _this3.setState({ flag2: true });

                            window.open('/campaigns/' + _this3.props.address + '/vote', "_blank");

                        case 3:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this3);
        }));

        return function (_x2) {
            return _ref2.apply(this, arguments);
        };
    }();

    this.onShowResult = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            event.preventDefault();
                            window.open('/campaigns/' + _this3.props.address + '/results', "_blank");

                        case 2:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this3);
        }));

        return function (_x3) {
            return _ref3.apply(this, arguments);
        };
    }();

    this.onSubmit = function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(event) {
            var campaign, _state, cName, pickupLocation, dropLocation, accounts;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            event.preventDefault();

                            campaign = (0, _campaign2.default)(_this3.props.address);
                            _state = _this3.state, cName = _state.cName, pickupLocation = _state.pickupLocation, dropLocation = _state.dropLocation;

                            _this3.setState({ loading: true });

                            _context4.prev = 4;
                            _context4.next = 7;
                            return _web2.default.eth.getAccounts();

                        case 7:
                            accounts = _context4.sent;
                            _context4.next = 10;
                            return campaign.methods.createRequest(cName, pickupLocation, dropLocation).send({
                                from: accounts[0]
                            });

                        case 10:

                            _this3.setState({ cName: '', dropLocation: '', pickupLocation: '' });

                            _routes.Router.pushRoute('/campaigns/' + _this3.props.address + '/dashboard');
                            _context4.next = 17;
                            break;

                        case 14:
                            _context4.prev = 14;
                            _context4.t0 = _context4['catch'](4);

                            console.log(_context4.t0.message);

                        case 17:
                            _this3.setState({ flag: true });
                            _this3.setState({ loading: false });

                        case 19:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this3, [[4, 14]]);
        }));

        return function (_x4) {
            return _ref4.apply(this, arguments);
        };
    }();
};

exports.default = (0, _googleMapsReact.GoogleApiWrapper)({
    apiKey: 'AIzaSyDCVpYzEWOzQQxpQGw8fEanrHfoSIKnjGQ'
})(RequestNew);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9hZGQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIkxhYmVsIiwiSW5wdXQiLCJHcmlkIiwiSW1hZ2UiLCJEaW1tZXIiLCJMb2FkZXIiLCJDYXJkIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIk1hcCIsIkluZm9XaW5kb3ciLCJNYXJrZXIiLCJHb29nbGVBcGlXcmFwcGVyIiwiQ3VycmVudExvY2F0aW9uIiwiUmVxdWVzdE5ldyIsInByb3BzIiwic3RhdGUiLCJzdG9yZXMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImdvb2dsZSIsIm9uTWFya2VyQ2xpY2siLCJhY3RpdmVNYXJrZXIiLCJzaG93aW5nSW5mb1dpbmRvdyIsIm9uQ2xvc2UiLCJmbGFnMiIsIm9uU3VibWl0IiwiY05hbWUiLCJzZXRTdGF0ZSIsIm5hbWUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicGlja3VwTG9jYXRpb24iLCJkcm9wTG9jYXRpb24iLCJvbkZpbmFsaXplIiwibWFyZ2luVG9wIiwiZmxhZyIsIm9uU2hvd1Jlc3VsdCIsImxvYWRpbmciLCJhZGRyZXNzIiwicXVlcnkiLCJjYW1wYWlnbiIsInJlcXVlc3RzIiwiZGlzcGxheU1hcmtlcnMiLCJtYXAiLCJzdG9yZSIsImluZGV4IiwibGF0IiwibG5nIiwiY29uc29sZSIsImxvZyIsInNlbGVjdGVkUGxhY2UiLCJtYXJrZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJvcGVuIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVSZXF1ZXN0Iiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwiYXBpS2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hC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QTs2QkFDVDtrQ0FBQSxBQUFNLEFBRU47O21DQUFBLEFBQUssU0FBUyxFQUFDLE9BQWYsQUFBYyxBQUFRLEFBRXRCOzttQ0FBQSxBQUFPLHFCQUFtQixPQUFBLEFBQUssTUFBL0IsQUFBcUMsbUJBTDVCLEFBS1QsQUFBb0Q7OzZCQUwzQzs2QkFBQTs2Q0FBQTs7QUFBQTt5QkFBQTtBOzs7Ozs7O1NBUWIsQTs2RkFBZSxrQkFBQSxBQUFNLE9BQU47NEVBQUE7MEJBQUE7dURBQUE7NkJBQ1g7a0NBQUEsQUFBTSxBQUNOO21DQUFBLEFBQU8scUJBQW1CLE9BQUEsQUFBSyxNQUEvQixBQUFxQyxzQkFGMUIsQUFFWCxBQUF1RDs7NkJBRjVDOzZCQUFBOzZDQUFBOztBQUFBO3lCQUFBO0E7Ozs7Ozs7U0FLZixBOzZGQUFXLGtCQUFBLEFBQU0sT0FBTjt1RUFBQTs7NEVBQUE7MEJBQUE7dURBQUE7NkJBQ1A7a0NBQUEsQUFBTSxBQUVBOztBQUhDLHVDQUdVLHdCQUFTLE9BQUEsQUFBSyxNQUh4QixBQUdVLEFBQW9CO3FDQUNXLE9BSnpDLEFBSThDLE9BSjlDLEFBSUMsZUFKRCxBQUlDLE9BSkQsQUFJUSx3QkFKUixBQUlRLGdCQUpSLEFBSXdCLHNCQUp4QixBQUl3QixBQUUvQjs7bUNBQUEsQUFBSyxTQUFTLEVBQUMsU0FOUixBQU1QLEFBQWMsQUFBVTs7NkNBTmpCOzZDQUFBO21DQVNvQixjQUFBLEFBQUssSUFUekIsQUFTb0IsQUFBUzs7NkJBQTFCO0FBVEgsaURBQUE7NkNBQUE7NENBVUcsQUFBUyxRQUFULEFBQWlCLGNBQWpCLEFBQStCLE9BQS9CLEFBQXNDLGdCQUF0QyxBQUF1RCxjQUF2RCxBQUFxRTtzQ0FDakUsU0FYUCxBQVVHLEFBQTBFLEFBQ3RFLEFBQVM7QUFENkQsQUFDNUUsNkJBREU7OzZCQUlOOzttQ0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFGLEFBQVMsSUFBSSxjQUFiLEFBQTJCLElBQUksZ0JBQTdDLEFBQWMsQUFBK0MsQUFFN0Q7OzJDQUFBLEFBQU8sMEJBQXdCLE9BQUEsQUFBSyxNQUFwQyxBQUEwQyxVQWhCdkM7NkNBQUE7QUFBQTs7NkJBQUE7NkNBQUE7OERBa0JIOztvQ0FBQSxBQUFRLElBQUksYUFsQlQsQUFrQkgsQUFBZ0I7OzZCQUVwQjttQ0FBQSxBQUFLLFNBQVMsRUFBQyxNQUFmLEFBQWMsQUFBTyxBQUNyQjttQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQXJCUixBQXFCUCxBQUFjLEFBQVU7OzZCQXJCakI7NkJBQUE7NkNBQUE7O0FBQUE7c0NBQUE7QTs7Ozs7O0FBc0hmOzs7WUFBZSxBQUFpQixBQUNwQjtBQURvQixBQUM1QixDQURXLEVBQWYsQUFBZSxBQUVWIiwiZmlsZSI6ImFkZC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaWJ1L0Rlc2t0b3AvZF9vbGEifQ==