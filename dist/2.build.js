webpackJsonp([2],{

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

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);

	module.exports = {
	    template: __webpack_require__(85),
	    replace: true,
	    data: function(){
	        return {
	            title: '文档资料',
	            msg: '相关公用方法文档...',
	            footer_content: '联系方式：18680588948 <br/>邮箱：245160801@qq.com'
	        }
	    },
	    components: {
	        'app-header': __webpack_require__(78),
	        'app-footer': __webpack_require__(72),
	    }
	}

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(84);
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

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".content {\n    \n}", ""]);

	// exports


/***/ },

/***/ 85:
/***/ function(module, exports) {

	module.exports = "<div class=\"view\" v-transition>\n    <app-header title='{{ title }}' msg='{{ msg }}'></app-header>\n    <div class=\"content\">\n        <nav class=\"menu\" data-toggle=\"menu\" style=\"width: 200px\">\n            <!-- <button class=\"btn btn-primary\"><i class=\"icon-edit\"></i> CREATE</button> -->\n            <!-- <button class=\"btn\"><i class=\"icon-cloud-upload\"></i> UPLOAD</button> -->\n            <ul class=\"nav nav-primary\">\n                <li class=\"active\"><a href=\"#\"><i class=\"icon-th\"></i> Dashboard</a></li>\n                <li><a href=\"#\"><i class=\"icon-user\"></i> Me</a></li>\n                <li>\n                    <a href=\"javascript:;\"><i class=\"icon-time\"></i> Time</a>\n                    <ul class=\"nav\">\n                        <li><a href=\"#\">Today</a></li>\n                        <li><a href=\"#\">Tomarrow</a></li>\n                    </ul>\n                </li>\n                <li><a href=\"#\"><i class=\"icon-list-ul\"></i> All</a></li>\n                <li class=\"active show\">\n                    <a href=\"#\"><i class=\"icon-tasks\"></i> Status</a>\n                    <ul class=\"nav\">\n                        <li><a href=\"#\"><i class=\"icon-circle-blank\"></i> Ready</a></li>\n                        <li class=\"\"><a href=\"#\"><i class=\"icon-play-sign\"></i> Ongoing</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </nav>\n    </div>\n</div>\n";

/***/ }

});