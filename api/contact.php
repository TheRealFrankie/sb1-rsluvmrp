<?php
require_once __DIR__ . '/vendor/autoload.php';

use PixelKraftwerk\Validator;
use PixelKraftwerk\EmailService;
use PixelKraftwerk\Response;

// Load configuration
$config = require __DIR__ . '/config/config.php';

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    Response::error('Method not allowed', 405);
}

try {
    // Sanitize input data
    $data = [
        'name' => filter_var($_POST['name'] ?? '', FILTER_SANITIZE_STRING),
        'email' => filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL),
        'message' => filter_var($_POST['message'] ?? '', FILTER_SANITIZE_STRING)
    ];

    // Validate form data
    $validator = new Validator($config);
    if (!$validator->validateContactForm($data)) {
        Response::error($validator->getErrors());
    }

    // Send email
    $emailService = new EmailService($config);
    if (!$emailService->sendContactEmail($data)) {
        throw new Exception('Failed to send email');
    }

    Response::success('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');

} catch (Exception $e) {
    Response::error('Es tut uns leid, es gab einen Fehler. Bitte versuchen Sie es später erneut.', 500);
}