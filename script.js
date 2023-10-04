const jmeno = 'Darya'

document.body.innerHTML = "<h1>" + jmeno + "</h1>"
document.body.innerHTML = "<h2>ja jsem dalsi uprava</h2>" + '<br>'

document.body.innerHTML += Math.random() + '<br>'+ '<br>'

let wageInEur = 20 
let koruna = 24.55 
mzda = wageInEur * koruna 
document.body.innerHTML += "Mzda v korunach: " + mzda + " Kc" + '<br>'+ '<br>'

let start = 15 
let delkazavodnika = 10 
let konec = (start + delkazavodnika) % 24 
document.body.innerHTML += konec 

