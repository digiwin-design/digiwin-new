fetch('solution-template.html')
    .then(res => res.text())
    .then(res => {
        $('#main').html(res);
        new Vue({
            el: '#main',
            data: {
                results: []
            },
            mounted() {
                this.getData();
            },
            updated() {
                $('#section2-mb').accordion({
                    icons: false,
                    collapsible: true,
                    heightStyle: 'content'
                });
            },
            methods: {
                getData() {
                    fetch('db.json')
                        .then(res => res.json())
                        .then(res => {
                            this.results = res.solution;
                        });
                },
                // 電腦/手機共用錨點
                goSection(event) {
                    let href = event.currentTarget.getAttribute('href');
                    let $target;
                    // 取得目標
                    $(`.js-${href}`).each(function() {
                        if ($(this).is(':visible')) {
                            $target = $(this);
                            return false;
                        }
                    });
                    // 移至目標
                    let targetPos = $target.offset().top;
                    $('html, body').animate({ scrollTop: targetPos - 50 });
                },
                // 電腦專用錨點
                goSlider(event) {
                    let final = event.currentTarget.getAttribute('href');
                    let target = final.split('-');
                    let targetPos = $(`${target[0]}-${target[1]}`).offset().top;
                    $('html, body').animate({ scrollTop: targetPos - 50 }, () => {
                        $(final).prop('checked', true);
                    });
                }
            }
        });
    });
