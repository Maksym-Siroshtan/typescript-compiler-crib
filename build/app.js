"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import run, {a, Test as Cl, type StrOrNum} from "./modules/app2"; Смешанный импорт
const app2_1 = require("./modules/app2"); // Импорт по имени
const app2_2 = __importDefault(require("./modules/app2")); // Импорт по умолчанию
(0, app2_2.default)();
function log(value) {
    console.log(value);
}
log(app2_1.a);
