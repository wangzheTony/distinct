webpackJsonp([4],{

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

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(89);

	module.exports = {
	    template: __webpack_require__(91),
	    replace: true,
	    data: function(){
	        return {
	            title: '码农的成长',
	            msg: '不一样的经历，不一样的人生...',
	            footer_content: '联系方式：18680588948 <br/>邮箱：245160801@qq.com'
	        }
	    },
	    components: {
	        'app-header': __webpack_require__(78),
	        'app-footer': __webpack_require__(72),
	    }
	}

/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(90);
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

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".table {\n\n}\n\n.table li {\n    display: block;\n}\n\n.header {\n    width: 25px;\n    height: 25px;\n    border: 0 solid;\n    border-radius: 50px;\n}", ""]);

	// exports


/***/ },

/***/ 91:
/***/ function(module, exports) {

	module.exports = "<div class=\"view\" v-transition>\n    <app-header title='{{ title }}' msg='{{ msg }}'></app-header>\n    \n    <div class=\"table\">\n        <!-- <img class=\"header\" src=\"../images/header.jpg\">     -->\n        <ul>\n            <li>\n                <span>姓名：王哲</span>\n            </li>\n            <li>\n                <span>2. 游记／攻略</span>\n                <a href=\"http://m-test.yaochufa.com/youji/list\">http://m-test.yaochufa.com/youji/list</a>\n            </li>\n            <li>\n                <span>3. 亲子游</span>\n                <a href=\"http://m-test.yaochufa.com/familytrip/index\">http://m-test.yaochufa.com/familytrip/index</a>\n            </li>\n            <li></li>\n            <li></li>\n        </ul>\n    </div>\n</div>";

/***/ }

});