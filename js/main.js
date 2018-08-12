let phoneComb = {
  phone: {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  },

  mobileWords: function(numbersArr) {
    // Checking that the input corresponds to the existing numbers:
    let wrongNum = [];
    for (let numbers of numbersArr) {
      if (!this.phone.hasOwnProperty(numbers)) {
        // Numbers that do not correspond to the existing keys get pushed in wrongNum array and listed to user on line 25:
        wrongNum.push(numbers);
      }
    }
    // If the wrongNum array is not empty, users get informed on line 25 that they need to change the numbers:
    if (wrongNum.length > 0) {
      document.getElementById(
        "words"
      ).innerHTML = `The following number/s do not correspond the requirement: ${wrongNum}. Please key in the correct numbers, which are from 2-9`;

      console.log(
        `The following number/s do not correspond the requirement: ${wrongNum}. Please key in the correct numbers, which are from 2-9`
      );
    } else {
      // else (or wrongNum array is empty), numbers get used to output the words using function on line 32:

      return this.wordsToOutput(numbersArr);
    }
  },
  wordsToOutput: function(numbersArr) {
    // first array of letters to append the rest of letters to :
    let firstNumArr = this.phone[numbersArr[0]].toUpperCase().split("");
    // change the input array of numbers by excluding the first element in order to combine all the remaining elements and obtain the letters to append to first array :
    let newNumbersArr = numbersArr.slice(1);
    // empty array that will be filled with remaining letters to be appended to the first array(line 34)
    let lastNumArr = [];
    // result that will be logged in console:
    let output = [];

    // Combine the remaining letters that will be appended to first array in line 54:
    for (let i = 0; i < newNumbersArr.length; i++) {
      lastNumArr.push(this.phone[newNumbersArr[i]].toUpperCase().split(""));
    }
    // flatten lastNumArr from line 45 and use in line 58 & 59:
    let flatLastNumArr = lastNumArr.reduce(
      (flat, curr) => flat.concat(curr),
      []
    );
    // loop through the first array of letters and append the letters from array from line 53:
    for (let i = 0; i < firstNumArr.length; i++) {
      for (let j = 0; j < flatLastNumArr.length; j++) {
        output.push(firstNumArr[i] + flatLastNumArr[j]);
      }
    }
    //output the result in the browser and console:
    document.getElementById("words").innerHTML = output;
    console.log(output);
  }
};

// input 1:
let numbersArr = [2, 5, 6, 7, 9];
// output 1:
//["AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AW", "AX", "AY", "AZ", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BW", "BX", "BY", "BZ", "CJ", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CS", "CW", "CX", "CY", "CZ"]

// input 2:
// let numbersArr = [2, 2];
// output 2:
//["AA", "AB", "AC", "BA", "BB", "BC", "CA", "CB", "CC"]

// input 3:
// let numbersArr = [25, 5, 6, 7, 9];
// output 3:
//The following number/s do not correspond the requirement: 25. Please key in the correct numbers, which are from 2-9

// call the function to get the result:
phoneComb.mobileWords(numbersArr);
