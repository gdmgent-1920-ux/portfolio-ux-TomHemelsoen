const toggleNavigationIcon = (navToggler) => {
    const navigation= document.querySelector('.border')
navigation.classList.toggle('toggled')
    navToggler.classList.toggle('toggled')
}





const wegFilter = (kruis) => {
    const weg= document.querySelector('.filtercontainer')
    weg.classList.toggle('uit')
  
}
const toggleFilter = (filterbutton) => {
    const filtreren= document.querySelector('.filtercontainer')
    filtreren.classList.toggle('aan');
    
}



