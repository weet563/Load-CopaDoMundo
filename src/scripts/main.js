//Pegando o Stamp da data do evento
const dataEvento = new Date("jun 11, 2026 17:00:00");
const DataStampEvento = dataEvento.getTime();

//Pegando o local que vai ser a hora
const dias = document.getElementById('dias');
const horas = document.getElementById('hora');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const contaHoras = setInterval(() => {
    //Stamp atual
    const DataAgora = new Date();
    const DataStamp = DataAgora.getTime();

    //Diferença entre o tempo atual para o evento
    const distanciaStamp = DataStampEvento - DataStamp;

    //convertendo o stamp
    const diaEmMili = 1000 * 60 * 60 * 24;
    const horaEmMili = 1000 * 60 * 60;
    const minutoEmMili = 1000 * 60;

    //convertendo para tempo
    const diaEvento = parseInt(distanciaStamp / diaEmMili);
    const horaEvento = parseInt((distanciaStamp % diaEmMili) / horaEmMili);
    const minutoEvento =parseInt((distanciaStamp % horaEmMili) / minutoEmMili);
    const segundoEvento = parseInt((distanciaStamp % minutoEmMili) / 1000);

    //inserindo no projeto
    dias.innerText = diaEvento;
    horas.innerText = horaEvento;
    minutos.innerText = minutoEvento;
    segundos.innerText = segundoEvento;

    if (distanciaStamp < 0) {
        const msg = document.getElementById('event-expired');
        const contador = document.getElementById('contador');

        contador.classList.add('expired');
        msg.classList.remove('expired');

        clearInterval(contaHoras);
    }
}, 1000);
