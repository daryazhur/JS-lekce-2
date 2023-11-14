/* Dovednosti - Vizualizujte vědomosti 
Vytvořte si repozitář ze šablony cviceni-dovednosti. V repozitáři najdete zdrojové soubory stránky se třemi posuvníky. Ty ukazují úroveň 
dovedností v různých oblastech.

1) Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve všech 
zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem 
zadaná čísla.
2) Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec představující id elementu a číslo mezi 
0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu, abyste nemuseli při 
nastavování posuvníků psát třikrát po sobě téměř stejný kód.
*/


function updateSkill(id, cislo) {
    const idElement = document.getElementById(id)
    const progres = idElement.querySelector(".skill__progress")
    const cisloElement = idElement.querySelector(".skill__value")
    
    progres.style.width = `${cislo}%`
    cisloElement.textContent = `${cislo}/100`
}

const urovenHTML = parseInt(prompt("Vyjadřete svoji úroveň v HTML dovednostech od 0 do 100"))
const urovenCSS = parseInt(prompt("Vyjadřete svoji úroveň v CSS dovednostech od 0 do 100"))
const urovenJS = parseInt(prompt("Vyjadřete svoji úroveň v JS dovednostech od 0 do 100"))

updateSkill("skill1", urovenHTML)
updateSkill("skill2", urovenCSS)
updateSkill("skill3", urovenJS)

console.log("funguju!")
