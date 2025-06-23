function timeCounter(sec){
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Прошло ${sec} секунд!`);
      sec++;
      resolve(sec);
    }, 1000)
  })
}
timeCounter(1)
  .then(timeCounter)
  .then(timeCounter)
  .then(timeCounter)
  .then(timeCounter)