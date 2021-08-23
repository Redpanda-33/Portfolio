//-----------------------------------Animation navbar-----------------------------------

function toggleMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click',()=>{
        navbar.classList.toggle('show-nav');
    })
}

toggleMenu();
//-----------------------------Switch theme color---------------------------------------

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }    
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
/*-----------------------------Overlay projets----------------------------------------*/
var cachcach1 = document.querySelector('#hidden1');
var cachcach2 = document.querySelector('#hidden2');
var cachcach3 = document.querySelector('#hidden3');
var cachcach4 = document.querySelector('#hidden4');
var cachcach5 = document.querySelector('#hidden5');
var cachcach6 = document.querySelector('#hidden6');
var cachcach7 = document.querySelector('#hidden7');
var cachcach8 = document.querySelector('#hidden8');
var cachcach9 = document.querySelector('#hidden9');
var cachcach10 = document.querySelector('#hidden10');
var cachcach11 = document.querySelector('#hidden11');

var p1 = document.querySelector('#projet1');
var p2 = document.querySelector('#projet2');
var p3 = document.querySelector('#projet3');
var p4 = document.querySelector('#projet4');
var p5 = document.querySelector('#projet5');
var p6 = document.querySelector('#projet6');
var p7 = document.querySelector('#projet7');
var p8 = document.querySelector('#projet8');
var p9 = document.querySelector('#projet9');
var p10 = document.querySelector('#projet10');
var p11 = document.querySelector('#projet11');

p1.addEventListener('click',function() {
    cachcach1.style.display='block';
});
p2.addEventListener('click',function() {
    cachcach2.style.display='block';
});
p3.addEventListener('click',function() {
    cachcach3.style.display='block';
});
p4.addEventListener('click',function() {
    cachcach4.style.display='block';
});
p5.addEventListener('click',function() {
    cachcach5.style.display='block';
});
p6.addEventListener('click',function() {
    cachcach6.style.display='block';
});
p7.addEventListener('click',function() {
    cachcach7.style.display='block';
    over.style.overflow='hidden';
});
p8.addEventListener('click',function() {
    cachcach8.style.display='block';
});
p9.addEventListener('click',function() {
    cachcach9.style.display='block';
});
p10.addEventListener('click',function() {
    cachcach10.style.display='block';
});
p11.addEventListener('click',function() {
    cachcach11.style.display='block';
});

cachcach1.addEventListener('click',function(){
    cachcach1.style.display='none';
});
cachcach2.addEventListener('click',function(){
    cachcach2.style.display='none';
});
cachcach3.addEventListener('click',function(){
    cachcach3.style.display='none';
});
cachcach4.addEventListener('click',function(){
    cachcach4.style.display='none';
});
cachcach5.addEventListener('click',function(){
    cachcach5.style.display='none';
});
cachcach6.addEventListener('click',function(){
    cachcach6.style.display='none';
});
cachcach7.addEventListener('click',function(){
    cachcach7.style.display='none';
});
cachcach8.addEventListener('click',function(){
    cachcach8.style.display='none';
});
cachcach9.addEventListener('click',function(){
    cachcach9.style.display='none';
});
cachcach10.addEventListener('click',function(){
    cachcach10.style.display='none';
});
cachcach11.addEventListener('click',function(){
    cachcach11.style.display='none';
});