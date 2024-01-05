//for start timer
const start = document.getElementById("start");
start.addEventListener("click", xyz);
// console.log(count)
const btn = document.getElementById("btn");
btn.addEventListener("click", submitbtn);
function submitbtn(){
    var count = document.getElementById("input").value;
    xyz;
}
function xyz() {
    const id = setInterval(() => {
        if (count > 0) {
            count = count - 1;
            document.getElementById("cout").innerHTML = count + " sec";
        }
        else {
            document.getElementById("cout").innerHTML = "Initilize Timer";
        }

    }, 1000)

    // for stop timer
    const stop = document.getElementById("stop");
    stop.addEventListener("click", pqr);
    function pqr() {
        clearInterval(id);
        console.log("stop at", count);
    }

    // for Clear
    const clear = document.getElementById("Clear");
    clear.addEventListener("click", mnp);
    function mnp() {
        document.getElementById("cout").innerHTML = "Timer";
        clearInterval(id);
        count = 0
    }
}




