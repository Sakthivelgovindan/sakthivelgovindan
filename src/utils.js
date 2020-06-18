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

export const dynamicHomeImages = {
  0: require("./assets/svg/image1.svg"),
  1: require("./assets/svg/image2.svg"),
  2: require("./assets/svg/image3.svg"),
  3: require("./assets/svg/image4.svg"),
  4: require("./assets/svg/image5.svg"),
  5: require("./assets/svg/image6.svg"),
};

export const dynamicProfileImages = {
  0: require("./assets/png/profile1.png"),
  1: require("./assets/png/profile2.png"),
};
