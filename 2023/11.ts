type SantaListProtector<T> = T extends Record<string, unknown> | unknown[]
  ? { readonly [K in keyof T]: SantaListProtector<T[K]> }
  : T;
