export const isNegative = (number: number): boolean => number < 0;

interface MyType {
  [name: string]: string;
}

export const getQueryParams = (): MyType => {
  const queryParams: MyType = {};
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.hash);

    for (const param of params.entries()) {
      const key = param[0];
      const value = param[1];
      queryParams[key] = value;
      return queryParams;
    }

    return queryParams;
  }

  return {};
};
