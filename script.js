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

