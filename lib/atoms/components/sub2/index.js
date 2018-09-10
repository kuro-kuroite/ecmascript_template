function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import { log } from 'util';

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
      console.log('cat');
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
console.log('this file is in sub2!!');
console.log('this file is in sub2');
console.log('this is one comment in sub2');
console.log('this is another comment in sub2');
console.log('this is some comment in sub2');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9qcy9hdG9tcy9jb21wb25lbnRzL3N1YjIvaW5kZXguanMiXSwibmFtZXMiOlsibG9nIiwiU3ViMiIsIm5hbWUiLCJjb25zb2xlIiwiX25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFNBQVNBLEdBQVQsUUFBb0IsTUFBcEI7O0lBRXFCQyxJOzs7QUFDbkIsZ0JBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7MkJBVU07QUFDTEMsTUFBQUEsT0FBTyxDQUFDSCxHQUFSLFdBQWUsS0FBS0ksS0FBcEI7QUFDQUQsTUFBQUEsT0FBTyxDQUFDSCxHQUFSLENBQVksS0FBWjtBQUNEOzs7c0JBWFFFLEksRUFBTTtBQUNiLFdBQUtFLEtBQUwsR0FBYUYsSUFBYjtBQUNELEs7d0JBRVU7QUFDVCxhQUFPLEtBQUtFLEtBQVo7QUFDRDs7Ozs7O1NBWGtCSCxJO0FBc0JyQkUsT0FBTyxDQUFDSCxHQUFSLENBQVksd0JBQVo7QUFDQUcsT0FBTyxDQUFDSCxHQUFSLENBQVksc0JBQVo7QUFDQUcsT0FBTyxDQUFDSCxHQUFSLENBQVksNkJBQVo7QUFDQUcsT0FBTyxDQUFDSCxHQUFSLENBQVksaUNBQVo7QUFDQUcsT0FBTyxDQUFDSCxHQUFSLENBQVksOEJBQVoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2cgfSBmcm9tICd1dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViMiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0IG5hbWUobmFtZSkge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICB3YWxrKCkge1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX25hbWV944GM5q2p44GE44Gm44G+44GZYCk7XG4gICAgY29uc29sZS5sb2coJ2NhdCcpO1xuICB9XG59XG5cblxuXG5cbmNvbnNvbGUubG9nKCd0aGlzIGZpbGUgaXMgaW4gc3ViMiEhJyk7XG5jb25zb2xlLmxvZygndGhpcyBmaWxlIGlzIGluIHN1YjInKTtcbmNvbnNvbGUubG9nKCd0aGlzIGlzIG9uZSBjb21tZW50IGluIHN1YjInKTtcbmNvbnNvbGUubG9nKCd0aGlzIGlzIGFub3RoZXIgY29tbWVudCBpbiBzdWIyJyk7XG5jb25zb2xlLmxvZygndGhpcyBpcyBzb21lIGNvbW1lbnQgaW4gc3ViMicpO1xuIl19