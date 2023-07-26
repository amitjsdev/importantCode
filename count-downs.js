const getCountdown = (target_date) => {
  let days, hours, minutes, seconds; // variables for time units
  let current_date = new Date().getTime();
  let seconds_left = (target_date - current_date) / 1000;
  seconds_left = seconds_left % 86400;
  hours = pad(parseInt(seconds_left / 3600));
  seconds_left = seconds_left % 3600;
  minutes = pad(parseInt(seconds_left / 60));
  seconds = pad(parseInt(seconds_left % 60));
  finlTime = hours + ":" + minutes + ":" + seconds;
  setCount(finlTime);
};

//add timer on specific timer and find deffrence in microsecodns
let checkSeconds = 0;
let currentTime = new Date();
var holdTime = productData?.checkout_qty_queues[0]?.hold_time;
var expireTime = new Date(holdTime);
expireTime.setTime(holdTime + (TIME_DURATION / 60) * 60 * 1000);
if (expireTime.getTime() > currentTime.getTime()) {
  let msec = expireTime.getTime() - currentTime.getTime();
  const hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  const mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  const ss = Math.floor(msec / 1000);
  msec -= ss * 1000;

  let hours = hh < 10 ? "0" + hh : hh;
  let minutes = mm < 10 ? "0" + mm : mm;
  let second = ss < 10 ? "0" + ss : ss;

  var hms = hours + ":" + minutes + ":" + second + ""; // your input string
  var a = hms.split(":"); // split it at the colons

  checkSeconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];

  setSeconds(checkSeconds);
} else {
  setSeconds(checkSeconds);
}


//debounce


  const handleProductList = async (p) => {
    const debounceDelay = 1000;

let timeoutId = null;
    try {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      // Use setTimeout to delay API call
      timeoutId = setTimeout(async () => {
          //call api insite
      }, debounceDelay);
    } catch (error) {
      
    }
  };

