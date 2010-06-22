/**
 * @author Alexander
 * Slideshow plugin
 */
(function($){
    $.fn.placeholder = function(options){
        var opts = $.extend(true, {}, $.fn.placeholder.defaults, options);
        //console.log(opts);
        if (supports_input_placeholder() && !opts.force) {
            return;
        }
        
        return this.each(function(){
            if ($(this).is("[placeholder]")) {
                var holdertext = $(this).attr("placeholder");
                $(this).css(opts.phtext).val(holdertext).focus(function(){
                    if ($(this).val() == holdertext) {
                        $(this).css(opts.ttext).val("");
                    }
                }).blur(function(){
                    if ($(this).val() == "") {
                        $(this).css(opts.phtext).val(holdertext);
                    }
                }).parents("form").submit(function(){
                    if ($this.val() == holdertext) {
                        $this.val("");
                    }
                });
            }
        });
    }
    $.fn.placeholder.defaults = {
        phtext: {
            color: "#fea696",
            "font-weight": "bold"
        },
        ttext: {
            color: "#000",
            "font-weight": "normal"
        },
        force: false
    }
})(jQuery);

function supports_input_placeholder(){
    var i = document.createElement('input');
    return 'placeholder' in i;
}

