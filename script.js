var Dateofeighteen= new Date("Aug 25, 2023 00:00:00").getTime()

let funzione=setInterval(function() {
    let now= new Date().getTime()
    let differenza=Dateofeighteen-now
    if (differenza<=0) {
        console.log("success")
    }
    else {
        var giorni = Math.floor(differenza / (1000 * 60 * 60 * 24));
        var ore = Math.floor((differenza % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minuti = Math.floor((differenza % (1000 * 60 * 60)) / (1000 * 60));
        var secondi = Math.floor((differenza % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerText="Tempo residuo:\n"+giorni+"D "+ore+"H "+minuti+"M "+secondi+"S"
    }
}, 1000)