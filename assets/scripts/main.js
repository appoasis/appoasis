let language = localStorage.getItem("language") || "En";
const allLangs = ['En', 'Fr', 'Ar'];

allLangs.forEach(lang => {
    const langClass = Array.from(document.getElementsByClassName('lang' + lang));
    langClass.forEach(element => {
        if (language === lang) {
            // Check if the element is using flex or block display
            const computedStyle = window.getComputedStyle(element);
            const displayStyle = computedStyle.getPropertyValue('display');

            if (displayStyle === 'flex') {
                element.style.display = 'flex';
            } else {
                element.style.display = 'block';
            }
        } else {
            element.style.display = 'none';
        }
    });
});

function changeLang(lang){
    localStorage.setItem("language",lang);
    window.location.reload();
}

const menu = document.getElementById('menu');
const mainLeftNav = document.getElementById('main-left-nav');
const mainLoader = document.getElementById('main-loader');
const mainWrapper = document.getElementById('main-wrapper');

mainWrapper.style.top = "100vh";

menu.onclick = () => {
    openLeftNav();
};

function openLeftNav() {
    mainLeftNav.style.visibility = "visible";
    mainLeftNav.style.opacity = "1";
    mainLeftNav.style.pointerEvents = "auto";

    mainLeftNav.querySelector('.inner').style.width = "80%";
}

function closeLeftNav() {
    setTimeout(() => {
        mainLeftNav.querySelector('.inner').style.width = "0";

        setTimeout(() => {
            mainLeftNav.style.opacity = "0";
            mainLeftNav.style.pointerEvents = "none";
            mainLeftNav.style.visibility = "hidden";
        }, 400);
    }, 300);
}

function hideElements(containerId) {
    const elementsToHide = document.querySelectorAll(`#${containerId} *`);
    elementsToHide.forEach((element, index) => {
        if (index > 0) {
            element.classList.add('hidden');
        }
    });
}

hideElements('main-informative');
hideElements('main-showcase');
hideElements('main-pricing');
hideElements('main-skills');
hideElements('main-samples');
hideElements('main-contact');

document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = document.querySelectorAll(".lazy-load");

    lazyImages.forEach(function (lazyImage) {
        lazyImage.setAttribute("loading", "lazy");
        lazyImage.src = lazyImage.dataset.src;
    });
});

function handleAnimation(entries, observer) {
    entries.forEach(entry => {
        const children = entry.target.querySelectorAll('*');
        if (entry.isIntersecting) {
            let interval = 100;
            children.forEach(child => {
                setTimeout(() => {
                    child.classList.add('animate');
                }, interval);
                interval += 20;
            });
            //observer.unobserve(entry.target);
        }
        else {
            children.forEach(child => {
                child.classList.remove('animate');
            });
        }
    });
}

const observer = new IntersectionObserver(handleAnimation, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
});

observer.observe(document.getElementById('main-informative'));
observer.observe(document.getElementById('main-showcase'));
observer.observe(document.getElementById('main-pricing'));
observer.observe(document.getElementById('main-skills'));
observer.observe(document.getElementById('main-samples'));
observer.observe(document.getElementById('main-contact'));

document.getElementById('main-informative').style.opacity = '1';
document.getElementById('main-showcase').style.opacity = '1';

function contactWhatsapp() {
    var phoneNumber = "+212 675-292841";
    var message = "Hi!";

    var encodedMessage = encodeURIComponent(message);

    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodedMessage;

    window.open(whatsappURL, '_blank');
}


function sendProjectRequestMessage() {
    var phoneNumber = "+212 675-292841";
    var message = "Hi, I would like to request a project for me, let's talk in details.";

    var encodedMessage = encodeURIComponent(message);

    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodedMessage;

    window.open(whatsappURL, '_blank');
}

function sendCourseRequestMessage() {
    var phoneNumber = "+212 675-292841";
    var message = "Hi, I would like to request a course for me, let's talk in details.";

    var encodedMessage = encodeURIComponent(message);

    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodedMessage;

    window.open(whatsappURL, '_blank');
}