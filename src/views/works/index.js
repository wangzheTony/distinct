module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function(){
        return {
            title: '个人作品',
            msg: '以下内容为本人曾经开发过的前端作品...',
            works: [
                {id: 1, title: '预付卡项目', msg:'无', url: 'http://m-test.yaochufa.com/prepay/index/index'},
                {id: 2, title: '游记／攻略', msg:'无', url: 'http://m-test.yaochufa.com/youji/list'},
                {id: 3, title: '亲子游', msg:'无', url: 'http://m-test.yaochufa.com/familytrip/index'}
            ]
        }
    },
    components: {
        'app-header': require('../../components/header'),
        'app-footer': require('../../components/footer'),
    }
}