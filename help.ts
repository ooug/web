class TestMe {
  constructor(msg: string) {
    console.log(msg);
  }

  public doLogin() {
    console.log('hello world');
  }
}

const test = new TestMe('wow');
test.doLogin();
