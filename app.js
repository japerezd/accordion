const accordion = document.querySelectorAll('.accordion .btn-accordion');
const buttons = document.querySelectorAll('.btn-accordion');

accordion.forEach(acc => {
    acc.addEventListener('click', displayDiv);
});

buttons.forEach(btn => {
    btn.addEventListener('click', changeButton);
});


function displayDiv(e){
    const div = e.target.nextElementSibling;

    if(!div.style.maxHeight){
        div.style.display = 'flex';
        div.style.maxHeight = div.scrollHeight + 'px';
        return;
    }
    
    div.style.maxHeight = '';
}

function changeButton(e){
    const btn = e.target.childNodes[1];
    btn.classList.toggle('active');
}