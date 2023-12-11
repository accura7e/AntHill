function faqTabs (){
    const faqTitles = document.querySelectorAll('.faq__tab-title')
    const faqTexts = document.querySelectorAll('.faq__tab-text')

    faqTitles.forEach(function(title){
        title.addEventListener('click', function(){
            const tab = title.closest('.faq__tab')
            const thisText = tab.querySelector('.faq__tab-text')
            thisText.classList.toggle('faq__tab-text--active')
        })
    })
}

export default faqTabs