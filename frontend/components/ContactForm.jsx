'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const services = [
  'Comprehensive Eye Test',
  'Kids Eye Test',
  'Progressive Lenses Consultation',
  'Computer / Blue-cut Glasses',
  'Contact Lens Fitting',
  'Frame Styling',
  'Meta AI Glasses Demo',
  'Other',
];

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: services[0], date: '', message: '',
  });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const url = process.env.NEXT_PUBLIC_WEBHOOK_URL;
      if (!url) {
        setStatus('success');
        return;
      }
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'eylux-eye-care-website',
          submitted_at: new Date().toISOString(),
          ...form,
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: services[0], date: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please WhatsApp us instead.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl glass-strong p-12 text-center"
        data-testid="contact-success"
      >
        <CheckCircle2 className="h-12 w-12 mx-auto text-gold" strokeWidth={1.5} />
        <h3 className="mt-6 font-display text-3xl">Appointment requested.</h3>
        <p className="mt-4 text-ink/70 text-sm max-w-md mx-auto">
          Thank you — our team will reach out within minutes during business hours to confirm your slot.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-ghost mt-8" data-testid="contact-reset">
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" data-testid="contact-form">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full name" id="name" value={form.name} onChange={update('name')} required testid="contact-name" />
        <Field label="Phone" id="phone" type="tel" value={form.phone} onChange={update('phone')} required testid="contact-phone" />
      </div>
      <Field label="Email" id="email" type="email" value={form.email} onChange={update('email')} required testid="contact-email" />

      <div>
        <label htmlFor="service" className="block text-[11px] uppercase tracking-[0.3em] text-ink/55 mb-2">Interested in</label>
        <select
          id="service"
          value={form.service}
          onChange={update('service')}
          className="w-full bg-ink/[0.04] border border-ink/12 rounded-xl px-4 py-3.5 text-sm text-ink outline-none focus:border-gold/50 transition"
          data-testid="contact-service"
        >
          {services.map((s) => <option key={s} value={s} className="bg-bg-primary">{s}</option>)}
        </select>
      </div>

      <Field label="Preferred date" id="date" type="date" value={form.date} onChange={update('date')} testid="contact-date" />

      <div>
        <label htmlFor="message" className="block text-[11px] uppercase tracking-[0.3em] text-ink/55 mb-2">Anything we should know?</label>
        <textarea
          id="message"
          value={form.message}
          onChange={update('message')}
          rows={4}
          placeholder="E.g. I have an existing prescription, looking for progressive lenses…"
          className="w-full bg-ink/[0.04] border border-ink/12 rounded-xl px-4 py-3.5 text-sm text-ink placeholder:text-ink/45 outline-none focus:border-gold/50 transition resize-none"
          data-testid="contact-message"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-xs text-red-300 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3" data-testid="contact-error">
          <AlertCircle className="h-4 w-4" /> {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-gold w-full md:w-auto disabled:opacity-60"
        data-testid="contact-submit"
      >
        {status === 'loading' ? 'Sending…' : 'Request Appointment'} <Send className="h-4 w-4" />
      </button>
      <p className="text-[11px] text-ink/55">By submitting, you agree to be contacted by our team. We never share your details.</p>
    </form>
  );
}

function Field({ label, id, type = 'text', value, onChange, required, testid }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] uppercase tracking-[0.3em] text-ink/55 mb-2">{label}{required && <span className="text-gold"> *</span>}</label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full bg-ink/[0.04] border border-ink/12 rounded-xl px-4 py-3.5 text-sm text-ink placeholder:text-ink/45 outline-none focus:border-gold/50 transition"
        data-testid={testid}
      />
    </div>
  );
}
