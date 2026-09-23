import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { User, Mail, Globe, Calendar, BookOpen, MapPin, Clock } from 'lucide-react'

export const Route = createFileRoute('/register')({
  component: RegisterPage,
})

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyT1c8YOZUbnkZNtd8gJDdp65JOTp0urankTKjuitUhgLK7RuGhZ3LwycAs2vfh4Q-GbQ/exec'

const COUNTRIES = [
  'Nigeria', 'Rwanda', 'Kenya', 'Ghana', 'Tanzania', 'Uganda', 'Ethiopia',
  'South Africa', 'Senegal', 'Cameroon', "Côte d'Ivoire", 'Zimbabwe',
  'Zambia', 'Mozambique', 'Madagascar', 'Malawi', 'Botswana', 'Namibia',
  'Sierra Leone', 'Liberia', 'Guinea', 'Togo', 'Benin', 'Burkina Faso',
  'Mali', 'Niger', 'Chad', 'Sudan', 'Somalia', 'DRC', 'Congo',
  'Gabon', 'Equatorial Guinea', 'Angola', 'Egypt', 'Morocco', 'Tunisia',
  'Algeria', 'Libya', 'Mauritius', 'Seychelles', 'Comoros',
  'United States', 'United Kingdom', 'Canada', 'France', 'Germany',
  'China', 'India', 'Other',
]

const inputClass =
  'w-full rounded-xl border border-[#d0d5dd] bg-white px-4 py-3 text-sm text-[#001a48] placeholder-[#98a2b3] focus:outline-none focus:border-[#001a48] transition-colors'

function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    intake: '',
    email: '',
    country: '',
    attending: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: '#001a48' }} className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#e4002b' }}>
            Guest Speaker Session
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mt-2 mb-4 leading-tight">
            Register for the event
          </h1>
          <div className="flex flex-wrap gap-5 mt-6">
            <div className="flex items-center gap-2 text-sm" style={{ color: '#b8cce4' }}>
              <Calendar className="h-4 w-4" style={{ color: '#e4002b' }} />
              Wednesday, 15 October 2026
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#b8cce4' }}>
              <Clock className="h-4 w-4" style={{ color: '#e4002b' }} />
              Time TBC
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#b8cce4' }}>
              <MapPin className="h-4 w-4" style={{ color: '#e4002b' }} />
              ALU Kigali Campus
            </div>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-[#f5f7fb] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">

            {/* Form */}
            <div className="bg-white rounded-2xl border border-[#e4e7ec] p-6 sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div
                    className="h-16 w-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                    style={{ backgroundColor: '#001a48' }}
                  >
                    ✓
                  </div>
                  <h2 className="text-xl font-bold text-[#001a48]">You're registered!</h2>
                  <p className="text-sm text-[#667085] max-w-xs">
                    Your response has been saved. We look forward to seeing you at the session.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h2 className="text-lg font-bold text-[#001a48] mb-1">Your details</h2>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#344054] mb-1.5">
                      Full name <span style={{ color: '#e4002b' }}>*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#98a2b3]" />
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </div>

                  {/* Intake */}
                  <div>
                    <label className="block text-xs font-semibold text-[#344054] mb-1.5">
                      Intake <span style={{ color: '#e4002b' }}>*</span>
                    </label>
                    <div className="relative">
                      <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#98a2b3]" />
                      <input
                        type="text"
                        name="intake"
                        required
                        placeholder="e.g. Intake 8"
                        value={form.intake}
                        onChange={handleChange}
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </div>

                  {/* ALU Email */}
                  <div>
                    <label className="block text-xs font-semibold text-[#344054] mb-1.5">
                      ALU email <span style={{ color: '#e4002b' }}>*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#98a2b3]" />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="yourname@alustudent.com"
                        pattern=".*@alustudent\.com$"
                        title="Please use your ALU student email (@alustudent.com)"
                        value={form.email}
                        onChange={handleChange}
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-xs font-semibold text-[#344054] mb-1.5">
                      Country <span style={{ color: '#e4002b' }}>*</span>
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#98a2b3] pointer-events-none" />
                      <select
                        name="country"
                        required
                        value={form.country}
                        onChange={handleChange}
                        className={`${inputClass} pl-10 appearance-none`}
                      >
                        <option value="">Select your country</option>
                        {COUNTRIES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* In-person attendance */}
                  <div>
                    <label className="block text-xs font-semibold text-[#344054] mb-2">
                      Will you attend in person on 15th October? <span style={{ color: '#e4002b' }}>*</span>
                    </label>
                    <div className="flex flex-col gap-2">
                      {[
                        { value: 'Yes', label: 'Yes, I will be there' },
                        { value: 'No', label: 'No, I will join online' },
                        { value: 'Not sure', label: 'Not sure yet' },
                      ].map((opt) => (
                        <label
                          key={opt.value}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-colors"
                          style={{
                            borderColor: form.attending === opt.value ? '#001a48' : '#d0d5dd',
                            backgroundColor: form.attending === opt.value ? '#f0f4ff' : '#ffffff',
                          }}
                        >
                          <input
                            type="radio"
                            name="attending"
                            value={opt.value}
                            required
                            checked={form.attending === opt.value}
                            onChange={handleChange}
                            className="accent-[#001a48]"
                          />
                          <span className="text-sm text-[#001a48] font-medium">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-center" style={{ color: '#e4002b' }}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full justify-center mt-1"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Register for the session'}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-[#e4e7ec] p-6">
                <h3 className="text-sm font-bold text-[#001a48] mb-4 uppercase tracking-wide">Event details</h3>
                <div className="space-y-3 text-sm text-[#667085]">
                  <div className="flex gap-3">
                    <Calendar className="h-4 w-4 shrink-0 mt-0.5" style={{ color: '#e4002b' }} />
                    <span>Wednesday, 15 October 2026</span>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" style={{ color: '#e4002b' }} />
                    <span>ALU Kigali Campus</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-[#e4e7ec] p-6">
                <h3 className="text-sm font-bold text-[#001a48] mb-3 uppercase tracking-wide">Questions?</h3>
                <p className="text-sm text-[#667085] mb-4 leading-relaxed">
                  Reach out to the club directly if you have any questions about the session.
                </p>
                <a
                  href="mailto:aluroboticsclub@gmail.com"
                  className="btn-primary text-sm"
                >
                  Contact us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
