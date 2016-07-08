webpackJsonp([2],{

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(75);

	module.exports = {
	    template: __webpack_require__(77),
	    props: ['title', 'msg']
	}

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(76);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".info {\n    font-size: 12px;\n    color: red;\n}", ""]);

	// exports


/***/ },

/***/ 77:
/***/ function(module, exports) {

	module.exports = "<h3>{{ title }}</h3>\n<p class=\"info\">{{ msg }}</p>";

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    template: __webpack_require__(83),
	    replace: true,
	    data: function(){
	        return {
	            title: '文档资料',
	            msg: '相关公用方法文档...',
	            footer_content: '联系方式：18680588948 <br/>邮箱：245160801@qq.com'
	        }
	    },
	    components: {
	        'app-header': __webpack_require__(74),
	        'app-footer': __webpack_require__(78),
	    }
	}

/***/ },

/***/ 83:
/***/ function(module, exports) {

	module.exports = "<div class=\"view\" v-transition>\n    <app-header title='{{ title }}' msg='{{ msg }}'></app-header>\n    \n    <div>\n        meta篇\n\n1.视窗宽度\n\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no\"/>\n\n其中 width=device-width 是设置视窗宽度为设备视窗宽度，还可以固定宽度，例如： width=640 则是640px的宽度（常见于微信）；\n\ninitial-scale=1.0 ：设置缩放比例为1.0；\n\nminimum-scale=1.0 和 maximum-scale=1.0 ：最小缩放比例和最大缩放比例；\n\nuser-scalable=no ：禁止用户自由缩放，user-scalable 默认值为 yes 。\n\n 提示：刚刚那个是带全部参数的，一般常用的，有 user-scalable=no 就不用使用 minimum-scale=1.0 和 maximum-scale=1.0 来强制禁止缩放了。\n\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,user-scalable=no\"/>\n\n2.自动识别格式\n\n<meta name=\"format-detection\" content=\"telephone=no\"/>\n\ncontent 里面的参数：telephone=no 是禁止浏览器自动识别手机号码，email=no 是禁止浏览器自动识别Email。\n\n3.完整模板\n\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,user-scalable=no\"/><meta name=\"format-detection\" content=\"telephone=no\"/><meta name=\"format-detection\" content=\"email=no\"/>\n\nCSS篇\n\nbody {\nfont-family: \"Helvetica Neue\", Helvetica, STHeiTi, sans-serif; /*使用无衬线字体*/\n}\n\na, img {\n-webkit-touch-callout: none; /*禁止长按链接与图片弹出菜单*/\n}\n\nhtml, body {\n-webkit-user-select: none; /*禁止选中文本*/user-select: none;\n}\n\nbutton,input,optgroup,select,textarea {\n-webkit-appearance:none; /*去掉webkit默认的表单样式*/\n}\n\na,button,input,optgroup,select,textarea {\n-webkit-tap-highlight-color:rgba(0,0,0,0); /*去掉a、input和button点击时的蓝色外边框和灰色半透明背景*/\n}\n\ninput::-webkit-input-placeholder {\ncolor:#ccc; /*修改webkit中input的planceholder样式*/\n}\n\ninput:focus::-webkit-input-placeholder {\ncolor:#f00; /*修改webkit中focus状态下input的planceholder样式*/\n}\n\nbody {\n-webkit-text-size-adjust: 100%!important; /*禁止IOS调整字体大小*/\n}\n\ninput::-webkit-input-speech-button {\ndisplay: none; /*隐藏Android的语音输入按钮*/\n}\n\nFlex基础篇\n\n这里假设flex容器为 .box ，子元素为 .item 。\n\n1.定义容器为flex布局\n\n.box{\ndisplay: -webkit-flex; /*webkit*/display: flex;\n}\n\n/*行内flex*/.box{\ndisplay: -webkit-inline-flex; /*webkit*/display:inline-flex;\n}\n\n2.容器样式\n\n.box{\nflex-direction: row | row-reverse | column | column-reverse;\n/*主轴方向：左到右（默认） | 右到左 | 上到下 | 下到上*/\n\nflex-wrap: nowrap | wrap | wrap-reverse;\n/*换行：不换行（默认） | 换行 | 换行并第一行在下方*/\n\nflex-flow: <flex-direction> || <flex-wrap>;\n/*主轴方向和换行简写*/\n\njustify-content: flex-start | flex-end | center | space-between | space-around;\n/*主轴对齐方式：左对齐（默认） | 右对齐 | 居中对齐 | 两端对齐 | 平均分布*/\n\nalign-items: flex-start | flex-end | center | baseline | stretch;\n/*交叉轴对齐方式：顶部对齐（默认） | 底部对齐 | 居中对齐 | 上下对齐并铺满 | 文本基线对齐*/\n\nalign-content: flex-start | flex-end | center | space-between | space-around | stretch;\n/*多主轴对齐：顶部对齐（默认） | 底部对齐 | 居中对齐 | 上下对齐并铺满 | 上下平均分布*/\n}\n\n3.子元素样式\n\n.item{\norder: <integer>;\n/*排序：数值越小，越排前，默认为0*/\n\nflex-grow: <number>; /* default 0 *//*放大：默认0（即如果有剩余空间也不放大，值为1则放大，2是1的双倍大小，以此类推）*/\n\nflex-shrink: <number>; /* default 1 *//*缩小：默认1（如果空间不足则会缩小，值为0不缩小）*/\n\nflex-basis: <length> | auto; /* default auto *//*固定大小：默认为0，可以设置px值，也可以设置百分比大小*/\n\nflex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]\n/*flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto，*/\n\nalign-self: auto | flex-start | flex-end | center | baseline | stretch;\n/*单独对齐方式：自动（默认） | 顶部对齐 | 底部对齐 | 居中对齐 | 上下对齐并铺满 | 文本基线对齐*/\n}\n\n小技巧篇\n\n1.自定义苹果图标\n\n在网站文件根目录放一个 apple-touch-icon.png 文件，苹果设备保存网站为书签或桌面快捷方式时，就会使用这个文件作为图标，文件尺寸建议为：180px × 180px。\n\n2.自定义favicon\n\n<link rel=\"icon\" href=\"favicon.ico\" mce_href=\"favicon.ico\" type=\"image/x-icon\">\n\n3.定义浏览器点击行为\n\n<a href=\"tel:020-10086\">打电话给:020-10086</a><a href=\"sms:10086\">发短信给: 10086</a><a href=\"mailto:me@22278.club\">发送邮件: me@22278.club</a>\n\n4.定义上传文件类型和格式\n\n<input type=file accept=\"image/*\">\n\n上面的文件上传框中，accept 可以限制上传文件的类型，参数为 image/* 是所有图片类型，点击会弹出图库，也可以指定图片格式，参数设置成 image/png 则可以限制图片类型为png；参数如果为 video/* 则是选择视频的意思；accept 还可以设置多个文件格式，语法为 accept=\"image/gif, image/jpeg\" ；\n\n5.使用box-shadow改变(挡住)表单自动填充后的黄色\n\ninput:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill{\nbox-shadow:inset 0 0 0 1000px #fff;\n}\n\n6.用CSS实现省略号文字截断\n\nwhite-space: nowrap;\ntext-overflow: ellipsis;\noverflow: hidden;\n\n7.使用border绘制小三角\n\n原理是：上下和左右的边框对接其实是个斜角，利用这个特性，使其中一边的边框透明，另外一边写成想要的颜色并隐藏对边，就可以变成小箭头形状。\n\nborder-width: 10px 10px 10px 0; //左箭头\nborder-color: transparent #fff;\nborder-style: solid;\nwidth: 0;\n\nTootip写法：\n\n<!--html--><div class=\"box\">嗨！点击菜单就可以关注兮兮公众号了哟~</div>\n\n/*--css--*/.box{\nposition: relative;\npadding: 0 20px;\nwidth: 380px;\nheight: 80px;\nborder-radius: 8px;\nbackground: #efefef;\nfont-size: 18px;\nline-height: 80px;\n}\n.box:after{\nposition: absolute;\ntop: 50%;\nleft: -15px;\nz-index: 1;\ndisplay: block;\nmargin-top: -15px;\nwidth: 0;\nborder-color: transparent #efefef;\nborder-style: solid;\nborder-width: 15px 15px 15px 0;\ncontent: \"\";\n}\n    </div>\n\n</div>";

/***/ }

});