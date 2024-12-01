type DecipherNaughtyList<T extends string> =
  T extends `${infer TStart extends string}/${infer TEnd extends string}`
    ? TStart | DecipherNaughtyList<TEnd>
    : T;
