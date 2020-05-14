// =============================================================================
// vue components
// =============================================================================
httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/slider-banner.vue');

// =============================================================================
// function
// =============================================================================
function detectIE() {
    var ua = window.navigator.userAgent;

    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

/**
 * jquery ajax
 * @param {string} method
 * @param {string} url
 * @param {*} data
 * @param {function} callback
 * @returns {object} deferred
 */
function ajaxSensor(method, url, data, callback) {
    return $.ajax({
        method,
        url,
        data
    })
        .done(response => {
            if (callback) {
                // json字串處理
                if (typeof response === 'string') {
                    response = JSON.parse(response);
                }
                callback(response);
            }
        })
        .fail(() => {
            if (callback) {
                setTimeout(() => {
                    alert('系統忙碌中，請稍後再試。');
                }, 600);
            }
        });
}

/**
 * get url query string
 * @param {*} name query string
 * @param {*} url specified url
 */
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function fetchFile(file) {
    return new Promise(resolve => {
        fetch(file)
            .then(res => {
                if (file.lastIndexOf('.json') !== -1) {
                    return res.json();
                }
                else {
                    return res.text();
                }
            })
            .then(res => {
                resolve(res);
            });
    });
}

/**
 * 預先載入圖片
 * @param {Array} imgs
 * @returns {Promise}
 */
function preloadImg(imgs) {
    return new Promise(resolve => {
        let loaded = 0;
        for (let i = 0; i < imgs.length; i++) {
            const element = imgs[i];
            let img = document.createElement('IMG');
            img.src = element;
            img.onload = () => {
                loaded++;
                if (loaded === imgs.length) {
                    resolve();
                }
            };
        }
    });
}

// =============================================================================
// event
// =============================================================================
// 錨點連結
$(document).on('click', '.js-nav', function (event) {
    event.preventDefault();
    let delay = $(this).data('delay') ? $(this).data('delay') : 0;
    let target = $(this).attr('href') || $(this).data('target');
    setTimeout(() => {
        let offset = $('.page-submenu').outerHeight();
        let targetPos = $(target).offset().top;
        let finalPos = offset ? targetPos - offset : targetPos;
        $('html, body').animate({ scrollTop: finalPos });
    }, delay);
});