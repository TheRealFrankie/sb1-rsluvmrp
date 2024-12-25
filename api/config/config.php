<?php
// Configuration settings
return [
    'email' => [
        'to' => 'kontakt@pixel-kraftwerk.com',
        'from' => 'noreply@pixel-kraftwerk.com',
        'charset' => 'UTF-8'
    ],
    'validation' => [
        'name' => [
            'min_length' => 2,
            'max_length' => 100
        ],
        'email' => [
            'max_length' => 254
        ],
        'message' => [
            'min_length' => 10,
            'max_length' => 3000
        ]
    ]
];