module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function(){
        return {
            title: '文档资料',
            msg: '相关公用方法文档...',
            footer_content: '联系方式：18680588948 <br/>邮箱：245160801@qq.com'
        }
    },
    components: {
        'app-header': require('../../components/header'),
        'app-footer': require('../../components/footer'),
    }
}