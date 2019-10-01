function sendMail(contactForm) {
    emailjs.send('gmail', 'rosie', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "request": contactForm.request.value
    })
    .then (
        function(response) {
            console.log('SUCCESS', response);
        },
        function(error) {
            console.log('ERROR', error);
        });
}