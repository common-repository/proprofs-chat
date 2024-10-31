<?php 
class PPCT_ChatCode{
	function ppctcode_render_code()
	{
		$site_id = get_option('ppct_register_site');
		if($site_id == "")
		{
			return false;
		}	
		
		
		$tracking = "<script type=\"text/javascript\">function ProProfs_Chat(){var pp=document.createElement('script'), ppr=document.getElementsByTagName('script')[0]; stid='$site_id';pp.type='text/javascript'; pp.async=true; pp.src=('https:' == document.location.protocol ? 'https://' : 'http://') + 's01.live2support.com/dashboardv2/chatwindow/'; ppr.parentNode.insertBefore(pp, ppr);}window.addEventListener(\"load\", ProProfs_Chat, false); </script>";
		
		echo $tracking;
	}
}
?>