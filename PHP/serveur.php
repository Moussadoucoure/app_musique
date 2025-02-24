<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

$inputJSON = file_get_contents('php://input');
$data = json_decode($inputJSON, true);

if (isset($data['nom'])) {
    $nom = htmlspecialchars($data['nom']);
    $album = htmlspecialchars($data['album'] ?? '');
    $auteur = htmlspecialchars($data['auteur'] ?? '');
    $duree = htmlspecialchars($data['duree'] ?? '');
    $type = htmlspecialchars($data['type'] ?? '');

    echo json_encode([
        "message" => "Données reçues avec succès",
        "nom" => $nom,
        "album" => $album,
        "auteur" => $auteur,
        "duree" => $duree,
        "type" => $type
    ]);
} else {
    echo json_encode(["message" => "Données manquantes"]);
}
?>
