<?php
namespace PixelKraftwerk;

class Response {
    public static function json($data, int $statusCode = 200): void {
        http_response_code($statusCode);
        header('Content-Type: application/json');
        echo json_encode($data);
        exit;
    }

    public static function error(string $message, int $statusCode = 400): void {
        self::json([
            'status' => 'error',
            'message' => $message
        ], $statusCode);
    }

    public static function success(string $message): void {
        self::json([
            'status' => 'success',
            'message' => $message
        ]);
    }
}