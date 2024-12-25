import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { FormField } from './FormField';
import { FormSelect } from './FormSelect';
import { FormSuccess } from '@/components/ui/form-success';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/lib/form';
import { 
  contactFormSchema, 
  type ContactFormData,
  companyTypes,
  automationTypes 
} from '@/lib/schemas/contact-form';

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      companyType: '',
      automationType: '',
    },
  });

  // Handle hash navigation
  useEffect(() => {
    if (window.location.hash === '#contact' && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      formRef.current.classList.add('highlight-form');
      
      setTimeout(() => {
        formRef.current?.classList.remove('highlight-form');
      }, 1500);
    }
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setShowSuccess(false);
    
    try {
      const success = await submitContactForm(data);
      
      if (success) {
        setShowSuccess(true);
        toast({
          title: "Erfolgreich gesendet",
          description: "Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.",
        });
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Es tut uns leid, es gab einen Fehler. Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      ref={formRef}
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6 bg-black/50 border border-purple-500/20 rounded-lg p-8 transition-all duration-300"
      data-contact-form
      id="contact"
    >
      <FormSuccess show={showSuccess} />
      
      <FormField
        label="Name"
        error={form.formState.errors.name?.message}
        className="col-span-2"
      >
        <input
          {...form.register('name')}
          type="text"
          className="w-full bg-black/50 border border-purple-500/20 rounded px-4 py-2 text-white focus:outline-none focus:border-purple-500/40 transition-colors"
          placeholder="Geben Sie Ihren Namen ein"
        />
      </FormField>

      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          label="E-Mail"
          error={form.formState.errors.email?.message}
        >
          <input
            {...form.register('email')}
            type="email"
            className="w-full bg-black/50 border border-purple-500/20 rounded px-4 py-2 text-white focus:outline-none focus:border-purple-500/40 transition-colors"
            placeholder="Ihre E-Mail-Adresse"
          />
        </FormField>

        <FormField
          label="Telefon"
          error={form.formState.errors.phone?.message}
        >
          <input
            {...form.register('phone')}
            type="tel"
            className="w-full bg-black/50 border border-purple-500/20 rounded px-4 py-2 text-white focus:outline-none focus:border-purple-500/40 transition-colors"
            placeholder="+49123456789"
          />
        </FormField>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <FormSelect
          label="Unternehmenstyp"
          error={form.formState.errors.companyType?.message}
          {...form.register('companyType')}
        >
          <option value="">Unternehmenstyp wählen</option>
          {companyTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </FormSelect>

        <FormSelect
          label="Automatisierungsinteresse"
          error={form.formState.errors.automationType?.message}
          {...form.register('automationType')}
        >
          <option value="">Automatisierungstyp wählen</option>
          {automationTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </FormSelect>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-purple-500/20 hover:bg-purple-500/30 disabled:bg-purple-500/10 disabled:cursor-not-allowed text-purple-400 font-mono rounded px-6 py-3 transition-colors flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Verarbeitung...
          </>
        ) : (
          'Absenden'
        )}
      </button>
    </form>
  );
}