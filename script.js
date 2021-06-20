let broad = true;
let broadModified = true;
let phrase = true;
let exact = true;



function iquedevControlChoiceCorrespondence(type)
{

    console.log("CLICOU!");

    const prefix       = 'iquedev-btn-correspondence-';
    const classDisable = prefix + 'disabled';

    switch (type) {
        case 'broad':
            broad = !broad;
            break;
        case 'broad-modified':
            broadModified = !broadModified;
            break;
        case 'phrase':
            phrase = !phrase;
            break;
        case 'exact':
            exact = !exact;
            break;
        default:
            break;
    }

    const elementBroad         = document.getElementById(prefix + 'broad');
    const elementBroadModified = document.getElementById(prefix + 'broad-modified');
    const elementPhrase        = document.getElementById(prefix + 'phrase');
    const elementExact         = document.getElementById(prefix + 'exact');

    if ( broad == false && !elementBroad.classList.contains(classDisable)  )
    {
        elementBroad.classList.add(classDisable);
        //console.log("classes: " + elementBroad.classList );
    }

    if ( broadModified == false && !elementBroadModified.classList.contains(classDisable)  )
    {
        elementBroadModified.classList.add(classDisable);
        console.log("classes: " + elementBroad.classList );
    }

    if ( phrase == false && !elementPhrase.classList.contains(classDisable)  )
    {
        elementPhrase.classList.add(classDisable);
    }

    if ( exact == false && !elementExact.classList.contains(classDisable)  )
    {
        elementExact.classList.add(classDisable);
    }


    if ( broad && elementBroad.classList.contains(classDisable)  )
    {
        elementBroad.classList.remove(classDisable);
    }

    if ( broadModified && elementBroadModified.classList.contains(classDisable)  )
    {
        elementBroadModified.classList.remove(classDisable);
    }

    if ( phrase  && elementPhrase.classList.contains(classDisable)  )
    {
        elementPhrase.classList.remove(classDisable);
    }

    if ( exact && elementExact.classList.contains(classDisable)  )
    {
        elementExact.classList.remove(classDisable);
    }


}

function clickBtnCombination(e)
{
    if ( !e.classList.contains('iquedev-btn-combination-able') ) return false;

    if (e.classList.contains('iquedev-btn-combination-active') ) 
        e.classList.remove('iquedev-btn-combination-active');
    else
        e.classList.add('iquedev-btn-combination-active');
}

function checkBtnCombinationPossibilites()
{
    const wordKeyA = document.getElementById('iquedev-word-key-A');
    const wordKeyB = document.getElementById('iquedev-word-key-B');
    const wordKeyC = document.getElementById('iquedev-word-key-C');
    const wordKeyD = document.getElementById('iquedev-word-key-D');
    const wordKeyE = document.getElementById('iquedev-word-key-E');
   
    const combinationBtns = document.getElementsByClassName('iquedev-btn-combination');
    // console.log(combinationBtns);
    combinationBtnsActive = [];
    for (let i = 0; i < combinationBtns.length; i++) {
        //console.log(combinationBtns[i].id.substr(24).split('+'));
        
        let activator=true;
        combinationBtns[i].classList.remove('iquedev-btn-combination-able');
        combinationBtns[i].id.substr(24).split('+').forEach(letter => {
            if (letter == 'A' && wordKeyA.value == '') activator = false;
            if (letter == 'B' && wordKeyB.value == '') activator = false;
            if (letter == 'C' && wordKeyC.value == '') activator = false;
            if (letter == 'D' && wordKeyD.value == '') activator = false;
            if (letter == 'E' && wordKeyE.value == '') activator = false;
            //console.log(letter);
        });
        // if (activator) combinationBtnsActive.push(combinationBtns[i]);
        if (activator) {
            combinationBtns[i].classList.add('iquedev-btn-combination-able'); 
        } 
        else {
            combinationBtns[i].classList.remove('iquedev-btn-combination-active');
        }
    }

    // combinationBtnsActive.forEach(element => {
    //     console.log(element);
    // });

}
