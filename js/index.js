document.addEventListener('DOMContentLoaded', function(){
    var pp_wpsecurity = document.querySelector('input[name="ppct_security_register_site"]');
	if (pp_wpsecurity) {
		pp_wpsecurity.value = window.ppct_nounce;
	}
	var pp_wpsecurity1 = document.querySelector('input[name="ppct_security_disconnect_site"]');
	if (pp_wpsecurity1) {
		pp_wpsecurity1.value = window.ppct_nounce_disconnect;
	}
});