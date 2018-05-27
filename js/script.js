// Knappen visas när användaren scrollar ner 20px från toppen av dokumentet 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// En funktion som tar dig till toppen av sidan
function topFunction() {
    document.body.scrollTop = 0; // För Safari
    document.documentElement.scrollTop = 0; // Alla de andra webbläsare
}
