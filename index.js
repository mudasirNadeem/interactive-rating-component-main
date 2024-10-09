var ratingButton = document.querySelectorAll('.rating-btn');
var findNoneClass = document.querySelector('.thank-you-card');
var feedbackCard = document.querySelector('.feedback-card');
var average = document.querySelector('.average');
var index = 0;
ratingButton.forEach( itmes => {
    itmes.addEventListener('click',  function(){
        itmes.setAttribute('id' , index);
        ratingButton.forEach(removeClass =>{
            removeClass.classList.remove('active')
        });
        var idindex = index;
        buttonRatingFun(idindex);
        index++;
    })
})
function buttonRatingFun(index){
var buttonId = document.getElementById(index);
buttonId.classList.add('active');
}
function submitForm(){
    ratingButton.forEach(active => {
        if(active.classList.contains('active')){
            findNoneClass.classList.remove('d-none');
            feedbackCard.classList.add('d-none');
            average.innerText = active.innerText;
        }
    })
}