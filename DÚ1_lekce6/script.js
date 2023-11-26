/* Parsování data - Převeďte datum na objekt
Bez použití knihovny Day.js napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a vrátí 
objekt s jednotlivýnu částmi zadaného data. Příklad použití:
parseDate('12.03.2015'); // → { day: 12, month: 3, year: 2015 }
parseDate('06.04.2021'); // → { day: 6, month: 4, year: 2021 }
*/

const data = prompt("Napiště datum ve formátu DD.MM.YYYY")

parseDate = (data) => { 
    const day = data.slice(0, 2)
    const month = data.slice(3, 5)
    const year = data.slice(6, 10)
    const data1 = `day: ${day}, month: ${month}, year: ${year}`
    return data1
}

console.log(parseDate(data))
