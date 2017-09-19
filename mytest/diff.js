/// <reference path="../node_modules/monaco-editor-core/monaco.d.ts" />
define(['require'], function (require) {

	var container = document.getElementById('container');

	var original = monaco.editor.createModel(getOriginalStr(), 'javascript');
	var modified = monaco.editor.createModel(getModifiedStr(), 'javascript');

	var diffEditor = monaco.editor.createDiffEditor(container, {
	});

	diffEditor.setModel({
		original: original,
		modified: modified
	});

});
