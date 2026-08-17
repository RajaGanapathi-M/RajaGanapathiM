import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Download, User, MessageSquare, FileText, XCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import useScrollReveal from '../hooks/useScrollReveal';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const { ref } = useScrollReveal();

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    else if (form.name.trim().length < 2) errs.name = 'Name must be at least 2 characters.';

    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address.';

    if (!form.subject.trim()) errs.subject = 'Subject is required.';
    else if (form.subject.trim().length < 3) errs.subject = 'Subject must be at least 3 characters.';

    if (!form.message.trim()) errs.message = 'Message is required.';
    else if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters.';

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(errs => ({ ...errs, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      // Template variables — must match your EmailJS template placeholders
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        reply_to: form.email,          // lets you reply directly to sender
        to_email: 'rajaganapathimaharajan@gmail.com',
        subject: form.subject,
        message: form.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' }); // Reset form on success
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 6000); // Hide status message after 6 seconds
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rajaganapathimaharajan@gmail.com',
      href: 'mailto:rajaganapathimaharajan@gmail.com',
      color: '#6366f1',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rajaganapathi-m',
      href: 'https://www.linkedin.com/in/rajaganapathi-m',
      color: '#0077b5',
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: 'github.com/RajaGanapathi-M',
      href: 'https://github.com/RajaGanapathi-M',
      color: '#94a3b8',
    },
  ];

  return (
    <section id="contact" className="section contact" ref={ref} aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">📬 Get In Touch</div>
          <h2 className="section-title" id="contact-heading">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            I'm open to internship opportunities, entry-level engineering roles, and innovative projects.
            Feel free to reach out!
          </p>
        </div>

        <div className="contact__grid">
          {/* Left: Contact Info */}
          <div className="contact__info reveal reveal-delay-1">
            <div className="contact__profile glass-card">
              <div className="contact__avatar">
                <img src="/Rg_Pic.png" alt="Profile" />
              </div>
              <h3>Raja Ganapathi M</h3>
              <p>AI &amp; Frontend Developer</p>
              <span className="contact__open">
                <span className="status-dot" /> Open to Opportunities
              </span>
            </div>

            <div className="contact__links">
              {contactInfo.map(item => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="contact__link glass-card"
                    target={item.href !== '/Rg Pic.png' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={`${item.label}: ${item.value}`}
                    onClick={e => {
                      if (item.href === '#') {
                        e.preventDefault();
                        alert(`${item.label} URL not configured yet. Please add your actual profile URL.`);
                      }
                    }}
                  >
                    <div className="contact__link-icon" style={{ background: `${item.color}15`, color: item.color }}>
                      <Icon size={18} />
                    </div>
                    <div className="contact__link-text">
                      <span className="contact__link-label">{item.label}</span>
                      <span className="contact__link-value">{item.value}</span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Download Resume */}
            <a
              href="public/Raja Ganapathi M_Resume.pdf"
              download="Raja_Ganapathi_M_Resume.pdf"
              className="btn btn-primary contact__resume-btn"
              aria-label="Download resume PDF"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Right: Contact Form */}
          <div className="contact__form-wrap reveal reveal-delay-2">
            <form
              className="contact__form glass-card"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              <h3 className="contact__form-title">Send a Message</h3>
              
              {/* Status Messages */}
              {status === 'success' && (
                <div className="contact__status contact__status--success" role="alert">
                  <CheckCircle size={18} />
                  <span>Your message has been sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="contact__status contact__status--error" role="alert" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  <XCircle size={18} />
                  <span>Oops! Something went wrong. Please try emailing me directly.</span>
                </div>
              )}

              {/* Fields */}
              <div className="form__row">
                <div className={`form__group ${errors.name ? 'form__group--error' : ''}`}>
                  <label htmlFor="contact-name" className="form__label">
                    <User size={14} /> Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    className="form__input"
                    placeholder="e.g. Your Name"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    disabled={isSubmitting}
                  />
                  {errors.name && <span id="name-error" className="form__error" role="alert">{errors.name}</span>}
                </div>

                <div className={`form__group ${errors.email ? 'form__group--error' : ''}`}>
                  <label htmlFor="contact-email" className="form__label">
                    <Mail size={14} /> Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    className="form__input"
                    placeholder="e.g. name@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    disabled={isSubmitting}
                  />
                  {errors.email && <span id="email-error" className="form__error" role="alert">{errors.email}</span>}
                </div>
              </div>

              <div className={`form__group ${errors.subject ? 'form__group--error' : ''}`}>
                <label htmlFor="contact-subject" className="form__label">
                  <FileText size={14} /> Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  className="form__input"
                  placeholder="e.g. Internship Opportunity / Project Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  disabled={isSubmitting}
                />
                {errors.subject && <span id="subject-error" className="form__error" role="alert">{errors.subject}</span>}
              </div>

              <div className={`form__group ${errors.message ? 'form__group--error' : ''}`}>
                <label htmlFor="contact-message" className="form__label">
                  <MessageSquare size={14} /> Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form__input form__textarea"
                  placeholder="Hello Raja Ganapathi M, I'd like to discuss..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  disabled={isSubmitting}
                />
                {errors.message && <span id="message-error" className="form__error" role="alert">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary contact__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ width: '1rem', height: '1rem', border: '2px solid currentColor', borderRightColor: 'transparent', borderRadius: '50%', animation: 'spin .75s linear infinite' }}></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}