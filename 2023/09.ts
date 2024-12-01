type Reverse<
  TString extends string,
  TAccumulator extends string = ""
> = TString extends `${infer FirstCharacter}${infer Remaining}`
  ? Reverse<Remaining, `${FirstCharacter}${TAccumulator}`>
  : TAccumulator;
