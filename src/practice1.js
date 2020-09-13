const parseData = (input) => {
  const result = [];
  for (const dataItem of input.data) {
    let expectObject = {};
    let index = 0;
    for (const dataDescription of input.column) {
      expectObject[dataDescription.name] = dataItem[index];
      index++;
    }
    result.push(expectObject);
  }

  return result;
}
export { parseData };
