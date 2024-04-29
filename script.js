"use strict" 
    window.addEventListener("load", start);

    function start() {
        console.log("JavaScript kører");
        showScene(scene1);

    }

    const scene1 = {
        title: "Juleaften - Forberedelsen",
        text:`<p>Julemanden har forstuvet anklen, og vi ved ikke endnu, om julen kan reddes<p></p>
        <p>De tre nisser, Nisse1, Nisse2 og Nisse3, diskuterer deres opgaver til forberedelse af juleaften</p>
        <p>Nisse1: "Julen nærmer sig, og vi skal beslutte, hvordan vi bedst kan hjælpe julemanden. Hvad skal vi starte med?"</p>
        <p>Nisse2: "Måske kunne vi starte med at pakke gaverne ind?"</p>`,
        
        choices: [
            "Nisse3 Svar A: Det lyder som en god start, men har vi nok gavepapir og bånd?",
            "Nisse3 Svar B: Ja, lad os få pakket de gaver ind, så vi kan komme videre til de næste opgaver!" 
]

        
    }

    function showScene(scene) {
        const html = 
        <div class="scene">
            <h2>$(scene.title)</h2>
            <div class="text">
            ${scene.text}
            </div>
            <div class="choices">
                ${scene.choices.map((choice, index) => '<button id="btn-${index}" onclick="showResponse('${choice.response}')">${choice.text}</button>').join('')}
            </div>
        </div>

        `;