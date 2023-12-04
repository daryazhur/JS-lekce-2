/*
Vytvořte si repozitář ze šablony cviceni-kalkulacka se stránkou, která obsahuje číselník a displej jednoduché kalkulačky.

Zařiďte, aby se při kliknutí na libovolné tlačítko na displeji kalkulačky objevila cifra, která je na tlačíku napsaná. Postupujte dle návodu:

1) Nejprve vyrobte funkci s názvem handleDigitClick. To bude posluchač, který později navěsíme na všechna tlačítka.
2) Váš posluchač bude mít jeden parametr představující událost. Z vlastnosti target tohoto parametru získejte tlačíko, na které bylo kliknuto.
Cifru zjístíte z jeho textContent.
3) Jakmile znáte cifru, vložte ji jako textContent na displej kalkulačky.
4) Pověste váš posluchač na všechna tlačítka s ciframi.
5) U běžné kalkulačky mačkáním tlačítek postupně sestavujeme nějaké víceciferné číslo. Zařiďte, aby cifry na displeji přibývaly 
jako na běžné kalkulačce (tj. nově přidaná cifra se přidá doprava, jako je na animaci výše). Také zaříďte, aby se na displej nedalo 
vložit delší než devíticiferné číslo.
*/



const display = document.querySelector('.display')

const handleDigitClick = (event) => {
  if (display.textContent.length >= 9) {
    return 
  }
  const digit = event.target.textContent
  display.textContent += digit
}

const cislo = document.querySelector(".keypad")

const cislo0 = cislo.querySelector("#btn-0")
const cislo1 = cislo.querySelector("#btn-1")
const cislo2 = cislo.querySelector("#btn-2")
const cislo3 = cislo.querySelector("#btn-3")
const cislo4 = cislo.querySelector("#btn-4")
const cislo5 = cislo.querySelector("#btn-5")
const cislo6 = cislo.querySelector("#btn-6")
const cislo7 = cislo.querySelector("#btn-7")
const cislo8 = cislo.querySelector("#btn-8")
const cislo9 = cislo.querySelector("#btn-9")

cislo0.addEventListener("keydown", handleDigitClick)
cislo1.addEventListener("keydown", handleDigitClick)
cislo2.addEventListener("keydown", handleDigitClick)
cislo3.addEventListener("keydown", handleDigitClick)
cislo4.addEventListener("keydown", handleDigitClick)
cislo5.addEventListener("keydown", handleDigitClick)
cislo6.addEventListener("keydown", handleDigitClick)
cislo7.addEventListener("keydown", handleDigitClick)
cislo8.addEventListener("keydown", handleDigitClick)
cislo9.addEventListener("keydown", handleDigitClick)
