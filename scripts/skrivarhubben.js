document.addEventListener("DOMContentLoaded", function() {
    var eventSections = document.querySelectorAll('.event-skrivarhubben');
    eventSections.forEach(function(section) {
        section.style.display = 'none';
    });

    var buttons = document.querySelectorAll('.show-event-btn');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var year = this.getAttribute('data-year');
            var eventSection = document.getElementById('event-' + year);
            var isVisible = eventSection.style.display === 'block';

            eventSections.forEach(function(section) {
                section.style.display = 'none';
            });

            if (!isVisible) {
                fadeIn(eventSection, 1000);
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
