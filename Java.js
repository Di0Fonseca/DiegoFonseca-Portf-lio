function handleFormSubmit(event) {
    event.preventDefault(); 
    const messageBox = document.getElementById('messageBox');
    const form = document.getElementById('contactForm');
    
    messageBox.textContent = 'Mensagem enviada! Diego em breve entrará em contato.';
    messageBox.classList.remove('hidden');
    messageBox.classList.add('success'); 
    messageBox.style.display = 'block'; 

    form.reset();

    setTimeout(() => {
        messageBox.style.display = 'none';
        messageBox.classList.remove('success');
    }, 5000);
}
