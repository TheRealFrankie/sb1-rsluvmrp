<?php
namespace PixelKraftwerk;

class Validator {
    private $errors = [];
    private $config;

    public function __construct(array $config) {
        $this->config = $config;
    }

    public function validateContactForm(array $data): bool {
        // Validate name
        if (empty($data['name'])) {
            $this->errors['name'] = 'Name ist erforderlich';
        } elseif (strlen($data['name']) < $this->config['validation']['name']['min_length']) {
            $this->errors['name'] = 'Name muss mindestens ' . $this->config['validation']['name']['min_length'] . ' Zeichen lang sein';
        } elseif (strlen($data['name']) > $this->config['validation']['name']['max_length']) {
            $this->errors['name'] = 'Name darf maximal ' . $this->config['validation']['name']['max_length'] . ' Zeichen lang sein';
        }

        // Validate email
        if (empty($data['email'])) {
            $this->errors['email'] = 'E-Mail ist erforderlich';
        } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $this->errors['email'] = 'Ungültige E-Mail-Adresse';
        } elseif (strlen($data['email']) > $this->config['validation']['email']['max_length']) {
            $this->errors['email'] = 'E-Mail darf maximal ' . $this->config['validation']['email']['max_length'] . ' Zeichen lang sein';
        }

        // Validate message
        if (empty($data['message'])) {
            $this->errors['message'] = 'Nachricht ist erforderlich';
        } elseif (strlen($data['message']) < $this->config['validation']['message']['min_length']) {
            $this->errors['message'] = 'Nachricht muss mindestens ' . $this->config['validation']['message']['min_length'] . ' Zeichen lang sein';
        } elseif (strlen($data['message']) > $this->config['validation']['message']['max_length']) {
            $this->errors['message'] = 'Nachricht darf maximal ' . $this->config['validation']['message']['max_length'] . ' Zeichen lang sein';
        }

        return empty($this->errors);
    }

    public function getErrors(): array {
        return $this->errors;
    }
}