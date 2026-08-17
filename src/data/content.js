/**
 * ALL SITE CONTENT LIVES HERE.
 *
 * To add a new hackathon / competition / project:
 *   1. Copy any entry object below.
 *   2. Change the fields (keep `slug` unique — it becomes the page URL).
 *   3. Photos go in public/ and are referenced as { src: '/images/parc/hero.jpg', caption: '...' }.
 */

// Background slideshow photos for hero sections
export const HERO_SLIDES = [
  '/parc/hero.jpg',
  '/hackathon-2025/hackathon-22.jpg',
  '/ftc-rwanda/ftc-43.jpg',
  '/ftc-rwanda/ftc-05.jpg',
  '/ftc-rwanda/ftc-44.jpg',
  '/hackathon-2025/hackathon-05.jpg',
  '/ftc-rwanda/ftc-82.jpg',
  '/ftc-rwanda/ftc-69.jpg',
  '/hackathon-2025/hackathon-08.jpg',
  '/ftc-rwanda/ftc-45.jpg',
  '/hackathon-2025/hackathon-15.jpg',
  '/ftc-rwanda/ftc-83.jpg',
]

// PARC competition photos
const PARC_PHOTOS = [
  {
    src: '/parc/hero.jpg',
    caption: 'Best Live Demonstration Award at PARC 2025',
  },
  {
    src: '/parc/stela-with-operator.jpg',
    caption: 'Operating our rover on the PARC competition floor at NBA Academy Africa, Dakar',
  },
  {
    src: '/parc/stela-ready.jpg',
    caption: 'Team ready to compete at PARC 2025',
  },
  {
    src: '/parc/stela-robot.jpg',
    caption: 'Our rover on the outdoor competition track at PARC 2025',
  },
]

// ALU Hackathon 2025 — October 3 to 4, 2025, ALU Campus Kigali
const hackathonCaptions = [
  'IoT workshop session opens the hackathon',
  'Participants arriving and setting up at their stations',
  'Hardware build session underway in the workspace',
  'Teams reviewing the challenge brief before starting',
  'Full hackathon floor deep into the build sprint',
  'Team members coordinating on their project plan',
  'Collaborative work on sensor and wiring integration',
  'Participant assembling an embedded systems development board',
  'Firmware flashing and first power-on test',
  'Focused wiring session on an Arduino circuit board',
  'Testing connections and checking signal outputs',
  'Sensor calibration and component fitting',
  'Group debugging session around a live circuit',
  'Mid-build problem solving at the workbench',
  'Four builders troubleshooting hardware on the floor',
  'Testing the prototype before final demonstrations',
  'Team reviewing circuit performance and making adjustments',
  'Documentation and write-up phase before demos',
  'Final refinements and stress tests before presentations',
  'Team presenting their completed build to the panel',
  'Live demonstration of the working prototype',
  'Hackathon closing session and next steps discussion',
]

const HACKATHON_2025 = hackathonCaptions.map((caption, i) => ({
  src: `/hackathon-2025/hackathon-${String(i + 1).padStart(2, '0')}.jpg`,
  caption,
}))

// FTC Challenge Rwanda — photos from the FTC robotics challenge at ALU Kigali
const ftcCaptions = [
  'FTC robot assembly instructions projected at the workshop kickoff',
  'Workshop leader walking teams through the FTC kit contents and build sequence',
  'Teams start assembling the FTC robot frame, motors, mecanum wheels and wiring on the table',
  'Top-down view of the FTC robot showing REV hub connections and mecanum wheel layout',
  'Two students driving the FTC robot on the floor with a game controller',
  'FTC robot mid-build, the vertical linear slide tower taking shape',
  'Team members working side by side on robot assembly',
  'Programming session, laptops open with FTC code alongside the assembled robot',
  'Motor wiring being fitted onto the aluminum extrusion chassis',
  'Team checking the REV control hub connections before power-on',
  'Four team members huddled around the robot troubleshooting an assembly issue',
  'Close-up of the REV hub being wired to the drive motors',
  'Team comparing the physical build to the assembly guide',
  'Wheel and drivetrain installation in progress',
  'Teammates verifying wiring before the first drive test',
  'Three students debugging FTC drive code on a laptop next to the robot',
  'Programming session, working through the robot control logic',
  'Robot gets its first power-on test with the REV hub indicators live',
  'Team checking motor direction and encoder feedback',
  'Code pushed to the robot control hub via USB connection',
  'First drive test, robot moving under its own power across the room',
  'Team reviewing the assembly manual for the next build step',
  'Wiring harness being routed through the robot frame',
  'Wheel alignment check before the drive test',
  'Team discussing control logic and autonomous routine',
  'Mecanum wheel installation and tightening',
  'Robot lifted for an underbody inspection',
  'Battery and power switch fitted to the chassis',
  'Teams giving feedback on each other\'s builds',
  'Workshop floor with multiple teams working simultaneously on their robots',
  'Team coordinating on the next phase of the build',
  'Students working on sensor placement and mounting',
  'Robot being test-driven across the carpeted workshop floor',
  'Operator adjusting gamepad controls during a test run',
  'Team noting issues to address between drive runs',
  'Workshop mentor advising teams on key build decisions',
  'Driver station phone showing the FTC app connected to the robot',
  'Lift mechanism being tested for range of motion and speed',
  'Team reconfiguring wheel setup for improved traction',
  'Multiple teams in the workshop building and testing simultaneously',
  'Coding pair reviewing FTC documentation and writing autonomous code',
  'Test drive observed by the rest of the group',
  'Group reaction as the robot completes a successful drive run',
  'Team discussion around the robot between test runs',
  'Checking connector fit on the REV expansion hub',
  'Robot placed on the challenge field for a timed run',
  'Driver station tablet showing robot telemetry during a test',
  'Lift mechanism lowered and raised under controlled test conditions',
  'Students watching closely as the robot navigates an obstacle',
  'Observers gathered to watch the live robot demonstration',
  'Student operating robot solo, full concentration on the drive',
  'Group gathered around the robot for a post-run debrief',
  'Mentor pointing out a structural improvement opportunity on the lift tower',
  'Team working quickly to fix an issue before the next run',
  'Control hub status display checked before powering back on',
  'Mecanum drive test, robot strafing sideways across the carpet',
  'Team refitting a loose motor mount between challenge runs',
  'Robots lined up for the start of the final round',
  'Final robot inspection before the challenge round begins',
  'Both robots at the end of the challenge day',
  'Student driving the robot solo during the final demonstration',
  'Audience watching the final robot drive demonstration',
  'Robot navigating the floor at full speed in the final run',
  'Teams finishing up after the challenge rounds',
  'FTC challenge closing session, teams sharing what they built and learned',
  'Final discussion between teams on design choices and lessons',
  'Robot powered down at the end of the challenge day',
  'Group gathered around the robots at the end of the event',
  'Students reflecting on the day\'s build with the finished robot',
  'Mentor\'s closing remarks at the end of the FTC challenge',
  'Coach and student debugging the robot\'s final configuration at the laptop',
  'Teams wrapping up after a full day of building and competing',
  'Student driving the completed FTC robot on the floor during the final demo',
  // 12 additional photos
  'Two participants holding the partially assembled FTC drivetrain, gobilda parts spread across the table',
  'Chassis assembly from another angle, motors and wheels fitted, more components still to install',
  'REV Control Hub being mounted onto the robot frame',
  'Close-up of the REV Control Hub installation and motor wiring connections',
  'Securing the REV Control Hub to the aluminum extrusion chassis',
  'Team working on robot assembly with the control hub mounted and assembly instructions projected on screen',
  'Three students fitting final components, REV hub wired in, frame nearly complete',
  'Student at laptop with the driver station gamepad beside them, setting up robot programming',
  'Team of three attaching the last components before the drive test',
  'First drive test, students navigating the robot across the floor with a game controller',
  'Solo drive test, student piloting the robot while the controller layout is projected behind',
  'Robot in motion during the drive demonstration at FTC Rwanda 2026',
]

const FTC_PHOTOS = ftcCaptions.map((caption, i) => ({
  src: `/ftc-rwanda/ftc-${String(i + 1).padStart(2, '0')}.jpg`,
  caption,
}))

// ─────────────────────────────── ENTRIES ──────────────────────────────────

export const entries = [
  // ─────────────────────────── COMPETITIONS ─────────────────────────────
  {
    slug: 'parc-2025',
    title: 'Pan-African Robotics Competition',
    date: '2025-06-01',
    dateLabel: '2025',
    location: 'Dakar, Senegal',
    category: 'competition',
    shortDescription:
      'ALU Robotics competed at PARC against university teams across Africa, winning 2nd place overall and the Best Live Demonstration Award.',
    longDescription: [
      'The ALU Robotics Club represented African Leadership University at the Pan-African Robotics Competition (PARC), held at NBA Academy Africa in Dakar, Senegal. The club went up against university teams from across the continent.',
      'Our team brought a custom-built four-wheeled outdoor rover onto the competition floor. The live demonstration showed the rover navigating the outdoor turf track reliably under competition conditions, which earned us the Best Live Demonstration Award from the PARC judges.',
      'We also finished 2nd place overall. PARC is one of the most competitive university robotics events on the continent, supported by VEX Robotics, the Mastercard Foundation, IEEE CSS, and DAUST. Reaching the podium on our debut is a strong result.',
    ],
    outcome: '2nd place and Best Live Demonstration Award',
    tech: ['Autonomous navigation', 'Spring suspension chassis', 'GPS antenna', 'Embedded control systems', 'Outdoor terrain traversal'],
    coverObjectPosition: '50% 35%',
    images: PARC_PHOTOS,
  },

  {
    slug: 'ftc-rwanda-2025',
    title: 'FTC Challenge Rwanda',
    date: '2026-08-01',
    dateLabel: '2026',
    location: 'Kigali, Rwanda',
    category: 'competition',
    shortDescription:
      'ALU Robotics took part in the FIRST Tech Challenge Rwanda, building, programming and driving FTC robots from scratch in a competitive workshop setting on campus.',
    longDescription: [
      'The ALU Robotics Club participated in the FIRST Tech Challenge (FTC) Rwanda, held on the African Leadership University campus in Kigali. Teams built and programmed FTC robots using REV Robotics hardware, mecanum drivetrains and vertical linear slide mechanisms.',
      'The challenge ran from kit unboxing through to live drive demonstrations. Teams worked through mechanical assembly, motor wiring, control hub configuration, and Java-based FTC SDK programming, all in a single intensive session.',
      'Club members competed and mentored throughout, running drive tests and iterating on their builds before the final demonstration rounds.',
    ],
    outcome: 'Competed at FTC Rwanda',
    tech: ['REV Robotics Control Hub', 'FTC SDK (Java)', 'Mecanum drivetrain', 'Linear slide mechanism', 'Driver station app'],
    images: FTC_PHOTOS,
  },

  // ─────────────────────────── HACKATHONS ───────────────────────────────
  {
    slug: 'alu-hackathon-2025',
    title: 'ALU Hackathon 2025',
    date: '2025-10-04',
    dateLabel: 'October 2025',
    location: 'ALU Campus, Kigali, Rwanda',
    category: 'hackathon',
    shortDescription:
      'A campus hackathon where student teams built working hardware and software prototypes in a single focused sprint.',
    longDescription: [
      'The ALU Hackathon 2025 brought together student builders from across the African Leadership University campus for an intensive build sprint. Teams formed around real problems, pitched their idea, and had to ship a working prototype by the next morning.',
      'The robotics club provided technical mentorship throughout the event, helping teams debug firmware, wire sensors, and get their builds moving before the deadline. Multiple teams tackled hardware challenges including IoT sensor integration, embedded systems and wireless communication.',
      'The event produced a strong set of prototypes and gave new members their first experience of the sprint culture the club runs on: build fast, document everything, and come back sharper.',
    ],
    outcome: 'Hosted and mentored',
    tech: ['Arduino', 'ESP32', 'Raspberry Pi', 'IoT sensors', 'Web APIs'],
    team: ['Club members as mentors', 'Cross-campus participants'],
    images: HACKATHON_2025,
  },

]

// ─────────────────────────── LOOKUP HELPERS ───────────────────────────────

export const CATEGORY_LABELS = {
  hackathon: 'Hackathon',
  competition: 'Competition',
  project: 'Project',
}

export const byCategory = (category) =>
  entries
    .filter((e) => e.category === category)
    .sort((a, b) => b.date.localeCompare(a.date))

export const bySlug = (category, slug) =>
  entries.find((e) => e.category === category && e.slug === slug)

export const latest = (category) => byCategory(category)[0]

export const allImages = () =>
  entries.flatMap((entry) =>
    entry.images.map((image) => ({ ...image, entry }))
  )

export const slideshowPhotos = (category) => {
  const source = category ? byCategory(category) : entries
  const seen = new Set()
  const out = []
  for (const entry of source) {
    for (const image of entry.images) {
      if (!seen.has(image.src)) {
        seen.add(image.src)
        out.push(image.src)
      }
    }
  }
  for (const p of HERO_SLIDES) {
    if (!seen.has(p)) out.push(p)
  }
  return out
}

// ─────────────────────────── CLUB INFO ────────────────────────────────────

export const CLUB = {
  name: 'ALU Robotics Club',
  tagline: 'We build machines. We enter competitions. We come back with results.',
  founded: '2022',
  university: 'African Leadership University',
  city: 'Kigali, Rwanda',
  email: 'aluroboticsclub@gmail.com',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/alu.robotics.club/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/alu-robotics-club/posts/?feedView=all' },
    { label: 'YouTube', href: 'https://www.youtube.com/@ALU.Robotics' },
  ],
}
