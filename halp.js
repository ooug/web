var TestMe = /** @class */ (function () {
  function TestMe(msg) {
    console.log(msg);
  }
  TestMe.prototype.doLogin = function () {
    console.log('hello world');
  };
  return TestMe;
})();
var test = new TestMe('wow');
test.doLogin();
