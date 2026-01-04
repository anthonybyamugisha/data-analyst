# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your email
5. Note the **Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New message from {{from_name}} - {{subject}}

**Body:**
```
You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent through your portfolio contact form.
```

4. Save the template and note the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Update Contact.jsx
Replace these values in `/src/pages/Contact.jsx`:

```javascript
const serviceId = 'your_service_id'      // Replace with your Service ID
const templateId = 'your_template_id'    // Replace with your Template ID  
const publicKey = 'your_public_key'      // Replace with your Public Key
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email for the message

## Security Notes
- EmailJS free plan allows 200 emails/month
- No backend server required
- Your email credentials are secure with EmailJS
- Consider upgrading for higher volume usage

## Troubleshooting
- Make sure all IDs are correct
- Check EmailJS dashboard for delivery status
- Verify your email service is properly connected
- Check browser console for any error messages

Your contact form is now ready to send emails directly to: byamugishanthony@gmail.com