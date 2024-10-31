var l2d = document,
homeobj = {
	gc: function(e) {
		return l2d.cookie.length > 0 && (begin = l2d.cookie.indexOf(e + "="), -1 != begin) ? (begin += e.length + 1, end = l2d.cookie.indexOf(";", begin), -1 == end && (end = l2d.cookie.length), unescape(l2d.cookie.substring(begin, end))) : null
	},
	get_siteid: function() {
		return siteid = homeobj.gc("sid")
	}
},
siteid = homeobj.get_siteid();
function setContrast(e) {
    var o = hexToRgb(e);
    return Math.round((299 * parseInt(o[0]) + 587 * parseInt(o[1]) + 114 * parseInt(o[2])) / 1e3) > 180 ? "#4d4d4d" : "#ffffff"
}
function hexToRgb(e) {
    e = e.replace(/[^0-9A-F]/gi, "");
    var o = parseInt(e, 16);
    return [o >> 16 & 255, o >> 8 & 255, 255 & o]
}
function colorValue(e) {
	jQuery("#transparent_window").val('0');
    var o = "";
    1 == e ? o = "#3c8ac9" : 2 == e ? o = "#db4d4b" : 3 == e ? o = "#333232" : 4 == e ? o = "#5c5c5c" : 6 == e ? o = "#5c5c5c" : 5 == e && (o = "#456979"), jQuery("#visitor_bg_color").val(increase_brightness(o, 75)), jQuery("#barTextColor").val(setContrast(o)), jQuery("#barColor").val(o), jQuery("#visitorNameColor").val("#4d4d4d"), jQuery("#vtext_color .minicolors-swatch-color").css("background-color", "#4d4d4d"), jQuery("#own_color .minicolors-swatch-color,#chat-icon .chat_bar,.chat_icon").css("background-color", o);
	//jQuery("#chat-window-preview").css("background","rgba(255,255,255,1)");
	//jQuery("#iframeId").contents().find(".fimg").css("background","#f5f5f5");
	jQuery("#iframeId").contents().find(".fimg").css("border-top","#dcdcdc 0px solid");
	jQuery("#iframeId").css("box-shadow"," 0 5px 16px rgba(0,0,0,.2)");
	//jQuery("#iframeId").contents().find(".text-wrapper").css("background","#ebebeb");
	jQuery("#iframeId").contents().find("#left_arrow").css("border-right-color","#ebebeb");
	if(e == 6)
	{
		jQuery("#iframeId").contents().find("#left_arrow").css('border-right','8px solid #a9abaa');
		jQuery("#iframeId").contents().find("#right_arrow").css('border-left','8px solid #5c5c5c');
		jQuery("#iframeId").contents().find("#right_arrow").css('border-right','0');
		jQuery("#iframeId").contents().find(".text-wrapper .chat_admin,.text-wrapper .chat_client").css('color','#fff');
		jQuery('#OperatorNameColor').val('#ffffff');
		jQuery('#visitorNameColor').val('#ffffff');
		jQuery('#visitorNameColor').next().find('.minicolors-swatch-color').css("background-color", '#ffffff');
		jQuery('#OperatorNameColor').next().find('.minicolors-swatch-color').css("background-color", '#ffffff');
		
		jQuery("#iframeId").contents().find(".message-wrapper.chat_admin_tr .text-wrapper").css('background','#a9abaa');
		jQuery("#iframeId").contents().find("body").addClass('transparent-background');
		jQuery("#iframeId").addClass('transparent-background');
		jQuery("#iframeId").contents().find(".message-wrapper.chat_client_tr .text-wrapper").css("background", '#5c5c5c');
	}
	else
	{
		jQuery("#iframeId").contents().find(".text-wrapper .chat_admin").css('color',jQuery('#OperatorNameColor').val());
		jQuery("#iframeId").contents().find(".text-wrapper .chat_client").css('color',jQuery('#visitorNameColor').val());
		//jQuery("#iframeId").contents().find("#right_arrow").css('border-right','8px solid #ebebeb');
		jQuery("#iframeId").contents().find(".message-wrapper.chat_admin_tr .text-wrapper").css('background','#ebebeb');
		jQuery("#iframeId").contents().find("body").removeClass('transparent-background');
		jQuery("#iframeId").removeClass('transparent-background');
		jQuery("#iframeId").contents().find(".message-wrapper.chat_client_tr .text-wrapper").css("background", increase_brightness(o, 75));
		jQuery("#iframeId").contents().find("#right_arrow").css("border-left-color", increase_brightness(o, 75))
	}		
    for (var a = jQuery("#save_color").val(), t = a; t < 15; t++) {
        if (t == a) {
            for (var i = 0; i <= a; i++) jQuery("#bubble" + i + " .border_blue").css("border-bottom", "0px solid #ddd"), jQuery("#bubble" + i + " .bubble" + i).css("background", o);
            jQuery("#bubble" + t + " .border_blue").css("border-bottom", "4px solid " + o)
        } else jQuery("#bubble" + t + " .border_blue").css("border-bottom", "0px solid #ddd");
        jQuery("#bubble" + t + " .bubble" + t).css("background", o)
    }
    jQuery("#headstatus,.bubble9 span,.bubble4 span,#chat-icon .chat_icon span").css("color", setContrast(o)), jQuery("#iframeId").contents().find("#chat-window-header").css("background", o), jQuery("#iframeId").contents().find("#headstatus,#arrow_top").css("color", setContrast(o))
}
function increase_brightness(e, o) {
    3 == (e = e.replace(/^\s*#|\s*jQuery/g, "")).length && (e = e.replace(/(.)/g, "jQuery1jQuery1"));
    var a = parseInt(e.substr(0, 2), 16),
        t = parseInt(e.substr(2, 2), 16),
        i = parseInt(e.substr(4, 2), 16);
    return "#" + (0 | 256 + a + (256 - a) * o / 100).toString(16).substr(1) + (0 | 256 + t + (256 - t) * o / 100).toString(16).substr(1) + (0 | 256 + i + (256 - i) * o / 100).toString(16).substr(1)
}

function showalert(e) {
    jQuery("#imgModal").modal({
        backdrop: !0
    }), jQuery("#alertMsg-pop-new p").html(e)
}
function initialize_theme_page() {
    jQuery("#option12").click(function() {
		jQuery("#svg_arrow").css("display","block");
        changeImage("3"), jQuery("#iframeId").contents().find("#chat-window-header .l2s-logo").hide(),jQuery("#iframeId").contents().find("#headstatus").css("padding","12px 12px 0"), jQuery("#chat_bubble_options,#chat-icon .chat_icon").show(), jQuery("#chat-icon .chat_bar").hide(), jQuery("#option12").addClass("active"), jQuery("#option21").removeClass("active"),jQuery("#bstyle").val(1)
    }), jQuery("#option21").click(function() {
		jQuery("#svg_arrow").css("display","none");
        changeImage("1"), jQuery("#iframeId").contents().find("#chat-window-header .l2s-logo").show(), jQuery("#chat_bubble_options,#chat-icon .chat_icon").hide(), jQuery("#chat-icon .chat_bar").show(), jQuery("#option21").addClass("active"), jQuery("#option12").removeClass("active"),jQuery("#iframeId").contents().find("#headstatus").css("padding","12px 0 0 0"),jQuery("#bstyle").val(2)
    }), jQuery("#advanced").click(function() {
		jQuery("#learn_more").show();
		jQuery("#custom-css").hide(),
		jQuery("#css-angle").html('<i class="fa fa-angle-down"></i>'),
        jQuery("#minimized-window").is(":visible") ? (
		jQuery("#minimized-window").hide(), jQuery("#chat-icon").show(), 
		jQuery("#upper_section,#main_heading").slideDown(150), 
		jQuery("#minimized-window").hide(), 
		jQuery("#css-angle2").html('<i class="icon-plus"></i>Advanced'),
		jQuery('.append-head').remove()
		) : (
		jQuery("#upper_section,#main_heading").slideUp(150), 
		jQuery("#minimized-window").show(), jQuery("#chat-icon").hide(), 
		jQuery("#css-angle2").html('<i class="fa fa-long-arrow-left"></i>Back'),
		jQuery(".form-group.tp.size").css("margin-top", "7px"),jQuery("#learn_more").hide(),
		jQuery(this).after('<h3 id="main_heading" class="append-head">Advanced</h3>'))
    }), jQuery("#customize_css").click(function(e) {
        jQuery("#custom-css").toggle(function() {
            jQuery("#custom-css").is(":visible") ? (jQuery("#custom-css").append('<input type="hidden" name="csscheck" value="Y" id="csscheck">'), jQuery("#css-angle").html('<i class="fa fa-angle-up"></i>'), jQuery(".page-contents").animate({
                scrollTop: 550
            })) : (jQuery("#custom-css #csscheck").remove(), jQuery("#css-angle").html('<i class="fa fa-angle-down"></i>'), jQuery(".page-contents").animate({
                scrollDown: 750
            }))
        })
    }) 
	jQuery(".page-contents").click(function(){	
		if(jQuery("#minimized-window").css("display") == "block" && jQuery("#custom-css").css("display") == "block"){	
			jQuery.ajax({
				type: "POST",
				url: "ajax/ajax_front.php",
				data: "clcss="+jQuery("textarea[name='clcss']").val()+"&action=save_theme_css&csscheck=Y",
				success: function(a){					
					jQuery('#iframeId').attr("src", jQuery('#iframeId').attr("src"));
				}
			});
		}
	});
}
function isValidEmailAddress(e) {
    return new RegExp(/^((([a-z]|\d|[!#\jQuery%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\jQuery%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?jQuery/i).test(e)
}
function changePosition1(e) {
    jQuery("#save_position").val(e), "1" == e ? (jQuery("#left_pos .border_blue").css("border-bottom", "4px solid #3c8ac9"),jQuery("#position").val(1), jQuery("#right_pos .border_blue").css("border-bottom", "")) : (jQuery("#right_pos .border_blue").css("border-bottom", "4px solid #3c8ac9"),jQuery("#position").val(2), jQuery("#left_pos .border_blue").css("border-bottom", ""))
}
function save(e, o) {
	var logo_val = jQuery("#iframeId").contents().find("#logo_url").attr('src');
	
	if(logo_val=="" || logo_val=="/uploads/logo/images/default_logo.png"){
		jQuery("#iframeId").contents().find("#main_logo").css('display',"none");
		jQuery("#iframeId").contents().find("#logo_url").attr('src','/uploads/logo/images/default_logo.png');
	}
	else{
		jQuery("#iframeId").contents().find("#main_logo").css('display',"block");
	}
	jQuery("#" + o + " #updstr").text('Saved');
    "save_theme" == e && (jQuery("#" + o + " #site-loader").show(), jQuery("#" + o + " #updstr").hide()), jQuery.ajax({
        type: "POST",
        url: "ajax/ajax_front.php",
        data: jQuery("#" + o).serialize() + "&action=" + e + "&chat_window=" + jQuery("#save_color").val() + "&cwindow_pos=" + jQuery("#save_position").val() + "&cwin_size=" + jQuery("#cwin_size").val()+ jQuery("#avatar_image").val()+ jQuery("#profile_name").val(),
        success: function(a) {
            var t = jQuery.parseJSON(a);
            "save_theme" == e ? (jQuery("#" + o + " #site-loader").hide(), 1 == t.status ? (jQuery("#" + o + " #updstr").show().html(t.message), jQuery("#" + o + " #updstr").delay(1e3).fadeOut("slow")) : jQuery("#" + o + " #updstr").show().html("Please try again.")) : (1 == t.status ? jQuery("#updstr").show().html("Saved").delay(1e3).fadeOut("slow") : jQuery("#updstr").html("Please edit settings before saving"), jQuery("#site-loader").hide())
			//jQuery('#iframeId').attr("src", jQuery('#iframeId').attr("src"));
			jQuery(".popup-site-loader-new").css("visibility","hidden");
        }
    });
}
jQuery(document).ready(function(e) {
     initialize_checkbox_candy(), initialize_theme_page() 
}), jQuery(".confirm-btn").click(function() {
    jQuery("#imgModal").modal("hide")
});
function initialize_checkbox_candy() {
    jQuery('.candy input[type="checkbox"]').change(function() {
        1 == jQuery(this).prop("checked") ? jQuery(this).parent().children("a").css("background", "#3c8ac9") : jQuery(this).parent().children("a").css("background", "rgb(77, 77, 77)")
    })
}
function iframe_img(e) {
    "test" != e && jQuery("#iframeId").contents().find(".main_head_logo").css({
        "background-image": "url('" + e + "')"
    })
}
function remove_msg() {
    jQuery("#updstr").html("")
}
function removeImg() {
	jQuery(".popup-site-loader-new").css("visibility","visible");
    jQuery("#overlay_img").hide(), jQuery("#uploadfile1").val("images/2014/header.gif"), jQuery("#brows_button,#logo_text").show(), jQuery("#previewing1").attr("src", ""), jQuery("#iframeId").contents().find(".main_head_logo").css({
        "background-image": "url(/uploads/logo/images/default_logo.png)"
    }), jQuery("#delBox").modal("hide")
	jQuery("#iframeId").contents().find("#main_logo").css('display','none');
	jQuery("#iframeId").contents().find("#logo_url").attr('src','/uploads/logo/images/default_logo.png');
	jQuery("#logo_icons").css("display","none");
	jQuery("#uploadfile1").val('');
	savetheme();
} jQuery("#del_image").click(function() {
    jQuery("#delBox").modal({
        backdrop: !0
    })
}), jQuery(".cancel-btn").click(function() {
    jQuery("#delBox").modal("hide")
});


