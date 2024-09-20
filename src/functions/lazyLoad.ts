import { lazy } from "react";

export const lazyLoad = (url: string, namedExport: string) => {
  return lazy(() => {
    const thePromise = import(url);
    console.log(thePromise)
    return namedExport == null
      ? thePromise
      : thePromise.then((module) => ({ default: module[namedExport] }));
  });
};
