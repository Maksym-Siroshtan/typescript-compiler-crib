function test(n: number): number {
  return n;
}

type StrOrNum = (n: string | number) => number;

// let f: StrOrNum = test;

class A {
  b: number;

  getB() {
    return function () {
      // this.b = 1; Этот контейнер затемняет внешнее значение "this".
    };
  }
}

class User {
  constructor(public name: string) {}
}

function createUser(user: User) {
  //.....
  const defaultUser = new User("default");
  console.log(user);
  console.log(defaultUser);
}
