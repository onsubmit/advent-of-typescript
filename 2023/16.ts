type ToNumber<T extends string | number> = T extends `${infer N extends number}` ? N : never;
type FindSantaFromStringTuple<T extends string[]> = ToNumber<
  { [TCol in keyof T]: T[TCol] extends "🎅🏼" ? TCol : never }[any]
>;
type FindSanta<T extends string[][]> = {
  [TRow in keyof T]: FindSantaFromStringTuple<T[TRow]> extends infer TCol
    ? TCol extends never
      ? never
      : [ToNumber<TRow>, TCol]
    : never;
}[number];
