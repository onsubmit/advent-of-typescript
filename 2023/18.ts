type Find<T, TToy, TAccum extends unknown[] = []> = T extends [infer TFirst, ...infer TRest]
  ? TFirst extends TToy
    ? Find<TRest, TToy, [TFirst, ...TAccum]>
    : Find<TRest, TToy, TAccum>
  : TAccum;

type Count<T extends string[], TToy extends string> = Find<T, TToy>["length"];
