/*
Pokud se přihlásíte jako student například na Fakultu Informačních Technologí ČVUT, bude vám informačním systémem automaticky přidělen e-mail, 
který se vytvoří z vašeho jména a příjmení. Z vašeho příjmení se vezme pět prvních znaků a z vašeho křestního jména první tři. 
Výsledek se převede na malá písmena a připojí se doména fit.cvut.cz. Pro jméno Jana Procházková tak vznikne adresa prochjan@fit.cvut.cz.

1. Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní jméno a pak příjmení, obojí bez diakritiky.
2. Pomocí metody trim zajistěte, že ve jméně ani příjmení nebudou na začátku ani na konci žádné bílé znaky.
3. Pomocí metody slice vyřízněte ze jména i příjmení příslušné části.
4. Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do stránky.
*/



const krestniJmenoStudenta = prompt("Zadejte svoje jméno")
const prijmeniStudenta = prompt("Zadejte svoje prijmeni")

const jmeno = ((krestniJmenoStudenta.trim()).slice(0, 2)).toLowerCase()
const prijmeni = ((prijmeniStudenta.trim()).slice(0, 4)).toLowerCase()

const student = prijmeni + jmeno

const uemail = {
    userName: student,
    domain: "@fit.cvut.cz"
}

document.body.innerHTML = `
<h2> Přidělení e-mailu </h2>
<p> Jméno a příjmení studenta: ${krestniJmenoStudenta} ${prijmeniStudenta}</p>
<p> Přidělený email: ${uemail.userName + uemail.domain}</p>
`


