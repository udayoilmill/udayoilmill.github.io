// smooth scroll
$(document).ready(function() {
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function() {
                window.location.hash = hash;
            });
        }
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".cake",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
})

function sendEmail() {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("Email").value;
    let subject = document.getElementById("subject").value;
    let product = document.getElementById("product").value;
    let message = document.getElementById("message").value;
    if (name === "" || mail === "" || subject === "" || product === "" || message === "") {
        return;
    }

    // Email validation using a regular expression
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
        return;
    }

    let body = `<p>Name : ` + name + `
      <br/>Mail : ` + mail + `
      <br/>Subject : ` + subject + `
      <br/>Product : ` + product + `
      <br/>Message : ` + message + `
      <br/>
      </p>`;

    Email.send({
            Host: "smtp.elasticemail.com",
            Username: "udayoilmill6766@gmail.com",
            Password: "F4A5CBAA898C51B6198125252DEB0C641F7B",
            To: 'udayoilmill6766@gmail.com',
            From: "udayoilmill6766@gmail.com",
            Port: '2525',
            Subject: "Got message or query from uday oil mill website.",
            Body: body
        })
        .then(function(message) {
            alert("mail sent successfully")
        });
}