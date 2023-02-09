// Write a function that converts HEX to RGB. Then Make that function auto-detect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

function convertHexAndRgb(colorStr) {
  if (colorStr.startsWith("#")) {
    colorStr = colorStr.replace("#", "");
    const [red, green, blue] = [
      colorStr.slice(0, 2),
      colorStr.slice(2, 4),
      colorStr.slice(4, 6),
    ];
    const colors = [red, green, blue];

    const rgbColors = colors.map((color) => {
      return convertHexToDecimal(color);
    });

    return `rgb(${rgbColors[0]}, ${rgbColors[1]}, ${rgbColors[2]})`;
  } else {
    const decimals = colorStr.replace("rgb(", "").replace(")", "").split(", ");
    let hexNums = decimals.map((decimal) => {
      return convertDecimalToHex(decimal);
    });

    return `#${hexNums.join("")}`;
  }
}

function convertHexToDecimal(hex) {
  const hexNums = hex
    .toLowerCase()
    .split("")
    .map((num) => {
      switch (num) {
        case "a":
          return (num = 10);
        case "b":
          return (num = 11);
        case "c":
          return (num = 12);
        case "d":
          return (num = 13);
        case "e":
          return (num = 14);
        case "f":
          return (num = 15);
        default:
          return num;
      }
    });

  return Number(hexNums[0] * 16) + Number(hexNums[1]);
}

function convertDecimalToHex(decimal) {
  let hexNums = [];
  let wholeNum = decimal;
  let remainder = 0;
  let result = 0;

  while (wholeNum > 0) {
    result = wholeNum / 16;
    [wholeNum, remainder] = String(result).split(".");
    remainder = Number(`0.${remainder}`);
    hexNums.push(remainder * 16);
  }

  const hexs = hexNums.map((num) => {
    switch (num) {
      case 10:
        return (num = "a");
      case 11:
        return (num = "b");
      case 12:
        return (num = "c");
      case 13:
        return (num = "d");
      case 14:
        return (num = "e");
      case 15:
        return (num = "f");
      default:
        return num;
    }
  });

  return hexs.reverse().join("");
}

console.log(convertHexAndRgb("#2c18b6"));
console.log(convertHexAndRgb("rgb(44, 24, 182)"));
