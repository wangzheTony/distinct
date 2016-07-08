webpackJsonp([1],{

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    template: __webpack_require__(77),
	    replace: true,
	    data: function(){
	        return {
	            title: '前言',
	            msg: '本网站专属个人查阅资料使用，不做任何商业使用...',
	            footer_content: '联系方式：18680588948 邮箱：245160801@qq.com'
	        }
	    },
	    components: {
	        'app-header': __webpack_require__(78),
	        'app-footer': __webpack_require__(72),
	    }
	}

/***/ },

/***/ 77:
/***/ function(module, exports) {

	module.exports = "<div class=\"view\" v-transition>\n    <app-header title='{{ title }}' msg='{{ msg }}'></app-header>\n    \n    <div>\n        1. 查阅相关资料文档，提高平时开发速度\n    </div>\n\n</div>";

/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(79);

	module.exports = {
	    template: __webpack_require__(81),
	    props: ['title', 'msg']
	}

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.22.0/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.22.0/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".info {\n    font-size: 12px;\n    color: red;\n}", ""]);

	// exports


/***/ },

/***/ 81:
/***/ function(module, exports) {

	module.exports = "<!-- <h3>{{ title }}</h3> -->\n<div class=\"alert alert-info\">{{ msg }}</div>";

/***/ }

});