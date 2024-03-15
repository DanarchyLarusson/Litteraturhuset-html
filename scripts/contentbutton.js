document.addEventListener("DOMContentLoaded", function() {
    var showMoreButtons = document.querySelectorAll('.show-more-btn');
    showMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var targetId = this.getAttribute('data-target');
            var targetContent = document.getElementById(targetId);
            var isVisible = targetContent.style.display === 'block';
            if (!isVisible) {
                fadeIn(targetContent, 1000); 
            } else {
                targetContent.style.display = 'none'; 
            }
        });
    });
    
    function fadeIn(element, duration) {
        var opacity = 0;
        var interval = 50;
        var gap = interval / duration;

        element.style.display = 'block';
        element.style.opacity = opacity;

        function fadeInInterval() {
            opacity += gap;

            if(opacity >= 1) {
                clearInterval(fadeInterval);
            }

            element.style.opacity = opacity;
        }

        var fadeInterval = setInterval(fadeInInterval, interval);
    }
});