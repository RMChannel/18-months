let Music2=false
let Music3=false

function show(n) {
    document.getElementById("Mostra").style.display="none"
    document.getElementById("Anni").style.display="none"
    document.getElementById("anno").style.display="block"
    document.getElementById("back").style.display="block"
    let music=document.getElementById("music")
    if ((Music2) || (Music3)) {music.pause()}
    Music2=Music3=false
    if (n==3) {
        document.getElementById("Mesi2023").style.display="block"
        document.getElementById("anno").innerHTML="Anno: 2023"
    }
    else if (n==2) {
        document.getElementById("Mesi2022").style.display="block"
        document.getElementById("anno").innerHTML="Anno: 2022"
    }
}

function back() {
    if (Music2) {show(2)}
    else if (Music3) {show(3)}
    else {  
        document.getElementById("Mesi2022").style.display="none"
        document.getElementById("Mesi2023").style.display="none"
        document.getElementById("anno").style.display="none"
        document.getElementById("back").style.display="none"
        document.getElementById("Anni").style.display="block"
    }
}

titleofmusic={
    'F2':'She Looks So Perfect\n(5 Seconds of Summer)',
    'M2':'Festa\n(PSICOLOGI)',
    'A2':'Guerra e Pace\n(PSICOLOGI)',
    'MA2':'UMORE\n(PSICOLOGI, feat.ARIETE)',
    'GI2':'7 su 7\n(Naska)',
    'L2':'Mi manchi\n(Aka 7even)',
    'AG2':'Finché non Mi Seppelliscono\n(BLANCO)',
    'S2':'DON’T YOU WORRY\n(Black Eyed Peas, Shakira, David Guetta)',
    'O2':'Felicità puttana\n(Thegiornalisti)',
    'N2':'FreeBird\n(Lynyrd Skynyrd)',
    'D2':'Cradles\n(Sub Urban)',
    'G3':'Mille Guerre\n(Ariete)',
    'F3':'Me And My Broken Heart\n(Rixton)',
    'M3':'Futuro\n(PSICOLOGI)',
    'A3':'As it Was\n(Harry Styles)',
    'MA3':'Give a Little\n(LeGrand, CG5)',
    'GI3':'Don’t Stop Me Now\n(Queen)',
    'L3':'Stressed Out\n(Ben Schuller)',
    'AG3':'bellissimissima <3\n(Alfa)'
}
linkofmusic={
    'F2':'SLSP.mp3',
    'M2':'festa.mp3',
    'A2':'Guerra e pace.mp3',
    'MA2':'Umore.mp3',
    'GI2':'7su7.mp3',
    'L2':'mimanchi.mp3',
    'AG2':'seppelliscono.mp3',
    'S2':'dontyouworry.mp3',
    'O2':'felicitaputtana.mp3',
    'N2':'freebird.mp3',
    'D2':'cradles.mp3',
    'G3':'milleguerre.mp3',
    'F3':'brokenheart.mp3',
    'M3':'futuro.mp3',
    'A3':'asitwas.mp3',
    'MA3':'givealittle.mp3',
    'GI3':'dontstopmenow.mp3',
    'L3':'stressedout.mp3',
    'AG3':'bellissimissima.mp3'
}

function video(Mese) {
    let music=document.getElementById("music")
    music.src="Musics/"+linkofmusic[Mese]
    music.load()
    document.getElementById("Mesi2022").style.display="none"
    document.getElementById("Mesi2023").style.display="none"
    document.getElementById("anno").style.display="none"
    document.getElementById("titleofmusic").innerText=titleofmusic[Mese]
    document.getElementById("titleofmusic").style.fontSize="25px"
    document.getElementById("Mostra").style.display="contents"
    music.play()
    if (Mese.includes('2')) {Music2=true}
    else {Music3=true}
}