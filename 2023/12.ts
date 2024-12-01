type StringToNumber<T extends string> = T extends `${infer N extends number}` ? N : never;
type FindSanta<T extends string[]> = StringToNumber<
  { [K in keyof T]: T[K] extends "🎅🏼" ? K : never }[any]
>;
