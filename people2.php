<?php
$personer = array(
	array("epost" => "hjalle@punc.se", "name" => "Hjalmar Hägglund"),
	array("epost" => "bert@punc.se", "name" => "Bert Öhlund"),
	array("epost" => "mamma@punc.se", "name" => "Mamma Hägglund"),
	array("epost" => "pappa@punc.se", "name" => "Pappa Hägglund"),
	array("epost" => "syster@punc.se", "name"=> "Syster Hägglund")
	);

if(isset($_GET["namn"])) {
	$namn = $_GET["namn"];
	
	foreach($personer as $person) {
		
		$pos = strpos(strtolower($person["name"]), strtolower($namn));
		if($pos!==false) {
			echo $pos . ":";
			
			$result[] = $person;
		}
	}

}

// if(isset($_GET["epost"])) {
// 	$epost = $_GET["epost"];
// 	foreach($personer as $person) {
// 		if($epost == $person["epost"]) {
// 			$result = $person["name"];
// 		}
// 	}
// 
// }

echo json_encode($result);


?>