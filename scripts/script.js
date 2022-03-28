`use script`;
// Light Slider
$(document).ready(function () {
    $(`#cardOrders`).lightSlider({
        auto: true,
        loop: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1,
                },
            },
        ],
    });
});