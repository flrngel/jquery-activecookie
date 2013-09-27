(function($){
	if( !$.cookie ){
		console.error("activecookie needs jQuery Cookie Plugin(https://github.com/carhartl/jquery-cookie)");
		return;
	}

	$.fn.activecookie=function(options){
		var settings=$.extend({
			class: "active",
			cookieName: "data-cookie",
			attr: "data-when",
			callback: null
		},options);

		this.each(function(){
			var ori=$(this).attr(settings.attr);
			var cmp=$.cookie($(this).attr(settings.cookieName));
			if( ori == cmp ){
				$(this).addClass(settings.class);
			}
		});

		if( settings.callback ){
			settings.callback();
		}
	}
}(jQuery));
