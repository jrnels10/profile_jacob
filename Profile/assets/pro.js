$(document).ready(function () {
    $('.navbar').hide();
    $('.profile-name').hide();
    $('.intro').hide();
    function nameTitle(value) {
        setTimeout(function () {
            $('.profile-name').fadeIn(3000);
        }, value);
    }

    nameTitle(1000);
    function slogan(value) {
        setTimeout(function () {
            $('.intro').fadeIn(3000);
        }, value);
    }

    slogan(2000);
    function timer(value) {
        setTimeout(function () {
            $('.navbar').fadeIn(3000);
        }, value);
    }

    timer(3000);


    let projectPort = [
        mapUp = {
            num: '1',
            link: 'https://xeroneon.github.io/Project-1/',
            image: 'assets/images/map-up.png',
            label: 'Map-Up',
            preview: 'https://www.youtube.com/embed/6ZW3xXFesLY?autoplay=1',
        },
        trivia = {
            num: '2',
            link: 'https://jrnels10.github.io/Trivia-game/',
            image: 'assets/images/cowboy-trivia.jpg',
            label: 'Cowboy Trivia',
        },
        gifTastic = {
            num: '3',
            link: 'https://jrnels10.github.io/GifTastic/',
            image: 'https://media3.giphy.com/media/11ISwbgCxEzMyY/giphy.gif',
            label: 'GifTastic!',
        }
    ]

    console.log(projectPort.length)

    let box;

    // $('.portfolio').on('click', function projDiv() {
    //     console.log('port click');
    //     $('.change').replaceWith('<div class="row port-stuff">');
    for (i = 0; i < projectPort.length; i++) {
        console.log(projectPort[i]);
        box = $(`
                        <div class='every-proj m-4' id='${projectPort[i].num}'>
                            <a href="${projectPort[i].link}">
                                <div class="card btn btn-primary mt-2 p-0">
                                    <img src="${projectPort[i].image}" class="img-thumbnail w-100 h-auto m-0" alt="Card image cap">
                                    <label class="card-img-overlay p-2" style="background-color: maroon; top: 45%; height: 40px; opacity: .5">${projectPort[i].label}</label>
                                </div>
                            </a>
                            <button class="btn btn-secondary dropdown-toggle w-100" type="button" id="${projectPort[i].num}">
                                Preview
                            </button>   
                        </div>
                  
                `);
        $('.test-p').append(box);
    }

    $(document).scroll(function () {
        var scrollNum = ($(document).scrollTop());
        if (scrollNum > 0) {
            $('.navbar').fadeOut(1000);

        }
        else {
            $('.navbar').fadeIn(1000);

        }
    });
    $("#bio-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#bio").offset().top},
            'slow');
    });
    $("#test-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#test-div").offset().top},
            'slow');
    });
});
    // var target;
    // $('button').on('click', function () {
    //     $('#test-div').append(box);
    //     target = $(this).attr('id');
    //     $("#" + target).show().siblings("div").hide();
    //     console.log($(this).attr('id'))
    //     $('.row').css('flex-wrap', 'nowrap');
    //     $('.row').css('margin', '20px');

    //     for (i = 0; i < projectPort.length; i++) {
    //         if (target === projectPort[i].num) {
    //             console.log('I found ya!');
    //             $('#projectPort[i].name').css('margin-left', '10px');
    //             let showWindow = $(`<div class='vid'>
    //                                 <button class='close'>Close window</button>
    //                                 <iframe width="754" height="480" src="${projectPort[i].preview}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

    //                                 `)
    //             $('.port-stuff').append(showWindow);
    //         };
    //     }

    //     $('.close').on('click', function () {
    //         console.log(target);
    //         $("#" + target).show().siblings("div").show();
    //         $('.row').css('margin-top', '120px');
    //         $('.port-stuff').empty();
    //         $('.video-play').empty();


    //         projDiv();
    //     });







    //     $('.change').replaceWith(`

    //     <div class="row">
    //     <div class="col-md-6 col-sm-12 projects">
    //         <a href="https://scratch.mit.edu/projects/216260190/">
    //             <div class="card btn btn-primary mt-2 p-0">
    //                 <img src="images/Myscratch.jpg" class="img-thumbnail w-100 h-auto" alt="Card image cap">
    //                 <label class="card-img-overlay p-2" style="background-color: maroon; top: 45%; height: 40px; opacity: .5">Scratch Game</label>
    //             </div>
    //         </a>
    //         <a href="https://jrnels10.github.io/Trivia-game/">
    //             <div class="card btn btn-primary mt-2 p-0">
    //                 <img src="images/the_good_resize.jpg" class="img-thumbnail w-100 h-auto">
    //                 <label class="card-img-overlay p-2" style="background-color: maroon; top: 45%; height: 40px; opacity: .5">Clint Eastwood Trivia</label>
    //             </div>
    //         </a>
    //         <a href="https://jrnels10.github.io/Word-Guess-Game/">
    //             <div class="card btn btn-primary mt-2 p-0">
    //                 <img src="images/cowboy.png" class="img-thumbnail w-100 h-auto">
    //                 <label class="card-img-overlay p-2" style="background-color: maroon; top: 45%; height: 40px; opacity: .5">Hangman Game</label>
    //             </div>
    //         </a>
    //     </div>

    //     <div class="col-md-6 col-sm-12">
    //         <a href="https://jrnels10.github.io/GifTastic/">
    //             <div class="card btn btn-primary mt-2 p-0">
    //                 <img src="https://media3.giphy.com/media/11ISwbgCxEzMyY/giphy.gif" class="img-thumbnail w-100 h-auto">
    //                 <label class="card-img-overlay p-2" style="background-color: maroon; top: 45%; height: 40px; opacity: .5">Gif Tastic</label>
    //             </div>
    //         </a>
    //         <a href="https://www.google.com/maps">
    //             <div class="card btn btn-primary mt-2 p-0">
    //                 <img src="https://jrnels10.github.io/Basic-Portfolio/assets/images/gmaps.png" class="img-thumbnail w-100 h-auto">
    //                 <label class="card-img-overlay p-2" style="background-color: maroon; top: 45%; height: 40px; opacity: .5">Google maps</label>
    //             </div>
    //         </a>
    //     </div>
    // </div>
    // `)
    // });
    // function bioEntry(value) {
    //     setTimeout(() => {
    //         let me = $('<p>');
    //         me.addClass('w3-center w3-animate-opacity aboutMeSec');
    //         me.text('A motivated full stack developer driven to create new products using open source web frameworks. Experience building web-based UIs for databases, working with APIs and experience in ESRI products including Arcmap, ArcGIS Pro with some Python experience and experience in developing geoprocessing models. (Additionally, knowledgeable of web development utilizing CSS, HTML, Javascript, JQuery, JSON, GIT,). A graduate from the University of Arizona coding boot camp and Arizona State University with a Bachelors of Science degree in Geography and a Geographic Information System Certificate. Always looking for new challenges and expanding knowledge in web development and online web mapping.');
    //         $('.about-me-text').prepend(me);
    //     }, value);
    // }
    // bioEntry(1000);window.onscroll = function() {myFunction()};
    //     console.log(scrollNum)
    //     if (scrollNum > 10) {
    //         // $('#about-me-text').hide();
    //         // $('#profile-pic').hide();
    //         $('.about-test').hide();



    //         //         // console.log('scroll number: ' + scrollNum);
    //         //         console.log(status)
    //         //         $('#collapseOne').removeClass('show');
    //     }
    //     else {
    //         $('.about-test').show();

    //     }
    // });
    //     else if (scrollNum < 10) {
    //         $('#collapseOne').addClass('show');
    // });



    // else if (scrollNum > 100 && scrollNum < 160) {
    //     // console.log('scroll number: ' + scrollNum);
    //     console.log(status)
    //     $('#collapseTwo').removeClass('show');
    // }
    // else if(scrollNum < 150){
    //     $('#collapseTwo').addClass('show');
    // }
    // if (scrollNum > 250 && scrollNum < 260) {
    //     // console.log('scroll number: ' + scrollNum);
    //     console.log(status)
    //     $('#collapseThree').removeClass('show');
    //     return;
    // }
    // else if(scrollNum < 250){
    //     $('#collapseThree').addClass('show');
    // }

    // });