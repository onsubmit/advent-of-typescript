type SantasList<T1 extends ReadonlyArray<unknown>, T2 extends ReadonlyArray<unknown>> = [
  ...T1,
  ...T2
];
