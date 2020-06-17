export const shuffle = (array) => {
  let temp = [];
  let newTemp = [];
  let originalLength = array.length;
  for (var i = 0; i < originalLength; i++) {
    temp.push(array.splice(Math.floor(Math.random() * array.length), 1));
  }

  for (var j = 0; j < temp.length; j++) {
    newTemp.push(temp[j][0]);
  }
  return newTemp;
};
