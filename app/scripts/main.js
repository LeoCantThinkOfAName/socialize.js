(function($, window, document) {

    $.fn.Socialize = function(options) {
        //api cdn's
        const Api = {
            facebook: ['//connect.facebook.net/en_US/sdk.js', 'https://www.facebook.com/sharer/sharer.php?u='],
            twitter: ['https://twitter.com/intent/tweet?']
        }

        let tempObj = options ? options : {},
            optionsObj = {
                useApi: 'useApi' in tempObj ? tempObj.useApi : false,
                appId: 'appId' in tempObj ? tempObj.appId : false,
                version: 'version' in tempObj ? tempObj.version : false,
                method: 'method' in tempObj ? tempObj.method : false,
                href: 'href' in tempObj ? tempObj.href : false,
                callback: 'callback' in tempObj ? tempObj.callback : false,
                height: 'height' in tempObj ? tempObj.height : false,
                width: 'width' in tempObj ? tempObj.width : false,
                target: 'target' in tempObj ? tempObj.target : false,
                hashtag: 'hashtag' in tempObj ? tempObj.hashtag : false,
                type: 'type' in tempObj ? tempObj.type : false,
                context: 'context' in tempObj ? tempObj.context : false,
                user: 'user' in tempObj ? tempObj.user : false
            }

        let $this = this,
            $thisData = $(this).data(),
            $media;
        
        //extract data attribute name
        function returnDataAttribute(ele) {
            $.each(ele, function(index, value) {
                $media = value;
            })
        }
        returnDataAttribute($thisData);

        //extract hashtags
        function returnHashtags(arr) {
            let string = '';

            if(!arr) {
                return;
            }

            for(let i = 0; i < arr.length; i ++) {
                if(i < arr.length - 1) {
                    string = string + arr[i] + ',';
                } else {
                    string = string + arr[i];
                }
            }
            return '&hashtags=' + string;
        }

        switch($media) {
            case 'facebook':
                onFacebook();
                console.log('You\'ve sucessfully inject socialize.js for facebook in your page!');
                break;
            case 'twitter':
                onTwitter();
                console.log('You\'ve sucessfully inject socialize.js for twitter in your page!');
                break;
        }

        //disable anchor tag
        function disableAnchor() {
            for(let i = 0; i < $this.length; i ++) {
                $($this[i]).prop('href', 'javascript:;');
            }
        }
        
        //facebook
        function onFacebook() {
            disableAnchor();

            $this.bind('click', function() {

                console.log('share via facebook');
            })
        }

        function onTwitter() {
            disableAnchor();

            $this.bind('click', function() {

                console.log('share via twitter');
            })
        }
        // function mainFn() {
        //     //extract arguments

        //     if($media === 'facebook') {
        //         if(useApi) {
        //             //using facebook graph api
        //             $.getScript(Api.facebook[0], function() {
        //                 FB.init({
        //                     appId: appId,
        //                     version: version
        //                 });

        //                 $this.bind('click', function(e) {
        //                     $(e.target).prop('href', 'javascript:;');

        //                     FB.ui({
        //                         method: method ? method : 'share',
        //                         href: href ? href : encodeURI(window.location.href)
        //                     }, callback);
        //                 })
        //             })
        //         } else {
        //             //default
        //             $this.bind('click', function(e) {
        //                 $(e.target).prop('href', 'javascript:;');
        //                 href = href ? href : encodeURI(window.location.href);

        //                 window.open(Api.facebook[1] + href, target, 'height=' + height + 'px, width=' + width + 'px');
        //             })
        //         }
        //     } else if($media === 'twitter') {
        //             $this.bind('click', function(e) {
        //                 $(e.target).prop('href', 'javascript:;');
        //                 href = href ? href : encodeURI(window.location.href);
        //                 hashtag = returnHashtags(hashtag);

        //                 if(hashtag) {
        //                     let hay = Api.twitter + context + '&url=' + href + hashtag + '&via=' + user;
        //                     console.log(hay)
        //                 }
        //             })
        //     } else {
                
        //     }    
        // }
        // mainFn();
    }

})(window.jQuery, window, document);
$('[data-sm=facebook]').Socialize({useApi: true});
$('[data-sm=twitter]').Socialize();