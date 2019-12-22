document.addEventListener('DOMContentLoaded', function () {

const title = document.querySelector('.title');

function getDataAnimation(element) {
    let dataAnimation = element.getAttribute('data-animation');

    return dataAnimation;
};

const test = getDataAnimation(title);

console.log(test);

const home = document.getElementById('home');
const home2 = document.querySelector('#home');

const li1 = document.querySelector('li[data-direction]');
const block = document.querySelector('.block');

const first = document.querySelectorAll('nav li');
const second = document.querySelectorAll('div p');
const third = document.querySelectorAll('article div')

const article = document.querySelector('article.first');

Console.log(article.querySelectorAll('h1').length);
});


