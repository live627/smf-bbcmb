(function (document, sceditor) {
	'use strict';
	var dom = sceditor.dom;
	for (var c of ['error', 'warning', 'okay', 'info'])
	{
		sceditor.command.set(
			c, {
				exec: function() {
					this.wysiwygEditorInsertHtml('<div class="' + c + '_bbc">', '</div>');
				},
				txtExec: ['[' + c + ']', '[/' + c + ']']
			}
		);
		sceditor.formats.bbcode.set(
			c, {
				tags: {
					div: {
						class: c + '_bbc'
					}
				},
				isInline: false,
				format: '[' + c + ']{0}[/' + c + ']',
				html: '<div class="' + c + '_bbc">{0}</div>'
			}
		);
	}
	sceditor.plugins.mbox = function ()
	{
		var editor;
		this.init = function ()
		{
			editor = this;
		}
		this.signalReady = function ()
		{
			editor.css(mboxCss);
		};
	};
})(document, sceditor);
