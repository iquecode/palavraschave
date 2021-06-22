let broad = true;
let broadModified = true;
let phrase = true;
let exact = true;

const textAreaKeyWords = new Object();
textAreaKeyWords.A = document.getElementById('iquedev-word-key-A');
textAreaKeyWords.B = document.getElementById('iquedev-word-key-B');
textAreaKeyWords.C = document.getElementById('iquedev-word-key-C');
textAreaKeyWords.D = document.getElementById('iquedev-word-key-D');
textAreaKeyWords.E = document.getElementById('iquedev-word-key-E');


function iquedevControlChoiceCorrespondence(type)
{

    //console.log("CLICOU!");
    

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
        //console.log("classes: " + elementBroad.classList );
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

    generateKeyWords();
    console.log('kajhdkjahfkjs');


}

function clickBtnCombination(e)
{
    if ( !e.classList.contains('iquedev-btn-combination-able') ) return false;

    if (e.classList.contains('iquedev-btn-combination-active') ) 
        e.classList.remove('iquedev-btn-combination-active');
    else
        e.classList.add('iquedev-btn-combination-active');

    generateKeyWords();
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

    
    generateKeyWords();
    // combinationBtnsActive.forEach(element => {
    //     console.log(element);
    // });
}


function generateKeyWords()
{
    const activeBtns = document.getElementsByClassName('iquedev-btn-combination-active');

    generateCombinatios = [];
    for (let i = 0; i < activeBtns.length; i++)
    {
        // generateCombinatios é alimentado em cada posição com arrei das combinações de cada botão ativo
        generateCombinatios.push( activeBtns[i].id.substr(24).split('+')  );
        // activeBtns[i].id.substr(24).split('+').forEach(letter => {
        // });
    }

    let list = [];
    generateCombinatios.forEach(combination => {
        
        let words = [];
        combination.forEach(letter => {
            //const array = textAreaKeyWords[letter].value.split(',');
            const array_words = textAreaKeyWords[letter].value.split(',').map( function(item) {
                return item.trim(); 
            }); 

            words.push( array_words );

            // const words = textAreaKeyWords[letter].value;
            // console.log(words);
        });

        // aqui temos o array de arrays words de cada botão habilitado.... combinar cada as palavras de cada posição co
        //console.log(words);
        list = [...list, ...generateCombinatiosEngine(words)];
    });
    //console.log ( list );
    fillResultsTextArea(list);

    //console.log(generateCombinatios);

}


function generateCombinatiosEngine(words)
{


    list = [];

    switch ( words.length ) {
        case 2:
            for (let x = 0; x < words[0].length; x++)
            {
                for (let y = 0; y < words[1].length; y++ )
                {	
                    list.push ( words[0][x] + ' ' + words[1][y]  );							
                }
            }
            break;

        case 3:
            for (let x = 0; x < words[0].length; x++)
            {
                for (let y = 0; y < words[1].length; y++ )
                {	
                    for (let z = 0; z < words[2].length; z++) 
                    {
                        list.push ( words[0][x] + ' ' + words[1][y] + ' ' + words[2][z]  );							
                    }	
                }
            }
            break;

        case 4:
            for (let x = 0; x < words[0].length; x++)
            {
                for (let y = 0; y < words[1].length; y++ )
                {	
                    for (let z = 0; z < words[2].length; z++) 
                    {
                        for (let za = 0; za < words[3].length; za++) 
                        {
                            list.push ( words[0][x] + ' ' + words[1][y] + ' ' + words[2][z] + ' ' + words[3][za]);		
                        }				
                    }	
                }
            }
            break;
    
        case 5:
            for (let x = 0; x < words[0].length; x++)
            {
                for (let y = 0; y < words[1].length; y++ )
                {	
                    for (let z = 0; z < words[2].length; z++) 
                    {
                        for (let za = 0; za < words[3].length; za++) 
                        {
                            for (let zb = 0; zb < words[4].length; zb++) 
                            {
                                list.push ( words[0][x] + ' ' + words[1][y] + ' ' + words[2][z] + ' ' + words[3][za] + ' ' + words[4][zb]);
                            }
                        }				
                    }	
                }
            }
            break;

        default:
            return false;
    }

    return list;
 

}




function fillResultsTextArea(list)
{

    const prefix       = 'iquedev-btn-correspondence-';
    const classDisable = prefix + 'disabled';
    
    let typeBroad         = true;
    let typeBroadModified = true;
    let typePhrase        = true;
    let typeExact         = true;
    const btnsCorrespondenceDisabled   = document.getElementsByClassName(classDisable);
    for (let i = 0; i < btnsCorrespondenceDisabled.length; i++)
    {

        if ( btnsCorrespondenceDisabled[i].id == prefix + 'broad' )          typeBroad         = false;
        if ( btnsCorrespondenceDisabled[i].id == prefix + 'broad-modified' ) typeBroadModified = false;
        if ( btnsCorrespondenceDisabled[i].id == prefix + 'phrase' )         typePhrase        = false;
        if ( btnsCorrespondenceDisabled[i].id == prefix + 'exact'  )         typeExact         = false;
    }


    let listBroad = [];
    let listBroadModified = [];
    let listPhrase = [];
    let listExact = [];
    
    list.forEach(item => {
        if ( typeBroad ) listBroad.push( item );

        if ( typeBroadModified ) {
            let itemModified = '';
            item.split(' ').forEach(word => {
                itemModified = itemModified + '+' + word.trim() + ' ';    
            });
            listBroadModified.push( itemModified );
        }
        
        if ( typePhrase ) listPhrase.push( '"' + item + '"' );;
        
        if ( typeExact ) listExact.push( '[' + item + ']' );
    });

    const number = listBroad.length + listBroadModified.length + listPhrase.length + listExact.length;


    const textArea = document.getElementById('iquedev-results-text-area');
    let content = '';
    listBroad.forEach(item => {
        content = content + item + '\r\n';
    });
    listBroadModified.forEach(item => {
        content = content + item + '\r\n';
    });
    listPhrase.forEach(item => {
        content = content + item + '\r\n';
    });
    listExact.forEach(item => {
        content = content + item + '\r\n';
    });
    textArea.value = content;

    const numaberArea = document.getElementById('iquedev-area-label-results-number');
    numaberArea.innerHTML = number;

}

//teste3();