function revelmessage(button){
    const message = document.querySelector('.message');
    const container = document.querySelector('.container');

    message.innerHTML = `Wish You a very Happy Diwali! Enjoy your festival with your loved ones, I wish you and your family a very great Diwali and this festival may bring lots of joy in your life. <br><br>

    <span class="regard">Regards,</span><br>
    <span class="highlight">Abhi🙏</span>`;

    // Hide the button after revealing the message
    button.style.display = 'none';

    const music = document.getElementById('backgroundMusic');
    music.play();

    setTimeout(() => {
        container.innerHTML = `<h1 class="thank-you">Thank you! </h1>`;
        music.pause();
    }, 20000);
}
