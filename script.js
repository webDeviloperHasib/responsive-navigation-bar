let icon = document.querySelector('.icon');
let showDiv = document.querySelector('nav ul');

icon.addEventListener('click', function(){
    if(showDiv.classList.contains('show')){
        showDiv.classList.remove('show')
    }else{
        showDiv.classList.add('show')
    }
})