document.addEventListener("DOMContentLoaded", function () {
    var squares = document.querySelectorAll('.square');

    setTimeout(function () {
        animateSquares();
    }, 700); // Delay initial animation by 0.7 seconds

    function animateSquares() {
        var shuffledSquares = shuffleArray(Array.from(squares));

        shuffledSquares.forEach(function (square, index) {
            setTimeout(function () {
                square.style.opacity = "1"; // Show the square
                square.style.transform = "scale(1.1) translateY(-10px)"; // Scale and move the square up slightly
                setTimeout(function () {
                    square.style.transform = "scale(1) translateY(0)"; // Scale back to original size and position
                }, 300); // Scale back after 0.3 seconds
            }, index * 200); // Delay each square by 0.2 seconds
        });
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    var quote = document.querySelector('.travel-quote');

    setTimeout(function () {
        quote.classList.add('show-popup');
    }, 200); // Delay pop-up animation by 2 seconds

    var userStatus = document.getElementById("userStatus");
    // Check if user is logged in
    var isLoggedIn = false; // Change this to true if user is logged in
    if (!isLoggedIn) {
        userStatus.innerHTML = '<a href = "/auth">Sign Up/Login</a>';
    } else {
        userStatus.innerHTML = '<img src="user-circle-photo.jpg" alt="User Photo">';
    }
});