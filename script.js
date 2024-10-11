// create a tic tac toe class
class TIC_TAC_TOE {
  // create a paremetrized constructor
  //  this constructor recieve two parameter first is array and secomd is boolean value

  constructor(boxArray, isTrue) {
    this.boxArray = boxArray;
    this.isTrue = isTrue;
    this.gameOver = false;
  }

  // set  value of x and o
  set_X_O() {
    // targeting box array using for each loop
    // this loop recieve one parameter value of array
    this.boxArray.forEach((ele) => {
      // targeting array elements and add clciking event listner

      document.getElementById(ele).addEventListener("click", () => {
        const box = document.getElementById(ele);

        // if inside box text will be not present then user can write text
        // and also check gameover is true or not
        if (!box.innerText && !this.gameOver) {
          // if value of istrue is true then user will write inside box in 'x' otherwise 'o'
          if (this.isTrue) {
            box.innerText = "X";
            // add when user write 'x' then genterate sound
            this.sounds();

            this.hover(this.isTrue);
          } else {
            box.innerText = "O";
            // add when user write 'o' then genterate sound
            this.sounds();
            this.hover(this.isTrue);
          }
          // set value istrue is false
          this.isTrue = !this.isTrue;
          // calling  winner function()
          this.set_Winner();
        }
      });
    });
  }

  // winning function() this funtion checks who is winner
  set_Winner() {
    // winning combinations are store in 2d array
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // iterate one by one row using for loop 
    for (let i = 0; i < winningCombinations.length; i++) {

      // store value of each row in  variable a,b and c
      const [a, b, c] = winningCombinations[i];

      // targeting boxarray[a],boxarray[b],boxarray[c], 
      //winning combination rows and store values in box1,box2,box3 variable 

      const box1 = document.getElementById(this.boxArray[a]);
      const box2 = document.getElementById(this.boxArray[b]);
      const box3 = document.getElementById(this.boxArray[c]);

      //if condition check if innertext of box1,box2 and box3 are same
      // then call popup()function and set value of gameover is true and break 
      if (
        box1.innerText &&
        box1.innerText === box2.innerText &&
        box1.innerText === box3.innerText
      ) {
        // call popup() function  and pass value of box1.inner text 
        // if winner is x then pass value as 'x' otherwise pass 'y'.
        this.popup(box1.innerText);

        console.log(box1.innerText);
        // set value of gameover is true 
        this.gameOver = true;
        break;
      }

      //check game is  tie or not
      // set value of istie is true 
      let isTie = true; 
      // iterate using foreach loop in boxarray
      this.boxArray.forEach((ele) => {
        // this condition check boxarray in each element of  innertext of  is empty or not 
        // if innertext is not present then set value of is tie is false 
        if (!document.getElementById(ele).innerText) {
          isTie = false;
        }
      });
      //this condition check if istie is true and value of gameover is false
      if (isTie && !this.gameOver) {
        //call popup() function
        this.popup("Tie");
        //set value of gameover is true 
        this.gameOver = true;
      }
    }
  }

  //popup() function 
  popup(winner) {
    // create a div container using createelement funtion()
    const popupContainer = document.createElement("div");
    // add  a class selector on div container
    popupContainer.classList.add("popup");

    // is value of winner is 'x' or 'o' 
    if (winner == "X" || winner == "O") {
      // create a h1 tag inside div container 
      popupContainer.innerHTML = `<h1>${winner} wins!</h1>`;
      // Winning sound call karein yahaan
      // add winning sound()
      const sound = new Audio("sound2.mp3");
      // play sound()
      sound.play();
    } else {
      // if tie  then else block executed 
      popupContainer.innerHTML = `<h1>${winner}</h1>`;
      // Winning sound call karein yahaan
      const sound = new Audio("loose.mp3");
      sound.play();
    }
    // add body insider popupcontainer or div container 
    document.body.appendChild(popupContainer);
  }

  // create a restart button()
  restart() {
    // targeting all 9 boxes 
    const button = document.getElementById("btn");
    // add click event listner 
    button.addEventListener("click", () => {
      // iterate all boxes 
      this.boxArray.forEach((ele) => {
        // clear value of all boxes 
        document.getElementById(ele).innerText = "";
      });
      // set gameover is false 
      this.gameOver = false;
      // set is true is true 
      this.isTrue = true;
      // targeting popup container 
      const popup = document.querySelector(".popup");
      // clear() method clear 
      //backgound color of player1 and player2
      this.clear();
      //if restart game  remove popup() message
      if (popup) {
        popup.remove();
      }
    });
  }
  // clear() method clear background color of player1 and player2
  clear() {
    let p1 = document.getElementById("player1");
    let p2 = document.getElementById("player2");
    p1.style.backgroundColor = "aqua";
    p2.style.backgroundColor = "aqua";
  }
  // hover method hover when if 'x' or 'y' plays generate background 
  // color as pink
  hover(isTrue) {
    let p1 = document.getElementById("player1");
    let p2 = document.getElementById("player2");
    if (isTrue) {
      p1.style.backgroundColor = "hotpink";
      p2.style.backgroundColor = "aqua";
      // p1.style.boxShadow=' 2px 2px 2px 10px hotpink,-2px -2px 15px hotpink';
    } else {
      p2.style.backgroundColor = "hotpink";
      p1.style.backgroundColor = "aqua";
    }
  }
  //  sound when user 
  //click any box genterate sound
  sounds() {
    const playSounds = document.querySelectorAll(".boxes");

    playSounds.forEach((button) => {
      button.addEventListener("click", () => {
        const sound = new Audio("sound1.mp3");
        sound.play();
      });
    });
  }

  // add clicking button sound
  button() {
    // Winning sound call karein yahaan
    document.querySelector("#btn").addEventListener("click", () => {
      const sound = new Audio("click2.mp3");
      sound.play();
    });
  }
}

// create a box array and store id as a element in boxarray
const boxArray = [
  "box1",
  "box2",
  "box3",
  "box4",
  "box5",
  "box6",
  "box7",
  "box8",
  "box9",
];
// create object and pass inside constructor actual argument as a boxarray and istrue value
obj = new TIC_TAC_TOE(boxArray, true);
// call methods()
obj.set_X_O();
obj.restart();
obj.button();
