Prism.languages.schemalib = {
	'comment': [
        {
            pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
            lookbehind: true
        },
        {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true
        }
    ],
	'string': {
		pattern: /"(?:\\.|[^\\"])*"/,
		greedy: true
	},
    'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/,
	'number': /(?:\B-|\b)\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/,
	'boolean': /\b(?:true|false)\b/,
	'variable': /\$[a-z_]\w*/i,
	'directive': {
		pattern: /@[a-z_]\w*/i,
		alias: 'function'
	},
	'attr-name': /[a-z_]\w*(?=\s*:)/i,
	'keyword': [
		{
			pattern: /(type\s+(?!extends)[a-z_]\w*\s+|\.\.\.\s*)extends\b/,
			lookbehind: true
		},
		/\b(?:type|service|app|enum)\b/
	],
	'punctuation': /[!(){}\[\]:=,]/
};
