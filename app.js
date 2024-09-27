window.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    const nextButton = document.getElementById('nextButton');
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Quando o rodapé entra na tela, ajusta a posição do botão
    if (footerTop < windowHeight) {
        // Calcula a distância entre o rodapé e o final da tela
        const distanceToFooter = windowHeight - footerTop + 20;

        // Ajusta o botão para ficar logo acima do rodapé
        nextButton.style.position = '';
        nextButton.style.bottom = distanceToFooter + 'px';
    } else {
        // Se o rodapé não está visível, mantém o botão fixo na parte inferior
        nextButton.style.position = 'fixed';
        nextButton.style.bottom = '20px';
    }
});