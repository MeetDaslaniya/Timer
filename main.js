const btn = document.getElementById("btn");
btn.addEventListener("click", submitbtn);
function submitbtn() {
  var count = document.getElementById("input").value;
  const startbtn = document.getElementById("start");
  startbtn.addEventListener("click", () => {
    var id = setInterval(() => {
      if (count > 0) {
        count = count - 1;
        document.getElementById("cout").innerHTML = count + " sec";
      } else {
        document.getElementById("cout").innerHTML = "Initialize Timer";
      }
    }, 1000);
    const stop = document.getElementById("stop");
    stop.addEventListener("click", stopfun);
    function stopfun() {
      clearInterval(id);
      console.log("stop at", count);
    }
    const clear = document.getElementById("Clear");
    clear.addEventListener("click", mnp);
    function mnp() {
      document.getElementById("cout").innerHTML = "Timer";
      clearInterval(id);
      count = 0;
    }
  });
}
