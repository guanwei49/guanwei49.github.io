function switchLang(lang){


let zh=document.querySelectorAll(".zh");

let en=document.querySelectorAll(".en");

const show=e=>e.style.display=e.tagName==="SPAN"?"inline":"block";


if(lang==="zh"){


zh.forEach(
show
);


en.forEach(
e=>e.style.display="none"
);


}

else{


zh.forEach(
e=>e.style.display="none"
);


en.forEach(
show
);


}


document.documentElement.lang=lang;

let languageToggle=document.querySelector("#language-toggle");

if(languageToggle){

let isChinese=lang==="zh";

languageToggle.textContent=isChinese?"English":"中文";

languageToggle.setAttribute("aria-label",isChinese?"Switch to English":"切换至中文");

}

}


function toggleLanguage(){

switchLang(document.documentElement.lang==="zh"?"en":"zh");

}


function filterPaper(type){


document.querySelectorAll(".filter button").forEach(
button=>button.classList.toggle("active",button.dataset.filter===type)
);


let papers=document.querySelectorAll(".paper");


papers.forEach(
paper=>{


if(type==="all"){

paper.style.display="block";

}

else if(
paper.dataset.type===type
){

paper.style.display="block";

}

else{

paper.style.display="none";

}


});


updateYear();


}





function updateYear(){


let years=document.querySelectorAll(".year");


years.forEach(
year=>{

if(!year.dataset.label){

year.dataset.label=year.textContent.trim();

}


let next=year.nextElementSibling;


let count=0;



while(
next &&
!next.classList.contains("year")
){


if(
next.classList.contains("paper")
&&
next.style.display!=="none"
){

count++;

}



next=next.nextElementSibling;


}



if(count>0){

year.textContent=year.dataset.label+" ("+count+" publication"+(count===1?"":"s")+")";

year.style.display="block";

}

else{

year.textContent=year.dataset.label+" (0 publications)";

year.style.display="none";

}


});


let summary=document.querySelector("#publication-summary");

if(summary){

let visiblePapers=[...document.querySelectorAll(".paper")].filter(
paper=>paper.style.display!=="none"
);

summary.textContent="Total: "+visiblePapers.length+" publication"+(visiblePapers.length===1?"":"s");

}


}


document.addEventListener("DOMContentLoaded",()=>{

if(document.querySelector(".paper")){

updateYear();

}

});
