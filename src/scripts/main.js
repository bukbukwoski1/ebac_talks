AOS.init();

const dataDoEvento = new Date("dec 12, 2025 19:00:00"); 
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distaciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    const segundosEmMs = 1000; 

    const diasAteOEvento = Math.floor(distaciaAteOEvento / diasEmMs);
    const horasAteOEvento =  Math.floor((distaciaAteOEvento % diasEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distaciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distaciaAteOEvento % minutoEmMs) / segundosEmMs);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distaciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado';
    }
},1000);