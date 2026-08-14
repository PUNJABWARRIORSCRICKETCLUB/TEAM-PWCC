function toggleSocialMenu(){

document
.getElementById("socialMenu")
.classList.toggle("hidden");

}
 
    
  function openProfile(id){


let p = players[id];


document
.getElementById("playerModal")
.classList
.remove("hidden");


document
.getElementById("playerModal")
.classList
.add("flex");



document.getElementById("playerName").innerText=p.name;

document.getElementById("playerRole").innerText=p.role;


document.getElementById("playerCardImage").src=p.img;



document.getElementById("matches").innerText=p.matches;

document.getElementById("runs").innerText=p.runs;

document.getElementById("wickets").innerText=p.wickets;

document.getElementById("sr").innerText=p.sr;

document.getElementById("avg").innerText=p.avg;

document.getElementById("highest").innerText=p.highest;
    
document.getElementById("fours").innerText=p.fours;

document.getElementById("sixes").innerText=p.sixes;

document.getElementById("economy").innerText=p.economy;

document.getElementById("bestBowling").innerText=p.bestBowling;

document.getElementById("catches").innerText=p.catches;

document.getElementById("stumpings").innerText=p.stumpings;

document.getElementById("impact").innerText=p.impact;


}




function closeProfile(){


document

.getElementById("playerModal")

.classList

.add("hidden");


document

.getElementById("playerModal")

.classList

.remove("flex");


}
    function closeLeague(){

document
.getElementById("leagueModal")
.classList.add("hidden");

}


function openLeague(type){

let modal=document.getElementById("leagueModal");

modal.classList.remove("hidden");

modal.classList.add("flex");


}
   window.onload=function(){

const loader=document.getElementById("loader");

const intro=document.getElementById("logoIntro");

setTimeout(()=>{

loader.style.display="none";

intro.classList.remove("hidden");

intro.style.opacity="1";

},2000);

setTimeout(()=>{

intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

},1000);

},7000);

}
     function openTeamLogo() {
    window.open(
        "https://raw.githubusercontent.com/PUNJABWARRIORSCRICKETCLUB/TEAM-PWCC/a619c2b6f5059743f84f624998cb6b1834bb2db1/Punjab_Warriors_Logo.png",
        "_blank"
    );
}


function openJersey(){

document
.getElementById("jerseyModal")
.classList.remove("hidden");

}


function closeJersey(){

document
.getElementById("jerseyModal")
.classList.add("hidden");

}


function openSponsorVideo(){

alert("Sponsor video coming soon");

}

function toggleMobileMenu(){

document
.getElementById("mobileMenu")
.classList
.toggle("hidden");

}

// Safe interaction helpers
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeProfile();closeLeague();closeJersey();document.getElementById('mobileMenu')?.classList.add('hidden');document.getElementById('socialMenu')?.classList.add('hidden')}});
document.addEventListener('click',e=>{const menu=document.getElementById('socialMenu'),btn=document.getElementById('socialBtn');if(menu&&btn&&!menu.contains(e.target)&&!btn.contains(e.target))menu.classList.add('hidden')});

