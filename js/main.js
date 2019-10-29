// Document on Ready
document.addEventListener('DOMContentLoaded', function() {

    // Navigation Object & Variables
    var toggleItem = document.querySelectorAll('.navigation__item');
    var navigation = {
        icon: document.querySelector('.navigation__toggle--icon'),
        background: document.querySelector('.navigation__background'),
        list: document.querySelector('.navigation__list')
    };

    // Toggles Navigation Icon
    function toggleNavigationIcon() {
        navigation.icon.setAttribute("class", "fas fa-times navigation__toggle--icon");
        navigation.icon.removeAttribute("fas fa-bars navigation__toggle--icon");
    }

    // Removes Navigation
    function removeNavigation() {
        navigation.icon.setAttribute("class", "fas fa-bars navigation__toggle--icon");
        navigation.icon.removeAttribute('fas fa-times navigation__toggle--icon');
        navigation.background.style.opacity = '0';
        navigation.background.style.zIndex = '-1000';
        navigation.list.style.left = '-10rem';
    }

    // Toggle Navigation Background
    navigation.icon.addEventListener('click', function() {
        if (navigation.icon.classList.contains('fa-bars')) {
            navigation.background.style.opacity = '1';
            navigation.background.style.zIndex = '1500';
            navigation.list.style.left = '50%'
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
    var getModalBox = document.getElementById("modal-box");
    var modalImg = document.getElementById("modal-img")
    const getGalleryImage = document.querySelectorAll('.gallery__image-container');
    const getModalToggle = document.getElementById('modal-toggle');

    getGalleryImage.forEach(function (getGalleryImage) {
        getGalleryImage.addEventListener('click', imageClicked)
    });

    // Gets Current src and Inserts onto Image Modal Box
    function imageClicked(event) {
        getModalBox.style.display = "block";
        modalImg.src = event.target.dataset.src;
    };

    // Removes Image Modal Box
    getModalToggle.addEventListener('click', function() {
        getModalBox.style.display = "none";
    });

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