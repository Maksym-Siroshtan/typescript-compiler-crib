// import run, {a, Test as Cl, type StrOrNum} from "./modules/app2"; Смешанный импорт
import { a as number } from "./modules/app2"; // Импорт по имени
import running from "./modules/app2"; // Импорт по умолчанию
import { type StrOrNum } from "./modules/app2"; // Импорт типа

running();

function log(value: StrOrNum) {
  console.log(value);
}

log(number);
