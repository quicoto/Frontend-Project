import Vue from 'vue';

export default function() {
    const element = '#component1',
        $elem = $(element);

    if ($elem.length) {
        new Vue({
            el: element,
            data() {
                return {
                    title: 'Hello World!'
                };
            },
            mounted() {
                this.update();
            },
            methods: {
                update() {
                    console.log('[Component 1] loaded');
                }
            }
        });
    }
};
