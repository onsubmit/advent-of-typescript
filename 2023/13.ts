type Enumerate<TStart extends number, TAccumulator extends number[] = []> =
  // TAccumulator is [0, 1, ..., n] where 'n' is recursion depth.
  TAccumulator["length"] extends TStart
    ? // Accumulator length is start number? Done.
      TAccumulator[number]
    : // Push the length (which is n + 1) to the end of the accumulator and recurse.
      Enumerate<TStart, [...TAccumulator, TAccumulator["length"]]>;

// Append TEnd since return union is 0..(n-1) and we want 0..n 😅
type DayCounter<TStart extends number, TEnd extends number> =
  | Exclude<Enumerate<TEnd>, Enumerate<TStart>>
  | TEnd;
