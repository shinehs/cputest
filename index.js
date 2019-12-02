let jsdata = {};
tenJson = () => {
  for (let i = 0; i < 10 * 1024; i++) {
    jsdata[i] = i * parseInt(Math.random() * 100000) + "";
  }
};
tenJson();
let formatData = JSON.stringify(jsdata);
console.log("~~~", "done");
