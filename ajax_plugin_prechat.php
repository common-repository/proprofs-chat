<?php	
	header('content-type: application/json; charset=utf-8');
	header("access-control-allow-origin: *");

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
	
	
	$action=$_POST['action'];
	$page = "prechat_plugin_edit_form.php?";
	if($action == "offline_add_field"){
		$accountID = $_POST['AccountID'];
		$fieldType = $_POST['field_type'];
		$field_name = $_POST['field_name'];
		$isReq = $_POST['isReq'];
		$jsmsg = $_POST['jsmsg'];
		$lang = $_POST['lang'];
		$fleg = $_POST['fleg'];
		$section = $_POST['section'];
		$site_id=$_POST['siteid'];
		$drop_lists = $_POST['drop_lists'];

		$fields_string = array (
		    "accountID" => $accountID,
		    "fieldType" => $fieldType,
		    "field_name" => $field_name,
			'isReq' => $isReq,
			"jsmsg" => $jsmsg,
		    "lang" => $lang,
		    "fleg" => $fleg,
			'section' => $section,
			"action" => $action,
			"site_id" => $site_id,
			"drop_lists" => $drop_lists
		);
	}elseif($action == "edit_offline_form_field"){
		$langid=$_POST['langid'];
		$site_id=$_POST['siteid'];
		$tableName= $_POST['tableName'];
		$id=$_POST['id'];

		$fields_string = array (
		    "id" => $id,
		    "action" => $action,
		    "langid" => $langid,
			'site_id' => $site_id,
			"tableName" => $tableName
		);
	}elseif($action == "update_offline_form_field"){
			$fleg = $_POST['fleg'];
            $type = $_POST['field_type'];
            $name = $_POST['field_name'];
            $visible = $_POST['visible'];
			$tableName= $_POST['tableName'];
            $fieldid = $_POST['fieldid'];
            $lang = $_POST['lang'];
			$site_id=$_POST['siteid'];
			if(isset($_POST['isReq'])){
				$isReq = $_POST['isReq'];
			}else{
				$isReq = '';
			}
			if(isset($_POST['jsmsg'])){
				$jsmsg = $_POST['jsmsg'];
			}else{
				$jsmsg = '';
			}
			$section = $_POST['section'];
			$drop_lists = $_POST['drop_lists'];
			$page = "prechat_plugin_update_form.php?";

			$fields_string = array (
				"fleg" => $fleg,
				"action" => $action,
				"type" => $type,
				"name" => $name,
				'visible' => $visible,
				"fieldid" => $fieldid,
				"lang" => $lang,
				"section" => $section,
				"site_id" => $site_id,
				"isReq" => $isReq,
				"jsmsg" => $jsmsg,
				"tableName" => $tableName,
				"drop_lists" => $drop_lists
			);
	}elseif($action == "delete_offline_form_field"){
		$deletefield = $_POST['deletefield'];
		$section = $_POST['section'];
		$site_id=$_POST['siteid'];

		$fields_string = array (
			"deletefield" => $deletefield,
			"action" => $action,
			"section" => $section,
			"site_id" => $site_id,
		);
	}elseif($action == "prechat"){
		$site_id = $_POST['siteid'];
		$form = $_POST['form'];
		
		$fields_string = array (
			"site_id" => $site_id,
			"form" => $form,
		);
		
		$page = "refresh_plugin_prechat.php?";
	}elseif($action == "AccountsPrechat"){
		$site_id=$_POST['siteid'];
		$account_id = $_POST['accountID'];
		$Flag 		=  $_POST['flag'];
		$LangId     =  $_POST['LangId'];

		$fields_string = array (
			"account_id" => $account_id,
			"action" => $action,
			"Flag" => $Flag,
			"LangId" => $LangId,
			"site_id" => $site_id,
		);
	}elseif($action == "enb_field"){
		$site_id=$_POST['siteid'];
		$field_id = $_POST['field_id'];
		$visible =  $_POST['visible'];
		$table   =  $_POST['table'];

		$fields_string = array (
			"field_id" => $field_id,
			"action" => $action,
			"visible" => $visible,
			"table" => $table,
			"site_id" => $site_id,
		);
	}elseif($action == "req_field"){
		$site_id=$_POST['siteid'];
		$id = $_POST['id'];
		$table   =  $_POST['table'];
		$required = $_POST['required'];

		$fields_string = array (
			"id" => $id,
			"required" => $required,
			"action" => $action,
			"table" => $table,
			"site_id" => $site_id,
		);
	}elseif($action == "enable_form"){
		$site_id=$_POST['siteid'];
		$prechatn = $_POST['prechatn'];
		$lang = $_POST['lang'];
		$AccountId = $_POST['AccountId'];
		$pageid = $_POST['page'];
		$AccountVersion = $_POST['accountVersion'];

		$fields_string = array (
			"prechatn" => $prechatn,
			"action" => $action,
			"lang" => $lang,
			"site_id" => $site_id,
			"AccountId" => $AccountId,
			"page" => $pageid,
			"AccountVersion" => $AccountVersion
		);
	}
	
    $fields_string = json_encode($fields_string);
    $fields_string = base64_encode($fields_string);
    $fields_string = "data=".$fields_string;
    $url = "https://s01.live2support.com/dashboard/$page".$fields_string;
    
    $response = cUrlGetData($url,"","");
    print_r($response);
?>
