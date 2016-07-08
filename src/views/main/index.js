module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function(){
        return {
            title: '前言',
            msg: '本网站专属个人查阅资料使用，不做任何商业使用...',
            footer_content: '联系方式：18680588948 邮箱：245160801@qq.com'
        }
    },
    components: {
        'app-header': require('../../components/header'),
        'app-footer': require('../../components/footer'),
    }
}