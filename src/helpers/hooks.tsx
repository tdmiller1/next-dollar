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

export const isNegative = (number: string | number): boolean => {
  if (typeof number === "number") {
    return number < 0;
  }
  return parseInt(number, 10) < 0;
};
