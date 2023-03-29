function appendOperation(operation) {
        document.getElementById('result').innerHTML +=operation;
     }

 function calculatResult() {
    let container = document.getElementById('result');
    let result = eval(container.innerHTML);
    container.innerHTML = result;
 }

 function deleteLast() {
     let container = document.getElementById('result')
     if(container.innerHTML.endsWith(' ')){
        container.innerHTML = container.innerHTML.slice(0, -3);
     } else {
     container.innerHTML = container.innerHTML.slice(0, -1);
     }
 }
