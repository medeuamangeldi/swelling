#!/bin/bash

# Test the contact form API with customer confirmation email
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Medeu Amangeldi",
    "email": "medcod49@gmail.com",
    "phone": "123-456-7890",
    "message": "This is a test message for the welding service inquiry. I would like to get a quote for a custom metal fabrication project."
  }'
