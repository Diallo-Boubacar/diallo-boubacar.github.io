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


    // Displays Image on Gallery when Clicked on
    var getModalBox = document.getElementById("modal-box");
    var modalImg = document.getElementById("modal-img")
    const getGalleryImage = document.querySelectorAll('.gallery__photo-container');
    const getModalToggle = document.getElementById('modal-toggle');

    getGalleryImage.forEach(function (getGalleryImage) {
        getGalleryImage.addEventListener('click', imageClicked)
    });

    // Gets Current href and Inserts onto Image Modal Box
    function imageClicked(event) {
        getModalBox.style.display = "block";
        modalImg.src = event.target.src;
    }

    // Removes Image Modal Box
    getModalToggle.addEventListener('click', function() {
        getModalBox.style.display = "none";
    })

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == getModalBox) {
        getModalBox.style.display = "none";
        }
    }


    // Get's Current Time to Show Appropriate Greeting
    var greeting = document.querySelector('.primary-heading--sub');

    function getCurrentTime() {
        var currentTime = new Date();
        var currentHour = currentTime.getHours();

        if (currentHour < 12) {
            // Morning
            greeting.textContent = 'Good Morning, I\'m';
            // document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";

        } else if (currentHour < 18) {
            // Afternoon
            greeting.textContent = 'Good Afternoon, I\'m';

        } else {
            // Evening
            greeting.textContent = 'Good Evening, I\'m';
        }
    }
    getCurrentTime();


    // jQueryScroll animation
    $("a.scroll").click(function (event) {
        event.preventDefault();

        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    });

});


