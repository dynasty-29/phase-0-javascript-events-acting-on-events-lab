// Your code here
// first let me get my dodger element
const dodger = document.getElementById('dodger');
dodger.style.left = "0px";

//what needs to change to make a moveDodgerRight() function.    
function moveDodgerRight(){
    const leftnum = dodger.style.left.replace("px", "");
    const left = parseInt(leftnum, 10);
    
    // move dodger ${left + 1}px
    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }    
}

//move dodger left remains as per code walthrough
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

//now my listener function
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });