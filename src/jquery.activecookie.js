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
			var ori=$.cookie($(this).attr(settings.cookieName));
			var cmp=$(this).attr(settings.attr);
			var grep=ori.match(new RegExp(cmp));
			if( grep ){
				$(this).addClass(settings.class);
			}
		});

		if( settings.callback ){
			settings.callback();
		}
	}
}(jQuery));
