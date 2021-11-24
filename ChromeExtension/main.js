// Vanilla JS
// const contents = document.getElementById("contents");
// let contentsParent = contents.parent();
// contents.parentNode.removeChild(contents);

// jQuery version
let contents = $('#contents');
let contentsParent = contents.parent();
contents.remove();

let scrollBar = $('#chips');
scrollBar.remove();

contentsParent.prepend('<img id="motivation" src="https://iamfearlesssoul.com/wp-content/uploads/2016/10/success-video-1-759x500.jpg"/>');
contentsParent.prepend("<span class='beautText'></b>Get back to building your dreams!<b></span>");

message.addClass('beautText');

setTimeout(function() { alert('I am delayed') }, 3000);

$('.beauText').ready(function() {
    $('.beauText').on('click', function() {
        $('.beauText').fadeOut().delay(100).fadeIn();
    });
});

$('#motivation').click(function() {
    $('.#motivation').fadeOut().delay(100).fadeIn();
})
