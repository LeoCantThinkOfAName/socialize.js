$(function() {
    'use strict';

    //when user click on tab
    const changeTabs = () => {
        const tabs = $('.content-tab'),
              contents = $('.content-instruction'),
              typeGraphs = $('.social-media-bg span'),
              body = $('body'),
              bg = $('body').data('bg'),
              heading = $('header h1');

        for(let i = 0; i < tabs.length; i ++) {
            $(tabs[i]).bind('click', function() {
                $(tabs).removeClass('active');
                $(contents).removeClass('active');
                $(typeGraphs).removeClass('active');

                $(this).addClass('active');
                $(contents[i]).addClass('active');
                $(typeGraphs[i]).addClass('active');
                $(body).css({background: bg[i]});
                $(heading).css({color: bg[i]});
            })
        }
    }
    changeTabs();
});