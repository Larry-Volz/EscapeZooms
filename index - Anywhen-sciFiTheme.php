<?php
namespace think;

require __DIR__ . '/zoom/vendor/autoload.php';

$http = (new App())->http;

$response = $http->run();

$response->send();

$http->end($response);
error_reporting(E_ERROR | E_PARSE);
require './awesome-zoom/app.php';
return false;
// require '../vendor/autoload.php';
// var_dump(env());
// $zoom = new \MinaWilliam\Zoom\Zoom();
