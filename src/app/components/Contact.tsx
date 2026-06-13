import { useState } from "react";
import { motion } from "motion/react";
import {
  MessageCircle,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "6285225177286"; // Replace with your WhatsApp number (include country code, no +)

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);

    // Simulate sending — replace this block with your backend call (Supabase, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1400));

    setSending(false);
    setSent(true);
    toast.success(
      "Message received!",
    );
    setForm({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSent(false), 5000);
  };

  const sendWhatsApp = () => {
    const text = encodeURIComponent(
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank",
    );
  };

  return (
    <section id="contact" className="py-28 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-border pb-6"
        >
          <p
            className="text-primary mb-2"
            style={{
              fontSize: "0.7rem",
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.15em",
            }}
          >
            04 — CONTACT
          </p>
          <h2
            className="text-foreground"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 600,
            }}
          >
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <p
              className="text-muted-foreground"
              style={{
                fontSize: "1rem",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              Whether you have a project in mind, need
              administrative bottlenecks, or simply want to
              connect — I'd love to hear from you. 
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: <Mail size={16} />,
                  label: "EMAIL",
                  value: "ismi.anjar@gmail.com",
                  href: "ismi.anjar@gmail.com",
                },
                {
                  icon: <MessageCircle size={16} />,
                  label: "WHATSAPP",
                  value: "+6285225177286",
                  href: `https://wa.me/${WHATSAPP_NUMBER}}`,
                },
                {
                  icon: <MapPin size={16} />,
                  label: "LOCATION",
                  value: "Banyumas, Central Java, Indonesia",
                  href: null,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 border border-border flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-muted-foreground"
                      style={{
                        fontSize: "0.65rem",
                        fontFamily: "'DM Mono', monospace",
                        letterSpacing: "0.12em",
                      }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors duration-200"
                        style={{
                          fontSize: "0.9rem",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="text-foreground"
                        style={{
                          fontSize: "0.9rem",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp shortcut */}
            <button
              onClick={sendWhatsApp}
              className="flex items-center gap-3 px-6 py-3.5 border border-border hover:border-primary/50 transition-all duration-300 group w-fit"
            >
              <MessageCircle
                size={18}
                className="text-primary"
              />
              <div className="text-left">
                <p
                  className="text-foreground group-hover:text-primary transition-colors"
                  style={{
                    fontSize: "0.85rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  Send via WhatsApp
                </p>
                <p
                  className="text-muted-foreground"
                  style={{
                    fontSize: "0.7rem",
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  Opens in a new window
                </p>
              </div>
            </button>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-muted-foreground"
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "'DM Mono', monospace",
                      letterSpacing: "0.1em",
                    }}
                  >
                    NAME *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="bg-input-background border border-border text-foreground px-4 py-3 outline-none focus:border-primary transition-colors duration-200 placeholder:text-muted-foreground"
                    style={{
                      fontSize: "0.9rem",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-muted-foreground"
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "'DM Mono', monospace",
                      letterSpacing: "0.1em",
                    }}
                  >
                    EMAIL *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="bg-input-background border border-border text-foreground px-4 py-3 outline-none focus:border-primary transition-colors duration-200 placeholder:text-muted-foreground"
                    style={{
                      fontSize: "0.9rem",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="subject"
                  className="text-muted-foreground"
                  style={{
                    fontSize: "0.7rem",
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.1em",
                  }}
                >
                  SUBJECT
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="bg-input-background border border-border text-foreground px-4 py-3 outline-none focus:border-primary transition-colors duration-200"
                  style={{
                    fontSize: "0.9rem",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <option value="">Select a topic…</option>
                  <option value="Job Opportunity">
                    Job Opportunity
                  </option>
                  <option value="Freelance Project">
                    Freelance / Consulting Project
                  </option>
                  <option value="Collaboration">
                    Collaboration
                  </option>
                  <option value="General Inquiry">
                    General Inquiry
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-muted-foreground"
                  style={{
                    fontSize: "0.7rem",
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.1em",
                  }}
                >
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or inquiry…"
                  required
                  className="bg-input-background border border-border text-foreground px-4 py-3 outline-none focus:border-primary transition-colors duration-200 placeholder:text-muted-foreground resize-none"
                  style={{
                    fontSize: "0.9rem",
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1.6,
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 disabled:opacity-60"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                }}
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={16} />
                    MESSAGE SENT
                  </>
                ) : sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    SENDING…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    SEND MESSAGE
                  </>
                )}
              </button>

              <p
                className="text-muted-foreground"
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                * Required fields. Your information is kept
                private.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}