function relogio(){
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    console.log(criaHoraDosSegundos(10));
    
    const horas = document.querySelector('.horas');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            horas.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function (e) {
        const el = e.target;
        console.log(el);
        if (el.classList.contains('zerar')) {
            console.log();
            clearInterval(timer);
            horas.innerHTML = '00:00:00';
            segundos = 0
            horas.classList.remove('pausado');
        }
        
        if(el.classList.contains('iniciar')){
            clearInterval(timer);
            horas.classList.remove('pausado');
            iniciaRelogio();
        }
    
        if(el.classList.contains('pausar')){
            clearInterval(timer);
            console.log("click para pausar");
            horas.classList.add('pausado');
        }
    })
}
relogio()