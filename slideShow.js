'use strict';

const images = [
    { 'id': '1', 'url':'./imgs/Bleach Sennen Kessen-hen.jpg' },
    { 'id': '2', 'url':'./imgs/Bocchi-the-Rock-visual-2-2.png' },
    { 'id': '3', 'url':'./imgs/chainsaw-man.png' },
    { 'id': '4', 'url':'./imgs/kaguya-sama-love-is-war.png' },
    { 'id': '5', 'url':'./imgs/sono-bisque.png' },
    { 'id': '6', 'url':'./imgs/urusei-yatsura.jpg' },
]

const containerItems = document.querySelector('#container-items') //o "#" referencia o id container-items declarado no index


const loadImages = ( images, container ) => {
    images.forEach ( images => {//aciona a estrutura de repetição para fazer a iteração de cada um dos elementos do array
        container.innerHTML += `
            <div class='item'>
                <img src='${images.url}'
            </div>
        `//adiciona ao container do html para lhe adicionar um elemento
    });
}

loadImages ( images, containerItems ); //método que chama as imagens armazenadas no arraya images e o container

let items = document.querySelectorAll('.item'); //variável para fazer a transição dos itens

const previous = () => {
     containerItems.appendChild(items[0]); //pega o 1º item da lista, e o joga pro final
     items = document.querySelectorAll('.item'); //o 2º item passa a ser o 1º, e apertando o botão esquerdo, vc volta pro 1º item
}

const next = () => { //mesmo princípio da função anterior, mas com a intenção de avançar para a última imagem
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous); //chama a função de retroceder
document.querySelector('#next').addEventListener('click', next); //chama a função de avançar