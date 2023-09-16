"use strict";
function test(n) {
    return n;
}
// let f: StrOrNum = test;
class A {
    getB() {
        return function () {
            // this.b = 1; Этот контейнер затемняет внешнее значение "this".
        };
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
}
function createUser(user) {
    //.....
    const defaultUser = new User("default");
    console.log(user);
    console.log(defaultUser);
}
