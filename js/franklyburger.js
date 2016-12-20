// Developed by Casper Panduro
// Version: 1.0.0

(function ( $ ) {
    $.fn.franklyburger = function( options ) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            breakpoint: 767,
            speed: 300,
            header: 'header',
        }, options );
        
        // Variables
        var $this = this;
        var wWidth = $(window).width();

        // Styles
        $(settings.header).append('<div class="franklyburger"><span></span></div>');

        if($(settings.header).css('position','static')) {
            $(settings.header).css('position','relative');
        }

        // magic
        $(window).resize(function(){
            mobilemenu();
            console.log(".franklyburger--menu--created " +$this['selector']);
        });
        mobilemenu();

        function mobilemenu() {
            $this.css('display','block');
            wWidth = $(window).width();
            console.log(wWidth);
            if(wWidth < settings.breakpoint) {
                $('.franklyburger').show();
                $("body").addClass("franklyburger--created");
            }
            else {
                $this.removeAttr('style');
                $("body").removeClass("franklyburger--created");
                $('.franklyburger').hide();   
            }
        }

        function createoverlaymenu() {
            console.log();
            
        }

        // when user clicks
        var activated = false;
        var menuitems = $this.children().find('li').length;
        var speed = settings.speed / menuitems;
        $(document).on("click", ".franklyburger", function(){
            $("body").toggleClass("franklyburger--activated");

            if(activated == false) {
                
                var i = 0;
                var showItems = setInterval(function(){
                    $this.children().find('li').eq(i).addClass("frankly-menu-item-show");
                    i++;
                }, speed);
                activated = true;
            }
            else {
                $this.children().find('li').removeClass("frankly-menu-item-show");
                activated = false;
            }
        });
        
        return this;
    };
 
}( jQuery ));



