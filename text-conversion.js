// https://spencermortensen.com/articles/email-obfuscation/#text-conversion

'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
	const email = document.getElementById('text-conversion').firstChild;

	email.nodeValue = email.nodeValue
		.replace(' ', '@')
		.replaceAll(' ', '.')
		.replaceAll(new RegExp('[zy]', 'g'), '')
		.replace('example', 'practicaltech.edu');
});
