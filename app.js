let input=document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');//buttons

let string="";//result
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener("click",(e)=> {
        if(e.target.innerHTML=="="){
            string=eval(string);//inbuilt fun for evaluate
            input.value=string;
        }
        else if(e.target.innerHTML=="AC"){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=="del"){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=e.target.innerHTML;
            input.value=string;
        }
        
    
    })
})