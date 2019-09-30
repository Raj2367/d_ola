'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrentLocation = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/sibu/Desktop/d_ola/pages/campaigns/CurrentLocation.js';


var mapStyles = {
  map: {
    position: 'absolute',
    width: '90%',
    height: '100%'
  }
};

var CurrentLocation = exports.CurrentLocation = function (_React$Component) {
  (0, _inherits3.default)(CurrentLocation, _React$Component);

  function CurrentLocation(props) {
    (0, _classCallCheck3.default)(this, CurrentLocation);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CurrentLocation.__proto__ || (0, _getPrototypeOf2.default)(CurrentLocation)).call(this, props));

    var _this$props$initialCe = _this.props.initialCenter,
        lat = _this$props$initialCe.lat,
        lng = _this$props$initialCe.lng;

    _this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
    return _this;
  }

  (0, _createClass3.default)(CurrentLocation, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.google !== this.props.google) {
        this.loadMap();
      }
      if (prevState.currentLocation !== this.state.currentLocation) {
        this.recenterMap();
      }
    }
  }, {
    key: 'recenterMap',
    value: function recenterMap() {
      var map = this.map;
      var current = this.state.currentLocation;

      var google = this.props.google;
      var maps = google.maps;

      if (map) {
        var center = new maps.LatLng(current.lat, current.lng);
        map.panTo(center);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.centerAroundCurrentLocation) {
        if (navigator && navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (pos) {
            var coords = pos.coords;
            _this2.setState({
              currentLocation: {
                lat: coords.latitude,
                lng: coords.longitude
              }
            });
          });
        }
      }
      this.loadMap();
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this3 = this;

      var children = this.props.children;

      if (!children) return;

      return _react2.default.Children.map(children, function (c) {
        if (!c) return;
        return _react2.default.cloneElement(c, {
          map: _this3.map,
          google: _this3.props.google,
          mapCenter: _this3.state.currentLocation
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = (0, _assign2.default)({}, mapStyles.map);
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement('div', { style: style, ref: 'map', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, 'Loading map...'), this.renderChildren());
    }
  }, {
    key: 'loadMap',
    value: function loadMap() {
      if (this.props && this.props.google) {
        // checks if google is available
        var google = this.props.google;

        var maps = google.maps;

        var mapRef = this.refs.map;

        // reference to the actual DOM element
        var node = _reactDom2.default.findDOMNode(mapRef);

        var zoom = this.props.zoom;
        var _state$currentLocatio = this.state.currentLocation,
            lat = _state$currentLocatio.lat,
            lng = _state$currentLocatio.lng;

        var center = new maps.LatLng(lat, lng);
        var mapConfig = (0, _assign2.default)({}, {
          center: center,
          zoom: zoom
        });

        // maps.Map() is constructor that instantiates the map
        this.map = new maps.Map(node, mapConfig);
      }
    }
  }]);

  return CurrentLocation;
}(_react2.default.Component);
exports.default = CurrentLocation;


CurrentLocation.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: -1.2884,
    lng: 36.8233
  },
  centerAroundCurrentLocation: false,
  visible: true
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9DdXJyZW50TG9jYXRpb24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIm1hcFN0eWxlcyIsIm1hcCIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJDdXJyZW50TG9jYXRpb24iLCJwcm9wcyIsImluaXRpYWxDZW50ZXIiLCJsYXQiLCJsbmciLCJzdGF0ZSIsImN1cnJlbnRMb2NhdGlvbiIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImdvb2dsZSIsImxvYWRNYXAiLCJyZWNlbnRlck1hcCIsImN1cnJlbnQiLCJtYXBzIiwiY2VudGVyIiwiTGF0TG5nIiwicGFuVG8iLCJjZW50ZXJBcm91bmRDdXJyZW50TG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNvb3JkcyIsInBvcyIsInNldFN0YXRlIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJjaGlsZHJlbiIsIkNoaWxkcmVuIiwiYyIsImNsb25lRWxlbWVudCIsIm1hcENlbnRlciIsInN0eWxlIiwicmVuZGVyQ2hpbGRyZW4iLCJtYXBSZWYiLCJyZWZzIiwibm9kZSIsImZpbmRET01Ob2RlIiwiem9vbSIsIm1hcENvbmZpZyIsIk1hcCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInZpc2libGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTTs7Y0FDQyxBQUNPLEFBQ1Y7V0FGRyxBQUVJLEFBQ1A7WUFKSixBQUFrQixBQUNYLEFBR0ssQUFLWjtBQVJPLEFBQ0g7QUFGYyxBQUNoQjs7SUFRRixBQUFhLHdFQUFiOzJDQUVJOzsyQkFBQSxBQUFZLE9BQU87d0NBQUE7O3dKQUFBLEFBQ1Q7O2dDQUVlLE1BQUEsQUFBSyxNQUhYLEFBR2lCO1FBSGpCLEFBR1AsNEJBSE8sQUFHUDtRQUhPLEFBR0Ys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LEFBQVMsT0FBVCxBQUFnQixLQUEvQixBQUFlLEFBQXFCLEFBQ3BDO1lBQU0sa0NBQVksQUFDaEI7a0JBQ0EsQUFDVSxBQUNSO2dCQUpKLEFBQWtCLEFBRWhCLEFBRVEsQUFJVjtBQU5FLEFBQ0UsU0FIYzs7QUFTbEI7YUFBQSxBQUFLLE1BQU0sSUFBSSxLQUFKLEFBQVMsSUFBVCxBQUFhLE1BQXhCLEFBQVcsQUFBbUIsQUFDL0I7QUFDSjtBQXhHTDtBQUFBOztTQUFBO0VBQXFDLGdCQUFyQyxBQUEyQyxBQTBHM0M7a0JBQUEsQUFBZTs7O0FBRWYsZ0JBQUEsQUFBZ0I7UUFBZSxBQUNyQixBQUNOOztTQUNPLENBRFEsQUFDUCxBQUNOO1NBSnlCLEFBRVosQUFFUixBQUVQO0FBSmUsQUFDYjsrQkFIeUIsQUFNRSxBQUM3QjtXQVBKLEFBQStCLEFBT2xCO0FBUGtCLEFBQzNCIiwiZmlsZSI6IkN1cnJlbnRMb2NhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaWJ1L0Rlc2t0b3AvZF9vbGEifQ==