function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sub2 =
/*#__PURE__*/
function () {
  function Sub2(name) {
    _classCallCheck(this, Sub2);

    this.name = name;
  }

  _createClass(Sub2, [{
    key: "walk",
    value: function walk() {
      console.log("".concat(this._name, "\u304C\u6B69\u3044\u3066\u307E\u3059"));
    }
  }, {
    key: "name",
    set: function set(name) {
      this._name = name;
    },
    get: function get() {
      return this._name;
    }
  }]);

  return Sub2;
}();

export { Sub2 as default };
console.log('this file is in sub1');
console.log('test');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9qcy9hdG9tcy9jb21wb25lbnRzL3N1YjEvaW5kZXguanMiXSwibmFtZXMiOlsiU3ViMiIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiX25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFxQkEsSTs7O0FBQ25CLGdCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzJCQVVNO0FBQ0xDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlLEtBQUtDLEtBQXBCO0FBQ0Q7OztzQkFWUUgsSSxFQUFNO0FBQ2IsV0FBS0csS0FBTCxHQUFhSCxJQUFiO0FBQ0QsSzt3QkFFVTtBQUNULGFBQU8sS0FBS0csS0FBWjtBQUNEOzs7Ozs7U0FYa0JKLEk7QUFrQnJCRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBRCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViMiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0IG5hbWUobmFtZSkge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICB3YWxrKCkge1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX25hbWV944GM5q2p44GE44Gm44G+44GZYCk7XG4gIH1cbn1cblxuY29uc29sZS5sb2coJ3RoaXMgZmlsZSBpcyBpbiBzdWIxJyk7XG5jb25zb2xlLmxvZygndGVzdCcpO1xuIl19