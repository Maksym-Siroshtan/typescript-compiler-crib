export const a = 5; // Экспорт по имени

export const obj = {}; // Экспорт по имени

export class Test {} // Экспорт по имени

export default function run() {
  // Экспорт по умолчанию
  console.log("run");
}

export type StrOrNum = string | number; // Экспорт типа

// export default type StrOrNum = string | number; Error - типы невозможно экспортировать по умолчанию
