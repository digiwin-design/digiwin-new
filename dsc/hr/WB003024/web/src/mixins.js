const mixins = {
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        isMediumWidth() {
            return this.$store.state.isMediumWidth;
        },
        loading() {
            return this.$store.state.loading;
        },
        viewData() {
            return this.$store.getters.viewData;
        },
    },
    methods: {
        preloadImg(imgs) {
            return new Promise(resolve => {
                if (!imgs.length) resolve();
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
        },
        scrollToAnchor(targetEl, behavior = 'smooth') {
            const target = document.querySelector(targetEl);
            if (target) {
                let targetPos = target.getBoundingClientRect().top + window.pageYOffset;
                if (behavior) {
                    window.scroll({ top: targetPos, left: 0, behavior });
                }
                else {
                    window.scroll({ top: targetPos, left: 0 });
                }
            }
        },
    },
}

export default mixins;