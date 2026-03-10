
var linkpage = null;
var arlinki = [];
var Randomarlinki = [];
var RandomarlinkiAll = [];
var strandom = null;
var stskip = null;
var timerSumPlay = 0;
var timerZac = 0;
var timerOn = 0;



function uredigrupdata(Tip) {

  Randomarlinki.length = 0;
  RandomarlinkiAll.length = 0;

  for (vrstica = 0; vrstica < arlinki.length; vrstica++) {
    obstaja = 0;

    arlinki[vrstica][2] = arlinki[vrstica][2].replace('👢', '<img src="https://www.prettybarngood.com/favicon.ico" style="height:1em; vertical-align:middle;">&nbsp');


    for (rvrstica = 0; rvrstica < Randomarlinki.length; rvrstica++) {
      if (Randomarlinki[rvrstica][0] == arlinki[vrstica][0])
        obstaja = 1;
    }

    if (obstaja == 0) {
      /*
      Randomarlinki[Randomarlinki.length] = arlinki[vrstica][0];
      RandomarlinkiAll[RandomarlinkiAll.length] = arlinki[vrstica][0];
      */
      Randomarlinki.push([arlinki[vrstica][0], 0, 0, 0])
      RandomarlinkiAll.push([arlinki[vrstica][0], 0, 0])
    }


  }

  genrandomPlayL(5, 5, 0);


  x = 1;

}






function shuffle(array) {
  let currentIndex = array.length;


  // While there remain elements to shuffle...
  while (currentIndex != 0) {


    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;


    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}


function genrandomPlayL(stp, stz, zdr) {

  let RandomarlinkiZ = [];
  let RandomarlinkiP = [];

  Randomarlinki = [];


  if (stp > '0') {
    let RandomarlinkiP0 = RandomarlinkiAll.slice(0, RandomarlinkiAll.length - stz);
    shuffle(RandomarlinkiP0);
    RandomarlinkiP = RandomarlinkiP0.slice(0, stp);


    for (vrstica = 0; vrstica < RandomarlinkiP.length; vrstica++) {
      Randomarlinki.push([RandomarlinkiP[vrstica][0], 0, 0]);
      //      Randomarlinki[Randomarlinki.length] = RandomarlinkiP[vrstica];
    }
  }

  if (stz > '0') {
    RandomarlinkiZ = RandomarlinkiAll.slice(RandomarlinkiAll.length - stz, RandomarlinkiAll.length);
    //shuffle(RandomarlinkiZ);

    for (vrstica = 0; vrstica < RandomarlinkiZ.length; vrstica++) {
      Randomarlinki.push([RandomarlinkiZ[vrstica][0], 0, 0]);
      //Randomarlinki[Randomarlinki.length] = RandomarlinkiZ[vrstica];
    }


  }



  if (zdr)
    shuffle(Randomarlinki);

}


function utfToHex(str) {
  const bytes = new TextEncoder().encode(str);
  return Array.from(bytes)
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}


function hexToUtf(hex) {
  if (hex.length % 2 !== 0) {
    throw new Error("Neveljaven HEX niz");
  }

  const bytes = new Uint8Array(
    hex.match(/.{1,2}/g).map(byte => parseInt(byte, 16))
  );

  return new TextDecoder().decode(bytes);
}


function getBaseUrl(tip, url) {
  let u = new URL(url);
  if (tip == 1)
    return u.protocol + "//" + u.host;
  else
    return u.host;
}

function openLinkasklik(url) {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    a.click();
}


function gFrameNav(arlinkliID) {

  timerZac = Date.now();
  timerOn = 1;
/*
  if (getBaseUrl(0, arlinki[arlinkliID][1]) === 'www.prettybarngood.com') {
  linkpage = window.open('https://www.prettybarngood.com/sl/tutorials', "_blank");
  



 setTimeout(function () {
 linkpage.location.href = arlinki[arlinkliID][1];
 }, 4000); // 1 sekunda


  }
  else
*/    
    linkpage = window.open(arlinki[arlinkliID][1], "_blank");
}


function prikaziTimer(BrezVred, TimerIntervalMs) {
  let totalSeconds = Math.floor(TimerIntervalMs / 1000);
  let ss = totalSeconds % 60;
  let totalMinutes = Math.floor(totalSeconds / 60);
  let mm = totalMinutes % 60;
  let hh = Math.floor(totalMinutes / 60);

  let retval = '';
  if (hh !== 0 || BrezVred == 0) retval += String(hh).padStart(2, '0') + ':';
  if (hh !== 0 || mm !== 0 || BrezVred == 0) retval += String(mm).padStart(2, '0') + ':';
  if (hh !== 0 || mm !== 0 || ss !== 0 || BrezVred == 0) retval += String(ss).padStart(2, '0');

  return retval;
}

function kontrolniStringAZ(input, length) {
  if (!input || length <= 0) return "";

  const aCode = "a".charCodeAt(0);
  const zCode = "z".charCodeAt(0);
  const letters = zCode - aCode + 1;

  // preprost hash iz vhodnega niza
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0; // 32-bit unsigned
  }

  let result = "";
  let n = hash;

  for (let i = 0; i < length; i++) {
    const charCode = aCode + (n % letters);
    result += String.fromCharCode(charCode);
    n = Math.floor(n / letters) + i; // malo variira za večjo raznolikost
  }

  return result;
}















