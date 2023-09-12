// let menu = document.querySelector('.button-menu');
// console.log(menu);
// let navList = document.querySelector('.navlist');
// console.log(navList);

// menu.onclick = () => {
//     navList.classList.toggle('open');
// }


let header = document.querySelector('header');
let header_padding = header.currentStyle || window.getComputedStyle(header);

console.log(header.offsetHeight);
console.log(parseInt(header_padding.paddingTop));

let root = document.querySelector(':root');
let scrool_top = parseInt(header.offsetHeight) + 2 * parseInt(header_padding.paddingTop);

root.style.setProperty('--scrool-top', scrool_top + "px");