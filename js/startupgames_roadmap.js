$(document).ready(function(){
    var events = [
        {
            date: '1st Dec 2019',
            content: 'Submissions open!'
        },
        {
            date: '11th Jan 2020',
            content: 'Submissions close'
        },
        {
            date: '11th Feb 2020',
            content: 'Finalists announced'
        },
        {
            date: '10th Mar 2020',
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