<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class customerController extends Controller
{
    public function getCustomers()
    {
        $client = new Client();

        try {
            // Data to send in POST request
            $postData = [
                'form_params' => [
                    'name' => 'John Doe',
                    'email' => 'johndoe@example.com',
                ],
            ];

            // Send a POST request
            $response = $client->request('GET', 'http://resume-api:3000/api/v1/customers');

            // Get the response body
            $body = $response->getBody();
            $content = json_decode($body->getContents());

            echo "<pre>"; print_r($content); die; 

            // Process the response content
            return response()->json($content);
        } catch (\Exception $e) {
            // Handle errors
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
