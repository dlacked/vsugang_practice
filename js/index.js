let ad = document.getElementById('adEle');
let c = 0;
setInterval(() => {
    if (c == 0){
        ad.innerHTML='<div><img id="hufs70" src="./img/dlacked.svg"></div>Developed by dlacked.';
        ++c
    }else{
        ad.innerHTML='<div><img id="hufs70" src="./img/hufs70.png"></div>한국외국어대학교 70주년';
        --c
    }
}, 3000);
