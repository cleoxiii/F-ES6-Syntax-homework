// TODO 可以思考一下可否用reduce来做
// TODO 使用解构的方式取出data与column
const parseData = (input) => {
  // TODO 使用map做数组与数组的转化，不用声明新数组
  const result = [];
  for (const dataItem of input.data) {
    let expectObject = {};
    // TODO 不用重新声明 index，使用valueList.entries或forEach
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
