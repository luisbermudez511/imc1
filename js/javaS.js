    
class ImcCalculator { 
    
    constructor(a, p) {
        this.altura = Number(a); 
        this.peso = Number(p);
    }
    
    calcularImc() {
        const imc = this.peso / (this.altura * this.altura); 
        return imc; 
    }
    
    generarResumen() {
        const imcNumerico = this.calcularImc();
        const imcFormateado = imcNumerico.toFixed(2);
        
        let estado = '';
        let mensaje = '';
        let imgd;

        const imgS = document.getElementById("img");
        imgS.style.display = "block";

        
        if (imcNumerico < 18.5) {
            estado = 'bajo peso';
            mensaje = 'Deberias comer un poco más para poder luciar aun mejor la ropa de lo que la luces ahora';
            imgd = 'img/bajoPeso.png';
        } 
        
        else if (imcNumerico >= 18.5 && imcNumerico < 25.0) { 
            estado = 'peso ideal';
            mensaje = 'Felicidades continua con un peso saludable';
            imgd = 'img/pesoSaludable.png';
        } 
       
        else if (imcNumerico >= 25.0 && imcNumerico < 30.0) {
            estado = 'sobre peso';
            mensaje = 'Deberias checarte para que seas una mejor version de ti mismo, aun mejor de lo que eres ahora';
            imgd = 'img/sobrePeso.png';
        }
        else { 
            estado = 'obesidad';
            mensaje = 'Deberias cuidarte un poco más para verte aun mejor de lo que te ves ahora';
            imgd = 'img/obesidad.png';
        } 
        document.getElementById("img").src = imgd;
        
        return `
            Tu peso es de: <strong>${this.peso.toFixed(1)} kg <br> </strong>
            Tu altura:<strong> ${this.altura.toFixed(2)} m <br> </strong>
            Tu IMC es: <strong>${imcFormateado}<br>
            ${mensaje}</strong>
        `;
    }

}

document.getElementById('forma').addEventListener("submit", function(e) {
    e.preventDefault();
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value; 
    if (peso <= 0 || altura <= 0) {
        document.getElementById('resumen').innerHTML = 'Por favor, introduce valores válidos (mayores a cero).';
        document.getElementById("img").style.display = "none";
        return;
    }
    
    const objImc = new ImcCalculator(altura, peso); 

    document.getElementById('resumen').innerHTML = objImc.generarResumen(); 
});