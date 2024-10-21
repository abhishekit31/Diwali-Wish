function revelmessage(button){
    const message = document.querySelector('.message');
    const container = document.querySelector('.container');

    message.innerHTML = `Hope the festival of lights brings your bright sparkles of peace, contentment joy, and happiness which stay with you throughout this year and also in the years to come. May the lamp of joy remain illuminated in your life now and forever <br><br>

    <span class="regard">Regards,</span><br>
    <span class="highlight">Abhi🙏</span>`;

    // Hide the button after revealing the message
    button.style.display = 'none';

    const music = document.getElementById('backgroundMusic');
    music.play();

    setTimeout(() => {
        container.innerHTML = `<h1 class="thank-you">Thank you! </h1>`;
        music.pause();
    }, 30000);
}
