const textload = document.querySelector(".text-loading");
const bgm = document.querySelector(".bgm");

let load = 0;
let int = setInterval(blurring,  30);
function blurring(){
    load++
    if(load>99){
        clearInterval(int);
    }
    textload.innerText = `${load}%`
    textload.style.opacity = scale(load, 0,100, 1, 0);
    bgm.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
