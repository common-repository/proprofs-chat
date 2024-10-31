<?php
function ppct_chat_settings()
{
	if ( isset( $_POST["action"] ) && $_POST["action"] == "ppct_register_site" &&  wp_verify_nonce( sanitize_text_field($_POST["ppct_security_register_site"])
		, 'ppct-security' ) && current_user_can('administrator') ) 
	{
		update_option( 'ppct_chat_active', 1 );	
		update_option( 'ppct_register_site', sanitize_text_field($_POST["site"]) );	
		update_option( 'ppct_reg_email', sanitize_email($_POST["reg_email"]) );	
		update_option( 'ppct_private_key', sanitize_text_field($_POST["private_key"]) );	
	}
	if(isset( $_POST["action"] ) && $_POST["action"] == "disconnect_site" &&  wp_verify_nonce( sanitize_text_field($_POST["ppct_security_disconnect_site"])
		, 'ppct-security-disconnect' ) && current_user_can('administrator'))
	{
		delete_option( 'ppct_chat_active' );	
		delete_option( 'ppct_register_site' );	
		delete_option( 'ppct_private_key' );	
	}	
	
	include_once( PPCT_PLUGIN_DIR.'templates/tpl-setting.php' );
	
}
	function theme_chat_settings(){
		$site_id=$_COOKIE["site_id"];
		//print($site_id);
		include_once( PPCT_PLUGIN_DIR.'templates/theme_setting.php' );
	}

	function pre_chat_settings(){
		$site_id=$_COOKIE["site_id"];
		//print($site_id);
		include_once( PPCT_PLUGIN_DIR.'templates/pre_chat_settings.php' );
	}

	function post_chat_settings(){
		$site_id=$_COOKIE["site_id"];
		//print($site_id);
		include_once( PPCT_PLUGIN_DIR.'templates/post_chat_settings.php' );
	}

	function offline_chat_settings(){
		$site_id=$_COOKIE["site_id"];
		//print($site_id);
		include_once( PPCT_PLUGIN_DIR.'templates/offline_settings.php' );
	}
?>



