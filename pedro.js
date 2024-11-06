let valor = 0;  

function atualizarContador() {  
    document.getElementById('contador').innerText = valor;  
}  

function incrementar() {  
    valor += 1;  
    atualizarContador();  
}  

function decrementar() {  
    valor -= 1;  
    atualizarContador();  
}  