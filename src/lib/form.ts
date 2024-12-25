import { WEBHOOK_CONFIG } from '@/config/webhook';
import type { ContactFormData } from './schemas/contact-form';

export async function submitContactForm(data: ContactFormData): Promise<boolean> {
  try {
    const response = await fetch(WEBHOOK_CONFIG.url, {
      method: 'POST',
      headers: WEBHOOK_CONFIG.headers,
      body: JSON.stringify(data)
    });

    return response.ok;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
}