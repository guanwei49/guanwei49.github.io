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

}




function filterPaper(type){


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


let next=year.nextElementSibling;


let show=false;



while(
next &&
!next.classList.contains("year")
){


if(
next.classList.contains("paper")
&&
next.style.display!=="none"
){

show=true;

}



next=next.nextElementSibling;


}



if(show){

year.style.display="block";

}

else{

year.style.display="none";

}


});


}
