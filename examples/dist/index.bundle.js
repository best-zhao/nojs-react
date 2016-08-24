webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _nj = __webpack_require__(1);

	var _nj2 = _interopRequireDefault(_nj);

	var _jquery = __webpack_require__(183);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _marked = __webpack_require__(194);

	var _marked2 = _interopRequireDefault(_marked);

	var _frame = __webpack_require__(195);

	var _Demos = __webpack_require__(201);

	var _Demos2 = _interopRequireDefault(_Demos);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = _nj2.default.React;
	var render = _nj2.default.render;

	_jquery2.default.getJSON('/examples/menu.json').then(function (json) {
	    var frameOptions = {
	        logo: React.createElement(
	            'h1',
	            null,
	            'nojs-react'
	        ),
	        menu: json.data,
	        parseUrl: function parseUrl(url, node) {
	            return node ? '/examples/doc/' + url + '.md' : url;
	        },
	        parseContent: function parseContent(html, fromUrl) {
	            return (/.md$/.test(fromUrl) ? (0, _marked2.default)(html) : html
	            );
	        },
	        onChange: function onChange(node, hashData, container) {
	            node = node || this.state.menuFormatData[hashData.id];
	            if (node) {
	                var demo = _Demos2.default[node.link] || _Demos2.default[node.demo];

	                typeof demo == 'function' && setTimeout(function () {
	                    demo(container);
	                }, 10);
	            }
	            Prism.highlightAll(true);
	        }
	    };
	    render(React.createElement(_frame.Frame, frameOptions), document.getElementById('frameContainer'));
	});

	var Wilddog = __webpack_require__(260);
	var ref = new Wilddog("https://nojs-react.wilddogio.com/");
	var MenusRef = ref.child('menus');

	MenusRef.on("value", function (datasnapshot) {
	    console.log(1, datasnapshot.val());
	}, function (error) {
	    console.log(2, error);
	    // 处理请求失败打错误
	});
	MenusRef.orderByChild("name").on("child_added", function (snapshot) {
	    console.log(snapshot.key() + " was " + snapshot.val().name + " meters tall");
	});

	// MenusRef.push({"id":3, "name":"Popup", "parentid":1, "link":"popup"})

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 */

	;(function() {

	/**
	 * Block-Level Grammar
	 */

	var block = {
	  newline: /^\n+/,
	  code: /^( {4}[^\n]+\n*)+/,
	  fences: noop,
	  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
	  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	  nptable: noop,
	  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
	  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
	  table: noop,
	  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
	  text: /^[^\n]+/
	};

	block.bullet = /(?:[*+-]|\d+\.)/;
	block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	block.item = replace(block.item, 'gm')
	  (/bull/g, block.bullet)
	  ();

	block.list = replace(block.list)
	  (/bull/g, block.bullet)
	  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
	  ('def', '\\n+(?=' + block.def.source + ')')
	  ();

	block.blockquote = replace(block.blockquote)
	  ('def', block.def)
	  ();

	block._tag = '(?!(?:'
	  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

	block.html = replace(block.html)
	  ('comment', /<!--[\s\S]*?-->/)
	  ('closed', /<(tag)[\s\S]+?<\/\1>/)
	  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
	  (/tag/g, block._tag)
	  ();

	block.paragraph = replace(block.paragraph)
	  ('hr', block.hr)
	  ('heading', block.heading)
	  ('lheading', block.lheading)
	  ('blockquote', block.blockquote)
	  ('tag', '<' + block._tag)
	  ('def', block.def)
	  ();

	/**
	 * Normal Block Grammar
	 */

	block.normal = merge({}, block);

	/**
	 * GFM Block Grammar
	 */

	block.gfm = merge({}, block.normal, {
	  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
	  paragraph: /^/,
	  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	});

	block.gfm.paragraph = replace(block.paragraph)
	  ('(?!', '(?!'
	    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	    + block.list.source.replace('\\1', '\\3') + '|')
	  ();

	/**
	 * GFM + Tables Block Grammar
	 */

	block.tables = merge({}, block.gfm, {
	  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	});

	/**
	 * Block Lexer
	 */

	function Lexer(options) {
	  this.tokens = [];
	  this.tokens.links = {};
	  this.options = options || marked.defaults;
	  this.rules = block.normal;

	  if (this.options.gfm) {
	    if (this.options.tables) {
	      this.rules = block.tables;
	    } else {
	      this.rules = block.gfm;
	    }
	  }
	}

	/**
	 * Expose Block Rules
	 */

	Lexer.rules = block;

	/**
	 * Static Lex Method
	 */

	Lexer.lex = function(src, options) {
	  var lexer = new Lexer(options);
	  return lexer.lex(src);
	};

	/**
	 * Preprocessing
	 */

	Lexer.prototype.lex = function(src) {
	  src = src
	    .replace(/\r\n|\r/g, '\n')
	    .replace(/\t/g, '    ')
	    .replace(/\u00a0/g, ' ')
	    .replace(/\u2424/g, '\n');

	  return this.token(src, true);
	};

	/**
	 * Lexing
	 */

	Lexer.prototype.token = function(src, top, bq) {
	  var src = src.replace(/^ +$/gm, '')
	    , next
	    , loose
	    , cap
	    , bull
	    , b
	    , item
	    , space
	    , i
	    , l;

	  while (src) {
	    // newline
	    if (cap = this.rules.newline.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[0].length > 1) {
	        this.tokens.push({
	          type: 'space'
	        });
	      }
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      cap = cap[0].replace(/^ {4}/gm, '');
	      this.tokens.push({
	        type: 'code',
	        text: !this.options.pedantic
	          ? cap.replace(/\n+$/, '')
	          : cap
	      });
	      continue;
	    }

	    // fences (gfm)
	    if (cap = this.rules.fences.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'code',
	        lang: cap[2],
	        text: cap[3] || ''
	      });
	      continue;
	    }

	    // heading
	    if (cap = this.rules.heading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[1].length,
	        text: cap[2]
	      });
	      continue;
	    }

	    // table no leading pipe (gfm)
	    if (top && (cap = this.rules.nptable.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i].split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // lheading
	    if (cap = this.rules.lheading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[2] === '=' ? 1 : 2,
	        text: cap[1]
	      });
	      continue;
	    }

	    // hr
	    if (cap = this.rules.hr.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'hr'
	      });
	      continue;
	    }

	    // blockquote
	    if (cap = this.rules.blockquote.exec(src)) {
	      src = src.substring(cap[0].length);

	      this.tokens.push({
	        type: 'blockquote_start'
	      });

	      cap = cap[0].replace(/^ *> ?/gm, '');

	      // Pass `top` to keep the current
	      // "toplevel" state. This is exactly
	      // how markdown.pl works.
	      this.token(cap, top, true);

	      this.tokens.push({
	        type: 'blockquote_end'
	      });

	      continue;
	    }

	    // list
	    if (cap = this.rules.list.exec(src)) {
	      src = src.substring(cap[0].length);
	      bull = cap[2];

	      this.tokens.push({
	        type: 'list_start',
	        ordered: bull.length > 1
	      });

	      // Get each top-level item.
	      cap = cap[0].match(this.rules.item);

	      next = false;
	      l = cap.length;
	      i = 0;

	      for (; i < l; i++) {
	        item = cap[i];

	        // Remove the list item's bullet
	        // so it is seen as the next token.
	        space = item.length;
	        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

	        // Outdent whatever the
	        // list item contains. Hacky.
	        if (~item.indexOf('\n ')) {
	          space -= item.length;
	          item = !this.options.pedantic
	            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	            : item.replace(/^ {1,4}/gm, '');
	        }

	        // Determine whether the next list item belongs here.
	        // Backpedal if it does not belong in this list.
	        if (this.options.smartLists && i !== l - 1) {
	          b = block.bullet.exec(cap[i + 1])[0];
	          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	            src = cap.slice(i + 1).join('\n') + src;
	            i = l - 1;
	          }
	        }

	        // Determine whether item is loose or not.
	        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	        // for discount behavior.
	        loose = next || /\n\n(?!\s*$)/.test(item);
	        if (i !== l - 1) {
	          next = item.charAt(item.length - 1) === '\n';
	          if (!loose) loose = next;
	        }

	        this.tokens.push({
	          type: loose
	            ? 'loose_item_start'
	            : 'list_item_start'
	        });

	        // Recurse.
	        this.token(item, false, bq);

	        this.tokens.push({
	          type: 'list_item_end'
	        });
	      }

	      this.tokens.push({
	        type: 'list_end'
	      });

	      continue;
	    }

	    // html
	    if (cap = this.rules.html.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: this.options.sanitize
	          ? 'paragraph'
	          : 'html',
	        pre: !this.options.sanitizer
	          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	        text: cap[0]
	      });
	      continue;
	    }

	    // def
	    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.links[cap[1].toLowerCase()] = {
	        href: cap[2],
	        title: cap[3]
	      };
	      continue;
	    }

	    // table (gfm)
	    if (top && (cap = this.rules.table.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i]
	          .replace(/^ *\| *| *\| *$/g, '')
	          .split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // top-level paragraph
	    if (top && (cap = this.rules.paragraph.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'paragraph',
	        text: cap[1].charAt(cap[1].length - 1) === '\n'
	          ? cap[1].slice(0, -1)
	          : cap[1]
	      });
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      // Top-level should never reach here.
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'text',
	        text: cap[0]
	      });
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return this.tokens;
	};

	/**
	 * Inline-Level Grammar
	 */

	var inline = {
	  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
	  url: noop,
	  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
	  link: /^!?\[(inside)\]\(href\)/,
	  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
	  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
	  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
	  br: /^ {2,}\n(?!\s*$)/,
	  del: noop,
	  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
	};

	inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
	inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

	inline.link = replace(inline.link)
	  ('inside', inline._inside)
	  ('href', inline._href)
	  ();

	inline.reflink = replace(inline.reflink)
	  ('inside', inline._inside)
	  ();

	/**
	 * Normal Inline Grammar
	 */

	inline.normal = merge({}, inline);

	/**
	 * Pedantic Inline Grammar
	 */

	inline.pedantic = merge({}, inline.normal, {
	  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	});

	/**
	 * GFM Inline Grammar
	 */

	inline.gfm = merge({}, inline.normal, {
	  escape: replace(inline.escape)('])', '~|])')(),
	  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
	  del: /^~~(?=\S)([\s\S]*?\S)~~/,
	  text: replace(inline.text)
	    (']|', '~]|')
	    ('|', '|https?://|')
	    ()
	});

	/**
	 * GFM + Line Breaks Inline Grammar
	 */

	inline.breaks = merge({}, inline.gfm, {
	  br: replace(inline.br)('{2,}', '*')(),
	  text: replace(inline.gfm.text)('{2,}', '*')()
	});

	/**
	 * Inline Lexer & Compiler
	 */

	function InlineLexer(links, options) {
	  this.options = options || marked.defaults;
	  this.links = links;
	  this.rules = inline.normal;
	  this.renderer = this.options.renderer || new Renderer;
	  this.renderer.options = this.options;

	  if (!this.links) {
	    throw new
	      Error('Tokens array requires a `links` property.');
	  }

	  if (this.options.gfm) {
	    if (this.options.breaks) {
	      this.rules = inline.breaks;
	    } else {
	      this.rules = inline.gfm;
	    }
	  } else if (this.options.pedantic) {
	    this.rules = inline.pedantic;
	  }
	}

	/**
	 * Expose Inline Rules
	 */

	InlineLexer.rules = inline;

	/**
	 * Static Lexing/Compiling Method
	 */

	InlineLexer.output = function(src, links, options) {
	  var inline = new InlineLexer(links, options);
	  return inline.output(src);
	};

	/**
	 * Lexing/Compiling
	 */

	InlineLexer.prototype.output = function(src) {
	  var out = ''
	    , link
	    , text
	    , href
	    , cap;

	  while (src) {
	    // escape
	    if (cap = this.rules.escape.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += cap[1];
	      continue;
	    }

	    // autolink
	    if (cap = this.rules.autolink.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = cap[1].charAt(6) === ':'
	          ? this.mangle(cap[1].substring(7))
	          : this.mangle(cap[1]);
	        href = this.mangle('mailto:') + text;
	      } else {
	        text = escape(cap[1]);
	        href = text;
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // url (gfm)
	    if (!this.inLink && (cap = this.rules.url.exec(src))) {
	      src = src.substring(cap[0].length);
	      text = escape(cap[1]);
	      href = text;
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // tag
	    if (cap = this.rules.tag.exec(src)) {
	      if (!this.inLink && /^<a /i.test(cap[0])) {
	        this.inLink = true;
	      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	        this.inLink = false;
	      }
	      src = src.substring(cap[0].length);
	      out += this.options.sanitize
	        ? this.options.sanitizer
	          ? this.options.sanitizer(cap[0])
	          : escape(cap[0])
	        : cap[0]
	      continue;
	    }

	    // link
	    if (cap = this.rules.link.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.inLink = true;
	      out += this.outputLink(cap, {
	        href: cap[2],
	        title: cap[3]
	      });
	      this.inLink = false;
	      continue;
	    }

	    // reflink, nolink
	    if ((cap = this.rules.reflink.exec(src))
	        || (cap = this.rules.nolink.exec(src))) {
	      src = src.substring(cap[0].length);
	      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = this.links[link.toLowerCase()];
	      if (!link || !link.href) {
	        out += cap[0].charAt(0);
	        src = cap[0].substring(1) + src;
	        continue;
	      }
	      this.inLink = true;
	      out += this.outputLink(cap, link);
	      this.inLink = false;
	      continue;
	    }

	    // strong
	    if (cap = this.rules.strong.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.strong(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // em
	    if (cap = this.rules.em.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.em(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.codespan(escape(cap[2], true));
	      continue;
	    }

	    // br
	    if (cap = this.rules.br.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.br();
	      continue;
	    }

	    // del (gfm)
	    if (cap = this.rules.del.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.del(this.output(cap[1]));
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.text(escape(this.smartypants(cap[0])));
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return out;
	};

	/**
	 * Compile Link
	 */

	InlineLexer.prototype.outputLink = function(cap, link) {
	  var href = escape(link.href)
	    , title = link.title ? escape(link.title) : null;

	  return cap[0].charAt(0) !== '!'
	    ? this.renderer.link(href, title, this.output(cap[1]))
	    : this.renderer.image(href, title, escape(cap[1]));
	};

	/**
	 * Smartypants Transformations
	 */

	InlineLexer.prototype.smartypants = function(text) {
	  if (!this.options.smartypants) return text;
	  return text
	    // em-dashes
	    .replace(/---/g, '\u2014')
	    // en-dashes
	    .replace(/--/g, '\u2013')
	    // opening singles
	    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	    // closing singles & apostrophes
	    .replace(/'/g, '\u2019')
	    // opening doubles
	    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	    // closing doubles
	    .replace(/"/g, '\u201d')
	    // ellipses
	    .replace(/\.{3}/g, '\u2026');
	};

	/**
	 * Mangle Links
	 */

	InlineLexer.prototype.mangle = function(text) {
	  if (!this.options.mangle) return text;
	  var out = ''
	    , l = text.length
	    , i = 0
	    , ch;

	  for (; i < l; i++) {
	    ch = text.charCodeAt(i);
	    if (Math.random() > 0.5) {
	      ch = 'x' + ch.toString(16);
	    }
	    out += '&#' + ch + ';';
	  }

	  return out;
	};

	/**
	 * Renderer
	 */

	function Renderer(options) {
	  this.options = options || {};
	}

	Renderer.prototype.code = function(code, lang, escaped) {
	  if (this.options.highlight) {
	    var out = this.options.highlight(code, lang);
	    if (out != null && out !== code) {
	      escaped = true;
	      code = out;
	    }
	  }

	  if (!lang) {
	    return '<pre><code>'
	      + (escaped ? code : escape(code, true))
	      + '\n</code></pre>';
	  }

	  return '<pre><code class="'
	    + this.options.langPrefix
	    + escape(lang, true)
	    + '">'
	    + (escaped ? code : escape(code, true))
	    + '\n</code></pre>\n';
	};

	Renderer.prototype.blockquote = function(quote) {
	  return '<blockquote>\n' + quote + '</blockquote>\n';
	};

	Renderer.prototype.html = function(html) {
	  return html;
	};

	Renderer.prototype.heading = function(text, level, raw) {
	  return '<h'
	    + level
	    + ' id="'
	    + this.options.headerPrefix
	    + raw.toLowerCase().replace(/[^\w]+/g, '-')
	    + '">'
	    + text
	    + '</h'
	    + level
	    + '>\n';
	};

	Renderer.prototype.hr = function() {
	  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	};

	Renderer.prototype.list = function(body, ordered) {
	  var type = ordered ? 'ol' : 'ul';
	  return '<' + type + '>\n' + body + '</' + type + '>\n';
	};

	Renderer.prototype.listitem = function(text) {
	  return '<li>' + text + '</li>\n';
	};

	Renderer.prototype.paragraph = function(text) {
	  return '<p>' + text + '</p>\n';
	};

	Renderer.prototype.table = function(header, body) {
	  return '<table>\n'
	    + '<thead>\n'
	    + header
	    + '</thead>\n'
	    + '<tbody>\n'
	    + body
	    + '</tbody>\n'
	    + '</table>\n';
	};

	Renderer.prototype.tablerow = function(content) {
	  return '<tr>\n' + content + '</tr>\n';
	};

	Renderer.prototype.tablecell = function(content, flags) {
	  var type = flags.header ? 'th' : 'td';
	  var tag = flags.align
	    ? '<' + type + ' style="text-align:' + flags.align + '">'
	    : '<' + type + '>';
	  return tag + content + '</' + type + '>\n';
	};

	// span level renderer
	Renderer.prototype.strong = function(text) {
	  return '<strong>' + text + '</strong>';
	};

	Renderer.prototype.em = function(text) {
	  return '<em>' + text + '</em>';
	};

	Renderer.prototype.codespan = function(text) {
	  return '<code>' + text + '</code>';
	};

	Renderer.prototype.br = function() {
	  return this.options.xhtml ? '<br/>' : '<br>';
	};

	Renderer.prototype.del = function(text) {
	  return '<del>' + text + '</del>';
	};

	Renderer.prototype.link = function(href, title, text) {
	  if (this.options.sanitize) {
	    try {
	      var prot = decodeURIComponent(unescape(href))
	        .replace(/[^\w:]/g, '')
	        .toLowerCase();
	    } catch (e) {
	      return '';
	    }
	    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
	      return '';
	    }
	  }
	  var out = '<a href="' + href + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += '>' + text + '</a>';
	  return out;
	};

	Renderer.prototype.image = function(href, title, text) {
	  var out = '<img src="' + href + '" alt="' + text + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += this.options.xhtml ? '/>' : '>';
	  return out;
	};

	Renderer.prototype.text = function(text) {
	  return text;
	};

	/**
	 * Parsing & Compiling
	 */

	function Parser(options) {
	  this.tokens = [];
	  this.token = null;
	  this.options = options || marked.defaults;
	  this.options.renderer = this.options.renderer || new Renderer;
	  this.renderer = this.options.renderer;
	  this.renderer.options = this.options;
	}

	/**
	 * Static Parse Method
	 */

	Parser.parse = function(src, options, renderer) {
	  var parser = new Parser(options, renderer);
	  return parser.parse(src);
	};

	/**
	 * Parse Loop
	 */

	Parser.prototype.parse = function(src) {
	  this.inline = new InlineLexer(src.links, this.options, this.renderer);
	  this.tokens = src.reverse();

	  var out = '';
	  while (this.next()) {
	    out += this.tok();
	  }

	  return out;
	};

	/**
	 * Next Token
	 */

	Parser.prototype.next = function() {
	  return this.token = this.tokens.pop();
	};

	/**
	 * Preview Next Token
	 */

	Parser.prototype.peek = function() {
	  return this.tokens[this.tokens.length - 1] || 0;
	};

	/**
	 * Parse Text Tokens
	 */

	Parser.prototype.parseText = function() {
	  var body = this.token.text;

	  while (this.peek().type === 'text') {
	    body += '\n' + this.next().text;
	  }

	  return this.inline.output(body);
	};

	/**
	 * Parse Current Token
	 */

	Parser.prototype.tok = function() {
	  switch (this.token.type) {
	    case 'space': {
	      return '';
	    }
	    case 'hr': {
	      return this.renderer.hr();
	    }
	    case 'heading': {
	      return this.renderer.heading(
	        this.inline.output(this.token.text),
	        this.token.depth,
	        this.token.text);
	    }
	    case 'code': {
	      return this.renderer.code(this.token.text,
	        this.token.lang,
	        this.token.escaped);
	    }
	    case 'table': {
	      var header = ''
	        , body = ''
	        , i
	        , row
	        , cell
	        , flags
	        , j;

	      // header
	      cell = '';
	      for (i = 0; i < this.token.header.length; i++) {
	        flags = { header: true, align: this.token.align[i] };
	        cell += this.renderer.tablecell(
	          this.inline.output(this.token.header[i]),
	          { header: true, align: this.token.align[i] }
	        );
	      }
	      header += this.renderer.tablerow(cell);

	      for (i = 0; i < this.token.cells.length; i++) {
	        row = this.token.cells[i];

	        cell = '';
	        for (j = 0; j < row.length; j++) {
	          cell += this.renderer.tablecell(
	            this.inline.output(row[j]),
	            { header: false, align: this.token.align[j] }
	          );
	        }

	        body += this.renderer.tablerow(cell);
	      }
	      return this.renderer.table(header, body);
	    }
	    case 'blockquote_start': {
	      var body = '';

	      while (this.next().type !== 'blockquote_end') {
	        body += this.tok();
	      }

	      return this.renderer.blockquote(body);
	    }
	    case 'list_start': {
	      var body = ''
	        , ordered = this.token.ordered;

	      while (this.next().type !== 'list_end') {
	        body += this.tok();
	      }

	      return this.renderer.list(body, ordered);
	    }
	    case 'list_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.token.type === 'text'
	          ? this.parseText()
	          : this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'loose_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'html': {
	      var html = !this.token.pre && !this.options.pedantic
	        ? this.inline.output(this.token.text)
	        : this.token.text;
	      return this.renderer.html(html);
	    }
	    case 'paragraph': {
	      return this.renderer.paragraph(this.inline.output(this.token.text));
	    }
	    case 'text': {
	      return this.renderer.paragraph(this.parseText());
	    }
	  }
	};

	/**
	 * Helpers
	 */

	function escape(html, encode) {
	  return html
	    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#39;');
	}

	function unescape(html) {
	  return html.replace(/&([#\w]+);/g, function(_, n) {
	    n = n.toLowerCase();
	    if (n === 'colon') return ':';
	    if (n.charAt(0) === '#') {
	      return n.charAt(1) === 'x'
	        ? String.fromCharCode(parseInt(n.substring(2), 16))
	        : String.fromCharCode(+n.substring(1));
	    }
	    return '';
	  });
	}

	function replace(regex, opt) {
	  regex = regex.source;
	  opt = opt || '';
	  return function self(name, val) {
	    if (!name) return new RegExp(regex, opt);
	    val = val.source || val;
	    val = val.replace(/(^|[^\[])\^/g, '$1');
	    regex = regex.replace(name, val);
	    return self;
	  };
	}

	function noop() {}
	noop.exec = noop;

	function merge(obj) {
	  var i = 1
	    , target
	    , key;

	  for (; i < arguments.length; i++) {
	    target = arguments[i];
	    for (key in target) {
	      if (Object.prototype.hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }

	  return obj;
	}


	/**
	 * Marked
	 */

	function marked(src, opt, callback) {
	  if (callback || typeof opt === 'function') {
	    if (!callback) {
	      callback = opt;
	      opt = null;
	    }

	    opt = merge({}, marked.defaults, opt || {});

	    var highlight = opt.highlight
	      , tokens
	      , pending
	      , i = 0;

	    try {
	      tokens = Lexer.lex(src, opt)
	    } catch (e) {
	      return callback(e);
	    }

	    pending = tokens.length;

	    var done = function(err) {
	      if (err) {
	        opt.highlight = highlight;
	        return callback(err);
	      }

	      var out;

	      try {
	        out = Parser.parse(tokens, opt);
	      } catch (e) {
	        err = e;
	      }

	      opt.highlight = highlight;

	      return err
	        ? callback(err)
	        : callback(null, out);
	    };

	    if (!highlight || highlight.length < 3) {
	      return done();
	    }

	    delete opt.highlight;

	    if (!pending) return done();

	    for (; i < tokens.length; i++) {
	      (function(token) {
	        if (token.type !== 'code') {
	          return --pending || done();
	        }
	        return highlight(token.text, token.lang, function(err, code) {
	          if (err) return done(err);
	          if (code == null || code === token.text) {
	            return --pending || done();
	          }
	          token.text = code;
	          token.escaped = true;
	          --pending || done();
	        });
	      })(tokens[i]);
	    }

	    return;
	  }
	  try {
	    if (opt) opt = merge({}, marked.defaults, opt);
	    return Parser.parse(Lexer.lex(src, opt), opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/chjj/marked.';
	    if ((opt || marked.defaults).silent) {
	      return '<p>An error occured:</p><pre>'
	        + escape(e.message + '', true)
	        + '</pre>';
	    }
	    throw e;
	  }
	}

	/**
	 * Options
	 */

	marked.options =
	marked.setOptions = function(opt) {
	  merge(marked.defaults, opt);
	  return marked;
	};

	marked.defaults = {
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  sanitizer: null,
	  mangle: true,
	  smartLists: false,
	  silent: false,
	  highlight: null,
	  langPrefix: 'lang-',
	  smartypants: false,
	  headerPrefix: '',
	  renderer: new Renderer,
	  xhtml: false
	};

	/**
	 * Expose
	 */

	marked.Parser = Parser;
	marked.parser = Parser.parse;

	marked.Renderer = Renderer;

	marked.Lexer = Lexer;
	marked.lexer = Lexer.lex;

	marked.InlineLexer = InlineLexer;
	marked.inlineLexer = InlineLexer.output;

	marked.parse = marked;

	if (true) {
	  module.exports = marked;
	} else if (typeof define === 'function' && define.amd) {
	  define(function() { return marked; });
	} else {
	  this.marked = marked;
	}

	}).call(function() {
	  return this || (typeof window !== 'undefined' ? window : global);
	}());

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * 框架组件
	 */
	__webpack_require__(196);

	var nj = __webpack_require__(2);
	var React = nj.React;
	var ReactDOM = nj.ReactDOM;
	var Component = React.Component;

	var $ = __webpack_require__(183);
	var Tree = __webpack_require__(198);

	exports.Frame = React.createClass({
	    displayName: 'Frame',
	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentDidMount: function componentDidMount() {
	        var self = this;
	        var menu = this.props.menu;

	        var menuTree = this.state.menu = Tree.init({
	            data: menu,
	            element: document.getElementById('frameMenu')
	        }).onChange(function (node, e) {
	            var link = node.link;
	            // console.log(0,link,node.select,node)
	            if (!link) {
	                e && e.preventDefault();
	                return;
	            }
	            self.jump(link, node);
	        });

	        this.state.menuFormatData = menuTree.state.dataFormat.databyid;

	        var _nj$utils$parseHash = nj.utils.parseHash();

	        var url = _nj$utils$parseHash.url;
	        var id = _nj$utils$parseHash.id;

	        if (!id) {
	            menuTree.select(menu[1]);
	        }

	        function watchHash(e) {
	            var _nj$utils$parseHash2 = nj.utils.parseHash();

	            var url = _nj$utils$parseHash2.url;
	            var id = _nj$utils$parseHash2.id;

	            if (!url && !id) {
	                return;
	            }
	            if (url) {
	                self.jump(url);
	            }
	            if (id) {
	                self.state.menu.select(self.state.menuFormatData[id]);
	            }
	        }
	        window.onhashchange = watchHash;

	        watchHash();

	        $(this.refs.frameContent).delegate('a', 'click', function () {
	            var url = this.getAttribute('href', 4);
	            if (url.indexOf('javascript:') < 0) {
	                self.jump(url);
	                return false;
	            }
	        });
	    },
	    jump: function jump(url, node, e) {
	        var _this = this;

	        if (this.jump.start || !url) {
	            return;
	        }

	        var hashData = nj.utils.parseHash();

	        var nodeId = node ? node.id : hashData.id;
	        this.jump.start = 1;
	        setTimeout(function () {
	            _this.jump.start = null;
	        }, 10);

	        var wrap = $(this.refs.frameContent);
	        wrap.css({ 'visibility': 'hidden' }).fadeOut(100);

	        var _props = this.props;
	        var onChange = _props.onChange;
	        var parseUrl = _props.parseUrl;
	        var parseContent = _props.parseContent;

	        url = typeof parseUrl == 'function' ? parseUrl(url, node) : url;

	        //nj.pageframe.destoryEvent.complete()//.end()
	        // iframeContainer.load(url, contentInit)
	        $.get(url, function (json) {
	            json = typeof parseContent == 'function' ? parseContent(json, url) : json;
	            wrap.html(json).css('visibility', 'visible').fadeIn(100);
	            onChange && onChange.call(_this, node, nj.utils.parseHash(), _this.refs.frameContent);
	        }).error(function () {
	            wrap.html('');
	        });
	        this.jump.url = url;

	        var hash = [];
	        if (nodeId) {
	            hash.push('id=' + nodeId);
	        }
	        if (!node && url) {
	            hash.push('url=' + encodeURIComponent(url));
	        }
	        location.hash = hash.join('&');
	    },
	    render: function render() {
	        var logo = this.props.logo;

	        logo = logo && React.createElement(
	            'div',
	            { className: 'nj-frame-logo' },
	            logo
	        );
	        return React.createElement(
	            'div',
	            { className: 'nj-frame' },
	            React.createElement(
	                'div',
	                { className: 'nj-frame-side' },
	                logo,
	                React.createElement('div', { id: 'frameMenu', className: 'nj-tree' })
	            ),
	            React.createElement(
	                'div',
	                { className: 'nj-frame-content' },
	                React.createElement('div', { className: 'nj-frame-inner', ref: 'frameContent' })
	            )
	        );
	    }
	});

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(197);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {"insertAt":"top"});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./frame.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./frame.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "html,body,#frameContainer,.nj-frame{height:100%;width:100%;overflow:hidden;}\r\n.nj-frame-side{width:220px;background:#F5F2F0;height:100%;position:fixed;padding:25px 0;}\r\n.nj-frame-logo{padding:0 20px 20px;}\r\n.nj-frame-logo h1{font:100 26px/1 'microsoft yahei';margin:0;}\r\n.nj-frame-content{margin-left:220px;font-size:1.16em;color:#222;height:100%;overflow:auto}\r\n.nj-frame-inner{padding:40px;margin:0 auto}\r\n\r\n\r\n[data-dpr] .nj-frame-side{width:4rem}\r\n[data-dpr] .nj-frame-content{margin-left:4rem}", ""]);

	// exports


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * 树形菜单组件
	 */
	__webpack_require__(199);
	var nj = __webpack_require__(2);
	var React = nj.React;
	var ReactDOM = nj.ReactDOM;
	var mixins = nj.mixins;
	var utils = nj.utils;
	var Mui = nj.Mui;

	var $ = __webpack_require__(183);

	var Tree = React.createClass({
	    displayName: 'Tree',

	    statics: {
	        parse: function parse(options) {
	            var arr = [];
	            var data = options.data;
	            var keymap = Object.assign(_keymap, options.keymap);
	            options.rootID = options.rootID === undefined ? '0' : options.rootID;
	            if (!data) {
	                return arr;
	            }
	            var _data = {};
	            var noParent = [];
	            data.forEach(function (item, i) {
	                var pid = item[keymap.parentid];
	                var level;

	                if (!pid || pid == options.rootID) {
	                    level = item.level = 0;
	                } else if (_data[pid]) {
	                    level = item.level = _data[pid].level + 1;
	                    _data[pid].children.push(item);
	                } else {
	                    //子节点出现在父节点前面
	                    noParent.push(item);
	                }

	                item.display = true;
	                item.children = [];
	                if (level !== undefined) {
	                    arr[level] = arr[level] || [];
	                    arr[level].push(item);
	                }
	                _data[item[keymap.id]] = item;
	            });

	            noParent.forEach(function (item, i) {
	                var pid = item[keymap.parentid];
	                var pnode = _data[pid];
	                if (pnode) {
	                    var level = item.level = pnode.level + 1;
	                    pnode.children.push(item);

	                    arr[level] = arr[level] || [];
	                    arr[level].push(item);
	                }
	            });

	            return {
	                databyid: _data,
	                databylevel: arr
	            };
	        },
	        init: function init(options) {
	            return ReactDOM.render(React.createElement(Tree, options), options.element);
	        },

	        //显示一个层级select菜单
	        levelSelect: function levelSelect(options) {
	            var el = options.element;
	            if (!el || el['$$levelselect']) {
	                return;
	            }
	            options.keymap = $.extend({
	                'id': 'id',
	                'name': 'name',
	                'parentid': 'parentid'
	            }, options.keymap);

	            options.rootID = options.rootID === undefined ? '0' : options.rootID;

	            var data = options.dataFormat = Tree.parse(options);
	            el['$$levelselect'] = 1;

	            return ReactDOM.render(React.createElement(LevelSelect, options), options.element);
	        },

	        //显示select级联菜单
	        treeSelect: function treeSelect(options) {
	            options.keymap = $.extend({
	                'id': 'id',
	                'name': 'name',
	                'parentid': 'parentid'
	            }, options.keymap);

	            options.rootID = options.rootID === undefined ? '0' : options.rootID;

	            var data = options.data;
	            if (typeof data == 'string') {
	                options.async = true;
	            } else {
	                options.dataFormat = Tree.parse(data);
	            }

	            var LinkSelect = Tree.LinkTree;
	            return ReactDOM.render(React.createElement(LinkSelect, options), options.element);
	        }
	    },
	    getDefaultProps: function getDefaultProps() {
	        return { level: 0, allowSelect: true, allowToggle: true };
	    },
	    getInitialState: function getInitialState() {
	        var options = Object.assign({}, this.props);
	        if (!options.level) {
	            options.keymap = Object.assign(_keymap, options.keymap);

	            options.rootID = options.rootID === undefined ? '0' : options.rootID;

	            var level = options.level || 0;

	            if (typeof options.data == 'string') {
	                options.async = true;
	                options.dataFormat = {
	                    databyid: {},
	                    databylevel: []
	                };
	                options.source = options.data;
	                options.data = [];
	            } else {
	                var data = Tree.parse(options);
	                var children = data.databylevel[level];
	                options.data = children;
	                options.dataFormat = data;
	            }
	        } else {}
	        // console.log(this.constructor.parse)
	        return options;
	    },
	    componentWillMount: function componentWillMount() {
	        var _this = this;

	        //添加事件
	        this.toggleEvent = utils.addEventQueue.call(this, 'onToggle');
	        this.changeEvent = utils.addEventQueue.call(this, 'onChange');
	        if (!this.state.level) {
	            this.pullEvent = utils.addEventQueue.call(this, 'onPull');
	            this.fetchEvent = utils.addEventQueue.call(this, 'onFetch');
	            this.fetchCompleteEvent = utils.addEventQueue.call(this, 'onFetchComplete');
	        }
	        //这里还处于外部render过程 外部还未完成 添加事件动作
	        setTimeout(function () {
	            _this.getData(null, null, 0);
	        }, 1);
	    },
	    toggle: function toggle(node, event) {
	        //阻止事件冒泡到select事件
	        if (event && event.stopPropagation) {
	            event.stopPropagation();
	        } else {
	            window.event.cancelBubble = true;
	        }
	        if (!this.props.allowToggle) {
	            return;
	        }
	        node.open = !node.open;
	        var rootScope = this.props.rootScope || this;
	        var KEY_ID = this.state.keymap.id;
	        if (node.open) {
	            if (rootScope.state.async) {
	                this.getData(node, this.state.level + 1, 1);
	            } else {
	                node.complete = true;
	            }
	        }
	        this.setState({ change: !this.state.change });
	        this.toggleEvent.complete(node, event);

	        //event.preventDefault()
	    },

	    //选中节点
	    select: function select(node, event) {
	        var _this2 = this;

	        if (!node || !this.props.allowSelect) {
	            return;
	        }

	        this.changeEvent.complete(node, event);

	        if (event && event.isDefaultPrevented()) {
	            //调用preventDefault阻止选中
	            return;
	        }
	        var _node = this.state.node;
	        if (_node) {
	            //取消上个选中节点的select状态
	            delete _node.select;
	        }
	        //打开所有父节点
	        this.getParents(node).reverse().forEach(function (parent) {
	            !parent.open && _this2.toggle(parent);
	        });
	        // if( !node.select ){
	        //     var allnodes = this.state.dataFormat.databyid
	        //     for( var i in allnodes ){
	        //         allnodes[i].select = null
	        //     }
	        // }
	        node.select = true;
	        this.setState({ node: node });
	        return this;
	    },

	    //获取所有父节点
	    getParents: function getParents(node) {
	        var parents = [];
	        var _state = this.state;
	        var keymap = _state.keymap;
	        var dataFormat = _state.dataFormat;

	        var KEY_ID = keymap.id;
	        var id = node[KEY_ID];
	        var allnodes = dataFormat.databyid;
	        if (!allnodes[id]) {
	            return parents;
	        }
	        var KEY_PID = keymap.parentid;
	        var parentNode = allnodes[node[KEY_PID]];
	        while (parentNode) {
	            parents.push(parentNode);
	            parentNode = allnodes[parentNode[KEY_PID]];
	        }
	        return parents;
	    },

	    //设置节点显示状态
	    setNodeDisplay: function setNodeDisplay(node, display) {
	        if (!node) {
	            return;
	        }
	        node.display = display;

	        if (display) {
	            //需要检测其父级是否为显示状态
	            var KEY_PID = this.props.keymap.parentid;
	            var allnodes = this.props.dataFormat.databyid;
	            var parentNode = allnodes[node[KEY_PID]];
	            while (parentNode) {
	                parentNode.display = display;
	                parentNode.open = 1;
	                parentNode = allnodes[parentNode[KEY_PID]];
	            }
	        }
	        this.setState({ change: !this.state.change });
	    },
	    getData: function getData(parentNode, level, from) {
	        var _this3 = this;

	        var rootScope = this.props.rootScope || this;
	        if (!rootScope.state.async) {
	            return;
	        }
	        // console.log(parentNode, level,from)
	        level = level || 0;

	        var parentid = rootScope.state.rootID;
	        var KEY_ID = rootScope.state.keymap.id;
	        var KEY_PID = rootScope.state.keymap.parentid;

	        var databyid = rootScope.state.dataFormat.databyid;
	        parentNode = parentNode || this.state.parentNode;

	        if (parentNode) {
	            if (parentNode.complete) {
	                return;
	            }
	            parentNode.pending = true;
	            parentid = parentNode[KEY_ID];
	        }

	        var source = rootScope.state.source;
	        var promise = $.getJSON(source + parentid);

	        promise = rootScope.fetchEvent.complete(promise, parentid) || promise;

	        promise.then(function (json) {
	            var data = json || [];
	            //this.state.data[level] = json.data
	            data = data.filter(function (node) {
	                if (!node[KEY_PID] || String(node[KEY_PID]) == parentid) {
	                    //筛选parentid正确的节点
	                    databyid[node[KEY_ID]] = node;
	                    return true;
	                }
	            });

	            rootScope.pullEvent.complete(_this3, data); //暂时保留
	            rootScope.fetchCompleteEvent.complete(data, _this3);

	            if (parentNode) {
	                parentNode.pending = null;
	                parentNode.children = data;
	                parentNode.complete = true;
	                _this3.setState({ change: !_this3.state.change });
	            } else {
	                _this3.setState({ data: data });
	            }
	        });
	    },
	    render: function render() {
	        var _this4 = this;

	        var _state2 = this.state;
	        var data = _state2.data;
	        var level = _state2.level;
	        var parentNode = _state2.parentNode;
	        var keymap = _state2.keymap;

	        var visible = !parentNode || parentNode.open ? ' d_show' : ' d_hide';
	        var rootScope = this.props.rootScope || this;
	        var _rootScope$state = rootScope.state;
	        var async = _rootScope$state.async;
	        var node = _rootScope$state.node;

	        return data ? React.createElement(
	            'ul',
	            { className: 'level' + level + visible },

	            //对于父节点没有打开的暂时不渲染其子节点
	            (!parentNode || parentNode.open || parentNode.complete) && data.map(function (item, i) {
	                if (item.display === false) {
	                    //隐藏节点
	                    return;
	                }
	                var children = item.children = item.children || [];

	                if (!children) {
	                    //return
	                }
	                var holder = [];
	                for (var j = 0; j < level; j++) {
	                    holder.push(j);
	                }
	                var nodeClass = ['item'];
	                var childOptions = {
	                    keymap: keymap
	                };
	                var nochild;

	                if (children.length || async) {
	                    Object.assign(childOptions, _this4.props, { level: level + 1, parentNode: item, rootScope: rootScope });
	                    childOptions.data = children;
	                }
	                if (async) {
	                    if (item.complete && !children.length) {
	                        nochild = true;
	                    } else if (!item.complete && item.open && !item.pending) {
	                        //初次需要打开的节点
	                        window.setTimeout(function () {
	                            _this4.getData(item, _this4.state.level + 1, 2);
	                        }, 10);
	                    }
	                } else if (!children.length) {
	                    nochild = true;
	                }
	                nochild && nodeClass.push('no-child');

	                item.pending && nodeClass.push('pending');
	                item.open && nodeClass.push('open');
	                node && item.select && nodeClass.push('selected');

	                //节点显示名称可以通过函数自定义
	                var nodeName = item.name;
	                var defineName = rootScope.props.defineName;
	                if (typeof defineName == 'function') {
	                    nodeName = defineName.call(rootScope, item);
	                }

	                // console.log(this.level,children,children.length,parentNode)

	                var KEY_ID = keymap.id;
	                // var className = utils.joinClass('level'+level+'-item', i==data.length-1 && 'last-item')

	                i == data.length - 1 && nodeClass.push('last-item');

	                return React.createElement(
	                    'li',
	                    { key: i, 'data-id': item[KEY_ID], className: 'level' + level + '-item' },
	                    React.createElement(
	                        Mui,
	                        {
	                            onClick: rootScope.select.bind(rootScope, item),
	                            className: nodeClass.join(' ') },
	                        holder.map(function (h, j) {
	                            return React.createElement('span', { key: j, className: '_line' + (j + 1 >= level ? ' _line_begin _line' + (j - level + 1) : '') });
	                        }),
	                        React.createElement('span', { className: '_icon', onClick: !nochild && _this4.toggle.bind(_this4, item) }),
	                        rootScope.props.checkbox ? React.createElement(
	                            'span',
	                            { className: '_checkbox' },
	                            React.createElement('input', { type: 'checkbox',
	                                name: rootScope.props.checkbox.name,
	                                defaultChecked: item.checked,
	                                value: item[KEY_ID],
	                                disabled: item.disabled })
	                        ) : null,
	                        React.createElement('span', { className: '_text', dangerouslySetInnerHTML: { __html: nodeName } })
	                    ),
	                    children.length ? React.createElement(Tree, childOptions) : null
	                );
	            })
	        ) : null;
	    }
	});

	var _keymap = {
	    'id': 'id',
	    'name': 'name',
	    'parentid': 'parentid'
	};

	//显示一个层级select菜单
	var LevelSelect = React.createClass({
	    displayName: 'LevelSelect',
	    getInitialState: function getInitialState() {
	        var options = Object.assign({}, this.props);
	        options.keymap = $.extend({
	            'id': 'id',
	            'name': 'name',
	            'parentid': 'parentid'
	        }, options.keymap);

	        options.rootID = options.rootID === undefined ? '0' : options.rootID;
	        options.dataFormat = Tree.parse(options);

	        return options;
	    },
	    handleChange: function handleChange(e) {
	        var node = this.state.dataFormat.databyid[e.target.value];
	        this.setState({ value: e.target.value });
	        this.changeEvent.complete(node, e);
	    },
	    componentWillMount: function componentWillMount() {
	        this.changeEvent = nj.utils.addEventQueue.call(this, 'onChange');
	    },
	    render: function render() {
	        var keymap = this.state.keymap;

	        var levels = this.state.dataFormat.databylevel;
	        var items = [];
	        var KEY_ID = keymap.id;
	        var KEY_NAME = keymap.name;

	        function getlines(level) {
	            var line = '';
	            while (--level >= 0) {
	                line += '--';
	            }
	            return line;
	        }

	        var key = 0;
	        var maxlevel = this.props.maxlevel;
	        maxlevel = typeof maxlevel == 'function' ? maxlevel.call(this) : maxlevel;

	        function getItems(nodes) {
	            if (!nodes || !nodes.length) {
	                return;
	            }
	            var level = nodes[0].level;
	            if (maxlevel && level >= maxlevel) {
	                return;
	            }
	            nodes.forEach(function (node, j) {
	                items.push(React.createElement(
	                    'option',
	                    { value: node[KEY_ID], disabled: node.disabled, key: ++key },
	                    getlines(node.level) + node[KEY_NAME]
	                ));
	                getItems(node.children);
	            });
	        }

	        var rootNode = this.props.rootNode === false ? false : true;

	        rootNode && items.push(React.createElement(
	            'option',
	            { value: this.state.rootID, key: ++key, className: 'root-node', style: { color: '#999' } },
	            '----根节点----'
	        ));
	        getItems(levels[0]);

	        return React.createElement(
	            'select',
	            {
	                size: this.props.size,
	                name: this.props.name,
	                className: this.props.className,
	                onChange: this.handleChange,
	                defaultValue: this.props.defaultValue },
	            items
	        );
	    }
	});

	Tree.SelectTree = LevelSelect;

	//select级联菜单
	Tree.LinkTree = React.createClass({
	    displayName: 'LinkTree',
	    getInitialState: function getInitialState() {
	        var _this5 = this;

	        var options = Object.assign({
	            ids: []
	        }, this.props);
	        options.keymap = $.extend({
	            'id': 'id',
	            'name': 'name',
	            'parentid': 'parentid'
	        }, options.keymap);

	        options.rootID = options.rootID === undefined ? '0' : options.rootID;

	        var data = options.data;
	        if (typeof data == 'string') {
	            options.async = true;
	            options.dataFormat = {
	                databyid: {},
	                databylevel: []
	            };
	            options.cache = {}; //缓存远程数据
	        } else {
	                options.dataFormat = Tree.parse(options);
	            }

	        //this.state.menuData: Array 存放输入状态下每级的数据列表
	        var data = [];
	        if (!options.async) {
	            var levels = options.dataFormat.databylevel;
	            data.push(levels[0]);
	        }
	        options.menuData = data;
	        window.setTimeout(function () {
	            _this5.select(_this5.props.selected);
	        }, 1);

	        return options;
	    },
	    componentWillMount: function componentWillMount() {
	        this.changeEvent = nj.utils.addEventQueue.call(this, 'onChange');
	        this.fetchEvent = nj.utils.addEventQueue.call(this, 'onFetch');
	        this.fetchCompleteEvent = nj.utils.addEventQueue.call(this, 'onFetchComplete');

	        setTimeout(this.getData, 1);
	    },
	    getData: function getData(parentid, level) {
	        var _this6 = this;

	        var _state3 = this.state;
	        var menuData = _state3.menuData;
	        var async = _state3.async;
	        var cache = _state3.cache;
	        var keymap = _state3.keymap;

	        if (!async) {
	            return;
	        }
	        level = level || 0;

	        var KEY_ID = keymap.id;
	        var KEY_PID = keymap.parentid;
	        var pid = parentid;
	        parentid = parentid || this.state.rootID;

	        var next = function next(data) {
	            menuData[level] = [].concat(data);
	            _this6.setState({ menuData: menuData });
	        };

	        if (cache[pid]) {
	            next(cache[pid]);
	            return;
	        }
	        var promise = $.getJSON(this.props.data + parentid);
	        promise = this.fetchEvent.complete(promise, parentid) || promise;

	        var databyid = this.state.dataFormat.databyid;
	        promise.then(function (json) {
	            var data = json || [];
	            data = data.filter(function (node) {
	                if (!node[KEY_PID] || String(node[KEY_PID]) == parentid) {
	                    databyid[node[KEY_ID]] = node;
	                    return true;
	                }
	            });
	            _this6.fetchCompleteEvent.complete(data);

	            cache[pid] = data;
	            next(data);
	        });
	    },

	    //选中节点 selected 选中的节点id
	    select: function select(selected, update) {
	        this.resetData(0);
	        // console.log(selected)
	        update = update === false ? false : true;
	        this.state.ids = selected && selected.length ? selected : [];
	        selected = selected || [];
	        if (!selected.length) {}
	        selected = selected.map(function (id) {
	            return { id: id };
	        });
	        // console.log(selected,this.state.ids)
	        this.state.selected = selected;
	        update && this.setState({ selected: selected, ids: this.state.ids });
	    },

	    //清空数据
	    resetData: function resetData(fromLevel) {
	        var _this7 = this;

	        this.state.menuData.forEach(function (data, i) {
	            if (i > fromLevel) {
	                //选择空值时 清空所有下级
	                data.length = 0;
	                _this7.state.selected[i] = {};
	                _this7.setState({ menuData: _this7.state.menuData });
	            }
	        });
	    },
	    handleChange: function handleChange(level, e) {
	        var select = this.refs['select-' + level];

	        var maxlevel = parseInt(this.props.maxlevel);
	        var selected = this.state.selected;

	        this.resetData(level);

	        if (!select) {
	            // console.log(level)
	            return;
	        }
	        var parentid = select.value;

	        selected[level] = parentid ? {
	            id: parentid,
	            name: nj.utils.selectedOptions(select).text //e.target.selectedOptions[0].innerText
	        } : {};

	        var _state4 = this.state;
	        var menuData = _state4.menuData;
	        var dataFormat = _state4.dataFormat;
	        var async = _state4.async;

	        if (!maxlevel || level + 1 < maxlevel) {
	            if (async) {
	                parentid && this.getData(parentid, level + 1);
	            } else {
	                var parentNode = dataFormat.databyid[parentid];
	                var data = parentNode ? [].concat(parentNode.children) : [];
	                menuData[level + 1] = data;
	                this.setState({ menuData: menuData });
	            }
	        }
	        var node = dataFormat.databyid[parentid];

	        this.changeEvent.complete(node, e);
	        // this.props.onChange && this.props.onChange.call(this,parentid,level,e)
	    },
	    render: function render() {
	        var _this8 = this;

	        var _state5 = this.state;
	        var keymap = _state5.keymap;
	        var ids = _state5.ids;
	        var menuData = _state5.menuData;

	        var KEY_ID = keymap.id;
	        var KEY_NAME = keymap.name;
	        var maxlevel = this.props.maxlevel;
	        var infos = this.props.infos || []; //附加信息 如name

	        return React.createElement(
	            'div',
	            { className: 'nj-tree-select' },
	            menuData.map(function (level, i) {
	                if (maxlevel && i + 1 > maxlevel) {
	                    return;
	                }
	                if (!level || !level.length) {
	                    return;
	                }
	                var id = ids[i]; //默认选中节点
	                // console.log(i,id,ids)

	                var info = infos[i] || {};
	                var valid;
	                var el = level && level.length ? React.createElement(
	                    'select',
	                    { key: i, className: info.className, ref: 'select-' + i, value: id, name: info.name, onChange: _this8.handleChange.bind(_this8, i) },
	                    React.createElement(
	                        'option',
	                        { value: '' },
	                        '请选择'
	                    ),
	                    level.map(function (item, i) {
	                        if (id && item[KEY_ID] == id) {
	                            //检测被设置的默认选中id是否有效
	                            valid = true;
	                        }
	                        return React.createElement(
	                            'option',
	                            { key: item[KEY_ID], value: item[KEY_ID] },
	                            item[KEY_NAME]
	                        );
	                    })
	                ) : null;

	                if (id && el) {
	                    ids[i] = null; //选中后清空 防止重复
	                    valid && setTimeout(function () {
	                        el.props.onChange();
	                    }, 1);
	                }
	                return el;
	            })
	        );
	    }
	});

	module.exports = Tree;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(200);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {"insertAt":"top"});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./tree.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./tree.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*tree*/\r\n.nj-tree li{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;clear:both}\r\n.nj-tree .item{display:block;color:#333;margin:0 0 1px;transition:background .1s;padding:0 1.2em;height:2.8em;line-height:2.8;cursor:default;}\r\n.nj-tree .item:hover{background:#f4f4f4;text-decoration:none}\r\n.nj-tree ._icon,.nj-tree ._line{float:left;width:17px;height:100%;overflow:hidden;color:#888;line-height:1.8;font-size:14px;}\r\n.nj-tree ._icon{width:15px;}\r\n.nj-tree ._icon:before{content:'\\E602';font-family:'njicon'}\r\n.nj-tree .open ._icon:before{content:'\\E601';}\r\n.nj-tree .pending ._icon:before{content:'\\E604';animation:njRotate 1s linear infinite;color:#999;}\r\n.nj-tree .no-child ._icon{font-size:13px;color:#aaa;}\r\n.nj-tree .no-child ._icon:before{content:'\\E603';}\r\n.nj-tree .selected ._text{font-weight:800}\r\n.nj-tree .selected,.nj_tree .selected:hover{color:#f30;background:#f0f0f0;}\r\n.nj-tree ._checkbox input{float:left;margin:6px 4px 0 2px}\r\n.nj-tree .more{position:relative;overflow:visible}\r\n.nj-tree .more a{color:#bbb}\r\n\r\noption[disabled]{color:#bbb;}\r\n\r\n.nj-tree .nj-mui-item ._icon, .nj-tree .nj-mui-item ._text{position:relative;z-index:20;}\r\n.nj-tree .nj-mui span{background:#aaa;}", ""]);

	// exports


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * 文档中的demo实例
	 */

	var components = ['popup', 'popover', 'tree', 'form', 'switch', 'scroll', 'face', 'comments', 'photos'];[__webpack_require__(202), __webpack_require__(206), __webpack_require__(208), __webpack_require__(209), __webpack_require__(214), __webpack_require__(216), __webpack_require__(219), __webpack_require__(221), __webpack_require__(254)].forEach(function (fn, i) {
	    exports[components[i]] = fn;
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nj = __webpack_require__(2);
	var React = nj.React;
	var ReactDOM = nj.ReactDOM;

	var Popup = __webpack_require__(203);
	var $ = __webpack_require__(183);

	module.exports = function (container) {
	    var popup = Popup.create({
	        title: 'Popup Title',
	        template: '<div>12</div>',
	        buttons: [{ text: '确定' }, { text: '取消' }]
	    });

	    $('#showPopup').click(function () {
	        return popup.setDisplay(true);
	    });

	    $('#alertPopup').click(function () {
	        return Popup.alert({
	            template: '操作成功！'
	        });
	    });

	    $('#confirmPopup').click(function () {
	        return Popup.confirm({
	            template: '确认操作?'
	        }).then(function (res) {
	            Popup.tip.show('ok', res ? '选择了是' : '选择了否');
	        });
	    });
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * 弹窗组件
	 */

	var nj = __webpack_require__(2);
	var $ = __webpack_require__(183);
	var align = __webpack_require__(204);
	var Mask = __webpack_require__(205);
	var React = nj.React;
	var ReactDOM = nj.ReactDOM;
	var mixins = nj.mixins;

	var instances = [];
	var focusPops = [];
	var setFocusPop = function setFocusPop(pop) {
	  if (!pop) {
	    return;
	  }
	  focusPops.indexOf(pop) < 0 && focusPops.push(pop);
	  focusPops.forEach(function (p) {
	    p.setState({ isFocus: p === pop });
	  });
	  // pop.scope.safeApply()
	};
	var bind = function bind() {
	  if (!bind.init) {
	    bind.init = 1;

	    //按下esc键隐藏弹窗
	    $(document).on('keydown', function (e) {
	      if (e.keyCode == 27) {
	        var pop = focusPops.slice(-1)[0];
	        if (pop && pop.props.bindEsc) {
	          pop.setDisplay(false);
	        }
	      }
	    });
	  }
	};

	//组件静态方法
	var Statics = {

	  //创建一个弹窗

	  create: function create(options) {
	    options = options || {};
	    var pop = ReactDOM.render(React.createElement(Popup, options), nj.utils.createContainer('nj-popup-container ng-layer-wrap'));
	    bind();
	    instances.push(pop);

	    return pop;
	  },

	  //销毁弹窗
	  destory: function destory(pop) {
	    instances.forEach(function (p, i) {
	      if (p === pop) {
	        instances.splice(i, 1);
	        document.body.removeChild(ReactDOM.findDOMNode(p).parentNode);
	      }
	    });
	  },

	  //消息提示
	  alert: function alert(options) {
	    options = Object.assign({
	      title: '提示：',
	      name: 'popup-alert popup-tip',
	      bindEsc: false,
	      buttons: [{ text: '确定', className: 'nj-button nj-button-red', handle: function handle(e) {
	          return true;
	        } }]
	    }, options);
	    var pop = Popup.create(options);
	    //隐藏后销毁弹窗
	    pop.onHide(function () {
	      Popup.destory(this);
	    });
	    window.setTimeout(function () {
	      pop.setDisplay(true);
	    }, 1);
	    return pop;
	  },
	  confirm: function confirm(options) {
	    options = Object.assign({
	      title: '提示：',
	      showClose: false,
	      name: 'popup-confirm popup-tip',
	      buttons: [{ text: '确定', className: 'nj-button nj-button-red', handle: function handle(e) {
	          return true;
	        } }, { text: '取消', className: 'nj-button' }]
	    }, options);
	    options.template = React.createElement(
	      'div',
	      null,
	      React.createElement('span', { className: 'nj-icon nj-icon-warn' }),
	      React.createElement(
	        'div',
	        { className: '_content' },
	        options.template
	      )
	    );
	    var pop = Popup.create(options);
	    //隐藏后销毁弹窗
	    pop.onHide(function () {
	      Popup.destory(this);
	    });
	    pop.setDisplay(true);
	    return pop;
	  },

	  tip: function () {
	    return {
	      show: function show(type, message, options) {
	        options = options || {};
	        Popup.tip.hide();
	        if (type == 'loading') {
	          message = message || 'loading……';
	        } else {
	          var timer = setTimeout(function () {
	            tip.setDisplay(false);
	          }, 1500);
	        }
	        var tip = Popup.tip.handle = Popup.alert({
	          title: '',
	          template: React.createElement(
	            'div',
	            { className: "tip-area tip-" + type },
	            React.createElement('i', { className: "nj-icon nj-icon-" + type }),
	            React.createElement(
	              'span',
	              { className: 'tip-text' },
	              message
	            )
	          ),
	          showMask: false,
	          buttons: null
	        });

	        //提示完成后 重载页面
	        var reload = options.reload;
	        if (reload) {
	          tip.onShow(function () {
	            window.setTimeout(function () {
	              if (typeof reload == 'string') {
	                window.location.href = reload;
	              } else {
	                window.location.reload();
	              }
	            }, 1500);
	          });
	        }
	      },
	      hide: function hide() {
	        var tip = Popup.tip.handle;
	        tip && tip.setDisplay(false);
	        // Mask.hide()
	      }
	    };
	  }()
	};

	var Popup = React.createClass({
	  displayName: 'Popup',

	  mixins: [align, mixins.setDisplay, React.addons.LinkedStateMixin],
	  statics: Statics,
	  getDefaultProps: function getDefaultProps() {
	    return { effect: 'drop', showMask: true, bindEsc: true };
	  },
	  getInitialState: function getInitialState() {
	    return { buttons: this.props.buttons || [], title: this.props.title || '', template: this.props.template };
	  },
	  componentWillMount: function componentWillMount() {
	    //添加then事件
	    this.thenEvent = nj.utils.addEventQueue.call(this, 'then');
	  },
	  componentDidMount: function componentDidMount() {
	    this.setAlign({
	      nearby: window,
	      element: ReactDOM.findDOMNode(this)
	    });

	    //显示遮罩层
	    this.onShow(function () {
	      this.props.showMask && Mask.show();

	      //当前焦点弹窗
	      setFocusPop(this);
	      this.align.set();
	    }).onHide(function () {
	      var _this = this;

	      focusPops.pop();
	      var hasShowMaskPop;
	      focusPops.forEach(function (pop) {
	        if (pop.props.showMask && pop !== _this) {
	          hasShowMaskPop = pop;
	        }
	      });
	      // console.log(this.props.showMask,hasShowMaskPop,this)
	      this.props.showMask && !hasShowMaskPop && Mask.hide();

	      this.setState({ isFocus: null });
	      //当前弹窗隐藏后 需要设置处于焦点集合中最新的那个重新获得焦点
	      setFocusPop(focusPops.slice(-1)[0]);

	      this.thenEvent.complete(this.res);
	    });
	    //dangerouslySetInnerHTML={{__html:this.state.template}}  
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    console.log(this);
	  },
	  buttonHandle: function buttonHandle(fn, event) {
	    var res = this.res = fn && fn.call(this, event);
	    if (event.isDefaultPrevented()) {
	      //调用preventDefault阻止关闭弹窗事件
	      return;
	    }
	    this.setDisplay(false);
	  },
	  cancel: function cancel() {
	    this.res = false;
	    this.setDisplay(false);
	  },
	  render: function render() {
	    var template = this.state.template;
	    template = typeof template == 'function' ? template.call(this) : template;
	    var body = React.createElement(
	      'div',
	      { className: '_body', ref: 'body' },
	      template
	    );
	    if (typeof template == 'string') {
	      body = React.createElement('div', { className: '_body', ref: 'body', dangerouslySetInnerHTML: { __html: template } });
	    }

	    var className = nj.utils.joinClass('nj-popup', this.state.className, this.state.isFocus && 'popup-active', this.props.name);
	    var buttons = this.state.buttons;

	    return React.createElement(
	      'div',
	      { className: className },
	      React.createElement('div', { className: '_close', onClick: this.cancel }),
	      React.createElement(
	        'div',
	        { className: '_head' },
	        this.state.title
	      ),
	      body,
	      React.createElement(
	        'div',
	        { className: buttons.length ? '_foot' : 'd_hide' },
	        buttons.map(function (btn, i) {
	          var btnClass = btn.className;
	          if (!btnClass) {
	            btnClass = 'nj-button ';
	            btnClass += i == 0 ? 'nj-button-red' : 'nj-button-default';
	          }
	          return React.createElement(
	            'button',
	            { key: i, type: 'button', className: btnClass, onClick: this.buttonHandle.bind(this, btn.handle) },
	            btn.text
	          );
	        }.bind(this))
	      )
	    );
	  }
	});

	module.exports = Popup;

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var $ = __webpack_require__(183);
	var nj = __webpack_require__(2);
	var dom = nj.utils.dom;
	/*
	 * 将对象对齐到某个参考元素nearby
	 * nearby是window对象,即固定在屏幕上
	 * relative为true可设置为类似css的背景图定位方式,只限百分比
	 */
	var Align = function Align(options) {
	    this.options = options = options || {};
	    this.element = dom(options.element);
	    this.nearby = dom(options.nearby);

	    var screen = this.nearby && this.nearby[0] === window;
	    //this.position = options.position || (screen ? {top:50, left:50} : {top:100, left:0});
	    this.position = $.extend(screen ? { top: 50, left: 50 } : { top: 100, left: 0 }, options.position);
	    if (this.position.right !== undefined) {
	        delete this.position.left;
	    }
	    if (this.position.bottom !== undefined) {
	        delete this.position.top;
	    }

	    //relative=true 表示定位方式同css背景定位方式
	    this.relative = options.relative != undefined ? options.relative : screen ? true : false;

	    this.fixed = options.fixed === undefined && screen ? 'fixed' : options.fixed; //null fixed animate

	    this.cssFixed = this.fixed == 'fixed' && screen; //可以直接使用position:fixed来定位

	    this.offset = options.offset || [0, 0];
	    this.isWrap = this.nearby && (screen || this.nearby.find(this.element).length); //对象是否在参考对象内部
	    this.autoAdjust = options.autoAdjust; //超出屏幕后是否自动调整位置

	    this.element && this.bind();
	};
	Align.prototype = {
	    bind: function bind() {
	        var self = this,
	            ns = this.element.data('align'),
	            type;

	        if (ns) {
	            this.nearby.add(window).off(ns);
	        } else {
	            ns = '.align' + new Date().getTime();
	            this.element.data('align', ns);
	        }

	        var scrollby = this.options.scrollby || !this.cssFixed && this.fixed && this.nearby;

	        scrollby && $(scrollby).on('scroll' + ns, function () {
	            self.set();
	        });
	        $(window).on('resize' + ns, function () {
	            self.set();
	        });

	        this.set();
	    },
	    get: function get(nearby) {
	        nearby = nearby || this.nearby;
	        var offset = nearby.offset(),
	            size = {
	            width: nearby.outerWidth(),
	            height: nearby.outerHeight(),
	            x: offset ? offset.left : 0,
	            y: offset ? offset.top : 0,
	            scrollLeft: this.cssFixed ? 0 : nearby.scrollLeft(),
	            scrollTop: this.cssFixed ? 0 : nearby.scrollTop(),
	            WIDTH: this.element.outerWidth(true),
	            HEIGHT: this.element.outerHeight(true)
	        };
	        return size;
	    },
	    set: function set(options) {
	        //可设置nearby position offset relative等参数覆盖初始选项
	        if (!this.element) {
	            return;
	        }

	        options = options || {};

	        var nearby = dom(options.nearby) || this.nearby;

	        if (!nearby || this.element.is(':hidden')) {
	            return;
	        }
	        var position = options.position || this.position;
	        this.element.css('position', this.cssFixed ? 'fixed' : 'absolute'); //设置在get方法之前

	        var size = this.get(nearby),
	            Attr = {
	            x: {}, y: {}
	        },
	            _Attr,
	            attr,
	            value,
	            _value,
	            type,
	            direction,
	            style = {},
	            wrapSize;

	        if (this.isWrap) {
	            size.x = size.y = 0;
	        }
	        Attr.x.element = 'WIDTH';
	        Attr.y.element = 'HEIGHT';
	        Attr.x.nearby = 'width';
	        Attr.y.nearby = 'height';
	        Attr.x.offset = 0;
	        Attr.y.offset = 1;
	        Attr.x.scroll = 'scrollLeft';
	        Attr.y.scroll = 'scrollTop';

	        for (attr in position) {
	            value = _value = position[attr];
	            type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	            if (type == 'function') {
	                value = value(size);
	                type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	            }
	            direction = attr == 'top' || attr == 'bottom' ? 'y' : 'x';
	            _Attr = Attr[direction];

	            value = type == 'number' ? (size[_Attr.nearby] - (this.relative ? size[_Attr.element] : 0)) * value / 100 : parseInt(value, 10);

	            if (attr == 'bottom' || attr == 'right') {
	                value *= -1;
	                value -= size[_Attr.element] - size[_Attr.nearby];
	            }

	            value += size[direction] + this.offset[_Attr.offset] + size[_Attr.scroll];

	            style[direction == 'x' ? 'left' : 'top'] = value;
	        }
	        var turnPosition = this.checkBorder(size, position, style); //屏幕边界限制
	        if (turnPosition) {
	            this.options.onTurn && this.options.onTurn.call(this, turnPosition);
	            this.set({ position: turnPosition, nearby: nearby });
	            return;
	        }

	        if (this.fixed == 'animate') {
	            this.element.stop().animate(style, 200);
	            return;
	        }
	        this.element.css(style);
	    },
	    checkBorder: function checkBorder(size, position, style) {
	        if (this.turnPosition) {
	            this.turnPosition = null;
	            return;
	        }
	        var turn;
	        var turnPosition = {};
	        var win = $(window);
	        for (var i in position) {
	            turnPosition[i] = position[i];
	        }
	        if (style.left < 0 || style.left > size.WIDTH && size.WIDTH + style.left - win.scrollLeft() > win.width()) {
	            var left = position.left;
	            var right = position.right;
	            if (left != undefined) {
	                delete turnPosition.left;
	                turnPosition.right = left;
	            } else if (right != undefined) {
	                delete turnPosition.right;
	                turnPosition.left = right;
	            }
	            turn = true;
	        }
	        if (style.top < 0 || style.top > size.HEIGHT && size.HEIGHT + style.top - win.scrollTop() > win.height()) {
	            var top = position.top;
	            var bottom = position.bottom;
	            if (top != undefined) {
	                delete turnPosition.top;
	                turnPosition.bottom = top;
	            } else if (bottom != undefined) {
	                delete turnPosition.bottom;
	                turnPosition.top = bottom;
	            }
	            turn = true;
	        }
	        if (turn) {
	            return this.turnPosition = turnPosition;
	        }
	    }
	};

	var mixins = nj.mixins;

	module.exports = mixins.align = {
	    getDefaultProps: function getDefaultProps() {
	        return {};
	    },
	    // componentDidMount : function(){
	    //     console.log(1,this.align,this.onShow)
	    // },
	    setAlign: function setAlign(options) {
	        var align = this.isMounted ? this.align : null;
	        this.align = align || new Align(options);
	        this.align.set(options);
	    }
	};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nj = __webpack_require__(2);
	var React = nj.React;
	var ReactDOM = nj.ReactDOM;
	/**
	 * 遮罩层组件
	 * 提供show/hide 2个事件 
	 */

	var Mask = React.createClass({
	  displayName: 'Mask',

	  mixins: [nj.mixins.setDisplay],
	  getDefaultProps: function getDefaultProps() {
	    return { effect: 'fade' };
	  },

	  statics: function () {
	    var mask, wrap;
	    return {
	      show: function show() {
	        wrap = wrap || nj.utils.createContainer('nj-mask ng-layer-wrap');
	        this.mask = mask = ReactDOM.render(React.createElement(Mask, null), wrap);
	        mask.setDisplay(true);
	      },
	      hide: function hide() {
	        mask && mask.setDisplay(false);
	      }
	    };
	  }(),
	  render: function render() {
	    return React.createElement('div', { ref: 'layer', className: this.state.className });
	  }
	});

	module.exports = Mask;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nj = __webpack_require__(2);
	var React = nj.React;
	var render = nj.render;

	var Popover = __webpack_require__(207);
	var $ = __webpack_require__(183);

	// var Autocomplete = require('nj/autocomplete')
	// setTimeout(()=>{
	//     var onFetch = (promise, value)=>promise.then(
	//         json=>json.data.filter(item=>item.name.toLowerCase().indexOf(value.toLowerCase())>=0)
	//     )
	//     var getItem = item=>item.name
	//     var auto = render(
	//         <Autocomplete
	//             placeholder="keyup"
	//             name="keyword"
	//             data1={[1,11,12,2,22,3,13,23]}
	//             source="menu.json?k="
	//             getItem={getItem}
	//             onFetch={onFetch} />,
	//         document.getElementById('demo-autocomplete-wrap')
	//     )
	// }, 500)

	module.exports = function (container) {
	    var pop = Popover.create({
	        nearby: 'demo-popover-button',
	        template: React.createElement(
	            'ul',
	            { className: 'pop-menu' },
	            React.createElement(
	                'li',
	                null,
	                React.createElement(
	                    'a',
	                    { href: '' },
	                    '111111111111'
	                )
	            ),
	            React.createElement(
	                'li',
	                null,
	                React.createElement(
	                    'a',
	                    { href: '' },
	                    '222222222222'
	                )
	            ),
	            React.createElement(
	                'li',
	                null,
	                React.createElement(
	                    'a',
	                    { href: '' },
	                    '333333333333'
	                )
	            ),
	            React.createElement(
	                'li',
	                null,
	                React.createElement(
	                    'a',
	                    { href: '' },
	                    '4444444444'
	                )
	            ),
	            React.createElement(
	                'li',
	                null,
	                React.createElement(
	                    'a',
	                    { href: '' },
	                    '5555555555'
	                )
	            )
	        ),
	        sharp: true
	    });

	    // console.log(pop)

	    // var pop = render(<Popover nearby="demo-popover-button" template="123" />, document.getElementById('demo-popover-wrap'))
	};

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * 弹出层
	 */
	var nj = __webpack_require__(2);
	var React = nj.React;
	var ReactDOM = nj.ReactDOM;
	var mixins = nj.mixins;

	var align = __webpack_require__(204);
	var $ = __webpack_require__(183);

	var Popover = React.createClass({
	    displayName: 'Popover',

	    statics: {
	        create: function create(options) {
	            var _container = nj.utils.createContainer();
	            options = options || {};
	            var pop = ReactDOM.render(React.createElement(Popover, options), _container);
	            document.body.removeChild(_container);
	            return pop;
	        }
	        // destory (component) {
	        //     if( !component || !component.isMounted() ){
	        //         return
	        //     }
	        //     var {nearby} = component.state

	        //     document.body.removeChild(component.element)
	        // }

	    },
	    mixins: [align, mixins.setDisplay],
	    getDefaultProps: function getDefaultProps() {
	        return { trigger: 'hover', effect: 'scale' };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            origin: '0 0',
	            nearby: nj.utils.dom(this.props.nearby),
	            template: this.props.template
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({
	            template: nextProps.template
	        });
	    },
	    getOrigin: function getOrigin(position) {
	        var pos = position || this.props.position || {};
	        var origin = [0, 0];
	        var direction = 'top'; //尖角图标指向的方向
	        var _pos = 0;
	        for (var i in pos) {
	            if (typeof pos[i] == 'string') {
	                _pos = 100;
	                direction = i;
	            }
	            if (parseInt(pos[i]) > _pos) {
	                _pos = parseInt(pos[i]);
	                direction = i;
	            }
	        }
	        if (pos.left != undefined) {
	            origin[0] = 0;
	        } else if (pos.right != undefined) {
	            origin[0] = '100%';
	        }
	        if (pos.top != undefined) {
	            origin[1] = 0;
	        } else if (pos.bottom != undefined) {
	            origin[1] = '100%';
	        }

	        this.state.direction = direction;
	        this.state.origin = origin.join(' ');
	        this.setState({ origin: this.state.origin });
	        return this.state.origin;
	    },
	    componentDidMount: function componentDidMount() {
	        var _this = this;

	        // var el = $(ReactDOM.findDOMNode(this))
	        var self = this;
	        var nearby = this.state.nearby;
	        var _props = this.props;
	        var delegate = _props.delegate;
	        var trigger = _props.trigger;

	        // if( !nearby ){
	        //     return
	        // }

	        // var layerEl = $(this.wrap)

	        function show(element) {
	            self.state.nearby = element;
	            self.setDisplay(true);
	        }
	        var delay;
	        var events = '';
	        var eventSP = '.popover';
	        var _event = '';
	        var layerBind;

	        function hide() {
	            if (self.keepVisible || !self.state.visible) {
	                self.keepVisible = null;
	                return;
	            }
	            delay = window.setTimeout(function () {
	                !self.keepVisible && self.setDisplay(false);
	            }, 10);
	        }
	        if (trigger == 'hover') {
	            var _show = function _show(e) {
	                self.setDisplay(false);
	                window.clearTimeout(delay);
	                show(this);
	            };

	            if (nearby) {
	                _event = 'mouseenter' + eventSP;
	                events += _event;
	                nearby.on(_event, _show);

	                _event = 'mouseleave' + eventSP;
	                events += ' ' + _event;
	                nearby.on(_event, hide);

	                // console.log(_event, events)
	            } else if (delegate) {
	                    $(delegate[1] || document.body).delegate(delegate[0], 'mouseenter', _show).delegate(delegate[0], 'mouseleave', hide);
	                }

	            layerBind = function layerBind() {
	                $(_this.wrap).hover(function (e) {
	                    window.clearTimeout(delay);
	                }, hide);
	            };
	        } else if (trigger == 'click') {
	            var _show = function _show(e) {
	                self.keepVisible = true;
	                self.state.visible && trigger == 'click' ? self.setDisplay(false) : show(this);
	                // e.stopPropagation()
	                e.preventDefault();
	            };

	            if (nearby) {
	                if (/text|textarea/.test(nearby[0].type)) {
	                    trigger = 'focus';
	                }
	                nearby.on(trigger, _show);
	            } else if (delegate) {
	                $(delegate[1] || document.body).delegate(delegate[0], trigger, _show);
	            }

	            if (trigger == 'click') {
	                this.onDisplayChange(function (visible) {
	                    if (!visible && _this.keepVisible) {
	                        _this.keepVisible = null;
	                        return false;
	                    }
	                });
	                docWatch.push(this);
	                // $(document).click(hide)
	            } else {
	                    nearby && nearby.on('blur', function () {
	                        //当浮层上有单击事件发生时 blur会先触发 导致layerEl上的click事件没有执行 所以这里延迟
	                        setTimeout(hide, 150);
	                    });
	                }

	            layerBind = function layerBind() {
	                $(_this.wrap).click(function (e) {
	                    _this.keepVisible = true;
	                });
	            };
	        }

	        var showClassName = this.props.showClassName || 'nj-popover-nearby';
	        this.onShow(function () {
	            self.getOrigin();
	            window.clearTimeout(_this.hidedelay); //nearby有多个元素集合时 鼠标快速滑过 pop显示在下一目标上 上次的element还未移除

	            layerBind();

	            if (_this.align) {
	                _this.align.set({
	                    nearby: _this.state.nearby
	                });
	            } else {
	                _this.setAlign(Object.assign({}, _this.props, {
	                    nearby: _this.state.nearby,
	                    element: $(_this.wrap),
	                    onTurn: function onTurn(turnPosition) {
	                        self.getOrigin(turnPosition);
	                    }
	                }));
	            }

	            $(_this.state.nearby).addClass(showClassName);
	        }).onHide(function () {

	            $(_this.state.nearby).removeClass(showClassName);
	            // Popover.destory(this)

	            _this.hidedelay = window.setTimeout(function (e) {

	                document.body.removeChild(_this.element);

	                var layer = _this.refs.layer;

	                layer.layer = null;
	                _this.align = null;
	            }, 200);
	        });
	    },
	    renderLayer: function renderLayer() {
	        var _props2 = this.props;
	        var sharp = _props2.sharp;
	        var name = _props2.name;
	        var _state = this.state;
	        var className = _state.className;
	        var template = _state.template;
	        var origin = _state.origin;
	        var direction = _state.direction;

	        className = nj.utils.joinClass('nj-popover', sharp && 'nj-popover-sharp-' + direction, //窗体是否带尖角图标
	        className, name);
	        var style = { transformOrigin: origin };
	        template = typeof template == 'function' ? template.call(this) : template;
	        var body = template;
	        if (typeof template == 'string') {
	            body = React.createElement('span', { dangerouslySetInnerHTML: { __html: template } });
	        }
	        var sharpClass = nj.utils.joinClass('nj-icon nj-icon-sharp', direction && 'nj-icon-sharp-' + direction);

	        return React.createElement(
	            'div',
	            { className: className, style: style },
	            React.createElement(
	                'div',
	                { className: 'nj-popover-inner', style: style },
	                body
	            ),
	            sharp ? React.createElement('i', { className: sharpClass }) : null
	        );
	    },
	    render: function render() {
	        return React.createElement(Layer, { ref: 'layer', from: this });
	    }
	});

	//点击document隐藏所有pop
	var docWatch = function () {
	    var initial;
	    var pops = [];
	    var hide = function hide() {
	        return window.setTimeout(function (e) {
	            pops.forEach(function (pop) {
	                pop.setDisplay(false);
	            });
	        }, 0);
	    };
	    return {
	        push: function push(pop) {
	            if (!initial) {
	                initial = true;
	                $(document).click(hide);
	            }
	            pops.push(pop);
	        }
	    };
	}();

	var Layer = React.createClass({
	    displayName: 'Layer',
	    renderLayer: function renderLayer() {
	        if (!this.layer) {
	            this.layer = nj.utils.createContainer('nj-popover-container nj-layer-wrap');
	        }
	        var from = this.props.from;

	        var layerElement = from.renderLayer();
	        ReactDOM.unstable_renderSubtreeIntoContainer(this, layerElement, this.layer);
	        from.element = this.layer;
	        from.wrap = $(this.layer).children()[0];
	    },
	    componentDidMount: function componentDidMount() {
	        // this.renderLayer()
	    },
	    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	        this.renderLayer();
	    },

	    render: function render() {
	        return null;
	    }
	});

	module.exports = Popover;

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _nj = __webpack_require__(1);

	var _nj2 = _interopRequireDefault(_nj);

	var _tree = __webpack_require__(198);

	var _tree2 = _interopRequireDefault(_tree);

	var _jquery = __webpack_require__(183);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = _nj2.default.React;
	var render = _nj2.default.render;
	var ReactDOM = _nj2.default.ReactDOM;
	var SelectTree = _tree2.default.SelectTree;
	var LinkTree = _tree2.default.LinkTree;

	module.exports = function () {
	    var testData = [{ "id": 1, "name": "Components", "open": 1 }, { "id": 2, "name": "Mask", "parentid": 1, "link": "mask" }];

	    var treeNormal = document.getElementById('treeNormal');
	    treeNormal && render(React.createElement(_tree2.default, { data: './menu.json?parentid=' }), treeNormal).onFetch(function (promise, parentid) {
	        var _this = this;

	        return promise.then(function (json) {
	            return json[parentid == _this.state.rootID ? 'data' : 'data' + parentid];
	        });
	    });

	    var treeSelect = document.getElementById('treeSelect');
	    treeSelect && _jquery2.default.getJSON('./menu.json?parentid=').then(function (json) {
	        var select = render(React.createElement(SelectTree, { data: json.data, defaultValue: 3 }), treeSelect).onChange(function (value) {
	            console.log(value);
	        });
	        // console.log(ReactDOM.findDOMNode(select))
	    });

	    var treeLink = document.getElementById('treeLink');
	    treeLink && render(React.createElement(LinkTree, { data: './menu.json?parentid=', maxlevel: '3', selected: [1, 5, 53] }), treeLink).onFetch(function (promise, parentid) {
	        var _this2 = this;

	        return promise.then(function (json) {
	            return json[parentid == _this2.state.rootID ? 'data' : 'data' + parentid];
	        });
	    }).onChange(function (node, e) {
	        // console.log(node,e)
	    });
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _nj = __webpack_require__(1);

	var _nj2 = _interopRequireDefault(_nj);

	var _form = __webpack_require__(210);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = _nj2.default.React;
	var render = _nj2.default.render;

	var DemoNav = function DemoNav() {
	    var nav = ['normal', 'component', 'input-group'];
	    nav = nav.map(function (n, i) {
	        return React.createElement(
	            'a',
	            { href: 'doc/form/' + n + '.html', key: n, className: location.hash.indexOf(n) > 0 ? 'current' : '' },
	            n
	        );
	    });
	    return React.createElement(
	        'div',
	        { className: 'demo-nav' },
	        nav
	    );
	};

	var FormComponent = React.createClass({
	    displayName: 'FormComponent',

	    mixins: [React.addons.LinkedStateMixin],
	    getInitialState: function getInitialState() {
	        // setTimeout(()=>{
	        //     this.setState({truename:'2'})
	        // }, 2000)
	        return {};
	    },
	    valueLink: function valueLink(key) {
	        var self = this;
	        return {
	            value: this.state[key],
	            requestChange: function requestChange(newValue) {
	                var state = {};
	                state[key] = newValue;
	                self.setState(state);
	            }
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        this.refs.$verfy.onSubmit(function (e) {
	            alert('验证通过');
	            e.preventDefault();
	        });
	        console.log(this.refs.textarea.props);
	        // this.refs.textarea.setState({value: '<div>1234</div>'})
	    },
	    render: function render() {
	        var _this = this;

	        return React.createElement(
	            _form.Form,
	            { className: 'nj-form', ref: '$verfy', parentComponent: this },
	            React.createElement(
	                'div',
	                null,
	                React.createElement(_form.Input, { className: 'text', required: true, value: this.state.truename, onChange: function onChange(e) {
	                        return _this.setState({ truename: e.target.value });
	                    } }),
	                React.createElement('input', { value: this.state.truename, onChange: function onChange(e) {
	                        return _this.setState({ truename: e.target.value });
	                    } }),
	                this.state.truename
	            ),
	            React.createElement(
	                'div',
	                null,
	                React.createElement(_form.Input, { className: 'text', placeholder: 'email', type: 'email', required: true })
	            ),
	            React.createElement(
	                'div',
	                null,
	                React.createElement(_form.Input, { className: 'text', type: 'number', required: true })
	            ),
	            React.createElement(
	                'div',
	                null,
	                '以下至少输入一项：',
	                React.createElement('br', null),
	                React.createElement(
	                    _form.InputGroup,
	                    { required: true },
	                    React.createElement(_form.Input, { className: 'text', placeholder: 'email', type: 'email' }),
	                    React.createElement(_form.Input, { className: 'text', placeholder: 'mobile', type: 'mobile' })
	                )
	            ),
	            React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    _form.Select,
	                    { required: true },
	                    React.createElement(
	                        'option',
	                        { value: '' },
	                        '0'
	                    ),
	                    React.createElement(
	                        'option',
	                        { value: '1' },
	                        '1'
	                    ),
	                    React.createElement(
	                        'option',
	                        { value: '2' },
	                        '2'
	                    )
	                )
	            ),
	            React.createElement(_form.Input, { type: 'textarea', ref: 'textarea', html: '<div>1</div><div>2</div>' }),
	            React.createElement(
	                'button',
	                { className: 'nj-button' },
	                '提交'
	            )
	        );
	    }
	});

	module.exports = function (container) {
	    var nav = document.getElementById('demo-form-nav');
	    nav && render(React.createElement(DemoNav, null), nav);

	    _form.Form.start(container);

	    //用于渲染Form组件实例
	    var formWrap = document.getElementById('demo-form-wrap');
	    formWrap && render(React.createElement(FormComponent, null), formWrap);

	    setTimeout(function () {
	        var myverify = _form.Form.getByHandle('verify-input-group');
	        myverify && myverify.onSubmit(function (e) {
	            console.log(e);
	            e.preventDefault();
	        });
	    }, 0);
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	/*
	 * form 表单验证
	 */
	__webpack_require__(211);
	var nj = __webpack_require__(2);
	var React = nj.React;
	var ReactDOM = nj.ReactDOM;
	var mixins = nj.mixins;

	var $ = __webpack_require__(183);

	var Directive = __webpack_require__(213).default;

	var formDirectives = {};

	var getRules = function getRules() {
	    var attrs = this.props;
	    var type = attrs.type;
	    var rules = [];

	    for (var i in attrs) {
	        var name = i.replace(/^nj-/, '');
	        var rule = formRules[i] || formRules[name];

	        if (rule) {
	            //有效规则
	            if (formRules[i]) {
	                name = i;
	            }
	            rules[i == 'required' ? 'unshift' : 'push']({
	                key: i,
	                name: name,
	                target: attrs[i],
	                fn: rule
	            });
	        }
	    }
	    if (formRules[type]) {
	        //type="email"
	        rules.push({
	            key: 'type',
	            name: type,
	            target: attrs.type,
	            fn: formRules[type]
	        });
	    }
	    if (type == 'input-group' && attrs['nj-minlength'] || attrs['required']) {
	        rules.required = true;
	    }

	    return rules;
	};

	var formMixin = {
	    //在组件外部手动更新验证状态 如异步场景

	    setValid: function setValid(valid, nextState) {
	        this.setState(Object.assign(nextState || {}, { valid: valid, status: valid ? 'ok' : 'error' }));
	        this.verifyEvent.complete(valid);
	    }
	};

	//验证当前组件的所有子组件的状态
	var verifyChildComponents = function verifyChildComponents(real) {
	    var valid = true;
	    this.state.childComponents.forEach(function (item) {
	        if (item.verify) {
	            var _valid = item.verify(real, true);
	            if (!_valid) {
	                valid = _valid;
	                // console.log(valid,item.props.node)
	            }
	        }
	    });
	    this.setState({ valid: valid });
	    return valid;
	};

	//验证单个组件
	var verifyField = function verifyField(real, fromParent) {
	    var textField;

	    if (this.state.validing || this.state.status == 'ok') {
	        return this.state.valid;
	    }
	    var value = this.state.value;
	    real = real === false ? false : real || true;
	    this.state.validing = true;

	    //status有值用来保存状态 不重复验证 输入后清除状态 重新验证
	    // this.state.status = null
	    this.state.status = 'ok';

	    var valid = true;
	    var rules = this.state.rules;

	    for (var i = 0, n = rules.length; i < n; i++) {
	        var rule = rules[i];
	        valid = rule.fn.call(this, value, rule.target);
	        // console.log(valid,rule,value)
	        if (!valid || valid == 'pending') {
	            this.state.novalidName = rule.name;
	            break;
	        }
	    }

	    if (!rules.required && !value) {
	        //非必填项
	        valid = true;
	    }

	    //'input-group' 验证子项是否全部通过
	    if (valid && this.props.type == 'input-group') {
	        valid = this.state.valid_all;
	    }

	    // console.log(valid,this.refs.input, this.state.value, this.state.status)
	    var isFetching = valid == 'pending';
	    this.state.status = isFetching ? 'pending' : valid ? 'ok' : 'error';
	    this.state.valid = valid = isFetching ? false : valid;

	    //input-group类 子组件输入时 需要更新父组件状态
	    var parentComponent = this.state.parentComponent;
	    if (parentComponent && !fromParent) {
	        //父组件是form时 有个特殊情况：更新form或导致所有子组件全部更新 为了减少干扰 引入real参数
	        //real为false时 只验证其状态 不更新ui
	        parentComponent.verify(parentComponent.props.type == 'form' ? false : true);
	    }
	    this.state.validing = null;
	    // fromParent && console.log(real,valid)
	    // console.log(real,valid,this.refs.input)
	    real && this.setState({ valid: valid });
	    return valid;
	};

	var Form = formDirectives['form'] = React.createClass({
	    mixins: [mixins.childComponents.config],
	    getDefaultProps: function getDefaultProps() {
	        return { type: 'form', method: 'post', showicon: 'error', noValidate: true };
	    },
	    handleSubmit: function handleSubmit(e) {
	        var _this = this;

	        e = e || window.event;
	        this.state.action = 'submit';
	        window.setTimeout(function () {
	            _this.state.action = null;
	        }, 1);
	        this.submitBeforeEvent.complete(e);
	        if (e.isDefaultPrevented()) {
	            return;
	        }

	        var valid = this.verify();
	        if (!valid) {
	            //未通过 阻止提交
	            e.preventDefault();
	            return;
	        }
	        // if( this.props.ajaxsubmit ){
	        //     var method = this.props.method.toLowerCase()
	        //     var formEl = this.refs.wrap
	        //     $.ajax({
	        //         url : formEl.action,
	        //         type : method,
	        //         data : $(formEl).serialize(),
	        //         dataType : 'json',
	        //         success (json) {

	        //         }
	        //     })
	        //     e.preventDefault()
	        // }
	        this.submitEvent.complete(e);
	        // console.log('submit', valid)
	        // if( e.isDefaultPrevented() ){//调用preventDefault阻止默认事件
	        //     return
	        // }
	    },
	    submit: function submit(options) {
	        //从外部触发submit动作
	        var el = this.refs.wrap;
	        var result = false;
	        if (el.fireEvent) {
	            //IE fire event
	            // el.onsubmit = (e)=>{
	            //   this.handleSubmit(e)
	            // }
	            result = el.fireEvent('onsubmit');
	        } else if (document.createEvent) {
	            var ev = document.createEvent('HTMLEvents');
	            ev.initEvent('submit', false, true);
	            result = el.dispatchEvent(ev);
	        }
	        result && el.submit(); //表单提交是异步的 所以下面return不是正确的valid
	        return this.state.valid;
	    },
	    reset: function reset() {
	        this.state.childComponents.forEach(function (item) {
	            item.setState({ value: '', status: null });
	        });
	    },
	    componentDidMount: function componentDidMount() {
	        directive.getChildComponents(this);
	        // console.log(this.state.childComponents)

	        this.submitBeforeEvent = nj.utils.addEventQueue.call(this, 'onSubmitBefore');
	        this.submitEvent = nj.utils.addEventQueue.call(this, 'onSubmit');
	        this.verifyEvent = nj.utils.addEventQueue.call(this, 'onVerify');

	        this.state.verfiyCode = Form.verifyCode();

	        var parentComponent = this.props.parentComponent; //form表单所处的父组件

	        if (parentComponent) {
	            //将表单状态同步到外部
	            this.onVerify(function (valid) {
	                parentComponent.setState({ valid: valid });
	            });
	        }
	    },
	    verify: function verify(real) {
	        var valid = verifyChildComponents.call(this, real);
	        this.verifyEvent.complete(valid);
	        return valid;
	    },
	    render: function render() {
	        return React.createElement(
	            'form',
	            _extends({}, this.props, { ref: 'wrap',
	                onSubmit: this.handleSubmit }),
	            this.props.children
	        );
	    }
	});
	formDirectives['input-group'] = React.createClass({
	    mixins: [mixins.childComponents.setParents([formDirectives['form']])],
	    getInitialState: function getInitialState() {
	        return {
	            valid: true,
	            dirty: false,
	            rules: getRules.call(this)
	        };
	    },
	    getDefaultProps: function getDefaultProps(a) {
	        return { type: 'input-group', showicon: 'error' };
	    },
	    componentDidMount: function componentDidMount() {
	        mixins.childComponents.getParentComponent.call(this);
	        directive.getChildComponents(this);
	    },
	    verify: function verify(real, fromParent) {
	        if (this.state.validing) {
	            return this.state.valid;
	        }
	        var valid; //= verifyChildComponents.call(this)
	        //取出选中的checkbox
	        var checked = [];
	        var hasnovalid;
	        this.state.childComponents.forEach(function (item) {
	            // console.log(item.state.value,item.state.valid, item.refs.input)
	            if (!item.state.valid) {
	                hasnovalid = true;
	            } else if (item.state.value) {
	                checked.push(item);
	            }
	        });
	        //this.state.status = null
	        //子项是否全部验证通过[隐形规则]
	        //当chekced满足了个数验证时 其中有非必填项输入了错误的值时 通过该属性检测group整体状态
	        this.state.valid_all = !hasnovalid;

	        this.state.value = checked.length ? checked : null; //没选中时 兼顾required
	        var valid = verifyField.call(this, real, fromParent);
	        return valid;
	    },
	    render: function render() {
	        return React.createElement(
	            'span',
	            null,
	            React.createElement(
	                'span',
	                { className: 'nj-input-group', ref: 'wrap' },
	                this.props.children
	            ),
	            React.createElement(VerifyStatus, { field: this })
	        );
	    }
	});
	formDirectives['input'] = React.createClass({
	    //React.addons.LinkedStateMixin
	    mixins: [formMixin, mixins.childComponents.setParents([formDirectives['input-group'], formDirectives['form']])],
	    getInitialState: function getInitialState() {
	        return {
	            dirty: false,
	            valid: true,
	            rules: getRules.call(this),
	            value: this.props.defaultValue || this.props.value || ''
	        };
	    },
	    getDefaultProps: function getDefaultProps() {
	        return { type: 'text', trigger: 'keyup' };
	    },
	    verify: function verify(real, fromParent) {
	        if (this.state.validing || /ok|pending/.test(this.state.status)) {
	            return this.state.valid;
	        }

	        //更新input-group
	        var parentComponent = this.state.parentComponent;
	        if (parentComponent) {
	            parentComponent.setState({ dirty: true });
	        }

	        var valid = verifyField.call(this, real, fromParent);
	        this.verifyEvent.complete(valid);
	        //if( !valid && parentComponent && parentComponent.state.action=='submit' ){
	        //this.refs.input.focus()
	        //}
	        return valid;
	    },
	    componentDidMount: function componentDidMount() {
	        mixins.childComponents.getParentComponent.call(this);

	        // this.changeEvent = nj.utils.addEventQueue.call(this, 'onChange')
	        this.verifyEvent = nj.utils.addEventQueue.call(this, 'onVerify');
	        //对外引用组件
	        this.refs.input.$handle = this;
	    },

	    //外部value改变状态后 同步到内部value
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        //这里必须检测是否value发生变化 否则由Form组件默认添加的onVerify事件(将表单状态同步到外部) 会引发死循环
	        var _value = nextProps.value;
	        if (_value !== undefined && this.state.value !== _value) {
	            this.state.value = nextProps.value;
	            this.valueLink().requestChange();
	        }
	    },
	    valueLink: function valueLink() {
	        var _this2 = this;

	        var _onChange = this.props.onChange;
	        var _value = this.props.value;

	        var type = this.props.type;

	        var valueLink = this.state.valueLink = {
	            value: this.state.value,
	            requestChange: function requestChange(e) {
	                var newValue = e ? e.target.value : _this2.state.value;
	                var textField = textReg.test(type);
	                e && _onChange && _onChange(e);

	                _this2.state.value = newValue;
	                _this2.state.status = null;

	                _this2.setState({
	                    value: newValue,
	                    dirty: true
	                });

	                // update = update===false ? false : (update||!textField)

	                var parentComponent = _this2.state.parentComponent;
	                if (parentComponent) {
	                    parentComponent.state.status = null;
	                    parentComponent.state.dirty = true;
	                }
	                // update && this.verify.call(this,false);
	                _this2.verify(false);

	                // this.changeEvent.complete()
	            }
	        };

	        return valueLink;
	    },
	    render: function render() {
	        var _this3 = this;

	        var attrs = this.props;
	        var type = attrs.type;
	        var _state = this.state;
	        var rules = _state.rules;
	        var dirty = _state.dirty;
	        var status = _state.status;
	        var value = _state.value;
	        var parentComponent = _state.parentComponent;

	        //触发验证的事件类型

	        var trigger = {
	            keyup: 'onKeyUp',
	            blur: 'onBlur'
	        }[this.props.trigger || parentComponent.props.trigger];

	        var options = Object.assign({}, attrs, {
	            ref: 'input'
	        });
	        if (type == 'checkbox' || type == 'radio') {
	            options.checkedLink = this.valueLink();
	        } else {
	            var mark;
	            if (rules.length && status) {
	                mark = true;
	                if (!rules.required && !value) {
	                    mark = false;
	                }
	                if (!dirty && (!parentComponent || parentComponent.state.action != 'submit')) {
	                    mark = false;
	                }
	            }
	            options.value = this.state.value;
	            options.onChange = this.valueLink().requestChange;
	            options.className = nj.utils.joinClass(this.props.className, mark && 'input-' + status);
	            var _event = options[trigger];
	            options[trigger] = function (e) {
	                _event && _event(e); //外部添加的事件
	                _this3.verify(true);
	            };
	        }
	        if (type == 'textarea') {
	            options.value = options.html;
	            delete options.children;
	        }
	        return React.createElement(
	            'label',
	            null,
	            type == 'textarea' ? React.createElement('textarea', options) : React.createElement('input', options),
	            type != 'textarea' && React.createElement(
	                'span',
	                null,
	                this.props.text
	            ),
	            React.createElement(VerifyStatus, { field: this })
	        );
	    }
	});
	formDirectives['select'] = React.createClass({
	    mixins: [mixins.childComponents.setParents([formDirectives['input-group'], formDirectives['form']])],
	    getInitialState: function getInitialState() {
	        return {
	            dirty: false,
	            valid: true,
	            rules: getRules.call(this),
	            value: this.props.defaultValue
	        };
	    },
	    getDefaultProps: function getDefaultProps() {
	        return { type: 'select' };
	    },
	    componentDidMount: function componentDidMount() {
	        mixins.childComponents.getParentComponent.call(this);
	        directive.getChildComponents(this);

	        this.changeEvent = nj.utils.addEventQueue.call(this, 'onChange');
	        this.verifyEvent = nj.utils.addEventQueue.call(this, 'onVerify');
	        this.refs.wrap.$handle = this;
	    },
	    verify: function verify(real, fromParent) {
	        var parentComponent = this.state.parentComponent;
	        if (parentComponent) {
	            parentComponent.setState({ dirty: true });
	        }

	        var valid = verifyField.call(this, real, fromParent);
	        this.verifyEvent.complete(valid);
	        return valid;
	    },
	    valueLink: function valueLink() {
	        var _this4 = this;

	        var _valueLink = this.props.valueLink;
	        var _value = _valueLink && _valueLink.value;

	        //外部valueLink改变状态后 组件内部需同步
	        if (_valueLink && _value !== this.state.value && _value != undefined) {
	            this.state.value = _value;

	            window.setTimeout(function () {
	                valueLink.requestChange(_value, true);
	            }, 10);
	        }

	        var valueLink = this.state.valueLink = {
	            value: this.state.value,
	            requestChange: function requestChange(newValue) {
	                // console.log(this.refs.wrap.selectedOptions[0].value)
	                _valueLink && _valueLink.requestChange(newValue); //合并外部双向绑定

	                _this4.state.value = newValue;
	                _this4.state.status = null;

	                _this4.setState({
	                    value: newValue,
	                    dirty: true
	                });

	                var parentComponent = _this4.state.parentComponent;
	                if (parentComponent) {
	                    parentComponent.state.status = null;
	                    parentComponent.state.dirty = true;
	                }

	                _this4.verify.call(_this4, false);
	                _this4.changeEvent.complete();
	            }
	        };
	        return valueLink;
	    },
	    render: function render() {
	        var options = Object.assign({}, this.props, {
	            ref: 'wrap',
	            valueLink: this.valueLink()
	        });
	        //nj-select 获取的children 数组项为空的占位符
	        var children = this.props.children;

	        children = children && children.filter(function (item) {
	            return item;
	        });
	        return React.createElement(
	            'label',
	            null,
	            React.createElement(
	                'select',
	                options,
	                children
	            ),
	            React.createElement(VerifyStatus, { field: this })
	        );
	    }
	});

	var textReg = /^(text|textarea|number|email|password)$/;

	//验证状态显示
	var VerifyStatus = React.createClass({
	    displayName: 'VerifyStatus',
	    render: function render() {
	        var field = this.props.field;
	        var rules = field.state.rules;
	        var showmsg = rules.length;
	        var parentComponent = field.state.parentComponent;

	        if (showmsg) {
	            if (field.state.dirty) {
	                //checkbox组合 子项不显示
	                var textField;

	                //if( textReg.test(field.props.type) && parentComponent && parentComponent.props.type=='input-group' ){
	                //showmsg = false
	                //}
	            } else if (parentComponent) {
	                    showmsg = parentComponent.state.action == 'submit';
	                }

	            if (!field.state.value && !rules.required) {
	                //非必填项
	                showmsg = false;
	            }
	        }
	        var _field$state = field.state;
	        var novalidName = _field$state.novalidName;
	        var status = _field$state.status;
	        var errortext = _field$state.errortext;
	        var valid = _field$state.valid;
	        var childComponents = _field$state.childComponents;

	        var novalidText = '';
	        var ispending = status == 'pending';

	        // console.log(showmsg, valid, status, field.refs.input)

	        if (showmsg) {
	            if (ispending) {
	                novalidText = 'loading……';
	            } else if (!valid) {
	                novalidText = errortext || field.props.errortext || statusText[novalidName] || '';
	            }

	            var showicon = parentComponent ? parentComponent.props.showicon : field.props.showicon;
	            if (showicon != 'all' && status != showicon && !ispending) {
	                //ispending始终显示
	                return null;
	            }
	            //适合'input-group'子项为text类
	            if (field.props.type == 'input-group') {
	                if (!field.state.valid_all) {
	                    //valid_all=false: 有未通过的验证项时 状态体现在子项上 不显示group状态
	                    return null;
	                } else if (valid) {
	                    var child = childComponents[0];
	                    if (child && textReg.test(child.props.type)) {
	                        //已输入的全部通过 状态体现在子项上 group无需显示状态
	                        return null;
	                    }
	                }
	            }
	        }

	        // console.log(showmsg,field.state.status,field.refs.input)
	        // console.log('verifyStatus:',showmsg,field.state.status)
	        return showmsg && field.state.status ? React.createElement(
	            'span',
	            { className: 'nj-form-msg' },
	            React.createElement(
	                'span',
	                { className: 'nj-form-msg-' + field.state.status },
	                novalidText
	            )
	        ) : null;
	    }
	});

	var formRules = {
	    required: function required(value) {
	        return !!value;
	    },
	    minlength: function minlength(value, target) {
	        return value && value.length >= parseInt(target);
	    },
	    maxlength: function maxlength(value, target) {
	        return value && value.length <= parseInt(target);
	    },
	    email: function email(value) {
	        return (/^\w+(?:[-+.']\w+)*@\w+(?:[-.]\w+)*\.\w+(?:[-.]\w+)*$/.test(value)
	        );
	    },
	    number: function number(value) {
	        return !isNaN(value);
	    },
	    url: function url(value) {
	        //验证输入是否是合法url地址 可以包含中文\u2E80-\u9FFF
	        return (/^(?:http(?:s)?:\/\/)?([\w-]+\.)+[\w-]+(?:\/[\w\W]*)?$/.test(value.split(/[\?#]/)[0])
	        );
	    },
	    mobile: function mobile(value) {
	        return (/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])[0-9]{8}$/.test(value)
	        );
	    },
	    qq: function qq(value) {
	        return (/^\s*[.0-9]{5,10}\s*$/.test(value)
	        );
	    },
	    telephone: function telephone(value) {
	        return (/^\d{2,5}?[-]?\d{5,8}([-]\d{0,1})?$/.test(value)
	        );
	    },
	    tel400: function tel400(value) {
	        return (/^(400)[-]?\d{3}[-]?\d{4}$/.test(value)
	        );
	    },
	    idcard: function idcard(value) {
	        //验证身份证号是否合法18位或17位带字母
	        return (/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(?:\d|[a-zA-Z])$/.test(value)
	        );
	    },

	    //二次确认输入项 target为比较的name值
	    confirm: function confirm(value, target) {
	        var instances = formDirectives['input'].instances;
	        var self = this;
	        var field;
	        for (var i = 0, n = instances.length; i < n; i++) {
	            field = instances[i].handle;
	            if (field.props.name == target) {
	                if (!field.state.addConfirmEvent) {
	                    //当target组件被重新修改时 清空当前组件的验证状态
	                    field.onChange(function () {
	                        self.state.status = null;
	                        self.verify();
	                        //self.setState({status:null, valid:false})
	                    });
	                    field.state.addConfirmEvent = true;
	                }
	                return value === field.state.value;
	            }
	        }
	    }
	};
	//自定义规则
	Form.addRule = function (name, fn, errortext) {
	    formRules[name] = fn;
	    if (errortext) {
	        statusText[name] = errortext;
	    }
	};

	var statusText = {
	    required: '不能为空',
	    email: '邮箱格式错误',
	    mobile: '手机号码格式错误',
	    url: 'url格式错误'
	};

	var directive = new Directive({
	    elementGroups: {
	        'form': { children: ['input-group', 'input', 'select'], component: formDirectives['form'] },
	        'input-group': { children: ['input', 'select'], component: formDirectives['input-group'] },
	        'input': { component: formDirectives['input'] },
	        'select': { component: formDirectives['select'] }
	    },
	    exports: exports
	});

	//验证码
	Form.verifyCode = function (verify, refresh) {
	    verify = verify || 'verify_img';
	    refresh = refresh || 'verify_refresh';
	    verify = document.getElementById(verify);
	    refresh = document.getElementById(refresh);
	    if (!verify || !refresh) {
	        return {};
	    }
	    verify.onclick = function () {
	        var _src = this.src.split('?'),
	            ver = _src[1] || '',
	            r = /((\?|&)t=)[\d]+/;
	        if (r.test(ver)) {
	            ver = _src[0] + '?' + ver.replace(r, '$1' + +new Date());
	        } else {
	            ver = 't=' + +new Date();
	        }
	        this.src = _src[0] + '?' + ver;
	        //this.src= domain.login+'/Index-loginverify.html?t='+(+new Date);
	    };
	    refresh.onclick = function () {
	        verify.click();
	        return false;
	    };
	    return {
	        refresh: function refresh() {
	            verify.click();
	        }
	    };
	};

	/*填充表单数据*/
	Form.fill = function (options) {
	    options = options || {};

	    var Form = $(options.form || document.forms[0]),
	        data = options.data,
	        i,
	        item,
	        type,
	        value;

	    if (!Form.length || $.type(data) != 'object') {
	        return;
	    }

	    for (i in data) {
	        item = Form.find('[name="' + i + '"]');
	        if (!item.length) {
	            if (options.always) {
	                //当options.always为true时 已隐藏域的形式填充到表单中
	                Form.append('<input name="' + i + '" type="hidden" value="' + data[i] + '" />');
	            }
	            continue;
	        }
	        type = item[0].type;
	        value = data[i];
	        if (type == 'text' || type == 'hidden' || type == 'textarea' || type == 'select-one' && typeof value == 'string') {
	            item.val(value);
	        } else if (type == 'radio') {
	            item.filter('[value="' + value + '"]').attr('checked', 'checked');
	        } else if (type == 'checkbox' && $.type(value) == 'array') {
	            $.each(value, function (i, v) {
	                item.filter('[value="' + v + '"]').click();
	            });
	        }
	    }
	};

	/*
	 * 格式化表单数据
	 * 主要针对非form对象 
	 * 本身就是form对象则直接返回form.serialize()
	 */
	Form.parse = function (form, dataType) {
	    if (!form || !form.length) {
	        return;
	    }
	    var _form = form.find('form'),
	        $form = form[0].tagName.toLowerCase() == 'form' ? form : _form.length ? _form : null,
	        data;

	    dataType = dataType || 'string';

	    if ($form) {
	        data = $form.serialize();
	    } else {
	        //Form = $('<form style="display:none"></form>').appendTo(document.body);
	        //clone无法拷贝select值
	        //Form.append(form.clone(true));
	        //data = Form.serialize();
	        //Form.remove();
	        var item = form.find('input,textarea,select,button'),
	            i = 0,
	            n = item.length,
	            data = {};
	        for (; i < n; i++) {
	            if (item[i].name) {
	                data[item[i].name] = item[i].value;
	            }
	        }
	    }
	    return data;
	};

	/*
	 * post跨域 使用iframe实现
	 */
	Form.post = function (options) {
	    options = options || {};
	    var _form = options.form;
	    if (!_form) {
	        _form = $('<form action="" method="post"></form>').appendTo(document.body)[0];
	    }

	    var name = 'iframe_' + +new Date(),
	        iframe = $('<iframe src="" name="' + name + '" style="display:none"></iframe>').appendTo(document.body),
	        callback = 'jsoncallback_' + +new Date();

	    var data = $.extend(true, options.data, { jsoncallback: callback });
	    Form.fill({
	        form: $(_form),
	        data: data,
	        always: true
	    });

	    if (options.url) {
	        _form.action = options.url;
	    }
	    _form.method = 'post';
	    _form.target = name;

	    window[callback] = function (json) {
	        // options.complete && options.complete.call(options, json);
	        options.success && options.success.call(options, json);

	        try {
	            delete window[callback];
	        } catch (e) {
	            //ie bug
	            window[callback] = null;
	        }

	        iframe.remove();
	        iframe = null;
	    };
	    options.beforeSend && options.beforeSend.call(options);

	    //document.domain = domain.host;//此句可以在beforeSend中配置
	    _form.submit();
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(212);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {"insertAt":"top"});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./form.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./form.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*form*/\r\n.nj-form li.item{padding:0 15px 15px 0;clear:both;}\r\n.nj-form .fields{margin-left:97px}\r\n.nj-form .text,.nj-form .short-text{border:1px solid #ccc;height:15px;line-height:15px;padding:4px 5px;width:200px;\r\n    background:#fff;margin-right:7px;display:inline-block;}\r\n.nj-form .short-text{width:90px;}\r\n.nj-form .text:focus,.nj-form .short-text:focus{box-shadow:0 0 7px #9DDEEF;border-color:#3ABDD7}\r\n.nj-form textarea.text[rows]{height:auto}\r\n.nj-form textarea.text[cols]{width:auto}\r\n.nj-form .lab{float:left;margin-right:7px;width:90px;text-align:right;line-height:25px;white-space:nowrap;}\r\n.nj-form .lab i{color:#f06;margin-right:7px}\r\n.nj-form .date{display:inline-block;vertical-align:top;}\r\n.nj-form .date .text{width:90px;background-color:transparent}\r\n.nj-form .disabled,button[disabled],input[disabled],.nj-button[disabled]{\r\n  box-shadow:none;background:#e5e5e5!important;color:#999!important;cursor:default;}\r\n.nj-form select.text{width:auto;height:auto;}\r\n.nj-form .text-block{width:100%;box-sizing:border-box;height:25px;}\r\n.nj-form .text-flat{border-color:transparent!important;box-shadow:none!important}\r\n\r\nbody .nj-form .input-ok{border-color:#00B700;}\r\nbody .nj-form .input-pending{border-color:#f90;}\r\nbody .nj-form .input-error{border-color:red;}\r\n\r\n.nj-form-msg-ok:before{content:'\\E606';color:#00BE00;font:16px 'njicon';}\r\n.nj-form-msg-error:before{content:'\\E60A';color:red;font:16px 'njicon';}\r\n.nj-form-msg-error{color:red;}\r\n.nj-form-msg-pending:before{content:'\\E604';animation:njRotate 1s linear infinite;font:16px 'njicon';display:inline-block;margin-right:6px;}\r\n.nj-form-msg-pending{color:#f90;}", ""]);

	// exports


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lib = __webpack_require__(1);

	var _lib2 = _interopRequireDefault(_lib);

	var _jquery = __webpack_require__(183);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * html指令组件
	 */
	var React = _lib2.default.React;
	var ReactDOM = _lib2.default.ReactDOM;

	/**
	 * 标记需要手动启动的组件
	 * <nj-component start-id="mycomponent"></nj-component>
	 * Component.startOne('mycomponent', {})
	 */

	var start_id = 'start-id';

	var Directive = function Directive(options) {
	    var _this = this;

	    this.options = options || {};

	    //exports 为某个或某类组件集合 对外提供的接口
	    var _options = this.options;
	    var exports = _options.exports;
	    var elementGroups = _options.elementGroups;

	    //将指令对应的组件挂到exports上

	    var rootComponent;
	    for (var i in elementGroups) {
	        var com = exports[getComponentName(i)] = elementGroups[i].component;
	        if (!rootComponent) {
	            //最外层的父组件
	            this.rootComponent = rootComponent = com;
	            this.rootDirective = i;
	        }
	        com.getByHandle = function (com) {
	            return function (handle) {
	                for (var n = com.instances.length, i = n - 1; i >= 0; i--) {
	                    var item = com.instances[i].handle;
	                    if (item.props.handle == handle) {
	                        return item;
	                    }
	                }
	            };
	        }(com);
	    }

	    rootComponent.start = this.start.bind(this);

	    //手动启动
	    rootComponent.startOne = function (id, props, context) {
	        var node = (context || document.body).querySelector('[' + start_id + '="' + id + '"]');
	        if (node) {
	            node.removeAttribute(start_id);
	            return _this.initial(node, _this.rootDirective, null, 0, props);
	        }
	    };

	    (0, _jquery2.default)(function () {
	        return _this.start();
	    });
	};

	Directive.prototype = {
	    start: function start(container) {
	        this.directiveInit(this.rootDirective, container || document.body);
	    },
	    directiveInit: function directiveInit(type, context, parentComponent) {
	        var _this2 = this;

	        if (!context) {
	            return;
	        }
	        var components = [];
	        var formElements = _lib2.default.utils.toArray(context.getElementsByTagName('nj-' + type));
	        formElements.forEach(function (node, i) {
	            var c = _this2.initial(node, type, parentComponent, i);
	            if (c) {
	                components.push(c);
	            }
	        });
	        return components;
	    },
	    initial: function initial(node, type, parentComponent, index, props) {

	        var componentItem = this.options.elementGroups[type];
	        var Component = componentItem.component;
	        if (Component) {
	            var options = parseAttrs(_lib2.default.utils.getAttributes(node));

	            var noStart = options[start_id]; //需要传入复杂参数时 以手动方式启动
	            if (noStart) {
	                return;
	            }
	            var el = document.createElement('span');
	            node.parentNode.insertBefore(el, node);
	            node.parentNode.removeChild(node);

	            Object.assign(options, props); //合并手动启动传入的参数

	            // console.log(options)

	            options._childNodes = _lib2.default.utils.toArray(node.childNodes);
	            options._componentType = type;
	            options.text = options.text || node.innerText;
	            options.index = index || 0;

	            var componentInfo = this.options.elementGroups[type];
	            var componentChildren = componentInfo.children || [];

	            if (options._childNodes.length && componentItem.wrapItem) {
	                options.children = [];
	                //先在props.children中占位 必须是有效的元素节点
	                options._children = options._childNodes.filter(function (n) {
	                    if (n.nodeType == 1) {
	                        var name = n.nodeName.toLowerCase().replace(/^nj-/, '');
	                        componentChildren.indexOf(name) < 0 && options.children.push('');
	                        return true;
	                    }
	                });
	            }
	            if (parentComponent) {
	                options.parentComponent = parentComponent;
	            }
	            // if( options.value!=undefined ){
	            //     options.defaultValue = options.value
	            //     delete options.value
	            // }
	            // options._node = el
	            // if( type=='input-group' && parentComponent ){//继承form组件showicon属性
	            //     options.showicon = parentComponent.props.showicon
	            // }
	            return ReactDOM.render(React.createElement(Component, options), el);
	        }
	    },

	    //当前组件渲染完毕后 将dom移入组件 并且检测是否有子组件
	    getChildComponents: function getChildComponents(component) {
	        var _this3 = this;

	        var _component$props = component.props;
	        var _childNodes = _component$props._childNodes;
	        var _componentType = _component$props._componentType;
	        var _children = _component$props._children;

	        if (!_componentType) {
	            //只适用于nj-html方式创建的组件
	            return;
	        }
	        var wrap = this.options.wrap;

	        if (typeof wrap == 'function') {
	            wrap = wrap(component);
	        } else {
	            wrap = component.refs.wrap || ReactDOM.findDOMNode(component);
	        }

	        var _options$elementGroup = this.options.elementGroups[_componentType];
	        var children = _options$elementGroup.children;
	        var wrapItem = _options$elementGroup.wrapItem;

	        var childNodes = _childNodes || []; //_children过滤了非元素节点
	        (wrapItem ? _children : childNodes).forEach(function (n, i) {
	            var w = wrap;
	            if (typeof wrapItem == 'function') {
	                w = wrapItem(component, n, i);
	            }
	            w && w.appendChild(n);
	        });

	        var components = [];

	        children && children.forEach(function (type) {
	            var c = _this3.directiveInit(type, ReactDOM.findDOMNode(component), component);
	            components = components.concat(c);
	        });
	        component.state.childComponents = components;

	        var instances = component.constructor.instances;
	        for (var i = 0, n = instances.length; i < n; i++) {
	            if (instances[i].handle === component) {
	                Array.prototype.push.apply(instances[i].components, components);
	                break;
	            }
	        }
	    }
	};

	//<input required>将默认属性值为空的转化为required="required"
	function parseAttrs(attrs) {
	    for (var i in attrs) {
	        if (attrs[i] === '' && i != 'defaultValue') {
	            attrs[i] = i;
	        }
	    }
	    return attrs;
	}
	//nj-input => Input / nj-input-group => InputGroup
	function getComponentName(name) {
	    return name.replace('nj-', '').replace(/^(\w)/, function (a, b, c) {
	        return b.toUpperCase();
	    }).replace(/-(\w)/, function (a, b, c) {
	        return b.toUpperCase();
	    });
	}

	exports.default = Directive;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _nj = __webpack_require__(1);

	var _nj2 = _interopRequireDefault(_nj);

	var _switch = __webpack_require__(215);

	var _switch2 = _interopRequireDefault(_switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = _nj2.default.React;
	var render = _nj2.default.render;
	var Switch = _switch2.default.Switch;
	var SwitchMenu = _switch2.default.SwitchMenu;
	var SwitchItem = _switch2.default.SwitchItem;

	module.exports = function (container) {

	    var demoWrap = document.getElementById('demo-switch-wrap');
	    demoWrap && render(React.createElement(
	        Switch,
	        { trigger: 'hover' },
	        React.createElement(
	            'ul',
	            { className: 'nj-switch-menus clearfix' },
	            React.createElement(
	                'li',
	                null,
	                React.createElement(
	                    SwitchMenu,
	                    null,
	                    '1'
	                )
	            ),
	            React.createElement(
	                'li',
	                null,
	                React.createElement(
	                    SwitchMenu,
	                    null,
	                    '2'
	                )
	            )
	        ),
	        React.createElement(
	            SwitchItem,
	            null,
	            '11a'
	        ),
	        React.createElement(
	            SwitchItem,
	            null,
	            '22a'
	        )
	    ), demoWrap);
	    Switch.start(container);

	    // Switchs.getByHandle('myswitch').onChange((index,e)=>{
	    //     console.log(index,e)
	    // })
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	/**
	 * Switch组件
	 */
	var nj = __webpack_require__(2);var React = nj.React;
	var ReactDOM = nj.ReactDOM;
	var mixins = nj.mixins;

	var $ = __webpack_require__(183);

	var Directive = __webpack_require__(213).default;

	var Switch = React.createClass({
	    displayName: 'Switch',

	    mixins: [mixins.childComponents.config],
	    getInitialState: function getInitialState() {
	        return { index: 0, trigger: this.props.trigger || 'click' };
	    },
	    componentDidMount: function componentDidMount() {
	        var _this = this;

	        directive.getChildComponents(this);

	        //自动切换
	        var interval = this.props.interval;
	        interval && window.setInterval(function () {
	            _this.change(++_this.state.index);
	        }, interval);

	        this.changeEvent = nj.utils.addEventQueue.call(this, 'onChange'); //.add(this.props.onChange)
	    },
	    change: function change(index, e) {
	        var length = this.state.length;
	        index = index < 0 ? length - 1 : index;
	        index = index >= length ? 0 : index;
	        this.state.index = index;
	        this.setState({ index: index });

	        this.state.childComponents.forEach(function (c) {
	            c.forceUpdate();
	        });
	        this.changeEvent.complete(index, e);
	    },
	    render: function render() {
	        var className = nj.utils.joinClass('nj-switch', this.props.className);
	        return React.createElement(
	            'div',
	            _extends({}, this.props, { className: className }),
	            this.props.children
	        );
	    }
	});

	var SwitchMenu = React.createClass({
	    displayName: 'SwitchMenu',

	    mixins: [mixins.childComponents.setParents([Switch])],
	    componentDidMount: function componentDidMount() {
	        directive.getChildComponents(this);
	    },
	    render: function render() {
	        var parentComponent = this.state.parentComponent;
	        var index = parentComponent.state.index;
	        var className = nj.utils.joinClass('nj-switch-menu', index == this.state.index && 'nj-switch-menu-active');

	        var options = { className: className };

	        var trigger = parentComponent.state.trigger;
	        var eventType = trigger == 'hover' ? 'onMouseEnter' : 'onClick';
	        //调用父组件的change方法
	        options[eventType] = parentComponent.change.bind(parentComponent, this.state.index);

	        options = Object.assign({}, this.props, options);

	        return React.createElement(
	            'div',
	            options,
	            this.props.children
	        );
	    }
	});

	var SwitchItem = React.createClass({
	    displayName: 'SwitchItem',

	    mixins: [mixins.childComponents.setParents([Switch])],
	    componentDidMount: function componentDidMount() {
	        directive.getChildComponents(this);
	        //以SwitchItem的数量来更新Switch组件的切换子项个数
	        this.state.parentComponent.state.length = this.state.index + 1;
	    },
	    render: function render() {
	        var index = this.state.parentComponent.state.index;
	        var className = nj.utils.joinClass('nj-switch-item', index == this.state.index ? 'nj-switch-item-active' : 'd_hide');
	        return React.createElement(
	            'div',
	            _extends({}, this.props, { className: className }),
	            this.props.children
	        );
	    }
	});

	var directive = new Directive({
	    elementGroups: {
	        'switch': { children: ['switch-menu', 'switch-item'], component: Switch },
	        'switch-menu': { component: SwitchMenu },
	        'switch-item': { component: SwitchItem }
	    },
	    exports: exports
	});

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _nj = __webpack_require__(1);

	var _nj2 = _interopRequireDefault(_nj);

	var _scroll = __webpack_require__(217);

	var _jquery = __webpack_require__(183);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = _nj2.default.React;
	var render = _nj2.default.render;

	module.exports = function (container) {
	    var demo;
	    var demoWrap = document.getElementById('demo-scroll-wrap');
	    demoWrap && (demo = render(React.createElement(
	        _scroll.Scroll,
	        { time: 4100, auto: false, direction: 'x' },
	        React.createElement(
	            _scroll.ScrollItems,
	            null,
	            React.createElement(
	                'div',
	                { className: '_item' },
	                '1'
	            ),
	            React.createElement(
	                'div',
	                { className: '_item' },
	                '2'
	            ),
	            React.createElement(
	                'div',
	                { className: '_item' },
	                '3'
	            )
	        )
	    ), demoWrap));

	    _scroll.Scroll.start(container);

	    (0, _jquery2.default)('a.prev,a.next').click(function () {
	        var index = demo.state.index;
	        demo.scroll((0, _jquery2.default)(this).hasClass('prev') ? false : true);
	        return false;
	    });

	    _scroll.Scroll.startOne('myscroll', {
	        pageTemplate: function pageTemplate(i) {
	            return React.createElement(
	                'div',
	                null,
	                'p',
	                i + 1,
	                '-'
	            );
	        }
	    });
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*
	 * 无间断滚动
	 */
	var nj = __webpack_require__(2);
	var React = nj.React;
	var ReactDOM = nj.ReactDOM;
	var mixins = nj.mixins;

	var $ = __webpack_require__(183);
	var Directive = __webpack_require__(213).default;
	__webpack_require__(218);

	var Scroll = React.createClass({
	    displayName: 'Scroll',

	    mixins: [mixins.childComponents.config],
	    getDefaultProps: function getDefaultProps() {
	        return {
	            //滚动方向，默认纵向
	            direction: 'y',
	            children: []
	        };
	    },
	    getInitialState: function getInitialState() {
	        var _props = this.props;
	        var _props$step = _props.step;
	        var step = _props$step === undefined ? 1 : _props$step;
	        var time = _props.time;
	        var _props$repeat = _props.repeat;
	        var repeat = _props$repeat === undefined ? true : _props$repeat;
	        var _props$auto = _props.auto;
	        var auto = _props$auto === undefined ? true : _props$auto;

	        step = parseInt(step);
	        return {
	            step: step, //滚动步长，0为连续滚动
	            time: time || (step ? 6000 : 30), //滚动速度，连续推荐设置40ms ;间断滚动时，该值为滚动的间隔时间
	            repeat: repeat, //是否重复循环无间断
	            auto: auto,

	            index: 0,
	            size: {},
	            // totalLength : length,//总个数 包含追加
	            scrollLength: 0 //已滚动个数
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        var _this = this;

	        this.scrollEvent = nj.utils.addEventQueue.call(this, 'onScroll');
	        this.scrollEndEvent = nj.utils.addEventQueue.call(this, 'onScrollEnd');

	        //React创建的组件 父组件完成后 首次要更新下page
	        var page = this.state.page;

	        if (page) {
	            this.onScrollEnd(function (e) {
	                return _this.start();
	            });
	            page.forceUpdate();
	        }

	        directive.getChildComponents(this);

	        this.props.computed && $(window).on('resize', function () {
	            _this.reset();
	        });
	        setTimeout(function () {
	            //computed情况下 scroll-items组件必须先计算完成后 这里才reset
	            _this.reset();

	            var _state = _this.state;
	            var length = _state.length;
	            var view = _state.view;
	            var step = _state.step;
	            var size = _state.size;
	            var itemsComponent = _state.itemsComponent;
	            // console.log(length,view)

	            if (length <= view) {
	                return;
	            }
	            var nextLast = length % view;

	            //初始化的追加个数 保证next即可
	            //next所需:view-nextLast
	            //step==0连续滚动时 拷贝view个即可
	            nextLast && _this.append(0, step ? view - nextLast : view);

	            var direction = _this.props.direction;
	            if (direction == 'y') {
	                size.total = $(itemsComponent.refs.items).height();
	            }
	            _this.start();

	            var wrap = $(itemsComponent.refs.wrap);
	            wrap.hover(function () {
	                _this.stop();
	            }, function () {
	                _this.start();
	            });

	            //mobile touch
	            if (screen.width <= 640) {
	                var prevAction = direction == 'y' ? 'swipeDown' : 'swipeRight',
	                    nextAction = direction == 'y' ? 'swipeUp' : 'swipeLeft';

	                wrap[prevAction](function () {
	                    _this.scroll(false);
	                    return false;
	                });
	                wrap[nextAction](function () {
	                    _this.scroll();
	                    return false;
	                });
	            }
	        }, 1);
	    },
	    append: function append(start, appendLength) {
	        /*
	         * 使用向后追加元素的方式来实现不间断滚动
	         * 初始化追加一次 ；每次滚动完毕后追加
	         */
	        var _state2 = this.state;
	        var repeat = _state2.repeat;
	        var length = _state2.length;
	        var size = _state2.size;
	        var itemsComponent = _state2.itemsComponent;

	        if (!repeat) {
	            return;
	        }
	        var _itemsComponent$props = itemsComponent.props;
	        var children = _itemsComponent$props.children;
	        var _children = _itemsComponent$props._children;

	        var copy,

	        //剩余一次可截取个数
	        last = length - start,
	            c;

	        //以html指令方式创建的组件 这里要手动append dom
	        var doms = _children,
	            domSlice = [];

	        if (appendLength > last) {
	            copy = children.slice(start); //从当前copy到结尾
	            if (doms) {
	                children.forEach(function (n, i) {
	                    i >= start && domSlice.push(i);
	                });
	            }
	            start = 0;
	            appendLength = appendLength - copy.length;
	        }
	        c = children.slice(start, start + appendLength);
	        if (doms) {
	            children.forEach(function (n, i) {
	                i >= start && i < start + appendLength && domSlice.push(i);
	            });
	        }
	        if (copy) {
	            Array.prototype.push.apply(copy, c);
	        } else {
	            copy = c;
	        }

	        var _totalLength = this.state.totalLength; //添加之前的个数

	        Array.prototype.push.apply(children, copy);

	        this.state.totalLength = children.length; //追加后的总个数

	        if (this.props.direction == 'x') {
	            size.total = this.state.totalLength * size.item;
	        }
	        this.setState({ size: size });
	        itemsComponent.setState({ children: children }, function (a) {
	            if (doms) {
	                domSlice.forEach(function (n) {
	                    itemsComponent.refs['item' + _totalLength].appendChild(doms[n].cloneNode(true));
	                    _totalLength++;
	                });
	            }
	        });
	    },
	    start: function start() {
	        var _this2 = this;

	        var _state3 = this.state;
	        var auto = _state3.auto;
	        var length = _state3.length;
	        var view = _state3.view;
	        var time = _state3.time;
	        // console.log(length,auto,view)

	        if (auto && length > view) {
	            clearInterval(this.delay);
	            this.delay = setInterval(function () {
	                _this2.scroll();
	            }, time);
	        }
	    },
	    stop: function stop() {
	        this.delay = clearInterval(this.delay);
	    },
	    reset: function reset() {
	        // var {childComponents} = this.state
	        var _props2 = this.props;
	        var computed = _props2.computed;
	        var direction = _props2.direction;
	        var step = _props2.step;

	        var itemsComponent = this.state.itemsComponent;
	        var horizontal = direction == 'x';
	        var wrap = $(itemsComponent.refs.wrap);
	        var content = $(itemsComponent.refs.items);
	        var item = $(itemsComponent.refs.item0);

	        var size = this.state.size = {
	            box: horizontal ? wrap.width() : wrap.height(), //容器尺寸
	            total: horizontal ? null : content.height(), //内容总尺寸
	            item: horizontal ? item.outerWidth(true) : item.outerHeight(true) //单项尺寸
	        };
	        if (horizontal) {
	            size.total = this.state.totalLength * size.item;
	        }
	        this.state.view = Math.ceil(size.box / size.item);
	        if (step == 'view') {
	            this.state.step = this.state.view;
	        }
	        this.setState({ size: size });
	        itemsComponent.forceUpdate();
	    },
	    scroll: function scroll(next) {
	        var _this3 = this;

	        /*
	         * next 
	         * boolean: 向前/后滚动 控制方向
	         * number: 索引值 直接滚动到某一张 （若repeat=true 该索引是相对追加之前的）
	         */
	        var _state4 = this.state;
	        var size = _state4.size;
	        var step = _state4.step;
	        var scrollLength = _state4.scrollLength;
	        var totalLength = _state4.totalLength;
	        var length = _state4.length;
	        var view = _state4.view;
	        var itemsComponent = _state4.itemsComponent;

	        var index;
	        if (typeof next == 'number') {
	            index = getIndex(next, length);
	        } else {
	            next = next === false ? false : true;
	        }
	        if (next !== undefined) {
	            this.start(); //外部控制滚动后 重新开始计时
	        }
	        var wrap = $(itemsComponent.refs.wrap);

	        var direction = this.props.direction;

	        //if( this.wrap.is(":animated") ) { return;}

	        wrap.stop();

	        var isExist = nj.utils.elementInDOM(ReactDOM.findDOMNode(this)); //组件是否被移除
	        if (!isExist) {
	            this.stop();
	            wrap.stop();
	            return;
	        }

	        var T = this,
	            m,
	            speed = 0,

	        //每次滚动距离，连续-每次增加1px，间隔-每次增加n个元素的宽高
	        //计算最大滚动差
	        max = size.total - size.box,
	            scrollAttr = direction == 'x' ? 'scrollLeft' : 'scrollTop',
	            attr = {},
	            now = wrap[scrollAttr](),
	            nowScroll,
	            ratio = next ? 1 : -1;

	        if (step == 0) {
	            m = 1;
	        } else {
	            m = step * size.item;
	            speed = 800;
	        }

	        if (step) {
	            m = ratio * m;

	            //不足prev时 向后跳转this.len的个数
	            if (!next && scrollLength < step && typeof index == 'undefined') {
	                var prevLast = totalLength - (scrollLength + length);

	                if (prevLast < view) {
	                    this.append(totalLength % length, view - prevLast);
	                    totalLength = this.state.totalLength;
	                    // scrollLength = this.state.scrollLength
	                }
	                wrap[scrollAttr](wrap[scrollAttr]() + size.item * length);
	                scrollLength += length;
	            }

	            scrollLength += ratio * step;
	        } else {
	            //连续滚动
	            scrollLength = Math.floor(now / size.item);
	        }
	        this.state.index = scrollLength % length; //当前开始index

	        if (typeof index == 'undefined') {
	            attr[scrollAttr] = '+=' + m;
	            this.state[scrollAttr] = nowScroll = now + ratio * m;
	        } else {
	            scrollLength = index;
	            this.state.index = index;
	            attr[scrollAttr] = this.state[scrollAttr] = nowScroll = now = size.item * index;
	        }
	        this.state.scrollLength = scrollLength;
	        this.state.endIndex = getIndex(this.state.index + view - 1, length); //当前结束index

	        wrap.animate(attr, speed, 'easeOutExpo', function () {
	            if (nowScroll >= length * size.item) {
	                //滚动过得距离超过总长度  则向前跳转一次
	                var newPos = step ? size.item * _this3.state.index : 0;
	                wrap[scrollAttr](newPos);
	                scrollLength = _this3.state.scrollLength = _this3.state.index = step ? _this3.state.index : newPos;
	                //T.step==0 && T.scroll();
	            }
	            var last = totalLength - scrollLength - view;
	            if (last < view) {
	                //需再次追加 此处step=0不会存在
	                _this3.append(getIndex(_this3.state.endIndex + last + 1, length), view - last);
	            }
	            _this3.scrollEndEvent.complete();
	        });
	        // this.setState({index:this.state.index})
	        this.state.childComponents.forEach(function (c) {
	            c.forceUpdate();
	        });
	        this.scrollEvent.complete(this.state.index);
	    },
	    render: function render() {
	        var _props3 = this.props;
	        var className = _props3.className;
	        var children = _props3.children;

	        className = nj.utils.joinClass('nj-scroll', className);
	        return React.createElement(
	            'div',
	            { className: className },
	            children
	        );
	    }
	});
	Scroll.PropTypes = {
	    step: React.PropTypes.number,
	    time: React.PropTypes.number,
	    pageTemplate: React.PropTypes.func
	};

	var ScrollItems = React.createClass({
	    displayName: 'ScrollItems',

	    mixins: [mixins.childComponents.setParents([Scroll])],
	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentDidMount: function componentDidMount() {
	        directive.getChildComponents(this);

	        var parentComponent = this.state.parentComponent;

	        parentComponent.state.totalLength = parentComponent.state.length = this.props.children.length;
	        //父组件中通过itemsComponent来调用
	        parentComponent.state.itemsComponent = this;

	        //适应多分辨率时 设置computed=true可以自动为this.item设置尺寸 因为css中无法设置
	        var _parentComponent$prop = parentComponent.props;
	        var direction = _parentComponent$prop.direction;
	        var computed = _parentComponent$prop.computed;

	        var horizontal = direction == 'x';
	        var itemStyle = { display: horizontal ? 'inline-block' : 'block' };

	        if (computed) {
	            var value;
	            var wrap = $(this.refs.wrap);
	            if (horizontal) {
	                value = wrap.width();
	                itemStyle.width = value;
	                itemStyle.height = value / computed;
	            } else {
	                value = wrap.height();
	                itemStyle.width = value * computed;
	                itemStyle.height = value;
	            }
	        }
	        this.setState({ itemStyle: itemStyle });
	    },
	    handleTouch: function handleTouch(e) {
	        console.log(e.touches[0]);
	    },
	    render: function render() {
	        var _state5 = this.state;
	        var parentComponent = _state5.parentComponent;
	        var itemStyle = _state5.itemStyle;
	        // if( !parentComponent ){
	        //     console.log(1)
	        //     return null
	        // }

	        var direction = parentComponent.props.direction;

	        var horizontal = direction == 'x';

	        var _props4 = this.props;
	        var children = _props4.children;
	        var className = _props4.className;

	        className = nj.utils.joinClass('nj-scroll-item clearfix', className);
	        var size = parentComponent.state.size;

	        return React.createElement(
	            'div',
	            { ref: 'wrap', _onTouchMove: this.handleTouch, className: 'nj-scroll-wrap' },
	            React.createElement(
	                'div',
	                { ref: 'items', className: 'nj-scroll-items clearfix', style: horizontal ? { width: size.total } : {} },
	                children.map(function (item, i) {
	                    return React.createElement(
	                        'span',
	                        { className: className, ref: 'item' + i, key: i, style: itemStyle },
	                        item
	                    );
	                })
	            )
	        );
	    }
	});

	var ScrollPage = React.createClass({
	    displayName: 'ScrollPage',

	    mixins: [mixins.childComponents.setParents([Scroll])],
	    getDefaultProps: function getDefaultProps() {
	        return { pages: 0 };
	    },
	    handleClick: function handleClick(index) {
	        var parentComponent = this.state.parentComponent;

	        parentComponent.stop();
	        parentComponent.scroll(index);
	    },
	    componentDidMount: function componentDidMount() {
	        directive.getChildComponents(this);

	        var parentComponent = this.state.parentComponent;

	        parentComponent.state.page = this;
	    },
	    render: function render() {
	        var _this4 = this;

	        // console.log(this.props)
	        var parentComponent = this.state.parentComponent;
	        var _parentComponent$stat = parentComponent.state;
	        var length = _parentComponent$stat.length;
	        var index = _parentComponent$stat.index;

	        var items = [];
	        for (var i = 0; i < length; i++) {
	            items.push(i + 1);
	        }
	        var _props5 = this.props;
	        var trigger = _props5.trigger;
	        var className = _props5.className;

	        var template = this.props.template || parentComponent.props.pageTemplate;

	        return React.createElement(
	            'div',
	            { className: 'nj-scroll-page ' + className },
	            React.createElement(
	                'div',
	                { className: '-page-inner' },
	                items.map(function (n, i) {
	                    var tmpl = typeof template == 'function' && template.call(_this4, i);
	                    var child = tmpl || n;
	                    var options = {
	                        ref: 'item' + i,
	                        className: nj.utils.joinClass('-page-item', n - 1 == index && '-page-active'),
	                        key: n
	                    };
	                    if (typeof tmpl == 'string') {
	                        options.dangerouslySetInnerHTML = { __html: tmpl };
	                        child = null;
	                    }
	                    options[trigger == 'hover' ? 'onMouseEnter' : 'onClick'] = _this4.handleClick.bind(_this4, n - 1);
	                    return React.createElement(
	                        'span',
	                        options,
	                        child
	                    );
	                })
	            )
	        );
	    }
	});
	ScrollPage.PropTypes = {
	    pages: React.PropTypes.number
	};

	function getIndex(index, total) {
	    index = index < 0 ? 0 : index;
	    index = index > total ? index % total : index;
	    return index;
	}

	var directive = new Directive({
	    elementGroups: {
	        'scroll': {
	            children: ['scroll-items', 'scroll-page'],
	            component: Scroll
	        },
	        'scroll-items': {
	            component: ScrollItems,
	            wrapItem: function wrapItem(component, element, i) {
	                return component.refs['item' + i];
	            }
	        },
	        'scroll-page': {
	            component: ScrollPage
	        }
	    },
	    // wrap : component=>ReactDOM.findDOMNode(component),
	    exports: exports
	});

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*
	 * touch events
	 */

	var $ = __webpack_require__(183),
	    touch = {},
	    touchTimeout,
	    tapTimeout,
	    swipeTimeout,
	    longTapDelay = 750,
	    longTapTimeout;

	function parentIfText(node) {
	    return 'tagName' in node ? node : node.parentNode;
	}

	function swipeDirection(x1, x2, y1, y2) {
	    var xDelta = Math.abs(x1 - x2),
	        yDelta = Math.abs(y1 - y2);
	    return xDelta >= yDelta ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
	}

	function longTap() {
	    longTapTimeout = null;
	    if (touch.last) {
	        touch.el.trigger('longTap');
	        touch = {};
	    }
	}

	function cancelLongTap() {
	    longTapTimeout && clearTimeout(longTapTimeout);
	    longTapTimeout = null;
	}

	function cancelAll() {
	    touchTimeout && clearTimeout(touchTimeout);
	    tapTimeout && clearTimeout(tapTimeout);
	    swipeTimeout && clearTimeout(swipeTimeout);
	    longTapTimeout && clearTimeout(longTapTimeout);
	    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
	    touch = {};
	}

	(function () {
	    var now, delta;

	    $(document).on('touchstart', function (e) {
	        e = e.originalEvent ? e.originalEvent : e;
	        now = Date.now();
	        delta = now - (touch.last || now);
	        touch.el = $(parentIfText(e.touches[0].target));
	        touchTimeout && clearTimeout(touchTimeout);
	        touch.x1 = e.touches[0].pageX;
	        touch.y1 = e.touches[0].pageY;
	        if (delta > 0 && delta <= 250) {
	            touch.isDoubleTap = true;
	        }
	        touch.last = now;
	        longTapTimeout = setTimeout(longTap, longTapDelay);
	    }).on('touchmove', function (e) {
	        e = e.originalEvent ? e.originalEvent : e;
	        cancelLongTap();
	        touch.x2 = e.touches[0].pageX;
	        touch.y2 = e.touches[0].pageY;
	        if (Math.abs(touch.x1 - touch.x2) > 10) {
	            e.preventDefault();
	        }
	    }).on('touchend', function (e) {
	        e = e.originalEvent ? e.originalEvent : e;
	        cancelLongTap();
	        // swipe
	        if (touch.x2 && Math.abs(touch.x1 - touch.x2) > 30 || touch.y2 && Math.abs(touch.y1 - touch.y2) > 30) {
	            swipeTimeout = setTimeout(function () {
	                touch.direction = swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2);
	                touch.el.trigger('swipe', touch);
	                touch.el.trigger('swipe' + touch.direction, touch);
	                touch = {};
	            }, 0);
	        } else if ('last' in touch) {
	            // normal tap
	            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
	            // ('tap' fires before 'scroll')
	            tapTimeout = setTimeout(function () {
	                // trigger universal 'tap' with the option to cancelTouch()
	                // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
	                var event = $.Event('tap');
	                event.cancelTouch = cancelAll;
	                touch.el.trigger(event);

	                // trigger double tap immediately
	                if (touch.isDoubleTap) {
	                    touch.el.trigger('doubleTap');
	                    touch = {};
	                } else {
	                    // trigger single tap after 250ms of inactivity
	                    touchTimeout = setTimeout(function () {
	                        touchTimeout = null;
	                        touch.el.trigger('singleTap');
	                        touch = {};
	                    }, 250);
	                }
	            }, 0);
	        }
	    }).on('touchcancel', cancelAll);

	    $(window).on('scroll', cancelAll);
	})();

	['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function (m) {
	    $.fn[m] = function (callback) {
	        return this.on(m, callback);
	    };
	});

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _nj = __webpack_require__(1);

	var _nj2 = _interopRequireDefault(_nj);

	var _face = __webpack_require__(220);

	var _face2 = _interopRequireDefault(_face);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = _nj2.default.React;
	var render = _nj2.default.render;

	module.exports = function (container) {
	    var rs = 'http://css.mdbimg.com';
	    _face2.default.config({
	        themeItems: {
	            'default': { url: rs + "/js/lib/Kindeditor/plugins/emoticons/images/" }
	        },
	        themes: ['default']
	    });
	    _face2.default.create({
	        nearby: 'show-face',
	        insert: 'face-insert'
	    });
	    var demoWrap = document.getElementById('demo-face-wrap');

	    // demoWrap && render(
	    //     <Face />
	    // , demoWrap)
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * 表情选择器
	 */

	var $ = __webpack_require__(183);

	var _require = __webpack_require__(1);

	var React = _require.React;
	var render = _require.render;
	var utils = _require.utils;

	var Popover = __webpack_require__(207);

	var _require2 = __webpack_require__(215);

	var Switch = _require2.Switch;
	var SwitchMenu = _require2.SwitchMenu;
	var SwitchItem = _require2.SwitchItem;

	var Face = React.createClass({
	    displayName: 'Face',

	    statics: {
	        create: function create(options) {
	            var nearby = options.nearby;
	            var insert = options.insert;

	            var pop = Popover.create({
	                nearby: nearby,
	                name: 'nj-face-pop',
	                trigger: 'click'
	            }).onShow(function () {
	                options.popover = this;
	                options.insert = utils.dom(insert);
	                this.setState({ template: React.createElement(Face, options) });
	            });
	            pop.insertEvent = utils.addEventQueue.call(pop, 'onInsert');
	            return pop;
	        },

	        //提取表情,不传默认为当前表情插入对象val
	        //replaceImage 将图片替换为符号 否则默认替换符号为图片
	        replaceFace: function replaceFace(con, faces, replaceImage) {
	            // var {insert} = this.props
	            // if(!con){
	            //     var con = this.insert.val();
	            // }
	            var T = this,
	                _con;
	            faces = this._config.themeItems; //|| this.state.faces;

	            if (replaceImage) {
	                _con = $('<div></div>').html(con);
	            }

	            for (var i in faces) {
	                var v = faces[i];
	                var faceArray = v.item,
	                    N,
	                    pic,
	                    item;

	                for (var i in faceArray) {
	                    item = faceArray[i];
	                    N = i + '_' + item;

	                    if (con.indexOf("[:" + N + "]") != -1) {
	                        pic = '<img src="' + v.url + i + v.fix + '" alt="' + item + '" class="nj_face_image" title="' + item + '" />';
	                        con = con.replace(eval("/\\[:" + N.replace("(", "\\(").replace(")", "\\)") + "\\]/g"), pic);
	                    } else if (replaceImage) {
	                        _con.find('img.nj_face_image').each(function () {
	                            $(this).replaceWith('<span>[:' + N + ']</span>');
	                        });
	                    }
	                }
	            }
	            return replaceImage ? _con.text() : con;
	        },
	        config: function config(options) {
	            return $.extend(true, this._config, options);
	        },

	        _config: {
	            themeItems: { //表情主题配置http://cache.soso.com/img/img/e200.gif
	                "default": {
	                    name: '默认表情',
	                    url: '/',
	                    item: { '0': '微笑', '1': '撇嘴', '2': '色', '3': '发呆', '4': '得意', '5': '流泪', '6': '害羞', '7': '闭嘴', '8': '睡', '9': '大哭', '10': '尴尬',
	                        '11': '发怒', '12': '调皮', '13': '龇牙', '14': '惊讶', '15': '难过', '16': '酷', '17': '冷汗', '18': '抓狂', '19': '吐', '20': '偷笑', '21': '可爱',
	                        '22': '白眼', '23': '傲慢', '24': '饥饿', '25': '困', '26': '惊恐', '27': '流汗', '28': '憨笑', '29': '大兵', '30': '奋斗', '31': '咒骂', '32': '疑问',
	                        '33': '嘘', '34': '晕', '35': '折磨', '36': '衰', '37': '骷髅', '38': '敲打', '39': '再见', '40': '擦汗', '41': '抠鼻', '42': '鼓掌', '43': '糗大了',
	                        '44': '坏笑', '45': '左哼哼', '46': '右哼哼', '47': '哈欠', '48': '鄙视', '49': '委屈', '50': '快哭了', '51': '阴险', '52': '亲亲', '53': '吓', '54': '可怜'
	                    },
	                    fix: ".gif"
	                }
	            }
	        }
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {};
	    },
	    getInitialState: function getInitialState() {
	        // var pop = this.props.popover
	        // pop.face = this
	        // console.log(1,this.props.popover)
	        return $.extend(true, {
	            themes: ['default'],
	            faces: []
	        }, this.constructor._config);
	    },
	    componentDidMount: function componentDidMount() {
	        this.loadFace();
	        // this.insertEvent = utils.addEventQueue.call(this, 'onInsert')
	    },
	    loadFace: function loadFace() {
	        var _state = this.state;
	        var themes = _state.themes;
	        var themeItems = _state.themeItems;
	        var faces = _state.faces;

	        themes.forEach(function (f) {
	            var item = themeItems[f];
	            if (item) {
	                item.id = f;
	                faces.push(item);
	            }
	        });
	        this.setState({ init: true, faces: faces });
	    },
	    insertTo: function insertTo(text) {
	        var _props = this.props;
	        var insert = _props.insert;
	        var popover = _props.popover;

	        //将表情插入到光标处

	        var C = new insertOnCursor(insert);
	        C.insertAtCaret(text);
	        insert.focus();

	        var tab = this.refs.tab;
	        var data = {
	            theme: this.state.themes[tab.state.index],
	            text: text,
	            content: Face.replaceFace(text)
	        };
	        var Input = insert[0].$handle; //是否为Input表单组件
	        if (Input) {
	            //setState方法为异步 所以不使用 直接同步赋值
	            Input.state.value = insert.val();
	        }
	        popover.setDisplay(false);
	        popover.insertEvent.complete(data);
	    },
	    render: function render() {
	        var _this = this;

	        var faces = this.state.faces;

	        return React.createElement(
	            'div',
	            null,
	            faces.length && React.createElement(
	                Switch,
	                { ref: 'tab' },
	                React.createElement(
	                    'ul',
	                    { className: 'nj-switch-menus clearfix' },
	                    faces.map(function (item, i) {
	                        return React.createElement(
	                            SwitchMenu,
	                            { key: i },
	                            React.createElement(
	                                'span',
	                                null,
	                                item.name
	                            )
	                        );
	                    })
	                ),
	                faces.map(function (item, i) {
	                    return React.createElement(
	                        SwitchItem,
	                        { key: i },
	                        React.createElement(
	                            'ul',
	                            { className: 'pack clearfix face-' + item.id },
	                            function () {
	                                var imgs = [],
	                                    pack = item.item;
	                                for (var j in pack) {
	                                    imgs.push(React.createElement(
	                                        'li',
	                                        { key: j, onClick: _this.insertTo.bind(_this, '[:' + item.id + '_' + pack[j] + ']') },
	                                        React.createElement('img', { src: item.url + j + item.fix, title: pack[j] })
	                                    ));
	                                }
	                                return imgs;
	                            }()
	                        )
	                    );
	                })
	            )
	        );
	    }
	});

	/*
	 * 在光标处插入内容
	 * @obj:支持光标插入的对象
	 */
	function insertOnCursor(obj) {
	    if (!obj || !obj.length) {
	        return;
	    }
	    this.textBox = obj;
	    this.setCaret();
	}
	insertOnCursor.prototype = {
	    //初始化对象以支持光标处插入内容      
	    setCaret: function setCaret() {
	        if (!document.selection) {
	            return;
	        }
	        var T = this;
	        T.textBox.on('click select keyup', function () {
	            T.textBox[0].caretPos = document.selection.createRange().duplicate();
	        });
	    },
	    //在当前对象光标处插入指定的内容 
	    insertAtCaret: function insertAtCaret(text) {
	        if (!this.textBox || !this.textBox.length) {
	            return;
	        }
	        var textObj = this.textBox[0];

	        if (document.all && textObj.createTextRange && textObj.caretPos) {
	            var caretPos = textObj.caretPos;
	            caretPos.text = caretPos.text.charAt(caretPos.text.length - 1) == '' ? text + '' : text;
	        } else if (textObj.setSelectionRange) {
	            var rangeStart = textObj.selectionStart;
	            var rangeEnd = textObj.selectionEnd;
	            var tempStr1 = textObj.value.substring(0, rangeStart);
	            var tempStr2 = textObj.value.substring(rangeEnd);
	            textObj.value = tempStr1 + text + tempStr2;
	            var len = text.length;
	            textObj.setSelectionRange(rangeStart + len, rangeStart + len);
	        } else {
	            textObj.value += text;
	        }
	    },
	    //清除当前选择内容
	    unselectContents: function unselectContents() {
	        if (window.getSelection) {
	            window.getSelection().removeAllRanges();
	        } else if (document.selection) {
	            document.selection.empty();
	        }
	    },
	    //选中内容 
	    selectContents: function selectContents() {
	        this.textBox.each(function (i) {
	            var node = this;
	            var selection, range, doc, win;
	            if ((doc = node.ownerDocument) && (win = doc.defaultView) && typeof win.getSelection != 'undefined' && typeof doc.createRange != 'undefined' && (selection = window.getSelection()) && typeof selection.removeAllRanges != 'undefined') {
	                range = doc.createRange();
	                range.selectNode(node);
	                if (i == 0) {
	                    selection.removeAllRanges();
	                }
	                selection.addRange(range);
	            } else if (document.body && typeof document.body.createTextRange != 'undefined' && (range = document.body.createTextRange())) {
	                range.moveToElementText(node);
	                range.select();
	            }
	        });
	    }
	};

	module.exports = Face;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * 评论应用 
	 */
	var nj = __webpack_require__(1);
	var React = nj.React;
	var ReactDOM = nj.ReactDOM;

	var thunkMiddleware = __webpack_require__(222).default;
	var createLogger = __webpack_require__(223);

	var _require = __webpack_require__(224);

	var Provider = _require.Provider;

	var _require2 = __webpack_require__(231);

	var createStore = _require2.createStore;
	var applyMiddleware = _require2.applyMiddleware;

	var App = __webpack_require__(246);
	var rootReducer = __webpack_require__(252);

	// const createStoreWithMiddleware = applyMiddleware(
	//   thunkMiddleware, // 允许我们 dispatch() 函数
	//   createLogger //一个很便捷的 middleware，用来打印 action 日志
	// )(createStore)
	// console.log(thunkMiddleware.default)

	// const store = createStoreWithMiddleware(rootReducer)

	module.exports = function (container) {
	    var store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware, createLogger()));

	    // store.subscribe(()=>{
	    //     console.log(store.getState())
	    // })

	    var app = ReactDOM.render(React.createElement(
	        Provider,
	        { store: store },
	        React.createElement(App, null)
	    ), document.getElementById('appDemo'));
	};

/***/ },
/* 222 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = thunkMiddleware;
	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;

	  return function (next) {
	    return function (action) {
	      if (typeof action === 'function') {
	        return action(dispatch, getState);
	      }

	      return next(action);
	    };
	  };
	}

/***/ },
/* 223 */
/***/ function(module, exports) {

	"use strict";

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	var repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	var pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};
	var formatTime = function formatTime(time) {
	  return "@ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};

	// Use the new performance api to get better precision if available
	var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;

	/**
	 * parse the level option of createLogger
	 *
	 * @property {string | function | object} level - console[level]
	 * @property {object} action
	 * @property {array} payload
	 * @property {string} type
	 */

	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === "undefined" ? "undefined" : _typeof(level)) {
	    case "object":
	      return typeof level[type] === "function" ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case "function":
	      return level(action);
	    default:
	      return level;
	  }
	}

	/**
	 * Creates logger with followed options
	 *
	 * @namespace
	 * @property {object} options - options for logger
	 * @property {string | function | object} options.level - console[level]
	 * @property {boolean} options.duration - print duration of each action?
	 * @property {boolean} options.timestamp - print timestamp with each action?
	 * @property {object} options.colors - custom colors
	 * @property {object} options.logger - implementation of the `console` API
	 * @property {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @property {boolean} options.collapsed - is group collapsed?
	 * @property {boolean} options.predicate - condition which resolves logger behavior
	 * @property {function} options.stateTransformer - transform state before print
	 * @property {function} options.actionTransformer - transform action before print
	 * @property {function} options.errorTransformer - transform error before print
	 */

	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _options$level = options.level;
	  var level = _options$level === undefined ? "log" : _options$level;
	  var _options$logger = options.logger;
	  var logger = _options$logger === undefined ? console : _options$logger;
	  var _options$logErrors = options.logErrors;
	  var logErrors = _options$logErrors === undefined ? true : _options$logErrors;
	  var collapsed = options.collapsed;
	  var predicate = options.predicate;
	  var _options$duration = options.duration;
	  var duration = _options$duration === undefined ? false : _options$duration;
	  var _options$timestamp = options.timestamp;
	  var timestamp = _options$timestamp === undefined ? true : _options$timestamp;
	  var transformer = options.transformer;
	  var _options$stateTransfo = options.stateTransformer;
	  var // deprecated
	  stateTransformer = _options$stateTransfo === undefined ? function (state) {
	    return state;
	  } : _options$stateTransfo;
	  var _options$actionTransf = options.actionTransformer;
	  var actionTransformer = _options$actionTransf === undefined ? function (actn) {
	    return actn;
	  } : _options$actionTransf;
	  var _options$errorTransfo = options.errorTransformer;
	  var errorTransformer = _options$errorTransfo === undefined ? function (error) {
	    return error;
	  } : _options$errorTransfo;
	  var _options$colors = options.colors;
	  var colors = _options$colors === undefined ? {
	    title: function title() {
	      return "#000000";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  } : _options$colors;

	  // exit if console undefined

	  if (typeof logger === "undefined") {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }

	  if (transformer) {
	    console.error("Option 'transformer' is deprecated, use stateTransformer instead");
	  }

	  var logBuffer = [];
	  function printBuffer() {
	    logBuffer.forEach(function (logEntry, key) {
	      var started = logEntry.started;
	      var startedTime = logEntry.startedTime;
	      var action = logEntry.action;
	      var prevState = logEntry.prevState;
	      var error = logEntry.error;
	      var took = logEntry.took;
	      var nextState = logEntry.nextState;

	      var nextEntry = logBuffer[key + 1];
	      if (nextEntry) {
	        nextState = nextEntry.prevState;
	        took = nextEntry.started - started;
	      }
	      // message
	      var formattedAction = actionTransformer(action);
	      var isCollapsed = typeof collapsed === "function" ? collapsed(function () {
	        return nextState;
	      }, action) : collapsed;

	      var formattedTime = formatTime(startedTime);
	      var titleCSS = colors.title ? "color: " + colors.title(formattedAction) + ";" : null;
	      var title = "action " + (timestamp ? formattedTime : "") + " " + formattedAction.type + " " + (duration ? "(in " + took.toFixed(2) + " ms)" : "");

	      // render
	      try {
	        if (isCollapsed) {
	          if (colors.title) logger.groupCollapsed("%c " + title, titleCSS);else logger.groupCollapsed(title);
	        } else {
	          if (colors.title) logger.group("%c " + title, titleCSS);else logger.group(title);
	        }
	      } catch (e) {
	        logger.log(title);
	      }

	      var prevStateLevel = getLogLevel(level, formattedAction, [prevState], "prevState");
	      var actionLevel = getLogLevel(level, formattedAction, [formattedAction], "action");
	      var errorLevel = getLogLevel(level, formattedAction, [error, prevState], "error");
	      var nextStateLevel = getLogLevel(level, formattedAction, [nextState], "nextState");

	      if (prevStateLevel) {
	        if (colors.prevState) logger[prevStateLevel]("%c prev state", "color: " + colors.prevState(prevState) + "; font-weight: bold", prevState);else logger[prevStateLevel]("prev state", prevState);
	      }

	      if (actionLevel) {
	        if (colors.action) logger[actionLevel]("%c action", "color: " + colors.action(formattedAction) + "; font-weight: bold", formattedAction);else logger[actionLevel]("action", formattedAction);
	      }

	      if (error && errorLevel) {
	        if (colors.error) logger[errorLevel]("%c error", "color: " + colors.error(error, prevState) + "; font-weight: bold", error);else logger[errorLevel]("error", error);
	      }

	      if (nextStateLevel) {
	        if (colors.nextState) logger[nextStateLevel]("%c next state", "color: " + colors.nextState(nextState) + "; font-weight: bold", nextState);else logger[nextStateLevel]("next state", nextState);
	      }

	      try {
	        logger.groupEnd();
	      } catch (e) {
	        logger.log("—— log end ——");
	      }
	    });
	    logBuffer.length = 0;
	  }

	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // exit early if predicate function returns false
	        if (typeof predicate === "function" && !predicate(getState, action)) {
	          return next(action);
	        }

	        var logEntry = {};
	        logBuffer.push(logEntry);

	        logEntry.started = timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;

	        var returnedValue = undefined;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }

	        logEntry.took = timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());

	        printBuffer();

	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}

	module.exports = createLogger;

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(225);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(228);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(226);

	var _storeShape = __webpack_require__(227);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/rackt/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	  }
	  /* eslint-disable no-console */
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;

	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(12);


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(226);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports["default"] = connect;

	var _react = __webpack_require__(226);

	var _storeShape = __webpack_require__(227);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(229);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(230);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _isPlainObject = __webpack_require__(241);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(244);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(245);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	function checkStateShape(stateProps, dispatch) {
	  (0, _invariant2["default"])((0, _isPlainObject2["default"])(stateProps), '`%sToProps` must return an object. Instead received %s.', dispatch ? 'mapDispatch' : 'mapState', stateProps);
	  return stateProps;
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;
	  var mapDispatch = (0, _isPlainObject2["default"])(mapDispatchToProps) ? (0, _wrapActionCreators2["default"])(mapDispatchToProps) : mapDispatchToProps || defaultMapDispatchToProps;

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var checkMergedEquals = finalMergeProps !== defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  // Helps track hot reloading.

	  var version = nextVersion++;

	  function computeMergedProps(stateProps, dispatchProps, parentProps) {
	    var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	    (0, _invariant2["default"])((0, _isPlainObject2["default"])(mergedProps), '`mergeProps` must return an object. Instead received %s.', mergedProps);
	    return mergedProps;
	  }

	  return function wrapWithConnect(WrappedComponent) {
	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + _this.constructor.displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + _this.constructor.displayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        return checkStateShape(stateProps);
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        return isFactory ? this.computeStateProps(store, props) : checkStateShape(mappedState);
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        return checkStateShape(dispatchProps, true);
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        return isFactory ? this.computeDispatchProps(store, props) : checkStateShape(mappedDispatch, true);
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var prevStoreState = this.state.storeState;
	        var storeState = this.store.getState();

	        if (!pure || prevStoreState !== storeState) {
	          this.hasStoreStateChanged = true;
	          this.setState({ storeState: storeState });
	        }
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 229 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(231);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(232);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(236);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(238);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(239);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(240);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(237);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;

	var _isPlainObject = __webpack_require__(233);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, initialState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all states changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  };
	}

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var isHostObject = __webpack_require__(234),
	    isObjectLike = __webpack_require__(235);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototypeOf(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 234 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 235 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = combineReducers;

	var _createStore = __webpack_require__(232);

	var _isPlainObject = __webpack_require__(233);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(237);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Reducer "' + key + '" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 237 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 238 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports["default"] = applyMiddleware;

	var _compose = __webpack_require__(240);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 240 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing functions from right to
	 * left. For example, compose(f, g, h) is identical to arg => f(g(h(arg))).
	 */
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return function () {
	    if (funcs.length === 0) {
	      return arguments.length <= 0 ? undefined : arguments[0];
	    }

	    var last = funcs[funcs.length - 1];
	    var rest = funcs.slice(0, -1);

	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	var isHostObject = __webpack_require__(242),
	    isObjectLike = __webpack_require__(243);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototypeOf(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 242 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 243 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 244 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    var keys = Object.getOwnPropertyNames(sourceComponent);
	    for (var i=0; i<keys.length; ++i) {
	        if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	            try {
	                targetComponent[keys[i]] = sourceComponent[keys[i]];
	            } catch (error) {

	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Components
	 * App
	 */
	var nj = __webpack_require__(1);
	var React = nj.React;
	var ReactDOM = nj.ReactDOM;

	var _require = __webpack_require__(224);

	var connect = _require.connect;

	var AddComment = __webpack_require__(247);
	var CommentList = __webpack_require__(248);

	var _require2 = __webpack_require__(249);

	var addComment = _require2.addComment;

	var fetch = __webpack_require__(250);

	var App = React.createClass({
	    displayName: 'App',
	    render: function render() {
	        var _props = this.props;
	        var comments = _props.comments;
	        var dispatch = _props.dispatch;

	        return React.createElement(
	            'div',
	            null,
	            React.createElement(AddComment, { onAddClick: function onAddClick(text) {
	                    return dispatch(addComment(text));
	                } }),
	            React.createElement(CommentList, { data: comments })
	        );
	    }
	});
	function select(state, ownProps) {
	    return {
	        comments: state.comments
	    };
	}
	module.exports = connect(select)(App);

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Components
	 * add comment
	 */
	var nj = __webpack_require__(1);
	var React = nj.React;
	var ReactDOM = nj.ReactDOM;
	var PropTypes = React.PropTypes;

	var AddComment = module.exports = React.createClass({
	    displayName: 'exports',
	    handleSubmit: function handleSubmit(e) {
	        var input = this.refs.input;
	        var text = input.value.trim();

	        e.preventDefault();
	        if (!text) {
	            return;
	        }
	        this.props.onAddClick(text);
	        input.value = '';
	    },
	    render: function render() {
	        return React.createElement(
	            'form',
	            { onSubmit: this.handleSubmit },
	            React.createElement('textarea', { ref: 'input' }),
	            React.createElement(
	                'button',
	                { type: 'submit' },
	                '发布'
	            )
	        );
	    }
	});

	AddComment.propTypes = {
	    onAddClick: PropTypes.func.isRequired
	};

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Components
	 * comment list
	 */
	var nj = __webpack_require__(1);
	var React = nj.React;
	var ReactDOM = nj.ReactDOM;

	module.exports = React.createClass({
	    displayName: 'exports',
	    render: function render() {
	        var data = this.props.data;

	        var _data = [].concat(data).reverse();
	        return React.createElement(
	            'ul',
	            null,
	            _data.map(function (item, i) {
	                return React.createElement(
	                    'li',
	                    { key: item.comment || i },
	                    item.comment
	                );
	            })
	        );
	    }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * actions
	 */
	var fetch = __webpack_require__(250);

	var ADD_COMMENT = exports.ADD_COMMENT = 'ADD_COMMENT';
	// const ADD_COMMENT = exports.ADD_COMMENT = 'ADD_COMMENT'

	var REQUEST_POSTS = exports.REQUEST_POSTS = 'REQUEST_POSTS';
	var RECEIVE_POSTS = exports.RECEIVE_POSTS = 'RECEIVE_POSTS';
	var SELECT_REDDIT = exports.SELECT_REDDIT = 'SELECT_REDDIT';

	function receivePosts(reddit, json) {
	  return {
	    type: RECEIVE_POSTS,
	    reddit: reddit,
	    posts: json,
	    receivedAt: Date.now()
	  };
	}
	function requestPosts(reddit) {
	  return {
	    type: REQUEST_POSTS,
	    reddit: reddit
	  };
	}
	function fetchPosts(reddit) {
	  return function (dispatch) {
	    dispatch(requestPosts(reddit));
	    return fetch('https://www.reddit.com/r/${reddit}.json').then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      return dispatch(receivePosts(reddit, json));
	    });
	  };
	}
	function shouldFetchPosts(state, reddit) {
	  var posts = state.postsByReddit[reddit];
	  if (!posts) {
	    return true;
	  }
	  if (posts.isFetching) {
	    return false;
	  }
	  return posts.didInvalidate;
	}
	exports.addComment = function (reddit) {
	  return function (dispatch, getState) {
	    // if (shouldFetchPosts(getState(), reddit)) {

	    // }
	    return dispatch(fetchPosts(reddit));
	  };
	  return {
	    type: ADD_COMMENT,
	    comment: text
	  };
	};

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(251);
	module.exports = self.fetch.bind(self);


/***/ },
/* 251 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }

	  function Headers(headers) {
	    this.map = {}

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)

	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }

	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }

	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }

	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob();
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }

	  function Body() {
	    this.bodyUsed = false


	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (!body) {
	        this._bodyText = ''
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        }
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }

	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this)
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }

	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }

	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  }

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }

	      var xhr = new XMLHttpRequest()

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }

	        return;
	      }

	      xhr.onload = function() {
	        var status = (xhr.status === 1223) ? 204 : xhr.status
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'))
	          return
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(request.method, request.url, true)

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * reducers
	 */

	var _require = __webpack_require__(231);

	var combineReducers = _require.combineReducers;

	var comments = __webpack_require__(253);

	module.exports = combineReducers({
	  comments: comments
	});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * reducers comments
	 */

	var _require = __webpack_require__(249);

	var ADD_COMMENT = _require.ADD_COMMENT;
	var REQUEST_POSTS = _require.REQUEST_POSTS;
	var RECEIVE_POSTS = _require.RECEIVE_POSTS;

	function posts() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {
	    isFetching: false,
	    items: []
	  } : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case REQUEST_POSTS:
	      return Object.assign({}, state, { isFetching: true, items: [] });
	    case RECEIVE_POSTS:
	      return Object.assign({}, state, { isFetching: false, items: action.photos });
	    default:
	      return state;
	  }
	}

	// module.exports = (state={isFetching:false,items:[]}, action) => {
	//     switch (action.type) {
	//     case RECEIVE_POSTS:
	//     case REQUEST_POSTS:
	//       return Object.assign({}, state, posts(state, action))
	//     default:
	//       return state
	//   }
	// }

	module.exports = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case RECEIVE_POSTS:
	    case REQUEST_POSTS:
	      return Object.assign({}, state, posts(state, action));
	    case ADD_COMMENT:
	      var newState = state.concat([{ comment: action.comment }]);
	      return newState;
	    default:
	      return state;
	  }
	};

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * 照片搜索应用 
	 */
	var nj = __webpack_require__(1);
	var React = nj.React;
	var ReactDOM = nj.ReactDOM;

	var thunkMiddleware = __webpack_require__(222).default;
	var createLogger = __webpack_require__(223);

	var _require = __webpack_require__(224);

	var Provider = _require.Provider;

	var _require2 = __webpack_require__(231);

	var createStore = _require2.createStore;
	var applyMiddleware = _require2.applyMiddleware;

	var App = __webpack_require__(255);
	var rootReducer = __webpack_require__(258);

	module.exports = function (container) {
	    var store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware, createLogger()));

	    ReactDOM.render(React.createElement(
	        Provider,
	        { store: store },
	        React.createElement(App, null)
	    ), document.getElementById('appDemo'));
	};

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Components
	 * App
	 */
	var nj = __webpack_require__(1);
	var React = nj.React;
	var ReactDOM = nj.ReactDOM;

	var _require = __webpack_require__(224);

	var connect = _require.connect;

	var SearchPhoto = __webpack_require__(256);

	var _require2 = __webpack_require__(257);

	var searchPhoto = _require2.searchPhoto;

	var fetch = __webpack_require__(250);

	var App = React.createClass({
	    displayName: 'App',
	    getInitialState: function getInitialState() {
	        return {};
	    },
	    handleChoose: function handleChoose(e) {
	        var photo = e.target.src;
	        this.setState({ selected: photo.replace(/_n/, '_b') });
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({ selected: null });
	    },
	    render: function render() {
	        var _this = this;

	        var _props = this.props;
	        var dispatch = _props.dispatch;
	        var photos = _props.photos;
	        var selected = this.state.selected;

	        return React.createElement(
	            'div',
	            null,
	            React.createElement(SearchPhoto, { onSearch: function onSearch(text) {
	                    return dispatch(searchPhoto(text));
	                } }),
	            photos.isFetching ? React.createElement(
	                'div',
	                null,
	                'loading……'
	            ) : null,
	            photos.items.map(function (photo) {
	                return React.createElement(
	                    'span',
	                    { key: photo.id },
	                    React.createElement('img', { onClick: _this.handleChoose, src: '//c1.staticflickr.com/' + photo.farm + '/' + photo.server + '/' + photo.id + '_' + photo.secret + '_n.jpg', width: '70', height: '70' })
	                );
	            }),
	            selected && React.createElement(
	                'div',
	                null,
	                React.createElement('img', { src: selected, style: { maxHeight: 700, maxWidth: 800 } })
	            )
	        );
	    }
	});
	function select(state) {
	    return {
	        photos: state.photos
	    };
	}
	module.exports = connect(select)(App);

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Components
	 * add comment
	 */
	var nj = __webpack_require__(1);
	var React = nj.React;
	var ReactDOM = nj.ReactDOM;
	var PropTypes = React.PropTypes;

	var SearchPhoto = module.exports = React.createClass({
	    displayName: 'exports',
	    handleSubmit: function handleSubmit(e) {
	        var input = this.refs.input;
	        var text = input.value.trim();

	        e.preventDefault();
	        if (!text) {
	            return;
	        }
	        this.props.onSearch(text);
	        input.value = '';
	    },
	    render: function render() {
	        return React.createElement(
	            'form',
	            { onSubmit: this.handleSubmit },
	            React.createElement('input', { ref: 'input' }),
	            React.createElement(
	                'button',
	                { type: 'submit' },
	                '搜索'
	            )
	        );
	    }
	});
	SearchPhoto.propTypes = {
	    onSearch: PropTypes.func.isRequired
	};

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * actions
	 */
	var fetch = __webpack_require__(250);

	var SEARCH_PHOTO = exports.SEARCH_PHOTO = 'SEARCH_PHOTO';

	var REQUEST_POSTS = exports.REQUEST_POSTS = 'REQUEST_POSTS';
	var RECEIVE_POSTS = exports.RECEIVE_POSTS = 'RECEIVE_POSTS';

	function receivePosts(reddit, photos) {
	  return {
	    type: RECEIVE_POSTS,
	    reddit: reddit,
	    photos: photos,
	    receivedAt: Date.now()
	  };
	}
	function requestPosts(reddit) {
	  return {
	    type: REQUEST_POSTS,
	    reddit: reddit
	  };
	}
	function fetchPosts(reddit) {
	  return function (dispatch) {
	    dispatch(requestPosts(reddit));
	    var params = ['tags=' + reddit, 'per_page=40', 'method=flickr.photos.search', 'api_key=00697263c9f5a9bd01e33119cdeb52ca', 'format=json', 'nojsoncallback=1'];
	    return fetch('https://api.flickr.com/services/rest/?' + params.join('&')).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      var photos = json.photos.photo;
	      dispatch(receivePosts(reddit, photos));
	      // this.setState({photos:photos})
	    });
	    // return fetch('https://www.reddit.com/r/${reddit}.json')
	    //   .then(response => response.json())
	    //   .then(json => dispatch(receivePosts(reddit, json)))
	  };
	}

	exports.searchPhoto = function (reddit) {
	  return function (dispatch, getState) {
	    return dispatch(fetchPosts(reddit));
	  };
	};

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * reducers
	 */

	var _require = __webpack_require__(231);

	var combineReducers = _require.combineReducers;

	var photos = __webpack_require__(259);

	module.exports = combineReducers({
	  photos: photos
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * reducers comments
	 */

	var _require = __webpack_require__(257);

	var REQUEST_POSTS = _require.REQUEST_POSTS;
	var RECEIVE_POSTS = _require.RECEIVE_POSTS;

	function posts() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {
	    isFetching: false,
	    items: []
	  } : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case REQUEST_POSTS:
	      return Object.assign({}, state, { isFetching: true, items: [] });
	    case RECEIVE_POSTS:
	      return Object.assign({}, state, { isFetching: false, items: action.photos });
	    default:
	      return state;
	  }
	}

	module.exports = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { isFetching: false, items: [] } : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case RECEIVE_POSTS:
	    case REQUEST_POSTS:
	      return Object.assign({}, state, posts(state, action));
	    default:
	      return state;
	  }
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, Buffer) {(function(){var define=null;!function(e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.eio=e()}}(function(){var e;return function t(e,r,n){function o(i,a){if(!r[i]){if(!e[i]){var c="function"==typeof require&&require;if(!a&&c)return require(i,!0);if(s)return s(i,!0);var p=new Error("Cannot find module '"+i+"'");throw p.code="MODULE_NOT_FOUND",p}var u=r[i]={exports:{}};e[i][0].call(u.exports,function(t){var r=e[i][1][t];return o(r?r:t)},u,u.exports,t,e,r,n)}return r[i].exports}for(var s="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){t.exports=e("./lib/")},{"./lib/":2}],2:[function(e,t,r){t.exports=e("./socket"),t.exports.parser=e("engine.io-parser")},{"./socket":3,"engine.io-parser":20}],3:[function(e,t,r){(function(r){function n(e,t){if(!(this instanceof n))return new n(e,t);t=t||{},e&&"object"==typeof e&&(t=e,e=null),e?(e=u(e),t.hostname=e.host,t.secure="https"==e.protocol||"wss"==e.protocol,t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=u(t.host).host),this.secure=null!=t.secure?t.secure:r.location&&"https:"==location.protocol,t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.agent=t.agent||!1,this.hostname=t.hostname||(r.location?location.hostname:"localhost"),this.port=t.port||(r.location&&location.port?location.port:this.secure?443:80),this.query=t.query||{},"string"==typeof this.query&&(this.query=f.decode(this.query)),this.upgrade=!1!==t.upgrade,this.path=(t.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!t.forceJSONP,this.jsonp=!1!==t.jsonp,this.forceBase64=!!t.forceBase64,this.enablesXDR=!!t.enablesXDR,this.timestampParam=t.timestampParam||"t",this.timestampRequests=t.timestampRequests,this.transports=t.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.policyPort=t.policyPort||843,this.rememberUpgrade=t.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=t.onlyBinaryUpgrades,this.perMessageDeflate=!1!==t.perMessageDeflate?t.perMessageDeflate||{}:!1,!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=t.pfx||null,this.key=t.key||null,this.passphrase=t.passphrase||null,this.cert=t.cert||null,this.ca=t.ca||null,this.ciphers=t.ciphers||null,this.rejectUnauthorized=void 0===t.rejectUnauthorized?!0:t.rejectUnauthorized;var o="object"==typeof r&&r;o.global===o&&t.extraHeaders&&Object.keys(t.extraHeaders).length>0&&(this.extraHeaders=t.extraHeaders),this.open()}function o(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t}var s=e("./transports"),i=e("component-emitter"),a=e("debug")("engine.io-client:socket"),c=e("indexof"),p=e("engine.io-parser"),u=e("parseuri"),h=e("parsejson"),f=e("parseqs");t.exports=n,n.priorWebsocketSuccess=!1,i(n.prototype),n.protocol=p.protocol,n.Socket=n,n.Transport=e("./transport"),n.transports=e("./transports"),n.parser=e("engine.io-parser"),n.prototype.createTransport=function(e){a('creating transport "%s"',e);var t=o(this.query);t.EIO=p.protocol,t.transport=e,this.id&&(t.sid=this.id);var r=new s[e]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:t,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders});return r},n.prototype.open=function(){var e;if(this.rememberUpgrade&&n.priorWebsocketSuccess&&-1!=this.transports.indexOf("websocket"))e="websocket";else{if(0===this.transports.length){var t=this;return void setTimeout(function(){t.emit("error","No transports available")},0)}e=this.transports[0]}this.readyState="opening";try{e=this.createTransport(e)}catch(r){return this.transports.shift(),void this.open()}e.open(),this.setTransport(e)},n.prototype.setTransport=function(e){a("setting transport %s",e.name);var t=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=e,e.on("drain",function(){t.onDrain()}).on("packet",function(e){t.onPacket(e)}).on("error",function(e){t.onError(e)}).on("close",function(){t.onClose("transport close")})},n.prototype.probe=function(e){function t(){if(f.onlyBinaryUpgrades){var t=!this.supportsBinary&&f.transport.supportsBinary;h=h||t}h||(a('probe transport "%s" opened',e),u.send([{type:"ping",data:"probe"}]),u.once("packet",function(t){if(!h)if("pong"==t.type&&"probe"==t.data){if(a('probe transport "%s" pong',e),f.upgrading=!0,f.emit("upgrading",u),!u)return;n.priorWebsocketSuccess="websocket"==u.name,a('pausing current transport "%s"',f.transport.name),f.transport.pause(function(){h||"closed"!=f.readyState&&(a("changing transport and sending upgrade packet"),p(),f.setTransport(u),u.send([{type:"upgrade"}]),f.emit("upgrade",u),u=null,f.upgrading=!1,f.flush())})}else{a('probe transport "%s" failed',e);var r=new Error("probe error");r.transport=u.name,f.emit("upgradeError",r)}}))}function r(){h||(h=!0,p(),u.close(),u=null)}function o(t){var n=new Error("probe error: "+t);n.transport=u.name,r(),a('probe transport "%s" failed because of error: %s',e,t),f.emit("upgradeError",n)}function s(){o("transport closed")}function i(){o("socket closed")}function c(e){u&&e.name!=u.name&&(a('"%s" works - aborting "%s"',e.name,u.name),r())}function p(){u.removeListener("open",t),u.removeListener("error",o),u.removeListener("close",s),f.removeListener("close",i),f.removeListener("upgrading",c)}a('probing transport "%s"',e);var u=this.createTransport(e,{probe:1}),h=!1,f=this;n.priorWebsocketSuccess=!1,u.once("open",t),u.once("error",o),u.once("close",s),this.once("close",i),this.once("upgrading",c),u.open()},n.prototype.onOpen=function(){if(a("socket open"),this.readyState="open",n.priorWebsocketSuccess="websocket"==this.transport.name,this.emit("open"),this.flush(),"open"==this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var e=0,t=this.upgrades.length;t>e;e++)this.probe(this.upgrades[e])}},n.prototype.onPacket=function(e){if("opening"==this.readyState||"open"==this.readyState)switch(a('socket receive: type "%s", data "%s"',e.type,e.data),this.emit("packet",e),this.emit("heartbeat"),e.type){case"open":this.onHandshake(h(e.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emit("data",e.data),this.emit("message",e.data)}else a('packet received with socket readyState "%s"',this.readyState)},n.prototype.onHandshake=function(e){this.emit("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.onOpen(),"closed"!=this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},n.prototype.onHeartbeat=function(e){clearTimeout(this.pingTimeoutTimer);var t=this;t.pingTimeoutTimer=setTimeout(function(){"closed"!=t.readyState&&t.onClose("ping timeout")},e||t.pingInterval+t.pingTimeout)},n.prototype.setPing=function(){var e=this;clearTimeout(e.pingIntervalTimer),e.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",e.pingTimeout),e.ping(),e.onHeartbeat(e.pingTimeout)},e.pingInterval)},n.prototype.ping=function(){var e=this;this.sendPacket("ping",function(){e.emit("ping")})},n.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},n.prototype.flush=function(){"closed"!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},n.prototype.write=n.prototype.send=function(e,t,r){return this.sendPacket("message",e,t,r),this},n.prototype.sendPacket=function(e,t,r,n){if("function"==typeof t&&(n=t,t=void 0),"function"==typeof r&&(n=r,r=null),"closing"!=this.readyState&&"closed"!=this.readyState){r=r||{},r.compress=!1!==r.compress;var o={type:e,data:t,options:r};this.emit("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}},n.prototype.close=function(){function e(){n.onClose("forced close"),a("socket closing - telling transport to close"),n.transport.close()}function t(){n.removeListener("upgrade",t),n.removeListener("upgradeError",t),e()}function r(){n.once("upgrade",t),n.once("upgradeError",t)}if("opening"==this.readyState||"open"==this.readyState){this.readyState="closing";var n=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?r():e()}):this.upgrading?r():e()}return this},n.prototype.onError=function(e){a("socket error %j",e),n.priorWebsocketSuccess=!1,this.emit("error",e),this.onClose("transport error",e)},n.prototype.onClose=function(e,t){if("opening"==this.readyState||"open"==this.readyState||"closing"==this.readyState){a('socket close with reason: "%s"',e);var r=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",e,t),r.writeBuffer=[],r.prevBufferLen=0}},n.prototype.filterUpgrades=function(e){for(var t=[],r=0,n=e.length;n>r;r++)~c(this.transports,e[r])&&t.push(e[r]);return t}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./transport":4,"./transports":5,"component-emitter":16,debug:18,"engine.io-parser":20,indexof:24,parsejson:27,parseqs:28,parseuri:29}],4:[function(e,t,r){function n(e){this.path=e.path,this.hostname=e.hostname,this.port=e.port,this.secure=e.secure,this.query=e.query,this.timestampParam=e.timestampParam,this.timestampRequests=e.timestampRequests,this.readyState="",this.agent=e.agent||!1,this.socket=e.socket,this.enablesXDR=e.enablesXDR,this.pfx=e.pfx,this.key=e.key,this.passphrase=e.passphrase,this.cert=e.cert,this.ca=e.ca,this.ciphers=e.ciphers,this.rejectUnauthorized=e.rejectUnauthorized,this.extraHeaders=e.extraHeaders}var o=e("engine.io-parser"),s=e("component-emitter");t.exports=n,s(n.prototype),n.prototype.onError=function(e,t){var r=new Error(e);return r.type="TransportError",r.description=t,this.emit("error",r),this},n.prototype.open=function(){return("closed"==this.readyState||""==this.readyState)&&(this.readyState="opening",this.doOpen()),this},n.prototype.close=function(){return("opening"==this.readyState||"open"==this.readyState)&&(this.doClose(),this.onClose()),this},n.prototype.send=function(e){if("open"!=this.readyState)throw new Error("Transport not open");this.write(e)},n.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},n.prototype.onData=function(e){var t=o.decodePacket(e,this.socket.binaryType);this.onPacket(t)},n.prototype.onPacket=function(e){this.emit("packet",e)},n.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},{"component-emitter":16,"engine.io-parser":20}],5:[function(e,t,r){(function(t){function n(e){var r,n=!1,a=!1,c=!1!==e.jsonp;if(t.location){var p="https:"==location.protocol,u=location.port;u||(u=p?443:80),n=e.hostname!=location.hostname||u!=e.port,a=e.secure!=p}if(e.xdomain=n,e.xscheme=a,r=new o(e),"open"in r&&!e.forceJSONP)return new s(e);if(!c)throw new Error("JSONP disabled");return new i(e)}var o=e("xmlhttprequest-ssl"),s=e("./polling-xhr"),i=e("./polling-jsonp"),a=e("./websocket");r.polling=n,r.websocket=a}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./polling-jsonp":6,"./polling-xhr":7,"./websocket":9,"xmlhttprequest-ssl":10}],6:[function(e,t,r){(function(r){function n(){}function o(e){s.call(this,e),this.query=this.query||{},a||(r.___eio||(r.___eio=[]),a=r.___eio),this.index=a.length;var t=this;a.push(function(e){t.onData(e)}),this.query.j=this.index,r.document&&r.addEventListener&&r.addEventListener("beforeunload",function(){t.script&&(t.script.onerror=n)},!1)}var s=e("./polling"),i=e("component-inherit");t.exports=o;var a,c=/\n/g,p=/\\n/g;i(o,s),o.prototype.supportsBinary=!1,o.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),s.prototype.doClose.call(this)},o.prototype.doPoll=function(){var e=this,t=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),t.async=!0,t.src=this.uri(),t.onerror=function(t){e.onError("jsonp poll error",t)};var r=document.getElementsByTagName("script")[0];r?r.parentNode.insertBefore(t,r):(document.head||document.body).appendChild(t),this.script=t;var n="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);n&&setTimeout(function(){var e=document.createElement("iframe");document.body.appendChild(e),document.body.removeChild(e)},100)},o.prototype.doWrite=function(e,t){function r(){n(),t()}function n(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(e){o.onError("jsonp polling iframe removal error",e)}try{var t='<iframe src="javascript:0" name="'+o.iframeId+'">';s=document.createElement(t)}catch(e){s=document.createElement("iframe"),s.name=o.iframeId,s.src="javascript:0"}s.id=o.iframeId,o.form.appendChild(s),o.iframe=s}var o=this;if(!this.form){var s,i=document.createElement("form"),a=document.createElement("textarea"),u=this.iframeId="eio_iframe_"+this.index;i.className="socketio",i.style.position="absolute",i.style.top="-1000px",i.style.left="-1000px",i.target=u,i.method="POST",i.setAttribute("accept-charset","utf-8"),a.name="d",i.appendChild(a),document.body.appendChild(i),this.form=i,this.area=a}this.form.action=this.uri(),n(),e=e.replace(p,"\\\n"),this.area.value=e.replace(c,"\\n");try{this.form.submit()}catch(h){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"==o.iframe.readyState&&r()}:this.iframe.onload=r}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./polling":8,"component-inherit":17}],7:[function(e,t,r){(function(r){function n(){}function o(e){if(c.call(this,e),r.location){var t="https:"==location.protocol,n=location.port;n||(n=t?443:80),this.xd=e.hostname!=r.location.hostname||n!=e.port,this.xs=e.secure!=t}else this.extraHeaders=e.extraHeaders}function s(e){this.method=e.method||"GET",this.uri=e.uri,this.xd=!!e.xd,this.xs=!!e.xs,this.async=!1!==e.async,this.data=void 0!=e.data?e.data:null,this.agent=e.agent,this.isBinary=e.isBinary,this.supportsBinary=e.supportsBinary,this.enablesXDR=e.enablesXDR,this.pfx=e.pfx,this.key=e.key,this.passphrase=e.passphrase,this.cert=e.cert,this.ca=e.ca,this.ciphers=e.ciphers,this.rejectUnauthorized=e.rejectUnauthorized,this.extraHeaders=e.extraHeaders,this.create()}function i(){for(var e in s.requests)s.requests.hasOwnProperty(e)&&s.requests[e].abort()}var a=e("xmlhttprequest-ssl"),c=e("./polling"),p=e("component-emitter"),u=e("component-inherit"),h=e("debug")("engine.io-client:polling-xhr");t.exports=o,t.exports.Request=s,u(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(e){return e=e||{},e.uri=this.uri(),e.xd=this.xd,e.xs=this.xs,e.agent=this.agent||!1,e.supportsBinary=this.supportsBinary,e.enablesXDR=this.enablesXDR,e.pfx=this.pfx,e.key=this.key,e.passphrase=this.passphrase,e.cert=this.cert,e.ca=this.ca,e.ciphers=this.ciphers,e.rejectUnauthorized=this.rejectUnauthorized,e.extraHeaders=this.extraHeaders,new s(e)},o.prototype.doWrite=function(e,t){var r="string"!=typeof e&&void 0!==e,n=this.request({method:"POST",data:e,isBinary:r}),o=this;n.on("success",t),n.on("error",function(e){o.onError("xhr post error",e)}),this.sendXhr=n},o.prototype.doPoll=function(){h("xhr poll");var e=this.request(),t=this;e.on("data",function(e){t.onData(e)}),e.on("error",function(e){t.onError("xhr poll error",e)}),this.pollXhr=e},p(s.prototype),s.prototype.create=function(){var e={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};e.pfx=this.pfx,e.key=this.key,e.passphrase=this.passphrase,e.cert=this.cert,e.ca=this.ca,e.ciphers=this.ciphers,e.rejectUnauthorized=this.rejectUnauthorized;var t=this.xhr=new a(e),n=this;try{h("xhr open %s: %s",this.method,this.uri),t.open(this.method,this.uri,this.async);try{if(this.extraHeaders){t.setDisableHeaderCheck(!0);for(var o in this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&&t.setRequestHeader(o,this.extraHeaders[o])}}catch(i){}if(this.supportsBinary&&(t.responseType="arraybuffer"),"POST"==this.method)try{this.isBinary?t.setRequestHeader("Content-type","application/octet-stream"):t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(i){}"withCredentials"in t&&(t.withCredentials=!0),this.hasXDR()?(t.onload=function(){n.onLoad()},t.onerror=function(){n.onError(t.responseText)}):t.onreadystatechange=function(){4==t.readyState&&(200==t.status||1223==t.status?n.onLoad():setTimeout(function(){n.onError(t.status)},0))},h("xhr data %s",this.data),t.send(this.data)}catch(i){return void setTimeout(function(){n.onError(i)},0)}r.document&&(this.index=s.requestsCount++,s.requests[this.index]=this)},s.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},s.prototype.onData=function(e){this.emit("data",e),this.onSuccess()},s.prototype.onError=function(e){this.emit("error",e),this.cleanup(!0)},s.prototype.cleanup=function(e){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=n:this.xhr.onreadystatechange=n,e)try{this.xhr.abort()}catch(t){}r.document&&delete s.requests[this.index],this.xhr=null}},s.prototype.onLoad=function(){var e;try{var t;try{t=this.xhr.getResponseHeader("Content-Type").split(";")[0]}catch(r){}if("application/octet-stream"===t)e=this.xhr.response;else if(this.supportsBinary)try{e=String.fromCharCode.apply(null,new Uint8Array(this.xhr.response))}catch(r){for(var n=new Uint8Array(this.xhr.response),o=[],s=0,i=n.length;i>s;s++)o.push(n[s]);e=String.fromCharCode.apply(null,o)}else e=this.xhr.responseText}catch(r){this.onError(r)}null!=e&&this.onData(e)},s.prototype.hasXDR=function(){return"undefined"!=typeof r.XDomainRequest&&!this.xs&&this.enablesXDR},s.prototype.abort=function(){this.cleanup()},r.document&&(s.requestsCount=0,s.requests={},r.attachEvent?r.attachEvent("onunload",i):r.addEventListener&&r.addEventListener("beforeunload",i,!1))}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./polling":8,"component-emitter":16,"component-inherit":17,debug:18,"xmlhttprequest-ssl":10}],8:[function(e,t,r){function n(e){var t=e&&e.forceBase64;(!u||t)&&(this.supportsBinary=!1),o.call(this,e)}var o=e("../transport"),s=e("parseqs"),i=e("engine.io-parser"),a=e("component-inherit"),c=e("yeast"),p=e("debug")("engine.io-client:polling");t.exports=n;var u=function(){var t=e("xmlhttprequest-ssl"),r=new t({xdomain:!1});return null!=r.responseType}();a(n,o),n.prototype.name="polling",n.prototype.doOpen=function(){this.poll()},n.prototype.pause=function(e){function t(){p("paused"),r.readyState="paused",e()}var r=this;if(this.readyState="pausing",this.polling||!this.writable){var n=0;this.polling&&(p("we are currently polling - waiting to pause"),n++,this.once("pollComplete",function(){p("pre-pause polling complete"),--n||t()})),this.writable||(p("we are currently writing - waiting to pause"),n++,this.once("drain",function(){p("pre-pause writing complete"),--n||t()}))}else t()},n.prototype.poll=function(){p("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},n.prototype.onData=function(e){var t=this;p("polling got data %s",e);var r=function(e,r,n){return"opening"==t.readyState&&t.onOpen(),"close"==e.type?(t.onClose(),!1):void t.onPacket(e)};i.decodePayload(e,this.socket.binaryType,r),"closed"!=this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"==this.readyState?this.poll():p('ignoring poll - transport state "%s"',this.readyState))},n.prototype.doClose=function(){function e(){p("writing close packet"),t.write([{type:"close"}])}var t=this;"open"==this.readyState?(p("transport open - closing"),e()):(p("transport not open - deferring close"),this.once("open",e))},n.prototype.write=function(e){var t=this;this.writable=!1;var r=function(){t.writable=!0,t.emit("drain")},t=this;i.encodePayload(e,this.supportsBinary,function(e){t.doWrite(e,r)})},n.prototype.uri=function(){var e=this.query||{},t=this.secure?"https":"http",r="";!1!==this.timestampRequests&&(e[this.timestampParam]=c()),this.supportsBinary||e.sid||(e.b64=1),e=s.encode(e),this.port&&("https"==t&&443!=this.port||"http"==t&&80!=this.port)&&(r=":"+this.port),e.length&&(e="?"+e);var n=-1!==this.hostname.indexOf(":");return t+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+e}},{"../transport":4,"component-inherit":17,debug:18,"engine.io-parser":20,parseqs:28,"xmlhttprequest-ssl":10,yeast:31}],9:[function(e,t,r){(function(r){function n(e){var t=e&&e.forceBase64;t&&(this.supportsBinary=!1),this.perMessageDeflate=e.perMessageDeflate,o.call(this,e)}var o=e("../transport"),s=e("engine.io-parser"),i=e("parseqs"),a=e("component-inherit"),c=e("yeast"),p=e("debug")("engine.io-client:websocket"),u=r.WebSocket||r.MozWebSocket,h=u;if(!h&&"undefined"==typeof window)try{h=e("ws")}catch(f){}t.exports=n,a(n,o),n.prototype.name="websocket",n.prototype.supportsBinary=!0,n.prototype.doOpen=function(){if(this.check()){var e=this.uri(),t=void 0,r={agent:this.agent,perMessageDeflate:this.perMessageDeflate};r.pfx=this.pfx,r.key=this.key,r.passphrase=this.passphrase,r.cert=this.cert,r.ca=this.ca,r.ciphers=this.ciphers,r.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(r.headers=this.extraHeaders),this.ws=u?new h(e):new h(e,t,r),void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="buffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},n.prototype.addEventListeners=function(){var e=this;this.ws.onopen=function(){e.onOpen()},this.ws.onclose=function(){e.onClose()},this.ws.onmessage=function(t){e.onData(t.data)},this.ws.onerror=function(t){e.onError("websocket error",t)}},"undefined"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)&&(n.prototype.onData=function(e){var t=this;setTimeout(function(){o.prototype.onData.call(t,e)},0)}),n.prototype.write=function(e){function t(){n.emit("flush"),setTimeout(function(){n.writable=!0,n.emit("drain")},0)}var n=this;this.writable=!1;for(var o=e.length,i=0,a=o;a>i;i++)!function(e){s.encodePacket(e,n.supportsBinary,function(s){if(!u){var i={};if(e.options&&(i.compress=e.options.compress),n.perMessageDeflate){var a="string"==typeof s?r.Buffer.byteLength(s):s.length;a<n.perMessageDeflate.threshold&&(i.compress=!1)}}try{u?n.ws.send(s):n.ws.send(s,i)}catch(c){p("websocket closed before onclose event")}--o||t()})}(e[i])},n.prototype.onClose=function(){o.prototype.onClose.call(this)},n.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},n.prototype.uri=function(){var e=this.query||{},t=this.secure?"wss":"ws",r="";this.port&&("wss"==t&&443!=this.port||"ws"==t&&80!=this.port)&&(r=":"+this.port),this.timestampRequests&&(e[this.timestampParam]=c()),this.supportsBinary||(e.b64=1),e=i.encode(e),e.length&&(e="?"+e);var n=-1!==this.hostname.indexOf(":");return t+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+e},n.prototype.check=function(){return!(!h||"__initialize"in h&&this.name===n.prototype.name)}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"../transport":4,"component-inherit":17,debug:18,"engine.io-parser":20,parseqs:28,ws:15,yeast:31}],10:[function(e,t,r){var n=e("has-cors");t.exports=function(e){var t=e.xdomain,r=e.xscheme,o=e.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!t||n))return new XMLHttpRequest}catch(s){}try{if("undefined"!=typeof XDomainRequest&&!r&&o)return new XDomainRequest}catch(s){}if(!t)try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(s){}}},{"has-cors":23}],11:[function(e,t,r){function n(e,t,r){function n(e,o){if(n.count<=0)throw new Error("after called too many times");--n.count,e?(s=!0,t(e),t=r):0!==n.count||s||t(null,o)}var s=!1;return r=r||o,n.count=e,0===e?t():n}function o(){}t.exports=n},{}],12:[function(e,t,r){t.exports=function(e,t,r){var n=e.byteLength;if(t=t||0,r=r||n,e.slice)return e.slice(t,r);if(0>t&&(t+=n),0>r&&(r+=n),r>n&&(r=n),t>=n||t>=r||0===n)return new ArrayBuffer(0);for(var o=new Uint8Array(e),s=new Uint8Array(r-t),i=t,a=0;r>i;i++,a++)s[a]=o[i];return s.buffer}},{}],13:[function(e,t,r){!function(e){"use strict";r.encode=function(t){var r,n=new Uint8Array(t),o=n.length,s="";for(r=0;o>r;r+=3)s+=e[n[r]>>2],s+=e[(3&n[r])<<4|n[r+1]>>4],s+=e[(15&n[r+1])<<2|n[r+2]>>6],s+=e[63&n[r+2]];return o%3===2?s=s.substring(0,s.length-1)+"=":o%3===1&&(s=s.substring(0,s.length-2)+"=="),s},r.decode=function(t){var r,n,o,s,i,a=.75*t.length,c=t.length,p=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var u=new ArrayBuffer(a),h=new Uint8Array(u);for(r=0;c>r;r+=4)n=e.indexOf(t[r]),o=e.indexOf(t[r+1]),s=e.indexOf(t[r+2]),i=e.indexOf(t[r+3]),h[p++]=n<<2|o>>4,h[p++]=(15&o)<<4|s>>2,h[p++]=(3&s)<<6|63&i;return u}}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")},{}],14:[function(e,t,r){(function(e){function r(e){for(var t=0;t<e.length;t++){var r=e[t];if(r.buffer instanceof ArrayBuffer){var n=r.buffer;if(r.byteLength!==n.byteLength){var o=new Uint8Array(r.byteLength);o.set(new Uint8Array(n,r.byteOffset,r.byteLength)),n=o.buffer}e[t]=n}}}function n(e,t){t=t||{};var n=new s;r(e);for(var o=0;o<e.length;o++)n.append(e[o]);return t.type?n.getBlob(t.type):n.getBlob()}function o(e,t){return r(e),new Blob(e,t||{})}var s=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder,i=function(){try{var e=new Blob(["hi"]);return 2===e.size}catch(t){return!1}}(),a=i&&function(){try{var e=new Blob([new Uint8Array([1,2])]);return 2===e.size}catch(t){return!1}}(),c=s&&s.prototype.append&&s.prototype.getBlob;t.exports=function(){return i?a?e.Blob:o:c?n:void 0}()}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{}],15:[function(e,t,r){},{}],16:[function(e,t,r){function n(e){return e?o(e):void 0}function o(e){for(var t in n.prototype)e[t]=n.prototype[t];return e}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks[e]=this._callbacks[e]||[]).push(t),this},n.prototype.once=function(e,t){function r(){n.off(e,r),t.apply(this,arguments)}var n=this;return this._callbacks=this._callbacks||{},r.fn=t,this.on(e,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks[e];if(!r)return this;if(1==arguments.length)return delete this._callbacks[e],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===t||n.fn===t){r.splice(o,1);break}return this},n.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),r=this._callbacks[e];if(r){r=r.slice(0);for(var n=0,o=r.length;o>n;++n)r[n].apply(this,t)}return this},n.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks[e]||[]},n.prototype.hasListeners=function(e){return!!this.listeners(e).length}},{}],17:[function(e,t,r){t.exports=function(e,t){var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},{}],18:[function(e,t,r){function n(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function o(){var e=arguments,t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+r.humanize(this.diff),!t)return e;var n="color: "+this.color;e=[e[0],n,"color: inherit"].concat(Array.prototype.slice.call(e,1));var o=0,s=0;return e[0].replace(/%[a-z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(s=o))}),e.splice(s,0,n),e}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function i(e){try{null==e?r.storage.removeItem("debug"):r.storage.debug=e}catch(t){}}function a(){var e;try{e=r.storage.debug}catch(t){}return e}function c(){try{return window.localStorage}catch(e){}}r=t.exports=e("./debug"),r.log=s,r.formatArgs=o,r.save=i,r.load=a,r.useColors=n,r.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:c(),r.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],r.formatters.j=function(e){return JSON.stringify(e)},r.enable(a())},{"./debug":19}],19:[function(e,t,r){function n(){return r.colors[u++%r.colors.length]}function o(e){function t(){}function o(){var e=o,t=+new Date,s=t-(p||t);e.diff=s,e.prev=p,e.curr=t,p=t,null==e.useColors&&(e.useColors=r.useColors()),null==e.color&&e.useColors&&(e.color=n());var i=Array.prototype.slice.call(arguments);i[0]=r.coerce(i[0]),"string"!=typeof i[0]&&(i=["%o"].concat(i));var a=0;i[0]=i[0].replace(/%([a-z%])/g,function(t,n){if("%%"===t)return t;a++;var o=r.formatters[n];if("function"==typeof o){var s=i[a];t=o.call(e,s),i.splice(a,1),a--}return t}),"function"==typeof r.formatArgs&&(i=r.formatArgs.apply(e,i));var c=o.log||r.log||console.log.bind(console);c.apply(e,i)}t.enabled=!1,o.enabled=!0;var s=r.enabled(e)?o:t;return s.namespace=e,s}function s(e){r.save(e);for(var t=(e||"").split(/[\s,]+/),n=t.length,o=0;n>o;o++)t[o]&&(e=t[o].replace(/\*/g,".*?"),"-"===e[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")))}function i(){r.enable("")}function a(e){var t,n;for(t=0,n=r.skips.length;n>t;t++)if(r.skips[t].test(e))return!1;for(t=0,n=r.names.length;n>t;t++)if(r.names[t].test(e))return!0;return!1}function c(e){return e instanceof Error?e.stack||e.message:e}r=t.exports=o,r.coerce=c,r.disable=i,r.enable=s,r.enabled=a,r.humanize=e("ms"),r.names=[],r.skips=[],r.formatters={};var p,u=0},{ms:26}],20:[function(e,t,r){(function(t){function n(e,t){var n="b"+r.packets[e.type]+e.data.data;return t(n)}function o(e,t,n){if(!t)return r.encodeBase64Packet(e,n);var o=e.data,s=new Uint8Array(o),i=new Uint8Array(1+o.byteLength);i[0]=m[e.type];for(var a=0;a<s.length;a++)i[a+1]=s[a];return n(i.buffer)}function s(e,t,n){if(!t)return r.encodeBase64Packet(e,n);var o=new FileReader;return o.onload=function(){e.data=o.result,r.encodePacket(e,t,!0,n)},o.readAsArrayBuffer(e.data)}function i(e,t,n){if(!t)return r.encodeBase64Packet(e,n);if(g)return s(e,t,n);var o=new Uint8Array(1);o[0]=m[e.type];var i=new w([o.buffer,e.data]);return n(i)}function a(e,t,r){for(var n=new Array(e.length),o=f(e.length,r),s=function(e,r,o){t(r,function(t,r){n[e]=r,o(t,n)})},i=0;i<e.length;i++)s(i,e[i],o)}var c=e("./keys"),p=e("has-binary"),u=e("arraybuffer.slice"),h=e("base64-arraybuffer"),f=e("after"),l=e("utf8"),d=navigator.userAgent.match(/Android/i),y=/PhantomJS/i.test(navigator.userAgent),g=d||y;r.protocol=3;var m=r.packets={
	open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},v=c(m),b={type:"error",data:"parser error"},w=e("blob");r.encodePacket=function(e,r,s,a){"function"==typeof r&&(a=r,r=!1),"function"==typeof s&&(a=s,s=null);var c=void 0===e.data?void 0:e.data.buffer||e.data;if(t.ArrayBuffer&&c instanceof ArrayBuffer)return o(e,r,a);if(w&&c instanceof t.Blob)return i(e,r,a);if(c&&c.base64)return n(e,a);var p=m[e.type];return void 0!==e.data&&(p+=s?l.encode(String(e.data)):String(e.data)),a(""+p)},r.encodeBase64Packet=function(e,n){var o="b"+r.packets[e.type];if(w&&e.data instanceof t.Blob){var s=new FileReader;return s.onload=function(){var e=s.result.split(",")[1];n(o+e)},s.readAsDataURL(e.data)}var i;try{i=String.fromCharCode.apply(null,new Uint8Array(e.data))}catch(a){for(var c=new Uint8Array(e.data),p=new Array(c.length),u=0;u<c.length;u++)p[u]=c[u];i=String.fromCharCode.apply(null,p)}return o+=t.btoa(i),n(o)},r.decodePacket=function(e,t,n){if("string"==typeof e||void 0===e){if("b"==e.charAt(0))return r.decodeBase64Packet(e.substr(1),t);if(n)try{e=l.decode(e)}catch(o){return b}var s=e.charAt(0);return Number(s)==s&&v[s]?e.length>1?{type:v[s],data:e.substring(1)}:{type:v[s]}:b}var i=new Uint8Array(e),s=i[0],a=u(e,1);return w&&"blob"===t&&(a=new w([a])),{type:v[s],data:a}},r.decodeBase64Packet=function(e,r){var n=v[e.charAt(0)];if(!t.ArrayBuffer)return{type:n,data:{base64:!0,data:e.substr(1)}};var o=h.decode(e.substr(1));return"blob"===r&&w&&(o=new w([o])),{type:n,data:o}},r.encodePayload=function(e,t,n){function o(e){return e.length+":"+e}function s(e,n){r.encodePacket(e,i?t:!1,!0,function(e){n(null,o(e))})}"function"==typeof t&&(n=t,t=null);var i=p(e);return t&&i?w&&!g?r.encodePayloadAsBlob(e,n):r.encodePayloadAsArrayBuffer(e,n):e.length?void a(e,s,function(e,t){return n(t.join(""))}):n("0:")},r.decodePayload=function(e,t,n){if("string"!=typeof e)return r.decodePayloadAsBinary(e,t,n);"function"==typeof t&&(n=t,t=null);var o;if(""==e)return n(b,0,1);for(var s,i,a="",c=0,p=e.length;p>c;c++){var u=e.charAt(c);if(":"!=u)a+=u;else{if(""==a||a!=(s=Number(a)))return n(b,0,1);if(i=e.substr(c+1,s),a!=i.length)return n(b,0,1);if(i.length){if(o=r.decodePacket(i,t,!0),b.type==o.type&&b.data==o.data)return n(b,0,1);var h=n(o,c+s,p);if(!1===h)return}c+=s,a=""}}return""!=a?n(b,0,1):void 0},r.encodePayloadAsArrayBuffer=function(e,t){function n(e,t){r.encodePacket(e,!0,!0,function(e){return t(null,e)})}return e.length?void a(e,n,function(e,r){var n=r.reduce(function(e,t){var r;return r="string"==typeof t?t.length:t.byteLength,e+r.toString().length+r+2},0),o=new Uint8Array(n),s=0;return r.forEach(function(e){var t="string"==typeof e,r=e;if(t){for(var n=new Uint8Array(e.length),i=0;i<e.length;i++)n[i]=e.charCodeAt(i);r=n.buffer}t?o[s++]=0:o[s++]=1;for(var a=r.byteLength.toString(),i=0;i<a.length;i++)o[s++]=parseInt(a[i]);o[s++]=255;for(var n=new Uint8Array(r),i=0;i<n.length;i++)o[s++]=n[i]}),t(o.buffer)}):t(new ArrayBuffer(0))},r.encodePayloadAsBlob=function(e,t){function n(e,t){r.encodePacket(e,!0,!0,function(e){var r=new Uint8Array(1);if(r[0]=1,"string"==typeof e){for(var n=new Uint8Array(e.length),o=0;o<e.length;o++)n[o]=e.charCodeAt(o);e=n.buffer,r[0]=0}for(var s=e instanceof ArrayBuffer?e.byteLength:e.size,i=s.toString(),a=new Uint8Array(i.length+1),o=0;o<i.length;o++)a[o]=parseInt(i[o]);if(a[i.length]=255,w){var c=new w([r.buffer,a.buffer,e]);t(null,c)}})}a(e,n,function(e,r){return t(new w(r))})},r.decodePayloadAsBinary=function(e,t,n){"function"==typeof t&&(n=t,t=null);for(var o=e,s=[],i=!1;o.byteLength>0;){for(var a=new Uint8Array(o),c=0===a[0],p="",h=1;255!=a[h];h++){if(p.length>310){i=!0;break}p+=a[h]}if(i)return n(b,0,1);o=u(o,2+p.length),p=parseInt(p);var f=u(o,0,p);if(c)try{f=String.fromCharCode.apply(null,new Uint8Array(f))}catch(l){var d=new Uint8Array(f);f="";for(var h=0;h<d.length;h++)f+=String.fromCharCode(d[h])}s.push(f),o=u(o,p)}var y=s.length;s.forEach(function(e,o){n(r.decodePacket(e,t,!0),o,y)})}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./keys":21,after:11,"arraybuffer.slice":12,"base64-arraybuffer":13,blob:14,"has-binary":22,utf8:30}],21:[function(e,t,r){t.exports=Object.keys||function(e){var t=[],r=Object.prototype.hasOwnProperty;for(var n in e)r.call(e,n)&&t.push(n);return t}},{}],22:[function(e,t,r){(function(r){function n(e){function t(e){if(!e)return!1;if(r.Buffer&&r.Buffer.isBuffer(e)||r.ArrayBuffer&&e instanceof ArrayBuffer||r.Blob&&e instanceof Blob||r.File&&e instanceof File)return!0;if(o(e)){for(var n=0;n<e.length;n++)if(t(e[n]))return!0}else if(e&&"object"==typeof e){e.toJSON&&(e=e.toJSON());for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)&&t(e[s]))return!0}return!1}return t(e)}var o=e("isarray");t.exports=n}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{isarray:25}],23:[function(e,t,r){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(n){t.exports=!1}},{}],24:[function(e,t,r){var n=[].indexOf;t.exports=function(e,t){if(n)return e.indexOf(t);for(var r=0;r<e.length;++r)if(e[r]===t)return r;return-1}},{}],25:[function(e,t,r){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],26:[function(e,t,r){function n(e){if(e=""+e,!(e.length>1e4)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]),n=(t[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return r*h;case"days":case"day":case"d":return r*u;case"hours":case"hour":case"hrs":case"hr":case"h":return r*p;case"minutes":case"minute":case"mins":case"min":case"m":return r*c;case"seconds":case"second":case"secs":case"sec":case"s":return r*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r}}}}function o(e){return e>=u?Math.round(e/u)+"d":e>=p?Math.round(e/p)+"h":e>=c?Math.round(e/c)+"m":e>=a?Math.round(e/a)+"s":e+"ms"}function s(e){return i(e,u,"day")||i(e,p,"hour")||i(e,c,"minute")||i(e,a,"second")||e+" ms"}function i(e,t,r){return t>e?void 0:1.5*t>e?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}var a=1e3,c=60*a,p=60*c,u=24*p,h=365.25*u;t.exports=function(e,t){return t=t||{},"string"==typeof e?n(e):t["long"]?s(e):o(e)}},{}],27:[function(e,t,r){(function(e){var r=/^[\],:{}\s]*$/,n=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,o=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,s=/(?:^|:|,)(?:\s*\[)+/g,i=/^\s+/,a=/\s+$/;t.exports=function(t){return"string"==typeof t&&t?(t=t.replace(i,"").replace(a,""),e.JSON&&JSON.parse?JSON.parse(t):r.test(t.replace(n,"@").replace(o,"]").replace(s,""))?new Function("return "+t)():void 0):null}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{}],28:[function(e,t,r){r.encode=function(e){var t="";for(var r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t},r.decode=function(e){for(var t={},r=e.split("&"),n=0,o=r.length;o>n;n++){var s=r[n].split("=");t[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return t}},{}],29:[function(e,t,r){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,o=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(e){var t=e,r=e.indexOf("["),s=e.indexOf("]");-1!=r&&-1!=s&&(e=e.substring(0,r)+e.substring(r,s).replace(/:/g,";")+e.substring(s,e.length));for(var i=n.exec(e||""),a={},c=14;c--;)a[o[c]]=i[c]||"";return-1!=r&&-1!=s&&(a.source=t,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},{}],30:[function(t,r,n){(function(t){!function(o){function s(e){for(var t,r,n=[],o=0,s=e.length;s>o;)t=e.charCodeAt(o++),t>=55296&&56319>=t&&s>o?(r=e.charCodeAt(o++),56320==(64512&r)?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),o--)):n.push(t);return n}function i(e){for(var t,r=e.length,n=-1,o="";++n<r;)t=e[n],t>65535&&(t-=65536,o+=w(t>>>10&1023|55296),t=56320|1023&t),o+=w(t);return o}function a(e){if(e>=55296&&57343>=e)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")}function c(e,t){return w(e>>t&63|128)}function p(e){if(0==(4294967168&e))return w(e);var t="";return 0==(4294965248&e)?t=w(e>>6&31|192):0==(4294901760&e)?(a(e),t=w(e>>12&15|224),t+=c(e,6)):0==(4292870144&e)&&(t=w(e>>18&7|240),t+=c(e,12),t+=c(e,6)),t+=w(63&e|128)}function u(e){for(var t,r=s(e),n=r.length,o=-1,i="";++o<n;)t=r[o],i+=p(t);return i}function h(){if(b>=v)throw Error("Invalid byte index");var e=255&m[b];if(b++,128==(192&e))return 63&e;throw Error("Invalid continuation byte")}function f(){var e,t,r,n,o;if(b>v)throw Error("Invalid byte index");if(b==v)return!1;if(e=255&m[b],b++,0==(128&e))return e;if(192==(224&e)){var t=h();if(o=(31&e)<<6|t,o>=128)return o;throw Error("Invalid continuation byte")}if(224==(240&e)){if(t=h(),r=h(),o=(15&e)<<12|t<<6|r,o>=2048)return a(o),o;throw Error("Invalid continuation byte")}if(240==(248&e)&&(t=h(),r=h(),n=h(),o=(15&e)<<18|t<<12|r<<6|n,o>=65536&&1114111>=o))return o;throw Error("Invalid UTF-8 detected")}function l(e){m=s(e),v=m.length,b=0;for(var t,r=[];(t=f())!==!1;)r.push(t);return i(r)}var d="object"==typeof n&&n,y="object"==typeof r&&r&&r.exports==d&&r,g="object"==typeof t&&t;(g.global===g||g.window===g)&&(o=g);var m,v,b,w=String.fromCharCode,x={version:"2.0.0",encode:u,decode:l};if("function"==typeof e&&"object"==typeof e.amd&&e.amd)e(function(){return x});else if(d&&!d.nodeType)if(y)y.exports=x;else{var k={},B=k.hasOwnProperty;for(var S in x)B.call(x,S)&&(d[S]=x[S])}else o.utf8=x}(this)}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{}],31:[function(e,t,r){"use strict";function n(e){var t="";do t=a[e%c]+t,e=Math.floor(e/c);while(e>0);return t}function o(e){var t=0;for(h=0;h<e.length;h++)t=t*c+p[e.charAt(h)];return t}function s(){var e=n(+new Date);return e!==i?(u=0,i=e):e+"."+n(u++)}for(var i,a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),c=64,p={},u=0,h=0;c>h;h++)p[a[h]]=h;s.encode=n,s.decode=o,t.exports=s},{}]},{},[1])(1)});})();
	(function(ns){var CLIENT_VERSION = "0.7.2";var NODE_CLIENT=0;ns.wrapper=function(good,wd){
	var h,n=this;function p(a){return void 0!==a}function aa(){}function ba(a){a.Va=function(){return a.nd?a.nd:a.nd=new a}}
	function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
	else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function da(a){return"array"==ca(a)}function q(a){return"string"==typeof a}function ea(a){return"number"==typeof a}function fa(a){return"function"==ca(a)}function ga(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ha(a,b,c){return a.call.apply(a.bind,arguments)}
	function ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return r.apply(null,arguments)}var ja=Date.now||function(){return+new Date};
	function ka(a,b){function c(){}c.prototype=b.prototype;a.Be=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ve=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};var la={};function ma(a,b){this.type=na;this.source=oa;this.path=a;this.Yc=b}ma.prototype.Pb=function(){return this.path.j()?this:new ma(t(this.path),this.Yc)};ma.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Yc+")"};function pa(a,b){this.type=qa;this.source=a;this.path=b}pa.prototype.Pb=function(){return this.path.j()?new pa(this.source,v):new pa(this.source,t(this.path))};pa.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function ra(a,b,c){this.type=sa;this.source=a;this.path=b;this.Ba=c}ra.prototype.Pb=function(a){return this.path.j()?new ra(this.source,v,this.Ba.P(a)):new ra(this.source,t(this.path),this.Ba)};ra.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ba.toString()+")"};function w(){}w.prototype.R;w.prototype.J;w.prototype.ba;w.prototype.P;w.prototype.ja;w.prototype.Mc;w.prototype.U;w.prototype.M;w.prototype.wa;w.prototype.j;w.prototype.Ra;w.prototype.N;w.prototype.hash;w.prototype.kb;w.prototype.$;w.prototype.La;w.prototype.ub;function x(a,b){this.name=a;this.node=b}function ta(a,b){return new x(a,b)};function ua(a,b){return va(a.name,b.name)}function wa(a,b){return va(a,b)};function xa(a){this.g=a;this.f=null}xa.prototype.get=function(){var a=this.g.get(),b=ya(a);if(this.f)for(var c in this.f)b[c]-=this.f[c];this.f=a;return b};function za(a,b){this.ud={};this.sa=new xa(a);this.g=b;var c=1E4+2E4*Math.random();setTimeout(r(this.f,this),Math.floor(c))}za.prototype.f=function(){var a=this.sa.get(),b={},c=!1,d;for(d in a)0<a[d]&&y(this.ud,d)&&(b[d]=a[d],c=!0);c&&this.g.Vc(b);setTimeout(r(this.f,this),Math.floor(6E5*Math.random()))};function A(a,b){if(1==arguments.length){this.F=a.split("/");for(var c=0,d=0;d<this.F.length;d++)0<this.F[d].length&&(this.F[c]=this.F[d],c++);this.F.length=c;this.aa=0}else this.F=a,this.aa=b}function B(a,b){var c=C(a);if(null===c)return b;if(c===C(b))return B(t(a),t(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}function C(a){return a.aa>=a.F.length?null:a.F[a.aa]}function Aa(a){return a.F.length-a.aa}
	function t(a){var b=a.aa;b<a.F.length&&b++;return new A(a.F,b)}function Ba(a){return a.aa<a.F.length?a.F[a.F.length-1]:null}h=A.prototype;h.toString=function(){for(var a="",b=this.aa;b<this.F.length;b++)""!==this.F[b]&&(a+="/"+this.F[b]);return a||"/"};h.slice=function(a){return this.F.slice(this.aa+(a||0))};h.parent=function(){if(this.aa>=this.F.length)return null;for(var a=[],b=this.aa;b<this.F.length-1;b++)a.push(this.F[b]);return new A(a,0)};
	h.C=function(a){for(var b=[],c=this.aa;c<this.F.length;c++)b.push(this.F[c]);if(a instanceof A)for(c=a.aa;c<a.F.length;c++)b.push(a.F[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new A(b,0)};h.j=function(){return this.aa>=this.F.length};h.$=function(a){if(Aa(this)!==Aa(a))return!1;for(var b=this.aa,c=a.aa;b<=this.F.length;b++,c++)if(this.F[b]!==a.F[c])return!1;return!0};
	h.contains=function(a){var b=this.aa,c=a.aa;if(Aa(this)>Aa(a))return!1;for(;b<this.F.length;){if(this.F[b]!==a.F[c])return!1;++b;++c}return!0};var v=new A("");function Ca(a,b){this.g=a.slice();this.f=Math.max(1,this.g.length);this.m=b;for(var c=0;c<this.g.length;c++)this.f+=Da(this.g[c]);Ea(this)}Ca.prototype.push=function(a){0<this.g.length&&(this.f+=1);this.g.push(a);this.f+=Da(a);Ea(this)};Ca.prototype.pop=function(){var a=this.g.pop();this.f-=Da(a);0<this.g.length&&--this.f};
	function Ea(a){if(768<a.f)throw Error(a.m+"has a key path longer than 768 bytes ("+a.f+").");if(32<a.g.length)throw Error(a.m+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Fa(a));}function Fa(a){return 0==a.g.length?"":"in property '"+a.g.join(".")+"'"};function Ga(a,b){return a&&"object"===typeof a?(D(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Ha(a,b){var c=new Ia;Ja(a,new A(""),function(a,e){c.zb(a,Ka(e,b))});return c}function Ka(a,b){var c=a.J().N(),c=Ga(c,b),d;if(a.R()){var e=Ga(a.va(),b);return e!==a.va()||c!==a.J().N()?new La(e,E(c)):a}d=a;c!==a.J().N()&&(d=d.ba(new La(c)));a.X(F,function(a,c){var e=Ka(c,b);e!==c&&(d=d.U(a,e))});return d};function Ma(a,b,c){this.f=a;this.ca=b;this.mb=c}function Na(a){return a.ca}function Oa(a,b){return a.ca&&!a.mb||a.f.wa(b)}Ma.prototype.u=function(){return this.f};function G(a,b,c,d){this.type=a;this.Ca=b;this.Ja=c;this.Sc=d;this.lc=void 0}function Pa(a){return new G(Qa,a)}var Qa="value";function Ra(){}Ra.prototype.ld=function(){return null};Ra.prototype.Kc=function(){return null};var Sa=new Ra;function Ta(a,b,c){this.yd=a;this.Da=b;this.ic=c}Ta.prototype.ld=function(a){var b=this.Da.L;if(Oa(b,a))return b.u().P(a);b=null!=this.ic?new Ma(this.ic,!0,!1):this.Da.I();return this.yd.Ia(a,b)};Ta.prototype.Kc=function(a,b,c){var d=null!=this.ic?this.ic:Ua(this.Da);a=this.yd.Ac(d,b,1,c,a);return 0===a.length?null:a[0]};function Va(){}Va.prototype.Wa;Va.prototype.dc;Va.prototype.Qa;Va.prototype.toString;function Wa(a,b,c,d){this.Gc=b;this.oc=c;this.lc=d;this.bc=a}Wa.prototype.Wa=function(){var a=this.oc.yb();return"value"===this.bc?a.path:a.parent().path};Wa.prototype.dc=function(){return this.bc};Wa.prototype.Qa=function(){return this.Gc.Qa(this)};Wa.prototype.toString=function(){return this.Wa().toString()+":"+this.bc+":"+H(this.oc.hd())};function Xa(a,b,c){this.Gc=a;this.error=b;this.path=c}Xa.prototype.Wa=function(){return this.path};
	Xa.prototype.dc=function(){return"cancel"};Xa.prototype.Qa=function(){return this.Gc.Qa(this)};Xa.prototype.toString=function(){return this.path.toString()+":cancel"};function Ya(){this.f=[]}function Za(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Wa();null===c||f.$(c.Wa())||(a.f.push(c),c=null);null===c&&(c=new $a(f));c.add(e)}c&&a.f.push(c)}function ab(a,b,c){Za(a,c);bb(a,function(a){return a.$(b)})}function cb(a,b,c){Za(a,c);bb(a,function(a){return a.contains(b)||b.contains(a)})}
	function bb(a,b){for(var c=!0,d=0;d<a.f.length;d++){var e=a.f[d];if(e)if(e=e.Wa(),b(e)){for(var e=a.f[d],f=0;f<e.cc.length;f++){var g=e.cc[f];if(null!==g){e.cc[f]=null;var k=g.Qa();db&&eb("event: "+g.toString());fb(k)}}a.f[d]=null}else c=!1}c&&(a.f=[])}function $a(a){this.oa=a;this.cc=[]}$a.prototype.add=function(a){this.cc.push(a)};$a.prototype.Wa=function(){return this.oa};var gb={NETWORK_ERROR:"Unable to contact the Wilddog server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};function hb(a){var b=Error(J(gb,a),a);b.code=a;return b};function ib(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(navigator.userAgent)}function jb(){return"undefined"!==typeof location&&/^file:\//.test(location.href)}
	function kb(){if("undefined"===typeof navigator)return!1;var a=navigator.userAgent;if("Microsoft Internet Explorer"===navigator.appName){if((a=a.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1])}else if(-1<a.indexOf("Trident")&&(a=a.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1]);return!1};function y(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function J(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function lb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function mb(a){var b={};lb(a,function(a,d){b[a]=d});return b};function nb(a,b){this.committed=a;this.snapshot=b};function ob(a){this.Jb=a;this.kc="wilddog:"}ob.prototype.set=function(a,b){null==b?this.Jb.removeItem(this.kc+a):this.Jb.setItem(this.kc+a,H(b))};ob.prototype.get=function(a){a=this.Jb.getItem(this.kc+a);return null==a?null:pb(a)};ob.prototype.remove=function(a){this.Jb.removeItem(this.kc+a)};ob.prototype.toString=function(){return this.Jb.toString()};function qb(){this.Fb={}}qb.prototype.set=function(a,b){null==b?delete this.Fb[a]:this.Fb[a]=b};qb.prototype.get=function(a){return y(this.Fb,a)?this.Fb[a]:null};qb.prototype.remove=function(a){delete this.Fb[a]};function rb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("wilddog:sentinel","cache");b.removeItem("wilddog:sentinel");return new ob(b)}}catch(c){}return new qb}var sb=rb("localStorage"),K=rb("sessionStorage");function tb(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.bb=b;this.wb=c;this.jc=e||"";this.Aa=sb.get("host:"+a)||this.host;this.Oa=JSON.parse(K.get("failHosts"))||[]}function ub(a,b){null==b?(a.Aa=a.host,"s-"===a.Aa.substr(0,2)&&sb.remove("host:"+a.host)):b!==a.Aa&&0<b.indexOf(".wilddogio.com")&&(a.Aa=b,"s-"===a.Aa.substr(0,2)&&sb.set("host:"+a.host,a.Aa))}
	tb.prototype.toString=function(){var a=(this.bb?"https://":"http://")+this.host;this.jc&&(a+="<"+this.jc+">");return a};var vb="auth.wilddog.com";function wb(a,b,c){this.Wb=a||{};this.rc=b||{};this.Ka=c||{};this.Wb.remember||(this.Wb.remember="default")}var xb=["remember","redirectTo"];function yb(a){var b={},c={};lb(a||{},function(a,e){0<=zb(xb,a)?b[a]=e:c[a]=e});return new wb(b,{},c)};function L(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function M(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
	function N(a,b,c,d){if((!d||p(c))&&!fa(c))throw Error(M(a,b,d)+"must be a valid function.");}function Ab(a,b,c){if(p(c)&&(!ga(c)||null===c))throw Error(M(a,b,!0)+"must be a valid context object.");};function Bb(a,b,c){this.da=c;this.m=a;this.o=b;this.g=0;this.f=null}Bb.prototype.get=function(){var a;0<this.g?(this.g--,a=this.f,this.f=a.next,a.next=null):a=this.m();return a};function Cb(a,b){a.o(b);a.g<a.da&&(a.g++,b.next=a.f,a.f=b)};function Db(){this.g=-1};function Eb(){this.g=-1;this.g=64;this.f=[];this.H=[];this.T=[];this.o=[];this.o[0]=128;for(var a=1;a<this.g;++a)this.o[a]=0;this.A=this.m=0;this.reset()}ka(Eb,Db);Eb.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.A=this.m=0};
	function Fb(a,b,c){c||(c=0);var d=a.T;if(q(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];for(var g=a.f[2],k=a.f[3],l=a.f[4],m,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),m=1518500249):(f=c^g^k,m=1859775393):60>e?(f=c&g|k&(c|g),m=2400959708):(f=c^g^k,m=3395469782),f=(b<<
	5|b>>>27)+f+l+m+d[e]&4294967295,l=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+k&4294967295;a.f[4]=a.f[4]+l&4294967295}
	Eb.prototype.update=function(a,b){if(null!=a){p(b)||(b=a.length);for(var c=b-this.g,d=0,e=this.H,f=this.m;d<b;){if(0==f)for(;d<=c;)Fb(this,a,d),d+=this.g;if(q(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Fb(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Fb(this,e);f=0;break}}this.m=f;this.A+=b}};function Gb(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Gb);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ka(Gb,Error);Gb.prototype.name="CustomError";function Hb(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Ib(){}
	function Jb(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(da(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Jb(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Kb(d,c),c.push(":"),Jb(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Kb(b,c);break;case "number":c.push(isFinite(b)&&
	!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var Lb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Mb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
	function Kb(a,b){b.push('"',a.replace(Mb,function(a){var b=Lb[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Lb[a]=b);return b}),'"')};function Nb(a){var b=[];lb(a,function(a,d){da(d)?Ob(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""}function Pb(a){var b={};a=a.replace(/^\?/,"").split("&");Ob(a,function(a){a&&(a=a.split("="),b[a[0]]=a[1])});return b}function pb(a){return"undefined"!==typeof JSON&&p(JSON.parse)?JSON.parse(a):Hb(a)}
	function H(a){if("undefined"!==typeof JSON&&p(JSON.stringify))a=JSON.stringify(a);else{var b=[];Jb(new Ib,a,b);a=b.join("")}return a}function Qb(){this.nc=O}Qb.prototype.u=function(a){return this.nc.ja(a)};Qb.prototype.toString=function(){return this.nc.toString()};function Rb(){var a=window.opener.frames,b;for(b=a.length-1;0<=b;b--)try{if(a[b].location.protocol===window.location.protocol&&a[b].location.host===window.location.host&&"__winchan_relay_frame"===a[b].name)return a[b]}catch(c){}return null}function Sb(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function Tb(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}
	function Ub(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}function Vb(a){var b="";try{a=a.replace("#","");var c=Pb(a);c&&y(c,"__wilddog_request_key")&&(b=J(c,"__wilddog_request_key"))}catch(d){}return b}function Wb(){var a=Xb(vb);return a.scheme+"://"+a.host+"/v1"}function Yb(a){return Wb()+"/"+a+"/auth/channel"};function Zb(a){a.callback_parameter||(a.callback_parameter="callback");this.f=a;window.__wilddog_auth_jsonp=window.__wilddog_auth_jsonp||{}}
	Zb.prototype.open=function(a,b,c){function d(){c&&(c(hb("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){window.__wilddog_auth_jsonp[f]=void 0;$b(window.__wilddog_auth_jsonp)&&(window.__wilddog_auth_jsonp=void 0);try{var a=document.getElementById(f);a&&a.parentNode.removeChild(a)}catch(b){}},1);Tb(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random());b[this.f.callback_parameter]="__wilddog_auth_jsonp."+f;a+=(/\?/.test(a)?"":"?")+Nb(b);Sb(window,
	"beforeunload",d);window.__wilddog_auth_jsonp[f]=function(a){c&&(c(null,a),c=null);e()};ac(f,a,c)};
	function ac(a,b,c){setTimeout(function(){try{var d=document.createElement("script");d.type="text/javascript";d.id=a;d.async=!0;d.src=b;d.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(hb("NETWORK_ERROR"))};var e,f=document.getElementsByTagName("head");f&&0!=f.length?e=f[0]:e=document.documentElement;e.appendChild(d)}catch(g){c&&c(hb("NETWORK_ERROR"))}},0)}Zb.isAvailable=function(){return!NODE_CLIENT};Zb.prototype.Ib=function(){return"json"};function bc(a){var b=this;this.Na=a;this.m="*";kb()?this.f=this.g=Rb():(this.f=window.opener,this.g=window);if(!b.f)throw"Unable to find relay frame";Sb(this.g,"message",r(this.A,this));Sb(this.g,"message",r(this.o,this));try{cc(this,{a:"ready"})}catch(c){Sb(this.f,"load",function(){cc(b,{a:"ready"})})}Sb(window,"unload",r(this.T,this))}function cc(a,b){b=H(b);kb()?a.f.doPost(b,a.m):a.f.postMessage(b,a.m)}
	bc.prototype.A=function(a){var b=this,c;try{c=pb(a.data)}catch(d){}c&&"request"===c.a&&(Tb(window,"message",this.A),this.m=a.origin,this.Na&&setTimeout(function(){b.Na(b.m,c.d,function(a,c){b.H=!c;b.Na=void 0;cc(b,{a:"response",d:a,forceKeepWindowOpen:c})})},0))};bc.prototype.T=function(){try{Tb(this.g,"message",this.o)}catch(a){}this.Na&&(cc(this,{a:"error",d:"unknown closed window"}),this.Na=void 0);try{window.close()}catch(a){}};bc.prototype.o=function(a){if(this.H&&"die"===a.data)try{window.close()}catch(b){}};function dc(){this.f=ec()+ec()+ec()}dc.prototype.open=function(a,b){K.set("redirect_request_id",this.f);K.set("redirect_request_id",this.f);b.requestId=this.f;b.redirectTo=b.redirectTo||window.location.href;a+=(/\?/.test(a)?"":"?")+Nb(b);window.location=a};dc.isAvailable=function(){return!NODE_CLIENT&&!jb()&&!ib()};dc.prototype.Ib=function(){return"redirect"};function fc(a){a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.f=a}
	fc.prototype.open=function(a,b,c){function d(){c&&(c(hb("REQUEST_INTERRUPTED")),c=null)}var e=new XMLHttpRequest,f=this.f.method.toUpperCase(),g;Sb(window,"beforeunload",d);e.onreadystatechange=function(){if(c&&4===e.readyState){var a;if(200<=e.status&&300>e.status){try{a=pb(e.responseText)}catch(b){}c(null,a)}else 500<=e.status&&600>e.status?c(hb("SERVER_ERROR")):c(hb("NETWORK_ERROR"));c=null;Tb(window,"beforeunload",d)}};if("GET"===f)a+=(/\?/.test(a)?"":"?")+Nb(b),g=null;else{var k=this.f.headers.content_type;
	"application/json"===k&&(g=H(b));"application/x-www-form-urlencoded"===k&&(g=Nb(b))}e.open(f,a,!0);a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};gc(a,this.f.headers);for(var l in a)e.setRequestHeader(l,a[l]);e.send(g)};fc.isAvailable=function(){return!NODE_CLIENT&&!!window.XMLHttpRequest&&(!("undefined"!==typeof navigator&&(navigator.userAgent.match(/MSIE/)||navigator.userAgent.match(/Trident/)))||kb())};fc.prototype.Ib=function(){return"json"};function P(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function hc(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function ic(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function jc(a){var b=0,c;for(c in a)b++;return b}function kc(a){for(var b in a)return b}function lc(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function mc(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function nc(a,b){return null!==a&&b in a}
	function oc(a,b){for(var c in a)if(a[c]==b)return!0;return!1}function pc(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function qc(a,b){var c=pc(a,b,void 0);return c&&a[c]}function $b(a){for(var b in a)return!1;return!0}function ya(a){var b={},c;for(c in a)b[c]=a[c];return b}var rc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
	function gc(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<rc.length;f++)c=rc[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function ec(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^ja()).toString(36)};var zb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ob=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},sc=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,
	b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},tc=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},uc=Array.prototype.reduce?function(a,b,c,d){d&&(b=r(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;Ob(a,function(c,g){e=b.call(d,
	e,c,g,a)});return e},vc=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function wc(a,b){var c=xc(a,b,void 0);return 0>c?null:q(a)?a.charAt(c):a[c]}function xc(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function yc(a,b){var c=zb(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
	function zc(a,b){a.sort(b||Ac)}function Ac(a,b){return a>b?1:a<b?-1:0};function Bc(){this.f={}}Bc.prototype.get=function(){return ya(this.f)};var Cc={},Dc={};function Ec(a){a=a.toString();Cc[a]||(Cc[a]=new Bc);return Cc[a]}function Fc(a,b){var c=a.toString();Dc[c]||(Dc[c]=b());return Dc[c]};({}).qe;function Gc(a,b){this.g=a;this.f=b?b:Hc}h=Gc.prototype;h.Ea=function(a,b){return new Gc(this.g,this.f.Ea(a,b,this.g).Z(null,null,Ic,null,null))};h.remove=function(a){return new Gc(this.g,this.f.remove(a,this.g).Z(null,null,Ic,null,null))};h.get=function(a){for(var b,c=this.f;!c.j();){b=this.g(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
	function Jc(a,b){for(var c,d=a.f,e=null;!d.j();){c=a.g(b,d.key);if(0===c){if(d.left.j())return e?e.key:null;for(d=d.left;!d.right.j();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.j=function(){return this.f.j()};h.count=function(){return this.f.count()};h.Nb=function(){return this.f.Nb()};h.vb=function(){return this.f.vb()};h.ka=function(a){return this.f.ka(a)};
	h.ob=function(a){return new Kc(this.f,null,this.g,!1,a)};h.pb=function(a,b){return new Kc(this.f,a,this.g,!1,b)};h.qb=function(a,b){return new Kc(this.f,a,this.g,!0,b)};h.md=function(a){return new Kc(this.f,null,this.g,!0,a)};function Kc(a,b,c,d,e){this.f=e||null;this.g=d;this.Fa=[];for(e=1;!a.j();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.g?a.left:a.right;else if(0===e){this.Fa.push(a);break}else this.Fa.push(a),a=this.g?a.right:a.left}
	function Lc(a){if(0===a.Fa.length)return null;var b=a.Fa.pop(),c;a.f?c=a.f(b.key,b.value):c={key:b.key,value:b.value};if(a.g)for(b=b.left;!b.j();)a.Fa.push(b),b=b.right;else for(b=b.right;!b.j();)a.Fa.push(b),b=b.left;return c}function Mc(a){if(0===a.Fa.length)return null;var b;b=a.Fa;b=b[b.length-1];return a.f?a.f(b.key,b.value):{key:b.key,value:b.value}}function Nc(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:Oc;this.left=null!=d?d:Hc;this.right=null!=e?e:Hc}var Oc=!0,Ic=!1;h=Nc.prototype;
	h.Z=function(a,b,c,d,e){return new Nc(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};h.count=function(){return this.left.count()+1+this.right.count()};h.j=function(){return!1};h.ka=function(a){return this.left.ka(a)||a(this.key,this.value)||this.right.ka(a)};function Pc(a){return a.left.j()?a:Pc(a.left)}h.Nb=function(){return Pc(this).key};h.vb=function(){return this.right.j()?this.key:this.right.vb()};
	h.Ea=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.Z(null,null,null,e.left.Ea(a,b,c),null):0===d?e.Z(null,b,null,null,null):e.Z(null,null,null,null,e.right.Ea(a,b,c));return Qc(e)};function Rc(a){if(a.left.j())return Hc;a.left.ga()||a.left.left.ga()||(a=Sc(a));a=a.Z(null,null,null,Rc(a.left),null);return Qc(a)}
	h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.j()||c.left.ga()||c.left.left.ga()||(c=Sc(c)),c=c.Z(null,null,null,c.left.remove(a,b),null);else{c.left.ga()&&(c=Tc(c));c.right.j()||c.right.ga()||c.right.left.ga()||(c=Uc(c),c.left.left.ga()&&(c=Tc(c),c=Uc(c)));if(0===b(a,c.key)){if(c.right.j())return Hc;d=Pc(c.right);c=c.Z(d.key,d.value,null,null,Rc(c.right))}c=c.Z(null,null,null,null,c.right.remove(a,b))}return Qc(c)};h.ga=function(){return this.color};
	function Qc(a){a.right.ga()&&!a.left.ga()&&(a=Vc(a));a.left.ga()&&a.left.left.ga()&&(a=Tc(a));a.left.ga()&&a.right.ga()&&(a=Uc(a));return a}function Sc(a){a=Uc(a);a.right.left.ga()&&(a=a.Z(null,null,null,null,Tc(a.right)),a=Vc(a),a=Uc(a));return a}function Vc(a){return a.right.Z(null,null,a.color,a.Z(null,null,Oc,null,a.right.left),null)}function Tc(a){return a.left.Z(null,null,a.color,null,a.Z(null,null,Oc,a.left.right,null))}
	function Uc(a){return a.Z(null,null,!a.color,a.left.Z(null,null,!a.left.color,null,null),a.right.Z(null,null,!a.right.color,null,null))}function Wc(){}h=Wc.prototype;h.Z=function(){return this};h.Ea=function(a,b){return new Nc(a,b,null)};h.remove=function(){return this};h.count=function(){return 0};h.j=function(){return!0};h.ka=function(){return!1};h.Nb=function(){return null};h.vb=function(){return null};h.ga=function(){return!1};var Hc=new Wc;function Xc(){this.g=this.f=null}var Zc=new Bb(function(){return new Yc},function(a){a.reset()},100);Xc.prototype.add=function(a,b){var c=Zc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};Xc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};function Yc(){this.next=this.g=this.f=null}Yc.prototype.set=function(a,b){this.f=a;this.g=b;this.next=null};Yc.prototype.reset=function(){this.next=this.g=this.f=null};var $c;a:{var ad=n.navigator;if(ad){var bd=ad.userAgent;if(bd){$c=bd;break a}}$c=""};function cd(a){n.setTimeout(function(){throw a;},0)}var dd;
	function ed(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==$c.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=r(function(a){if(("*"==d||a.origin==
	d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==$c.indexOf("Trident")&&-1==$c.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.Na;c.Na=null;a()}};return function(a){d.next={Na:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=
	document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}};function fd(a,b){gd||hd();id||(gd(),id=!0);jd.add(a,b)}var gd;function hd(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve(void 0);gd=function(){a.then(kd)}}else gd=function(){var a=kd,c;!(c=!fa(n.setImmediate))&&(c=n.Window&&n.Window.prototype)&&(c=-1==$c.indexOf("Edge")&&n.Window.prototype.setImmediate==n.setImmediate);c?(dd||(dd=ed()),dd(a)):n.setImmediate(a)}}var id=!1,jd=new Xc;function kd(){for(var a=null;a=jd.remove();){try{a.f.call(a.g)}catch(b){cd(b)}Cb(Zc,a)}id=!1};function ld(a,b){this.f=md;this.T=void 0;this.o=this.g=this.m=null;this.A=this.H=!1;if(a!=aa)try{var c=this;a.call(b,function(a){nd(c,od,a)},function(a){if(!(a instanceof pd))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}nd(c,qd,a)})}catch(d){nd(this,qd,d)}}var md=0,od=2,qd=3;function rd(){this.next=this.context=this.f=this.g=this.C=null;this.m=!1}rd.prototype.reset=function(){this.context=this.f=this.g=this.C=null;this.m=!1};
	var sd=new Bb(function(){return new rd},function(a){a.reset()},100);function td(a,b,c){var d=sd.get();d.g=a;d.f=b;d.context=c;return d}ld.prototype.then=function(a,b,c){return ud(this,fa(a)?a:null,fa(b)?b:null,c)};ld.prototype.then=ld.prototype.then;ld.prototype.$goog_Thenable=!0;h=ld.prototype;h.ke=function(a,b){return ud(this,null,a,b)};h.cancel=function(a){this.f==md&&fd(function(){var b=new pd(a);vd(this,b)},this)};
	function vd(a,b){if(a.f==md)if(a.m){var c=a.m;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.m||(d++,g.C==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.f==md&&1==d?vd(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):wd(c),xd(c,e,qd,b)))}a.m=null}else nd(a,qd,b)}function yd(a,b){a.g||a.f!=od&&a.f!=qd||zd(a);a.o?a.o.next=b:a.g=b;a.o=b}
	function ud(a,b,c,d){var e=td(null,null,null);e.C=new ld(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof pd?g(b):a(e)}catch(m){g(m)}}:g});e.C.m=a;yd(a,e);return e.C}h.le=function(a){this.f=md;nd(this,od,a)};h.me=function(a){this.f=md;nd(this,qd,a)};
	function nd(a,b,c){if(a.f==md){a===c&&(b=qd,c=new TypeError("Promise cannot resolve to itself"));a.f=1;var d;a:{var e=c,f=a.le,g=a.me;if(e instanceof ld)yd(e,td(f||aa,g||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(m){k=!1}else k=!1;if(k)e.then(f,g,a),d=!0;else{if(ga(e))try{var l=e.then;if(fa(l)){Ad(e,l,f,g,a);d=!0;break a}}catch(m){g.call(a,m);d=!0;break a}d=!1}}}d||(a.T=c,a.f=b,a.m=null,zd(a),b!=qd||c instanceof pd||Bd(a,c))}}
	function Ad(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}function g(a){k||(k=!0,c.call(e,a))}var k=!1;try{b.call(a,g,f)}catch(l){f(l)}}function zd(a){a.H||(a.H=!0,fd(a.Rd,a))}function wd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.o=null);return b}h.Rd=function(){for(var a=null;a=wd(this);)xd(this,a,this.f,this.T);this.H=!1};
	function xd(a,b,c,d){if(c==qd&&b.f&&!b.m)for(;a&&a.A;a=a.m)a.A=!1;if(b.C)b.C.m=null,Cd(b,c,d);else try{b.m?b.g.call(b.context):Cd(b,c,d)}catch(e){Dd.call(null,e)}Cb(sd,b)}function Cd(a,b,c){b==od?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}function Bd(a,b){a.A=!0;fd(function(){a.A&&Dd.call(null,b)})}var Dd=cd;function pd(a){Gb.call(this,a)}ka(pd,Gb);pd.prototype.name="cancel";var Ed=n.Promise||ld;ld.prototype["catch"]=ld.prototype.ke;function Q(){var a=this;this.g=this.m=null;this.f=new Ed(function(b,c){a.m=b;a.g=c})}function R(a,b){return function(c,d){c?a.g(c):a.m(d);fa(b)&&(Fd(a.f),1===b.length?b(c):b(c,d))}}function Fd(a){a.then(void 0,aa)};var Gd=null,Hd=null;function Id(a){var b="";Jd(a,function(a){b+=String.fromCharCode(a)});return b}function Jd(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=Hd[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}Kd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=k&&b(g<<6&192|k))}}
	function Kd(){if(!Gd){Gd={};Hd={};for(var a=0;65>a;a++)Gd[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Hd[Gd[a]]=a,62<=a&&(Hd["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var Ld=function(){var a=1;return function(){return a++}}();function D(a,b){if(!a)throw Md(b);}function Md(a){return Error("Wilddog ("+Nd+") INTERNAL ASSERT FAILED: "+a)}function Pd(a){try{return NODE_CLIENT?(new Buffer(a,"base64")).toString("utf8"):"undefined"!==typeof atob?atob(a):Id(a)}catch(b){eb("base64Decode failed: ",b)}return null}
	function Qd(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e=e-55296,d++,D(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Eb;a.update(b);b=[];d=8*a.A;56>a.m?a.update(a.o,56-a.m):a.update(a.o,a.g-(a.m-56));for(c=a.g-1;56<=c;c--)a.H[c]=d&255,d/=256;Fb(a,a.H);for(c=d=0;5>c;c++)for(e=
	24;0<=e;e-=8)b[d]=a.f[c]>>e&255,++d;Kd();a=Gd;c=[];for(d=0;d<b.length;d+=3){var f=b[d],g=(e=d+1<b.length)?b[d+1]:0,k=d+2<b.length,l=k?b[d+2]:0,m=f>>2,f=(f&3)<<4|g>>4,g=(g&15)<<2|l>>6,l=l&63;k||(l=64,e||(g=64));c.push(a[m],a[f],a[g],a[l])}return c.join("")}
	function Rd(a){for(var b="",c=0;c<arguments.length;c++)var d=arguments[c],e=ca(d),b="array"==e||"object"==e&&"number"==typeof d.length?b+Rd.apply(null,arguments[c]):"object"===typeof arguments[c]?b+H(arguments[c]):b+arguments[c],b=b+" ";return b}var db=null,Sd=!0;function eb(a){!0===Sd&&(Sd=!1,null===db&&!0===K.get("logging_enabled")&&Td(!0));if(db){var b=Rd.apply(null,arguments);db(b)}}function Ud(a){return function(){eb(a,arguments)}}
	function Vd(a){if("undefined"!==typeof console){var b="WILDDOG INTERNAL ERROR: "+Rd.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Wd(a){var b=Rd.apply(null,arguments);throw Error("WILDDOG FATAL ERROR: "+b);}function S(a){if("undefined"!==typeof console){var b="WILDDOG WARNING: "+Rd.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
	function Xb(a){var b="",c="",d="",e="",f=!0,g="https",k=443;if(q(a)){var l=a.indexOf("//");0<=l&&(g=a.substring(0,l-1),a=a.substring(l+2));l=a.indexOf("/");-1===l&&(l=a.length);b=a.substring(0,l);e="";a=a.substring(l).split("/");for(l=0;l<a.length;l++)if(0<a[l].length){var m=a[l];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(u){}e+="/"+m}a=b.split(".");3===a.length?(c=a[1],d=a[0].toLowerCase()):2===a.length&&(c=a[0]);l=b.indexOf(":");0<=l&&(f="https"===g||"wss"===g,k=b.substring(l+1),isFinite(k)&&
	(k=String(k)),k=q(k)?/^\s*-?0x/i.test(k)?parseInt(k,16):parseInt(k,10):NaN)}return{host:b,port:k,domain:c,je:d,bb:f,scheme:g,Qb:e}}function Xd(a){return ea(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}function va(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=Yd(a),d=Yd(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}
	function Zd(a){if("object"!==typeof a||null===a)return H(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=H(b[d]),c+=":",c+=Zd(a[b[d]]);return c+"}"}function $d(a,b){if(da(a))for(var c=0;c<a.length;++c)b(c,a[c]);else P(a,b)}
	function ae(a){D(!Xd(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
	(d="0"+d),c+=d;return c.toLowerCase()}var be=/^-?\d{1,10}$/;function Yd(a){return be.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function fb(a){try{a()}catch(b){setTimeout(function(){S("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function T(a,b){if(fa(a)){var c=Array.prototype.slice.call(arguments,1).slice();fb(function(){a.apply(null,c)})}};function ce(a,b,c){this.type=de;this.source=a;this.path=b;this.children=c}ce.prototype.Pb=function(a){if(this.path.j())return a=this.children.subtree(new A(a)),a.j()?null:a.value?new ra(this.source,v,a.value):new ce(this.source,v,a);D(C(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new ce(this.source,t(this.path),this.children)};ce.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};var sa=0,de=1,na=2,qa=3;function ee(){}ee.prototype.source;ee.prototype.type;ee.prototype.path;function fe(a,b,c,d){this.Ic=a;this.kd=b;this.ab=c;this.cd=d;D(!d||b,"Tagged queries must be from server.")}var oa=new fe(!0,!1,null,!1),ge=new fe(!1,!0,null,!1);fe.prototype.toString=function(){return this.Ic?"user":this.cd?"server(queryID="+this.ab+")":"server"};function he(){}he.f;var ie={};function je(a){return r(a.compare,a)}he.prototype.gc=function(a,b){return 0!==this.compare(new x("[MIN_NAME]",a),new x("[MIN_NAME]",b))};he.prototype.Ob=function(){return ke};function le(a){this.f=a}ka(le,he);h=le.prototype;h.Kb=function(a){return!a.P(this.f).j()};h.compare=function(a,b){var c=a.node.P(this.f),d=b.node.P(this.f),c=c.kb(d);return 0===c?va(a.name,b.name):c};h.Lb=function(a,b){var c=E(a),c=O.U(this.f,c);return new x(b,c)};
	h.Mb=function(){var a=O.U(this.f,me);return new x("[MAX_NAME]",a)};h.toString=function(){return this.f};function ne(){}ka(ne,he);h=ne.prototype;h.compare=function(a,b){var c=a.node.J(),d=b.node.J(),c=c.kb(d);return 0===c?va(a.name,b.name):c};h.Kb=function(a){return!a.J().j()};h.gc=function(a,b){return!a.J().$(b.J())};h.Ob=function(){return ke};h.Mb=function(){return new x("[MAX_NAME]",new La("[PRIORITY-POST]",me))};h.Lb=function(a,b){var c=E(a);return new x(b,new La("[PRIORITY-POST]",c))};
	h.toString=function(){return".priority"};var F=new ne;function oe(){}ka(oe,he);h=oe.prototype;h.compare=function(a,b){return va(a.name,b.name)};h.Kb=function(){throw Md("KeyIndex.isDefinedOn not expected to be called.");};h.gc=function(){return!1};h.Ob=function(){return ke};h.Mb=function(){return new x("[MAX_NAME]",O)};h.Lb=function(a){D(q(a),"KeyIndex indexValue must always be a string.");return new x(a,O)};h.toString=function(){return".key"};var pe=new oe;function qe(){}ka(qe,he);h=qe.prototype;
	h.compare=function(a,b){var c=a.node.kb(b.node);return 0===c?va(a.name,b.name):c};h.Kb=function(){return!0};h.gc=function(a,b){return!a.$(b)};h.Ob=function(){return ke};h.Mb=function(){return re};h.Lb=function(a,b){var c=E(a);return new x(b,c)};h.toString=function(){return".value"};var se=new qe;function te(a,b){this.f=a;this.sb=b}te.prototype.get=function(a){var b=J(this.f,a);if(!b)throw Error("No index defined for "+a);return b===ie?null:b};function ue(a,b,c){var d=hc(a.f,function(d,f){var g=J(a.sb,f);D(g,"Missing index implementation for "+f);if(d===ie){if(g.Kb(b.node)){for(var k=[],l=c.ob(ta),m=Lc(l);m;)m.name!=b.name&&k.push(m),m=Lc(l);k.push(b);return ve(k,je(g))}return ie}g=c.get(b.name);k=d;g&&(k=k.remove(new x(b.name,g)));return k.Ea(b,b.node)});return new te(d,a.sb)}
	function we(a,b,c){var d=hc(a.f,function(a){if(a===ie)return a;var d=c.get(b.name);return d?a.remove(new x(b.name,d)):a});return new te(d,a.sb)}var xe=new te({".priority":ie},{".priority":F});function La(a,b){this.K=a;D(p(this.K)&&null!==this.K,"LeafNode shouldn't be created with null/undefined value.");this.fa=b||O;ye(this.fa);this.f=null}h=La.prototype;h.R=function(){return!0};h.J=function(){return this.fa};h.ba=function(a){return new La(this.K,a)};h.P=function(a){return".priority"===a?this.fa:O};h.ja=function(a){return a.j()?this:".priority"===C(a)?this.fa:O};h.wa=function(){return!1};h.Mc=function(){return null};
	h.U=function(a,b){return".priority"===a?this.ba(b):b.j()&&".priority"!==a?this:O.U(a,b).ba(this.fa)};h.M=function(a,b){var c=C(a);if(null===c)return b;if(b.j()&&".priority"!==c)return this;D(".priority"!==c||1===Aa(a),".priority must be the last token in a path");return this.U(c,O.M(t(a),b))};h.j=function(){return!1};h.Ra=function(){return 0};h.N=function(a){return a&&!this.J().j()?{".value":this.va(),".priority":this.J().N()}:this.va()};
	h.hash=function(){if(null===this.f){var a="";this.fa.j()||(a+="priority:"+ze(this.fa.N())+":");var b=typeof this.K,a=a+(b+":"),a="number"===b?a+ae(this.K):a+this.K;this.f=Qd(a)}return this.f};h.va=function(){return this.K};h.kb=function(a){if(a===O)return 1;if(a instanceof Ae)return-1;D(a.R(),"Unknown node type");var b=typeof a.K,c=typeof this.K,d=zb(Be,b),e=zb(Be,c);D(0<=d,"Unknown leaf type: "+b);D(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.K<a.K?-1:this.K===a.K?0:1:e-d};
	var Be=["object","boolean","number","string"];La.prototype.La=function(){return this};La.prototype.ub=function(){return!0};La.prototype.$=function(a){return a===this?!0:a.R()?this.K===a.K&&this.fa.$(a.fa):!1};La.prototype.toString=function(){return H(this.N(!0))};function Ae(a,b,c){this.D=a;(this.fa=b)&&ye(this.fa);a.j()&&D(!this.fa||this.fa.j(),"An empty node cannot have a priority");this.f=c;this.g=null}h=Ae.prototype;h.R=function(){return!1};h.J=function(){return this.fa||O};h.ba=function(a){return this.D.j()?this:new Ae(this.D,a,this.f)};h.P=function(a){if(".priority"===a)return this.J();a=this.D.get(a);return null===a?O:a};h.ja=function(a){var b=C(a);return null===b?this:this.P(b).ja(t(a))};h.wa=function(a){return null!==this.D.get(a)};
	h.U=function(a,b){D(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.ba(b);var c=new x(a,b),d,e;b.j()?(d=this.D.remove(a),c=we(this.f,c,this.D)):(d=this.D.Ea(a,b),c=ue(this.f,c,this.D));e=d.j()?O:this.fa;return new Ae(d,e,c)};h.M=function(a,b){var c=C(a);if(null===c)return b;D(".priority"!==C(a)||1===Aa(a),".priority must be the last token in a path");var d=this.P(c).M(t(a),b);return this.U(c,d)};h.j=function(){return this.D.j()};h.Ra=function(){return this.D.count()};
	var Ce=/^(0|[1-9]\d*)$/;h=Ae.prototype;h.N=function(a){if(this.j())return null;var b={},c=0,d=0,e=!0;this.X(F,function(f,g){b[f]=g.N(a);c++;e&&Ce.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&!this.J().j()&&(b[".priority"]=this.J().N());return b};h.hash=function(){if(null===this.g){var a="";this.J().j()||(a+="priority:"+ze(this.J().N())+":");this.X(F,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.g=""===a?"":Qd(a)}return this.g};
	h.Mc=function(a,b,c){return(c=De(this,c))?(a=Jc(c,new x(a,b)))?a.name:null:Jc(this.D,a)};function Ee(a,b){var c;c=(c=De(a,b))?(c=c.Nb())&&c.name:a.D.Nb();return c?new x(c,a.D.get(c)):null}function Fe(a,b){var c;c=(c=De(a,b))?(c=c.vb())&&c.name:a.D.vb();return c?new x(c,a.D.get(c)):null}h.X=function(a,b){var c=De(this,a);return c?c.ka(function(a){return b(a.name,a.node)}):this.D.ka(b)};h.ob=function(a){return this.pb(a.Ob(),a)};
	h.pb=function(a,b){var c=De(this,b);if(c)return c.pb(a,function(a){return a});for(var c=this.D.pb(a.name,ta),d=Mc(c);null!=d&&0>b.compare(d,a);)Lc(c),d=Mc(c);return c};h.md=function(a){return this.qb(a.Mb(),a)};h.qb=function(a,b){var c=De(this,b);if(c)return c.qb(a,function(a){return a});for(var c=this.D.qb(a.name,ta),d=Mc(c);null!=d&&0<b.compare(d,a);)Lc(c),d=Mc(c);return c};h.kb=function(a){return this.j()?a.j()?0:-1:a.R()||a.j()?1:a===me?-1:0};
	h.La=function(a){if(a===pe||oc(this.f.sb,a.toString()))return this;var b=this.f,c=this.D;D(a!==pe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.ob(ta),f=Lc(c);f;)e=e||a.Kb(f.node),d.push(f),f=Lc(c);var g;e?g=ve(d,je(a)):g=ie;d=a.toString();e=ya(b.sb);e[d]=a;a=ya(b.f);a[d]=g;return new Ae(this.D,this.fa,new te(a,e))};h.ub=function(a){return a===pe||oc(this.f.sb,a.toString())};
	h.$=function(a){if(a===this)return!0;if(a.R())return!1;if(this.J().$(a.J())&&this.D.count()===a.D.count()){var b=this.ob(F);a=a.ob(F);for(var c=Lc(b),d=Lc(a);c&&d;){if(c.name!==d.name||!c.node.$(d.node))return!1;c=Lc(b);d=Lc(a)}return null===c&&null===d}return!1};function De(a,b){return b===pe?null:a.f.get(b.toString())}h.toString=function(){return H(this.N(!0))};function E(a,b){if(null===a)return O;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);D(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new La(a,E(c));if(a instanceof Array){var d=O,e=a;P(e,function(a,b){if(y(e,b)&&"."!==b.substring(0,1)){var c=E(a);if(c.R()||!c.j())d=
	d.U(b,c)}});return d.ba(E(c))}var f=[],g=!1,k=a;lb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=E(k[a]);b.j()||(g=g||!b.J().j(),f.push(new x(a,b)))}});if(0==f.length)return O;var l=ve(f,ua,function(a){return a.name},wa);if(g){var m=ve(f,je(F));return new Ae(l,E(c),new te({".priority":m},{".priority":F}))}return new Ae(l,E(c),xe)}var Ge=Math.log(2);
	function He(a){this.count=parseInt(Math.log(a+1)/Ge,10);this.gd=this.count-1;this.Nd=a+1&parseInt(Array(this.count+1).join("1"),2)}function Ie(a){var b=!(a.Nd&1<<a.gd);a.gd--;return b}
	function ve(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var m=a[b],u=c?c(m):m;return new Nc(u,m.node,Ic,null,null)}var m=parseInt(f/2,10)+b,f=e(b,m),z=e(m+1,d),m=a[m],u=c?c(m):m;return new Nc(u,m.node,Ic,f,z)}a.sort(b);var f=function(b){function d(b,g){var k=u-b,z=u;u-=b;var z=e(k+1,z),k=a[k],I=c?c(k):k,z=new Nc(I,k.node,g,null,z);f?f.left=z:m=z;f=z}for(var f=null,m=null,u=a.length,z=0;z<b.count;++z){var I=Ie(b),Od=Math.pow(2,b.count-(z+1));I?d(Od,Ic):(d(Od,Ic),d(Od,Oc))}return m}(new He(a.length));
	return null!==f?new Gc(d||b,f):new Gc(d||b)}function ze(a){return"number"===typeof a?"number:"+ae(a):"string:"+a}function ye(a){if(a.R()){var b=a.N();D("string"===typeof b||"number"===typeof b||"object"===typeof b&&y(b,".sv"),"Priority must be a string or number.")}else D(a===me||a.j(),"priority of unexpected type.");D(a===me||a.J().j(),"Priority nodes can't have a priority of their own.")}var O=new Ae(new Gc(wa),null,xe);function Je(){Ae.call(this,new Gc(wa),O,xe)}ka(Je,Ae);h=Je.prototype;
	h.kb=function(a){return a===this?0:1};h.$=function(a){return a===this};h.J=function(){return this};h.P=function(){return O};h.j=function(){return!1};var me=new Je,ke=new x("[MIN_NAME]",O),re=new x("[MAX_NAME]",me);function Ke(){this.set={}}h=Ke.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0};h.contains=function(a){return y(this.set,a)};h.get=function(a){return this.contains(a)?this.set[a]:void 0};h.remove=function(a){delete this.set[a]};h.j=function(){return $b(this.set)};h.count=function(){return jc(this.set)};function Le(a,b){P(a.set,function(a,d){b(d,a)})};function Ia(){this.D=this.K=null}Ia.prototype.find=function(a){if(null!=this.K)return this.K.ja(a);if(a.j()||null==this.D)return null;var b=C(a);a=t(a);return this.D.contains(b)?this.D.get(b).find(a):null};Ia.prototype.zb=function(a,b){if(a.j())this.K=b,this.D=null;else if(null!==this.K)this.K=this.K.M(a,b);else{null==this.D&&(this.D=new Ke);var c=C(a);this.D.contains(c)||this.D.add(c,new Ia);c=this.D.get(c);a=t(a);c.zb(a,b)}};
	function Me(a,b){if(b.j())return a.K=null,a.D=null,!0;if(null!==a.K){if(a.K.R())return!1;var c=a.K;a.K=null;c.X(F,function(b,c){a.zb(new A(b),c)});return Me(a,b)}return null!==a.D?(c=C(b),b=t(b),a.D.contains(c)&&Me(a.D.get(c),b)&&a.D.remove(c),a.D.j()?(a.D=null,!0):!1):!0}function Ja(a,b,c){null!==a.K?c(b,a.K):a.X(function(a,e){var f=new A(b.toString()+"/"+a);Ja(e,f,c)})}Ia.prototype.X=function(a){null!==this.D&&Le(this.D,function(b,c){a(b,c)})};function Ne(a){D(da(a)&&0<a.length,"Requires a non-empty array");this.sa=a;this.m={}}Ne.prototype.A=function(a,b){for(var c=this.m[a]||[],d=0;d<c.length;d++)c[d].Hb.apply(c[d].context,Array.prototype.slice.call(arguments,1))};Ne.prototype.$a=function(a,b,c){Oe(this,a);this.m[a]=this.m[a]||[];this.m[a].push({Hb:b,context:c});(a=this.Lc(a))&&b.apply(c,a)};Ne.prototype.xb=function(a,b,c){Oe(this,a);a=this.m[a]||[];for(var d=0;d<a.length;d++)if(a[d].Hb===b&&(!c||c===a[d].context)){a.splice(d,1);break}};
	function Oe(a,b){D(wc(a.sa,function(a){return a===b}),"Unknown event: "+b)};function Pe(a,b){this.value=a;this.children=b||Qe}var Qe=new Gc(function(a,b){return a===b?0:a<b?-1:1});function Re(a){var b=Se;P(a,function(a,d){b=b.set(new A(d),a)});return b}h=Pe.prototype;h.j=function(){return null===this.value&&this.children.j()};function Te(a,b,c){if(null!=a.value&&c(a.value))return{path:v,value:a.value};if(b.j())return null;var d=C(b);a=a.children.get(d);return null!==a?(b=Te(a,t(b),c),null!=b?{path:(new A(d)).C(b.path),value:b.value}:null):null}
	function Ue(a,b){return Te(a,b,function(){return!0})}h.subtree=function(a){if(a.j())return this;var b=this.children.get(C(a));return null!==b?b.subtree(t(a)):Se};h.set=function(a,b){if(a.j())return new Pe(b,this.children);var c=C(a),d=(this.children.get(c)||Se).set(t(a),b),c=this.children.Ea(c,d);return new Pe(this.value,c)};
	h.remove=function(a){if(a.j())return this.children.j()?Se:new Pe(null,this.children);var b=C(a),c=this.children.get(b);return c?(a=c.remove(t(a)),b=a.j()?this.children.remove(b):this.children.Ea(b,a),null===this.value&&b.j()?Se:new Pe(this.value,b)):this};h.get=function(a){if(a.j())return this.value;var b=this.children.get(C(a));return b?b.get(t(a)):null};
	function Ve(a,b,c){if(b.j())return c;var d=C(b);b=Ve(a.children.get(d)||Se,t(b),c);d=b.j()?a.children.remove(d):a.children.Ea(d,b);return new Pe(a.value,d)}function We(a,b){return Xe(a,v,b)}function Xe(a,b,c){var d={};a.children.ka(function(a,f){d[a]=Xe(f,b.C(a),c)});return c(b,a.value,d)}function Ye(a,b,c){return Ze(a,b,v,c)}function Ze(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.j())return null;e=C(b);return(a=a.children.get(e))?Ze(a,t(b),c.C(e),d):null}
	function $e(a,b,c){var d=v;if(!b.j()){var e=!0;a.value&&(e=c(d,a.value));!0===e&&(e=C(b),(a=a.children.get(e))&&af(a,t(b),d.C(e),c))}}function af(a,b,c,d){if(b.j())return a;a.value&&d(c,a.value);var e=C(b);return(a=a.children.get(e))?af(a,t(b),c.C(e),d):Se}function bf(a,b){cf(a,v,b)}function cf(a,b,c){a.children.ka(function(a,e){cf(e,b.C(a),c)});a.value&&c(b,a.value)}function df(a,b){a.children.ka(function(a,d){d.value&&b(a,d.value)})}var Se=new Pe(null);
	Pe.prototype.toString=function(){var a={};bf(this,function(b,c){a[b.toString()]=c.toString()});return H(a)};function ef(a){this.Y=a}var ff=new ef(new Pe(null));function gf(a,b,c){if(b.j())return new ef(new Pe(c));var d=Ue(a.Y,b);if(null!=d){var e=d.path,d=d.value;b=B(e,b);d=d.M(b,c);return new ef(a.Y.set(e,d))}a=Ve(a.Y,b,new Pe(c));return new ef(a)}function hf(a,b,c){var d=a;lb(c,function(a,c){d=gf(d,b.C(a),c)});return d}ef.prototype.mc=function(a){if(a.j())return ff;a=Ve(this.Y,a,Se);return new ef(a)};function jf(a,b){var c=Ue(a.Y,b);return null!=c?a.Y.get(c.path).ja(B(c.path,b)):null}
	function kf(a){var b=[],c=a.Y.value;null!=c?c.R()||c.X(F,function(a,c){b.push(new x(a,c))}):a.Y.children.ka(function(a,c){null!=c.value&&b.push(new x(a,c.value))});return b}function lf(a,b){if(b.j())return a;var c=jf(a,b);return null!=c?new ef(new Pe(c)):new ef(a.Y.subtree(b))}ef.prototype.j=function(){return this.Y.j()};ef.prototype.apply=function(a){return mf(v,this.Y,a)};
	function mf(a,b,c){if(null!=b.value)return c.M(a,b.value);var d=null;b.children.ka(function(b,f){".priority"===b?(D(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=mf(a.C(b),f,c)});c.ja(a).j()||null===d||(c=c.M(a.C(".priority"),d));return c};la.ue;function nf(){this.f=ff;this.g=[];this.m=-1}h=nf.prototype;
	h.mc=function(a){var b=xc(this.g,function(b){return b.vc===a});D(0<=b,"removeWrite called with nonexistent writeId.");var c=this.g[b];this.g.splice(b,1);for(var d=c.visible,e=!1,f=this.g.length-1;d&&0<=f;){var g=this.g[f];g.visible&&(f>=b&&of(g,c.path)?d=!1:c.path.contains(g.path)&&(e=!0));f--}if(d){if(e)this.f=pf(this.g,qf,v),0<this.g.length?this.m=this.g[this.g.length-1].vc:this.m=-1;else if(c.Ba)this.f=this.f.mc(c.path);else{var k=this;P(c.children,function(a,b){k.f=k.f.mc(c.path.C(b))})}return c.path}return null};
	h.qa=function(a,b,c,d){if(c||d){var e=lf(this.f,a);return!d&&e.j()?b:d||null!=b||null!=jf(e,v)?(e=pf(this.g,function(b){return(b.visible||d)&&(!c||!(0<=zb(c,b.vc)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||O,e.apply(b)):null}e=jf(this.f,a);if(null!=e)return e;e=lf(this.f,a);return e.j()?b:null!=b||null!=jf(e,v)?(b=b||O,e.apply(b)):null};
	h.Gb=function(a,b){var c=O,d=jf(this.f,a);if(d)d.R()||d.X(F,function(a,b){c=c.U(a,b)});else if(b){var e=lf(this.f,a);b.X(F,function(a,b){var d=lf(e,new A(a)).apply(b);c=c.U(a,d)});Ob(kf(e),function(a){c=c.U(a.name,a.node)})}else e=lf(this.f,a),Ob(kf(e),function(a){c=c.U(a.name,a.node)});return c};h.Tb=function(a,b,c,d){D(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.C(b);if(null!=jf(this.f,a))return null;a=lf(this.f,a);return a.j()?d.ja(b):a.apply(d.ja(b))};
	h.Ia=function(a,b,c){a=a.C(b);var d=jf(this.f,a);return null!=d?d:Oa(c,b)?lf(this.f,a).apply(c.u().P(b)):null};h.Cb=function(a){return jf(this.f,a)};h.Ac=function(a,b,c,d,e,f){var g;a=lf(this.f,a);g=jf(a,v);if(null==g)if(null!=b)g=a.apply(b);else return[];g=g.La(f);if(g.j()||g.R())return[];b=[];a=je(f);e=e?g.qb(c,f):g.pb(c,f);for(f=Lc(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=Lc(e);return b};
	function of(a,b){return a.Ba?a.path.contains(b):!!pc(a.children,function(c,d){return a.path.C(d).contains(b)})}function qf(a){return a.visible}
	function pf(a,b,c){for(var d=ff,e=0;e<a.length;++e){var f=a[e];if(b(f)){var g=f.path;if(f.Ba)c.contains(g)?(g=B(c,g),d=gf(d,g,f.Ba)):g.contains(c)&&(g=B(g,c),d=gf(d,v,f.Ba.ja(g)));else if(f.children)if(c.contains(g))g=B(c,g),d=hf(d,g,f.children);else{if(g.contains(c))if(g=B(g,c),g.j())d=hf(d,v,f.children);else if(f=J(f.children,C(g)))f=f.ja(t(g)),d=gf(d,v,f)}else throw Md("WriteRecord should have .snap or .children");}}return d}function rf(a,b){this.fb=a;this.Y=b}h=rf.prototype;
	h.qa=function(a,b,c){return this.Y.qa(this.fb,a,b,c)};h.Gb=function(a){return this.Y.Gb(this.fb,a)};h.Tb=function(a,b,c){return this.Y.Tb(this.fb,a,b,c)};h.Cb=function(a){return this.Y.Cb(this.fb.C(a))};h.Ac=function(a,b,c,d,e){return this.Y.Ac(this.fb,a,b,c,d,e)};h.Ia=function(a,b){return this.Y.Ia(this.fb,a,b)};h.C=function(a){return new rf(this.fb.C(a),this.Y)};function sf(){Ne.call(this,["online"]);this.f=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.f||(a.f=!0,a.A("online",!0))},!1);window.addEventListener("offline",function(){a.f&&(a.f=!1,a.A("online",!1))},!1)}}ka(sf,Ne);sf.prototype.Lc=function(a){D("online"===a,"Unknown event type: "+a);return[this.f]};ba(sf);function tf(){this.children={};this.Dc=0;this.value=null}function uf(a,b,c){this.m=a?a:"";this.g=b?b:null;this.f=c?c:new tf}function vf(a,b){for(var c=b instanceof A?b:new A(b),d=a,e;null!==(e=C(c));)d=new uf(e,d,J(d.f.children,e)||new tf),c=t(c);return d}h=uf.prototype;h.va=function(){return this.f.value};function wf(a,b){D("undefined"!==typeof b,"Cannot set value to undefined");a.f.value=b;xf(a)}h.ec=function(){return 0<this.f.Dc};h.j=function(){return null===this.va()&&!this.ec()};
	h.X=function(a){var b=this;P(this.f.children,function(c,d){a(new uf(d,b,c))})};function yf(a,b,c,d){c&&!d&&b(a);a.X(function(a){yf(a,b,!0,d)});c&&d&&b(a)}function zf(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}h.path=function(){return new A(null===this.g?this.m:this.g.path()+"/"+this.m)};h.name=function(){return this.m};h.parent=function(){return this.g};
	function xf(a){if(null!==a.g){var b=a.g,c=a.m,d=a.j(),e=y(b.f.children,c);d&&e?(delete b.f.children[c],b.f.Dc--,xf(b)):d||e||(b.f.children[c]=a.f,b.f.Dc++,xf(b))}};function Af(){Ne.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.ha=!0;if(b){var c=this;document.addEventListener(b,
	function(){var b=!document[a];b!==c.ha&&(c.ha=b,c.A("visible",b))},!1)}}ka(Af,Ne);Af.prototype.Lc=function(a){D("visible"===a,"Unknown event type: "+a);return[this.ha]};ba(Af);var Bf=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);D(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);D(20===c.length,"nextPushId: Length should be 20.");
	return c}}();function Cf(){this.f={}}
	function Df(a,b){var c=b.type,d=b.Ja;D("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");D(".priority"!==d,"Only non-priority child changes can be tracked.");var e=J(a.f,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.f[d]=new G("child_changed",b.Ca,d,e.Ca);else if("child_removed"==c&&"child_added"==f)delete a.f[d];else if("child_removed"==c&&"child_changed"==f)a.f[d]=new G("child_removed",e.Sc,d);else if("child_changed"==c&&"child_added"==
	f)a.f[d]=new G("child_added",b.Ca,d);else if("child_changed"==c&&"child_changed"==f)a.f[d]=new G("child_changed",b.Ca,d,e.Sc);else throw Md("Illegal combination of changes: "+b+" occurred after "+e);}else a.f[d]=b};function Ef(a){this.g=a;this.w=a.G.W()}function Ff(a,b,c,d){var e=[],f=[];Ob(b,function(b){"child_changed"===b.type&&a.w.gc(b.Sc,b.Ca)&&f.push(new G("child_moved",b.Ca,b.Ja))});Gf(a,e,"child_removed",b,d,c);Gf(a,e,"child_added",b,d,c);Gf(a,e,"child_moved",f,d,c);Gf(a,e,"child_changed",b,d,c);Gf(a,e,Qa,b,d,c);return e}function Gf(a,b,c,d,e,f){d=sc(d,function(a){return a.type===c});zc(d,r(a.f,a));Ob(d,function(c){var d=Hf(a,c,f);Ob(e,function(e){e.Xc(c.type)&&b.push(e.createEvent(d,a.g))})})}
	function Hf(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.lc=c.Mc(b.Ja,b.Ca,a.w));return b}Ef.prototype.f=function(a,b){if(null==a.Ja||null==b.Ja)throw Md("Should only compare child_ events.");return this.w.compare(new x(a.Ja,a.Ca),new x(b.Ja,b.Ca))};function If(){}If.prototype.Xc;If.prototype.createEvent;If.prototype.Qa;If.prototype.Ec;If.prototype.matches;If.prototype.Nc;function Jf(a,b,c){this.jb=a;this.Ta=b;this.Ua=c||null}h=Jf.prototype;h.Xc=function(a){return"value"===a};h.createEvent=function(a,b){var c=b.G.W();return new Wa("value",this,new U(a.Ca,b.yb(),c))};
	h.Qa=function(a){var b=this.Ua;if("cancel"===a.dc()){D(this.Ta,"Raising a cancel event on a listener with no cancel callback");var c=this.Ta;return function(){c.call(b,a.error)}}var d=this.jb;return function(){d.call(b,a.oc)}};h.Ec=function(a,b){return this.Ta?new Xa(this,a,b):null};h.matches=function(a){return a instanceof Jf?a.jb&&this.jb?a.jb===this.jb&&a.Ua===this.Ua:!0:!1};h.Nc=function(){return null!==this.jb};function Kf(a,b,c){this.ia=a;this.Ta=b;this.Ua=c}h=Kf.prototype;
	h.Xc=function(a){a="children_added"===a?"child_added":a;return nc(this.ia,"children_removed"===a?"child_removed":a)};h.Ec=function(a,b){return this.Ta?new Xa(this,a,b):null};h.createEvent=function(a,b){D(null!=a.Ja,"Child events should have a childName.");var c=b.yb().C(a.Ja);return new Wa(a.type,this,new U(a.Ca,c,b.G.W()),a.lc)};
	h.Qa=function(a){var b=this.Ua;if("cancel"===a.dc()){D(this.Ta,"Raising a cancel event on a listener with no cancel callback");var c=this.Ta;return function(){c.call(b,a.error)}}var d=this.ia[a.bc];return function(){d.call(b,a.oc,a.lc)}};
	h.matches=function(a){if(a instanceof Kf){if(!this.ia||!a.ia)return!0;if(this.Ua===a.Ua){var b=jc(a.ia);if(b===jc(this.ia)){if(1===b){var b=kc(a.ia),c=kc(this.ia);return c===b&&(!a.ia[b]||!this.ia[c]||a.ia[b]===this.ia[c])}return ic(this.ia,function(b,c){return a.ia[c]===b})}}}return!1};h.Nc=function(){return null!==this.ia};function Lf(a,b){this.L=a;this.f=b}function Mf(a,b,c,d){return new Lf(new Ma(b,c,d),a.f)}function Nf(a){return a.L.ca?a.L.u():null}Lf.prototype.I=function(){return this.f};function Ua(a){return a.f.ca?a.f.u():null};function Of(a,b){this.uc=a;this.Od=b}function Pf(a){this.O=a}
	Pf.prototype.Ma=function(a,b,c,d){var e=new Cf,f;if(b.type===sa)b.source.Ic?c=Qf(this,a,b.path,b.Ba,c,d,e):(D(b.source.kd,"Unknown source."),f=b.source.cd,c=Rf(this,a,b.path,b.Ba,c,d,f,e));else if(b.type===de)b.source.Ic?c=Sf(this,a,b.path,b.children,c,d,e):(D(b.source.kd,"Unknown source."),f=b.source.cd,c=Tf(this,a,b.path,b.children,c,d,f,e));else if(b.type===na)if(b.Yc)if(f=b.path,null!=c.Cb(f))c=a;else{b=new Ta(c,a,d);d=a.L.u();if(f.j()||".priority"===C(f))Na(a.I())?b=c.qa(Ua(a)):(b=a.I().u(),
	D(b instanceof Ae,"serverChildren would be complete if leaf node"),b=c.Gb(b)),b=this.O.pa(d,b,e);else{f=C(f);var g=c.Ia(f,a.I());null==g&&Oa(a.I(),f)&&(g=d.P(f));b=null!=g?this.O.M(d,f,g,b,e):a.L.u().wa(f)?this.O.M(d,f,O,b,e):d;b.j()&&Na(a.I())&&(d=c.qa(Ua(a)),d.R()&&(b=this.O.pa(b,d,e)))}d=Na(a.I())||null!=c.Cb(v);c=Mf(a,b,d,this.O.za())}else c=Uf(this,a,b.path,c,d,e);else if(b.type===qa)d=b.path,b=a.I(),f=b.u(),g=b.ca||d.j(),c=Vf(this,new Lf(a.L,new Ma(f,g,b.mb)),d,c,Sa,e);else throw Md("Unknown operation type: "+
	b.type);e=lc(e.f);d=c;b=d.L;b.ca&&(f=b.u().R()||b.u().j(),g=Nf(a),(0<e.length||!a.L.ca||f&&!b.u().$(g)||!b.u().J().$(g.J()))&&e.push(Pa(Nf(d))));return new Of(c,e)};
	function Vf(a,b,c,d,e,f){var g=b.L;if(null!=d.Cb(c))return b;var k;if(c.j())D(Na(b.I()),"If change path is empty, we must have complete server data"),b.I().mb?(e=Ua(b),d=d.Gb(e instanceof Ae?e:O)):d=d.qa(Ua(b)),f=a.O.pa(b.L.u(),d,f);else{var l=C(c);if(".priority"==l)D(1==Aa(c),"Can't have a priority with additional path components"),f=g.u(),k=b.I().u(),d=d.Tb(c,f,k),f=null!=d?a.O.ba(f,d):g.u();else{var m=t(c);Oa(g,l)?(k=b.I().u(),d=d.Tb(c,g.u(),k),d=null!=d?g.u().P(l).M(m,d):g.u().P(l)):d=d.Ia(l,
	b.I());f=null!=d?a.O.M(g.u(),l,d,e,f):g.u()}}return Mf(b,f,g.ca||c.j(),a.O.za())}function Rf(a,b,c,d,e,f,g,k){var l=b.I();g=g?a.O:a.O.nb();if(c.j())d=g.pa(l.u(),d,null);else if(g.za()&&!l.mb)d=l.u().M(c,d),d=g.pa(l.u(),d,null);else{var m=C(c);if((c.j()?!l.ca||l.mb:!Oa(l,C(c)))&&1<Aa(c))return b;d=l.u().P(m).M(t(c),d);d=".priority"==m?g.ba(l.u(),d):g.M(l.u(),m,d,Sa,null)}l=l.ca||c.j();b=new Lf(b.L,new Ma(d,l,g.za()));return Vf(a,b,c,e,new Ta(e,b,f),k)}
	function Qf(a,b,c,d,e,f,g){var k=b.L;e=new Ta(e,b,f);if(c.j())d=a.O.pa(b.L.u(),d,g),a=Mf(b,d,!0,a.O.za());else if(f=C(c),".priority"===f)d=a.O.ba(b.L.u(),d),a=Mf(b,d,k.ca,k.mb);else{c=t(c);var l=k.u().P(f),m;if(c.j())m=d;else{var u=e.ld(f);null!=u?m=".priority"===Ba(c)&&u.ja(c.parent()).j()?u:u.M(c,d):m=O}l.$(m)?a=b:(d=a.O.M(k.u(),f,m,e,g),a=Mf(b,d,k.ca,a.O.za()))}return a}
	function Sf(a,b,c,d,e,f,g){var k=b;bf(d,function(d,m){var u=c.C(d);Oa(b.L,C(u))&&(k=Qf(a,k,u,m,e,f,g))});bf(d,function(d,m){var u=c.C(d);Oa(b.L,C(u))||(k=Qf(a,k,u,m,e,f,g))});return k}function Wf(a,b){bf(b,function(b,d){a=a.M(b,d)});return a}
	function Tf(a,b,c,d,e,f,g,k){if(b.I().u().j()&&!Na(b.I()))return b;var l=b;c=c.j()?d:Ve(Se,c,d);var m=b.I().u();c.children.ka(function(c,d){if(m.wa(c)){var I=b.I().u().P(c),I=Wf(I,d);l=Rf(a,l,new A(c),I,e,f,g,k)}});c.children.ka(function(c,d){var I=!Na(b.I())&&null==d.value;m.wa(c)||I||(I=b.I().u().P(c),I=Wf(I,d),l=Rf(a,l,new A(c),I,e,f,g,k))});return l}
	function Uf(a,b,c,d,e,f){if(null!=d.Cb(c))return b;var g=new Ta(d,b,e),k=e=b.L.u();if(Na(b.I())){if(c.j())e=d.qa(Ua(b)),k=a.O.pa(b.L.u(),e,f);else if(".priority"===C(c)){var l=d.Ia(C(c),b.I());null==l||e.j()||e.J().$(l)||(k=a.O.ba(e,l))}else l=C(c),e=d.Ia(l,b.I()),null!=e&&(k=a.O.M(b.L.u(),l,e,g,f));e=!0}else if(b.L.ca||c.j())k=e,e=b.L.u(),e.R()||e.X(F,function(c){var e=d.Ia(c,b.I());null!=e&&(k=a.O.M(k,c,e,g,f))}),e=b.L.ca;else{l=C(c);if(1==Aa(c)||Oa(b.L,l))c=d.Ia(l,b.I()),null!=c&&(k=a.O.M(e,l,
	c,g,f));e=!1}return Mf(b,k,e,a.O.za())};function Xf(a,b){this.ya=a;var c=a.G,d=new Yf(c.W()),c=Zf(c)?new Yf(c.W()):c.la?new $f(c):new ag(c);this.g=new Pf(c);var e=b.I(),f=b.L,g=d.pa(O,e.u(),null),k=c.pa(O,f.u(),null);this.Da=new Lf(new Ma(k,f.ca,c.za()),new Ma(g,e.ca,d.za()));this.f=[];this.m=new Ef(a)}function bg(a){return a.ya}h=Xf.prototype;h.I=function(){return this.Da.I().u()};h.Pa=function(a){var b=Ua(this.Da);return b&&(Zf(this.ya.G)||!a.j()&&!b.P(C(a)).j())?b.ja(a):null};h.j=function(){return 0===this.f.length};h.ib=function(a){this.f.push(a)};
	h.Sa=function(a,b){var c=[];if(b){D(null==a,"A cancel should cancel all event registrations.");var d=this.ya.path;Ob(this.f,function(a){(a=a.Ec(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.f.length;++f){var g=this.f[f];if(!g.matches(a))e.push(g);else if(a.Nc()){e=e.concat(this.f.slice(f+1));break}}this.f=e}else this.f=[];return c};
	h.Ma=function(a,b,c){a.type===de&&null!==a.source.ab&&(D(Ua(this.Da),"We should always have a full cache before handling merges"),D(Nf(this.Da),"Missing event cache, even though we have a server cache"));var d=this.Da;a=this.g.Ma(d,a,b,c);b=this.g;c=a.uc;D(c.L.u().ub(b.O.W()),"Event snap not indexed");D(c.I().u().ub(b.O.W()),"Server snap not indexed");D(Na(a.uc.I())||!Na(d.I()),"Once a server snap is complete, it should never go back");this.Da=a.uc;return cg(this,a.Od,a.uc.L.u(),null)};
	function dg(a,b){var c=a.Da.L,d=[];c.u().R()||c.u().X(F,function(a,b){d.push(new G("child_added",b,a))});c.ca&&d.push(Pa(c.u()));return cg(a,d,c.u(),b)}function cg(a,b,c,d){return Ff(a.m,b,c,d?[d]:a.f)};function eg(){this.f={}}h=eg.prototype;h.j=function(){return $b(this.f)};h.Ma=function(a,b,c){var d=a.source.ab;if(null!==d)return d=J(this.f,d),D(null!=d,"SyncTree gave us an op for an invalid query."),d.Ma(a,b,c);var e=[];P(this.f,function(d){e=e.concat(d.Ma(a,b,c))});return e};h.ib=function(a,b,c,d,e){var f=a.ra(),g=J(this.f,f);if(!g){var g=c.qa(e?d:null),k=!1;g?k=!0:(d instanceof Ae?g=c.Gb(d):g=O,k=!1);g=new Xf(a,new Lf(new Ma(g,k,!1),new Ma(d,e,!1)));this.f[f]=g}g.ib(b);return dg(g,b)};
	h.Sa=function(a,b,c){var d=a.ra(),e=[],f=[],g=null!=fg(this);if("default"===d){var k=this;P(this.f,function(a,d){f=f.concat(a.Sa(b,c));a.j()&&(delete k.f[d],Zf(a.ya.G)||e.push(a.ya))})}else{var l=J(this.f,d);l&&(f=f.concat(l.Sa(b,c)),l.j()&&(delete this.f[d],Zf(l.ya.G)||e.push(l.ya)))}g&&null==fg(this)&&e.push(new V(a.B,a.path));return{fe:e,Qd:f}};function gg(a){return sc(lc(a.f),function(a){return!Zf(a.ya.G)})}h.Pa=function(a){var b=null;P(this.f,function(c){b=b||c.Pa(a)});return b};
	function hg(a,b){if(Zf(b.G))return fg(a);var c=b.ra();return J(a.f,c)}function fg(a){return qc(a.f,function(a){return Zf(a.ya.G)})||null};la.re;function ig(a){this.f=Se;this.g=new nf;this.A={};this.m={};this.o=a}function jg(a,b,c,d,e){var f=a.g,g=e;D(d>f.m,"Stacking an older write on top of newer ones");p(g)||(g=!0);f.g.push({path:b,Ba:c,vc:d,visible:g});g&&(f.f=gf(f.f,b,c));f.m=d;return e?kg(a,new ra(oa,b,c)):[]}function lg(a,b,c,d){var e=a.g;D(d>e.m,"Stacking an older merge on top of newer ones");e.g.push({path:b,children:c,vc:d,visible:!0});e.f=hf(e.f,b,c);e.m=d;c=Re(c);return kg(a,new ce(oa,b,c))}
	function mg(a,b,c){c=c||!1;b=a.g.mc(b);return null==b?[]:kg(a,new ma(b,c))}function ng(a,b,c){c=Re(c);return kg(a,new ce(ge,b,c))}function og(a,b,c,d){d=pg(a,d);if(null!=d){var e=qg(d);d=e.path;e=e.ab;b=B(d,b);c=new ra(new fe(!1,!0,e,!0),b,c);return rg(a,d,c)}return[]}function sg(a,b,c,d){if(d=pg(a,d)){var e=qg(d);d=e.path;e=e.ab;b=B(d,b);c=Re(c);c=new ce(new fe(!1,!0,e,!0),b,c);return rg(a,d,c)}return[]}
	ig.prototype.ib=function(a,b){var c=a.path,d=null,e=!1;$e(this.f,c,function(a,b){var f=B(a,c);d=b.Pa(f);e=e||null!=fg(b);return!d});var f=this.f.get(c);f?(e=e||null!=fg(f),d=d||f.Pa(v)):(f=new eg,this.f=this.f.set(c,f));var g;null!=d?g=!0:(g=!1,d=O,df(this.f.subtree(c),function(a,b){var c=b.Pa(v);c&&(d=d.U(a,c))}));var k=null!=hg(f,a);if(!k&&!Zf(a.G)){var l=tg(a);D(!nc(this.m,l),"View does not exist, but we have a tag");var m=ug++;this.m[l]=m;this.A["_"+m]=l}g=f.ib(a,b,new rf(c,this.g),d,g);k||e||
	(f=hg(f,a),g=g.concat(vg(this,a,f)));return g};
	ig.prototype.Sa=function(a,b,c){var d=a.path,e=this.f.get(d),f=[];if(e&&("default"===a.ra()||null!=hg(e,a))){f=e.Sa(a,b,c);e.j()&&(this.f=this.f.remove(d));e=f.fe;f=f.Qd;b=-1!==xc(e,function(a){return Zf(a.G)});var g=Ye(this.f,d,function(a,b){return null!=fg(b)});if(b&&!g&&(d=this.f.subtree(d),!d.j()))for(var d=wg(d),k=0;k<d.length;++k){var l=d[k],m=l.ya,l=xg(this,l);this.o.$c(m,yg(this,m),l.fc,l.S)}if(!g&&0<e.length&&!c)if(b)this.o.qc(a,null);else{var u=this;Ob(e,function(a){a.ra();var b=u.m[tg(a)];
	u.o.qc(a,b)})}zg(this,e)}return f};ig.prototype.qa=function(a,b){var c=this.g,d=Ye(this.f,a,function(b,c){var d=B(b,a);if(d=c.Pa(d))return d});return c.qa(a,d,b,!0)};function wg(a){return We(a,function(a,c,d){if(c&&null!=fg(c))return[fg(c)];var e=[];c&&(e=gg(c));P(d,function(a){e=e.concat(a)});return e})}function zg(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!Zf(d.G)){var d=tg(d),e=a.m[d];delete a.m[d];delete a.A["_"+e]}}}
	function vg(a,b,c){var d=b.path,e=yg(a,b);c=xg(a,c);b=a.o.$c(b,e,c.fc,c.S);d=a.f.subtree(d);if(e)D(null==fg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=We(d,function(a,b,c){if(!a.j()&&b&&null!=fg(b))return[bg(fg(b))];var d=[];b&&(d=d.concat(tc(gg(b),function(a){return a.ya})));P(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.o.qc(c,yg(a,c));return b}
	function xg(a,b){var c=b.ya,d=yg(a,c);return{fc:function(){return(b.I()||O).hash()},S:function(b){if("ok"===b){if(d){var f=c.path;if(b=pg(a,d)){var g=qg(b);b=g.path;g=g.ab;f=B(b,f);f=new pa(new fe(!1,!0,g,!0),f);b=rg(a,b,f)}else b=[]}else b=kg(a,new pa(ge,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
	(f="The service is unavailable");f=Error(b+": "+f);f.code=b.toUpperCase();return a.Sa(c,null,f)}}}function tg(a){return a.path.toString()+"$"+a.ra()}function qg(a){var b=a.indexOf("$");D(-1!==b&&b<a.length-1,"Bad queryKey.");return{ab:a.substr(b+1),path:new A(a.substr(0,b))}}function pg(a,b){var c=a.A,d="_"+b;return null!==c&&d in c?c[d]:void 0}function yg(a,b){var c=tg(b);return J(a.m,c)}var ug=1;
	function rg(a,b,c){var d=a.f.get(b);D(d,"Missing sync point for query tag that we're tracking");return d.Ma(c,new rf(b,a.g),null)}function kg(a,b){return Ag(a,b,a.f,null,new rf(v,a.g))}function Ag(a,b,c,d,e){if(b.path.j())return Bg(a,b,c,d,e);var f=c.get(v);null==d&&null!=f&&(d=f.Pa(v));var g=[],k=C(b.path),l=b.Pb(k);if((c=c.children.get(k))&&l)var m=d?d.P(k):null,k=e.C(k),g=g.concat(Ag(a,l,c,m,k));f&&(g=g.concat(f.Ma(b,e,d)));return g}
	function Bg(a,b,c,d,e){var f=c.get(v);null==d&&null!=f&&(d=f.Pa(v));var g=[];c.children.ka(function(c,f){var m=d?d.P(c):null,u=e.C(c),z=b.Pb(c);z&&(g=g.concat(Bg(a,z,f,m,u)))});f&&(g=g.concat(f.Ma(b,e,d)));return g};function Yf(a){this.w=a}h=Yf.prototype;h.M=function(a,b,c,d,e){D(a.ub(this.w),"A node must be indexed if only a child is updated");d=a.P(b);if(d.$(c))return a;null!=e&&(c.j()?a.wa(b)?Df(e,new G("child_removed",d,b)):D(a.R(),"A child remove without an old child only makes sense on a leaf node"):d.j()?Df(e,new G("child_added",c,b)):Df(e,new G("child_changed",c,b,d)));return a.R()&&c.j()?a:a.U(b,c).La(this.w)};
	h.pa=function(a,b,c){null!=c&&(a.R()||a.X(F,function(a,e){b.wa(a)||Df(c,new G("child_removed",e,a))}),b.R()||b.X(F,function(b,e){if(a.wa(b)){var f=a.P(b);f.$(e)||Df(c,new G("child_changed",e,b,f))}else Df(c,new G("child_added",e,b))}));return b.La(this.w)};h.ba=function(a,b){return a.j()?O:a.ba(b)};h.za=function(){return!1};h.nb=function(){return this};h.W=function(){return this.w};function ag(a){this.m=new Yf(a.W());this.w=a.W();var b;a.ma?(b=Cg(a),b=a.W().Lb(Dg(a),b)):b=a.W().Ob();this.g=b;a.na?(b=Eg(a),a=a.W().Lb(Fg(a),b)):a=a.W().Mb();this.f=a}h=ag.prototype;h.matches=function(a){return 0>=this.w.compare(this.g,a)&&0>=this.w.compare(a,this.f)};h.M=function(a,b,c,d,e){this.matches(new x(b,c))||(c=O);return this.m.M(a,b,c,d,e)};
	h.pa=function(a,b,c){b.R()&&(b=O);var d=b.La(this.w),d=d.ba(O),e=this;b.X(F,function(a,b){e.matches(new x(a,b))||(d=d.U(a,O))});return this.m.pa(a,d,c)};h.ba=function(a){return a};h.za=function(){return!0};h.nb=function(){return this.m};h.W=function(){return this.w};function $f(a){this.f=new ag(a);this.w=a.W();D(a.la,"Only valid if limit has been set");this.da=a.da;this.g=!Gg(a)}h=$f.prototype;h.M=function(a,b,c,d,e){this.f.matches(new x(b,c))||(c=O);return a.P(b).$(c)?a:a.Ra()<this.da?this.f.nb().M(a,b,c,d,e):Hg(this,a,b,c,d,e)};
	h.pa=function(a,b,c){var d;if(b.R()||b.j())d=O.La(this.w);else if(2*this.da<b.Ra()&&b.ub(this.w)){d=O.La(this.w);b=this.g?b.qb(this.f.f,this.w):b.pb(this.f.g,this.w);for(var e=0;0<b.Fa.length&&e<this.da;){var f=Lc(b),g;if(g=this.g?0>=this.w.compare(this.f.g,f):0>=this.w.compare(f,this.f.f))d=d.U(f.name,f.node),e++;else break}}else{d=b.La(this.w);d=d.ba(O);var k,l,m;if(this.g){b=d.md(this.w);k=this.f.f;l=this.f.g;var u=je(this.w);m=function(a,b){return u(b,a)}}else b=d.ob(this.w),k=this.f.g,l=this.f.f,
	m=je(this.w);for(var e=0,z=!1;0<b.Fa.length;)f=Lc(b),!z&&0>=m(k,f)&&(z=!0),(g=z&&e<this.da&&0>=m(f,l))?e++:d=d.U(f.name,O)}return this.f.nb().pa(a,d,c)};h.ba=function(a){return a};h.za=function(){return!0};h.nb=function(){return this.f.nb()};h.W=function(){return this.w};
	function Hg(a,b,c,d,e,f){var g;if(a.g){var k=je(a.w);g=function(a,b){return k(b,a)}}else g=je(a.w);D(b.Ra()==a.da,"");var l=new x(c,d),m=a.g?Ee(b,a.w):Fe(b,a.w),u=a.f.matches(l);if(b.wa(c)){var z=b.P(c),m=e.Kc(a.w,m,a.g);null!=m&&m.name==c&&(m=e.Kc(a.w,m,a.g));e=null==m?1:g(m,l);if(u&&!d.j()&&0<=e)return null!=f&&Df(f,new G("child_changed",d,c,z)),b.U(c,d);null!=f&&Df(f,new G("child_removed",z,c));b=b.U(c,O);return null!=m&&a.f.matches(m)?(null!=f&&Df(f,new G("child_added",m.node,m.name)),b.U(m.name,
	m.node)):b}return d.j()?b:u&&0<=g(m,l)?(null!=f&&(Df(f,new G("child_removed",m.node,m.name)),Df(f,new G("child_added",d,c))),b.U(c,d).U(m.name,O)):b};function Ig(){this.lb=this.na=this.eb=this.ma=this.la=!1;this.da=0;this.gb="";this.tb=null;this.Ya="";this.rb=null;this.Xa="";this.w=F}var Jg=new Ig;function Gg(a){return""===a.gb?a.ma:"l"===a.gb}function Dg(a){D(a.ma,"Only valid if start has been set");return a.tb}function Cg(a){D(a.ma,"Only valid if start has been set");return a.eb?a.Ya:"[MIN_NAME]"}function Fg(a){D(a.na,"Only valid if end has been set");return a.rb}
	function Eg(a){D(a.na,"Only valid if end has been set");return a.lb?a.Xa:"[MAX_NAME]"}h=Ig.prototype;h.W=function(){return this.w};function Kg(a){var b=new Ig;b.la=a.la;b.da=a.da;b.ma=a.ma;b.tb=a.tb;b.eb=a.eb;b.Ya=a.Ya;b.na=a.na;b.rb=a.rb;b.lb=a.lb;b.Xa=a.Xa;b.w=a.w;return b}h.Pc=function(a){var b=Kg(this);b.la=!0;b.da=a;b.gb="";return b};h.Qc=function(a){var b=Kg(this);b.la=!0;b.da=a;b.gb="l";return b};h.Rc=function(a){var b=Kg(this);b.la=!0;b.da=a;b.gb="r";return b};
	h.pc=function(a,b){var c=Kg(this);c.ma=!0;p(a)||(a=null);c.tb=a;null!=b?(c.eb=!0,c.Ya=b):(c.eb=!1,c.Ya="");return c};h.ac=function(a,b){var c=Kg(this);c.na=!0;p(a)||(a=null);c.rb=a;p(b)?(c.lb=!0,c.Xa=b):(c.Ae=!1,c.Xa="");return c};function Lg(a,b){var c=Kg(a);c.w=b;return c}function Mg(a){var b={};a.ma&&(b.sp=a.tb,a.eb&&(b.sn=a.Ya));a.na&&(b.ep=a.rb,a.lb&&(b.en=a.Xa));if(a.la){b.l=a.da;var c=a.gb;""===c&&(c=Gg(a)?"l":"r");b.vf=c}a.w!==F&&(b.i=a.w.toString());return b}
	function Zf(a){return!(a.ma||a.na||a.la)}function Ng(a){var b={};if(Zf(a)&&a.w==F)return b;var c;a.w===F?c="$priority":a.w===se?c="$value":a.w===pe?c="$key":(D(a.w instanceof le,"Unrecognized index type!"),c=a.w.toString());b.orderBy=H(c);a.ma&&(b.startAt=H(a.tb),a.eb&&(b.startAt+=","+H(a.Ya)));a.na&&(b.endAt=H(a.rb),a.lb&&(b.endAt+=","+H(a.Xa)));a.la&&(Gg(a)?b.limitToFirst=a.da:b.limitToLast=a.da);return b}h.toString=function(){return H(Mg(this))};function Og(a){this.f=ec()+ec()+ec();this.g=a}
	Og.prototype.open=function(a,b,c){function d(){c&&(c(hb("USER_CANCELLED")),c=null)}var e=this,f=Xb(vb),g;b.requestId=this.f;b.redirectTo=f.scheme+"://"+f.host+"/blank/page.html";a+=/\?/.test(a)?"":"?";a+=Nb(b);(g=window.open(a,"_blank","location=no"))&&fa(g.addEventListener)?(g.addEventListener("loadstart",function(a){var b;if(b=a&&a.url)a:{try{var m=document.createElement("a");m.href=a.url;b=m.host===f.host&&"/blank/page.html"===m.pathname;break a}catch(u){}b=!1}b&&(a=Vb(a.url),g.removeEventListener("exit",
	d),g.close(),a=new wb(null,null,{requestId:e.f,requestKey:a}),e.g.requestWithCredential("/auth/session",a,c),c=null)}),g.addEventListener("exit",d)):c(hb("TRANSPORT_UNAVAILABLE"))};Og.isAvailable=function(){return!NODE_CLIENT&&ib()};Og.prototype.Ib=function(){return"redirect"};function Pg(a){if(!a.window_features||"undefined"!==typeof navigator&&(-1!==navigator.userAgent.indexOf("Fennec/")||-1!==navigator.userAgent.indexOf("Firefox/")&&-1!==navigator.userAgent.indexOf("Android")))a.window_features=void 0;a.window_name||(a.window_name="_blank");this.f=a}
	Pg.prototype.open=function(a,b,c){function d(a){g&&(document.body.removeChild(g),g=void 0);u&&(u=clearInterval(u));Tb(window,"message",e);Tb(window,"unload",d);if(m&&!a)try{m.close()}catch(b){k.postMessage("die",l)}m=k=void 0}function e(a){if(a.origin===l)try{var b=pb(a.data);"ready"===b.a?k.postMessage(z,l):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.forceKeepWindowOpen),c&&(c(null,b.d),c=null))}catch(e){}}var f=kb(),g,k;if(!this.f.relay_url)return c(Error("invalid arguments: origin of url and relay_url must match"));
	var l=Ub(a);if(l!==Ub(this.f.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},0);else{f&&(g=document.createElement("iframe"),g.setAttribute("src",this.f.relay_url),g.style.display="none",g.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(g),k=g.contentWindow);a+=(/\?/.test(a)?"":"?")+Nb(b);var m=window.open(a,this.f.window_name,this.f.window_features);k||(k=m);var u=setInterval(function(){m&&m.closed&&(d(!1),c&&(c(hb("USER_CANCELLED")),
	c=null))},500),z=H({a:"request",d:b});Sb(window,"unload",d);Sb(window,"message",e)}};
	Pg.isAvailable=function(){return!NODE_CLIENT&&"postMessage"in window&&!jb()&&!(ib()||"undefined"!==typeof navigator&&(navigator.userAgent.match(/Windows Phone/)||window.Windows&&/^ms-appx:/.test(location.href))||"undefined"!==typeof navigator&&"undefined"!==typeof window&&(navigator.userAgent.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||navigator.userAgent.match(/CriOS/)||navigator.userAgent.match(/Twitter for iPhone/)||navigator.userAgent.match(/FBAN\/FBIOS/)||window.navigator.standalone))&&
	!("undefined"!==typeof navigator&&navigator.userAgent.match(/PhantomJS/))};Pg.prototype.Ib=function(){return"popup"};function Qg(a){var b={},c={},d={},e="";try{var f=a.split("."),b=pb(Pd(f[0])||""),c=pb(Pd(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(g){}return{xe:b,Vb:c,data:d,ze:e}}function Rg(a){a=Qg(a).Vb;return"object"===typeof a&&a.hasOwnProperty("iat")?J(a,"iat"):null};function Sg(a,b){this.f=Ud("p:rest:");this.g=a;this.m=b;this.o=null;this.ea={}}function Tg(a,b){if(p(b))return"tag$"+b;var c=a.G;D(Zf(c)&&c.w==F,"should have a tag if it's not a default query.");return a.path.toString()}h=Sg.prototype;
	h.od=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.ra());var f=Tg(a,c),g={};this.ea[f]=g;a=Ng(a.G);var k=this;Ug(this,e+".json",a,function(a,b){var u=b;404===a&&(a=u=null);null===a&&k.m(e,u,!1,c);J(k.ea,f)===g&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};h.vd=function(a,b){var c=Tg(a,b);delete this.ea[c]};h.V=function(a,b){this.o=a;var c=Qg(a),d=c.data,c=c.Vb&&c.Vb.exp;b&&b("ok",{auth:d,expires:c})};h.sc=function(a){this.o=null;a("ok",null)};h.Tc=function(){};
	h.qd=function(){};h.hc=function(){};h.Db=function(){};h.pd=function(){};h.Vc=function(){};
	function Ug(a,b,c,d){c=c||{};c.format="export";a.o&&(c.auth=a.o);var e=(a.g.bb?"https://":"http://")+a.g.host+b+"?"+Nb(c);a.f("Sending REST request for "+e);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(d&&4===f.readyState){a.f("REST Response for "+e+" received. status:",f.status,"response:",f.responseText);var b=null;if(200<=f.status&&300>f.status){try{b=pb(f.responseText)}catch(c){S("Failed to parse JSON response for "+e+": "+f.responseText)}d(null,b)}else 401!==f.status&&404!==f.status&&
	S("Got unsuccessful REST response for "+e+" Status: "+f.status),d(f.status);d=null}};f.open("GET",e,!0);f.send()};function Vg(a,b){this.g=["session",a.jc,a.wb].join(":");this.f=b}Vg.prototype.set=function(a,b){if(!b)if(this.f.length)b=this.f[0];else throw Error("wd.login.SessionManager : No storage options available!");b.set(this.g,a)};Vg.prototype.get=function(){var a=tc(this.f,r(this.m,this)),a=sc(a,function(a){return null!==a});zc(a,function(a,c){return Rg(c.token)-Rg(a.token)});return 0<a.length?a.shift():null};Vg.prototype.m=function(a){try{var b=a.get(this.g);if(b&&b.token)return b}catch(c){}return null};
	function Wg(a){Ob(a.f,function(b){b.remove(a.g)})};function Da(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};var Xg=/[\[\].#$\/\u0000-\u001F\u007F]/,Yg=/[\[\].#$\u0000-\u001F\u007F]/;function Zg(a){return q(a)&&0!==a.length&&!Xg.test(a)}function $g(a){return null===a||q(a)||ea(a)&&!Xd(a)||ga(a)&&y(a,".sv")}function ah(a,b,c,d){d&&!p(b)||bh(M(a,1,d),b,c)}
	function bh(a,b,c){c instanceof A&&(c=new Ca(c,a));if(!p(b))throw Error(a+"contains undefined "+Fa(c));if(fa(b))throw Error(a+"contains a function "+Fa(c)+" with contents: "+b.toString());if(Xd(b))throw Error(a+"contains "+b.toString()+" "+Fa(c));if(q(b)&&b.length>10485760/3&&10485760<Da(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+Fa(c)+" ('"+b.substring(0,50)+"...')");if(ga(b)){var d=!1,e=!1;lb(b,function(b,g){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
	!0,!Zg(b)))throw Error(a+" contains an invalid key ("+b+") "+Fa(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);bh(a,g,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+Fa(c)+" in addition to actual children.");}}
	function ch(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!Zg(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(A.f);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
	function dh(a,b,c){var d=M(a,1,!1);if(!ga(b)||da(b))throw Error(d+" must be an Object containing the children to replace.");if(y(b,".value"))throw Error(d+' must not contain ".value".  To overwrite with a leaf value, just use .set() instead.');var e=[];lb(b,function(a,b){var k=new A(a);bh(d,b,c.C(k));if(".priority"===Ba(k)&&!$g(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});
	ch(d,e)}function eh(a,b,c){if(Xd(c))throw Error(M(a,b,!1)+"is "+c.toString()+", but must be a valid Wilddog priority (a string, finite number, server value, or null).");if(!$g(c))throw Error(M(a,b,!1)+"must be a valid Wilddog priority (a string, finite number, server value, or null).");}
	function fh(a,b,c){if(!c||p(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(M(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function gh(a,b,c,d){if((!d||p(c))&&!Zg(c))throw Error(M(a,b,d)+'was an invalid key: "'+c+'".  Wilddog keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
	function hh(a,b){if(!q(b)||0===b.length||Yg.test(b))throw Error(M(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function ih(a,b){if(".info"===C(b))throw Error(a+" failed: Can't modify data under /.info/");}function jh(a,b){if(!q(b))throw Error(M(a,1,!1)+"must be a valid credential (a string).");}function kh(a,b,c){if(!q(c))throw Error(M(a,b,!1)+"must be a valid string.");}
	function lh(a,b,c,d){if(!d||p(c))if(!ga(c)||null===c)throw Error(M(a,b,d)+"must be a valid object.");}function mh(a,b,c){if(!ga(b)||null===b||!y(b,c))throw Error(M(a,1,!1)+'must contain the key "'+c+'"');if(!q(J(b,c)))throw Error(M(a,1,!1)+'must contain the key "'+c+'" with type "string"');};function U(a,b,c){this.f=a;this.g=b;this.w=c}U.prototype.N=function(){L("Wilddog.DataSnapshot.val",0,0,arguments.length);return this.f.N()};U.prototype.val=U.prototype.N;U.prototype.hd=function(){L("Wilddog.DataSnapshot.exportVal",0,0,arguments.length);return this.f.N(!0)};U.prototype.exportVal=U.prototype.hd;U.prototype.m=function(){L("Wilddog.DataSnapshot.exists",0,0,arguments.length);return!this.f.j()};U.prototype.exists=U.prototype.m;
	U.prototype.C=function(a){L("Wilddog.DataSnapshot.child",0,1,arguments.length);ea(a)&&(a=String(a));hh("Wilddog.DataSnapshot.child",a);var b=new A(a),c=this.g.C(b);return new U(this.f.ja(b),c,F)};U.prototype.child=U.prototype.C;U.prototype.wa=function(a){L("Wilddog.DataSnapshot.hasChild",1,1,arguments.length);hh("Wilddog.DataSnapshot.hasChild",a);var b=new A(a);return!this.f.ja(b).j()};U.prototype.hasChild=U.prototype.wa;
	U.prototype.J=function(){L("Wilddog.DataSnapshot.getPriority",0,0,arguments.length);return this.f.J().N()};U.prototype.getPriority=U.prototype.J;U.prototype.o=function(a){L("Wilddog.DataSnapshot.forEach",1,1,arguments.length);N("Wilddog.DataSnapshot.forEach",1,a,!1);if(this.f.R())return!1;var b=this;return!!this.f.X(this.w,function(c,d){return a(new U(d,b.g.C(c),F))})};U.prototype.forEach=U.prototype.o;
	U.prototype.ec=function(){L("Wilddog.DataSnapshot.hasChildren",0,0,arguments.length);return this.f.R()?!1:!this.f.j()};U.prototype.hasChildren=U.prototype.ec;U.prototype.name=function(){S("Wilddog.DataSnapshot.name() being deprecated. Please use Wilddog.DataSnapshot.key() instead.");L("Wilddog.DataSnapshot.name",0,0,arguments.length);return this.key()};U.prototype.name=U.prototype.name;U.prototype.key=function(){L("Wilddog.DataSnapshot.key",0,0,arguments.length);return this.g.key()};
	U.prototype.key=U.prototype.key;U.prototype.Ra=function(){L("Wilddog.DataSnapshot.numChildren",0,0,arguments.length);return this.f.Ra()};U.prototype.numChildren=U.prototype.Ra;U.prototype.yb=function(){L("Wilddog.DataSnapshot.ref",0,0,arguments.length);return this.g};U.prototype.ref=U.prototype.yb;function W(a,b,c,d){this.B=a;this.path=b;this.G=c;this.f=d}
	function nh(a){var b=null,c=null;a.ma&&(b=Dg(a));a.na&&(c=Fg(a));if(a.W()===pe){if(a.ma){if("[MIN_NAME]"!=Cg(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=Eg(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
	typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.W()===F){if(null!=b&&!$g(b)||null!=c&&!$g(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(D(a.W()instanceof le||a.W()===se,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
	}function oh(a){if(a.ma&&a.na&&a.la&&(!a.la||""===a.gb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function ph(a,b){if(!0===a.f)throw Error(b+": You can't combine multiple orderBy calls.");}W.prototype.yb=function(){L("Query.ref",0,0,arguments.length);return new V(this.B,this.path)};W.prototype.ref=W.prototype.yb;
	W.prototype.$a=function(a,b,c,d){L("Query.on",2,4,arguments.length);fh("Query.on",a,!1);N("Query.on",2,b,!1);var e=qh("Query.on",c,d);if("value"===a)rh(this.B,this,new Jf(b,e.cancel||null,e.context||null));else{var f={};f[a]=b;rh(this.B,this,new Kf(f,e.cancel,e.context))}return b};W.prototype.on=W.prototype.$a;
	W.prototype.xb=function(a,b,c){L("Query.off",0,3,arguments.length);fh("Query.off",a,!0);N("Query.off",2,b,!0);Ab("Query.off",3,c);var d=null,e=null;"value"===a?d=new Jf(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new Kf(e,null,c||null));e=this.B;d=".info"===C(this.path)?e.T.Sa(this,d):e.f.Sa(this,d);ab(e.g,this.path,d)};W.prototype.off=W.prototype.xb;
	W.prototype.m=function(a,b){function c(k){f&&(f=!1,e.xb(a,c),b&&b.call(d.context,k),g.m(k))}L("Query.once",1,4,arguments.length);fh("Query.once",a,!1);N("Query.once",2,b,!0);var d=qh("Query.once",arguments[2],arguments[3]),e=this,f=!0,g=new Q;Fd(g.f);this.$a(a,c,function(b){e.xb(a,c);d.cancel&&d.cancel.call(d.context,b);g.g(b)});return g.f};W.prototype.once=W.prototype.m;
	W.prototype.Pc=function(a){S("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");L("Query.limit",1,1,arguments.length);if(!ea(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limit: First argument must be a positive integer.");if(this.G.la)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");var b=this.G.Pc(a);oh(b);return new W(this.B,this.path,b,this.f)};W.prototype.limit=W.prototype.Pc;
	W.prototype.Qc=function(a){L("Query.limitToFirst",1,1,arguments.length);if(!ea(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.G.la)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new W(this.B,this.path,this.G.Qc(a),this.f)};W.prototype.limitToFirst=W.prototype.Qc;
	W.prototype.Rc=function(a){L("Query.limitToLast",1,1,arguments.length);if(!ea(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.G.la)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new W(this.B,this.path,this.G.Rc(a),this.f)};W.prototype.limitToLast=W.prototype.Rc;
	W.prototype.o=function(a){L("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');gh("Query.orderByChild",1,a,!1);ph(this,"Query.orderByChild");var b=Lg(this.G,new le(a));nh(b);return new W(this.B,
	this.path,b,!0)};W.prototype.orderByChild=W.prototype.o;W.prototype.A=function(){L("Query.orderByKey",0,0,arguments.length);ph(this,"Query.orderByKey");var a=Lg(this.G,pe);nh(a);return new W(this.B,this.path,a,!0)};W.prototype.orderByKey=W.prototype.A;W.prototype.H=function(){L("Query.orderByPriority",0,0,arguments.length);ph(this,"Query.orderByPriority");var a=Lg(this.G,F);nh(a);return new W(this.B,this.path,a,!0)};W.prototype.orderByPriority=W.prototype.H;
	W.prototype.T=function(){L("Query.orderByValue",0,0,arguments.length);ph(this,"Query.orderByValue");var a=Lg(this.G,se);nh(a);return new W(this.B,this.path,a,!0)};W.prototype.orderByValue=W.prototype.T;
	W.prototype.pc=function(a,b){L("Query.startAt",0,2,arguments.length);ah("Query.startAt",a,this.path,!0);gh("Query.startAt",2,b,!0);var c=this.G.pc(a,b);oh(c);nh(c);if(this.G.ma)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");p(a)||(b=a=null);return new W(this.B,this.path,c,this.f)};W.prototype.startAt=W.prototype.pc;
	W.prototype.ac=function(a,b){L("Query.endAt",0,2,arguments.length);ah("Query.endAt",a,this.path,!0);gh("Query.endAt",2,b,!0);var c=this.G.ac(a,b);oh(c);nh(c);if(this.G.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new W(this.B,this.path,c,this.f)};W.prototype.endAt=W.prototype.ac;
	W.prototype.g=function(a,b){L("Query.equalTo",1,2,arguments.length);ah("Query.equalTo",a,this.path,!1);gh("Query.equalTo",2,b,!0);if(this.G.ma)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.G.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.pc(a,b).ac(a,b)};W.prototype.equalTo=W.prototype.g;
	W.prototype.toString=function(){L("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.aa;c<a.F.length;c++)""!==a.F[c]&&(b+="/"+encodeURIComponent(String(a.F[c])));return this.B.toString()+(b||"/")};W.prototype.toString=W.prototype.toString;W.prototype.ra=function(){var a=Zd(Mg(this.G));return"{}"===a?"default":a};
	function qh(a,b,c){var d={cancel:null,context:null};if(b&&c)d.cancel=b,N(a,3,d.cancel,!0),d.context=c,Ab(a,4,d.context);else if(b)if("object"===typeof b&&null!==b)d.context=b;else if("function"===typeof b)d.cancel=b;else throw Error(M(a,3,!0)+" must either be a cancel callback or a context object.");return d};function sh(a,b,c,d){Ne.call(this,["auth_status"]);this.o=a;this.T=b;this.ha=c;this.ta=d;this.g=new Vg(a,[sb,K]);this.f=null;this.H=!1;th(this)}ka(sh,Ne);h=sh.prototype;h.Jc=function(){return this.f||null};function th(a){K.get("redirect_request_id")&&uh(a);var b=a.g.get();b&&b.token?(vh(a,b),a.T(b.token,function(c,d){wh(a,c,d,!1,b.token,b)},function(b,d){xh(a,"resumeSession()",b,d)})):vh(a,null)}
	function yh(a,b,c,d,e,f){"wilddogio-demo.com"===a.o.domain&&S("Wilddog authentication is not supported on demo Wilddogs (*.wilddogio-demo.com). To secure your Wilddog, create a production Wilddog at https://www.wilddog.com.");a.T(b,function(f,k){wh(a,f,k,!0,b,c,d||{},e)},function(b,c){xh(a,"auth()",b,c,f)})}function zh(a,b){Wg(a.g);vh(a,null);a.ha(function(a,d){if("ok"===a)T(b,null);else{var e=(a||"error").toUpperCase(),f=e;d&&(f+=": "+d);f=Error(f);f.code=e;T(b,f)}})}
	function wh(a,b,c,d,e,f,g,k){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=e,c=null,b&&y(b,"uid")?c=J(b,"uid"):y(f,"uid")&&(c=J(f,"uid")),f.uid=c,c="custom",b&&y(b,"provider")?c=J(b,"provider"):y(f,"provider")&&(c=J(f,"provider")),f.provider=c,Wg(a.g),g=g||{},c=sb,"sessionOnly"===g.remember&&(c=K),"none"!==g.remember&&a.g.set(f,c),vh(a,f)),T(k,null,f)):(Wg(a.g),vh(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,T(k,f))}
	function xh(a,b,c,d,e){S(b+" was canceled: "+d);Wg(a.g);vh(a,null);a=Error(d);a.code=c.toUpperCase();T(e,a)}function Ah(a,b,c,d,e){Bh(a);c=new wb(d||{},{},c||{});Ch(a,[fc,Zb],"/auth/"+b,c,e)}
	function Dh(a,b,c,d){Bh(a);var e=[Pg,Og];c=yb(c);"anonymous"===b||"password"===b?setTimeout(function(){T(d,hb("TRANSPORT_UNAVAILABLE"))},0):(c.rc.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"===typeof screen?.5*(screen.height-625):0)+",left="+("object"===typeof screen?.5*(screen.width-625):0),c.rc.relay_url=Yb(a.o.wb),c.rc.requestWithCredential=r(a.Ab,a),Ch(a,e,"/auth/"+b,c,d))}
	function uh(a){var b=K.get("redirect_request_id");if(b){var c=K.get("redirect_client_options");K.remove("redirect_request_id");K.remove("redirect_client_options");var d=[fc,Zb],b={requestId:b,requestKey:Vb(document.location.hash)},c=new wb(c,{},b);a.H=!0;try{document.location.hash=document.location.hash.replace(/&__wilddog_request_key=([a-zA-z0-9]*)/,"")}catch(e){}Ch(a,d,"/auth/session",c,function(){this.H=!1}.bind(a))}}
	h.Fc=function(a,b){Bh(this);var c=yb(a);c.Ka._method="POST";this.Ab("/users",c,function(a,c){a?T(b,a):T(b,a,c)})};h.Uc=function(a,b){var c=this;Bh(this);var d="/users/"+encodeURIComponent(a.email),e=yb(a);e.Ka._method="DELETE";this.Ab(d,e,function(a,d){!a&&d&&d.uid&&c.f&&c.f.uid&&c.f.uid===d.uid&&zh(c);T(b,a)})};h.Cc=function(a,b){Bh(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=yb(a);d.Ka._method="PUT";d.Ka.password=a.newPassword;this.Ab(c,d,function(a){T(b,a)})};
	h.Bc=function(a,b){Bh(this);var c="/users/"+encodeURIComponent(a.oldEmail)+"/email",d=yb(a);d.Ka._method="PUT";d.Ka.email=a.newEmail;d.Ka.password=a.password;this.Ab(c,d,function(a){T(b,a)})};h.Wc=function(a,b){Bh(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=yb(a);d.Ka._method="POST";this.Ab(c,d,function(a){T(b,a)})};h.Ab=function(a,b,c){Eh(this,[fc,Zb],a,b,c)};
	function Ch(a,b,c,d,e){Eh(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?yh(a,c.token,c,d.Wb,function(a,b){a?T(e,a):T(e,null,b)}):T(e,b||hb("UNKNOWN_ERROR"))})}
	function Eh(a,b,c,d,e){b=sc(b,function(a){return"function"===typeof a.isAvailable&&a.isAvailable()});0===b.length?setTimeout(function(){T(e,hb("TRANSPORT_UNAVAILABLE"))},0):(b=new (b.shift())(d.rc),d=mb(d.Ka),d.v=(NODE_CLIENT?"node-":"js-")+CLIENT_VERSION,d.transport=b.Ib(),d.suppress_status_codes=!0,a=Wb()+"/"+a.o.wb+c,b.open(a,d,function(a,b){if(a)T(e,a);else if(b&&b.error){var c=Error(b.error.message);c.code=b.error.code;c.details=b.error.details;T(e,c)}else T(e,null,b)}))}
	function vh(a,b){var c=null!==a.f||null!==b;a.f=b;c&&a.A("auth_status",b);a.ta(null!==b)}h.Lc=function(a){D("auth_status"===a,'initial event must be of type "auth_status"');return this.H?null:[this.f]};function Bh(a){var b=a.o;if("wilddogio.com"!==b.domain&&"wilddogio-demo.com"!==b.domain&&"auth.wilddog.com"===vb)throw Error("This custom Wilddog server ('"+a.o.domain+"') does not support delegated login.");};var Fh={},Gh=null;"undefined"!="function"&&"undefined"!==typeof module&&module.exports?Gh=__webpack_require__(265):Gh=eio;function Hh(a,b,c,d,e){this.T=a;this.m=Ud("c:"+this.T+":");this.ha=c;this.H=d;this.A=e;this.f=b;this.o=0;this.m("Connection created");this.g=Ih(this);this.g.on("open",Jh(this));this.g.on("error",Kh(this))}function Jh(a){return function(){a.g.on("message",Lh(a));a.g.on("close",Mh(a))}}
	function Lh(a){return function(b){if(null==b)throw Error("data is null");if(0!=b.charAt(0))if(2==b.charAt(0)){var c=null;try{c=JSON.parse(b.substr(1))}catch(f){throw f;}if("object"!=typeof c||2>c.length)throw Error("decodedData in wrong format");b=c[1];if("wd"==c[0])if("c"==b.t)if(c=b.d,"h"==c.t){b=c.d;var c=b.ts,d=b.v,e=b.h;a.sessionId=b.s;"1.0"!=d&&S("Protocol version mismatch detected");0==a.o&&(e!=a.f.Aa?(ub(a.f,e),a.m("updateHost ",e),a.g.close(),a.g=Ih(a),a.g.on("open",Jh(a)),a.g.on("error",
	Kh(a))):(a.o=1,a.m("realtime state connected"),b=a.f,d=b.Oa.indexOf(a.f.Aa),0<=d&&(b.Oa.splice(d,1),K.set("failHosts",JSON.stringify(b.Oa))),a.H&&(a.H(c),a.H=null)))}else"r"==c.t&&(c=c.d,a.m("Reset packet received.  New host: "+c),ub(a.f,c),a.close());else"d"==b.t&&a.ha(b.d);else a.m("eventType not known")}else 1!=b.charAt(0)&&a.m("data format error")}}function Mh(a){return function(){2!==a.o&&(a.m("Closing realtime connection."),a.o=2,a.A&&(a.A(),a.A=null))}}
	function Kh(a){return function(b){if(0==a.o){var c=a.f.Aa,d=a.f;null!=c&&0>d.Oa.indexOf(c)&&c!=d.host&&(d.Oa.push(c),K.set("failHosts",JSON.stringify(d.Oa)));a.m("error while connecting",b,c);ub(a.f)}a.close()}}
	function Ih(a){var b=(a.f.bb?"https://":"http://")+a.f.Aa+"?v=1.0&cv="+CLIENT_VERSION,c=a.f;c.host!==c.Aa&&(b=b+"&ns="+a.f.wb);a.sessionId&&(b=b+"&s="+a.sessionId);0<a.f.Oa.length&&(b=b+"&fst="+encodeURIComponent(a.f.Oa.join(",")));a={path:"/.ws",rememberUpgrade:!0};"undefined"==typeof document&&(a.jsonp=!1);return Gh(b,a)}Hh.prototype.xa=function(a){a="2"+JSON.stringify(["wd",{t:"d",d:a}]);this.g.send(a)};
	Hh.prototype.close=function(){2!==this.o&&(this.m("Closing realtime connection."),this.o=2,this.g.close(),this.A&&(this.A(),this.A=null))};function Nh(a,b,c,d){this.yc=Oh++;this.f=Ud("p:"+this.yc+":");this.wc=!1;this.ea={};this.m=[];this.Ha=0;this.ta=[];this.g=!1;this.H=1E3;this.hb=3E5;this.ed=b;this.dd=c;this.Ed=d;this.Fd=a;this.Zc=null;this.Sb={};this.Cd=0;this.sa=this.xc=null;Ph(this,0);Af.Va().$a("visible",this.ce,this);-1===a.host.indexOf("wd.local")&&sf.Va().$a("online",this.be,this)}var Oh=0,Qh=0;h=Nh.prototype;
	h.xa=function(a,b,c){var d=++this.Cd;a={r:d,a:a,b:b};this.f(H(a));D(this.g,"sendRequest call when we're not connected not allowed.");this.A.xa(a);c&&(this.Sb[d]=c)};h.od=function(a,b,c,d){var e=a.ra(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.ea[f]=this.ea[f]||{};D(!this.ea[f][e],"listen() called twice for same path/queryId.");a={S:d,fc:b,de:a,tag:c};this.ea[f][e]=a;this.g&&Rh(this,a)};
	function Rh(a,b){var c=b.de,d=c.path.toString(),e=c.ra();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=Mg(c.G),f.t=b.tag);f.h=b.fc();a.xa("q",f,function(f){var k=f.d,l=f.s;if(k&&"object"===typeof k&&y(k,"w")){var m=J(k,"w");da(m)&&0<=zb(m,"no_index")&&S("Using an unspecified index. Consider adding "+('".indexOn": "'+c.G.W().toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.ea[d]&&a.ea[d][e])===b&&(a.f("listen response",f),"ok"!==l&&Sh(a,d,e),b.S&&
	b.S(l,k))})}h.V=function(a,b,c){this.o={Pd:a,jd:!1,Hb:b,Ub:c};this.f("Authenticating using credential: "+a);Th(this);(b=40==a.length)||(a=Qg(a).Vb,b="object"===typeof a&&!0===J(a,"admin"));b&&(this.f("Admin auth credential detected.  Reducing max reconnect time."),this.hb=3E4)};h.sc=function(a){delete this.o;this.g&&this.xa("unauth",{},function(b){a(b.s,b.d)})};
	function Th(a){var b=a.o;a.g&&b&&a.xa("auth",{cred:b.Pd},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.o===b&&delete a.o;b.jd?"ok"!==d&&b.Ub&&b.Ub(d,c):(b.jd=!0,b.Hb&&b.Hb(d,c))})}h.vd=function(a,b){var c=a.path.toString(),d=a.ra();this.f("Unlisten called for "+c+" "+d);if(Sh(this,c,d)&&this.g){var e=Mg(a.G);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.xa("n",c)}};h.Tc=function(a,b,c){this.g?Uh(this,"o",a,b,c):this.ta.push({Qb:a,action:"o",data:b,S:c})};
	h.qd=function(a,b,c){this.g?Uh(this,"om",a,b,c):this.ta.push({Qb:a,action:"om",data:b,S:c})};h.hc=function(a,b){this.g?Uh(this,"oc",a,null,b):this.ta.push({Qb:a,action:"oc",data:null,S:b})};function Uh(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.xa(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}h.Db=function(a,b,c,d){Vh(this,"p",a,b,c,d)};h.pd=function(a,b,c,d){Vh(this,"m",a,b,c,d)};
	function Vh(a,b,c,d,e,f){d={p:c,d:d};p(f)&&(d.h=f);a.m.push({action:b,request:d,S:e});a.Ha++;b=a.m.length-1;a.g?Wh(a,b):a.f("Buffering put: "+c)}function Wh(a,b){var c=a.m[b].action,d=a.m[b].request,e=a.m[b].S;a.m[b].ee=a.g;a.xa(c,d,function(d){a.f(c+" response",d);delete a.m[b];a.Ha--;0===a.Ha&&(a.m=[]);e&&e(d.s,d.d)})}h.Vc=function(a){if(this.g){a={c:a};this.f("reportStats",a);var b=this;this.xa("s",a,function(a){"ok"!==a.s&&b.f("reportStats","Error sending stats: "+a.d)})}};
	h.$d=function(a){if("r"in a){this.f("from server: "+H(a));var b=a.r,c=this.Sb[b];c&&(delete this.Sb[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.f("handleServerMessage",b,c),"d"===b?this.ed(c.p,c.d,!1,c.t):"m"===b?this.ed(c.p,c.d,!0,c.t):"c"===b?Xh(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.o,delete this.o,c&&c.Ub&&c.Ub(a,b)):"sd"===b?this.Zc?this.Zc(c):"msg"in c&&"undefined"!==typeof console&&console.log("WILDDOG: "+c.msg.replace("\n",
	"\nWILDDOG: ")):Vd("Unrecognized action received from server: "+H(b)+"\nAre you using the latest client?"))}};h.ne=function(a){this.f("connection ready");this.g=!0;this.sa=(new Date).getTime();this.Ed({serverTimeOffset:a-(new Date).getTime()});a={};a["sdk.js."+CLIENT_VERSION.replace(/\./g,"-")]=1;ib()&&(a["framework.cordova"]=1);this.Vc(a);Yh(this);this.dd(!0)};
	function Ph(a,b){D(!a.A,"Scheduling a connect when we're already connected/ing?");a.T&&clearTimeout(a.T);a.T=setTimeout(function(){a.T=null;if(Zh(a)){a.f("Making a connection attempt");a.xc=(new Date).getTime();a.sa=null;var b=r(a.$d,a),d=r(a.ne,a),e=r(a.rd,a),f=a.yc+":"+Qh++;a.A=new Hh(f,a.Fd,b,d,e)}},Math.floor(b))}h.ce=function(a){a&&!this.ha&&this.H===this.hb&&(this.f("Window became visible.  Reducing delay."),this.H=1E3,this.A||Ph(this,0));this.ha=a};
	h.be=function(a){a?(this.f("Browser went online."),this.H=1E3,this.A||Ph(this,0)):(this.f("Browser went offline.  Killing connection."),this.A&&this.A.close())};
	h.rd=function(){this.f("data client disconnected");this.g=!1;this.A=null;for(var a=0;a<this.m.length;a++){var b=this.m[a];b&&"h"in b.request&&b.ee&&(b.S&&b.S("disconnect"),delete this.m[a],this.Ha--)}0===this.Ha&&(this.m=[]);this.Sb={};Zh(this)&&(this.ha?this.sa&&(3E4<(new Date).getTime()-this.sa&&(this.H=1E3),this.sa=null):(this.f("Window isn't visible.  Delaying reconnect."),this.H=this.hb,this.xc=(new Date).getTime()),a=Math.max(0,this.H-((new Date).getTime()-this.xc)),a*=Math.random(),this.f("Trying to reconnect in "+
	a+"ms"),Ph(this,a),this.H=Math.min(this.hb,1.3*this.H));this.dd(!1)};h.Za=function(){this.wc=!0;this.A?this.A.close():(this.T&&(clearTimeout(this.T),this.T=null),this.g&&this.rd())};h.Bb=function(){this.wc=!1;this.H=1E3;this.A||Ph(this,0)};function Xh(a,b,c){c=c?tc(c,function(a){return Zd(a)}).join("$"):"default";(a=Sh(a,b,c))&&a.S&&a.S("permission_denied")}
	function Sh(a,b,c){b=(new A(b)).toString();var d;p(a.ea[b])?(d=a.ea[b][c],delete a.ea[b][c],0===jc(a.ea[b])&&delete a.ea[b]):d=void 0;return d}function Yh(a){Th(a);P(a.ea,function(b){P(b,function(b){Rh(a,b)})});for(var b=0;b<a.m.length;b++)a.m[b]&&Wh(a,b);for(;a.ta.length;)b=a.ta.shift(),Uh(a,b.action,b.Qb,b.data,b.S)}function Zh(a){var b;b=sf.Va().f;return!a.wc&&b};function $h(a,b){this.H=a;this.ta=Ec(a);this.g=new Ya;this.ha=1;this.Ga=null;this.m;b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)?(this.m=new Sg(this.H,r(this.xd,this)),setTimeout(r(this.wd,this,!0),0)):this.m=this.Ga=new Nh(this.H,r(this.xd,this),r(this.wd,this),r(this.pe,this));this.hb=Fc(a,r(function(){return new za(this.ta,this.m)},this));this.o=new uf;this.Ha=
	new Qb;var c=this;this.T=new ig({$c:function(a,b,f,g){b=[];f=c.Ha.u(a.path);f.j()||(b=kg(c.T,new ra(ge,a.path,f)),setTimeout(function(){g("ok")},0));return b},qc:aa});ai(this,"connected",!1);this.A=new Ia;this.V=new sh(a,r(this.m.V,this.m),r(this.m.sc,this.m),r(this.oe,this));this.$b=0;this.Oc=null;this.f=new ig({$c:function(a,b,f,g){c.m.od(a,f,b,function(b,e){var f=g(b,e);cb(c.g,a.path,f)});return[]},qc:function(a,b){c.m.vd(a,b)}})}h=$h.prototype;
	h.toString=function(){return(this.H.bb?"https://":"http://")+this.H.host};h.name=function(){return this.H.wb};function bi(a){a=a.Ha.u(new A(".info/serverTimeOffset")).N()||0;return(new Date).getTime()+a}function ci(a){a=a={timestamp:bi(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
	h.xd=function(a,b,c,d){this.$b++;var e=new A(a);b=this.Oc?this.Oc(a,b):b;a=[];d?c?(b=hc(b,function(a){return E(a)}),a=sg(this.f,e,b,d)):(b=E(b),a=og(this.f,e,b,d)):c?(d=hc(b,function(a){return E(a)}),a=ng(this.f,e,d)):(d=E(b),a=kg(this.f,new ra(ge,e,d)));d=e;0<a.length&&(d=di(this,e));cb(this.g,d,a)};h.wd=function(a){ai(this,"connected",a);!1===a&&ei(this)};h.pe=function(a){var b=this;$d(a,function(a,d){ai(b,d,a)})};h.oe=function(a){ai(this,"authenticated",a)};
	function ai(a,b,c){b=new A("/.info/"+b);c=E(c);var d=a.Ha;d.nc=d.nc.M(b,c);c=kg(a.T,new ra(ge,b,c));cb(a.g,b,c)}h.cb=function(a,b,c,d){this.Rb("set",{path:a.toString(),value:b,ye:c});var e=ci(this);b=E(b,c);var e=Ka(b,e),f=this.ha++,e=jg(this.f,a,e,f,!0);Za(this.g,e);var g=this;this.m.Db(a.toString(),b.N(!0),function(b,c){var e="ok"===b;e||S("set at "+a+" failed: "+b);e=mg(g.f,f,!e);cb(g.g,a,e);fi(d,b,c)});e=gi(this,a);di(this,e);cb(this.g,e,[])};
	h.update=function(a,b,c){this.Rb("update",{path:a.toString(),value:b});var d=!0,e=ci(this),f={};P(b,function(a,b){d=!1;var c=E(a);f[b]=Ka(c,e)});if(d)eb("update() called with empty data.  Don't do anything."),fi(c,"ok");else{var g=this.ha++,k=lg(this.f,a,f,g);Za(this.g,k);var l=this;this.m.pd(a.toString(),b,function(b,d){var e="ok"===b;e||S("update at "+a+" failed: "+b);var e=mg(l.f,g,!e),f=a;0<e.length&&(f=di(l,a));cb(l.g,f,e);fi(c,b,d)});b=gi(this,a);di(this,b);cb(this.g,a,[])}};
	function ei(a){a.Rb("onDisconnectEvents");var b=ci(a),c=[];Ja(Ha(a.A,b),v,function(b,e){c=c.concat(kg(a.f,new ra(ge,b,e)));var f=gi(a,b);di(a,f)});a.A=new Ia;cb(a.g,v,c)}h.hc=function(a,b){var c=this;this.m.hc(a.toString(),function(d,e){"ok"===d&&Me(c.A,a);fi(b,d,e)})};function hi(a,b,c,d){var e=E(c);a.m.Tc(b.toString(),e.N(!0),function(c,g){"ok"===c&&a.A.zb(b,e);fi(d,c,g)})}function ii(a,b,c,d,e){var f=E(c,d);a.m.Tc(b.toString(),f.N(!0),function(c,d){"ok"===c&&a.A.zb(b,f);fi(e,c,d)})}
	function ji(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(eb("onDisconnect().update() called with empty data.  Don't do anything."),fi(d,"ok")):a.m.qd(b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var m=E(c[l]);a.A.zb(b.C(l),m)}fi(d,e,f)})}function rh(a,b,c){c=".info"===C(b.path)?a.T.ib(b,c):a.f.ib(b,c);ab(a.g,b.path,c)}h.Za=function(){this.Ga&&this.Ga.Za()};h.Bb=function(){this.Ga&&this.Ga.Bb()};
	h.ad=function(a){if("undefined"!==typeof console){a?(this.sa||(this.sa=new xa(this.ta)),a=this.sa.get()):a=this.ta.get();var b=uc(mc(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};h.bd=function(a){var b=this.ta,c;p(c)||(c=1);y(b.f,a)||(b.f[a]=0);b.f[a]+=c;this.hb.ud[a]=!0};h.Rb=function(a){var b="";this.Ga&&(b=this.Ga.yc+":");eb(b,arguments)};
	function fi(a,b,c){a&&fb(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};la.se;
	function ki(a,b,c,d,e){function f(){}a.Rb("transaction on "+b);var g=new V(a,b);g.$a("value",f);c={path:b,update:c,S:d,status:null,sd:Ld(),fd:e,td:0,tc:function(){g.xb("value",f)},zc:null,ua:null,Xb:null,Yb:null,Zb:null};d=a.f.qa(b,void 0)||O;c.Xb=d;d=c.update(d.N());if(p(d)){bh("transaction failed: Data returned ",d,c.path);c.status=1;e=vf(a.o,b);var k=e.va()||[];k.push(c);wf(e,k);"object"===typeof d&&null!==d&&y(d,".priority")?(k=J(d,".priority"),D($g(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):k=
	(a.f.qa(b)||O).J().N();e=ci(a);d=E(d,k);e=Ka(d,e);c.Yb=d;c.Zb=e;c.ua=a.ha++;c=jg(a.f,b,e,c.ua,c.fd);cb(a.g,b,c);li(a)}else c.tc(),c.Yb=null,c.Zb=null,c.S&&(a=new U(c.Xb,new V(a,c.path),F),c.S(null,!1,a))}function li(a,b){var c=b||a.o;b||mi(a,c);if(null!==c.va()){var d=ni(a,c);D(0<d.length,"Sending zero length transaction queue");vc(d,function(a){return 1===a.status})&&oi(a,c.path(),d)}else c.ec()&&c.X(function(b){li(a,b)})}
	function oi(a,b,c){for(var d=tc(c,function(a){return a.ua}),e=a.f.qa(b,d)||O,d=e,e=e.hash(),f=0;f<c.length;f++){var g=c[f];D(1===g.status,"tryToSendTransactionQueue_: items in queue should all be run.");g.status=2;g.td++;var k=B(b,g.path),d=d.M(k,g.Yb)}d=d.N(!0);a.m.Db(b.toString(),d,function(d){a.Rb("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(mg(a.f,c[f].ua));if(c[f].S){var g=c[f].Zb,k=new V(a,c[f].path);d.push(r(c[f].S,
	null,null,!0,new U(g,k,F)))}c[f].tc()}mi(a,vf(a.o,b));li(a);cb(a.g,b,e);for(f=0;f<d.length;f++)fb(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(S("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].zc=d;di(a,b)}},e)}function di(a,b){var c=pi(a,b),d=c.path(),c=ni(a,c);qi(a,c,d);return d}
	function qi(a,b,c){if(0!==b.length){for(var d=[],e=[],f=tc(b,function(a){return a.ua}),g=0;g<b.length;g++){var k=b[g],l=B(c,k.path),m=!1,u;D(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)m=!0,u=k.zc,e=e.concat(mg(a.f,k.ua,!0));else if(1===k.status)if(25<=k.td)m=!0,u="maxretry",e=e.concat(mg(a.f,k.ua,!0));else{var z=a.f.qa(k.path,f)||O;k.Xb=z;var I=b[g].update(z.N());p(I)?(bh("transaction failed: Data returned ",I,k.path),l=E(I),"object"===typeof I&&null!=
	I&&y(I,".priority")||(l=l.ba(z.J())),z=k.ua,I=ci(a),I=Ka(l,I),k.Yb=l,k.Zb=I,k.ua=a.ha++,yc(f,z),e=e.concat(jg(a.f,k.path,I,k.ua,k.fd)),e=e.concat(mg(a.f,z,!0))):(m=!0,u="nodata",e=e.concat(mg(a.f,k.ua,!0)))}cb(a.g,c,e);e=[];m&&(b[g].status=3,setTimeout(b[g].tc,Math.floor(0)),b[g].S&&("nodata"===u?(k=new V(a,b[g].path),d.push(r(b[g].S,null,null,!1,new U(b[g].Xb,k,F)))):d.push(r(b[g].S,null,Error(u),!1,null))))}mi(a,a.o);for(g=0;g<d.length;g++)fb(d[g]);li(a)}}
	function pi(a,b){for(var c,d=a.o;null!==(c=C(b))&&null===d.va();)d=vf(d,c),b=t(b);return d}function ni(a,b){var c=[];ri(a,b,c);c.sort(function(a,b){return a.sd-b.sd});return c}function ri(a,b,c){var d=b.va();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.X(function(b){ri(a,b,c)})}function mi(a,b){var c=b.va();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;wf(b,0<c.length?c:null)}b.X(function(b){mi(a,b)})}
	function gi(a,b){var c=pi(a,b).path(),d=vf(a.o,b);zf(d,function(b){si(a,b)});si(a,d);yf(d,function(b){si(a,b)});return c}
	function si(a,b){var c=b.va();if(null!==c){for(var d=[],e=[],f=-1,g=0;g<c.length;g++)4!==c[g].status&&(2===c[g].status?(D(f===g-1,"All SENT items should be at beginning of queue."),f=g,c[g].status=4,c[g].zc="set"):(D(1===c[g].status,"Unexpected transaction status in abort"),c[g].tc(),e=e.concat(mg(a.f,c[g].ua,!0)),c[g].S&&d.push(r(c[g].S,null,Error("set"),!1,null))));-1===f?wf(b,null):c.length=f+1;cb(a.g,b.path(),e);for(g=0;g<d.length;g++)fb(d[g])}};function ti(){this.f={};this.g=!1}ba(ti);ti.prototype.Za=function(){for(var a in this.f)this.f[a].Za()};ti.prototype.interrupt=ti.prototype.Za;ti.prototype.Bb=function(){for(var a in this.f)this.f[a].Bb()};ti.prototype.resume=ti.prototype.Bb;ti.prototype.Hc=function(){this.g=!0};var X={Td:function(){Fh.te.Sd();Fh.zd.we()}};X.forceLongPolling=X.Td;X.Ud=function(){Fh.zd.Sd()};X.forceWebSockets=X.Ud;X.ie=function(a,b){a.B.Ga.Zc=b};X.setSecurityDebugCallback=X.ie;X.ad=function(a,b){a.B.ad(b)};X.stats=X.ad;X.bd=function(a,b){a.B.bd(b)};X.statsIncrementCounter=X.bd;X.$b=function(a){return a.B.$b};X.dataUpdateCount=X.$b;X.Wd=function(a,b){a.B.Oc=b};X.interceptServerData=X.Wd;X.ae=function(a){new bc(a)};X.onPopupOpen=X.ae;X.ge=function(a){vb=a};X.setAuthenticationServer=X.ge;function Y(a,b){this.f=a;this.oa=b}Y.prototype.cancel=function(a){L("Wilddog.onDisconnect().cancel",0,1,arguments.length);N("Wilddog.onDisconnect().cancel",1,a,!0);var b=new Q;this.f.hc(this.oa,R(b,a));return b.f};Y.prototype.cancel=Y.prototype.cancel;Y.prototype.remove=function(a){L("Wilddog.onDisconnect().remove",0,1,arguments.length);ih("Wilddog.onDisconnect().remove",this.oa);N("Wilddog.onDisconnect().remove",1,a,!0);var b=new Q;hi(this.f,this.oa,null,R(b,a));return b.f};Y.prototype.remove=Y.prototype.remove;
	Y.prototype.set=function(a,b){L("Wilddog.onDisconnect().set",1,2,arguments.length);ih("Wilddog.onDisconnect().set",this.oa);ah("Wilddog.onDisconnect().set",a,this.oa,!1);N("Wilddog.onDisconnect().set",2,b,!0);var c=new Q;hi(this.f,this.oa,a,R(c,b));return c.f};Y.prototype.set=Y.prototype.set;
	Y.prototype.cb=function(a,b,c){L("Wilddog.onDisconnect().setWithPriority",2,3,arguments.length);ih("Wilddog.onDisconnect().setWithPriority",this.oa);ah("Wilddog.onDisconnect().setWithPriority",a,this.oa,!1);eh("Wilddog.onDisconnect().setWithPriority",2,b);N("Wilddog.onDisconnect().setWithPriority",3,c,!0);var d=new Q;ii(this.f,this.oa,a,b,R(d,c));return d.f};Y.prototype.setWithPriority=Y.prototype.cb;
	Y.prototype.update=function(a,b){L("Wilddog.onDisconnect().update",1,2,arguments.length);ih("Wilddog.onDisconnect().update",this.oa);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;S("Passing an Array to Wilddog.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}dh("Wilddog.onDisconnect().update",a,this.oa);N("Wilddog.onDisconnect().update",2,b,!0);c=new Q;
	ji(this.f,this.oa,a,R(c,b));return c.f};Y.prototype.update=Y.prototype.update;var Z={};Z.Eb=Nh;Z.DataConnection=Z.Eb;Nh.prototype.Dd=function(a,b){this.xa("q",{p:a},b)};Z.Eb.prototype.simpleListen=Z.Eb.prototype.Dd;Nh.prototype.Bd=function(a,b){this.xa("echo",{d:a},b)};Z.Eb.prototype.echo=Z.Eb.prototype.Bd;Nh.prototype.interrupt=Nh.prototype.Za;Z.Gd=Hh;Z.RealTimeConnection=Z.Gd;Hh.prototype.sendRequest=Hh.prototype.xa;Hh.prototype.close=Hh.prototype.close;
	Z.Vd=function(a){var b=Nh.prototype.Db;Nh.prototype.Db=function(c,d,e,f){p(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Nh.prototype.Db=b}};Z.hijackHash=Z.Vd;Z.Ad=tb;Z.ConnectionTarget=Z.Ad;Z.ra=function(a){return a.ra()};Z.queryIdentifier=Z.ra;Z.Xd=function(a){return a.B.Ga.ea};Z.listens=Z.Xd;Z.Hc=function(a){a.Hc()};Z.forceRestClient=Z.Hc;function V(a,b){var c,d,e;if(a instanceof $h)c=a,d=b;else{L("new Wilddog",1,2,arguments.length);d=Xb(arguments[0]);c=d.je;"wilddog"===d.domain&&Wd(d.host+" is no longer supported. Please use <YOUR WILDDOG>.wilddogio.com instead");c||Wd("Cannot parse Wilddog url. Please use https://<YOUR WILDDOG>.wilddogio.com");d.bb||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Wilddog access from a secure page. Please use https in calls to new Wilddog().");
	c=new tb(d.host,d.bb,c);d=new A(d.Qb);e=d.toString();var f;!(f=!q(c.host)||0===c.host.length||!Zg(c.wb))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(q(e)&&0!==e.length&&!Yg.test(e)));if(f)throw Error(M("new Wilddog",1,!1)+'must be a valid wilddog URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof ti)e=b;else if(q(b))e=ti.Va(),c.jc=b;else throw Error("Expected a valid Wilddog.Context for second argument to new Wilddog()");else e=ti.Va();f=c.toString();
	var g=J(e.f,f);g||(g=new $h(c,e.g),e.f[f]=g);c=g}W.call(this,c,d,Jg,!1)}ka(V,W);V.prototype.name=function(){S("Wilddog.name() being deprecated. Please use Wilddog.key() instead.");L("Wilddog.name",0,0,arguments.length);return this.key()};V.prototype.name=V.prototype.name;V.prototype.key=function(){L("Wilddog.key",0,0,arguments.length);return this.path.j()?null:Ba(this.path)};V.prototype.key=V.prototype.key;
	V.prototype.C=function(a){L("Wilddog.child",1,1,arguments.length);if(ea(a))a=String(a);else if(!(a instanceof A))if(null===C(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));hh("Wilddog.child",b)}else hh("Wilddog.child",a);return new V(this.B,this.path.C(a))};V.prototype.child=V.prototype.C;V.prototype.parent=function(){L("Wilddog.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new V(this.B,a)};V.prototype.parent=V.prototype.parent;
	V.prototype.root=function(){L("Wilddog.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};V.prototype.root=V.prototype.root;V.prototype.set=function(a,b){L("Wilddog.set",1,2,arguments.length);ih("Wilddog.set",this.path);ah("Wilddog.set",a,this.path,!1);N("Wilddog.set",2,b,!0);var c=new Q;this.B.cb(this.path,a,null,R(c,b));return c.f};V.prototype.set=V.prototype.set;
	V.prototype.update=function(a,b){L("Wilddog.update",1,2,arguments.length);ih("Wilddog.update",this.path);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;S("Passing an Array to Wilddog.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}dh("Wilddog.update",a,this.path);N("Wilddog.update",2,b,!0);c=new Q;this.B.update(this.path,a,R(c,b));return c.f};V.prototype.update=V.prototype.update;
	V.prototype.cb=function(a,b,c){L("Wilddog.setWithPriority",2,3,arguments.length);ih("Wilddog.setWithPriority",this.path);ah("Wilddog.setWithPriority",a,this.path,!1);eh("Wilddog.setWithPriority",2,b);N("Wilddog.setWithPriority",3,c,!0);if(".length"===this.key()||".keys"===this.key())throw"Wilddog.setWithPriority failed: "+this.key()+" is a read-only object.";var d=new Q;this.B.cb(this.path,a,b,R(d,c));return d.f};V.prototype.setWithPriority=V.prototype.cb;
	V.prototype.remove=function(a){L("Wilddog.remove",0,1,arguments.length);ih("Wilddog.remove",this.path);N("Wilddog.remove",1,a,!0);this.set(null,a)};V.prototype.remove=V.prototype.remove;
	V.prototype.transaction=function(a,b,c){L("Wilddog.transaction",1,3,arguments.length);ih("Wilddog.transaction",this.path);N("Wilddog.transaction",1,a,!1);N("Wilddog.transaction",2,b,!0);if(p(c)&&"boolean"!=typeof c)throw Error(M("Wilddog.transaction",3,!0)+"must be a boolean.");if(".length"===this.key()||".keys"===this.key())throw"Wilddog.transaction failed: "+this.key()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new Q;fa(b)&&Fd(d.f);ki(this.B,this.path,a,function(a,c,g){a?d.g(a):
	d.m(new nb(c,g));fa(b)&&b(a,c,g)},c);return d.f};V.prototype.transaction=V.prototype.transaction;V.prototype.he=function(a,b){L("Wilddog.setPriority",1,2,arguments.length);ih("Wilddog.setPriority",this.path);eh("Wilddog.setPriority",1,a);N("Wilddog.setPriority",2,b,!0);var c=new Q;this.B.cb(this.path.C(".priority"),a,null,R(c,b));return c.f};V.prototype.setPriority=V.prototype.he;
	V.prototype.push=function(a,b){L("Wilddog.push",0,2,arguments.length);ih("Wilddog.push",this.path);ah("Wilddog.push",a,this.path,!0);N("Wilddog.push",2,b,!0);var c=bi(this.B),d=Bf(c),c=this.C(d);if(null!=a){var e=this,f=c.set(a,b).then(function(){return e.C(d)});c.then=r(f.then,f);c["catch"]=r(f.then,f,void 0);fa(b)&&Fd(f)}return c};V.prototype.push=V.prototype.push;V.prototype.onDisconnect=function(){ih("Wilddog.onDisconnect",this.path);return new Y(this.B,this.path)};V.prototype.onDisconnect=V.prototype.onDisconnect;
	V.prototype.V=function(a,b,c){S("WilddogRef.auth() being deprecated. Please use WilddogRef.authWithCustomToken() instead.");L("Wilddog.auth",1,3,arguments.length);jh("Wilddog.auth",a);N("Wilddog.auth",2,b,!0);N("Wilddog.auth",3,b,!0);var d=new Q;yh(self.B.V,a,{},{remember:"none"},R(d,b),c);return d.f};V.prototype.auth=V.prototype.V;V.prototype.sc=function(a){L("Wilddog.unauth",0,1,arguments.length);N("Wilddog.unauth",1,a,!0);var b=new Q;zh(this.B.V,R(b,a));return b.f};V.prototype.unauth=V.prototype.sc;
	V.prototype.Jc=function(){L("Wilddog.getAuth",0,0,arguments.length);return this.B.V.Jc()};V.prototype.getAuth=V.prototype.Jc;V.prototype.Zd=function(a,b){L("Wilddog.onAuth",1,2,arguments.length);N("Wilddog.onAuth",1,a,!1);Ab("Wilddog.onAuth",2,b);this.B.V.$a("auth_status",a,b)};V.prototype.onAuth=V.prototype.Zd;V.prototype.Yd=function(a,b){L("Wilddog.offAuth",1,2,arguments.length);N("Wilddog.offAuth",1,a,!1);Ab("Wilddog.offAuth",2,b);this.B.V.xb("auth_status",a,b)};V.prototype.offAuth=V.prototype.Yd;
	V.prototype.Id=function(a,b,c){L("Wilddog.authWithCustomToken",1,3,arguments.length);jh("Wilddog.authWithCustomToken",a);N("Wilddog.authWithCustomToken",2,b,!0);lh("Wilddog.authWithCustomToken",3,c,!0);var d=new Q;yh(this.B.V,a,{},c||{},R(d,b));return d.f};V.prototype.authWithCustomToken=V.prototype.Id;
	V.prototype.Jd=function(a,b,c){L("Wilddog.authWithOAuthPopup",2,3,arguments.length);kh("Wilddog.authWithOAuthPopup",1,a);N("Wilddog.authWithOAuthPopup",2,b,!1);lh("Wilddog.authWithOAuthPopup",3,c,!0);var d=new Q;Dh(this.B.V,a,c,R(d,b));return d.f};V.prototype.authWithOAuthPopup=V.prototype.Jd;
	V.prototype.Kd=function(a,b,c){L("Wilddog.authWithOAuthRedirect",2,3,arguments.length);kh("Wilddog.authWithOAuthRedirect",1,a);N("Wilddog.authWithOAuthRedirect",2,b,!1);lh("Wilddog.authWithOAuthRedirect",3,c,!0);var d=new Q,e=this.B.V,f=R(d,b);Bh(e);var g=[dc],k=yb(c);"anonymous"===a||"wilddog"===a?T(f,hb("TRANSPORT_UNAVAILABLE")):(K.set("redirect_client_options",k.Wb),Ch(e,g,"/auth/"+a,k,f));return d.f};V.prototype.authWithOAuthRedirect=V.prototype.Kd;
	V.prototype.Ld=function(a,b,c,d){L("Wilddog.authWithOAuthToken",3,4,arguments.length);kh("Wilddog.authWithOAuthToken",1,a);N("Wilddog.authWithOAuthToken",3,c,!1);lh("Wilddog.authWithOAuthToken",4,d,!0);var e=new Q;q(b)?(kh("Wilddog.authWithOAuthToken",2,b),Ah(this.B.V,a+"/token",{access_token:b},d,R(e,c))):(lh("Wilddog.authWithOAuthToken",2,b,!1),Ah(this.B.V,a+"/token",b,d,R(e,c)));return e.f};V.prototype.authWithOAuthToken=V.prototype.Ld;
	V.prototype.Hd=function(a,b){L("Wilddog.authAnonymously",0,2,arguments.length);N("Wilddog.authAnonymously",1,a,!0);lh("Wilddog.authAnonymously",2,b,!0);var c=new Q;Ah(this.B.V,"anonymous",{},b,R(c,a));return c.f};V.prototype.authAnonymously=V.prototype.Hd;
	V.prototype.Md=function(a,b,c){L("Wilddog.authWithPassword",1,3,arguments.length);lh("Wilddog.authWithPassword",1,a,!1);mh("Wilddog.authWithPassword",a,"email");mh("Wilddog.authWithPassword",a,"password");N("Wilddog.authAnonymously",2,b,!0);lh("Wilddog.authAnonymously",3,c,!0);var d=new Q;Ah(this.B.V,"password",a,c,R(d,b));return d.f};V.prototype.authWithPassword=V.prototype.Md;
	V.prototype.Fc=function(a,b){L("Wilddog.createUser",1,2,arguments.length);lh("Wilddog.createUser",1,a,!1);mh("Wilddog.createUser",a,"email");mh("Wilddog.createUser",a,"password");N("Wilddog.createUser",2,b,!0);var c=new Q;this.B.V.Fc(a,R(c,b));return c.f};V.prototype.createUser=V.prototype.Fc;
	V.prototype.Uc=function(a,b){L("Wilddog.removeUser",1,2,arguments.length);lh("Wilddog.removeUser",1,a,!1);mh("Wilddog.removeUser",a,"email");mh("Wilddog.removeUser",a,"password");N("Wilddog.removeUser",2,b,!0);var c=new Q;this.B.V.Uc(a,R(c,b));return c.f};V.prototype.removeUser=V.prototype.Uc;
	V.prototype.Cc=function(a,b){L("Wilddog.changePassword",1,2,arguments.length);lh("Wilddog.changePassword",1,a,!1);mh("Wilddog.changePassword",a,"email");mh("Wilddog.changePassword",a,"oldPassword");mh("Wilddog.changePassword",a,"newPassword");N("Wilddog.changePassword",2,b,!0);var c=new Q;this.B.V.Cc(a,R(c,b));return c.f};V.prototype.changePassword=V.prototype.Cc;
	V.prototype.Bc=function(a,b){L("Wilddog.changeEmail",1,2,arguments.length);lh("Wilddog.changeEmail",1,a,!1);mh("Wilddog.changeEmail",a,"oldEmail");mh("Wilddog.changeEmail",a,"newEmail");mh("Wilddog.changeEmail",a,"password");N("Wilddog.changeEmail",2,b,!0);var c=new Q;this.B.V.Bc(a,R(c,b));return c.f};V.prototype.changeEmail=V.prototype.Bc;
	V.prototype.Wc=function(a,b){L("Wilddog.resetPassword",1,2,arguments.length);lh("Wilddog.resetPassword",1,a,!1);mh("Wilddog.resetPassword",a,"email");N("Wilddog.resetPassword",2,b,!0);var c=new Q;this.B.V.Wc(a,R(c,b));return c.f};V.prototype.resetPassword=V.prototype.Wc;
	function Td(a,b){D(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?db=r(console.log,console):"object"===typeof console.log&&(db=function(a){console.log(a)})),b&&K.set("logging_enabled",!0)):a?db=a:(db=null,K.remove("logging_enabled"))}var Nd=CLIENT_VERSION;V.goOffline=function(){L("Wilddog.goOffline",0,0,arguments.length);ti.Va().Za()};V.goOnline=function(){L("Wilddog.goOnline",0,0,arguments.length);ti.Va().Bb()};
	V.enableLogging=Td;V.ServerValue={TIMESTAMP:{".sv":"timestamp"}};V.SDK_VERSION=Nd;V.INTERNAL=X;V.TEST_ACCESS=Z;1!=NODE_CLIENT?("object"==typeof module&&module.exports&&(module.exports=V),"function"=="function"&&__webpack_require__(296)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return V}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)),window?window.Wilddog=V:WorkerGlobalScope&&self&&(self.Wilddog=V)):module.exports=V;
	};ns.wrapper(ns.goog,ns.wd)})({goog:{},wd:{}})

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(261).Buffer))

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(262)
	var ieee754 = __webpack_require__(263)
	var isArray = __webpack_require__(264)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation

	var rootParent = {}

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
	 *     on objects.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	function typedArraySupport () {
	  function Bar () {}
	  try {
	    var arr = new Uint8Array(1)
	    arr.foo = function () { return 42 }
	    arr.constructor = Bar
	    return arr.foo() === 42 && // typed array instances can be augmented
	        arr.constructor === Bar && // constructor can be set
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (arg) {
	  if (!(this instanceof Buffer)) {
	    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
	    if (arguments.length > 1) return new Buffer(arg, arguments[1])
	    return new Buffer(arg)
	  }

	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    this.length = 0
	    this.parent = undefined
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    return fromNumber(this, arg)
	  }

	  // Slightly less common case.
	  if (typeof arg === 'string') {
	    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
	  }

	  // Unusual.
	  return fromObject(this, arg)
	}

	function fromNumber (that, length) {
	  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < length; i++) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

	  // Assumption: byteLength() return value is always < kMaxLength.
	  var length = byteLength(string, encoding) | 0
	  that = allocate(that, length)

	  that.write(string, encoding)
	  return that
	}

	function fromObject (that, object) {
	  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

	  if (isArray(object)) return fromArray(that, object)

	  if (object == null) {
	    throw new TypeError('must start with number, buffer, array or string')
	  }

	  if (typeof ArrayBuffer !== 'undefined') {
	    if (object.buffer instanceof ArrayBuffer) {
	      return fromTypedArray(that, object)
	    }
	    if (object instanceof ArrayBuffer) {
	      return fromArrayBuffer(that, object)
	    }
	  }

	  if (object.length) return fromArrayLike(that, object)

	  return fromJsonObject(that, object)
	}

	function fromBuffer (that, buffer) {
	  var length = checked(buffer.length) | 0
	  that = allocate(that, length)
	  buffer.copy(that, 0, 0, length)
	  return that
	}

	function fromArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Duplicate of fromArray() to keep fromArray() monomorphic.
	function fromTypedArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  // Truncating the elements is probably not what people expect from typed
	  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
	  // of the old Buffer constructor.
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    array.byteLength
	    that = Buffer._augment(new Uint8Array(array))
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromTypedArray(that, new Uint8Array(array))
	  }
	  return that
	}

	function fromArrayLike (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
	// Returns a zero-length buffer for inputs that don't conform to the spec.
	function fromJsonObject (that, object) {
	  var array
	  var length = 0

	  if (object.type === 'Buffer' && isArray(object.data)) {
	    array = object.data
	    length = checked(array.length) | 0
	  }
	  that = allocate(that, length)

	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	} else {
	  // pre-set for values that may exist in the future
	  Buffer.prototype.length = undefined
	  Buffer.prototype.parent = undefined
	}

	function allocate (that, length) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = Buffer._augment(new Uint8Array(length))
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that.length = length
	    that._isBuffer = true
	  }

	  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
	  if (fromPool) that.parent = rootParent

	  return that
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (subject, encoding) {
	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

	  var buf = new Buffer(subject, encoding)
	  delete buf.parent
	  return buf
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  var i = 0
	  var len = Math.min(x, y)
	  while (i < len) {
	    if (a[i] !== b[i]) break

	    ++i
	  }

	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

	  if (list.length === 0) {
	    return new Buffer(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; i++) {
	      length += list[i].length
	    }
	  }

	  var buf = new Buffer(length)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}

	function byteLength (string, encoding) {
	  if (typeof string !== 'string') string = '' + string

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'binary':
	      // Deprecated
	      case 'raw':
	      case 'raws':
	        return len
	      case 'utf8':
	      case 'utf-8':
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  start = start | 0
	  end = end === undefined || end === Infinity ? this.length : end | 0

	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'binary':
	        return binarySlice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return 0
	  return Buffer.compare(this, b)
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
	  byteOffset >>= 0

	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1

	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

	  if (typeof val === 'string') {
	    if (val.length === 0) return -1 // special case: looking for empty string always fails
	    return String.prototype.indexOf.call(this, val, byteOffset)
	  }
	  if (Buffer.isBuffer(val)) {
	    return arrayIndexOf(this, val, byteOffset)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset)
	  }

	  function arrayIndexOf (arr, val, byteOffset) {
	    var foundIndex = -1
	    for (var i = 0; byteOffset + i < arr.length; i++) {
	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
	      } else {
	        foundIndex = -1
	      }
	    }
	    return -1
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	// `get` is deprecated
	Buffer.prototype.get = function get (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}

	// `set` is deprecated
	Buffer.prototype.set = function set (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) throw new Error('Invalid hex string')
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    var swap = encoding
	    encoding = offset
	    offset = length | 0
	    length = swap
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'binary':
	        return binaryWrite(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function binarySlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  if (newBuf.length) newBuf.parent = this.parent || this

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	  if (offset < 0) throw new RangeError('index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; i--) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; i++) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), targetStart)
	  }

	  return len
	}

	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length

	  if (end < start) throw new RangeError('end < start')

	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return

	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }

	  return this
	}

	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}

	// HELPER FUNCTIONS
	// ================

	var BP = Buffer.prototype

	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function _augment (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true

	  // save reference to original Uint8Array set method before overwriting
	  arr._set = arr.set

	  // deprecated
	  arr.get = BP.get
	  arr.set = BP.set

	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.indexOf = BP.indexOf
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUIntLE = BP.readUIntLE
	  arr.readUIntBE = BP.readUIntBE
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readIntLE = BP.readIntLE
	  arr.readIntBE = BP.readIntBE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUIntLE = BP.writeUIntLE
	  arr.writeUIntBE = BP.writeUIntBE
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeIntLE = BP.writeIntLE
	  arr.writeIntBE = BP.writeIntBE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer

	  return arr
	}

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; i++) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(261).Buffer, (function() { return this; }())))

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	;(function (exports) {
		'use strict';

	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array

		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
		var PLUS_URL_SAFE = '-'.charCodeAt(0)
		var SLASH_URL_SAFE = '_'.charCodeAt(0)

		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS ||
			    code === PLUS_URL_SAFE)
				return 62 // '+'
			if (code === SLASH ||
			    code === SLASH_URL_SAFE)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}

		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr

			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}

			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)

			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length

			var L = 0

			function push (v) {
				arr[L++] = v
			}

			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}

			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}

			return arr
		}

		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length

			function encode (num) {
				return lookup.charAt(num)
			}

			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}

			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}

			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}

			return output
		}

		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}( false ? (this.base64js = {}) : exports))


/***/ },
/* 263 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 264 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports =  __webpack_require__(266);


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(267);

	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(274);


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var transports = __webpack_require__(268);
	var Emitter = __webpack_require__(283);
	var debug = __webpack_require__(287)('engine.io-client:socket');
	var index = __webpack_require__(293);
	var parser = __webpack_require__(274);
	var parseuri = __webpack_require__(294);
	var parsejson = __webpack_require__(295);
	var parseqs = __webpack_require__(284);

	/**
	 * Module exports.
	 */

	module.exports = Socket;

	/**
	 * Noop function.
	 *
	 * @api private
	 */

	function noop(){}

	/**
	 * Socket constructor.
	 *
	 * @param {String|Object} uri or options
	 * @param {Object} options
	 * @api public
	 */

	function Socket(uri, opts){
	  if (!(this instanceof Socket)) return new Socket(uri, opts);

	  opts = opts || {};

	  if (uri && 'object' == typeof uri) {
	    opts = uri;
	    uri = null;
	  }

	  if (uri) {
	    uri = parseuri(uri);
	    opts.hostname = uri.host;
	    opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
	    opts.port = uri.port;
	    if (uri.query) opts.query = uri.query;
	  } else if (opts.host) {
	    opts.hostname = parseuri(opts.host).host;
	  }

	  this.secure = null != opts.secure ? opts.secure :
	    (global.location && 'https:' == location.protocol);

	  if (opts.hostname && !opts.port) {
	    // if no port is specified manually, use the protocol default
	    opts.port = this.secure ? '443' : '80';
	  }

	  this.agent = opts.agent || false;
	  this.hostname = opts.hostname ||
	    (global.location ? location.hostname : 'localhost');
	  this.port = opts.port || (global.location && location.port ?
	       location.port :
	       (this.secure ? 443 : 80));
	  this.query = opts.query || {};
	  if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
	  this.upgrade = false !== opts.upgrade;
	  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
	  this.forceJSONP = !!opts.forceJSONP;
	  this.jsonp = false !== opts.jsonp;
	  this.forceBase64 = !!opts.forceBase64;
	  this.enablesXDR = !!opts.enablesXDR;
	  this.timestampParam = opts.timestampParam || 't';
	  this.timestampRequests = opts.timestampRequests;
	  this.transports = opts.transports || ['polling', 'websocket'];
	  this.readyState = '';
	  this.writeBuffer = [];
	  this.policyPort = opts.policyPort || 843;
	  this.rememberUpgrade = opts.rememberUpgrade || false;
	  this.binaryType = null;
	  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
	  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

	  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
	  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
	    this.perMessageDeflate.threshold = 1024;
	  }

	  // SSL options for Node.js client
	  this.pfx = opts.pfx || null;
	  this.key = opts.key || null;
	  this.passphrase = opts.passphrase || null;
	  this.cert = opts.cert || null;
	  this.ca = opts.ca || null;
	  this.ciphers = opts.ciphers || null;
	  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? null : opts.rejectUnauthorized;

	  // other options for Node.js client
	  var freeGlobal = typeof global == 'object' && global;
	  if (freeGlobal.global === freeGlobal) {
	    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
	      this.extraHeaders = opts.extraHeaders;
	    }
	  }

	  this.open();
	}

	Socket.priorWebsocketSuccess = false;

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Socket.prototype);

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	Socket.protocol = parser.protocol; // this is an int

	/**
	 * Expose deps for legacy compatibility
	 * and standalone browser access.
	 */

	Socket.Socket = Socket;
	Socket.Transport = __webpack_require__(273);
	Socket.transports = __webpack_require__(268);
	Socket.parser = __webpack_require__(274);

	/**
	 * Creates transport of the given type.
	 *
	 * @param {String} transport name
	 * @return {Transport}
	 * @api private
	 */

	Socket.prototype.createTransport = function (name) {
	  debug('creating transport "%s"', name);
	  var query = clone(this.query);

	  // append engine.io protocol identifier
	  query.EIO = parser.protocol;

	  // transport name
	  query.transport = name;

	  // session id if we already have one
	  if (this.id) query.sid = this.id;

	  var transport = new transports[name]({
	    agent: this.agent,
	    hostname: this.hostname,
	    port: this.port,
	    secure: this.secure,
	    path: this.path,
	    query: query,
	    forceJSONP: this.forceJSONP,
	    jsonp: this.jsonp,
	    forceBase64: this.forceBase64,
	    enablesXDR: this.enablesXDR,
	    timestampRequests: this.timestampRequests,
	    timestampParam: this.timestampParam,
	    policyPort: this.policyPort,
	    socket: this,
	    pfx: this.pfx,
	    key: this.key,
	    passphrase: this.passphrase,
	    cert: this.cert,
	    ca: this.ca,
	    ciphers: this.ciphers,
	    rejectUnauthorized: this.rejectUnauthorized,
	    perMessageDeflate: this.perMessageDeflate,
	    extraHeaders: this.extraHeaders
	  });

	  return transport;
	};

	function clone (obj) {
	  var o = {};
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      o[i] = obj[i];
	    }
	  }
	  return o;
	}

	/**
	 * Initializes transport to use and starts probe.
	 *
	 * @api private
	 */
	Socket.prototype.open = function () {
	  var transport;
	  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
	    transport = 'websocket';
	  } else if (0 === this.transports.length) {
	    // Emit error on next tick so it can be listened to
	    var self = this;
	    setTimeout(function() {
	      self.emit('error', 'No transports available');
	    }, 0);
	    return;
	  } else {
	    transport = this.transports[0];
	  }
	  this.readyState = 'opening';

	  // Retry with the next transport if the transport is disabled (jsonp: false)
	  try {
	    transport = this.createTransport(transport);
	  } catch (e) {
	    this.transports.shift();
	    this.open();
	    return;
	  }

	  transport.open();
	  this.setTransport(transport);
	};

	/**
	 * Sets the current transport. Disables the existing one (if any).
	 *
	 * @api private
	 */

	Socket.prototype.setTransport = function(transport){
	  debug('setting transport %s', transport.name);
	  var self = this;

	  if (this.transport) {
	    debug('clearing existing transport %s', this.transport.name);
	    this.transport.removeAllListeners();
	  }

	  // set up transport
	  this.transport = transport;

	  // set up transport listeners
	  transport
	  .on('drain', function(){
	    self.onDrain();
	  })
	  .on('packet', function(packet){
	    self.onPacket(packet);
	  })
	  .on('error', function(e){
	    self.onError(e);
	  })
	  .on('close', function(){
	    self.onClose('transport close');
	  });
	};

	/**
	 * Probes a transport.
	 *
	 * @param {String} transport name
	 * @api private
	 */

	Socket.prototype.probe = function (name) {
	  debug('probing transport "%s"', name);
	  var transport = this.createTransport(name, { probe: 1 })
	    , failed = false
	    , self = this;

	  Socket.priorWebsocketSuccess = false;

	  function onTransportOpen(){
	    if (self.onlyBinaryUpgrades) {
	      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
	      failed = failed || upgradeLosesBinary;
	    }
	    if (failed) return;

	    debug('probe transport "%s" opened', name);
	    transport.send([{ type: 'ping', data: 'probe' }]);
	    transport.once('packet', function (msg) {
	      if (failed) return;
	      if ('pong' == msg.type && 'probe' == msg.data) {
	        debug('probe transport "%s" pong', name);
	        self.upgrading = true;
	        self.emit('upgrading', transport);
	        if (!transport) return;
	        Socket.priorWebsocketSuccess = 'websocket' == transport.name;

	        debug('pausing current transport "%s"', self.transport.name);
	        self.transport.pause(function () {
	          if (failed) return;
	          if ('closed' == self.readyState) return;
	          debug('changing transport and sending upgrade packet');

	          cleanup();

	          self.setTransport(transport);
	          transport.send([{ type: 'upgrade' }]);
	          self.emit('upgrade', transport);
	          transport = null;
	          self.upgrading = false;
	          self.flush();
	        });
	      } else {
	        debug('probe transport "%s" failed', name);
	        var err = new Error('probe error');
	        err.transport = transport.name;
	        self.emit('upgradeError', err);
	      }
	    });
	  }

	  function freezeTransport() {
	    if (failed) return;

	    // Any callback called by transport should be ignored since now
	    failed = true;

	    cleanup();

	    transport.close();
	    transport = null;
	  }

	  //Handle any error that happens while probing
	  function onerror(err) {
	    var error = new Error('probe error: ' + err);
	    error.transport = transport.name;

	    freezeTransport();

	    debug('probe transport "%s" failed because of error: %s', name, err);

	    self.emit('upgradeError', error);
	  }

	  function onTransportClose(){
	    onerror("transport closed");
	  }

	  //When the socket is closed while we're probing
	  function onclose(){
	    onerror("socket closed");
	  }

	  //When the socket is upgraded while we're probing
	  function onupgrade(to){
	    if (transport && to.name != transport.name) {
	      debug('"%s" works - aborting "%s"', to.name, transport.name);
	      freezeTransport();
	    }
	  }

	  //Remove all listeners on the transport and on self
	  function cleanup(){
	    transport.removeListener('open', onTransportOpen);
	    transport.removeListener('error', onerror);
	    transport.removeListener('close', onTransportClose);
	    self.removeListener('close', onclose);
	    self.removeListener('upgrading', onupgrade);
	  }

	  transport.once('open', onTransportOpen);
	  transport.once('error', onerror);
	  transport.once('close', onTransportClose);

	  this.once('close', onclose);
	  this.once('upgrading', onupgrade);

	  transport.open();

	};

	/**
	 * Called when connection is deemed open.
	 *
	 * @api public
	 */

	Socket.prototype.onOpen = function () {
	  debug('socket open');
	  this.readyState = 'open';
	  Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
	  this.emit('open');
	  this.flush();

	  // we check for `readyState` in case an `open`
	  // listener already closed the socket
	  if ('open' == this.readyState && this.upgrade && this.transport.pause) {
	    debug('starting upgrade probes');
	    for (var i = 0, l = this.upgrades.length; i < l; i++) {
	      this.probe(this.upgrades[i]);
	    }
	  }
	};

	/**
	 * Handles a packet.
	 *
	 * @api private
	 */

	Socket.prototype.onPacket = function (packet) {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

	    this.emit('packet', packet);

	    // Socket is live - any packet counts
	    this.emit('heartbeat');

	    switch (packet.type) {
	      case 'open':
	        this.onHandshake(parsejson(packet.data));
	        break;

	      case 'pong':
	        this.setPing();
	        this.emit('pong');
	        break;

	      case 'error':
	        var err = new Error('server error');
	        err.code = packet.data;
	        this.onError(err);
	        break;

	      case 'message':
	        this.emit('data', packet.data);
	        this.emit('message', packet.data);
	        break;
	    }
	  } else {
	    debug('packet received with socket readyState "%s"', this.readyState);
	  }
	};

	/**
	 * Called upon handshake completion.
	 *
	 * @param {Object} handshake obj
	 * @api private
	 */

	Socket.prototype.onHandshake = function (data) {
	  this.emit('handshake', data);
	  this.id = data.sid;
	  this.transport.query.sid = data.sid;
	  this.upgrades = this.filterUpgrades(data.upgrades);
	  this.pingInterval = data.pingInterval;
	  this.pingTimeout = data.pingTimeout;
	  this.onOpen();
	  // In case open handler closes socket
	  if  ('closed' == this.readyState) return;
	  this.setPing();

	  // Prolong liveness of socket on heartbeat
	  this.removeListener('heartbeat', this.onHeartbeat);
	  this.on('heartbeat', this.onHeartbeat);
	};

	/**
	 * Resets ping timeout.
	 *
	 * @api private
	 */

	Socket.prototype.onHeartbeat = function (timeout) {
	  clearTimeout(this.pingTimeoutTimer);
	  var self = this;
	  self.pingTimeoutTimer = setTimeout(function () {
	    if ('closed' == self.readyState) return;
	    self.onClose('ping timeout');
	  }, timeout || (self.pingInterval + self.pingTimeout));
	};

	/**
	 * Pings server every `this.pingInterval` and expects response
	 * within `this.pingTimeout` or closes connection.
	 *
	 * @api private
	 */

	Socket.prototype.setPing = function () {
	  var self = this;
	  clearTimeout(self.pingIntervalTimer);
	  self.pingIntervalTimer = setTimeout(function () {
	    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
	    self.ping();
	    self.onHeartbeat(self.pingTimeout);
	  }, self.pingInterval);
	};

	/**
	* Sends a ping packet.
	*
	* @api private
	*/

	Socket.prototype.ping = function () {
	  var self = this;
	  this.sendPacket('ping', function(){
	    self.emit('ping');
	  });
	};

	/**
	 * Called on `drain` event
	 *
	 * @api private
	 */

	Socket.prototype.onDrain = function() {
	  this.writeBuffer.splice(0, this.prevBufferLen);

	  // setting prevBufferLen = 0 is very important
	  // for example, when upgrading, upgrade packet is sent over,
	  // and a nonzero prevBufferLen could cause problems on `drain`
	  this.prevBufferLen = 0;

	  if (0 === this.writeBuffer.length) {
	    this.emit('drain');
	  } else {
	    this.flush();
	  }
	};

	/**
	 * Flush write buffers.
	 *
	 * @api private
	 */

	Socket.prototype.flush = function () {
	  if ('closed' != this.readyState && this.transport.writable &&
	    !this.upgrading && this.writeBuffer.length) {
	    debug('flushing %d packets in socket', this.writeBuffer.length);
	    this.transport.send(this.writeBuffer);
	    // keep track of current length of writeBuffer
	    // splice writeBuffer and callbackBuffer on `drain`
	    this.prevBufferLen = this.writeBuffer.length;
	    this.emit('flush');
	  }
	};

	/**
	 * Sends a message.
	 *
	 * @param {String} message.
	 * @param {Function} callback function.
	 * @param {Object} options.
	 * @return {Socket} for chaining.
	 * @api public
	 */

	Socket.prototype.write =
	Socket.prototype.send = function (msg, options, fn) {
	  this.sendPacket('message', msg, options, fn);
	  return this;
	};

	/**
	 * Sends a packet.
	 *
	 * @param {String} packet type.
	 * @param {String} data.
	 * @param {Object} options.
	 * @param {Function} callback function.
	 * @api private
	 */

	Socket.prototype.sendPacket = function (type, data, options, fn) {
	  if('function' == typeof data) {
	    fn = data;
	    data = undefined;
	  }

	  if ('function' == typeof options) {
	    fn = options;
	    options = null;
	  }

	  if ('closing' == this.readyState || 'closed' == this.readyState) {
	    return;
	  }

	  options = options || {};
	  options.compress = false !== options.compress;

	  var packet = {
	    type: type,
	    data: data,
	    options: options
	  };
	  this.emit('packetCreate', packet);
	  this.writeBuffer.push(packet);
	  if (fn) this.once('flush', fn);
	  this.flush();
	};

	/**
	 * Closes the connection.
	 *
	 * @api private
	 */

	Socket.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.readyState = 'closing';

	    var self = this;

	    if (this.writeBuffer.length) {
	      this.once('drain', function() {
	        if (this.upgrading) {
	          waitForUpgrade();
	        } else {
	          close();
	        }
	      });
	    } else if (this.upgrading) {
	      waitForUpgrade();
	    } else {
	      close();
	    }
	  }

	  function close() {
	    self.onClose('forced close');
	    debug('socket closing - telling transport to close');
	    self.transport.close();
	  }

	  function cleanupAndClose() {
	    self.removeListener('upgrade', cleanupAndClose);
	    self.removeListener('upgradeError', cleanupAndClose);
	    close();
	  }

	  function waitForUpgrade() {
	    // wait for upgrade to finish since we can't send packets while pausing a transport
	    self.once('upgrade', cleanupAndClose);
	    self.once('upgradeError', cleanupAndClose);
	  }

	  return this;
	};

	/**
	 * Called upon transport error
	 *
	 * @api private
	 */

	Socket.prototype.onError = function (err) {
	  debug('socket error %j', err);
	  Socket.priorWebsocketSuccess = false;
	  this.emit('error', err);
	  this.onClose('transport error', err);
	};

	/**
	 * Called upon transport close.
	 *
	 * @api private
	 */

	Socket.prototype.onClose = function (reason, desc) {
	  if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
	    debug('socket close with reason: "%s"', reason);
	    var self = this;

	    // clear timers
	    clearTimeout(this.pingIntervalTimer);
	    clearTimeout(this.pingTimeoutTimer);

	    // stop event from firing again for transport
	    this.transport.removeAllListeners('close');

	    // ensure transport won't stay open
	    this.transport.close();

	    // ignore further transport communication
	    this.transport.removeAllListeners();

	    // set ready state
	    this.readyState = 'closed';

	    // clear session id
	    this.id = null;

	    // emit close event
	    this.emit('close', reason, desc);

	    // clean buffers after, so users can still
	    // grab the buffers on `close` event
	    self.writeBuffer = [];
	    self.prevBufferLen = 0;
	  }
	};

	/**
	 * Filters upgrades, returning only those matching client transports.
	 *
	 * @param {Array} server upgrades
	 * @api private
	 *
	 */

	Socket.prototype.filterUpgrades = function (upgrades) {
	  var filteredUpgrades = [];
	  for (var i = 0, j = upgrades.length; i<j; i++) {
	    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
	  }
	  return filteredUpgrades;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies
	 */

	var XMLHttpRequest = __webpack_require__(269);
	var XHR = __webpack_require__(271);
	var JSONP = __webpack_require__(290);
	var websocket = __webpack_require__(291);

	/**
	 * Export transports.
	 */

	exports.polling = polling;
	exports.websocket = websocket;

	/**
	 * Polling transport polymorphic constructor.
	 * Decides on xhr vs jsonp based on feature detection.
	 *
	 * @api private
	 */

	function polling(opts){
	  var xhr;
	  var xd = false;
	  var xs = false;
	  var jsonp = false !== opts.jsonp;

	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    xd = opts.hostname != location.hostname || port != opts.port;
	    xs = opts.secure != isSSL;
	  }

	  opts.xdomain = xd;
	  opts.xscheme = xs;
	  xhr = new XMLHttpRequest(opts);

	  if ('open' in xhr && !opts.forceJSONP) {
	    return new XHR(opts);
	  } else {
	    if (!jsonp) throw new Error('JSONP disabled');
	    return new JSONP(opts);
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// browser shim for xmlhttprequest module
	var hasCORS = __webpack_require__(270);

	module.exports = function(opts) {
	  var xdomain = opts.xdomain;

	  // scheme must be same when usign XDomainRequest
	  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
	  var xscheme = opts.xscheme;

	  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
	  // https://github.com/Automattic/engine.io-client/pull/217
	  var enablesXDR = opts.enablesXDR;

	  // XMLHttpRequest can be disabled on IE
	  try {
	    if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
	      return new XMLHttpRequest();
	    }
	  } catch (e) { }

	  // Use XDomainRequest for IE8 if enablesXDR is true
	  // because loading bar keeps flashing when using jsonp-polling
	  // https://github.com/yujiosaka/socke.io-ie8-loading-example
	  try {
	    if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
	      return new XDomainRequest();
	    }
	  } catch (e) { }

	  if (!xdomain) {
	    try {
	      return new ActiveXObject('Microsoft.XMLHTTP');
	    } catch(e) { }
	  }
	}


/***/ },
/* 270 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 *
	 * Logic borrowed from Modernizr:
	 *
	 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
	 */

	try {
	  module.exports = typeof XMLHttpRequest !== 'undefined' &&
	    'withCredentials' in new XMLHttpRequest();
	} catch (err) {
	  // if XMLHttp support is disabled in IE then it will throw
	  // when trying to create
	  module.exports = false;
	}


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module requirements.
	 */

	var XMLHttpRequest = __webpack_require__(269);
	var Polling = __webpack_require__(272);
	var Emitter = __webpack_require__(283);
	var inherit = __webpack_require__(285);
	var debug = __webpack_require__(287)('engine.io-client:polling-xhr');

	/**
	 * Module exports.
	 */

	module.exports = XHR;
	module.exports.Request = Request;

	/**
	 * Empty function
	 */

	function empty(){}

	/**
	 * XHR Polling constructor.
	 *
	 * @param {Object} opts
	 * @api public
	 */

	function XHR(opts){
	  Polling.call(this, opts);

	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    this.xd = opts.hostname != global.location.hostname ||
	      port != opts.port;
	    this.xs = opts.secure != isSSL;
	  } else {
	    this.extraHeaders = opts.extraHeaders;
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(XHR, Polling);

	/**
	 * XHR supports binary
	 */

	XHR.prototype.supportsBinary = true;

	/**
	 * Creates a request.
	 *
	 * @param {String} method
	 * @api private
	 */

	XHR.prototype.request = function(opts){
	  opts = opts || {};
	  opts.uri = this.uri();
	  opts.xd = this.xd;
	  opts.xs = this.xs;
	  opts.agent = this.agent || false;
	  opts.supportsBinary = this.supportsBinary;
	  opts.enablesXDR = this.enablesXDR;

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  // other options for Node.js client
	  opts.extraHeaders = this.extraHeaders;

	  return new Request(opts);
	};

	/**
	 * Sends data.
	 *
	 * @param {String} data to send.
	 * @param {Function} called upon flush.
	 * @api private
	 */

	XHR.prototype.doWrite = function(data, fn){
	  var isBinary = typeof data !== 'string' && data !== undefined;
	  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
	  var self = this;
	  req.on('success', fn);
	  req.on('error', function(err){
	    self.onError('xhr post error', err);
	  });
	  this.sendXhr = req;
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	XHR.prototype.doPoll = function(){
	  debug('xhr poll');
	  var req = this.request();
	  var self = this;
	  req.on('data', function(data){
	    self.onData(data);
	  });
	  req.on('error', function(err){
	    self.onError('xhr poll error', err);
	  });
	  this.pollXhr = req;
	};

	/**
	 * Request constructor
	 *
	 * @param {Object} options
	 * @api public
	 */

	function Request(opts){
	  this.method = opts.method || 'GET';
	  this.uri = opts.uri;
	  this.xd = !!opts.xd;
	  this.xs = !!opts.xs;
	  this.async = false !== opts.async;
	  this.data = undefined != opts.data ? opts.data : null;
	  this.agent = opts.agent;
	  this.isBinary = opts.isBinary;
	  this.supportsBinary = opts.supportsBinary;
	  this.enablesXDR = opts.enablesXDR;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;

	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;

	  this.create();
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Request.prototype);

	/**
	 * Creates the XHR object and sends the request.
	 *
	 * @api private
	 */

	Request.prototype.create = function(){
	  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  var xhr = this.xhr = new XMLHttpRequest(opts);
	  var self = this;

	  try {
	    debug('xhr open %s: %s', this.method, this.uri);
	    xhr.open(this.method, this.uri, this.async);
	    try {
	      if (this.extraHeaders) {
	        xhr.setDisableHeaderCheck(true);
	        for (var i in this.extraHeaders) {
	          if (this.extraHeaders.hasOwnProperty(i)) {
	            xhr.setRequestHeader(i, this.extraHeaders[i]);
	          }
	        }
	      }
	    } catch (e) {}
	    if (this.supportsBinary) {
	      // This has to be done after open because Firefox is stupid
	      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
	      xhr.responseType = 'arraybuffer';
	    }

	    if ('POST' == this.method) {
	      try {
	        if (this.isBinary) {
	          xhr.setRequestHeader('Content-type', 'application/octet-stream');
	        } else {
	          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
	        }
	      } catch (e) {}
	    }

	    // ie6 check
	    if ('withCredentials' in xhr) {
	      xhr.withCredentials = true;
	    }

	    if (this.hasXDR()) {
	      xhr.onload = function(){
	        self.onLoad();
	      };
	      xhr.onerror = function(){
	        self.onError(xhr.responseText);
	      };
	    } else {
	      xhr.onreadystatechange = function(){
	        if (4 != xhr.readyState) return;
	        if (200 == xhr.status || 1223 == xhr.status) {
	          self.onLoad();
	        } else {
	          // make sure the `error` event handler that's user-set
	          // does not throw in the same tick and gets caught here
	          setTimeout(function(){
	            self.onError(xhr.status);
	          }, 0);
	        }
	      };
	    }

	    debug('xhr data %s', this.data);
	    xhr.send(this.data);
	  } catch (e) {
	    // Need to defer since .create() is called directly fhrom the constructor
	    // and thus the 'error' event can only be only bound *after* this exception
	    // occurs.  Therefore, also, we cannot throw here at all.
	    setTimeout(function() {
	      self.onError(e);
	    }, 0);
	    return;
	  }

	  if (global.document) {
	    this.index = Request.requestsCount++;
	    Request.requests[this.index] = this;
	  }
	};

	/**
	 * Called upon successful response.
	 *
	 * @api private
	 */

	Request.prototype.onSuccess = function(){
	  this.emit('success');
	  this.cleanup();
	};

	/**
	 * Called if we have data.
	 *
	 * @api private
	 */

	Request.prototype.onData = function(data){
	  this.emit('data', data);
	  this.onSuccess();
	};

	/**
	 * Called upon error.
	 *
	 * @api private
	 */

	Request.prototype.onError = function(err){
	  this.emit('error', err);
	  this.cleanup(true);
	};

	/**
	 * Cleans up house.
	 *
	 * @api private
	 */

	Request.prototype.cleanup = function(fromError){
	  if ('undefined' == typeof this.xhr || null === this.xhr) {
	    return;
	  }
	  // xmlhttprequest
	  if (this.hasXDR()) {
	    this.xhr.onload = this.xhr.onerror = empty;
	  } else {
	    this.xhr.onreadystatechange = empty;
	  }

	  if (fromError) {
	    try {
	      this.xhr.abort();
	    } catch(e) {}
	  }

	  if (global.document) {
	    delete Request.requests[this.index];
	  }

	  this.xhr = null;
	};

	/**
	 * Called upon load.
	 *
	 * @api private
	 */

	Request.prototype.onLoad = function(){
	  var data;
	  try {
	    var contentType;
	    try {
	      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
	    } catch (e) {}
	    if (contentType === 'application/octet-stream') {
	      data = this.xhr.response;
	    } else {
	      if (!this.supportsBinary) {
	        data = this.xhr.responseText;
	      } else {
	        try {
	          data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
	        } catch (e) {
	          var ui8Arr = new Uint8Array(this.xhr.response);
	          var dataArray = [];
	          for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
	            dataArray.push(ui8Arr[idx]);
	          }

	          data = String.fromCharCode.apply(null, dataArray);
	        }
	      }
	    }
	  } catch (e) {
	    this.onError(e);
	  }
	  if (null != data) {
	    this.onData(data);
	  }
	};

	/**
	 * Check if it has XDomainRequest.
	 *
	 * @api private
	 */

	Request.prototype.hasXDR = function(){
	  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
	};

	/**
	 * Aborts the request.
	 *
	 * @api public
	 */

	Request.prototype.abort = function(){
	  this.cleanup();
	};

	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */

	if (global.document) {
	  Request.requestsCount = 0;
	  Request.requests = {};
	  if (global.attachEvent) {
	    global.attachEvent('onunload', unloadHandler);
	  } else if (global.addEventListener) {
	    global.addEventListener('beforeunload', unloadHandler, false);
	  }
	}

	function unloadHandler() {
	  for (var i in Request.requests) {
	    if (Request.requests.hasOwnProperty(i)) {
	      Request.requests[i].abort();
	    }
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(273);
	var parseqs = __webpack_require__(284);
	var parser = __webpack_require__(274);
	var inherit = __webpack_require__(285);
	var yeast = __webpack_require__(286);
	var debug = __webpack_require__(287)('engine.io-client:polling');

	/**
	 * Module exports.
	 */

	module.exports = Polling;

	/**
	 * Is XHR2 supported?
	 */

	var hasXHR2 = (function() {
	  var XMLHttpRequest = __webpack_require__(269);
	  var xhr = new XMLHttpRequest({ xdomain: false });
	  return null != xhr.responseType;
	})();

	/**
	 * Polling interface.
	 *
	 * @param {Object} opts
	 * @api private
	 */

	function Polling(opts){
	  var forceBase64 = (opts && opts.forceBase64);
	  if (!hasXHR2 || forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(Polling, Transport);

	/**
	 * Transport name.
	 */

	Polling.prototype.name = 'polling';

	/**
	 * Opens the socket (triggers polling). We write a PING message to determine
	 * when the transport is open.
	 *
	 * @api private
	 */

	Polling.prototype.doOpen = function(){
	  this.poll();
	};

	/**
	 * Pauses polling.
	 *
	 * @param {Function} callback upon buffers are flushed and transport is paused
	 * @api private
	 */

	Polling.prototype.pause = function(onPause){
	  var pending = 0;
	  var self = this;

	  this.readyState = 'pausing';

	  function pause(){
	    debug('paused');
	    self.readyState = 'paused';
	    onPause();
	  }

	  if (this.polling || !this.writable) {
	    var total = 0;

	    if (this.polling) {
	      debug('we are currently polling - waiting to pause');
	      total++;
	      this.once('pollComplete', function(){
	        debug('pre-pause polling complete');
	        --total || pause();
	      });
	    }

	    if (!this.writable) {
	      debug('we are currently writing - waiting to pause');
	      total++;
	      this.once('drain', function(){
	        debug('pre-pause writing complete');
	        --total || pause();
	      });
	    }
	  } else {
	    pause();
	  }
	};

	/**
	 * Starts polling cycle.
	 *
	 * @api public
	 */

	Polling.prototype.poll = function(){
	  debug('polling');
	  this.polling = true;
	  this.doPoll();
	  this.emit('poll');
	};

	/**
	 * Overloads onData to detect payloads.
	 *
	 * @api private
	 */

	Polling.prototype.onData = function(data){
	  var self = this;
	  debug('polling got data %s', data);
	  var callback = function(packet, index, total) {
	    // if its the first message we consider the transport open
	    if ('opening' == self.readyState) {
	      self.onOpen();
	    }

	    // if its a close packet, we close the ongoing requests
	    if ('close' == packet.type) {
	      self.onClose();
	      return false;
	    }

	    // otherwise bypass onData and handle the message
	    self.onPacket(packet);
	  };

	  // decode payload
	  parser.decodePayload(data, this.socket.binaryType, callback);

	  // if an event did not trigger closing
	  if ('closed' != this.readyState) {
	    // if we got data we're not polling
	    this.polling = false;
	    this.emit('pollComplete');

	    if ('open' == this.readyState) {
	      this.poll();
	    } else {
	      debug('ignoring poll - transport state "%s"', this.readyState);
	    }
	  }
	};

	/**
	 * For polling, send a close packet.
	 *
	 * @api private
	 */

	Polling.prototype.doClose = function(){
	  var self = this;

	  function close(){
	    debug('writing close packet');
	    self.write([{ type: 'close' }]);
	  }

	  if ('open' == this.readyState) {
	    debug('transport open - closing');
	    close();
	  } else {
	    // in case we're trying to close while
	    // handshaking is in progress (GH-164)
	    debug('transport not open - deferring close');
	    this.once('open', close);
	  }
	};

	/**
	 * Writes a packets payload.
	 *
	 * @param {Array} data packets
	 * @param {Function} drain callback
	 * @api private
	 */

	Polling.prototype.write = function(packets){
	  var self = this;
	  this.writable = false;
	  var callbackfn = function() {
	    self.writable = true;
	    self.emit('drain');
	  };

	  var self = this;
	  parser.encodePayload(packets, this.supportsBinary, function(data) {
	    self.doWrite(data, callbackfn);
	  });
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	Polling.prototype.uri = function(){
	  var query = this.query || {};
	  var schema = this.secure ? 'https' : 'http';
	  var port = '';

	  // cache busting is forced
	  if (false !== this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }

	  if (!this.supportsBinary && !query.sid) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // avoid port if default for schema
	  if (this.port && (('https' == schema && this.port != 443) ||
	     ('http' == schema && this.port != 80))) {
	    port = ':' + this.port;
	  }

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(274);
	var Emitter = __webpack_require__(283);

	/**
	 * Module exports.
	 */

	module.exports = Transport;

	/**
	 * Transport abstract constructor.
	 *
	 * @param {Object} options.
	 * @api private
	 */

	function Transport (opts) {
	  this.path = opts.path;
	  this.hostname = opts.hostname;
	  this.port = opts.port;
	  this.secure = opts.secure;
	  this.query = opts.query;
	  this.timestampParam = opts.timestampParam;
	  this.timestampRequests = opts.timestampRequests;
	  this.readyState = '';
	  this.agent = opts.agent || false;
	  this.socket = opts.socket;
	  this.enablesXDR = opts.enablesXDR;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;

	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Transport.prototype);

	/**
	 * Emits an error.
	 *
	 * @param {String} str
	 * @return {Transport} for chaining
	 * @api public
	 */

	Transport.prototype.onError = function (msg, desc) {
	  var err = new Error(msg);
	  err.type = 'TransportError';
	  err.description = desc;
	  this.emit('error', err);
	  return this;
	};

	/**
	 * Opens the transport.
	 *
	 * @api public
	 */

	Transport.prototype.open = function () {
	  if ('closed' == this.readyState || '' == this.readyState) {
	    this.readyState = 'opening';
	    this.doOpen();
	  }

	  return this;
	};

	/**
	 * Closes the transport.
	 *
	 * @api private
	 */

	Transport.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.doClose();
	    this.onClose();
	  }

	  return this;
	};

	/**
	 * Sends multiple packets.
	 *
	 * @param {Array} packets
	 * @api private
	 */

	Transport.prototype.send = function(packets){
	  if ('open' == this.readyState) {
	    this.write(packets);
	  } else {
	    throw new Error('Transport not open');
	  }
	};

	/**
	 * Called upon open
	 *
	 * @api private
	 */

	Transport.prototype.onOpen = function () {
	  this.readyState = 'open';
	  this.writable = true;
	  this.emit('open');
	};

	/**
	 * Called with data.
	 *
	 * @param {String} data
	 * @api private
	 */

	Transport.prototype.onData = function(data){
	  var packet = parser.decodePacket(data, this.socket.binaryType);
	  this.onPacket(packet);
	};

	/**
	 * Called with a decoded packet.
	 */

	Transport.prototype.onPacket = function (packet) {
	  this.emit('packet', packet);
	};

	/**
	 * Called upon close.
	 *
	 * @api private
	 */

	Transport.prototype.onClose = function () {
	  this.readyState = 'closed';
	  this.emit('close');
	};


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var keys = __webpack_require__(275);
	var hasBinary = __webpack_require__(276);
	var sliceBuffer = __webpack_require__(278);
	var base64encoder = __webpack_require__(279);
	var after = __webpack_require__(280);
	var utf8 = __webpack_require__(281);

	/**
	 * Check if we are running an android browser. That requires us to use
	 * ArrayBuffer with polling transports...
	 *
	 * http://ghinda.net/jpeg-blob-ajax-android/
	 */

	var isAndroid = navigator.userAgent.match(/Android/i);

	/**
	 * Check if we are running in PhantomJS.
	 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
	 * https://github.com/ariya/phantomjs/issues/11395
	 * @type boolean
	 */
	var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);

	/**
	 * When true, avoids using Blobs to encode payloads.
	 * @type boolean
	 */
	var dontSendBlobs = isAndroid || isPhantomJS;

	/**
	 * Current protocol version.
	 */

	exports.protocol = 3;

	/**
	 * Packet types.
	 */

	var packets = exports.packets = {
	    open:     0    // non-ws
	  , close:    1    // non-ws
	  , ping:     2
	  , pong:     3
	  , message:  4
	  , upgrade:  5
	  , noop:     6
	};

	var packetslist = keys(packets);

	/**
	 * Premade error packet.
	 */

	var err = { type: 'error', data: 'parser error' };

	/**
	 * Create a blob api even for blob builder when vendor prefixes exist
	 */

	var Blob = __webpack_require__(282);

	/**
	 * Encodes a packet.
	 *
	 *     <packet type id> [ <data> ]
	 *
	 * Example:
	 *
	 *     5hello world
	 *     3
	 *     4
	 *
	 * Binary is encoded in an identical principle
	 *
	 * @api private
	 */

	exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
	  if ('function' == typeof supportsBinary) {
	    callback = supportsBinary;
	    supportsBinary = false;
	  }

	  if ('function' == typeof utf8encode) {
	    callback = utf8encode;
	    utf8encode = null;
	  }

	  var data = (packet.data === undefined)
	    ? undefined
	    : packet.data.buffer || packet.data;

	  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
	    return encodeArrayBuffer(packet, supportsBinary, callback);
	  } else if (Blob && data instanceof global.Blob) {
	    return encodeBlob(packet, supportsBinary, callback);
	  }

	  // might be an object with { base64: true, data: dataAsBase64String }
	  if (data && data.base64) {
	    return encodeBase64Object(packet, callback);
	  }

	  // Sending data as a utf-8 string
	  var encoded = packets[packet.type];

	  // data fragment is optional
	  if (undefined !== packet.data) {
	    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
	  }

	  return callback('' + encoded);

	};

	function encodeBase64Object(packet, callback) {
	  // packet data is an object { base64: true, data: dataAsBase64String }
	  var message = 'b' + exports.packets[packet.type] + packet.data.data;
	  return callback(message);
	}

	/**
	 * Encode packet helpers for binary types
	 */

	function encodeArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var data = packet.data;
	  var contentArray = new Uint8Array(data);
	  var resultBuffer = new Uint8Array(1 + data.byteLength);

	  resultBuffer[0] = packets[packet.type];
	  for (var i = 0; i < contentArray.length; i++) {
	    resultBuffer[i+1] = contentArray[i];
	  }

	  return callback(resultBuffer.buffer);
	}

	function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var fr = new FileReader();
	  fr.onload = function() {
	    packet.data = fr.result;
	    exports.encodePacket(packet, supportsBinary, true, callback);
	  };
	  return fr.readAsArrayBuffer(packet.data);
	}

	function encodeBlob(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  if (dontSendBlobs) {
	    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
	  }

	  var length = new Uint8Array(1);
	  length[0] = packets[packet.type];
	  var blob = new Blob([length.buffer, packet.data]);

	  return callback(blob);
	}

	/**
	 * Encodes a packet with binary data in a base64 string
	 *
	 * @param {Object} packet, has `type` and `data`
	 * @return {String} base64 encoded message
	 */

	exports.encodeBase64Packet = function(packet, callback) {
	  var message = 'b' + exports.packets[packet.type];
	  if (Blob && packet.data instanceof global.Blob) {
	    var fr = new FileReader();
	    fr.onload = function() {
	      var b64 = fr.result.split(',')[1];
	      callback(message + b64);
	    };
	    return fr.readAsDataURL(packet.data);
	  }

	  var b64data;
	  try {
	    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
	  } catch (e) {
	    // iPhone Safari doesn't let you apply with typed arrays
	    var typed = new Uint8Array(packet.data);
	    var basic = new Array(typed.length);
	    for (var i = 0; i < typed.length; i++) {
	      basic[i] = typed[i];
	    }
	    b64data = String.fromCharCode.apply(null, basic);
	  }
	  message += global.btoa(b64data);
	  return callback(message);
	};

	/**
	 * Decodes a packet. Changes format to Blob if requested.
	 *
	 * @return {Object} with `type` and `data` (if any)
	 * @api private
	 */

	exports.decodePacket = function (data, binaryType, utf8decode) {
	  // String data
	  if (typeof data == 'string' || data === undefined) {
	    if (data.charAt(0) == 'b') {
	      return exports.decodeBase64Packet(data.substr(1), binaryType);
	    }

	    if (utf8decode) {
	      try {
	        data = utf8.decode(data);
	      } catch (e) {
	        return err;
	      }
	    }
	    var type = data.charAt(0);

	    if (Number(type) != type || !packetslist[type]) {
	      return err;
	    }

	    if (data.length > 1) {
	      return { type: packetslist[type], data: data.substring(1) };
	    } else {
	      return { type: packetslist[type] };
	    }
	  }

	  var asArray = new Uint8Array(data);
	  var type = asArray[0];
	  var rest = sliceBuffer(data, 1);
	  if (Blob && binaryType === 'blob') {
	    rest = new Blob([rest]);
	  }
	  return { type: packetslist[type], data: rest };
	};

	/**
	 * Decodes a packet encoded in a base64 string
	 *
	 * @param {String} base64 encoded message
	 * @return {Object} with `type` and `data` (if any)
	 */

	exports.decodeBase64Packet = function(msg, binaryType) {
	  var type = packetslist[msg.charAt(0)];
	  if (!global.ArrayBuffer) {
	    return { type: type, data: { base64: true, data: msg.substr(1) } };
	  }

	  var data = base64encoder.decode(msg.substr(1));

	  if (binaryType === 'blob' && Blob) {
	    data = new Blob([data]);
	  }

	  return { type: type, data: data };
	};

	/**
	 * Encodes multiple messages (payload).
	 *
	 *     <length>:data
	 *
	 * Example:
	 *
	 *     11:hello world2:hi
	 *
	 * If any contents are binary, they will be encoded as base64 strings. Base64
	 * encoded strings are marked with a b before the length specifier
	 *
	 * @param {Array} packets
	 * @api private
	 */

	exports.encodePayload = function (packets, supportsBinary, callback) {
	  if (typeof supportsBinary == 'function') {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }

	  var isBinary = hasBinary(packets);

	  if (supportsBinary && isBinary) {
	    if (Blob && !dontSendBlobs) {
	      return exports.encodePayloadAsBlob(packets, callback);
	    }

	    return exports.encodePayloadAsArrayBuffer(packets, callback);
	  }

	  if (!packets.length) {
	    return callback('0:');
	  }

	  function setLengthHeader(message) {
	    return message.length + ':' + message;
	  }

	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
	      doneCallback(null, setLengthHeader(message));
	    });
	  }

	  map(packets, encodeOne, function(err, results) {
	    return callback(results.join(''));
	  });
	};

	/**
	 * Async array map using after
	 */

	function map(ary, each, done) {
	  var result = new Array(ary.length);
	  var next = after(ary.length, done);

	  var eachWithIndex = function(i, el, cb) {
	    each(el, function(error, msg) {
	      result[i] = msg;
	      cb(error, result);
	    });
	  };

	  for (var i = 0; i < ary.length; i++) {
	    eachWithIndex(i, ary[i], next);
	  }
	}

	/*
	 * Decodes data when a payload is maybe expected. Possible binary contents are
	 * decoded from their base64 representation
	 *
	 * @param {String} data, callback method
	 * @api public
	 */

	exports.decodePayload = function (data, binaryType, callback) {
	  if (typeof data != 'string') {
	    return exports.decodePayloadAsBinary(data, binaryType, callback);
	  }

	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var packet;
	  if (data == '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }

	  var length = ''
	    , n, msg;

	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);

	    if (':' != chr) {
	      length += chr;
	    } else {
	      if ('' == length || (length != (n = Number(length)))) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }

	      msg = data.substr(i + 1, n);

	      if (length != msg.length) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }

	      if (msg.length) {
	        packet = exports.decodePacket(msg, binaryType, true);

	        if (err.type == packet.type && err.data == packet.data) {
	          // parser error in individual packet - ignoring payload
	          return callback(err, 0, 1);
	        }

	        var ret = callback(packet, i + n, l);
	        if (false === ret) return;
	      }

	      // advance cursor
	      i += n;
	      length = '';
	    }
	  }

	  if (length != '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }

	};

	/**
	 * Encodes multiple messages (payload) as binary.
	 *
	 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
	 * 255><data>
	 *
	 * Example:
	 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
	 *
	 * @param {Array} packets
	 * @return {ArrayBuffer} encoded payload
	 * @api private
	 */

	exports.encodePayloadAsArrayBuffer = function(packets, callback) {
	  if (!packets.length) {
	    return callback(new ArrayBuffer(0));
	  }

	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(data) {
	      return doneCallback(null, data);
	    });
	  }

	  map(packets, encodeOne, function(err, encodedPackets) {
	    var totalLength = encodedPackets.reduce(function(acc, p) {
	      var len;
	      if (typeof p === 'string'){
	        len = p.length;
	      } else {
	        len = p.byteLength;
	      }
	      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
	    }, 0);

	    var resultArray = new Uint8Array(totalLength);

	    var bufferIndex = 0;
	    encodedPackets.forEach(function(p) {
	      var isString = typeof p === 'string';
	      var ab = p;
	      if (isString) {
	        var view = new Uint8Array(p.length);
	        for (var i = 0; i < p.length; i++) {
	          view[i] = p.charCodeAt(i);
	        }
	        ab = view.buffer;
	      }

	      if (isString) { // not true binary
	        resultArray[bufferIndex++] = 0;
	      } else { // true binary
	        resultArray[bufferIndex++] = 1;
	      }

	      var lenStr = ab.byteLength.toString();
	      for (var i = 0; i < lenStr.length; i++) {
	        resultArray[bufferIndex++] = parseInt(lenStr[i]);
	      }
	      resultArray[bufferIndex++] = 255;

	      var view = new Uint8Array(ab);
	      for (var i = 0; i < view.length; i++) {
	        resultArray[bufferIndex++] = view[i];
	      }
	    });

	    return callback(resultArray.buffer);
	  });
	};

	/**
	 * Encode as Blob
	 */

	exports.encodePayloadAsBlob = function(packets, callback) {
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(encoded) {
	      var binaryIdentifier = new Uint8Array(1);
	      binaryIdentifier[0] = 1;
	      if (typeof encoded === 'string') {
	        var view = new Uint8Array(encoded.length);
	        for (var i = 0; i < encoded.length; i++) {
	          view[i] = encoded.charCodeAt(i);
	        }
	        encoded = view.buffer;
	        binaryIdentifier[0] = 0;
	      }

	      var len = (encoded instanceof ArrayBuffer)
	        ? encoded.byteLength
	        : encoded.size;

	      var lenStr = len.toString();
	      var lengthAry = new Uint8Array(lenStr.length + 1);
	      for (var i = 0; i < lenStr.length; i++) {
	        lengthAry[i] = parseInt(lenStr[i]);
	      }
	      lengthAry[lenStr.length] = 255;

	      if (Blob) {
	        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
	        doneCallback(null, blob);
	      }
	    });
	  }

	  map(packets, encodeOne, function(err, results) {
	    return callback(new Blob(results));
	  });
	};

	/*
	 * Decodes data when a payload is maybe expected. Strings are decoded by
	 * interpreting each byte as a key code for entries marked to start with 0. See
	 * description of encodePayloadAsBinary
	 *
	 * @param {ArrayBuffer} data, callback method
	 * @api public
	 */

	exports.decodePayloadAsBinary = function (data, binaryType, callback) {
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var bufferTail = data;
	  var buffers = [];

	  var numberTooLong = false;
	  while (bufferTail.byteLength > 0) {
	    var tailArray = new Uint8Array(bufferTail);
	    var isString = tailArray[0] === 0;
	    var msgLength = '';

	    for (var i = 1; ; i++) {
	      if (tailArray[i] == 255) break;

	      if (msgLength.length > 310) {
	        numberTooLong = true;
	        break;
	      }

	      msgLength += tailArray[i];
	    }

	    if(numberTooLong) return callback(err, 0, 1);

	    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
	    msgLength = parseInt(msgLength);

	    var msg = sliceBuffer(bufferTail, 0, msgLength);
	    if (isString) {
	      try {
	        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
	      } catch (e) {
	        // iPhone Safari doesn't let you apply to typed arrays
	        var typed = new Uint8Array(msg);
	        msg = '';
	        for (var i = 0; i < typed.length; i++) {
	          msg += String.fromCharCode(typed[i]);
	        }
	      }
	    }

	    buffers.push(msg);
	    bufferTail = sliceBuffer(bufferTail, msgLength);
	  }

	  var total = buffers.length;
	  buffers.forEach(function(buffer, i) {
	    callback(exports.decodePacket(buffer, binaryType, true), i, total);
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 275 */
/***/ function(module, exports) {

	
	/**
	 * Gets the keys for an object.
	 *
	 * @return {Array} keys
	 * @api private
	 */

	module.exports = Object.keys || function keys (obj){
	  var arr = [];
	  var has = Object.prototype.hasOwnProperty;

	  for (var i in obj) {
	    if (has.call(obj, i)) {
	      arr.push(i);
	    }
	  }
	  return arr;
	};


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */

	var isArray = __webpack_require__(277);

	/**
	 * Module exports.
	 */

	module.exports = hasBinary;

	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */

	function hasBinary(data) {

	  function _hasBinary(obj) {
	    if (!obj) return false;

	    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }

	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      if (obj.toJSON) {
	        obj = obj.toJSON();
	      }

	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }

	    return false;
	  }

	  return _hasBinary(data);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 277 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 278 */
/***/ function(module, exports) {

	/**
	 * An abstraction for slicing an arraybuffer even when
	 * ArrayBuffer.prototype.slice is not supported
	 *
	 * @api public
	 */

	module.exports = function(arraybuffer, start, end) {
	  var bytes = arraybuffer.byteLength;
	  start = start || 0;
	  end = end || bytes;

	  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

	  if (start < 0) { start += bytes; }
	  if (end < 0) { end += bytes; }
	  if (end > bytes) { end = bytes; }

	  if (start >= bytes || start >= end || bytes === 0) {
	    return new ArrayBuffer(0);
	  }

	  var abv = new Uint8Array(arraybuffer);
	  var result = new Uint8Array(end - start);
	  for (var i = start, ii = 0; i < end; i++, ii++) {
	    result[ii] = abv[i];
	  }
	  return result.buffer;
	};


/***/ },
/* 279 */
/***/ function(module, exports) {

	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function(chars){
	  "use strict";

	  exports.encode = function(arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	    i, len = bytes.length, base64 = "";

	    for (i = 0; i < len; i+=3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
	      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
	      base64 += chars[bytes[i + 2] & 63];
	    }

	    if ((len % 3) === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }

	    return base64;
	  };

	  exports.decode =  function(base64) {
	    var bufferLength = base64.length * 0.75,
	    len = base64.length, i, p = 0,
	    encoded1, encoded2, encoded3, encoded4;

	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }

	    var arraybuffer = new ArrayBuffer(bufferLength),
	    bytes = new Uint8Array(arraybuffer);

	    for (i = 0; i < len; i+=4) {
	      encoded1 = chars.indexOf(base64[i]);
	      encoded2 = chars.indexOf(base64[i+1]);
	      encoded3 = chars.indexOf(base64[i+2]);
	      encoded4 = chars.indexOf(base64[i+3]);

	      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
	      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
	      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
	    }

	    return arraybuffer;
	  };
	})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");


/***/ },
/* 280 */
/***/ function(module, exports) {

	module.exports = after

	function after(count, callback, err_cb) {
	    var bail = false
	    err_cb = err_cb || noop
	    proxy.count = count

	    return (count === 0) ? callback() : proxy

	    function proxy(err, result) {
	        if (proxy.count <= 0) {
	            throw new Error('after called too many times')
	        }
	        --proxy.count

	        // after first error, rest are passed to err_cb
	        if (err) {
	            bail = true
	            callback(err)
	            // future error callbacks will go to error handler
	            callback = err_cb
	        } else if (proxy.count === 0 && !bail) {
	            callback(null, result)
	        }
	    }
	}

	function noop() {}


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/utf8js v2.0.0 by @mathias */
	;(function(root) {

		// Detect free variables `exports`
		var freeExports = typeof exports == 'object' && exports;

		// Detect free variable `module`
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;

		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}

		/*--------------------------------------------------------------------------*/

		var stringFromCharCode = String.fromCharCode;

		// Taken from https://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		// Taken from https://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}

		function checkScalarValue(codePoint) {
			if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
				throw Error(
					'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
					' is not a scalar value'
				);
			}
		}
		/*--------------------------------------------------------------------------*/

		function createByte(codePoint, shift) {
			return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
		}

		function encodeCodePoint(codePoint) {
			if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
				symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
			}
			else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
				checkScalarValue(codePoint);
				symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
				symbol += createByte(codePoint, 6);
			}
			else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
				symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
			return symbol;
		}

		function utf8encode(string) {
			var codePoints = ucs2decode(string);
			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint);
			}
			return byteString;
		}

		/*--------------------------------------------------------------------------*/

		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}

			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}

			// If we end up here, it’s not a continuation byte
			throw Error('Invalid continuation byte');
		}

		function decodeSymbol() {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;

			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}

			if (byteIndex == byteCount) {
				return false;
			}

			// Read first byte
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}

			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				var byte2 = readContinuationByte();
				codePoint = ((byte1 & 0x1F) << 6) | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
				if (codePoint >= 0x0800) {
					checkScalarValue(codePoint);
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
					(byte3 << 0x06) | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}

			throw Error('Invalid UTF-8 detected');
		}

		var byteArray;
		var byteCount;
		var byteIndex;
		function utf8decode(byteString) {
			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol()) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}

		/*--------------------------------------------------------------------------*/

		var utf8 = {
			'version': '2.0.0',
			'encode': utf8encode,
			'decode': utf8decode
		};

		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return utf8;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = utf8;
			} else { // in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in utf8) {
					hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.utf8 = utf8;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(191)(module), (function() { return this; }())))

/***/ },
/* 282 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Create a blob builder even when vendor prefixes exist
	 */

	var BlobBuilder = global.BlobBuilder
	  || global.WebKitBlobBuilder
	  || global.MSBlobBuilder
	  || global.MozBlobBuilder;

	/**
	 * Check if Blob constructor is supported
	 */

	var blobSupported = (function() {
	  try {
	    var a = new Blob(['hi']);
	    return a.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();

	/**
	 * Check if Blob constructor supports ArrayBufferViews
	 * Fails in Safari 6, so we need to map to ArrayBuffers there.
	 */

	var blobSupportsArrayBufferView = blobSupported && (function() {
	  try {
	    var b = new Blob([new Uint8Array([1,2])]);
	    return b.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();

	/**
	 * Check if BlobBuilder is supported
	 */

	var blobBuilderSupported = BlobBuilder
	  && BlobBuilder.prototype.append
	  && BlobBuilder.prototype.getBlob;

	/**
	 * Helper function that maps ArrayBufferViews to ArrayBuffers
	 * Used by BlobBuilder constructor and old browsers that didn't
	 * support it in the Blob constructor.
	 */

	function mapArrayBufferViews(ary) {
	  for (var i = 0; i < ary.length; i++) {
	    var chunk = ary[i];
	    if (chunk.buffer instanceof ArrayBuffer) {
	      var buf = chunk.buffer;

	      // if this is a subarray, make a copy so we only
	      // include the subarray region from the underlying buffer
	      if (chunk.byteLength !== buf.byteLength) {
	        var copy = new Uint8Array(chunk.byteLength);
	        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
	        buf = copy.buffer;
	      }

	      ary[i] = buf;
	    }
	  }
	}

	function BlobBuilderConstructor(ary, options) {
	  options = options || {};

	  var bb = new BlobBuilder();
	  mapArrayBufferViews(ary);

	  for (var i = 0; i < ary.length; i++) {
	    bb.append(ary[i]);
	  }

	  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
	};

	function BlobConstructor(ary, options) {
	  mapArrayBufferViews(ary);
	  return new Blob(ary, options || {});
	};

	module.exports = (function() {
	  if (blobSupported) {
	    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
	  } else if (blobBuilderSupported) {
	    return BlobBuilderConstructor;
	  } else {
	    return undefined;
	  }
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 283 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};

	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 284 */
/***/ function(module, exports) {

	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */

	exports.encode = function (obj) {
	  var str = '';

	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      if (str.length) str += '&';
	      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	    }
	  }

	  return str;
	};

	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */

	exports.decode = function(qs){
	  var qry = {};
	  var pairs = qs.split('&');
	  for (var i = 0, l = pairs.length; i < l; i++) {
	    var pair = pairs[i].split('=');
	    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	  return qry;
	};


/***/ },
/* 285 */
/***/ function(module, exports) {

	
	module.exports = function(a, b){
	  var fn = function(){};
	  fn.prototype = b.prototype;
	  a.prototype = new fn;
	  a.prototype.constructor = a;
	};

/***/ },
/* 286 */
/***/ function(module, exports) {

	'use strict';

	var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
	  , length = 64
	  , map = {}
	  , seed = 0
	  , i = 0
	  , prev;

	/**
	 * Return a string representing the specified number.
	 *
	 * @param {Number} num The number to convert.
	 * @returns {String} The string representation of the number.
	 * @api public
	 */
	function encode(num) {
	  var encoded = '';

	  do {
	    encoded = alphabet[num % length] + encoded;
	    num = Math.floor(num / length);
	  } while (num > 0);

	  return encoded;
	}

	/**
	 * Return the integer value specified by the given string.
	 *
	 * @param {String} str The string to convert.
	 * @returns {Number} The integer value represented by the string.
	 * @api public
	 */
	function decode(str) {
	  var decoded = 0;

	  for (i = 0; i < str.length; i++) {
	    decoded = decoded * length + map[str.charAt(i)];
	  }

	  return decoded;
	}

	/**
	 * Yeast: A tiny growing id generator.
	 *
	 * @returns {String} A unique id.
	 * @api public
	 */
	function yeast() {
	  var now = encode(+new Date());

	  if (now !== prev) return seed = 0, prev = now;
	  return now +'.'+ encode(seed++);
	}

	//
	// Map each character to its index.
	//
	for (; i < length; i++) map[alphabet[i]] = i;

	//
	// Expose the `yeast`, `encode` and `decode` functions.
	//
	yeast.encode = encode;
	yeast.decode = decode;
	module.exports = yeast;


/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(288);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(289);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 289 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module requirements.
	 */

	var Polling = __webpack_require__(272);
	var inherit = __webpack_require__(285);

	/**
	 * Module exports.
	 */

	module.exports = JSONPPolling;

	/**
	 * Cached regular expressions.
	 */

	var rNewline = /\n/g;
	var rEscapedNewline = /\\n/g;

	/**
	 * Global JSONP callbacks.
	 */

	var callbacks;

	/**
	 * Callbacks count.
	 */

	var index = 0;

	/**
	 * Noop.
	 */

	function empty () { }

	/**
	 * JSONP Polling constructor.
	 *
	 * @param {Object} opts.
	 * @api public
	 */

	function JSONPPolling (opts) {
	  Polling.call(this, opts);

	  this.query = this.query || {};

	  // define global callbacks array if not present
	  // we do this here (lazily) to avoid unneeded global pollution
	  if (!callbacks) {
	    // we need to consider multiple engines in the same page
	    if (!global.___eio) global.___eio = [];
	    callbacks = global.___eio;
	  }

	  // callback identifier
	  this.index = callbacks.length;

	  // add callback to jsonp global
	  var self = this;
	  callbacks.push(function (msg) {
	    self.onData(msg);
	  });

	  // append to query string
	  this.query.j = this.index;

	  // prevent spurious errors from being emitted when the window is unloaded
	  if (global.document && global.addEventListener) {
	    global.addEventListener('beforeunload', function () {
	      if (self.script) self.script.onerror = empty;
	    }, false);
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(JSONPPolling, Polling);

	/*
	 * JSONP only supports binary as base64 encoded strings
	 */

	JSONPPolling.prototype.supportsBinary = false;

	/**
	 * Closes the socket.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doClose = function () {
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  if (this.form) {
	    this.form.parentNode.removeChild(this.form);
	    this.form = null;
	    this.iframe = null;
	  }

	  Polling.prototype.doClose.call(this);
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doPoll = function () {
	  var self = this;
	  var script = document.createElement('script');

	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  script.async = true;
	  script.src = this.uri();
	  script.onerror = function(e){
	    self.onError('jsonp poll error',e);
	  };

	  var insertAt = document.getElementsByTagName('script')[0];
	  if (insertAt) {
	    insertAt.parentNode.insertBefore(script, insertAt);
	  }
	  else {
	    (document.head || document.body).appendChild(script);
	  }
	  this.script = script;

	  var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
	  
	  if (isUAgecko) {
	    setTimeout(function () {
	      var iframe = document.createElement('iframe');
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	    }, 100);
	  }
	};

	/**
	 * Writes with a hidden iframe.
	 *
	 * @param {String} data to send
	 * @param {Function} called upon flush.
	 * @api private
	 */

	JSONPPolling.prototype.doWrite = function (data, fn) {
	  var self = this;

	  if (!this.form) {
	    var form = document.createElement('form');
	    var area = document.createElement('textarea');
	    var id = this.iframeId = 'eio_iframe_' + this.index;
	    var iframe;

	    form.className = 'socketio';
	    form.style.position = 'absolute';
	    form.style.top = '-1000px';
	    form.style.left = '-1000px';
	    form.target = id;
	    form.method = 'POST';
	    form.setAttribute('accept-charset', 'utf-8');
	    area.name = 'd';
	    form.appendChild(area);
	    document.body.appendChild(form);

	    this.form = form;
	    this.area = area;
	  }

	  this.form.action = this.uri();

	  function complete () {
	    initIframe();
	    fn();
	  }

	  function initIframe () {
	    if (self.iframe) {
	      try {
	        self.form.removeChild(self.iframe);
	      } catch (e) {
	        self.onError('jsonp polling iframe removal error', e);
	      }
	    }

	    try {
	      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	      var html = '<iframe src="javascript:0" name="'+ self.iframeId +'">';
	      iframe = document.createElement(html);
	    } catch (e) {
	      iframe = document.createElement('iframe');
	      iframe.name = self.iframeId;
	      iframe.src = 'javascript:0';
	    }

	    iframe.id = self.iframeId;

	    self.form.appendChild(iframe);
	    self.iframe = iframe;
	  }

	  initIframe();

	  // escape \n to prevent it from being converted into \r\n by some UAs
	  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
	  data = data.replace(rEscapedNewline, '\\\n');
	  this.area.value = data.replace(rNewline, '\\n');

	  try {
	    this.form.submit();
	  } catch(e) {}

	  if (this.iframe.attachEvent) {
	    this.iframe.onreadystatechange = function(){
	      if (self.iframe.readyState == 'complete') {
	        complete();
	      }
	    };
	  } else {
	    this.iframe.onload = complete;
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(273);
	var parser = __webpack_require__(274);
	var parseqs = __webpack_require__(284);
	var inherit = __webpack_require__(285);
	var yeast = __webpack_require__(286);
	var debug = __webpack_require__(287)('engine.io-client:websocket');
	var BrowserWebSocket = global.WebSocket || global.MozWebSocket;

	/**
	 * Get either the `WebSocket` or `MozWebSocket` globals
	 * in the browser or try to resolve WebSocket-compatible
	 * interface exposed by `ws` for Node-like environment.
	 */

	var WebSocket = BrowserWebSocket;
	if (!WebSocket && typeof window === 'undefined') {
	  try {
	    WebSocket = __webpack_require__(292);
	  } catch (e) { }
	}

	/**
	 * Module exports.
	 */

	module.exports = WS;

	/**
	 * WebSocket transport constructor.
	 *
	 * @api {Object} connection options
	 * @api public
	 */

	function WS(opts){
	  var forceBase64 = (opts && opts.forceBase64);
	  if (forceBase64) {
	    this.supportsBinary = false;
	  }
	  this.perMessageDeflate = opts.perMessageDeflate;
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(WS, Transport);

	/**
	 * Transport name.
	 *
	 * @api public
	 */

	WS.prototype.name = 'websocket';

	/*
	 * WebSockets support binary
	 */

	WS.prototype.supportsBinary = true;

	/**
	 * Opens socket.
	 *
	 * @api private
	 */

	WS.prototype.doOpen = function(){
	  if (!this.check()) {
	    // let probe timeout
	    return;
	  }

	  var self = this;
	  var uri = this.uri();
	  var protocols = void(0);
	  var opts = {
	    agent: this.agent,
	    perMessageDeflate: this.perMessageDeflate
	  };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  if (this.extraHeaders) {
	    opts.headers = this.extraHeaders;
	  }

	  this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);

	  if (this.ws.binaryType === undefined) {
	    this.supportsBinary = false;
	  }

	  if (this.ws.supports && this.ws.supports.binary) {
	    this.supportsBinary = true;
	    this.ws.binaryType = 'buffer';
	  } else {
	    this.ws.binaryType = 'arraybuffer';
	  }

	  this.addEventListeners();
	};

	/**
	 * Adds event listeners to the socket
	 *
	 * @api private
	 */

	WS.prototype.addEventListeners = function(){
	  var self = this;

	  this.ws.onopen = function(){
	    self.onOpen();
	  };
	  this.ws.onclose = function(){
	    self.onClose();
	  };
	  this.ws.onmessage = function(ev){
	    self.onData(ev.data);
	  };
	  this.ws.onerror = function(e){
	    self.onError('websocket error', e);
	  };
	};

	/**
	 * Override `onData` to use a timer on iOS.
	 * See: https://gist.github.com/mloughran/2052006
	 *
	 * @api private
	 */

	if ('undefined' != typeof navigator
	  && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
	  WS.prototype.onData = function(data){
	    var self = this;
	    setTimeout(function(){
	      Transport.prototype.onData.call(self, data);
	    }, 0);
	  };
	}

	/**
	 * Writes data to socket.
	 *
	 * @param {Array} array of packets.
	 * @api private
	 */

	WS.prototype.write = function(packets){
	  var self = this;
	  this.writable = false;

	  // encodePacket efficient as it uses WS framing
	  // no need for encodePayload
	  var total = packets.length;
	  for (var i = 0, l = total; i < l; i++) {
	    (function(packet) {
	      parser.encodePacket(packet, self.supportsBinary, function(data) {
	        if (!BrowserWebSocket) {
	          // always create a new object (GH-437)
	          var opts = {};
	          if (packet.options) {
	            opts.compress = packet.options.compress;
	          }

	          if (self.perMessageDeflate) {
	            var len = 'string' == typeof data ? global.Buffer.byteLength(data) : data.length;
	            if (len < self.perMessageDeflate.threshold) {
	              opts.compress = false;
	            }
	          }
	        }

	        //Sometimes the websocket has already been closed but the browser didn't
	        //have a chance of informing us about it yet, in that case send will
	        //throw an error
	        try {
	          if (BrowserWebSocket) {
	            // TypeError is thrown when passing the second argument on Safari
	            self.ws.send(data);
	          } else {
	            self.ws.send(data, opts);
	          }
	        } catch (e){
	          debug('websocket closed before onclose event');
	        }

	        --total || done();
	      });
	    })(packets[i]);
	  }

	  function done(){
	    self.emit('flush');

	    // fake drain
	    // defer to next tick to allow Socket to clear writeBuffer
	    setTimeout(function(){
	      self.writable = true;
	      self.emit('drain');
	    }, 0);
	  }
	};

	/**
	 * Called upon close
	 *
	 * @api private
	 */

	WS.prototype.onClose = function(){
	  Transport.prototype.onClose.call(this);
	};

	/**
	 * Closes socket.
	 *
	 * @api private
	 */

	WS.prototype.doClose = function(){
	  if (typeof this.ws !== 'undefined') {
	    this.ws.close();
	  }
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	WS.prototype.uri = function(){
	  var query = this.query || {};
	  var schema = this.secure ? 'wss' : 'ws';
	  var port = '';

	  // avoid port if default for schema
	  if (this.port && (('wss' == schema && this.port != 443)
	    || ('ws' == schema && this.port != 80))) {
	    port = ':' + this.port;
	  }

	  // append timestamp to URI
	  if (this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }

	  // communicate binary support capabilities
	  if (!this.supportsBinary) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};

	/**
	 * Feature detection for WebSocket.
	 *
	 * @return {Boolean} whether this transport is available.
	 * @api public
	 */

	WS.prototype.check = function(){
	  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 292 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 293 */
/***/ function(module, exports) {

	
	var indexOf = [].indexOf;

	module.exports = function(arr, obj){
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 294 */
/***/ function(module, exports) {

	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */

	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

	var parts = [
	    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
	];

	module.exports = function parseuri(str) {
	    var src = str,
	        b = str.indexOf('['),
	        e = str.indexOf(']');

	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }

	    var m = re.exec(str || ''),
	        uri = {},
	        i = 14;

	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }

	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }

	    return uri;
	};


/***/ },
/* 295 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * JSON parse.
	 *
	 * @see Based on jQuery#parseJSON (MIT) and JSON2
	 * @api private
	 */

	var rvalidchars = /^[\],:{}\s]*$/;
	var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
	var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
	var rtrimLeft = /^\s+/;
	var rtrimRight = /\s+$/;

	module.exports = function parsejson(data) {
	  if ('string' != typeof data || !data) {
	    return null;
	  }

	  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

	  // Attempt to parse using the native JSON parser first
	  if (global.JSON && JSON.parse) {
	    return JSON.parse(data);
	  }

	  if (rvalidchars.test(data.replace(rvalidescape, '@')
	      .replace(rvalidtokens, ']')
	      .replace(rvalidbraces, ''))) {
	    return (new Function('return ' + data))();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 296 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }
]);