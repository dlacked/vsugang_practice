let clickedTM = document.getElementById('TPButton')
let clickedSM = document.getElementById('SPButton')
let clickedBM = document.getElementById('BButton')

clickedTM.onclick = function(){
    location.replace('./html/timeMode.html')
}

clickedSM.onclick = function(){
    location.replace('./html/signupMode.html')
}

clickedBM.onclick = function(){
    location.replace('./html/basicMode.html')
}