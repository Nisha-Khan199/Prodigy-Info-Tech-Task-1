function changebackg(){
    var navbar = document.getElementById('navbar');
    var scrollVal = window.scrollY;
    if(scrollVal<150){
        navbar.classList.remove('navcolor');
    }else{
        navbar.classList.add('navcolor');
    }
}
window.addEventListener('scroll',changebackg);