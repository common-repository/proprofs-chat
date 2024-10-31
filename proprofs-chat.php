<?php
ini_set('display_errors','Off');
ini_set('error_reporting', E_ALL );
define('WP_DEBUG', false);
define('WP_DEBUG_DISPLAY', false);
if (!defined("WP_DEBUG_DISPLAY")) {
    define("WP_DEBUG_DISPLAY", false);
}
if (!defined("WP_DEBUG")) {
    define("WP_DEBUG", false);
}
/**
 * Plugin Name: ProProfs Chat
 * Plugin URI: https://www.proprofschat.com/
 * Description: Proprofs Chat plugin for WordPress is a live chat plugin that one can use to add customer support to their website. This is the best live chat software which helps you to connect with website visitors and existing customers. With our live chat plugin for WP, we not only help you increase your leads but also boost customer delight.
 * Version: 2.0.0
 * Author: ProProfs
 * Author URI: https://www.proprofschat.com/
 * @package ProProfs Chat
 * @category Core
 * @author ProProfs Chat
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }// Exit if accessed directly. } 

class ProprofsChat
{
	private $version = '2.0.0';
	
	/**
	 * ProProfs Chat Constructor.
	 */
	public function __construct() {
		$this->ppct_define_constants();
		$this->ppct_init_hooks();
		if (isset($_GET['page']) && $_GET['page'] === 'ppct_settings'){
			add_action('admin_enqueue_scripts', array($this, 'ppct_load_style'));
			add_action('admin_footer', array($this, 'ppct_load_inline_script'));
			add_action( 'wp_enqueue_scripts', function () { wp_enqueue_script( 'jquery' ); } );
		}
		if (isset($_GET['page']) && $_GET['page'] === 'theme_settings'){
			//add_action('admin_enqueue_scripts', array($this, 'theme_setting'));
			//add_action('admin_footer', array($this, 'theme_load_inline_script'));
			//add_action( 'wp_enqueue_scripts', function () { wp_enqueue_script( 'jquery' ); } );
			//add_action('admin_menu', array($this, 'remove_admin_sub_menu_items'));
		}
		if (isset($_GET['page']) && $_GET['page'] === 'pre_chat_settings'){
			//add_action('admin_enqueue_scripts', array($this, 'theme_setting'));
			//add_action('admin_footer', array($this, 'theme_load_inline_script'));
			add_action( 'wp_enqueue_scripts', function () { wp_enqueue_script( 'jquery' ); } );
			//add_action('admin_menu', array($this, 'remove_admin_sub_menu_items'));
		}
	}
	//~ public function remove_admin_sub_menu_items() {        
		
    //~ remove_submenu_page( 'ppct_settings', 'theme_settings'); 

	//~ }
	private function ppct_define_constants()
	{
		define ('PPCT_PLUGIN_DIR', str_replace('\\', '/', plugin_dir_path( __FILE__ )));
	}
	
	private function ppct_init_hooks()
	{
		//require_once('L2Swidget.php');
		add_action ('admin_menu', array($this,'ppct_admin_menu'));
		add_action('get_footer', array($this,'ppct_active_chat'));
	}
	
	public function ppct_admin_menu()
	{
		global $wp_registered_sidebars;		
		add_menu_page ('ProProfs Chat settings', 'ProProfs Chat', 'administrator', 'ppct_settings', array($this,'ppct_settings'), plugins_url('proprofs-chat').'/images/ppct-icon.png');
		if(!$_COOKIE["site_id"]==""){
			add_submenu_page ('ppct_settings', 'Theme Settings', 'Theme', 'administrator','theme_settings',array($this,'theme_setting'),'');
			add_submenu_page ('ppct_settings', 'Pre Chat', 'Pre Chat', 'administrator','pre_chat',array($this,'pre_chat'),'');
			add_submenu_page ('ppct_settings', 'Post Chat', 'Post Chat', 'administrator','post_chat',array($this,'post_chat'),'');
			add_submenu_page ('ppct_settings', 'Offline Message', 'Offline Message', 'administrator','offline_chat',array($this,'offline_chat'),'');
		}
		$plugin = plugin_basename(__FILE__);
		add_filter( 'plugin_action_links_'.$plugin, array($this,'ppct_settings_link'));
	}
	
	public function ppct_settings_link( $links )
	{
		$settings_link = sprintf( '<a href="admin.php?page=ppct_settings">%s</a>', __('Settings'));
		array_unshift ($links, $settings_link); 
		return $links;
	}
	
	public function ppct_settings()
	{
		require_once ( PPCT_PLUGIN_DIR . 'settings.php' );
		ppct_chat_settings();
	}
	public function theme_setting()
	{
		echo '<link rel="stylesheet" href="' . plugins_url( 'css/theme.css', __FILE__ ) . '" > ';
		echo '<link rel="stylesheet" href="' . plugins_url( 'css/themes.css', __FILE__ ) . '" > ';
		echo '<link rel="stylesheet" href="' . plugins_url( 'css/bootstrap.min.css', __FILE__ ) . '" > ';
		echo '<link rel="stylesheet" href="' . plugins_url( 'css/ace.min.css', __FILE__ ) . '" > ';
		wp_enqueue_script('ppct-js-theme',  plugins_url('proprofs-chat').'/js/theme.js');
		require_once ( PPCT_PLUGIN_DIR . 'settings.php' );
		theme_chat_settings();
	}

	public function pre_chat()
	{
		echo '<link rel="stylesheet" href="' . plugins_url( 'css/theme.css', __FILE__ ) . '" > ';
		echo '<link rel="stylesheet" href="' . plugins_url( 'css/themes.css', __FILE__ ) . '" > ';
		echo '<link rel="stylesheet" href="' . plugins_url( 'css/bootstrap.min.css', __FILE__ ) . '" > ';
		echo '<link rel="stylesheet" href="' . plugins_url( 'css/ace.min.css', __FILE__ ) . '" > ';
		wp_enqueue_script('ppct-js-theme',  plugins_url('proprofs-chat').'/js/theme.js');
		require_once ( PPCT_PLUGIN_DIR . 'settings.php' );
		pre_chat_settings();
	}

	public function post_chat()
	{
		echo '<link rel="stylesheet" href="' . plugins_url( 'css/theme.css', __FILE__ ) . '" > ';
		echo '<link rel="stylesheet" href="' . plugins_url( 'css/themes.css', __FILE__ ) . '" > ';
		echo '<link rel="stylesheet" href="' . plugins_url( 'css/bootstrap.min.css', __FILE__ ) . '" > ';
		echo '<link rel="stylesheet" href="' . plugins_url( 'css/ace.min.css', __FILE__ ) . '" > ';
		wp_enqueue_script('ppct-js-theme',  plugins_url('proprofs-chat').'/js/theme.js');
		require_once ( PPCT_PLUGIN_DIR . 'settings.php' );
		post_chat_settings();
	}

	public function offline_chat()
	{
		echo '<link rel="stylesheet" href="' . plugins_url( 'css/theme.css', __FILE__ ) . '" > ';
		echo '<link rel="stylesheet" href="' . plugins_url( 'css/themes.css', __FILE__ ) . '" > ';
		echo '<link rel="stylesheet" href="' . plugins_url( 'css/bootstrap.min.css', __FILE__ ) . '" > ';
		echo '<link rel="stylesheet" href="' . plugins_url( 'css/ace.min.css', __FILE__ ) . '" > ';
		wp_enqueue_script('ppct-js-theme',  plugins_url('proprofs-chat').'/js/theme.js');
		require_once ( PPCT_PLUGIN_DIR . 'settings.php' );
		offline_chat_settings();
	}
	
	public function ppct_get_chat_code()
	{
		$this->ppct_chatcode('PPCT_ChatCode');
	}
	
	private function ppct_chatcode($class)
	{
		if (class_exists($class) == false)
		{
			$path = dirname(__FILE__).'/'.$class.'.class.php';
			if (file_exists($path) !== true)
			{
				return false;
			}
			require_once($path);
		}
		$c = new $class;
		$c->ppctcode_render_code();
	}
	
	public function ppct_active_chat()
	{
		if ( (get_option( 'ppct_chat_active' ) != "") && (get_option('ppct_chat_active') == 1) ) 
		{
			return true;
		}
		return false;
	}
	
	public function ppct_load_style()
	{


		echo '<link rel="stylesheet" href="' . plugins_url( 'css/ppchat-login.css', __FILE__ ) . '" > ';
		wp_enqueue_style('ppct-font-family', 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700', false, $this->version);
		wp_enqueue_script('ppct-js-api',  plugins_url('proprofs-chat').'/js/wp-login-sdk.js','','6.5',true);
		wp_enqueue_script('ppct-js-check', plugins_url('proprofs-chat').'/js/index.js', '','', true);
	}

	public function ppct_load_inline_script(){
		$chat_nonce_check = wp_create_nonce( 'ppct-security' );	
		$chat_nonce_check_disconnect = wp_create_nonce( 'ppct-security-disconnect' );	
		$ppct_inline_js = "var ppct_nounce = '".$chat_nonce_check."'; var ppct_nounce_disconnect = '".$chat_nonce_check_disconnect."';";
		$ppct_inline_js .= 'PPChat.init({email:"'.get_option('ppct_reg_email').'",site_id:"'.wp_nonce_url( get_option('ppct_register_site'), 'ppct_register_site', 'my_nonce' ).'",private_key : "'.get_option('ppct_private_key').'"})';
		wp_add_inline_script('ppct-js-check', $ppct_inline_js);
	}
}

$pp = new ProprofsChat();

add_action( 'wp_footer', function(){ global $pp; $pp->ppct_get_chat_code(); });
