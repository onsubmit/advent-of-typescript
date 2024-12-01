type AppendGood<T> = { [K in keyof T & string as `good_${K}`]: T[K] };
