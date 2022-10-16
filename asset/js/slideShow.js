$(document).ready(() => {
    let index = 0;
    let lastItem = $("img.slide:last").attr("idx") // lay chi muc cuoi

    $(".home__content__slideShow__btn button").click(function () {
        index = $(this).attr("idx");
        $("img.slide").hide(); // an tai ca cac img
        $("img.slide").eq(index).fadeIn()

        $(".home__content__slideShow__btn button").removeClass("active__slide");
        $(".home__content__slideShow__btn button").eq(index).addClass("active__slide");


    })

    $(".next").click(function () {
        if (++index > lastItem) {
            index = 0;
        }

        $("img.slide").hide();
        $("img.slide").eq(index).fadeIn();
        $(".home__content__slideShow__btn button").removeClass("active__slide");
        $(".home__content__slideShow__btn button").eq(index).addClass("active__slide");
    });

    $(".prev").click(function () {
        if (--index < 0) {
            index = lastItem;
        }

        $("img.slide").hide();
        $("img.slide").eq(index).fadeIn();
        $(".home__content__slideShow__btn button").removeClass("active__slide");
        $(".home__content__slideShow__btn button").eq(index).addClass("active__slide");
    });

    var interval;
    var timer = function () {
        interval = setInterval(function () {
            $(".next").click();
        }, 6000);
    };
    clearInterval(interval)
    timer();
})