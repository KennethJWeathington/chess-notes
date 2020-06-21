interface hasStringKey {
  [key: string]: any;
}

export function removeUndefinedProperties<T extends hasStringKey>(obj: T): T {
  const cloneObj = { ...obj };
  Object.entries(cloneObj).forEach(
    ([key, value]) => value === undefined && delete cloneObj[key]
  );
  return cloneObj;
}
