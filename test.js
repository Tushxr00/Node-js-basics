// const name = "mario";
// console.log(name);

console.log(global);
setTimeout(() => {
  console.log("here inside the setTimeout");
  clearInterval(init);
}, 3000);

const init = setInterval(() => {
  console.log("here inside the setInterval");
}, 1000);
