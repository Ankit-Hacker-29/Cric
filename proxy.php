<?php
// Original stream URL
$url = "https://stream.crichd.sc/update/star1hi.php";

// Initialize cURL
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_HEADER, false);

// Fetch and output content
echo curl_exec($ch);
curl_close($ch);
?>