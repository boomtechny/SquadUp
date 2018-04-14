//Image Slideshow
window.addEventListener(
    "DOMContentLoaded",
    function(e) {
        var stage = document.getElementById("stage");

        var fadeComplete = function(e) {
            stage.appendChild(arr[0]);
        };
        var arr = stage.getElementsByClassName("stageimg");
        for (var i = 0; i < arr.length; i++) {
            arr[i].addEventListener("animationend", fadeComplete, false);
        }
    },
    false
);
window.addEventListener(
    "DOMContentLoaded",
    function(e) {
        var stage2 = document.getElementById("stage2");

        var fadeComplete = function(e) {
            stage2.appendChild(arr[0]);
        };
        var arr = stage2.getElementsByClassName("stageimg");
        for (var i = 0; i < arr.length; i++) {
            arr[i].addEventListener("animationend", fadeComplete, false);
        }
    },
    false
);

window.addEventListener(
    "DOMContentLoaded",
    function(e) {
        var stage3 = document.getElementById("stage3");

        var fadeComplete = function(e) {
            stage3.appendChild(arr[0]);
        };
        var arr = stage3.getElementsByClassName("stageimg");
        for (var i = 0; i < arr.length; i++) {
            arr[i].addEventListener("animationend", fadeComplete, false);
        }
    },
    false
);
window.addEventListener(
    "DOMContentLoaded",
    function(e) {
        var stage4 = document.getElementById("stage4");

        var fadeComplete = function(e) {
            stage4.appendChild(arr[0]);
        };
        var arr = stage4.getElementsByClassName("stageimg");
        for (var i = 0; i < arr.length; i++) {
            arr[i].addEventListener("animationend", fadeComplete, false);
        }
    },
    false
);
window.addEventListener(
    "DOMContentLoaded",
    function(e) {
        var stage5 = document.getElementById("stage5");

        var fadeComplete = function(e) {
            stage5.appendChild(arr[0]);
        };
        var arr = stage5.getElementsByClassName("stageimg");
        for (var i = 0; i < arr.length; i++) {
            arr[i].addEventListener("animationend", fadeComplete, false);
        }
    },
    false
);
window.addEventListener(
    "DOMContentLoaded",
    function(e) {
        var stage6 = document.getElementById("stage6");

        var fadeComplete = function(e) {
            stage6.appendChild(arr[0]);
        };
        var arr = stage6.getElementsByClassName("stageimg");
        for (var i = 0; i < arr.length; i++) {
            arr[i].addEventListener("animationend", fadeComplete, false);
        }
    },
    false
);

window.addEventListener(
    "DOMContentLoaded",
    function(e) {
        var stage7 = document.getElementById("stage7");

        var fadeComplete = function(e) {
            stage7.appendChild(arr[0]);
        };
        var arr = stage7.getElementsByClassName("stageimg");
        for (var i = 0; i < arr.length; i++) {
            arr[i].addEventListener("animationend", fadeComplete, false);
        }
    },
    false
);
window.addEventListener(
    "DOMContentLoaded",
    function(e) {
        var stage8 = document.getElementById("stage8");

        var fadeComplete = function(e) {
            stage8.appendChild(arr[0]);
        };
        var arr = stage8.getElementsByClassName("stageimg");
        for (var i = 0; i < arr.length; i++) {
            arr[i].addEventListener("animationend", fadeComplete, false);
        }
    },
    false
);
//Image Modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("productImg1");
var img2 = document.getElementById("productImg2");
var img3 = document.getElementById("productImg3");
var img4 = document.getElementById("productImg4");
var img5 = document.getElementById("productImg5");
var img6 = document.getElementById("productImg6");
var img7 = document.getElementById("productImg7");
var img8 = document.getElementById("productImg8");
var img9 = document.getElementById("productImg9");
var img10 = document.getElementById("productImg10");
var img11 = document.getElementById("productImg11");
var img12 = document.getElementById("productImg12");
var img13 = document.getElementById("productImg13");
var img14 = document.getElementById("productImg14");
var img15 = document.getElementById("productImg15");
var img16 = document.getElementById("productImg16");
var img17 = document.getElementById("productImg17");
var img18 = document.getElementById("productImg18");
var img19 = document.getElementById("productImg19");
var img20 = document.getElementById("productImg20");
var img21 = document.getElementById("productImg21");
var img22 = document.getElementById("productImg22");
var img23 = document.getElementById("productImg23");
var img24 = document.getElementById("productImg24");
var img25 = document.getElementById("productImg25");
var img26 = document.getElementById("productImg26");
var img27 = document.getElementById("productImg27");
var img28 = document.getElementById("productImg28");
var img29 = document.getElementById("productImg29");
var img30 = document.getElementById("productImg30");
var img31 = document.getElementById("productImg31");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img2.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img3.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img4.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img5.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img6.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img7.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img8.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img9.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img10.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img11.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img12.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img13.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img14.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img15.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img16.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img17.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img18.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img19.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img20.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img21.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img22.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img23.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img24.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img25.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img26.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img27.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img28.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img29.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img30.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};
img31.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};

// When the user clicks on <span> (x), close modal
modal.onclick = (function() {
    modalImg.className += " out";
    setTimeout(function() {
        modal.style.display = "none";
        modalImg.className = "modal-content";
    }, 400);
})(
    //Navigation

    (function() {
        var hamburger = {
            overlay: document.querySelector(".overlay"),
            navToggle: document.querySelector(".nav-toggle"),
            nav: document.querySelector("nav"),

            doToggle: function(e) {
                e.preventDefault();
                this.overlay.classList.toggle("show");
                this.navToggle.classList.toggle("expanded");
                this.nav.classList.toggle("expanded");
            }
        };

        hamburger.navToggle.addEventListener("click", function(e) {
            hamburger.doToggle(e);
        });
        hamburger.nav.addEventListener("click", function(e) {
            hamburger.doToggle(e);
        });
        hamburger.overlay.addEventListener("click", function(e) {
            hamburger.doToggle(e);
        });
    })()
);

//jQuery is required to run this code
$(document).ready(function() {
    $(document).click(function(event) {
        //if you click on anything except the modal itself or the "open modal" link, close the modal
        if ($(event.target).closest(".modal").length) {
            $("body")
                .find(".modal")
                .css({ display: "none" });
        }
    });
    scaleVideoContainer();


    initBannerVideoSize(".video-container .filter");
    initBannerVideoSize(".video-container video");

    $(window).on("resize", function() {
        scaleVideoContainer();
    });
});

function scaleVideoContainer() {
    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + "px";
    $(".homepage-hero-module").css("height", unitHeight);
}

function initBannerVideoSize(element) {
    $(element).each(function() {
        $(this).data("height", $(this).height());
        $(this).data("width", $(this).width());
    });

    scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element) {
    var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

    // console.log(windowHeight);

    $(element).each(function() {
        var videoAspectRatio = $(this).data("height") / $(this).data("width");

        $(this).width(windowWidth);

        if (windowWidth < 1000) {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({
                "margin-top": 0,
                "margin-left": -(videoWidth - windowWidth) / 2 + "px"
            });

            $(this)
                .width(videoWidth)
                .height(videoHeight);
        }

        $(".homepage-hero-module .video-container video").addClass(
            "fadeIn animated"
        );
    });
}
//Nav Smooth Scroll

function anchorLinkHandler(e) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

    e.preventDefault();
    const targetID = this.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);

    window.scrollBy({ top: originalTop - 50, left: 0, behavior: "smooth" });

    const checkIfDone = setInterval(function() {
        const atBottom =
            window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = "-1";
            targetAnchor.focus();
            window.history.pushState("", "", targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

//Waypoint

//WayPoints

/*Animate on Scroll Manual  */

window.onload = function() {
    var load2 = document.getElementById("js--load-2");
    var load3 = document.getElementById("js--load-3");
    document
        .getElementById("js--load-2")
        .classList.add("animated", "textFocusIn");
    document.getElementById("js--load-3").classList.add("animated", "rotate180");
};

var waypoint1 = new Waypoint({
    element: document.getElementById("js--wp-1"),
    handler: function(direction) {
        document
            .getElementById("js--wp-1")
            .classList.add("animated", "textFocusIn");
    },
    offset: "30%"
});

var waypoint4 = new Waypoint({
    element: document.getElementById("js--wp-4"),
    handler: function(direction) {
        document
            .getElementById("js--wp-4")
            .classList.add("animated", "puffInCenter");
    },
    offset: "35%"
});
var waypoint5 = new Waypoint({
    element: document.getElementById("js--wp-5"),
    handler: function(direction) {
        document.getElementById("js--wp-5").classList.add("animated", "slideInTop");
    },
    offset: "30%"
});
var waypoint6 = new Waypoint({
    element: document.getElementById("js--wp-6"),
    handler: function(direction) {
        document
            .getElementById("js--wp-6")
            .classList.add("animated", "slideInEliptic");
    },
    offset: "30%"
});
var waypoint7 = new Waypoint({
    element: document.getElementById("js--wp-7"),
    handler: function(direction) {
        document
            .getElementById("js--wp-7")
            .classList.add("animated", "slideInEliptic");
    },
    offset: "50%"
});
var waypoint8 = new Waypoint({
    element: document.getElementById("js--wp-8"),
    handler: function(direction) {
        document
            .getElementById("js--wp-8")
            .classList.add("animated", "slideInEliptic");
    },
    offset: "50%"
});
var waypoint9 = new Waypoint({
    element: document.getElementById("js--wp-9"),
    handler: function(direction) {
        document
            .getElementById("js--wp-9")
            .classList.add("animated", "slideInEliptic");
    },
    offset: "50%"
});
var waypoint10 = new Waypoint({
    element: document.getElementById("js--wp-10"),
    handler: function(direction) {
        document
            .getElementById("js--wp-10")
            .classList.add("animated", "slideInEliptic");
    },
    offset: "50%"
});
var waypoint11 = new Waypoint({
    element: document.getElementById("js--wp-11"),
    handler: function(direction) {
        document
            .getElementById("js--wp-11")
            .classList.add("animated", "slideInEliptic");
    },
    offset: "50%"
});
var waypoint12 = new Waypoint({
    element: document.getElementById("js--wp-12"),
    handler: function(direction) {
        document
            .getElementById("js--wp-12")
            .classList.add("animated", "slideInEliptic");
    },
    offset: "50%"
});
var waypoint13 = new Waypoint({
    element: document.getElementById("js--wp-13"),
    handler: function(direction) {
        document
            .getElementById("js--wp-13")
            .classList.add("animated", "slideInEliptic");
    },
    offset: "50%"
});
var waypoint14 = new Waypoint({
    element: document.getElementById("js--wp-14"),
    handler: function(direction) {
        document
            .getElementById("js--wp-14")
            .classList.add("animated", "slideInEliptic");
    },
    offset: "50%"
});
var waypoint15 = new Waypoint({
    element: document.getElementById("js--wp-15"),
    handler: function(direction) {
        document
            .getElementById("js--wp-15")
            .classList.add("animated", "slideInTop");
    },
    offset: "50%"
});
var waypoint16 = new Waypoint({
    element: document.getElementById("js--wp-16"),
    handler: function(direction) {
        document.getElementById("js--wp-16").classList.add("animated", "popIn");
    },
    offset: "50%"
});
var waypoint17 = new Waypoint({
    element: document.getElementById("js--wp-17"),
    handler: function(direction) {
        document
            .getElementById("js--wp-17")
            .classList.add("animated", "slideInTop");
    },
    offset: "50%"
});
var waypoint18 = new Waypoint({
    element: document.getElementById("js--wp-18"),
    handler: function(direction) {
        document
            .getElementById("js--wp-18")
            .classList.add("animated", "slideInTop");
    },
    offset: "50%"
});
//Model On load