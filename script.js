function convertToRomanNumerals(num) {
  // const len = Math.abs(num).toString().length;
  const len = Math.trunc(Math.log10(num) + 1);

  let romanNum = "";

  function digitToRoman(dozens, digit) {
    function getDozens(tens) {
      let unit = "";
      let fiveUnits = "";
      switch (tens) {
        case 0:
          unit = "I";
          fiveUnits = "V";
          break;
        case 1:
          unit = "X";
          fiveUnits = "L";
          break;
        case 2:
          unit = "C";
          fiveUnits = "D";
          break;
        case 3:
          unit = "M";
          break;
        default:
          break;
      }
      return { unit, fiveUnits };
    }

    const { unit, fiveUnits } = getDozens(dozens);
    const { unit: nextUnit } = getDozens(dozens + 1);

    switch (digit) {
      case 1:
        romanNum = unit + romanNum;
        break;
      case 2:
        romanNum = unit + unit + romanNum;
        break;
      case 3:
        romanNum = unit + unit + unit + romanNum;
        break;
      case 4:
        romanNum = unit + fiveUnits + romanNum;
        break;
      case 5:
        romanNum = fiveUnits + romanNum;
        break;
      case 6:
        romanNum = fiveUnits + unit + romanNum;
        break;
      case 7:
        romanNum = fiveUnits + unit + unit + romanNum;
        break;
      case 8:
        romanNum = fiveUnits + unit + unit + unit + romanNum;
        break;
      case 9:
        romanNum = unit + nextUnit + romanNum;
        break;
      default:
        break;
    }
  }

  for (let i = 0; i < len; i += 1) {
    const digit = Math.trunc((num / 10 ** i) % 10);
    digitToRoman(i, digit);
  }

  return romanNum;
}
const containerEl = document.querySelector(".container");
const inputEl = document.getElementById("input-arabic-digit");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", startCalc);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") startCalc();
});

function startCalc() {
  const num = +inputEl.value;
  const romanNum = convertToRomanNumerals(num);
  const romanNumEl = document.createElement("h2");
  romanNumEl.textContent = romanNum;
  console.log(romanNum, romanNumEl);
  containerEl.appendChild(romanNumEl);
}
