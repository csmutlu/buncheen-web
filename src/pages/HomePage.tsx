import { useState, type FormEvent, type ReactNode } from 'react'
import { BrandMark } from '../components/BrandMark'
import heroPhonesCombined from '../assets/figma/hero-phones-combined.png'
import profileFousiah from '../assets/figma/profile-fousiah.png'
import profileJasur from '../assets/figma/profile-jasur.png'
import profileSheryl from '../assets/figma/profile-sheryl.png'

const shellClassName = 'mx-auto w-full max-w-[1232px] px-6 sm:px-10'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Service', href: '#service' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#popular' },
  { label: 'Support', href: '#contact' },
]

const popularProfiles = [
  {
    name: 'Javar Saripun',
    image: profileJasur,
    tint: 'bg-profile-javar',
    offsetClass: 'xl:mt-0',
    description:
      'A man who is ideal for ali women. Javar is very handsome and attractive with a very friendly and kind nature. Javar is also a person who excels in the field of music.',
  },
  {
    name: 'Fausiah Fera',
    image: profileFousiah,
    tint: 'bg-profile-fausiah',
    featured: true,
    offsetClass: 'xl:mt-12',
    description:
      'Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman.',
  },
  {
    name: 'Shreryl Olap',
    image: profileSheryl,
    tint: 'bg-profile-sheryl',
    offsetClass: 'xl:mt-24',
    description:
      'Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet. He works in the field of music, which is famous in Indonesia.',
  },
]

const testimonials = [
  {
    name: 'Tasha Wijayanti',
    role: 'Curug',
    quote:
      "This Bucheen is so cool, I found the partner I wanted. and it's very easy to use and steady for bcheen. cheers and hopefully many other people can find their partner here",
  },
  {
    name: 'Sizuka engkol',
    role: 'Indonesia',
    quote:
      'Very interesting services are provided to customers, access is very fast and we can also see the development Of our partners. and the information provided is accurate and genuine.',
  },
  {
    name: 'Gundam gandim',
    role: 'Bulgarian',
    quote:
      "It's crazy that this application can make me find my soul mate very easily and quickly. the information contained in this buceen is very accurate and really real, not a hoax",
  },
]

const footerColumns = [
  {
    title: 'About Us',
    links: ['Our people', 'Our categories', 'Contact us', 'Testimonial'],
  },
  {
    title: 'Product',
    links: ['Task Management', 'Service', 'Task Schedule'],
  },
]

const relationshipSteps = [
  {
    icon: 'search',
    description:
      'Find your dating relationship in app and waiting until you get a notification. have a good relationship its started',
  },
  {
    icon: 'heart',
    description:
      'Dating with benefits and you redefine the expectations of a perfect relationship with your partner',
  },
  {
    icon: 'person-check',
    description:
      'Ideal relationship makes your online dating relationship run more smoothly using this app',
  },
] as const

type StepKind = (typeof relationshipSteps)[number]['icon']

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-muted" aria-hidden="true">
      <path
        d="M4.25 6.5L8 10.25L11.75 6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" aria-hidden="true">
      <circle cx="11" cy="11" r="5.25" fill="none" stroke="currentColor" strokeWidth="1.9" />
      <path
        d="M15.2 15.2L19 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" aria-hidden="true">
      <path
        d="M12 19.2L10.9 18.2C6.55 14.26 4 11.94 4 9.1C4 6.78 5.82 5 8.1 5C9.4 5 10.66 5.61 11.45 6.56L12 7.23L12.55 6.56C13.34 5.61 14.6 5 15.9 5C18.18 5 20 6.78 20 9.1C20 11.94 17.45 14.26 13.1 18.22L12 19.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PersonCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" aria-hidden="true">
      <circle cx="10" cy="8.2" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4.7 17.8C5.74 14.94 7.64 13.5 10 13.5C12.36 13.5 14.26 14.94 15.3 17.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15.9 15.7L17.85 17.65L20.8 14.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StepIcon({ kind }: { kind: StepKind }) {
  if (kind === 'search') {
    return <SearchIcon />
  }

  if (kind === 'heart') {
    return <HeartIcon />
  }

  return <PersonCheckIcon />
}

function GenderSelect({
  label,
  value,
  onChange,
}: {
  label: string
  value: 'Male' | 'Female'
  onChange: (value: 'Male' | 'Female') => void
}) {
  return (
    <label className="relative block min-w-0">
      <span className="sr-only">{label}</span>
      <select
        className="h-13.5 w-full appearance-none rounded-[14px] bg-white px-5 pr-12 text-[0.95rem] font-medium text-muted outline-none transition focus-visible:ring-2 focus-visible:ring-accent/25"
        aria-label={label}
        value={value}
        onChange={(event) => onChange(event.target.value as 'Male' | 'Female')}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
        <ChevronDownIcon />
      </span>
    </label>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-muted" aria-hidden="true">
      <path
        d="M7.8 4.5H5.9C5.13 4.5 4.5 5.13 4.5 5.9C4.5 13.97 11.03 20.5 19.1 20.5C19.87 20.5 20.5 19.87 20.5 19.1V17.2C20.5 16.69 20.15 16.24 19.66 16.13L15.85 15.26C15.42 15.16 14.97 15.32 14.7 15.66L13.86 16.68C10.77 15.19 8.81 13.23 7.32 10.14L8.34 9.3C8.68 9.03 8.84 8.58 8.74 8.15L7.87 4.34C7.76 3.85 7.31 3.5 6.8 3.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-muted" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 7L12 12.5L19 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-muted" aria-hidden="true">
      <path
        d="M12 20C14.25 16.94 17.5 13.66 17.5 9.83C17.5 6.61 15.04 4 12 4C8.96 4 6.5 6.61 6.5 9.83C6.5 13.66 9.75 16.94 12 20Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function ContactRow({
  icon,
  children,
}: {
  icon: 'phone' | 'mail' | 'pin'
  children: ReactNode
}) {
  const iconNode =
    icon === 'phone' ? <PhoneIcon /> : icon === 'mail' ? <MailIcon /> : <PinIcon />

  return (
    <li className="flex items-start gap-2.5 text-[0.92rem] leading-8 text-muted">
      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center">{iconNode}</span>
      <span>{children}</span>
    </li>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto h-92 w-full max-w-124 sm:h-116 sm:max-w-136 lg:ml-auto lg:-mr-10 lg:h-140 lg:max-w-xl xl:-mr-16">
      <img
        src={heroPhonesCombined}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1 z-10 h-[18.6rem] w-auto select-none drop-shadow-[0_22px_34px_rgba(255,114,94,0.10)] sm:right-2 sm:top-2 sm:h-[23.4rem] lg:right-0 lg:top-0 lg:h-122 xl:right-[-0.8rem]"
      />
    </div>
  )
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [fromGender, setFromGender] = useState<'Male' | 'Female'>('Male')
  const [lookingFor, setLookingFor] = useState<'Male' | 'Female'>('Female')
  const [resultMessage, setResultMessage] = useState('')

  function handleFindMatch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setResultMessage(`Showing matches for ${fromGender} looking for ${lookingFor}.`)
    document.getElementById('popular')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white font-sans text-ink" id="top">
      <header className="bg-white">
        <div className={`${shellClassName} flex items-center justify-between gap-6 py-6 lg:py-[2.05rem]`}>
          <a className="inline-flex items-center" href="#top" aria-label="Bucheen">
            <BrandMark />
          </a>

          <nav className="hidden items-center gap-11 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className={`text-[0.95rem] font-medium transition ${
                  link.label === 'Home' ? 'font-semibold text-accent' : 'text-muted-soft hover:text-ink'
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              className="inline-flex min-h-[2.65rem] items-center justify-center rounded-[0.95rem] border border-accent-border px-7 text-[0.92rem] font-semibold text-accent transition hover:bg-surface-hover-soft"
              href="#popular"
            >
              Sign In
            </a>
            <a
              className="inline-flex min-h-[2.65rem] items-center justify-center rounded-[0.95rem] bg-accent px-7 text-[0.92rem] font-semibold text-white transition hover:bg-accent-dark"
              href="#popular"
            >
              Sign Up
            </a>
          </div>

          <button
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-white text-ink shadow-[0_12px_24px_rgba(43,27,29,0.08)] lg:hidden"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="grid gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>

        {menuOpen ? (
          <div className={`${shellClassName} pb-6 lg:hidden`}>
            <div className="grid gap-3 rounded-[1.4rem] border border-divider bg-white p-4 shadow-[0_16px_28px_rgba(43,27,29,0.08)]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-muted transition hover:bg-surface-hover hover:text-ink"
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-[0.95rem] border border-accent-border px-6 text-sm font-semibold text-accent"
                  href="#popular"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </a>
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-[0.95rem] bg-accent px-6 text-sm font-semibold text-white"
                  href="#popular"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section className="border-b border-line bg-bg-soft" id="home">
          <div className={`${shellClassName} grid gap-10 py-12 sm:py-14 lg:grid-cols-[0.95fr_0.82fr] lg:items-center lg:gap-2 lg:py-[4.9rem] lg:pr-0`}>
            <div className="max-w-124 lg:pl-[1.1rem]">
              <h1 className="text-[clamp(3rem,5vw,5.15rem)] font-semibold leading-[1.1] tracking-[-0.055em] text-ink">
                <span className="whitespace-nowrap">
                  Find <span className="text-accent">Match Now</span>
                </span>
                <br />
                <span className="whitespace-nowrap">and Grow Your</span>
                <br />
                Feelings
              </h1>

              <p className="mt-8 max-w-120 text-[0.98rem] leading-[2.55rem] text-muted">
                There are so many platforms from this Pokan to make a task manager manage all your
                time, the data needed is very useful and we have it all to get you to be successful.
              </p>

              <form
                className="mt-10 max-w-md rounded-[1.1rem] bg-white p-2.5 shadow-[0_26px_54px_rgba(70,40,41,0.16)]"
                onSubmit={handleFindMatch}
              >
                <div className="flex flex-col gap-2 sm:grid sm:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)_auto] sm:items-center">
                  <GenderSelect label="From gender" value={fromGender} onChange={setFromGender} />
                  <span className="hidden h-8 w-px bg-divider-soft sm:block" aria-hidden="true" />
                  <GenderSelect label="Looking for" value={lookingFor} onChange={setLookingFor} />
                  <button
                    className="inline-flex min-h-12 items-center justify-center rounded-[0.82rem] bg-accent px-7 text-[0.95rem] font-semibold text-white transition hover:bg-accent-dark"
                    type="submit"
                  >
                    Find Now
                  </button>
                </div>

                {resultMessage ? (
                  <p className="mt-3 px-2 text-[0.78rem] text-muted" aria-live="polite">
                    {resultMessage}
                  </p>
                ) : null}
              </form>
            </div>

            <HeroVisual />
          </div>
        </section>

        <section className="border-b border-line bg-white" id="service">
          <div className={`${shellClassName} relative grid min-h-68 gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-[5.9rem]`}>
            <div className="flex justify-center lg:justify-self-start">
              <div className="relative hidden h-72 w-80 overflow-visible lg:block" aria-hidden="true">
                <span className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border-[6px] border-accent-ring" />
                <span className="absolute left-[1.65rem] top-1/2 h-[14.7rem] w-[14.7rem] -translate-y-1/2 rounded-full border-[6px] border-accent-ring" />
                <span className="absolute left-[3.3rem] top-1/2 h-[11.4rem] w-[11.4rem] -translate-y-1/2 rounded-full border-[6px] border-accent-ring" />
                <span className="absolute left-[4.95rem] top-1/2 h-[8.1rem] w-[8.1rem] -translate-y-1/2 rounded-full border-[6px] border-accent-ring" />
                <span className="absolute left-[6.6rem] top-1/2 h-[4.8rem] w-[4.8rem] -translate-y-1/2 rounded-full border-[6px] border-accent-ring" />
              </div>
            </div>

            <div className="max-w-122 lg:justify-self-start lg:pl-7">
              <h2 className="text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-ink">
                <span className="whitespace-nowrap">Find Match Now and</span>
                <br />
                <span className="whitespace-nowrap">Develop Your Feelings</span>
              </h2>

              <p className="mt-5 max-w-100 text-[0.88rem] leading-7 text-muted">
                There are so many platforms from this Pokan to make a task manager manage all your
                time, the data needed is very useful. and we have it all to get you to be successful
              </p>

              <a
                className="mt-6 inline-flex min-h-9 items-center justify-center rounded-[0.7rem] bg-accent px-5 text-[0.72rem] font-semibold text-white transition hover:bg-accent-dark"
                href="#about"
              >
                Read More
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-white" id="about">
          <div className={`${shellClassName} grid min-h-80 gap-10 py-16 lg:grid-cols-[0.56fr_0.44fr] lg:py-24`}>
            <div className="max-w-108">
              <h2 className="text-[clamp(2rem,3.2vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.05em] text-ink">
                How It Works To Find
                <br />
                Your Relationship
              </h2>

              <div className="mt-10 grid gap-7">
                {relationshipSteps.map((step) => (
                  <article key={step.icon} className="grid grid-cols-[4.1rem_1fr] items-start gap-5">
                    <span className="inline-grid h-[4.1rem] w-[4.1rem] place-items-center rounded-full bg-accent-wash shadow-[0_8px_18px_rgba(255,114,94,0.08)]">
                      <StepIcon kind={step.icon} />
                    </span>
                    <p className="max-w-84 pt-1 text-[0.98rem] leading-[1.65rem] text-muted">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="hidden lg:block" aria-hidden="true" />
          </div>
        </section>

        <section className="border-b border-line bg-bg-soft" id="popular">
          <div className={`${shellClassName} py-16 lg:py-[5.4rem]`}>
            <div className="text-center">
              <h2 className="text-[clamp(2rem,3.1vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.05em] text-ink">
                Most Popular in This Week
              </h2>
              <p className="mx-auto mt-4 max-w-[24rem] text-[0.76rem] leading-6 text-muted">
                There are so many platforms from this Pokan to make a task manager manage all your
                time, the data needed is very useful and we have it all to get you to be successful.
              </p>
            </div>

            <div className="mt-11 grid gap-6 md:grid-cols-2 xl:flex xl:items-start xl:justify-center xl:gap-8">
              {popularProfiles.map((profile) => (
                <article
                  key={profile.name}
                  className={`mx-auto w-full max-w-[15.8rem] rounded-[1.25rem] bg-white p-4 text-left xl:mx-0 xl:w-62 ${profile.offsetClass} ${
                    profile.featured
                      ? 'shadow-[0_24px_40px_rgba(52,34,37,0.1)] xl:translate-y-[0.7rem]'
                      : 'shadow-[0_16px_28px_rgba(52,34,37,0.06)]'
                  }`}
                >
                  <div className={`relative h-[12.6rem] overflow-hidden rounded-2xl ${profile.tint}`}>
                    <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center px-4 pt-5">
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="h-[10.4rem] w-auto max-w-full object-contain"
                      />
                    </div>
                  </div>

                  <h3 className="mt-4 text-[1.18rem] font-bold leading-7 text-ink">{profile.name}</h3>
                  <p className="mt-2.5 text-[0.78rem] leading-[1.6rem] text-muted">
                    {profile.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-white">
          <div className={`${shellClassName} py-16 lg:py-[5.4rem]`}>
            <div className="text-center">
              <h2 className="text-[clamp(2rem,3vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.05em] text-ink">
                What Our Customers
                <br />
                Have To Say
              </h2>
              <p className="mx-auto mt-4 max-w-88 text-[0.82rem] leading-6 text-muted">
                Here&apos;s what our customers say with Bucheen
              </p>
            </div>

            <div className="mt-11 grid gap-4 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="rounded-2xl border border-line-soft bg-white px-4 py-4 shadow-[0_8px_18px_rgba(52,34,37,0.03)] lg:min-h-[10.4rem]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-badge text-[0.68rem] font-bold text-white">
                      {testimonial.name
                        .split(' ')
                        .map((part) => part[0])
                        .join('')}
                    </span>

                    <div>
                      <h3 className="text-[0.86rem] font-semibold text-ink">{testimonial.name}</h3>
                      <p className="text-[0.72rem] text-muted">{testimonial.role}</p>
                    </div>
                  </div>

                  <p className="mt-3 min-h-[6.7rem] text-[0.8rem] leading-[1.55rem] text-muted">
                    {testimonial.quote}
                  </p>
                  <p className="mt-3 text-[0.62rem] tracking-[0.22em] text-star" aria-label="5 star rating">
                    ★★★★★
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-footer-soft" id="contact">
        <div className={`${shellClassName} grid gap-8 py-12 lg:grid-cols-[1.18fr_0.68fr_0.62fr_0.84fr] lg:gap-x-6 lg:py-[4.4rem]`}>
          <div className="max-w-88">
            <BrandMark />
            <p className="mt-4 text-[0.95rem] leading-8 text-muted">
              The most accurate and simplest time tracking for all of you. and we have been serving
              for more than 4 years and have made you happy
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="lg:justify-self-end">
              <h3 className="text-[1.1rem] font-bold text-accent-soft">{column.title}</h3>
              <ul className="mt-4 space-y-1.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a className="text-[0.92rem] leading-8 text-muted transition hover:text-ink" href="#top">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:justify-self-end">
            <h3 className="text-[1.1rem] font-bold text-accent-soft">Contact us</h3>
            <ul className="mt-4 space-y-1.5">
              <ContactRow icon="phone">(021) 3258 4930</ContactRow>
              <ContactRow icon="mail">Pokan@Hola.com</ContactRow>
              <ContactRow icon="pin">
                <span className="block">Sukabumi, Jawa Barat</span>
                <span className="block">Indonesia, IDN</span>
              </ContactRow>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
