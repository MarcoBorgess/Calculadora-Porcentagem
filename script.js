function calcularpct(){
    var n1=parseFloat(document.getElementById('n1').value);
    var n2=parseFloat(document.getElementById('n2').value);
    var r;

    r=(n1/100)*n2;
    if(r>=0 || r<0) {
        document.getElementById('resultado1').value=r;
    }else{
        document.getElementById('resultado1').value="Inválido";
    };
    

};

function calcularvlr(){
    var n11=parseFloat(document.getElementById('n11').value);
    var n22=parseFloat(document.getElementById('n22').value);
    var r;

    r=(n11*100)/n22;
    if(r>=0 || r<0) {
        document.getElementById('resultado2').value=r;
    }else{
        document.getElementById('resultado2').value="Inválido";
    };
    
}