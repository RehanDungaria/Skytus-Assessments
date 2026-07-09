import React, { useState, useCallback } from "react";
import Button from "./Button";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      alert(
        `Thank you for reaching out, ${form.name}! We will follow up via ${form.email} shortly.`
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });
    },
    [form]
  );

  return (
    <section
      id="contact"
      className="py-28 bg-slate-950 border-t border-slate-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center space-y-5 mb-14">
          <div className="inline-flex px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Connect With Us
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Let's start scaling your workflow
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have architectural validation requirements or scaling questions?
            Reach out to our engineering team and we'll help optimize your
            infrastructure with secure, scalable solutions.
          </p>
        </div>

        {/* Contact Card */}
        <div className="relative group">
          {/* Gradient Border Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-10 blur-xl group-hover:opacity-20 transition duration-500"></div>

          <div className="relative bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl shadow-2xl p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-300"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-300"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your infrastructure, scaling challenges, or workflow..."
                  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                />
              </div>

              {/* Submit Button */}
              <Button
                variant="primary"
                className="w-full justify-center py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-all duration-300"
              >
                Send Message Securely
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);