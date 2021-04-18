const FaqItem = document.querySelectorAll('.Faq-item');
console.log(FaqItem);
FaqItem.forEach((item)=>{
    const title = item.children[0];
    title.addEventListener('click',(e)=>{
        title.parentElement.classList.toggle('show');
        console.log(title.classList.contains('arrow-up'));
    });
});