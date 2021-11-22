let reasons=document.querySelectorAll('.reasons__reason');
let removeOrange=()=>
{
    for(let reason of reasons)
    {
        reason.classList.remove('reason__orange');
    }
}
for(let i=0;i<reasons.length;i++)
{
    reasons[i].onclick=()=>
    {
        removeOrange();
        reasons[i].classList.toggle('reason__orange');
    }
}

let answers=document.querySelectorAll('.quiz__answer');
let quizButtons=document.querySelectorAll('.quiz__button');
for(let i=0;i<quizButtons.length;i++)
{
    quizButtons[i].onclick=()=>
    {
        quizButtons[i].classList.toggle('quiz__orange');
        if(quizButtons[i].textContent==="-")
        {
            quizButtons[i].textContent="+";
        }
        else
        {
            quizButtons[i].textContent="-";
        };
        answers[i].classList.toggle('quiz__invisible');
       
    }
}

let prev=document.querySelector('.members__back');
let next=document.querySelector('.members__forward');
let slides=document.querySelectorAll('.members__employer');
let index=0;

let activeSlide= n =>
{
    for(let slide of slides)
    {
        slide.classList.add('quiz__invisible');
    }
    slides[n].classList.remove('quiz__invisible');
}
let nextSlide= () =>
{
    if(index==slides.length-1)
    {
        index=0;
        activeSlide(index);
    }
    else
    {
        index++;
        activeSlide(index);
    }
}
let prevSlide= () =>
{
    if(index==0)
    {
        index=slides.length-1;
        activeSlide(index);
    }
    else
    {
        index--;
        activeSlide(index);
    }
}
next.addEventListener('click',nextSlide);
prev.addEventListener('click',prevSlide);

let rewiews=document.querySelectorAll('.reviews__review');
let back=document.querySelector('.review__back');
let forward=document.querySelector('.review__forward');
let indexCommand=0;
let activeSlideCommand= n =>
{
    for(let review of rewiews)
    {
        review.classList.add('quiz__invisible');
    }
    rewiews[n].classList.remove('quiz__invisible');
}
let nextSlideCommand= () =>
{
    if(indexCommand==rewiews.length-1)
    {
        indexCommand=0;
        activeSlideCommand(indexCommand);
    }
    else
    {
        indexCommand++;
        activeSlideCommand(indexCommand);
    }
}
let prevSlideCommand= () =>
{
    if(indexCommand==0)
    {
        indexCommand=rewiews.length-1;
        activeSlideCommand(indexCommand);
    }
    else
    {
        indexCommand--;
        activeSlideCommand(indexCommand);
    }
}
forward.addEventListener('click',nextSlideCommand);
back.addEventListener('click',prevSlideCommand);

let petsButton=document.querySelectorAll('.pets__item');
let petsPlace=document.querySelectorAll('.pets__gallery');
let makeInvisible=n=>
{
    for(let pet of petsPlace)
    {
        pet.classList.add('quiz__invisible');
    }
    petsPlace[n].classList.remove('quiz__invisible');
}
let removeTurnOn=n=>
{
    for(let buttonP of petsButton)
    {
        buttonP.classList.remove('pets__item__turnOn');
    }
    petsButton[n].classList.add('pets__item__turnOn');
}

for(let i=0;i<petsButton.length;i++)
{
    petsButton[i].onclick=()=>
    {
        makeInvisible(i);
        removeTurnOn(i);
    }
}
let findParent=()=>
{
    for(let pet of petsPlace)
    {
        if(!pet.classList.contains('quiz__invisible'))
        {
        return pet;
        }
    }
} 
let watchMore=document.querySelector(".pets__watchMore");
let parent=findParent();
let pictures=0;
watchMore.onclick=()=>
{
    parent=findParent();
    pictures=parent.querySelectorAll('.dop__img');
    for(let picture of pictures)
    {
        picture.classList.toggle('pets__invisible');
        picture.classList.toggle('pets__visible');
    }
}