const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const ans=document.querySelector('#ans')
    const ans2=document.querySelector('#ans2')
    if(height==='' || isNaN(height) || height<0){
        ans.innerHTML='Plz give valid height';
    }
    else if(weight==='' || isNaN(weight) || weight<0){
        ans.innerHTML='Plz give valid weight';
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        ans.innerHTML=`<span> BMI : ${bmi}</span>`;
        if(bmi<18.6){
            ans2.innerHTML='Under Weight';
        }
        else if(bmi>=18.6 && bmi<=24.9){
            ans2.innerHTML='Healthy and fit';
        }
        else{
            ans2.innerHTML='Overweight';
        }
    }
})

