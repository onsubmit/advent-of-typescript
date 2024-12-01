type StreetSuffixTester<T extends string, TSuffix extends string> = T extends `${infer A}${TSuffix}`
  ? true
  : false;
