
const search= document.getElementById('searchbtn');
const header= document.getElementById('header');
const search2= document.getElementById('search');
search.onclick=function(){
    if(search2.classList.contains('search')){
        search2.classList='search-show';
        header.style.boxShadow="none"
        search.setAttribute("class","fas fa-times")
    }
    else{
        search2.classList='search';
        header.style.boxShadow=""
        search.setAttribute("class","fas fa-search")
    }
}
const bars= document.getElementById('bars');
const mainbars= document.getElementById('main-bar');
const barr= document.getElementById('bar2');

bars.onclick=function(){
    if(mainbars.classList.contains('main-bar')){
        mainbars.classList='main-bar-show';
    } 
    else{
        mainbars.classList='main-bar';
    }
    if(barr.classList.contains('barr')){
        barr.classList='barr-show';
    } 
    else{
        barr.classList='barr';
        hero.style.gridTemplateColumns=""
    }
}
let x=1;
const mpo=document.getElementById('auto');
const autowritee=()=>{
    const title="Mohamed Shalash  web developer & software engineer . I'm from TANTA                    ."
    mpo.innerText = title.slice(0,x);
    x++;
    if(title.length<x){
        x=1;
    }
};
const stoop=setInterval(autowritee,300)

document.querySelector("#btn1").addEventListener("click", () => {
    document.querySelector(".sign").classList.toggle("sign-show");
});
//BTN EXIT IN SIGN UP 
document.querySelector("#exit2").addEventListener("click", () => {
    document.querySelector(".sign").classList.toggle("sign-show");
});
const mood=document.getElementById('mood')
const bdy=document.getElementById('bgbdy')
const head=document.getElementById('header')
const baar=document.getElementById('bgbar')
const baar2=document.getElementById('bar2')
const foot=document.getElementById('footer')
const img1=document.getElementById('img1')
const img2=document.getElementById('img2')
//change color 
mood.onclick=function(){
    if(bdy.classList.contains('body')){
        bdy.classList='bg-body';
        head.style.backgroundColor="#ccc"
        head.style.boxShadow="none"
        baar.style.backgroundColor="#ccc"
        baar2.style.backgroundColor="#ccc"
        foot.style.backgroundColor="#ccc"
        foot.style.color="#000"
        img1.style.display="none"
        img2.style.display="block"
    }
    else{
        bdy.classList='body';
        head.style.backgroundColor=""
        head.style.boxShadow=""
        baar.style.backgroundColor=""
        baar2.style.backgroundColor=""
        foot.style.backgroundColor=""
        foot.style.color=""
        img1.style.display=""
        img2.style.display=""
    }
    
}
