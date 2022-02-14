import { useState } from 'react';

async function ProcurarCep(props) {
    const cep = props.texto;
    const url = `https://viacep.com.br/ws/${cep}/json`;
    const dados = await fetch(url);
    const endereco = await dados.json();
    console.log(endereco)
}


function CapsLock(props) {
    const textoInserido = props.texto;
    const textCapsLock = textoInserido.toUpperCase();
    return <div>{textCapsLock}</div>
}

function AllFirstUpperCase(props) {
    const input = props.texto;
    const arraySplited = input.split(' ');
    let returned = '';
    arraySplited.forEach(element => {
        let text = element.charAt(0).toUpperCase();
        for(var i=1; i<element.length;i++) {
            text = text + element.charAt(i) ;
        }
        returned = returned + ' ' +  text;
    });

    const value = returned;

    return <div>{value}</div>
}

function Criptografar(props) {
    const texto = props.texto;
    let text_replaced = texto.replaceAll(' ','@');
    let tamanho = text_replaced.length;
    if((tamanho % 8) != 0) {
       let restante = (8 - (tamanho % 8));
       for(var i=0; i<restante; i++) {
        text_replaced = text_replaced + '@';
       }
    } 
    tamanho = text_replaced.length;
    let c = 0;
    let palavra = '';
    var palavras = [];
    for(var j=0; j<tamanho; j++) {
        c++;
        palavra += text_replaced.charAt(j);
        if(c == 8) {
            palavras.push(palavra);
            palavra = '';
            c = 0;
        }
    }
    let palavraCriptografada = '';
    for(var k=0; k<8; k++) {
        for(var vezes = 0; vezes < tamanho/8; vezes++) {
            palavraCriptografada += palavras[vezes].charAt(k);
        }
    }


    return <div>{palavraCriptografada}</div>
}

function Contador() {

    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>
                <CapsLock texto="Quero que me coloque em maiusculo"></CapsLock>
                <AllFirstUpperCase texto="toda primeira letra tem que ser maiuscula"></AllFirstUpperCase>
                <Criptografar texto="Um exemplo de Entrada"></Criptografar>
            </div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    ) 

}

function Home() {
    return <Contador />
}

export default Home