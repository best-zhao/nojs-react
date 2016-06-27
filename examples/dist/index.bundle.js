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

	_jquery2.default.getJSON('./menu.json').then(function (json) {
	    var frameOptions = {
	        logo: React.createElement(
	            'h1',
	            null,
	            'nojs-react'
	        ),
	        menu: json.data,
	        parseUrl: function parseUrl(url, node) {
	            return node ? 'doc/' + url + '.md' : url;
	        },
	        parseContent: function parseContent(html, fromUrl) {
	            return (/.md$/.test(fromUrl) ? (0, _marked2.default)(html) : html
	            );
	        },
	        onChange: function onChange(node, hashData, container) {
	            node = this.state.menuFormatData[hashData.id];
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
	    componentWillReceiveProps: function componentWillReceiveProps() {},
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
	exports.push([module.id, "html,body,#frameContainer,.nj-frame{height:100%;width:100%;overflow:hidden;}\r\n.nj-frame-side{width:220px;background:#F5F2F0;height:100%;position:fixed;padding:25px 0;}\r\n.nj-frame-logo{padding:0 20px 20px;}\r\n.nj-frame-logo h1{font:100 26px/1 'microsoft yahei';margin:0;}\r\n.nj-frame-content{margin-left:220px;font-size:1.16em;color:#222;height:100%;overflow:auto}\r\n.nj-frame-inner{padding:40px;margin:0 auto}\r\n\r\n", ""]);

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
	            //调用preventDefault阻止关闭弹窗事件
	            return;
	        }
	        //打开所有父节点
	        this.getParents(node).reverse().forEach(function (parent) {
	            !parent.open && _this2.toggle(parent);
	        });
	        if (!node.select) {
	            var allnodes = this.state.dataFormat.databyid;
	            for (var i in allnodes) {
	                allnodes[i].select = null;
	            }
	        }

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
	        var node = _state2.node;

	        var visible = !parentNode || parentNode.open ? ' d_show' : ' d_hide';
	        var rootScope = this.props.rootScope || this;
	        var async = rootScope.state.async;

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
	                        'div',
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
	exports.push([module.id, "/*tree*/\r\n.nj-tree li{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;clear:both}\r\n.nj-tree .item{display:block;color:#333;margin:0 0 1px;transition:background .1s;padding:0 1.2em;height:24px;line-height:2;cursor:default;}\r\n.nj-tree .item:hover{background:#f4f4f4;text-decoration:none}\r\n.nj-tree ._icon,.nj-tree ._line{float:left;width:17px;height:100%;overflow:hidden;color:#888;line-height:1.8;font-size:14px;}\r\n.nj-tree ._icon{width:15px;}\r\n.nj-tree ._icon:before{content:'\\E602';font-family:'njicon'}\r\n.nj-tree .open ._icon:before{content:'\\E601';}\r\n.nj-tree .pending ._icon:before{content:'\\E604';animation:njRotate 1s linear infinite;color:#999;}\r\n.nj-tree .no-child ._icon{font-size:13px;color:#aaa;}\r\n.nj-tree .no-child ._icon:before{content:'\\E603';}\r\n.nj-tree .selected ._text{font-weight:800}\r\n.nj-tree .selected,.nj_tree .selected:hover{color:#f30;background:#f0f0f0;}\r\n.nj-tree ._checkbox input{float:left;margin:6px 4px 0 2px}\r\n.nj-tree .more{position:relative;overflow:visible}\r\n.nj-tree .more a{color:#bbb}\r\n\r\noption[disabled]{color:#bbb;}", ""]);

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

	    // trigger : 'click'
	    console.log(pop);

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
	            self.getOrigin();
	            self.setDisplay(true);
	        }
	        var delay;
	        var events = '';
	        var eventSP = '.popover';
	        var _event = '';
	        var layerBind;

	        function hide() {
	            if (self.keepVisible) {
	                self.keepVisible = null;
	                return;
	            }
	            delay = window.setTimeout(function () {
	                self.setDisplay(false);
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
	                $(document).click(hide);
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

	            options.value = this.state.value;
	            options.onChange = this.valueLink().requestChange;
	            options.className = nj.utils.joinClass(this.props.className, mark && 'input-' + status);
	            var _event = options[trigger];
	            options[trigger] = function (e) {
	                _event && _event(e); //外部添加的事件
	                _this3.verify(true);
	            };
	        }

	        return React.createElement(
	            'label',
	            null,
	            type == 'textarea' ? React.createElement('textarea', options) : React.createElement('input', options),
	            React.createElement(
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
	            content: this.replaceFace(text)
	        };
	        var Input = insert[0].$handle; //是否为Input表单组件
	        if (Input) {
	            //setState方法为异步 所以不使用 直接同步赋值
	            Input.state.value = insert.val();
	        }
	        popover.setDisplay(false);
	        popover.insertEvent.complete(data);
	    },

	    //提取表情,不传默认为当前表情插入对象val
	    replaceFace: function replaceFace(con, faces) {
	        var insert = this.props.insert;

	        if (!con) {
	            var con = this.insert.val();
	        }
	        var T = this;
	        faces = faces || this.state.faces;

	        $.each(faces, function (index, v) {
	            var faceArray = v.item,
	                N,
	                pic,
	                item;
	            for (var i in faceArray) {
	                item = faceArray[i];
	                N = v.id + '_' + item;
	                if (con.indexOf("[:" + N + "]") != -1) {
	                    pic = '<img src="' + v.url + i + v.fix + '" alt="' + item + '" class="nj_face_image" title="' + item + '" />';
	                    con = con.replace(eval("/\\[:" + N.replace("(", "\\(").replace(")", "\\)") + "\\]/g"), pic);
	                }
	            }
	        });
	        return con;
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

/***/ }
]);