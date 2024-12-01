type BoxToys<
  TToy extends string,
  TNumber extends number,
  TAccum extends string[] = []
> = TNumber extends TAccum["length"] ? TAccum : BoxToys<TToy, TNumber, [...TAccum, TToy]>;
