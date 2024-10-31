<?php
$site_id=get_option('ppct_register_site');

function cUrlGetData($url, $post_fields = null, $headers = null) {
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_ENCODING, "");
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
		if ($post_fields && !empty($post_fields)) {
			curl_setopt($ch, CURLOPT_POST, true);
			curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);
		}
		if ($headers && !empty($headers)) {
			curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
		}
		$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		$httpCodeInfo = curl_getinfo($ch);
		$result = curl_exec($ch);
		if (curl_errno($ch)) {
			$result = "Error:" . curl_error($ch);
		}
		if ($httpCode != 0){
			$result = "Error In Connection";
		}
		curl_close($ch);
		return $result;
	}
$fields_string = array (
					"site_id" => $site_id,
				 );
			$fields_string = json_encode($fields_string);
			$fields_string = base64_encode($fields_string);
			$fields_string = "data=".$fields_string;	
$url ="https://s01.live2support.com/dashboard/plugin_postchat.php?".$fields_string;
	$response = cUrlGetData($url,"","");
	print_r ($response);
?>
