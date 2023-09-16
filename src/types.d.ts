declare module "really-relaxed-json" {
  // Задекларировали типизацию метода toJson из сторонней пакета really-relaxed-json
  export function toJson(rjsonString: string, compact?: boolean): string;
}
