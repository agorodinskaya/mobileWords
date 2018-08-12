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

  mobileWords(numbersArr) {
    // Checking that the input corresponds to the existing numbers:
    const wrongNum = [];
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
      ).innerHTML = `${wrongNum} is not part of the list of numbers.
      Please key in the correct numbers, which are from 2-9`;

      console.log(
        `${wrongNum} is not part of the list of numbers.
        Please key in the correct numbers, which are from 2-9`
      );
    } else {
      return (
        numbersArr
          //Return the corresponding arrays of letters to the numbers selected by user in the numbersArr(line 54):
          .map(el => {
            // console.log(this.phone[el].toUpperCase().split(""));
            return this.phone[el].toUpperCase().split("");
          })
          // Combine the elements from the previously returned arrays(line 39) in line 46 :
          .reduce((a, b) => {
            let output = [];
            for (var i = 0; i < a.length; i++) {
              for (var j = 0; j < b.length; j++) {
                output.push(a[i] + b[j]);
              }
            }
            document.getElementById("words").innerHTML = output;
            return output;
          })
      );
    }
  }
};

// input 1:
let numbersArr = [2, 3, 5];
// output 1:
//["ADJ", "ADK", "ADL", "AEJ", "AEK", "AEL", "AFJ", "AFK", "AFL", "BDJ", "BDK", "BDL", "BEJ", "BEK", "BEL", "BFJ", "BFK", "BFL", "CDJ", "CDK", "CDL", "CEJ", "CEK", "CEL", "CFJ", "CFK", "CFL"]

// input 2:
// let numbersArr = [2, 5];
// output 2:
//["AJ", "AK", "AL", "BJ", "BK", "BL", "CJ", "CK", "CL"]

// input 3:
// let numbersArr = [25, 5, 6, 7, 9];
// output 3:
//25 is not part of the list of numbers.
// Please key in the correct numbers, which are from 2-9

// call the function to get the result:
console.log(phoneComb.mobileWords(numbersArr));
