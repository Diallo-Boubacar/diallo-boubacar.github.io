// Document on Ready
document.addEventListener('DOMContentLoaded', function() {

    // Navigation Object & Variables
    var toggleItem = document.querySelectorAll('.navigation__item');
    var toggleClose = 'fas fa-times navigation__toggle--icon';
    var toggleOpen = 'fas fa-bars navigation__toggle--icon';
    
    var navigation = {
        background: document.querySelector('.navigation__background'),
        icon: document.querySelector('.navigation__toggle--icon'),
        list: document.querySelector('.navigation__list')
    };

    // Toggles Navigation Icon
    function toggleNavigationIcon() {
        navigation.icon.setAttribute("class", toggleClose);
        navigation.icon.removeAttribute(toggleOpen);
    }

    // Removes Navigation
    function removeNavigation() {
        navigation.icon.setAttribute("class", toggleOpen);
        navigation.icon.removeAttribute(toggleClose);
        navigation.background.classList.remove('displayNavBackground');
        navigation.list.classList.remove('displayNavList')
    }

    // Toggle Navigation Background
    navigation.icon.addEventListener('click', function() {
        
        if (navigation.icon.classList.contains('fa-bars')) {

            navigation.background.classList.add('displayNavBackground');
            navigation.list.classList.add('displayNavList')
            toggleNavigationIcon();

        } else {
            removeNavigation();
        }
    })

    // When Navigation Item is Clicked
    toggleItem.forEach(function (toggleItem) {
        toggleItem.addEventListener('click', function() {

            if (navigation.icon.classList.contains('fa-bars')) {
                toggleNavigationIcon();
    
            } else {
                removeNavigation();
            }
        })
    });

    // Gallery
    function displayGallery() {
        var getGallery = document.querySelector('.gallery')
        var galleryImages = [
            "media/gallery-1.jpg",
            "media/gallery-2.jpg",
            "media/gallery-3.jpg",
            "media/gallery-4.jpg",
            "media/gallery-5.jpg",
            "media/gallery-6.jpg",
            "media/gallery-7.jpg",
            "media/gallery-8.jpg",
            "media/gallery-9.jpg",
            "media/gallery-10.jpg",
            "media/gallery-11.jpg",
            "media/gallery-12.jpg"
        ];

        for (var i = 0; i < galleryImages.length; i++) {
            var createImageContainer = document.createElement('div');
            createImageContainer.classList.add('gallery__image-container');
            createImageContainer.dataset.src = galleryImages[i];
            createImageContainer.style.backgroundImage = `url('${galleryImages[i]}')`;
            getGallery.appendChild(createImageContainer)
        };

    }
    displayGallery();


    // Displays Image on Gallery when Clicked on
    var getModalToggle = document.querySelector('.modal-container__toggle--icon');
    var getModalContainer = document.querySelector(".modal-container");
    var getModalImg = document.querySelector(".modal-container__img")
    var getGalleryImage = document.querySelectorAll('.gallery__image-container');
    
    getGalleryImage.forEach((getGalleryImage) => toggleModal(getGalleryImage)) 

    function toggleModal(imgTarget) {

        imgTarget.addEventListener('click', () => {
            fadeAnimation(getModalContainer, 'fadeIn', 'block', 300)
            getModalContainer.style.display = 'block';
            getModalImg.src = event.target.dataset.src;
        });

        window.onclick = function(event) {
            if (event.target == getModalContainer || event.target == getModalImg || event.target == getModalToggle) {
                fadeAnimation(getModalContainer, 'fadeOut', 'none', 300)
            };
        };
    }

    // Toggles Fade In & Out Animation
    function fadeAnimation(target, type, display, timer) {
        target.classList.add(type);
        setTimeout( () => { 
            target.classList.remove(type);
            target.style.display = display;
        }, timer);
    }


    // Get's Current Time to Show Appropriate Greeting
    var greeting = document.querySelector('.primary-heading--sub');
    function getCurrentTime() {
        var currentTime = new Date();
        var currentHour = currentTime.getHours();

        if (currentHour < 12) {
            greeting.textContent = 'Good Morning, I\'m';

        } else if (currentHour < 18) {
            greeting.textContent = 'Good Afternoon, I\'m';

        } else {
            greeting.textContent = 'Good Evening, I\'m';
        };
    };
    getCurrentTime();


    // jQueryScroll animation
    $("a.scroll").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    });
});