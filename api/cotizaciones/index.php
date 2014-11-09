<?php 
	header("Content-Type:application/json");

	header('Access-Control-Allow-Origin: *'); 
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	echo file_get_contents('data.json');
?>