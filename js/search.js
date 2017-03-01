$(function () {

    var results = function () {
        var search_str = $("#moogle-search__text").val();
        var results_arr = [];
        $('.gifs-container').html("");
        $.ajax({
            // AJAX-specified URL
            url: "https://api.tenor.co/v1/search?key=LIVDSRZULELA&tag=" + search_str,
            dataType: "json",
            success: (data) => {
                var img_url;
                var div1, div2, img;
                var maxresult = Math.min(data.results.length, 12);
                for (var i = 0; i < maxresult; i++) {
                    div1 = $('<div class="output_box"></div>');
                    img_url = (data.results[i].media[0].gif.url);
                    img = $('<img>');
                    div2 = $('<div class="output"></div>');
                    img.attr('src', img_url);
                    img.appendTo(div2);
                    // img.appendTo(div);

                    // div2.css('background-image', img_url)
                    div2.appendTo(div1);
                    div1.appendTo('.gifs-container');
                }
            }
        });
    }

    $("#moogle-search__button").click(results);

    $("#moogle-search__text").keypress(function (e) {
        e = e || window.event;
        if (e.keyCode === 13) {
            results();
        }
    })
});


// AIzaSyDq1FHaAmTSlfPdeEVglTi4WQJIJgEfZn8


//   ФАБРИКА КЛОНОВ
// Создаем прототип для всех последующих клонов
function clone_Prototype() {
    this.name = 'Адам';
    this.age = 18;
    this.gender = 'мужчина';
    this.height = 175;
    this.weight = 70;
    this.sayHi = function () {
        console.log("Привет, я " + this.name);
    }
};


// Создаем модификацию "Рабочий". Он умеет работать. При встрече объявляет, что он он рабочий.

function Worker(name) {
    this.name = name;
    this.age = 25;
    this.placeOfWork = 'Фабрика Клонов';
    this.salary = 500;
    this.sayHi = function () {
        console.log("Привет, я " + this.name + ", рабочий.");
    }
    this.operates = function () {
        console.log("       Могу копать, могу не копать.");
    }
    this.resume = function () {
        this.sayHi();
        console.log("Коротко об мне:");
        console.log("       Мне " + this.age + " лет.");
        console.log("       Я вешу " + this.weight + " кг.");
        console.log("       Я " + this.gender + ".");
        console.log("       Моё место работы - " + this.placeOfWork + ".");
        console.log("       Я получаю " + this.salary + " гривен в месяц.");
        this.operates();

    }
};

Worker.prototype = new clone_Prototype();

var worker1 = new Worker('Джон');
worker1.resume();

var worker2 = new Worker('Сильвия');
worker2.gender = 'женщина'
worker2.resume();

// Создаем модификацию "Студент". Он учится, смотрит сериалы. Может получать стипендию.

function Student(name) {
    this.name = name;
    this.almaMater = 'Университет Клонов';
    this.educationAllowance = 75;
    this.operates = function () {
        console.log("       Я студент. Я смотрю все сериалы и иногда посещаю лекции.");
    }
    this.resume = function () {
        this.sayHi();
        console.log("Коротко об мне:");
        console.log("       Мне " + this.age + " лет.");
        console.log("       Я вешу " + this.weight + " кг.");
        console.log("       Я " + this.gender + ".");
        this.operates();
        console.log("       Моё место учёбы - " + this.almaMater + ".");
        console.log("       Я получаю стипендию. Это " + this.educationAllowance + " гривен в месяц.");

    }
};

Student.prototype = new clone_Prototype();

var student1 = new Student('Дэн');
student1.resume();

var student2 = new Student('Анна');
student2.gender = 'женщина';
student2.height = 168;
student2.weight = 50;

student2.resume();
