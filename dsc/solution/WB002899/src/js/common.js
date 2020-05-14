// =============================================================================
// function
// =============================================================================
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
 * handlebars template
 * @param {string} templateSource 
 * @param {*} data 
 * @param {string} target 
 */
function generateTemplate(templateSource, data, target) {
    let source = $(templateSource).html();
    let template = Handlebars.compile(source);
    let _html = template(data);
    $(target).html(_html);
}

// =============================================================================
// event
// =============================================================================
// 錨點連結
$(document).on('click', '.js-nav', function(event) {
    event.preventDefault();
    let target = $(this).attr('href') || $(this).data('target');
    let offset = $(this).data('offset');
    let targetPos = $(target).offset().top;
    let finalPos = offset ? targetPos - offset : targetPos;
    $('html, body').animate({ scrollTop: finalPos - 50 });
});

// =============================================================================
// init
// =============================================================================
// handlebars helper
if (typeof Handlebars !== 'undefined') {
    Handlebars.registerHelper('inc', function(value, options) {
        return parseInt(value) + 1;
    });
    Handlebars.registerHelper('ifCond', function(v1, v2, options) {
        if (v1 === v2) {
            return options.fn(this);
        }
        return options.inverse(this);
    });
}
