console.log("loaded");

$(".containerComing").scroll(function() {
    console.log("trying to animate");
    $('.intro').addClass('go');

    $('.reload').click(function() {
        $('.intro').removeClass('go').delay(200).queue(function(next) {
            $('.intro').addClass('go');
            next();
        });

    });
})