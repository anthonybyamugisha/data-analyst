# Formspree Setup Guide

## Getting Started with Formspree

Formspree is a simple form backend that makes it easy to handle form submissions without needing a backend server.

## Step 1: Create Formspree Account

1. Go to https://formspree.io/
2. Sign up for a free account (Hobby plan - 50 submissions/month)
3. Verify your email address

## Step 2: Create Your Form

1. In your Formspree dashboard, click "Create Form"
2. Choose the free Hobby plan
3. Note your form endpoint URL (looks like `https://formspree.io/f/xxxxxxx`)

## Step 3: Configure Your Form Endpoint

In `/src/pages/Contact.jsx`, replace `YOUR_FORM_ID` with your actual Formspree form ID:

```javascript
const formEndpoint = 'https://formspree.io/f/YOUR_ACTUAL_FORM_ID';
```

## Step 4: Set Up Email Notifications

1. In your Formspree dashboard, go to your form
2. Click on "Settings"
3. Under "Email Settings", add `byamugishanthony@gmail.com` as the recipient
4. Enable email notifications

## Step 5: Test Your Form

1. Start your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email for the test message

## Benefits of Formspree

- ✅ No backend server required
- ✅ Free tier available (50 submissions/month)
- ✅ Simple setup and integration
- ✅ Built-in spam protection
- ✅ Email notifications
- ✅ Dashboard for viewing submissions

## Troubleshooting

- Make sure your form endpoint URL is correct
- Check that email notifications are enabled in Formspree
- Verify the recipient email address is set correctly
- Check browser console for any JavaScript errors

## Security Notes

- Formspree handles all form data securely
- Your email credentials are never exposed
- Built-in spam protection helps filter unwanted submissions
- Consider upgrading to a paid plan for higher volume usage

Your contact form is now ready to send emails through Formspree!