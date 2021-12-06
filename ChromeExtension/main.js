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

// message.addClass('beautText');

// setTimeout(function() { alert('I am delayed') }, 3000);

$('.beauText').ready(function() {
    $('.beauText').on('click', function() {
        $('.beauText').fadeOut().delay(100).fadeIn();
    });
});

$('#motivation').click(function() {
    $('.#motivation').fadeOut().delay(100).fadeIn();
})

$.ajax({
    method: 'GET',
    url: 'https://picsum.photos/list',
    success: function(result) {
        // result is whatever the URL sends back from the request
        console.log(result);
        console.log(`the length of the object output is: ${result.length}`);
        let randomImageId = getRandomArbitrary(0, result.length);
        console.log(result[0].post_url);
        console.log(randomImageId);
        let randomImageURL = result[randomImageId].post_url;
        console.log(result[randomImageId].post_url);
        contentsParent.prepend(`<img id="motivation" src=${randomImageURL}/>`);
    },
    error: function(err) {
        // if any errors occur during the process you can check out the
        // the error by logging the 'err' argument
        console.log('my error message:' + err);
    }
  });

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
