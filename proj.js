function countDown(num) {
    let x = setInterval(function() {
        if (num-1 == 0) {
            console.log("DONE!");
            clearInterval(x);
        } else {
            num--;
            console.log(num);
            
        }
    }, 1000)
}


function randomGame() {
    let count = 0;
    let x = setInterval(function() {
      let num = Math.random();
      count++;
      if(num > 0.75) {
        clearInterval(x);
        console.log("Tries: " + count);
      }
    }, 1000)
  }
