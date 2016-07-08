require('./style.css');

module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function(){
        return {
            title: '码农的成长',
            msg: '不一样的经历，不一样的人生...',
            footer_content: '联系方式：18680588948 <br/>邮箱：245160801@qq.com'
        }
    },
    components: {
        'app-header': require('../../components/header'),
        'app-footer': require('../../components/footer'),
    }
}