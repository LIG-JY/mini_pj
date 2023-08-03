window.onload=function(){
    let service_txt = document.getElementById("service_text");
    let grid = document.getElementById("grid");
    let terminal = document.getElementById("terminal");
    let noti = document.getElementById("noti");
    let help = document.getElementById("help");
    let more = document.getElementById("more");
    let search_icon_right = document.getElementById("search_icon_right");

    let ele1 = document.getElementById("event1");
    let ele2 = document.getElementById("event2");
    let ele2_right = document.getElementById("event2_right");
    let ele3 = document.getElementById("event3");
    let ele4 = document.getElementById("event4");
    let ele5 = document.getElementById("event5");

    event1.addEventListener('mouseover', function(){
        grid.style.color = 'orange';
        service_txt.style.color = 'orange';
    });

    event1.addEventListener('mouseout', function(){
        grid.style.color = 'white';
        service_txt.style.color = 'white';

    });

    event2.addEventListener('mouseover', function(){
        terminal.style.color = 'orange';
    });

    event2.addEventListener('mouseout', function(){
        terminal.style.color = 'white';
    });
    event3.addEventListener('mouseover', function(){
        noti.style.color = 'orange';
    });

    event3.addEventListener('mouseout', function(){
        noti.style.color = 'white';
    });
    event4.addEventListener('mouseover', function(){
        help.style.color = 'orange';
    });

    event4.addEventListener('mouseout', function(){
        help.style.color = 'white';
    });
    event5.addEventListener('mouseover', function(){
        event5.style.color = 'orange';
    });

    event5.addEventListener('mouseout', function(){
        event5.style.color = 'white';
    });
    event6.addEventListener('mouseover', function(){
        event6.style.color = 'orange';
    });
    event6.addEventListener('mouseout', function(){
        event6.style.color = 'white';
    });

    more.addEventListener('mouseover', function(){
        more.style.color = 'orange';
    });
    more.addEventListener('mouseout', function(){
        more.style.color = 'white';
    });

    ele2_right.addEventListener('mouseover', function(){
        search_icon_right.style.color = 'orange';
    });
    ele2_right.addEventListener('mouseout', function(){
        search_icon_right.style.color = 'white';
    });

};