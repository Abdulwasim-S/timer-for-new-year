var new_para=document.createElement("p");
new_para.innerHTML="10";
document.body.append(new_para);
var count=9;
function timing(){
    if(count>0){
        new_para.innerHTML=count;
        count--;
    }
    else{
        new_para.innerHTML="🎉Happy New Year🎉";
        clearInterval(a);
    }
}
var a=setInterval(timing,1000);