$(document).ready(function(){
    var events = [
        {
            date: '26th January 2021',
            content: 'Submissions open!'
        },
        {
            date: '15th February 2021',
            content: 'Submissions close'
        },
        {
            date: '20th Feb 2021',
            content: 'Finalists announced'
        },
        {
            date: '15th Mar 2021',
            content: 'Finals'
        }
    ];

    $('#my-timeline').roadmap(events, {
        eventsPerSlide: 4,
        slide: 1,
        prevArrow: '<i class="material-icons">keyboard_arrow_left</i>',
        nextArrow: '<i class="material-icons">keyboard_arrow_right</i>'
    });
});