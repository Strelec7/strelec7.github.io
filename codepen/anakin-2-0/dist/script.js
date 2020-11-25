let name = "Joe";
console.log(name);

// trojité IF, při zadání IF musíme použít dvojíté rovnítko

const x = 10;

if (x == 10) {
    console.log("To souhlasí");
} else if (x >= 10) {
    console.log("X je větší než 10");
} else {
    console.log("X je menší než 10");
}

/* alternativa k příkazu IF
 "?" slouží jako then
 ":" rozděluje jednotlivé možnosti

*/
const y = 11;

const color = y > 10 ? "ano je" : "ne není";
console.log(color);

//Switch příkaz na změnu již zadaných hodnot;

switch (color) {
    case "ano je":
        console.log("Skutečně je větší");
        break;
    case "ne není":
    console.log("Skutečně není");
    break
    default: 
    console.log("není to ani jedno")
        break;
}

    let bookCount = 10;

    for (let i = 0; i < bookCount; i++) {
        // here comes the code which moves the books
        // this block will be repeated bookCount times
    }

