<div class="box-wrapper">
	<div class="box-content">
		<div class="proprofs-logo">
			<img src="<?php echo plugins_url('proprofs-chat').'/images/ppct-chat.png'; ?>" alt="ProProfs Chat" itemprop="image">
		</div>
		<?php if( get_option('ppct_register_site') != "" )
		{
		?>
		<div class="form-log" id="panel-form">Loading...</div>	
		<?php }else { ?>
		<div class="form-log" id="login-form">Loading ...</div>
		<?php } ?>
	</div>	
</div>	
<?php    


?>
