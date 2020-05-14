// =============================================================================
// vue components
// =============================================================================
httpVueLoader.register(Vue, 'components/main-header.vue');

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
 * 判斷瀏覽器底部是否已捲動至指定元素
 * @param {string} el
 * @param {number} offset
 * @param {function} callback
 */
function getScrollPos(el, offset, callback) {
    let target = el.offsetTop + offset;
    if (window.pageYOffset >= (target - window.innerHeight)) {
        callback();
    }
}

// =============================================================================
// event
// =============================================================================
// 錨點連結
document.addEventListener('click', function () {
    const el = event.target;
    if (el.tagName === 'A' && el.classList.contains('js-nav')) {
        event.preventDefault();
        let target = el.getAttribute('href') || el.getAttribute('xlink:href') || el.dataset.target;
        let offset = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
        let targetPos = document.querySelector(target).getBoundingClientRect().top + window.pageYOffset;
        let finalPos = offset ? targetPos - offset : targetPos;
        window.scroll({ top: finalPos, left: 0, behavior: 'smooth' });
    }
});