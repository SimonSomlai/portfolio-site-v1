var characters = ["Cersei Lannister", "Daenarys Targaryen", "Maester Varys", "Margarey Tyrell", "Petyr Baelish", "Samwell Tarly", "Sansa Stark"];
var current = 1;

//  Add Images To Carousel
var addImages = function() {
    for (var i = 0, len = characters.length; i < len; i++) {
        var html = "<li>";
        var imgsrc = 'images/' + characters[i].replace(' ', '-').toLowerCase() + '-1920.jpg';
        html += '<figure><img alt="' + characters[i] + '" title="' + characters[i] + '" src="' + imgsrc + '" />';
        html += '<figcaption>' + characters[i] + '</figcaption></figure></li>';
        $(".carousel").append(html);
    }
    $(".carousel li:first").show();
};

//  for each element in the array append a link with a number value inside a li 
var addActive = function(e) {
    // Add For each element in the array a li with a 'x' value
    for (var i = 0; i < characters.length; i++) {
        var active = (i + 1);
        var activeButtons = "<li><a class=" + active + " href='#'>" + active + "</a></li>";
        $(".sequence").append(activeButtons);
        $(".sequence li:nth-child(3) a").addClass("active");
    };
};

// Slider Function On Click
var click = function() {
    //  grab the current displayed li and fade it in.
    var fadeIn = function() {
        $(".carousel li:nth-child(" + current + ")").fadeIn("fast")
    };
    //  grab the current displayed li and fade it out.
    var fadeOut = function() {
        $(".carousel li:nth-child(" + current + ")").fadeOut("fast")
    };
    //  Add the active class to the current list item
    var addActive = function() {
        $(".sequence li a." + current + "").addClass("active")
    };
    //  Remove the active class to the current list item
    var removeActive = function() {
        $(".sequence li a." + current + "").removeClass("active")
    };

   $(".sequence li a:not(.next,.previous,.finish)").on("click", function(e) {
        e.preventDefault();
        removeActive();
        fadeOut();
        current = parseInt(this.text);
        fadeIn();
        addActive();
    });

    // when clicked on next
    $(".next").on("click", function(e) {
        e.preventDefault();
        // As long as the array isn't on the last element
        if (current < characters.length) {
            fadeOut();
            removeActive();
            //  Get the next image index
            current += 1;
            fadeIn();
            addActive();
            //  At the last element of the array
        } else {
            removeActive();
            // reset the counter to 1
            current = 1;
            fadeIn();
            addActive();
        };
    });
    //  When clicked on previous
    $(".previous").on("click", function(e) {
        e.preventDefault();
        // As long as the array isn't on the first element
        if (current != 1) {
            fadeOut();
            removeActive();
            //  Get the previous image index
            current = current - 1;
            fadeIn();
            addActive();
            //  At the first element of the array
        } else {
            fadeOut();
            removeActive();
            // Reset counter to the end of the array
            current = characters.length;
            fadeIn();
            addActive();
        };
    });
};
    
// Count The Votes For Each Person
var vote = function() {
    var votecount = 1;
    // When we click on the image
    $("img").on("click", function() {
        // Grab the title attribute of the image
        var selection = this.getAttribute("title");
        // Join it into a string called "klasse" -> (ex: DaenarysTargaryen)
        var klasse = selection.replace(/\s+/g, '');
        // If the li with classname "klasse" doesn't exist
        if (!$(".votes li").hasClass(klasse)) {
            // Add a vote to it
            votecount = 1;
            // & Add the li to the ul.votes
            $(".votes").append("<li class=" + klasse + ">" + selection + "<span>" + votecount + "</span></li>");
             window.votecount = votecount
            // If the li already exists
        } else {
            // Get the current amount of votes on that "klasse" out of the span
            votecount = parseInt($(".votes li." + klasse + " span").html());
            // Increment it
            $(".votes li." + klasse + " span").html(votecount += 1);
            // Add extra padding
            
            $(".votes li." + klasse + " span").css("padding-right", "+=10px");
            window.votecount = votecount
        };
    });
};

var finish = function() {
    var finishButton = "<li><a class='finish' href='#'>Finish</a></li>";
    $(".sequence").append(finishButton);
    $(".finish").on("click", function(e) {
        e.preventDefault();
        var allVotes = [];
        $('.votes li span').each(function() {
            allVotes.push(parseInt($(this).text()));
        });
        var winnerVotes = Math.max.apply(Math, allVotes);
        $('.votes li span').each(function() {
            if (winnerVotes == parseInt($(this).text())) {
                var winnerstr = $(this).parent().text()
                var winner = winnerstr.replace(/[0-9]/g, '');
                alert(winner + " won with " + winnerVotes + " votes");
            };
        });
    });
};

$(document).ready(function() {
    addImages();
    addActive();
    finish();
    click();
    vote();
});
