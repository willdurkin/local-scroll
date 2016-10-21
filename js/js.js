$(document).ready(function(){
    $("img").unveil(200);
    // $(window).one('resize', (function() {
    //     alert('please refresh after resizing browser width. you will automatically be returned to your current page')
    //     // $("#dialog").dialog();
    //     // 'autoOpen': false
    // }));

    // var upBounce = function(item) {
    //     $(item).animate({top:+=5}, 1000, 100, bounce(item){})
    // }

    // $('#start').jqfloat(function() {
    //     console.log('float');
    // });
// next animation

    // $('.next').mouseenter(function() {
    //     $(this).animate({top:'+=5px'}, 200, 'easeOutBack', function() {
    //         console.log('bottom');
    //         $(this).animate({bottom:'+=5px'}, 200, 'easeOutBack', function() {
    //             console.log('top');
    //         });    
    //     });
    // });

    // function downBounce (item) {
    //     $(item).animate()
    // }

    // $('.a1 .next').animate({top:+=5}, 1000, 100, function(){})

    jQuery(function( $ ){
            /**
             * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
             * @see http://flesler.demos.com/jquery/scrollTo/
             * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.LocalScroll.
             */
            
            // The default axis is 'y', but in this demo, I want to scroll both
            // You can modify any default like this
            $.localScroll.defaults.axis = 'xy';
            
            // Scroll initially if there's a hash (#something) in the url 
            $.localScroll.hash({
                    target: '#content', // Could be a selector or a jQuery object too.
                    queue:true,
                    duration:1200
            });
            
            /**
             * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
             * also affect the >> and << links. I want every link in the page to scroll.
             */
            $.localScroll({
                    target: '#content', // could be a selector or a jQuery object too.
                    queue:true,
                    duration:1200,
                    hash:true,
                    onBefore:function( e, anchor, $target ){
                            // The 'this' is the settings object, can be modified
                    },
                    onAfter:function( anchor, settings ){
                            // The 'this' contains the scrolled element (#content)
                    }
            });
    });

    $('.section').waypoint(function(){
        $('this').addClass('active').siblings().removeClass('active');
        console.log('toggle');
    });

    // add sping class
    $('#1h a').one('click', function() {
        $('#1h a').addClass('spin');
    })
});