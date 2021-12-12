$(document).ready(function () {
    var currentfloor = 2; // переменная, где храниться текущий этаж
    var floorPath = $(".home-image path"); /* сокращаем название home-imege prht = каждый отдельный этаж в SVG */
    var counterUp = $(".counter-up") /* кнопка увеличения этажа */
    var counterDown = $(".counter-down") /* кнопка уменьшения этажа */
    // функция при наведении мышкой на этаж
    floorPath.on("mouseover", function() {
        floorPath.removeClass("current-floor"); // удалем активный класс у этажей
        currentfloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        $(".counter").text(currentfloor); // записываем значение этажа в счетчик справа
    });
    counterUp.on("click", function(){ // отслеживаем клик по кнопке вверх
        if (currentfloor < 18){ // проверяем значение этажа. Оно не должно быть больше 18
        currentfloor++; // прибавляем один этаж
        uscurrentfloor = currentfloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false}); // форматируем переменную с этажом, чтобы было 01, а не 1
        $(".counter").text(uscurrentfloor);// записываем значение этажа в счетчик справа
        floorPath.removeClass("current-floor");// удалем активный класс у этажей
        $(`[data-floor=${uscurrentfloor}]`).toggleClass('current-floor');// подсвечиваем текущий этаж
    }
    });
    // повторяем для копки вниз
        counterDown.on("click", function(){// отслеживаем клик по кнопке вниз
        if (currentfloor > 2){// проверяем значение этажа. Оно не должно быть меньше 2
        currentfloor--;// отнмаем один этаж
        uscurrentfloor = currentfloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false});// форматируем переменную с этажом, чтобы было 01, а не 1
        $(".counter").text(uscurrentfloor);// записываем значение этажа в счетчик справа
        floorPath.removeClass("current-floor");// удалем активный класс у этажей
        $(`[data-floor=${uscurrentfloor}]`).toggleClass('current-floor');// подсвечиваем текущий этаж
    }
    });
});