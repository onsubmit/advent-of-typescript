type RemoveKeysThatStartWith<T, K extends string> = T extends `${K}${string}` ? T : never;
type RemoveNaughtyChildren<T> = Omit<T, RemoveKeysThatStartWith<keyof T, "naughty">>;
