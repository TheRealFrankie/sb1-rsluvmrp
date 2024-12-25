import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name muss mindestens 2 Zeichen lang sein')
    .max(100, 'Name darf maximal 100 Zeichen lang sein'),
  email: z.string()
    .email('Bitte geben Sie eine gültige E-Mail-Adresse ein')
    .max(254, 'E-Mail darf maximal 254 Zeichen lang sein'),
  phone: z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, 'Bitte geben Sie eine gültige Telefonnummer ein'),
  companyType: z.string()
    .min(1, 'Bitte wählen Sie einen Unternehmenstyp'),
  automationType: z.string()
    .min(1, 'Bitte wählen Sie einen Automatisierungstyp'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const companyTypes = [
  'E-Commerce',
  'SaaS',
  'Gesundheitswesen',
  'Finanzen',
  'Produktion',
  'Einzelhandel',
  'Sonstiges',
] as const;

export const automationTypes = [
  'Kundenservice',
  'CRM-Integration',
  'Social Media',
  'Terminplanung',
  'Individuelle Lösung',
] as const;