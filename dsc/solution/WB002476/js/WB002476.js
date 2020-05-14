/*行業別 hover換行業icon底圖*/
function bgPosition(id, isMouseIn) {
    if (isMouseIn) {
        var bgWidth = -1000;
    } else {
        var bgWidth = 1000;
    }
    var bgPos = $('#' + id)
            .css('backgroundPosition')
            .split(' '),
        bgPosX = parseFloat(bgPos[0]) + bgWidth + 'px',
        bgPosY = bgPos[1];
    return [bgPosX, bgPosY];
}

$('#industryTxt>li').hover(
    function() {
        var $thisId = $(this).attr('id'),
            newPos = bgPosition($thisId, true);
        $(this).css('backgroundPosition', newPos[0] + ' ' + newPos[1]);
    },
    function() {
        var $thisId = $(this).attr('id'),
            newPos = bgPosition($thisId, false);
        $(this).css('backgroundPosition', newPos[0] + ' ' + newPos[1]);
    }
);

/*首頁條狀圖*/
$('.problemList').each(function() {
    var $this = $(this);
    var thisPercent =
        parseFloat(
            $this
                .children('.digital')
                .text()
                .substr(0, 4)
        ) * 10;
    var problemListW = Math.round((490 * thisPercent) / 620);
    $this.animate(
        { width: problemListW },
        {
            duration: 2500,
            easing: 'easeInOutCubic',
            complete: function() {
                $('.digital').fadeIn();
            }
        }
    );
});

// 點擊戰情室按鈕
$(document).on('click', '.js-warRoom-btn', function() {
    var finished = 0;
    var $btn = $(this);
    var canvas = $btn.nextAll('canvas');

    $btn.addClass('is-disabled');

    $(canvas).each(function(index, element) {
        var ctx = element.getContext('2d');
        var cw = element.width;
        var ch = element.height;
        var fps = 60;
        var obj = {
            lineX: 0,
            lineY: ch / 2,
            arrowTopX: cw,
            arrowTopY: ch / 2,
            arrowBottomX: cw,
            arrowBottomY: ch / 2
        };

        function updateLine() {
            obj.lineX += 20;

            if (obj.lineX < cw) {
                setTimeout(updateLine, 1000 / fps);
            }
            // 當線條動畫完成後再執行箭頭動畫
            else {
                updateArrow();
                requestAnimationFrame(drawArrow);
            }
        }

        function updateArrow() {
            obj.arrowTopX -= 1;
            obj.arrowTopY -= 1;
            obj.arrowBottomX -= 1;
            obj.arrowBottomY += 1;

            if (obj.arrowTopY > 0) {
                setTimeout(updateArrow, 1000 / fps);
            } else {
                finished++;
            }
        }

        function drawLine() {
            ctx.lineTo(obj.lineX, obj.lineY);
            ctx.stroke();

            if (obj.lineX < cw) {
                requestAnimationFrame(drawLine);
            }
        }

        function drawArrow() {
            // 畫上箭頭
            ctx.beginPath();
            ctx.moveTo(cw, ch / 2);
            ctx.lineTo(obj.arrowTopX, obj.arrowTopY);
            ctx.stroke();

            // 畫下箭頭
            ctx.beginPath();
            ctx.moveTo(cw, ch / 2);
            ctx.lineTo(obj.arrowBottomX, obj.arrowBottomY);
            ctx.stroke();

            if (obj.arrowTopY > 0) {
                requestAnimationFrame(drawArrow);
            }
        }

        function init() {
            ctx.strokeStyle = element.dataset.color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(obj.lineX, obj.lineY);

            // 執行線條動畫
            updateLine();
            requestAnimationFrame(drawLine);
        }

        if ($(element).hasClass('line8')) {
            $('#warroom-arrow').slideDown(function() {
                init();
            });
        } else {
            init();
        }
    });

    // 當所有動畫完成後啟用按鈕及清除畫布
    var timer = setInterval(function() {
        if (finished === canvas.length) {
            clearInterval(timer);

            setTimeout(function() {
                $btn.removeClass('is-disabled');

                $(canvas).each(function(index, element) {
                    var ctx = element.getContext('2d');
                    var cw = element.width;
                    var ch = element.height;
                    ctx.clearRect(0, 0, cw, ch);

                    if ($(element).hasClass('line8')) {
                        $('#warroom-arrow').hide();
                    }
                });
            }, 3000);
        }
    }, 100);
});
