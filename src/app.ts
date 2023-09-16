import "really-relaxed-json";

// Не удалось найти файл объявления модуля "really-relaxed-json".
// Первое решение проблемы(не очень хорошее, проигнорировать следующую строку)
////@ts-ignore
// import { toJson } from "really-relaxed-json";
// const rjson = "[ one two three {foo:bar} ]";
// const json = toJson(rjson);
// console.log(json); // Working...

// Второе решение(хорошее) типизировать библиотеку самому
import { toJson } from "really-relaxed-json";
const rjson = "[ one two three {foo:bar} ]";
const json = toJson(rjson);
console.log(json); // Working
