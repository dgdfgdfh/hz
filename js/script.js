let imgs = ['img1', 'img2', 'img3'];
let img1 = 'https://avatars.mds.yandex.net/get-entity_search/1948726/727936003/orig'
let img2 = 'https://avatars.mds.yandex.net/get-entity_search/2487574/434829330/orig'
let img3 = 'https://avatars.mds.yandex.net/get-entity_search/5503081/806807512/orig'

let slider = document.querySelector('#slider');
const leftControl = document.querySelector('#left');
const rightControl = document.querySelector('#right');

let i = 0;
slider.textContent = imgs[0];

rightControl.addEventListener('click', (e) => {
    e.preventDefault();
    i++
    if (i == imgs.length) {
        i == 0
    }
    slider.textContent = imgs[i];
})

leftControl.addEventListener('click', (e) => {
    e.preventDefault();
    i--
    if (i < 0) {
        i == imgs.length - 1;
    }
    slider.textContent = imgs[i];
})


// let texts = ['text1', 'текст2', 'ТЕКСТ3'];

// let slider = document.querySelector('#slider');
// const leftControl = document.querySelector('#left');
// const rightControl = document.querySelector('#right');

// let i = 0;
// slider.textContent = texts[0];

// rightControl.addEventListener('click', (e) => {
//     e.preventDefault();
//     i++
//     if (i == texts.length) {
//         i == 0
//     }
//     slider.textContent = texts[i];
// })

// leftControl.addEventListener('click', (e) => {
//     e.preventDefault();
//     i--
//     if (i < 0) {
//         i == texts.length - 1;
//     }
//     slider.textContent = texts[i];
// })

