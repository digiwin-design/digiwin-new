new Vue({
    el: '#app',
    data() {
        return {
            newContent: {
                id: null,
                title: '',
                key: '',
            },
            content: [],
        };
    },
    computed: {
        firebaseConfig() {
            return {
                apiKey: 'AIzaSyCun_SNGxWtqPEQYkL0d17XBRI0z-LobVY',
                authDomain: 'digiwin-dc30c.firebaseapp.com',
                databaseURL: 'https://digiwin-dc30c.firebaseio.com',
                projectId: 'digiwin-dc30c',
                storageBucket: 'digiwin-dc30c.appspot.com',
                messagingSenderId: '52675222168',
                appId: '1:52675222168:web:2ba46359f0c3a800af4eed'
            };
        },
        // 檢查ID是否重複
        existed() {
            let result = true;
            for (const key in this.content) {
                if (this.content.hasOwnProperty(key)) {
                    const element = this.content[key];
                    if (element.id === this.newContent.id) {
                        result = false;
                        break;
                    }
                }
            }
            return result;
        }
    },
    methods: {
        submitHandler() {
            if (!this.existed) {
                alert(`${this.newContent.id} 的 ID 已存在`);
                this.$refs.id.select();
                return;
            }
            let ref = firebase.database().ref('resources');
            ref.push(this.newContent);
            this.newContent.id = null;
            this.newContent.title = '';
            this.$refs.id.focus();
        },
        getContent() {
            let ref = firebase.database().ref('resources');

            // 依ID排序順序(預設升冪)存入陣列後反轉
            ref.orderByChild('id').on('value', snapshot => {
                let tempContent = [];
                snapshot.forEach(el => {
                    let { id, title } = el.val();
                    tempContent.push({
                        id,
                        title,
                        key: el.key
                    });
                });
                tempContent.reverse();

                this.content = tempContent;
            });
        },
        deleteHandler(key) {
            if (confirm('確定刪除？')) {
                let ref = firebase.database().ref(`resources/${key}`);
                ref.remove();
            }
        },
    },
    created() {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(this.firebaseConfig);
        }
        this.getContent();
    },
});