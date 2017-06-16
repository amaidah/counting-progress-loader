const $loadBtn = document.querySelector('.load-btn'),
      $bar = document.querySelector('.bar'),
      $progress = document.querySelector('.progress'),
      $numRemaining = document.querySelector('.loads-num');

let counter = 0;

let time = 3000;

function handleStartClick(evt) {
  if (counter === 0) {
    loadProgressBar(time);

    let checkCounterID = setInterval(checkCounter, time);

    function checkCounter() {
      if (counter > 1) {
        loadProgressBar(time);
      }
      else {
        clearInterval(checkCounterID);
      }
    }
  }
  counter++;
  $numRemaining.textContent = counter;
}

function loadProgressBar(time) {
  let timeInterval = time/100;
  let width = 0;

  //set interval for incrementing width
  let widthID = setInterval(increment, timeInterval);

  function increment() {
    if (width > 99) {
      clearInterval(widthID);
      counter--;
      $numRemaining.textContent = counter;
    }
    else {
      width++;
      $bar.style.width = `${width}%`
    }
  }
}



$loadBtn.addEventListener('click', handleStartClick);
