const $ = str => document.querySelector(str);
const $$ = str => document.querySelectorAll(str);

function hideButtons(app) {
    
}

(function() {
    if (!window.app) {
        window.app = {};
    }
    app.carousel = {
        removeClass: function(el, classname='') {
            if (el) {
                if (classname === '') {
                    el.className = '';
                } else {
                    el.classList.remove(classname);
                    if(el.classList.length == 0) {
                        el.className = '';
                    }
                }
                return el;
            }
            return;
        },
        reorder: function() {
            let childcnt = $("#carousel").children.length;
            let childs = $("#carousel").children;

            for (let j=0; j< childcnt; j++) {
                childs[j].dataset.pos = j;
            }
        },
        move(el) {
            let selected = el;

            if (typeof el === "string") {
            console.log(`got string: ${el}`);
                selected = (el == "next") ? $(".selected").nextElementSibling : $(".selected").previousElementSibling;
                console.dir(selected);
            }

            let curpos = parseInt(app.selected.dataset.pos);
            let tgtpos = parseInt(selected.dataset.pos);

            let cnt = curpos - tgtpos;
            let dir = (cnt < 0) ? -1 : 1;
            let shift = Math.abs(cnt);

            for (let i=0; i<shift; i++) {
                let el = (dir == -1) ? $("#carousel").firstElementChild : $("#carousel").lastElementChild;

                if (dir == -1) {
                    el.dataset.pos = $("#carousel").children.length;
                    $('#carousel').append(el);
                } else {
                    el.dataset.pos = 0;
                    $('#carousel').prepend(el);
                }

                app.carousel.reorder();
            }


            app.selected = selected;
            let next = selected.nextElementSibling;// ? selected.nextElementSibling : selected.parentElement.firstElementChild;
            let prev = selected.previousElementSibling; // ? selected.previousElementSibling : selected.parentElement.lastElementChild;
            let prevSecond = prev ? prev.previousElementSibling : selected.parentElement.lastElementChild;
            let nextSecond = next ? next.nextElementSibling : selected.parentElement.firstElementChild;

            selected.className = '';
            selected.classList.add("selected");
            
            let btnsToHide = document.querySelectorAll('.carousel button');
            btnsToHide.forEach(item=>{
                app.carousel.removeClass(item, 'visible').classList.add('hidden');
            });

            let selectedButton = selected.querySelector('button');
            app.carousel.removeClass(selectedButton, 'hidden');

            app.carousel.removeClass(prev).classList.add('prev');
            app.carousel.removeClass(next).classList.add('next');

            let selectedImg = selected.querySelector("img");
            let targetImg = document.querySelector(".current--image img");
            targetImg.src = selectedImg.src;

        },
        nextAll: function(el) {
            let els = [];

            if (el) {
                while (el = el.nextElementSibling) { els.push(el); }
            }

            return els;

        },
        prevAll: function(el) {
            let els = [];

            if (el) {
                while (el = el.previousElementSibling) { els.push(el); }
            }


            return els;
        },
        keypress: function(e) {
            switch (e.which) {
                case 37: // left
                    app.carousel.move('prev');
                    break;

                case 39: // right
                    app.carousel.move('next');
                    break;

                default:
                    return;
            }
            e.preventDefault();
            return false;
        },
        select: function(e) {
        console.log(`select: ${e}`);
            let tgt = e.target;
            while (!tgt.parentElement.classList.contains('carousel')) {
                tgt = tgt.parentElement;
            }

            app.carousel.move(tgt);

        },
        previous: function(e) {
            app.carousel.move('prev');
        },
        next: function(e) {
            app.carousel.move('next');
        },
        doDown: function(e) {
        console.log(`down: ${e.x}`);
            app.carousel.state.downX = e.x;
        },
        doUp: function(e) {
        console.log(`up: ${e.x}`);
            let direction = 0,
                velocity = 0;

            if (app.carousel.state.downX) {
                direction = (app.carousel.state.downX > e.x) ? -1 : 1;
                velocity = app.carousel.state.downX - e.x;

                if (Math.abs(app.carousel.state.downX - e.x) < 10) {
                    app.carousel.select(e);
                    return false;
                }
                if (direction === -1) {
                    app.carousel.move('next');
                } else {
                    app.carousel.move('prev');
                }
                app.carousel.state.downX = 0;
            }
        },
        init() {
            document.addEventListener("keydown", app.carousel.keypress);
           // $('#carousel').addEventListener("click", app.carousel.select, true);
            $("#carousel").addEventListener("mousedown", app.carousel.doDown);
            $("#carousel").addEventListener("touchstart", app.carousel.doDown);
            $("#carousel").addEventListener("mouseup", app.carousel.doUp);
            $("#carousel").addEventListener("touchend", app.carousel.doup);

            app.carousel.reorder();
            $('#prev').addEventListener("click", app.carousel.previous);
            $('#next').addEventListener("click", app.carousel.next);
            
            app.selected = $(".selected");
            app.selected.querySelector("button").classList.remove("hidden");

            let selectedImg = app.selected.querySelector("img");
            let targetImg = document.querySelector(".current--image img");
            targetImg.src = selectedImg.src;

        },
        state: {}

    }
    app.carousel.init();
})();