'use strict';
let stop = 0

document.querySelector('.check').addEventListener('click',function(){
    
   let grade = Number(document.querySelector('.grade').value);
    if(!grade){
        document.querySelector('.message').textContent = 'Please Enter Your Grade';
        document.querySelector('.container').style.backgroundColor = '#ff0000';
    }
    else if(grade <= 49){
            if(grade >= stop){
            document.querySelector('.message').textContent = 'Fial'; 
            document.querySelector('.container').style.backgroundColor = '#000000';

            } 
            else
            {
                document.querySelector('.message').textContent = 'wrong Grade please Check';
                document.querySelector('.container').style.backgroundColor = '#ff0000';
            }
       
    }
    else if(grade <= 60)
    {
        document.querySelector('.message').textContent = 'Pass';
        document.querySelector('.container').style.backgroundColor = '#000000'; 
    }
    else if(grade <= 75)
    {
        document.querySelector('.message').textContent = 'Good'; 
        document.querySelector('.container').style.backgroundColor = '#000000';
    }
    else if(grade <=85)
    {
        document.querySelector('.message').textContent = 'very Good';
        document.querySelector('.container').style.backgroundColor = '#000000';
    }
    else if(grade <= 100)
    {
            document.querySelector('.message').textContent = 'Exellent';   
            document.querySelector('.container').style.backgroundColor = '#60b347';
    }
    else 
    {
        document.querySelector('.message').textContent = 'wrong Grade please Check';
        document.querySelector('.container').style.backgroundColor = '#ff0000';
    }
    
});
