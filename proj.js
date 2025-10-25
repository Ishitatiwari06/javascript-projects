const body=document.querySelector('body')
const buttons=document.querySelectorAll('.button')
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        const color=e.target.id;
        body.style.backgroundColor=color;
    })
})