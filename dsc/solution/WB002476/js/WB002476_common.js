// JavaScript Document
$(function() {
  //如果a的連結是#contact，滑到下方諮詢單
  $('a[href="#contact"]').click(function() {
    $htmlBody.stop().animate({
      scrollTop: Math.ceil($("#contact").offset().top - _navLinkOuterHeight)
    });
    return false;
  });

  $(".jobProblem .txt").hover(
    function() {
      var $this = $(this);
      $this
        .find(".txtLayer")
        .stop()
        .fadeOut();
      $this
        .find(".mask")
        .stop()
        .animate({ top: 0 }, function() {
          $this
            .find(".txtLayer")
            .css({ "z-index": 5, color: "#fff" })
            .stop()
            .fadeIn();
        });
    },
    function() {
      var $this = $(this);
      $this
        .find(".mask")
        .stop()
        .animate({ top: 100 + "%" });
      $this.find(".txtLayer").removeAttr("style");
    }
  );

  //案例超過字數顯示省略號
  $(".caseGroup .desc").each(function() {
    var maxWordNum = 60;
    if ($(this).text().length > maxWordNum) {
      $(this).text(
        $(this)
          .text()
          .substring(0, maxWordNum)
      );
      $(this).html($(this).html() + "...");
    }
  });

  $(".fa-chevron-down").click(function() {
    $("html, body").animate({
      scrollTop: $(".issueGroup").offset().top - $navLink.outerHeight(true) + "px"
    });
  });

  var changeNum = 0;
  $("#jobProblem .outline").click(function() {
    var $this = $(this).index();
    if (changeNum == $this) {
      return;
    } else {
      $("#jobProblem .outline")
        .removeClass("active")
        .eq($this)
        .addClass("active");
      $("#jobProblem .jobProblem")
        .eq($this)
        .stop(true, true)
        .fadeIn();
      $("#jobProblem .jobProblem")
        .eq(changeNum)
        .stop(true, true)
        .fadeOut();
      changeNum = $this;
    }
  });
});

var video;

// 開啟popup
$(document).on("click", ".js-popup-open", function(event) {
  event.preventDefault();

  fetch("popup-content.handlebars")
    .then(res => res.text())
    .then(res => {
        
        var $target = $(this);
        let template = Handlebars.compile(res);
        var _html;

        // 清空內容
        $('#popup-content').empty();

        // 載入影片
        if ($target.is('[data-video]')) {
            _html = template({
                title: $target.attr('title'),
                fileName: $target.attr('data-video'),
                isVideo: true
            });
            $('#popup-content').html(_html);
            $('#popup').addClass('is-active');

            // 影片載入後自動播放
            video = $('#popup-video')[0];
            video.onloadedmetadata = function() {
                if (video.paused) {
                    video.play();
                }
            };
        }
        // 載入說明文字
        else {
            $.ajax({
                url: 'data.json',
                dataType: 'json'
            }).done(function(response) {
                _html = template({
                    title: $target.text(),
                    text: response.productLine[$target.attr('data-text')],
                    isVideo: false
                });
                $('#popup-content').html(_html);
                $('#popup').addClass('is-active');
            });
        }
    });
});

// 關閉popup
$(document).on("click", ".js-popup-close", function() {
  $("#popup").removeClass("is-active");
  if (video) {
    video.muted = true;
    video = null;
  }
});
