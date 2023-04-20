const input = document.getElementById("noOfWords");
const container = document.querySelector(".container");

const generateWords = (n) => {
  let text = "";
  const letters = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < n; ++i) {
    let random = (Math.random() * 25).toFixed(0);
    text += letters[random];
  }
  return text;
};

let numOfWords;
const generatePara = () => {
  numOfWords = Number(input.value);

  const para = document.createElement("p");
  let data = "";
  if (numOfWords <= 0) {
    alert("Enter a valid number");
  }

  else
   {
    for (let i = 0; i < numOfWords; i++) 
    {
      let randomNum = (Math.random() * 15).toFixed(0);
      data += generateWords(randomNum) + "  ";
    }

    para.innerHTML = data;
    para.setAttribute("id", "paragraph");

    container.append(para);
  }
};
