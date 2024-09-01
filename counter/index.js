let num = 0;

function plusOrMinus(action){
    switch (action) {
        case 'plus1':
            num += 1;
            break;

        case 'plus2':
            num += 2;
            break;
    
        case 'plus10':
            num += 10;
            break;

        case 'minus10':
            num -= 10;
            break;

        case 'reset':
            num = 0;
    }

 document.getElementById('start').innerText = num;
}
