var urli = null;
var timerx = null;

//kreiranje liste
var zdruziActive = false;
var stStari = 5;
var stNovi = 5;
var novoRange = null;
var novoNumber = null;
var zdruziIcon = null;
var KreSezOsvAkt = 0





function KreSezOsv(pOBJID, stS, stN) {

  if (KreSezOsvAkt == 1) {
    KreSezOsvAkt = 0;
    StPlesov = RandomarlinkiAll.length;
    maxS = 0;
    maxN = 0;


    if (pOBJID == 'zdruziIcon')
      zdruziActive ^= 1;


    if (pOBJID == 'stariRange')
      stStari = parseInt(document.getElementById("stariRange").value, 10);
    if (pOBJID == 'stariNumber')
      stStari = parseInt(document.getElementById("stariNumber").value, 10);
    if (pOBJID == 'novoRange')
      stNovi = parseInt(document.getElementById("novoRange").value, 10);
    if (pOBJID == 'novoNumber')
      stNovi = parseInt(document.getElementById("novoNumber").value, 10);

    if (pOBJID == 'init') {
      stStari = stS;
      stNovi = stN;

      document.getElementById("stariNumber").max = StPlesov
      document.getElementById("novoNumber").max = StPlesov;

    }

    document.getElementById("stariRange").max = StPlesov;
    document.getElementById("novoRange").max = StPlesov;

    if (pOBJID == 'stariRange' || pOBJID == 'stariNumber') {
      if (stStari > StPlesov)
        stStari = StPlesov;
      if (stStari + stNovi > StPlesov)
        stNovi = StPlesov - stStari;
    }


    if (stNovi > StPlesov)
      stNovi = StPlesov;

    if (stStari + stNovi > StPlesov)
      stStari = StPlesov - stNovi

    if (stStari + stNovi == 0)
      stNovi = 1;


    maxN = stNovi + 5;
    /*
    if (maxN > StPlesov)
      maxN = StPlesov;
    */


    maxS = stStari + 5;
    /*
    if (maxS > StPlesov - stNovi)
      maxS = StPlesov - stNovi;
    */



    document.getElementById("stariRange").max = maxS;
    document.getElementById("novoRange").max = maxN;



    document.getElementById("stariRange").value = stStari;
    document.getElementById("stariNumber").value = stStari;
    document.getElementById("novoRange").value = stNovi;
    document.getElementById("novoNumber").value = stNovi;






    if (zdruziActive) {
      document.getElementById("zdruziIcon").className = "bi bi-check-circle-fill text-light fs-4";
    } else {
      document.getElementById("zdruziIcon").className = "bi bi-circle text-secondary fs-4";
    }


    KreSezOsvAkt = 1;
  }
}

function runPlay(tip, vrsticar, vrstica) {

  if (tip == 0) {
    Randomarlinki[vrsticar][2] = 1;
  }

  if (tip == 1) {
    Randomarlinki[vrsticar][1] = 1;
    gFrameNav(vrstica)
  }

  prikazi_PListo(10, 'bodydiv');
}


function prikazi_PListo(tip, divid) {
  let strtmp = '';
  let strtmpbot = '';
  let tmparr = [];


  if (tip == 1) {
    genrandomPlayL(stStari, stNovi, zdruziActive);
  }

  if (tip == 0)
    tmparr = RandomarlinkiAll;
  else
    tmparr = Randomarlinki;


  if (tip < 10) {
    strtmp = `
<div class="container-fluid">
  <div class="row g-2">
    `;

    for (vrsticar = 0; vrsticar < tmparr.length; vrsticar++) {

      strtmp = strtmp + `
     <div class="col-md-4 bg-dark text-light">
      <div class="card shadow-sm rounded-2 p-1 h-100 bg-dark text-light">
        <div class="fs-7 fw-bold bg-dark text-light">${vrsticar + 1}</div>
         <div class="text-muted">
     `;

      for (vrstica = 0; vrstica < arlinki.length; vrstica++) {
        if (tmparr[vrsticar][0] === arlinki[vrstica][0]) {
          strtmp = strtmp + `
        <p class="m-0 lh-base d-flex flex-column align-items-center bg-dark text-light" onclick="gFrameNav(${vrstica})">
        <span class="fs-3 fw-bold">${arlinki[vrstica][2]}</span>
        <span class="fs-7">${arlinki[vrstica][3]}</span>
        </p>
      `;
        }
      }

      strtmp = strtmp + `
         </div>
      </div>
    </div>
`;


    }
    strtmp = strtmp + `
  </div >
</div >
        `;
  }


  if (tip == 10) {

    strtmp = `
<div class="d-flex justify-content-center align-items-center vh-70">
  <div class="p-4 bg-dark">
  `;



    stzapred = 0

    vfs7 = 'fs-7';
    vfs3 = 'fs-1 fw-bold';
    vtextlight = 'text-white';
    stplesnv = 0;
    for (vrsticar = 0; vrsticar < tmparr.length; vrsticar++) {

      if (tmparr[vrsticar][1] == 1)
        stplesnv++;

      if (tmparr[vrsticar][1] == 0 && tmparr[vrsticar][2] == 0)
        stzapred++;

      if (stzapred > 0) {

        if (stzapred == 2) {
          vfs7 = 'fs-8';
          vfs3 = 'fs-4';
          vtextlight = 'text-siva';

        }

        if (stzapred == 1)
          strtmp = strtmp + `
        <div class="fs-7 fw-bold bg-dark text-light">${stplesnv + 1}</div>
     `;


        strtmp = strtmp + `
         <div class="text-muted">
     `;


        for (vrstica = 0; vrstica < arlinki.length; vrstica++) {
          if (tmparr[vrsticar][0] === arlinki[vrstica][0]) {
            strtmp = strtmp + `
        <p class="m-0 lh-base d-flex flex-column align-items-center bg-dark ${vtextlight}"`

            if (stzapred == 1) {
              strtmp = strtmp + `
        onclick="runPlay(1,${vrsticar},${vrstica})"
        `;


              strtmpbot = `
  <div class="d-flex justify-content-between px-3 bg-dark p-3">
    <button class="btn btn-outline-light"
            onclick="runPlay(0,${vrsticar},${vrstica})">
      Preskoči
    </button>
    <button class="btn btn-outline-light"
            onclick="runPlay(1,${vrsticar},${vrstica})">
      Predvajaj
    </button>
  </div>
              `;

            }

            strtmp = strtmp + `
        >
        <span class="${vfs3}  fw-bold">${arlinki[vrstica][2]}</span>
        <span class="${vfs7}">${arlinki[vrstica][3]}</span>
        <span class="${vfs7}">&nbsp;</span>
        <span class="${vfs7}">&nbsp;</span>
        </p>
      `;









            break;
          }
        }


        strtmp = strtmp + `
         </div>
    `;

        if (stzapred == 2)
          break;


      }



    }




    strtmp = strtmp + `
      </div >
    </div >
            `;


    strtmp = strtmp + strtmpbot;

  }

















  if (divid != '')
    document.getElementById(divid).innerHTML = strtmp

}


function nalozi_body(par0) {
  if (par0 == 'SeznamPlesov') {
    prikazi_PListo(0, 'bodydiv');
    return 1
  }


  if (par0 == 'about') {
    document.getElementById('bodydiv').innerHTML = `
        < div class="container-fluid" >
          <div class="row g-2"> <!-- malo razmaka med stolpci -->

            <div class="col-md-4">
              <div class="card shadow-sm rounded-2 p-1 h-100">
                <div class="fs-4 fw-bold text-primary mb-1">01</div>
                <div class="text-muted">
                  <p class="m-0 lh-base">Prva vrstica besedila.</p>
                  <p class="m-0 lh-base">Druga vrstica besedila.</p>
                  <p class="m-0 lh-base">Tretja vrstica.</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card shadow-sm rounded-2 p-1 h-100">
                <div class="fs-4 fw-bold text-primary mb-1">02</div>
                <div class="text-muted">
                  Prva vrstica besedila.<br>
                    Druga vrstica besedila.<br>
                      Tretja vrstica.
                    </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card shadow-sm rounded-2 p-1 h-100">
                  <div class="fs-4 fw-bold text-primary mb-1">03</div>
                  <div class="text-muted">
                    Prva vrstica besedila.<br>
                      Druga vrstica besedila.<br>
                        Tretja vrstica.
                      </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="card shadow-sm rounded-2 p-1 h-100">
                    <div class="fs-4 fw-bold text-primary mb-1">03</div>
                    <div class="text-muted">
                      Prva vrstica besedila.<br>
                        Druga vrstica besedila.<br>
                          Tretja vrstica.
                        </div>
                    </div>
                  </div>

                </div>
              </div>
              `;
    return 1
  }




  if (par0 === 'predvajajSeznam') {
    prikazi_PListo(10, 'bodydiv');
  }




  if (par0 == 'services') {


    if (urli !== null) {
      urli.close();
      urli = null;
    }



    urli = window.open('https://www.youtube.com/watch?v=IYd1-cPwQCk', '_blank');
    document.getElementById('bodydiv').innerHTML = `
-->: https://www.youtube.com/watch?v=IYd1-cPwQCk
              `;



    /*
    if (timerx) clearInterval(timerx);

        timerx = setInterval(() => {
            if (urli.closed) {
                clearInterval(timerx); // ustavi interval
              alert('Tab se je zaprl');
            }
        }, 1000);
              */


    return 1
  }


  if (par0 == 'UstvariSeznam') {
    document.getElementById('bodydiv').innerHTML = `
<div class="container">

  <!-- STARI -->
  <div data-bs-theme="dark" class="mb-4">
    <label class="form-label">Stari</label>
    <div class="row align-items-center">
      <div class="col">
        <input type="range" class="form-range" id="stariRange" min="0" max="100" value="50" onchange="KreSezOsv('stariRange')">
      </div>
      <div class="col-3">
        <input type="number" class="form-control bg-dark text-light border-light"
               id="stariNumber" min="0" max="100" value="0" onchange="KreSezOsv('stariNumber')">
      </div>
    </div>
  </div>

  <!-- ZDRUŽI (custom icon checkbox) -->
  <div class="mb-4">
    <div class="d-flex align-items-center gap-2" style="cursor:pointer;" onclick="KreSezOsv('zdruziIcon')">
      <i id="zdruziIcon" class="bi bi-circle text-secondary fs-4"></i>
      <span>združi</span>
    </div>
  </div>

  <!-- NOVO -->
  <div data-bs-theme="dark" class="mb-4">
    <label class="form-label">Novo</label>
    <div class="row align-items-center">
      <div class="col">
        <input type="range" class="form-range"  id="novoRange" min="0" max="100" value="50" onchange="KreSezOsv('novoRange')" >
      </div>
      <div class="col-3">
        <input type="number" class="form-control bg-dark text-light border-light"
               id="novoNumber" min="0" max="100" value="0" onchange="KreSezOsv('novoNumber')">
      </div>
    </div>
  </div>

<a href="#" class="btn-img">
  <img src="img/kocka.gif" alt="Start" class="btn-img-inner black-style" onclick="prikazi_PListo(1,'playdiv')" >
</a>

<div id="playdiv" class="container mt-5 bg-dark text-light">


</div>



</div>
    `;

    KreSezOsvAkt = 1;
    KreSezOsv('');
    return 1
  }



  return 0
}

function DokEvents(tip) {
  if (tip == 'mainnazaj') {
    if (timerOn) {
      let DTnow = Date.now();
      if (DTnow > timerZac + 5000) {
        timerOn = 0;

        timerSumPlay = timerSumPlay + (DTnow - timerZac);
        document.getElementById("PlayTime").innerText = '⏱' + prikaziTimer(1, timerSumPlay);

        if (linkpage != null) {
          linkpage.close();
          linkpage = null;
        }
      }
    }
  }
}


function GrupaSetData(idgrupe) {
  document.getElementById("Izbskupina").innerHTML = APgrupe[idgrupe];
  document.title=APgrupe[idgrupe];
  arlinki.length = 0;

  for (ples = 0; ples < APlesiGrupe[idgrupe].length; ples++) {
    for (plesi = 0; plesi < APlesi.length; plesi++) {

      if (APlesiGrupe[idgrupe][ples] === APlesi[plesi][0]) {
        arlinki.push(APlesi[plesi]);
      }
    }
  }

  uredigrupdata(1);

  nalozi_body('SeznamPlesov');

}








