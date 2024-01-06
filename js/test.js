var counter = 1;
async function populate() {
    for(let j = 0; j < 15; j++) {
        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
        if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
            let url = 'https://dog.ceo/api/breeds/image/random';
            let response = await fetch(url);
            let commits = await response.json();
            let image = document.createElement('img');
            image.src = commits.message;
            image.className = 'img_dog';
            image.alt = 'Cute dog №'+String(counter);
            image.title = 'Cute dog №'+String(counter);
            document.querySelector('#wrapper').append(image);
            counter++;
        }
    }
}

arrowTop.onclick = function() {
    window.scrollTo(pageXOffset, 0);
};

window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});
window.addEventListener('scroll', populate);
populate();