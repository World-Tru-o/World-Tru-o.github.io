

let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
logk= ()=>{
    document.querySelector('.loadd').style.background="black"; 
}
setTimeout(logk, 2100);