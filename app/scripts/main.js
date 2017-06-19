(function($, window, document) {

    $.fn.Socialize = function(options) {
        //current supported social media api
        const apiUrls = {
            facebook: 'https://www.facebook.com/sharer.php?u='
        }

        //pass social media name and reutrn it's url
        function returnApiUrl(m) {
            let url;
            $.each(apiUrls, function(key, value) {
                if(key == m) {
                    url = value;
                }
            });
            return url;
        }

        //main function start from here
        for(let i = 0; i < this.length; i ++) {
            let item = $(this[i]),
                media = item.data('sm');

            //check if user pass url as argument, if not, use current url
            let url = options.url ? options.url : window.location.href,
                target = options.target ? options.target : '_blank',
                height = options.height,
                width = options.width;

            //binding event on assigned elements
            item.bind('click', function() {
                item.prop('href', 'javascript:;');

                //bundle all arguments into single url
                let fullPath = returnApiUrl(media) + url;

                if(height) {
                    window.open(fullPath, target, 'height=' + height + ', width=' + width);
                } else {
                    window.open(fullPath, target);
                }
            })
        }
    };

})(window.jQuery, window, document);

$('[data-sm=facebook]').Socialize({
    url: 'https://google.com',
    target: '_blank',
    height: '100px',
    width: '100px'
});