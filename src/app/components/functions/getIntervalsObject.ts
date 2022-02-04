export const getIntervalsObject = (times: any) => {
  var obj: any = {};

  for (var i = 0; i < times.length; i++) {
    obj[i] = times[i].time;
  }
  console.log(obj);
  return obj;
};
