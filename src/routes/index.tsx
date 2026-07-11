import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock,
  Facebook,
  FlaskConical,
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Quote,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Youtube,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Counter } from "@/components/site/Counter";
import { Lightbox } from "@/components/site/Lightbox";
import { FloatingActions } from "@/components/site/FloatingActions";

import heroImg from "@/assets/hero-students.jpg";
import f1 from "@/assets/faculty-1.jpg";
import f2 from "@/assets/faculty-2.jpg";
import f3 from "@/assets/faculty-3.jpg";
import f4 from "@/assets/faculty-4.jpg";
import g1 from "@/assets/download.jfif";
import g2 from "@/assets/images (1).jfif";
import g3 from "@/assets/images (2).jfif";
import g4 from "@/assets/images.jfif";
import g5 from "@/assets/unnamed.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aaradhya Classes — Coaching Institute in Amraiwadi, Ahmedabad" },
      {
        name: "description",
        content:
          "Aaradhya Classes is a 4.8★ rated coaching institute in CTM, Amraiwadi, Ahmedabad offering expert tuition for Classes 8–10, Science, Commerce, board & competitive exams.",
      },
      { property: "og:title", content: "Aaradhya Classes — Coaching in Ahmedabad" },
      {
        property: "og:description",
        content: "Expert faculty, small batches, personalized attention & proven academic results.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Aaradhya Classes",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shubh Arcade, C.T.M, Amraiwadi",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            postalCode: "380026",
            addressCountry: "IN",
          },
          telephone: "+91-95589-02799",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "261",
          },
        }),
      },
    ],
  }),
  component: Index,
});

/* ---------------- Data ---------------- */

const heroFeatures = [
  "Experienced Faculty",
  "Personalized Learning",
  "Regular Tests & Assessments",
  "Excellent Student Results",
];

const highlights = [
  { icon: GraduationCap, title: "Experienced Teachers", desc: "Mentors with deep subject mastery and proven academic outcomes." },
  { icon: Users, title: "Small Batch Sizes", desc: "Focused classrooms that ensure every student is seen and heard." },
  { icon: Sparkles, title: "Concept-Based Learning", desc: "We build strong fundamentals — not just exam tricks." },
  { icon: MessageSquare, title: "Doubt Solving Sessions", desc: "Dedicated time slots to clarify every concept thoroughly." },
  { icon: TrendingUp, title: "Progress Tracking", desc: "Periodic assessments and performance analytics for each student." },
  { icon: Phone, title: "Parent Communication", desc: "Regular updates so parents stay involved in the learning journey." },
];

const courses = [
  { icon: BookOpen, title: "Classes 8 to 10", points: ["NCERT + GSEB syllabus", "Daily practice problems", "Foundation building"] },
  { icon: FlaskConical, title: "Science Stream", points: ["Physics, Chemistry, Maths, Biology", "Lab-aligned concepts", "Board + entrance focus"] },
  { icon: TrendingUp, title: "Commerce Stream", points: ["Accounts, Economics, Stats", "Case-based learning", "Real-world examples"] },
  { icon: ClipboardList, title: "Board Exam Preparation", points: ["Chapter-wise mock tests", "Answer-writing practice", "Previous year papers"] },
  { icon: Target, title: "Competitive Exams", points: ["NEET, JEE foundations", "Aptitude & reasoning", "Time-management drills"] },
  { icon: Award, title: "Foundation Courses", points: ["Olympiad readiness", "Critical thinking", "Early concept clarity"] },
];

const stats = [
  { value: 5000, suffix: "+", label: "Students Guided", icon: Users },
  { value: 95, suffix: "%", label: "Success Rate", icon: Trophy },
  { value: 10, suffix: "+", label: "Years of Excellence", icon: CalendarCheck },
  { value: 261, suffix: "+", label: "Positive Reviews", icon: Star },
];

const faculty = [
  { name: "Soham Sir", subject: "Physics", exp: "14+ Years", img: f1 },
  { name: "Mrs. Anjali Sharma", subject: "English & SST", exp: "11+ Years", img: f2 },
  { name: "Dr. Mehul Joshi", subject: "Science & Biology", exp: "13+ Years", img: f3 },
  { name: "Ms. Priya Mehta", subject: "Accounts & Commerce", exp: "9+ Years", img: f4 },
];

const testimonials = [
  { name: "Krishna P.", role: "Class 10 Student", text: "Best place for education. Teachers and staff are very cooperative and always ready to help.", rating: 5 },
  { name: "Aarav S.", role: "Science Stream", text: "Teachers are hardworking and always focus on students' bright future. Concepts are crystal clear.", rating: 5 },
  { name: "Riya M.", role: "Commerce Stream", text: "Excellent management and a supportive learning environment. My confidence has grown so much.", rating: 5 },
];

const gallery = [
  { src: g1, alt: "Classroom activities" },
  { src: g2, alt: "Teaching session" },
  { src: g3, alt: "Student achievements" },
  { src: g4, alt: "Events and celebrations" },
  { src: g5, alt: "Focused study time" },
];

const steps = [
  { n: "01", title: "Contact Us", desc: "Reach out via call or fill the inquiry form." },
  { n: "02", title: "Counseling Session", desc: "Discuss goals, current level, and the right course fit." },
  { n: "03", title: "Course Selection", desc: "Pick your batch, schedule, and learning track." },
  { n: "04", title: "Start Learning", desc: "Begin your journey with expert mentorship." },
];

const faqs = [
  { q: "Which classes do you offer?", a: "We offer coaching for Classes 8–10, Science & Commerce streams, board exam prep, competitive exam foundations, and Olympiad/foundation courses." },
  { q: "Do you provide demo lectures?", a: "Yes — every new student is welcome to a free demo class so you can experience our teaching style before enrolling." },
  { q: "How are batches managed?", a: "We keep batches small and grouped by class & subject so that each student receives personalized attention." },
  { q: "Do you conduct regular tests?", a: "Yes. We run weekly assessments, chapter tests, and full-length mock exams with detailed performance feedback." },
  { q: "How can parents track progress?", a: "Through periodic parent-teacher meetings, performance reports, and direct WhatsApp/phone updates from our faculty." },
];

/* ---------------- Page ---------------- */

function Index() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", phone: "", course: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Please enter your name";
    if (!/^\+?\d[\d\s-]{7,14}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number";
    if (!form.course.trim()) e.course = "Select a course of interest";
    if (form.message.length > 500) e.message = "Message too long";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      const waNumber = "919558902799";
      const text = `*New Inquiry from Website*\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Course:* ${form.course}${form.message ? `\n*Message:* ${form.message}` : ""}`;
      window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, "_blank");

      setSubmitted(true);
      setForm({ name: "", phone: "", course: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <FloatingActions />

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28"
      >
        <div
          aria-hidden
          className="absolute -top-24 -right-32 h-96 w-96 rounded-full bg-gradient-accent opacity-30 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-primary opacity-20 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:gap-8">
          <div style={{ animation: "var(--animate-fade-up)" }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold text-primary shadow-soft backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              4.8 Rated • 261+ Reviews on Google
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              Building Strong{" "}
              <span className="text-gradient-primary">Foundations</span>{" "}
              for Academic{" "}
              <span className="text-gradient-accent">Success</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Expert guidance, experienced faculty, personalized attention, and proven results to
              help students achieve their academic goals.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-[1.03]"
              >
                Enroll Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-primary/15 bg-card px-6 py-3.5 text-sm font-semibold text-primary shadow-soft transition-all hover:border-primary/40 hover:bg-secondary"
              >
                Book Free Demo Class
              </a>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {heroFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm font-medium">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="relative"
            style={{ animation: "var(--animate-scale-in)", animationDelay: "0.15s" }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-glow">
              <img
                src={heroImg}
                alt="Students learning at Aaradhya Classes"
                width={1536}
                height={1024}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-transparent" />
            </div>

            <div
              className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl bg-card p-3.5 shadow-card sm:flex"
              style={{ animation: "var(--animate-float)" }}
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-accent text-accent-foreground">
                <Trophy className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold">95% Success Rate</div>
                <div className="text-xs text-muted-foreground">Consistent results since 2014</div>
              </div>
            </div>

            <div
              className="absolute -top-5 right-4 hidden items-center gap-3 rounded-2xl bg-card p-3.5 shadow-card sm:flex"
              style={{ animation: "var(--animate-float)", animationDelay: "1s" }}
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <Users className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold">5,000+ Students</div>
                <div className="text-xs text-muted-foreground">Mentored & guided</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="About Us"
            title={<>Why Choose <span className="text-gradient-primary">Aaradhya Classes?</span></>}
            desc="Aaradhya Classes is dedicated to providing quality education and helping students achieve academic excellence through structured learning, experienced teachers, regular evaluations, and individual attention."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                style={{ animation: "var(--animate-fade-up)", animationDelay: `${i * 70}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                  <h.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{h.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Our Courses"
            title={<>Programs <span className="text-gradient-accent">Designed</span> for Every Learner</>}
            desc="From foundational classes to competitive exam prep — pick the track that fits your academic journey."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c, i) => (
              <div
                key={c.title}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
                style={{ animation: "var(--animate-fade-up)", animationDelay: `${i * 60}ms` }}
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <c.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
                <ul className="mt-4 space-y-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden py-20 lg:py-24">
        <div aria-hidden className="absolute inset-0 bg-gradient-primary" />
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-md"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="mt-4 text-4xl font-extrabold text-primary-foreground sm:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm font-medium text-primary-foreground/85">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section id="faculty" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Our Faculty"
            title={<>Meet Our <span className="text-gradient-primary">Expert Teachers</span></>}
            desc="Passionate educators with years of subject mastery, focused on every student's growth."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((m, i) => (
              <div
                key={m.name}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                style={{ animation: "var(--animate-fade-up)", animationDelay: `${i * 60}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    width={640}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-foreground/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold">{m.name}</h3>
                  <p className="text-sm text-primary">{m.subject}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{m.exp} Experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Testimonials"
            title={<>What Our <span className="text-gradient-accent">Students Say</span></>}
            desc="Real feedback from students and parents who chose Aaradhya Classes."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="relative rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                style={{ animation: "var(--animate-fade-up)", animationDelay: `${i * 80}ms` }}
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/10" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Gallery"
            title={<>Life at <span className="text-gradient-primary">Aaradhya</span></>}
            desc="A peek into our classrooms, sessions, and celebrations."
          />

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <button
                key={g.src}
                onClick={() => setLightbox(g)}
                className={`group relative overflow-hidden rounded-2xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-card ${
                  i === 0 ? "col-span-2 md:row-span-2" : ""
                }`}
                style={{ animation: "var(--animate-scale-in)", animationDelay: `${i * 60}ms` }}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={800}
                  height={800}
                  className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    i === 0 ? "aspect-[4/3] md:aspect-square" : "aspect-square"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 right-3 translate-y-2 text-left text-xs font-semibold text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {g.alt}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSION TIMELINE */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Admission Process"
            title={<>Get Started in <span className="text-gradient-accent">Four Simple Steps</span></>}
            desc="A smooth and friendly enrolment journey from inquiry to your first class."
          />

          <div className="relative mt-14 grid gap-8 md:grid-cols-4">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 md:block"
            />
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="relative text-center"
                style={{ animation: "var(--animate-fade-up)", animationDelay: `${i * 100}ms` }}
              >
                <div className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-base font-extrabold text-primary-foreground shadow-card ring-4 ring-background">
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeader
            eyebrow="FAQ"
            title={<>Frequently Asked <span className="text-gradient-primary">Questions</span></>}
            desc="Answers to the questions parents and students ask us most."
          />

          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={f.q}
                  className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold sm:text-base">{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
        <div aria-hidden className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Contact Us</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Ready to <span className="text-gradient-primary">Shape Your Future?</span>
            </h2>
            <p className="mt-3 text-base text-muted-foreground">Join Aaradhya Classes today.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {/* Info side */}
            <div className="space-y-4 lg:col-span-2">
              <InfoCard
                icon={Phone}
                title="Phone"
                lines={[<a key="p" href="tel:+919558902799" className="hover:text-primary">+91 95589 02799</a>]}
              />
              <InfoCard
                icon={MapPin}
                title="Address"
                lines={["Shubh Arcade, C.T.M, Amraiwadi,", "Ahmedabad, Gujarat 380026"]}
              />
              <InfoCard
                icon={Clock}
                title="Working Hours"
                lines={["Mon – Sat: 8:00 AM – 9:00 PM", "Sunday: 9:00 AM – 1:00 PM"]}
              />
              <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
                <iframe
                  title="Aaradhya Classes Map"
                  src="https://www.google.com/maps?q=Shubh+Arcade+CTM+Amraiwadi+Ahmedabad&output=embed"
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form side */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8 lg:col-span-3"
            >
              <h3 className="text-xl font-bold">Send Us an Inquiry</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill the form and we'll get back to you within a day.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  error={errors.name}
                  input={
                    <input
                      type="text"
                      value={form.name}
                      maxLength={80}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Arjun Patel"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15"
                    />
                  }
                />
                <Field
                  label="Phone Number"
                  error={errors.phone}
                  input={
                    <input
                      type="tel"
                      value={form.phone}
                      maxLength={16}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 9XXXXXXXXX"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15"
                    />
                  }
                />
                <div className="sm:col-span-2">
                  <Field
                    label="Course of Interest"
                    error={errors.course}
                    input={
                      <select
                        value={form.course}
                        onChange={(e) => setForm({ ...form, course: e.target.value })}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15"
                      >
                        <option value="">Select a course</option>
                        {courses.map((c) => (
                          <option key={c.title} value={c.title}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                    }
                  />
                </div>
                <div className="sm:col-span-2">
                  <Field
                    label="Message (optional)"
                    error={errors.message}
                    input={
                      <textarea
                        value={form.message}
                        maxLength={500}
                        rows={4}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your goals..."
                        className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15"
                      />
                    }
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-[1.01] sm:w-auto"
              >
                <Mail className="h-4 w-4" />
                Send Inquiry
              </button>

              {submitted && (
                <div
                  className="mt-4 flex items-center gap-2 rounded-xl bg-accent/10 px-4 py-3 text-sm font-medium text-accent"
                  style={{ animation: "var(--animate-fade-up)" }}
                >
                  <CheckCircle2 className="h-5 w-5" />
                  Thanks! We'll reach out shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary">
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="font-display text-lg font-bold">Aaradhya Classes</div>
              </div>
              <p className="mt-4 text-sm text-background/65">
                Building strong foundations for academic success — trusted by 5000+ students across
                Ahmedabad.
              </p>
              <div className="mt-5 flex gap-2">
                {[Facebook, Instagram, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="grid h-9 w-9 place-items-center rounded-lg bg-background/10 transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <FooterCol
              title="Quick Links"
              items={[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Gallery", href: "#gallery" },
                { label: "FAQ", href: "#contact" },
              ]}
            />
            <FooterCol
              title="Courses"
              items={courses.slice(0, 5).map((c) => ({ label: c.title, href: "#courses" }))}
            />

            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider">Contact</h4>
              <ul className="mt-4 space-y-3 text-sm text-background/70">
                <li className="flex gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  Shubh Arcade, C.T.M, Amraiwadi, Ahmedabad, 380026
                </li>
                <li className="flex gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a href="tel:+919558902799" className="hover:text-background">
                    +91 95589 02799
                  </a>
                </li>
                <li className="flex gap-2">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  Mon – Sat: 8 AM – 9 PM
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-background/10 pt-6 text-xs text-background/55 sm:flex-row">
            <p>© {new Date().getFullYear()} Aaradhya Classes. All rights reserved.</p>
            <p>Crafted with care in Ahmedabad, Gujarat.</p>
          </div>
        </div>
      </footer>

      <Lightbox src={lightbox?.src ?? null} alt={lightbox?.alt ?? ""} onClose={() => setLightbox(null)} />
    </div>
  );
}

/* ---------------- Helpers ---------------- */

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-3 text-base text-muted-foreground">{desc}</p>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: React.ReactNode[];
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <h4 className="text-sm font-bold">{title}</h4>
        <div className="mt-1 space-y-0.5 text-sm text-muted-foreground">
          {lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  input,
  error,
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-foreground/80">{label}</span>
      {input}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold uppercase tracking-wider">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm text-background/70">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} className="transition-colors hover:text-accent">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
