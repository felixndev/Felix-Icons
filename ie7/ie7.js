/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'felixfont\'">' + entity + '</span>' + html;
	}
	var icons = {
		'fxi-eye': '&#x52;',
		'fxi-gmail': '&#x53;',
		'fxi-marker': '&#x54;',
		'fxi-marker-alt': '&#x55;',
		'fxi-chevron-down': '&#x20;',
		'fxi-chevron-left': '&#x21;',
		'fxi-chevron-right': '&#x22;',
		'fxi-chevron-up': '&#x23;',
		'fxi-clock': '&#x24;',
		'fxi-cog': '&#x25;',
		'fxi-css': '&#x26;',
		'fxi-facebook': '&#x27;',
		'fxi-facebook-circle': '&#x28;',
		'fxi-facebook-f': '&#x29;',
		'fxi-github': '&#x30;',
		'fxi-globe': '&#x31;',
		'fxi-globe-pointer': '&#x32;',
		'fxi-html': '&#x33;',
		'fxi-jquery': '&#x34;',
		'fxi-js': '&#x35;',
		'fxi-lightbulb': '&#x36;',
		'fxi-lightbulb_alt': '&#x37;',
		'fxi-lightbulb-on': '&#x38;',
		'fxi-linkedin': '&#x39;',
		'fxi-linkedin-alt': '&#x40;',
		'fxi-mobile': '&#x41;',
		'fxi-monitor': '&#x42;',
		'fxi-moon': '&#x43;',
		'fxi-moon_alt': '&#x44;',
		'fxi-nodejs': '&#x45;',
		'fxi-sass': '&#x46;',
		'fxi-sort-down': '&#x47;',
		'fxi-sort-left': '&#x48;',
		'fxi-sort-right': '&#x49;',
		'fxi-sort-up': '&#x50;',
		'fxi-sun': '&#x51;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/fxi-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
