
const containerEl = document.getElementById('container');
const numeroBox = parseInt(prompt('Quanti elementi devono essere visualizzati?'))

if (isNaN(numeroBox)) {

    alert('Il numero inserito non è valido');
}

else {

    for(let i =1; i <= numeroBox; i++) {
        console.log('iterazione: ',i)
        if (i % 3 == 0 && i % 5 ==0) {
            containerEl.innerHTML += '<div class="box box-fizzbuzz">FizzBuzz</div>';
        }

        else if(i % 3 == 0) {  
            containerEl.innerHTML += '<div class="box box-fizz">Fizz</div>';
        }

        else if(i % 5 == 0) {  
            containerEl.innerHTML += '<div class="box box-buzz">Fizz</div>';
        }

        else{  
            containerEl.innerHTML += '<div class="box">' + i + '</div>';
        }

    }
    
}

