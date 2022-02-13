import { useState } from 'react';

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