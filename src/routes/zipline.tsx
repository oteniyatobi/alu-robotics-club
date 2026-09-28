import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { User, Mail, Globe, BookOpen, MapPin } from 'lucide-react'

export const Route = createFileRoute('/zipline')({
  component: ZiplinePage,
})

// Paste your Zipline Google Apps Script deployment URL here
const SCRIPT_URL = 'YOUR_ZIPLINE_GOOGLE_APPS_SCRIPT_URL'

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

function ZiplinePage() {
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
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#e4002b' }}>
            Club Visit
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mt-3 mb-4 leading-tight">
            Visit Zipline Rwanda
          </h1>
          <div className="flex flex-wrap gap-5 mt-4">
            <div className="flex items-center gap-2 text-sm" style={{ color: '#b8cce4' }}>
              <MapPin className="h-4 w-4" style={{ color: '#e4002b' }} />
              Zipline Distribution Centre, Rwanda
            </div>
          </div>
        </div>
      </section>

      {/* About Zipline */}
      <section className="bg-white px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Bio */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#667085] mb-4">About Zipline</p>
              <h2 className="text-3xl font-bold text-[#001a48] mb-6 leading-snug">
                The world's first national drone delivery network
              </h2>
              <div className="space-y-4 text-base text-[#334155] leading-relaxed">
                <p>
                  Zipline launched in Rwanda in 2016, making it one of the first countries in the world
                  with a national drone delivery network. What started as a solution to Rwanda's
                  challenging terrain and limited road access has grown into one of the most advanced
                  autonomous logistics systems on the planet.
                </p>
                <p>
                  Each Zipline drone, called a Zip, can carry up to 1.8 kg and fly over 160 km on a
                  single charge. The aircraft launch from distribution centres, drop packages by
                  parachute to health facilities, and return automatically. No runway needed. No human
                  pilot required.
                </p>
                <p>
                  Zipline delivers blood, vaccines, cancer medication, HIV treatment, anti-malarials,
                  and emergency supplies to hospitals and health centres across Rwanda. Deliveries
                  that once took hours by road now take minutes. The system has made hundreds of
                  thousands of deliveries and saved thousands of lives.
                </p>
                <p>
                  From Rwanda, Zipline has expanded to Ghana, Nigeria, Côte d'Ivoire, Kenya,
                  Japan, and the United States. Rwanda remains the foundation of everything they built.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { v: '2016', l: 'Launched in Rwanda' },
                  { v: '160km', l: 'Round-trip range' },
                  { v: '1M+', l: 'Deliveries made' },
                ].map((s) => (
                  <div key={s.l} className="border-l-2 pl-4" style={{ borderColor: '#e4002b' }}>
                    <p className="text-2xl font-bold text-[#001a48]">{s.v}</p>
                    <p className="text-xs text-[#667085] mt-0.5 leading-snug">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Video */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#667085] mb-4">Watch</p>
              <div className="overflow-hidden rounded-2xl shadow-lg" style={{ aspectRatio: '16/9' }}>
                <iframe
                  src="https://www.youtube.com/embed/DOWDNBu9DkU"
                  title="Zipline drone delivery in Rwanda"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
              <p className="text-xs text-[#667085] mt-2">
                Zipline drone delivery operations in Rwanda.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Registration form */}
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
                    Your spot has been saved. We will be in touch with visit details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h2 className="text-lg font-bold text-[#001a48]">Register for the visit</h2>
                    <p className="text-sm text-[#667085] mt-1">
                      Sign up to join the ALU Robotics Club visit to Zipline Rwanda.
                    </p>
                  </div>

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

                  {/* Attendance */}
                  <div>
                    <label className="block text-xs font-semibold text-[#344054] mb-2">
                      Will you be joining the Zipline visit? <span style={{ color: '#e4002b' }}>*</span>
                    </label>
                    <div className="flex flex-col gap-2">
                      {[
                        { value: 'Yes', label: 'Yes, I will be there' },
                        { value: 'No', label: 'No, I cannot make it' },
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
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full justify-center mt-1"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Register for the visit'}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-[#e4e7ec] p-6">
                <h3 className="text-sm font-bold text-[#001a48] mb-4 uppercase tracking-wide">Visit details</h3>
                <div className="space-y-3 text-sm text-[#667085]">
                  <div className="flex gap-3">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" style={{ color: '#e4002b' }} />
                    <span>Zipline Distribution Centre, Rwanda</span>
                  </div>
                </div>
                <p className="text-xs text-[#667085] mt-4 leading-relaxed">
                  Date and time will be confirmed and shared with all registered attendees.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[#e4e7ec] p-6">
                <h3 className="text-sm font-bold text-[#001a48] mb-3 uppercase tracking-wide">Questions?</h3>
                <p className="text-sm text-[#667085] mb-4 leading-relaxed">
                  Reach out to the club for any questions about the visit.
                </p>
                <a href="mailto:aluroboticsclub@gmail.com" className="btn-primary text-sm">
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
