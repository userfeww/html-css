let mouse = document.querySelectorAll('.menu')
for (var i = 0 <= mouse.length; i++;) {
    mouse[i].addEventListener('mouseover', function(event) {
        alert('Passou', event.target.parentNode)
    })
}