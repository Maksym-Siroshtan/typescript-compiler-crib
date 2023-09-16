"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.obj = exports.a = void 0;
exports.a = 5; // Экспорт по имени
exports.obj = {}; // Экспорт по имени
class Test {
} // Экспорт по имени
exports.Test = Test;
function run() {
    // Экспорт по умолчанию
    console.log("run");
}
exports.default = run;
// export default type StrOrNum = string | number; Error - типы невозможно экспортировать по умолчанию
