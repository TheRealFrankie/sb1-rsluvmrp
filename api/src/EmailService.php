<?php
namespace PixelKraftwerk;

class EmailService {
    private $config;

    public function __construct(array $config) {
        $this->config = $config;
    }

    public function sendContactEmail(array $data): bool {
        $to = $this->config['email']['to'];
        $subject = 'Neue Kontaktanfrage von ' . htmlspecialchars($data['name']);
        
        $htmlMessage = $this->createHtmlMessage($data);
        $headers = $this->createHeaders($data['email']);

        return mail($to, $subject, $htmlMessage, implode("\r\n", $headers));
    }

    private function createHtmlMessage(array $data): string {
        $message = "<html><body>";
        $message .= "<h2>Neue Kontaktanfrage</h2>";
        $message .= "<p><strong>Name:</strong> " . htmlspecialchars($data['name']) . "</p>";
        $message .= "<p><strong>E-Mail:</strong> " . htmlspecialchars($data['email']) . "</p>";
        $message .= "<p><strong>Nachricht:</strong><br>" . nl2br(htmlspecialchars($data['message'])) . "</p>";
        $message .= "</body></html>";

        return $message;
    }

    private function createHeaders(string $replyTo): array {
        return [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=' . $this->config['email']['charset'],
            'From: ' . $this->config['email']['from'],
            'Reply-To: ' . $replyTo,
            'X-Mailer: PHP/' . phpversion()
        ];
    }
}