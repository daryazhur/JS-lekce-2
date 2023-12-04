/*
Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.

Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává. Funkce pak 
vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. Například

Catering od Flavour Haven pro 100 lidí za 300000 Kč

Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. 
Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí zprávu 
ve smyslu

Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč
*/
const justFood = (pocetLidi) => {
    const cena = pocetLidi * 100
    return `Just Food pro ${pocetLidi} lidi za ${cena} Kč`
}

const yourMama = (pocetLidi) => {
    const cena = pocetLidi * 1000
    return `Your Mama pro ${pocetLidi} lidi za ${cena} Kč`
}

const flavourHaven = (pocetLidi) => {
    const cena = pocetLidi * 3000
    return `FlavourHaven pro ${pocetLidi} lidi za ${cena} Kč`
}
const pocet = Number(prompt("Počet lidi"))

console.log(justFood(pocet))
console.log(yourMama(pocet))
console.log(flavourHaven(pocet))

const createEvent = (nazevUdalosti, pocetLidi, catering) => {
    const cateringAkce = catering(pocetLidi)
    return `Událost ${nazevUdalosti} s catering od ${cateringAkce}`
}

const udalost = prompt("Název akce")

document.body.innerHTML = createEvent(udalost, pocet, yourMama)
console.log(createEvent(udalost, pocet, yourMama))

