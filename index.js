import express from 'express';

const host = '0.0.0.0';
const porta = 3000;
const app = express();

function geraTabuada(numero) {
    let tabuada = '<h1>Tabuada do ' + numero + '</h1>';
    tabuada += '<ul>';
    for (let i = 0; i <= 10; i++) {
        tabuada += '<li>' + numero + ' x ' + i + ' = ' + (numero * i) + '</li>';
    }
    tabuada += '</ul>';
    return tabuada;
}
 //http://localhost:3000/tabuada?numero=x
app.get('/tabuada', (req, res) => {
    const numero = parseInt(req.query.numero) || 1;
    const tabuada = geraTabuada(numero);
    res.send(tabuada);
});


app.listen(porta, host, () => {
    console.log("Servidor esta executando em http://" + host + ":" + porta);
});