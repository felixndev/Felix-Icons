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
		'fxi-apple': '&#x20;',
		'fxi-backward': '&#x21;',
		'fxi-block': '&#x22;',
		'fxi-check': '&#x23;',
		'fxi-chevron-down': '&#x24;',
		'fxi-chevron-left': '&#x25;',
		'fxi-chevron-right': '&#x26;',
		'fxi-chevron-up': '&#x27;',
		'fxi-clock': '&#x28;',
		'fxi-clock-alt': '&#x29;',
		'fxi-cog': '&#x30;',
		'fxi-credit-card': '&#x31;',
		'fxi-credit-card-alt': '&#x32;',
		'fxi-css': '&#x33;',
		'fxi-cursor': '&#x34;',
		'fxi-double-chevron-down': '&#x35;',
		'fxi-double-chevron-left': '&#x36;',
		'fxi-double-chevron-right': '&#x37;',
		'fxi-double-chevron-up': '&#x38;',
		'fxi-eye': '&#x39;',
		'fxi-facebook': '&#x40;',
		'fxi-facebook-circle': '&#x41;',
		'fxi-facebook-f': '&#x42;',
		'fxi-forward': '&#x43;',
		'fxi-github': '&#x44;',
		'fxi-globe': '&#x45;',
		'fxi-globe-pointer': '&#x46;',
		'fxi-gmail': '&#x47;',
		'fxi-html': '&#x48;',
		'fxi-illustrator': '&#x49;',
		'fxi-instagram': '&#x50;',
		'fxi-instagram-alt': '&#x51;',
		'fxi-jquery': '&#x52;',
		'fxi-js': '&#x53;',
		'fxi-lightbulb': '&#x54;',
		'fxi-lightbulb-alt': '&#x55;',
		'fxi-lightbulb-on': '&#x56;',
		'fxi-linkedin': '&#x57;',
		'fxi-linkedin-in': '&#x58;',
		'fxi-marker': '&#x59;',
		'fxi-marker-alt': '&#x60;',
		'fxi-menu': '&#x61;',
		'fxi-mobile': '&#x62;',
		'fxi-monitor': '&#x63;',
		'fxi-moon': '&#x64;',
		'fxi-moon-alt': '&#x65;',
		'fxi-nodejs': '&#x66;',
		'fxi-pause': '&#x67;',
		'fxi-play': '&#x68;',
		'fxi-sass': '&#x69;',
		'fxi-sort-down': '&#x70;',
		'fxi-sort-left': '&#x71;',
		'fxi-sort-right': '&#x72;',
		'fxi-sort-up': '&#x73;',
		'fxi-step-bacward': '&#x74;',
		'fxi-step-forward': '&#x75;',
		'fxi-sun': '&#x76;',
		'fxi-times': '&#x77;',
		'fxi-triple-chevron-down': '&#x78;',
		'fxi-triple-chevron-left': '&#x79;',
		'fxi-triple-chevron-right': '&#x80;',
		'fxi-triple-chevron-up': '&#x81;',
		'fxi-twitter': '&#x82;',
		'fxi-twitter-alt': '&#x83;',
		'fxi-user': '&#x84;',
		'fxi-user-check': '&#x85;',
		'fxi-visa': '&#x86;',
		'fxi-xbox': '&#x87;',
		'fxi-youtube': '&#x88;',
		'fxi-react': '&#x89;',
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
