document.getElementsByTagName('video')[0].onended = function () {
    this.load();
    this.play();
};

let a=0;
let x1=0;
function commercial(){
    if( x1%2==0 && a==0){
        document.querySelector(".commercial").style.display="block"
        document.querySelector(".down").style.transform = "translateY(480px)"
        document.querySelector(".down").style.transition= "0.5s all"
        a=a+1;
    }
    
    else{
        document.querySelector(".commercial").style.display="none"
        document.querySelector(".down").style.transform = "translateY(0px)"
        document.querySelector(".down").style.transition= "0.5s all"
        a=0;
    }
    x1+=1;
    
}
let x2=0;
function residential(){
    if( x2%2==0 && a==0){
        document.querySelector(".residential").style.display="block"
        document.querySelector(".down").style.transform = "translateY(480px)"
        document.querySelector(".down").style.transition= "0.5s all"
        a=a+1;
    }
    
    else{
        document.querySelector(".residential").style.display="none"
        document.querySelector(".down").style.transform = "translateY(0px)"
        document.querySelector(".down").style.transition= "0.5s all"
        a=0;
    }
    x2+=1;
    console.log(a)
}
let x3=0;
function pre(){
    if( x3%2==0){
        document.querySelector(".pre").style.display="block"
        document.querySelector(".down").style.transform = "translateY(480px)"
        document.querySelector(".down").style.transition= "0.5s all"
        
    }
    
    else{
        document.querySelector(".pre").style.display="none"
        document.querySelector(".down").style.transform = "translateY(0px)"
        document.querySelector(".down").style.transition= "0.5s all"

    }
    x3+=1;
    
}
let x4=0;
function site(){
    if( x4%2==0){
        document.querySelector(".site").style.display="block"
        document.querySelector(".down").style.transform = "translateY(480px)"
        document.querySelector(".down").style.transition= "0.5s all"
        
    }
    
    else{
        document.querySelector(".site").style.display="none"
        document.querySelector(".down").style.transform = "translateY(0px)"
        document.querySelector(".down").style.transition= "0.5s all"
        
    }
    x4+=1;
    
}
let x5=0;
function special(){
    if( x5%2==0){
        document.querySelector(".special").style.display="block"
        document.querySelector(".three").style.transform = "translateY(480px)"
        document.querySelector(".three").style.transition= "0.5s all"
        
    }
    
    else{
        document.querySelector(".special").style.display="none"
        document.querySelector(".three").style.transform = "translateY(0px)"
        document.querySelector(".three").style.transition= "0.5s all"
        
    }
    x5+=1;
    
}
let x6=0;
function infrastructure(){
    if( x6%2==0){
        document.querySelector(".infrastructure").style.display="block"
        document.querySelector(".three").style.transform = "translateY(480px)"
        document.querySelector(".three").style.transition= "0.5s all"
        
    }
    
    else{
        document.querySelector(".infrastructure").style.display="none"
        document.querySelector(".three").style.transform = "translateY(0px)"
        document.querySelector(".three").style.transition= "0.5s all"
        
    }
    x6+=1;
    
}
let x7=0;
function civil(){
    if( x7%2==0){
        document.querySelector(".civil").style.display="block"
        document.querySelector(".three").style.transform = "translateY(480px)"
        document.querySelector(".three").style.transition= "0.5s all"

    }
    
    else{
        document.querySelector(".civil").style.display="none"
        document.querySelector(".three").style.transform = "translateY(0px)"
        document.querySelector(".three").style.transition= "0.5s all"
        
    }
    x7+=1;
    
}
let x8=0;
function landscape(){
    if( x8%2==0 ){
        document.querySelector(".landscape").style.display="block"
        document.querySelector(".three").style.transform = "translateY(480px)"
        document.querySelector(".three").style.transition= "0.5s all"
        
    }
    
    else{
        document.querySelector(".landscape").style.display="none"
        document.querySelector(".three").style.transform = "translateY(0px)"
        document.querySelector(".three").style.transition= "0.5s all"
        
    }
    x8+=1;
    
}


