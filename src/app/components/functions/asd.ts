export const asd = (interval: number, startTime: number, endTime: number) => {
  var x = interval; //minutes interval
  var times = []; // time array
  var tt = startTime; // start time

  //loop to increment the time and push results in array
  for (var i = 0; tt < endTime; i++) {
    var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
    var mm = tt % 60; // getting minutes of the hour in 0-55 format
    times[i] = { time: `${hh}:${mm}` };
    tt = tt + x;
  }

  console.log(times);
};
