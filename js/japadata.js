
APlesi = [];


// razbij na vrstice
let lines = PlesiCsv.trim().split('\n');

// preskoči prvo vrstico (glave) in razbij preostalo po tabulatorjih
var APlesi = lines.slice(1).map(line => line.split('\t'));



var APgrupe = [
  ['🕺Vir četrtek 7.0', 'bncdnvrghi']
  , ['🕺JaPa', 'byqrxthghi']
  , ['🕺Test', 'test']
];



function copyArrayToSheets1(data) {
  // če je 1D array, ga pretvori v 2D (vsak element nova vrstica)
  if (!Array.isArray(data[0])) {
    data = data.map(v => [v]);
  }

  const text = data
    .map(row =>
      row
        .map(cell => {
          if (cell === null || cell === undefined) return "";
          return String(cell).replace(/\t/g, " ").replace(/\n/g, " ");
        })
        .join("\t")
    )
    .join("\n");

  return text;
}


function exeport2sheet(par) {
  let Aexp = [["ID", "LINK", "PLES", "SKLADBA"]];
  Aexp[0].push(...APgrupe.map(g => g[0]));

  for (ples = 0; ples < APlesi.length; ples++) {
    Aexp.push(structuredClone(APlesi[ples]));
  }

  for (skupina = 0; skupina < APlesiGrupe.length; skupina++) {
    for (ples = 1; ples < Aexp.length; ples++) {
      orderdef = '';

      if (APlesiGrupe.length > skupina) {
        for (orderi = 0; orderi < APlesiGrupe[skupina].length; orderi++) {
          if (Aexp[ples][0] === APlesiGrupe[skupina][orderi]) {
            orderdef = orderi + 1;
            break; // prekine zanko
          }
        }
      }


      Aexp[ples][4 + skupina] = orderdef;
    }
  }


  return copyArrayToSheets1(Aexp)
}









