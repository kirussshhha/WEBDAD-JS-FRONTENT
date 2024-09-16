const emojis = document.querySelectorAll('.reactions-on-page .emojis');

emojis.forEach(img => {
    img.addEventListener('click', function(){
        alert(img.alt);
    })
});
