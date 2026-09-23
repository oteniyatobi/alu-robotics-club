import { useState } from 'react'
import { X, User, Mail, Globe, Calendar, BookOpen } from 'lucide-react'

// Paste your Google Apps Script deployment URL here after setup
const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL'

const COUNTRIES = [
  'Nigeria', 'Rwanda', 'Kenya', 'Ghana', 'Tanzania', 'Uganda', 'Ethiopia',
  'South Africa', 'Senegal', 'Cameroon', 'Côte d\'Ivoire', 'Zimbabwe',
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

export function GuestSpeakerPopup() {
  const [open, setOpen] = useState(true)
  const [form, setForm] = useState({
    name: '',
    intake: '',
    email: '',
    country: '',
    attending: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

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

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center sm:p-4"
      style={{ backgroundColor: 'rgba(0,22,58,0.88)' }}
      onClick={() => setOpen(false)}
    >
      <div
        className="relative bg-white w-full rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        style={{ maxWidth: '480px', maxHeight: '92dvh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-[#f2f4f7] shrink-0">
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#f2f4f7] text-[#667085] hover:bg-[#e4e7ec] transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#e4002b' }}>
            Register now
          </span>
          <h2 className="text-xl font-bold text-[#001a48] mt-1 leading-snug">
            Guest Speaker Session
          </h2>
          <p className="text-sm text-[#667085] mt-1">
            Wednesday, 15 October · ALU Kigali
          </p>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center px-6 py-12 text-center gap-4">
              <div
                className="h-14 w-14 rounded-full flex items-center justify-center text-white text-2xl"
                style={{ backgroundColor: '#001a48' }}
              >
                ✓
              </div>
              <h3 className="text-lg font-bold text-[#001a48]">You're registered!</h3>
              <p className="text-sm text-[#667085] max-w-xs">
                Your response has been saved. We look forward to seeing you at the session.
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-6 py-5 flex flex-col gap-4">
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
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#667085]" />
                    Will you attend in person on 15th October?
                    <span style={{ color: '#e4002b' }}>*</span>
                  </span>
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
                <p className="text-xs text-[#e4002b] text-center">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full justify-center mt-1 mb-1"
              >
                {status === 'submitting' ? 'Submitting...' : 'Register for the session'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
