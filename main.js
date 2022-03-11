let val1 = Math.floor(Math.random() * (9 - 0) + 0);
let val2 = Math.floor(Math.random() * (9 - 0) + 0);
let val3 = Math.floor(Math.random() * (9 - 0) + 0);
let val4 = Math.floor(Math.random() * (9 - 0) + 0);

let tour = 1;

console.log(val1, val2, val3, val4);

const valid = () => {
    let reponse1 = 'X';
    let reponse2 = 'X';
    let reponse3 = 'X';
    let reponse4 = 'X';

    console.log("Valid");
    let anwser1 = parseInt(document.querySelector('.anwser1').value);
    let anwser2 = parseInt(document.querySelector('.anwser2').value);
    let anwser3 = parseInt(document.querySelector('.anwser3').value);
    let anwser4 = parseInt(document.querySelector('.anwser4').value);

    if (anwser1 === val1) {
        reponse1 = "1";
    } else {
        if (anwser1 === val2) {
            console.log("trouvé 2")
            reponse1 = "."
        }
        if (anwser1 === val3) {
            console.log("trouvé 3")
            reponse1 = "."
        }
        if (anwser1 === val4) {
            console.log("trouvé 4")
            reponse1 = "."
        }
    }

    if (anwser2 === val2) {
        reponse2 = "1";
    } else {
        if (anwser2 === val1) {
            reponse2 = "."
        }
        if (anwser2 === val3) {
            reponse2 = "."
        }
        if (anwser2 === val4) {
            reponse2 = "."
        }
    }

    if (anwser3 === val3) {
        reponse3 = "1";
    } else {
        if (anwser3 === val2) {
            reponse3 = "."
        }
        if (anwser3 === val1) {
            reponse3 = "."
        }
        if (anwser3 === val4) {
            reponse3 = "."
        }
    }

    if (anwser4 === val4) {
        reponse4 = "1";
    } else {
        if (anwser4 === val2) {
            reponse4 = "."
        }
        if (anwser4 === val3) {
            reponse4 = "."
        }
        if (anwser4 === val1) {
            reponse4 = "."
        }
    }

    console.log(reponse1, reponse2, reponse3, reponse4);
    let div = document.createElement('div');
    div.classList.add('reponse'+tour)

    if(anwser1 === val1 && anwser2 === val2 && anwser3 === val3 && anwser4 === val4){
        div.innerHTML = "<br/><p>VICTOIRE</p><br/><h1>SCORE :</h1>" + tour;
    } else if(tour>6){
        div.innerHTML = "<br/><p>DEFAITE</p>Vous avez effectué trop de mauvaises tentatives.<br/><input Type='button' value='RESTART' onClick='history.go(0)'/>";
        tour=0;
    }else {
        div.innerHTML = "<br/><br/>Tentative " + tour + " :<br/><br/>"+ anwser1 + " - " + anwser2 + " - " + anwser3 + " - " + anwser4 + 
        '<br />' +
        reponse1 + " - " + reponse2 + " - " + reponse3 + " - " + reponse4;
    }
    
    document.querySelector('.reponses').appendChild(div)

    tour++;
}