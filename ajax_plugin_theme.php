<?php

	header('content-type: application/json; charset=utf-8');
	header("access-control-allow-origin: *");

	
	$BubbleStyle=$_POST['BubbleStyle'];
	$BubbleType=$_POST['BubbleType'];
	$color=$_POST['color'];
	$position=$_POST['position'];
	//$custom_bubble=$_POST['custom_bubble'];
	$size=$_POST['size'];
	$site_id=$_POST['site_id'];
	$group_id=$_POST['group_id'];
	$fields_string = array (
					"BubbleStyle" => $BubbleStyle,
					"BubbleType" => $BubbleType,
					"color" => $color,
					"position" => $position,
					"size" => $size,
					"site_id" => $site_id,
					"group_id" => $group_id
				 );
			$fields_string = json_encode($fields_string);
			$fields_string = base64_encode($fields_string);
			$fields_string = "data=".$fields_string."&action=savetheme";
			$fields_string = "https://S01.live2support.com/dashboard/save_plugin_theme.php?".$fields_string;
			$ch = curl_init ();
			curl_setopt($ch, CURLOPT_URL, $fields_string);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($ch, CURLOPT_HEADER, 0);
			curl_setopt($ch, CURLOPT_CONNECTTIMEOUT,5);
			$result=curl_exec($ch);
			curl_close($ch);
print($result);
?>
