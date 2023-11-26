/* Parsování data - Převeďte datum na objekt
Bez použití knihovny Day.js napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a vrátí 
objekt s jednotlivýnu částmi zadaného data. Příklad použití:
parseDate('12.03.2015'); // → { day: 12, month: 3, year: 2015 }
parseDate('06.04.2021'); // → { day: 6, month: 4, year: 2021 }
*/

const parseDate = prompt("Napište datum ve formátu DD.MM.YYYY")
console.log(parseDate)

//document.body.innerHTML = `
//<p> den: ${parseDate.slice(0, 2)}, měsíc: ${parseDate.slice(3, 5)}, rok: ${parseDate.slice(6, 10)} </p>
//`

console.log(parseDate)