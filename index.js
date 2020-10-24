const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (arr) => {
  const result = arr.find((obj) => obj.result === "W");
  return result ? result.year : undefined;
};