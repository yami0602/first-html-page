const contactForm = document.querySelector('#contact-form')
contactForm.addEventListener('submit', function(e) {
    e.preventDefault()
   
    $.ajax({
        url:contactForm.action,
        method : contactForm.method,
        data: $(contactForm).serialize()
    })
    .done(function(response) { 
            console.log(response)
            userFeedback.textcontent = 'Thank You'
            contactForm.reset
    })
})



