/*
Vytvořte funkci salary se třemi parametry

wage - hrubá mzda v korunách za hodinu
hours - kolik hodin denně průměrně pracujete
days - kolik dní v měsící průměrně pracujete
Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle 
zadaných procent.

Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.
*/

const wageHodina = 100
const prumerCas = 8
const pracovniDny = 22

salary = (wage, hours, days) => {
    const mesicniVyplata = wage * hours * days 
    return mesicniVyplata
}

taxed = (castka, procentZdaneni) => {
    const taxCastka = (castka * procentZdaneni) / 100
    const netCastka = castka - taxCastka
    return netCastka
}

const hrubaMesicniMzda = salary(wageHodina, prumerCas, pracovniDny)

const procenta = 15
const netMesicniVyplata = taxed(hrubaMesicniMzda, procenta)

document.body.innerHTML = `
Hrubá měsiční mzda: ${hrubaMesicniMzda} Kč;
Měsiční mzda po zdanění 15%" ${netMesicniVyplata} Kč;
` 
