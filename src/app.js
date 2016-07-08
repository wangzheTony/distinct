require('./base.css');

var Vue = require('vue');
var app = new Vue({
    el: '#app',
    data: {
        title: 'simon的个人资料归档网站',
        footer_content: '联系方式：<a href="tel: 18680588948">18680588948</a>, 邮箱：<a href="mailto: 245160801@qq.com">245160801@qq.com</a>',
        view: 'main'
    },
    components: {
        'main': function(resolve){
            require(['./views/main'], resolve)
        },
        'document': function(resolve){
            require(['./views/document'], resolve)
        },
        'works': function(resolve){
            require(['./views/works'], resolve)
        },
        'resumes': function(resolve){
            require(['./views/resumes'], resolve)
        },
        'app-footer': require('./components/footer'),
    }
})


function route() {
    app.view = window.location.hash.slice(1) || 'main'
}

window.addEventListener('hashchange', route);
window.addEventListener('load', route);