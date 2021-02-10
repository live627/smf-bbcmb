sceditor.formats.bbcode.set(
	'error', {
		tags: {
			div: {
				class: 'error_bbc'
			}
		},
		isInline: false,
		format: "[error]{0}[/error]",
		html: '<div class="error_bbc">{0}</div>'
	}
);
sceditor.formats.bbcode.set(
	'warning', {
		tags: {
			div: {
				class: 'warning_bbc'
			}
		},
		isInline: false,
		format: "[warning]{0}[/warning]",
		html: '<div class="warning_bbc">{0}</div>'
	}
);
sceditor.formats.bbcode.set(
	'okay', {
		tags: {
			div: {
				class: 'okay_bbc'
			}
		},
		isInline: false,
		format: "[okay]{0}[/okay]",
		html: '<div class="okay_bbc">{0}</div>'
	}
);
sceditor.formats.bbcode.set(
	'info', {
		tags: {
			div: {
				class: 'info_bbc'
			}
		},
		isInline: false,
		format: "[info]{0}[/info]",
		html: '<div class="info_bbc">{0}</div>'
	}
);