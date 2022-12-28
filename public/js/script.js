const input=document.getElementById("input-s")
const reg=/[a-z|A-Z,.!-()+{}|""''`,~@<>:;+|?_=^*-\/]/g

function validateQuery(){
    var getReg=reg.test(input.value)
    var getmatch=input.value.match(reg)
    if(input.value.match(reg)!=null){
        if(getReg==true){
            input.value=''
            input.maxLength=0
        }
    }
    else{
        if(input.value=="\\"){
            input.value=''
        }
        input.maxLength=10
    }
    
    console.info(getmatch,getReg,input.value)
    
}
input.addEventListener(`keypress`,validateQuery)