module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function(){
        return {
            title: '个人作品',
            msg: '以下内容为本人曾经开发过的前端作品...'
        }
    },
    components: {
        'app-header': require('../../components/header'),
        'app-footer': require('../../components/footer'),
    }
}