import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ArrowUp, Award, BookOpen, CalendarCheck, CheckCircle2, ChevronDown, ClipboardList, Clock, Facebook, FlaskConical, GraduationCap, Instagram, Mail, MapPin, Menu, MessageCircle, MessageSquare, Phone, Quote, Sparkles, Star, Target, TrendingUp, Trophy, Users, X, Youtube } from "lucide-react";
//#region src/components/site/Navbar.tsx
var links = [
	{
		href: "#home",
		label: "Home"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#courses",
		label: "Courses"
	},
	{
		href: "#faculty",
		label: "Faculty"
	},
	{
		href: "#gallery",
		label: "Gallery"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsx("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ jsxs("nav", {
				className: `flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${scrolled ? "glass shadow-soft" : "bg-transparent"}`,
				children: [
					/* @__PURE__ */ jsxs("a", {
						href: "#home",
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ jsx("div", {
							className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft",
							children: /* @__PURE__ */ jsx(GraduationCap, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-display text-base font-bold",
								children: "Aaradhya Classes"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-[11px] text-muted-foreground",
								children: "Ahmedabad • Since 2014"
							})]
						})]
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "hidden items-center gap-1 lg:flex",
						children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: l.href,
							className: "rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground",
							children: l.label
						}) }, l.href))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "tel:+919558902799",
							className: "hidden items-center gap-2 rounded-xl bg-gradient-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:scale-[1.03] sm:inline-flex",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), " Call Now"]
						}), /* @__PURE__ */ jsx("button", {
							"aria-label": "Toggle menu",
							onClick: () => setOpen((v) => !v),
							className: "grid h-10 w-10 place-items-center rounded-xl border border-border bg-card lg:hidden",
							children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
						})]
					})
				]
			}), open && /* @__PURE__ */ jsx("div", {
				className: "glass mt-2 rounded-2xl p-3 shadow-card lg:hidden",
				children: /* @__PURE__ */ jsx("ul", {
					className: "grid gap-1",
					children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: l.href,
						onClick: () => setOpen(false),
						className: "block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary",
						children: l.label
					}) }, l.href))
				})
			})]
		})
	});
}
//#endregion
//#region src/components/site/Counter.tsx
function Counter({ to, suffix = "", duration = 1800 }) {
	const [value, setValue] = useState(0);
	const ref = useRef(null);
	const started = useRef(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && !started.current) {
				started.current = true;
				const start = performance.now();
				const tick = (now) => {
					const p = Math.min((now - start) / duration, 1);
					const eased = 1 - Math.pow(1 - p, 3);
					setValue(Math.floor(eased * to));
					if (p < 1) requestAnimationFrame(tick);
					else setValue(to);
				};
				requestAnimationFrame(tick);
			}
		}, { threshold: .3 });
		obs.observe(el);
		return () => obs.disconnect();
	}, [to, duration]);
	return /* @__PURE__ */ jsxs("span", {
		ref,
		children: [value.toLocaleString(), suffix]
	});
}
//#endregion
//#region src/components/site/Lightbox.tsx
function Lightbox({ src, alt, onClose }) {
	useEffect(() => {
		const onKey = (e) => e.key === "Escape" && onClose();
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = src ? "hidden" : "";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [src, onClose]);
	if (!src) return null;
	return /* @__PURE__ */ jsxs("div", {
		onClick: onClose,
		className: "fixed inset-0 z-[100] grid place-items-center bg-foreground/85 p-4 backdrop-blur-md",
		style: { animation: "fade-in 0.2s ease-out both" },
		children: [/* @__PURE__ */ jsx("button", {
			"aria-label": "Close",
			className: "absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-card text-foreground shadow-card",
			children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
		}), /* @__PURE__ */ jsx("img", {
			src,
			alt,
			onClick: (e) => e.stopPropagation(),
			className: "max-h-[88vh] max-w-[92vw] rounded-2xl shadow-glow",
			style: { animation: "scale-in 0.3s cubic-bezier(0.16,1,0.3,1) both" }
		})]
	});
}
//#endregion
//#region src/components/site/FloatingActions.tsx
function FloatingActions() {
	const [show, setShow] = useState(false);
	useEffect(() => {
		const onScroll = () => setShow(window.scrollY > 500);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3",
		children: [
			show && /* @__PURE__ */ jsx("button", {
				"aria-label": "Scroll to top",
				onClick: () => window.scrollTo({
					top: 0,
					behavior: "smooth"
				}),
				className: "grid h-11 w-11 place-items-center rounded-full bg-card text-foreground shadow-card transition-transform hover:scale-110",
				style: { animation: "scale-in 0.3s ease-out both" },
				children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ jsx("a", {
				href: "tel:+919558902799",
				"aria-label": "Call now",
				className: "grid h-12 w-12 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-card transition-transform hover:scale-110",
				children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ jsx("a", {
				href: "https://wa.me/919558902799?text=Hi%20Aaradhya%20Classes%2C%20I%27d%20like%20to%20know%20more%20about%20your%20courses.",
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": "Chat on WhatsApp",
				className: "relative grid h-14 w-14 place-items-center rounded-full text-white shadow-card transition-transform hover:scale-110",
				style: {
					background: "#25D366",
					animation: "pulse-glow 2.4s ease-in-out infinite"
				},
				children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" })
			})
		]
	});
}
//#endregion
//#region src/assets/hero-students.jpg
var hero_students_default = "/assets/hero-students-C6vpggJp.jpg";
//#endregion
//#region src/assets/faculty-1.jpg
var faculty_1_default = "/assets/faculty-1-VXMhCPfi.jpg";
//#endregion
//#region src/assets/faculty-2.jpg
var faculty_2_default = "/assets/faculty-2-Ba1qXWmA.jpg";
//#endregion
//#region src/assets/faculty-3.jpg
var faculty_3_default = "/assets/faculty-3-DYgFixHk.jpg";
//#endregion
//#region src/assets/faculty-4.jpg
var faculty_4_default = "/assets/faculty-4-DEdRsUfI.jpg";
//#endregion
//#region src/assets/download.jfif
var download_default = "/assets/download-CR10VAyE.jfif";
//#endregion
//#region src/assets/images (1).jfif
var images__1__default = "/assets/images%20(1)-BcmNWY8I.jfif";
//#endregion
//#region src/assets/images (2).jfif
var images__2__default = "/assets/images%20(2)-JdLCgiOV.jfif";
//#endregion
//#region src/assets/images.jfif
var images_default = "/assets/images-D1dG5hrw.jfif";
//#endregion
//#region src/assets/unnamed.webp
var unnamed_default = "/assets/unnamed-B1fDfqjs.webp";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var heroFeatures = [
	"Experienced Faculty",
	"Personalized Learning",
	"Regular Tests & Assessments",
	"Excellent Student Results"
];
var highlights = [
	{
		icon: GraduationCap,
		title: "Experienced Teachers",
		desc: "Mentors with deep subject mastery and proven academic outcomes."
	},
	{
		icon: Users,
		title: "Small Batch Sizes",
		desc: "Focused classrooms that ensure every student is seen and heard."
	},
	{
		icon: Sparkles,
		title: "Concept-Based Learning",
		desc: "We build strong fundamentals — not just exam tricks."
	},
	{
		icon: MessageSquare,
		title: "Doubt Solving Sessions",
		desc: "Dedicated time slots to clarify every concept thoroughly."
	},
	{
		icon: TrendingUp,
		title: "Progress Tracking",
		desc: "Periodic assessments and performance analytics for each student."
	},
	{
		icon: Phone,
		title: "Parent Communication",
		desc: "Regular updates so parents stay involved in the learning journey."
	}
];
var courses = [
	{
		icon: BookOpen,
		title: "Classes 8 to 10",
		points: [
			"NCERT + GSEB syllabus",
			"Daily practice problems",
			"Foundation building"
		]
	},
	{
		icon: FlaskConical,
		title: "Science Stream",
		points: [
			"Physics, Chemistry, Maths, Biology",
			"Lab-aligned concepts",
			"Board + entrance focus"
		]
	},
	{
		icon: TrendingUp,
		title: "Commerce Stream",
		points: [
			"Accounts, Economics, Stats",
			"Case-based learning",
			"Real-world examples"
		]
	},
	{
		icon: ClipboardList,
		title: "Board Exam Preparation",
		points: [
			"Chapter-wise mock tests",
			"Answer-writing practice",
			"Previous year papers"
		]
	},
	{
		icon: Target,
		title: "Competitive Exams",
		points: [
			"NEET, JEE foundations",
			"Aptitude & reasoning",
			"Time-management drills"
		]
	},
	{
		icon: Award,
		title: "Foundation Courses",
		points: [
			"Olympiad readiness",
			"Critical thinking",
			"Early concept clarity"
		]
	}
];
var stats = [
	{
		value: 5e3,
		suffix: "+",
		label: "Students Guided",
		icon: Users
	},
	{
		value: 95,
		suffix: "%",
		label: "Success Rate",
		icon: Trophy
	},
	{
		value: 10,
		suffix: "+",
		label: "Years of Excellence",
		icon: CalendarCheck
	},
	{
		value: 261,
		suffix: "+",
		label: "Positive Reviews",
		icon: Star
	}
];
var faculty = [
	{
		name: "Soham Sir",
		subject: "Physics",
		exp: "14+ Years",
		img: faculty_1_default
	},
	{
		name: "Mrs. Anjali Sharma",
		subject: "English & SST",
		exp: "11+ Years",
		img: faculty_2_default
	},
	{
		name: "Dr. Mehul Joshi",
		subject: "Science & Biology",
		exp: "13+ Years",
		img: faculty_3_default
	},
	{
		name: "Ms. Priya Mehta",
		subject: "Accounts & Commerce",
		exp: "9+ Years",
		img: faculty_4_default
	}
];
var testimonials = [
	{
		name: "Krishna P.",
		role: "Class 10 Student",
		text: "Best place for education. Teachers and staff are very cooperative and always ready to help.",
		rating: 5
	},
	{
		name: "Aarav S.",
		role: "Science Stream",
		text: "Teachers are hardworking and always focus on students' bright future. Concepts are crystal clear.",
		rating: 5
	},
	{
		name: "Riya M.",
		role: "Commerce Stream",
		text: "Excellent management and a supportive learning environment. My confidence has grown so much.",
		rating: 5
	}
];
var gallery = [
	{
		src: download_default,
		alt: "Classroom activities"
	},
	{
		src: images__1__default,
		alt: "Teaching session"
	},
	{
		src: images__2__default,
		alt: "Student achievements"
	},
	{
		src: images_default,
		alt: "Events and celebrations"
	},
	{
		src: unnamed_default,
		alt: "Focused study time"
	}
];
var steps = [
	{
		n: "01",
		title: "Contact Us",
		desc: "Reach out via call or fill the inquiry form."
	},
	{
		n: "02",
		title: "Counseling Session",
		desc: "Discuss goals, current level, and the right course fit."
	},
	{
		n: "03",
		title: "Course Selection",
		desc: "Pick your batch, schedule, and learning track."
	},
	{
		n: "04",
		title: "Start Learning",
		desc: "Begin your journey with expert mentorship."
	}
];
var faqs = [
	{
		q: "Which classes do you offer?",
		a: "We offer coaching for Classes 8–10, Science & Commerce streams, board exam prep, competitive exam foundations, and Olympiad/foundation courses."
	},
	{
		q: "Do you provide demo lectures?",
		a: "Yes — every new student is welcome to a free demo class so you can experience our teaching style before enrolling."
	},
	{
		q: "How are batches managed?",
		a: "We keep batches small and grouped by class & subject so that each student receives personalized attention."
	},
	{
		q: "Do you conduct regular tests?",
		a: "Yes. We run weekly assessments, chapter tests, and full-length mock exams with detailed performance feedback."
	},
	{
		q: "How can parents track progress?",
		a: "Through periodic parent-teacher meetings, performance reports, and direct WhatsApp/phone updates from our faculty."
	}
];
function Index() {
	const [lightbox, setLightbox] = useState(null);
	const [openFaq, setOpenFaq] = useState(0);
	const [form, setForm] = useState({
		name: "",
		phone: "",
		course: "",
		message: ""
	});
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const validate = () => {
		const e = {};
		if (!form.name.trim() || form.name.trim().length < 2) e.name = "Please enter your name";
		if (!/^\+?\d[\d\s-]{7,14}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number";
		if (!form.course.trim()) e.course = "Select a course of interest";
		if (form.message.length > 500) e.message = "Message too long";
		return e;
	};
	const handleSubmit = (ev) => {
		ev.preventDefault();
		const e = validate();
		setErrors(e);
		if (Object.keys(e).length === 0) {
			const waNumber = "919558902799";
			const text = `*New Inquiry from Website*\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Course:* ${form.course}${form.message ? `\n*Message:* ${form.message}` : ""}`;
			window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, "_blank");
			setSubmitted(true);
			setForm({
				name: "",
				phone: "",
				course: "",
				message: ""
			});
			setTimeout(() => setSubmitted(false), 5e3);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx(FloatingActions, {}),
			/* @__PURE__ */ jsxs("section", {
				id: "home",
				className: "relative overflow-hidden bg-gradient-hero pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28",
				children: [
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": true,
						className: "absolute -top-24 -right-32 h-96 w-96 rounded-full bg-gradient-accent opacity-30 blur-3xl"
					}),
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": true,
						className: "absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-primary opacity-20 blur-3xl"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:gap-8",
						children: [/* @__PURE__ */ jsxs("div", {
							style: { animation: "var(--animate-fade-up)" },
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold text-primary shadow-soft backdrop-blur",
									children: [/* @__PURE__ */ jsx(Star, { className: "h-3.5 w-3.5 fill-accent text-accent" }), "4.8 Rated • 261+ Reviews on Google"]
								}),
								/* @__PURE__ */ jsxs("h1", {
									className: "mt-5 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl",
									children: [
										"Building Strong",
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-gradient-primary",
											children: "Foundations"
										}),
										" ",
										"for Academic",
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-gradient-accent",
											children: "Success"
										})
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-5 max-w-xl text-base text-muted-foreground sm:text-lg",
									children: "Expert guidance, experienced faculty, personalized attention, and proven results to help students achieve their academic goals."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-7 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ jsxs("a", {
										href: "#contact",
										className: "group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-[1.03]",
										children: ["Enroll Now", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
									}), /* @__PURE__ */ jsx("a", {
										href: "#contact",
										className: "inline-flex items-center gap-2 rounded-xl border-2 border-primary/15 bg-card px-6 py-3.5 text-sm font-semibold text-primary shadow-soft transition-all hover:border-primary/40 hover:bg-secondary",
										children: "Book Free Demo Class"
									})]
								}),
								/* @__PURE__ */ jsx("ul", {
									className: "mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2",
									children: heroFeatures.map((f) => /* @__PURE__ */ jsxs("li", {
										className: "flex items-center gap-2.5 text-sm font-medium",
										children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 shrink-0 text-accent" }), f]
									}, f))
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "relative",
							style: {
								animation: "var(--animate-scale-in)",
								animationDelay: "0.15s"
							},
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "relative overflow-hidden rounded-3xl shadow-glow",
									children: [/* @__PURE__ */ jsx("img", {
										src: hero_students_default,
										alt: "Students learning at Aaradhya Classes",
										width: 1536,
										height: 1024,
										className: "aspect-[4/3] w-full object-cover"
									}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-transparent" })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl bg-card p-3.5 shadow-card sm:flex",
									style: { animation: "var(--animate-float)" },
									children: [/* @__PURE__ */ jsx("div", {
										className: "grid h-11 w-11 place-items-center rounded-xl bg-gradient-accent text-accent-foreground",
										children: /* @__PURE__ */ jsx(Trophy, { className: "h-5 w-5" })
									}), /* @__PURE__ */ jsxs("div", {
										className: "leading-tight",
										children: [/* @__PURE__ */ jsx("div", {
											className: "text-sm font-bold",
											children: "95% Success Rate"
										}), /* @__PURE__ */ jsx("div", {
											className: "text-xs text-muted-foreground",
											children: "Consistent results since 2014"
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute -top-5 right-4 hidden items-center gap-3 rounded-2xl bg-card p-3.5 shadow-card sm:flex",
									style: {
										animation: "var(--animate-float)",
										animationDelay: "1s"
									},
									children: [/* @__PURE__ */ jsx("div", {
										className: "grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground",
										children: /* @__PURE__ */ jsx(Users, { className: "h-5 w-5" })
									}), /* @__PURE__ */ jsxs("div", {
										className: "leading-tight",
										children: [/* @__PURE__ */ jsx("div", {
											className: "text-sm font-bold",
											children: "5,000+ Students"
										}), /* @__PURE__ */ jsx("div", {
											className: "text-xs text-muted-foreground",
											children: "Mentored & guided"
										})]
									})]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				id: "about",
				className: "py-20 lg:py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4",
					children: [/* @__PURE__ */ jsx(SectionHeader, {
						eyebrow: "About Us",
						title: /* @__PURE__ */ jsxs(Fragment, { children: ["Why Choose ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient-primary",
							children: "Aaradhya Classes?"
						})] }),
						desc: "Aaradhya Classes is dedicated to providing quality education and helping students achieve academic excellence through structured learning, experienced teachers, regular evaluations, and individual attention."
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: highlights.map((h, i) => /* @__PURE__ */ jsxs("div", {
							className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card",
							style: {
								animation: "var(--animate-fade-up)",
								animationDelay: `${i * 70}ms`
							},
							children: [
								/* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-1 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-100" }),
								/* @__PURE__ */ jsx("div", {
									className: "grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground",
									children: /* @__PURE__ */ jsx(h.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-5 text-lg font-bold",
									children: h.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
									children: h.desc
								})
							]
						}, h.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "courses",
				className: "bg-secondary/40 py-20 lg:py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4",
					children: [/* @__PURE__ */ jsx(SectionHeader, {
						eyebrow: "Our Courses",
						title: /* @__PURE__ */ jsxs(Fragment, { children: [
							"Programs ",
							/* @__PURE__ */ jsx("span", {
								className: "text-gradient-accent",
								children: "Designed"
							}),
							" for Every Learner"
						] }),
						desc: "From foundational classes to competitive exam prep — pick the track that fits your academic journey."
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: courses.map((c, i) => /* @__PURE__ */ jsxs("div", {
							className: "group relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card",
							style: {
								animation: "var(--animate-fade-up)",
								animationDelay: `${i * 60}ms`
							},
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform group-hover:scale-110 group-hover:rotate-3",
									children: /* @__PURE__ */ jsx(c.icon, { className: "h-7 w-7" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-5 text-xl font-bold",
									children: c.title
								}),
								/* @__PURE__ */ jsx("ul", {
									className: "mt-4 space-y-2",
									children: c.points.map((p) => /* @__PURE__ */ jsxs("li", {
										className: "flex items-start gap-2 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), p]
									}, p))
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "#contact",
									className: "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent",
									children: ["Learn More ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						}, c.title))
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative overflow-hidden py-20 lg:py-24",
				children: [
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": true,
						className: "absolute inset-0 bg-gradient-primary"
					}),
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": true,
						className: "absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "relative mx-auto max-w-7xl px-4",
						children: /* @__PURE__ */ jsx("div", {
							className: "grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4",
							children: stats.map((s) => /* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-md",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "mx-auto grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-primary-foreground",
										children: /* @__PURE__ */ jsx(s.icon, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-4 text-4xl font-extrabold text-primary-foreground sm:text-5xl",
										children: /* @__PURE__ */ jsx(Counter, {
											to: s.value,
											suffix: s.suffix
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-1 text-sm font-medium text-primary-foreground/85",
										children: s.label
									})
								]
							}, s.label))
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				id: "faculty",
				className: "py-20 lg:py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4",
					children: [/* @__PURE__ */ jsx(SectionHeader, {
						eyebrow: "Our Faculty",
						title: /* @__PURE__ */ jsxs(Fragment, { children: ["Meet Our ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient-primary",
							children: "Expert Teachers"
						})] }),
						desc: "Passionate educators with years of subject mastery, focused on every student's growth."
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: faculty.map((m, i) => /* @__PURE__ */ jsxs("div", {
							className: "group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card",
							style: {
								animation: "var(--animate-fade-up)",
								animationDelay: `${i * 60}ms`
							},
							children: [/* @__PURE__ */ jsxs("div", {
								className: "relative aspect-[4/5] overflow-hidden bg-secondary",
								children: [/* @__PURE__ */ jsx("img", {
									src: m.img,
									alt: m.name,
									loading: "lazy",
									width: 640,
									height: 768,
									className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								}), /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-foreground/60 to-transparent" })]
							}), /* @__PURE__ */ jsxs("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ jsx("h3", {
										className: "text-base font-bold",
										children: m.name
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-primary",
										children: m.subject
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: [m.exp, " Experience"]
									})
								]
							})]
						}, m.name))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-secondary/40 py-20 lg:py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4",
					children: [/* @__PURE__ */ jsx(SectionHeader, {
						eyebrow: "Testimonials",
						title: /* @__PURE__ */ jsxs(Fragment, { children: ["What Our ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient-accent",
							children: "Students Say"
						})] }),
						desc: "Real feedback from students and parents who chose Aaradhya Classes."
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-12 grid gap-6 md:grid-cols-3",
						children: testimonials.map((t, i) => /* @__PURE__ */ jsxs("div", {
							className: "relative rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card",
							style: {
								animation: "var(--animate-fade-up)",
								animationDelay: `${i * 80}ms`
							},
							children: [
								/* @__PURE__ */ jsx(Quote, { className: "absolute right-6 top-6 h-10 w-10 text-primary/10" }),
								/* @__PURE__ */ jsx("div", {
									className: "flex gap-0.5",
									children: Array.from({ length: t.rating }).map((_, j) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-accent text-accent" }, j))
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "mt-4 text-sm leading-relaxed text-foreground/85",
									children: [
										"\"",
										t.text,
										"\""
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("div", {
										className: "grid h-11 w-11 place-items-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground",
										children: t.name.charAt(0)
									}), /* @__PURE__ */ jsxs("div", {
										className: "leading-tight",
										children: [/* @__PURE__ */ jsx("div", {
											className: "text-sm font-bold",
											children: t.name
										}), /* @__PURE__ */ jsx("div", {
											className: "text-xs text-muted-foreground",
											children: t.role
										})]
									})]
								})
							]
						}, t.name))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "gallery",
				className: "py-20 lg:py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4",
					children: [/* @__PURE__ */ jsx(SectionHeader, {
						eyebrow: "Gallery",
						title: /* @__PURE__ */ jsxs(Fragment, { children: ["Life at ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient-primary",
							children: "Aaradhya"
						})] }),
						desc: "A peek into our classrooms, sessions, and celebrations."
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-4",
						children: gallery.map((g, i) => /* @__PURE__ */ jsxs("button", {
							onClick: () => setLightbox(g),
							className: `group relative overflow-hidden rounded-2xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-card ${i === 0 ? "col-span-2 md:row-span-2" : ""}`,
							style: {
								animation: "var(--animate-scale-in)",
								animationDelay: `${i * 60}ms`
							},
							children: [
								/* @__PURE__ */ jsx("img", {
									src: g.src,
									alt: g.alt,
									loading: "lazy",
									width: 800,
									height: 800,
									className: `h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 ${i === 0 ? "aspect-[4/3] md:aspect-square" : "aspect-square"}`
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent opacity-0 transition-opacity group-hover:opacity-100" }),
								/* @__PURE__ */ jsx("div", {
									className: "absolute bottom-3 left-3 right-3 translate-y-2 text-left text-xs font-semibold text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100",
									children: g.alt
								})
							]
						}, g.src))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-secondary/40 py-20 lg:py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4",
					children: [/* @__PURE__ */ jsx(SectionHeader, {
						eyebrow: "Admission Process",
						title: /* @__PURE__ */ jsxs(Fragment, { children: ["Get Started in ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient-accent",
							children: "Four Simple Steps"
						})] }),
						desc: "A smooth and friendly enrolment journey from inquiry to your first class."
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative mt-14 grid gap-8 md:grid-cols-4",
						children: [/* @__PURE__ */ jsx("div", {
							"aria-hidden": true,
							className: "absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 md:block"
						}), steps.map((s, i) => /* @__PURE__ */ jsxs("div", {
							className: "relative text-center",
							style: {
								animation: "var(--animate-fade-up)",
								animationDelay: `${i * 100}ms`
							},
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-base font-extrabold text-primary-foreground shadow-card ring-4 ring-background",
									children: s.n
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-5 text-lg font-bold",
									children: s.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1.5 text-sm text-muted-foreground",
									children: s.desc
								})
							]
						}, s.n))]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-20 lg:py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-3xl px-4",
					children: [/* @__PURE__ */ jsx(SectionHeader, {
						eyebrow: "FAQ",
						title: /* @__PURE__ */ jsxs(Fragment, { children: ["Frequently Asked ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient-primary",
							children: "Questions"
						})] }),
						desc: "Answers to the questions parents and students ask us most."
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-10 space-y-3",
						children: faqs.map((f, i) => {
							const open = openFaq === i;
							return /* @__PURE__ */ jsxs("div", {
								className: "overflow-hidden rounded-2xl border border-border bg-card shadow-soft",
								children: [/* @__PURE__ */ jsxs("button", {
									onClick: () => setOpenFaq(open ? null : i),
									className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-sm font-semibold sm:text-base",
										children: f.q
									}), /* @__PURE__ */ jsx(ChevronDown, { className: `h-5 w-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}` })]
								}), /* @__PURE__ */ jsx("div", {
									className: `grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
									children: /* @__PURE__ */ jsx("div", {
										className: "overflow-hidden",
										children: /* @__PURE__ */ jsx("p", {
											className: "px-5 pb-5 text-sm leading-relaxed text-muted-foreground",
											children: f.a
										})
									})
								})]
							}, f.q);
						})
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "contact",
				className: "relative overflow-hidden py-20 lg:py-28",
				children: [/* @__PURE__ */ jsx("div", {
					"aria-hidden": true,
					className: "absolute inset-0 bg-gradient-hero"
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto max-w-7xl px-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-xs font-bold uppercase tracking-[0.18em] text-accent",
								children: "Contact Us"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl",
								children: ["Ready to ", /* @__PURE__ */ jsx("span", {
									className: "text-gradient-primary",
									children: "Shape Your Future?"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-base text-muted-foreground",
								children: "Join Aaradhya Classes today."
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-12 grid gap-6 lg:grid-cols-5",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "space-y-4 lg:col-span-2",
							children: [
								/* @__PURE__ */ jsx(InfoCard, {
									icon: Phone,
									title: "Phone",
									lines: [/* @__PURE__ */ jsx("a", {
										href: "tel:+919558902799",
										className: "hover:text-primary",
										children: "+91 95589 02799"
									}, "p")]
								}),
								/* @__PURE__ */ jsx(InfoCard, {
									icon: MapPin,
									title: "Address",
									lines: ["Shubh Arcade, C.T.M, Amraiwadi,", "Ahmedabad, Gujarat 380026"]
								}),
								/* @__PURE__ */ jsx(InfoCard, {
									icon: Clock,
									title: "Working Hours",
									lines: ["Mon – Sat: 8:00 AM – 9:00 PM", "Sunday: 9:00 AM – 1:00 PM"]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "overflow-hidden rounded-2xl border border-border shadow-soft",
									children: /* @__PURE__ */ jsx("iframe", {
										title: "Aaradhya Classes Map",
										src: "https://www.google.com/maps?q=Shubh+Arcade+CTM+Amraiwadi+Ahmedabad&output=embed",
										className: "h-56 w-full",
										loading: "lazy",
										referrerPolicy: "no-referrer-when-downgrade"
									})
								})
							]
						}), /* @__PURE__ */ jsxs("form", {
							onSubmit: handleSubmit,
							noValidate: true,
							className: "rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8 lg:col-span-3",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "text-xl font-bold",
									children: "Send Us an Inquiry"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Fill the form and we'll get back to you within a day."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 grid gap-4 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ jsx(Field, {
											label: "Full Name",
											error: errors.name,
											input: /* @__PURE__ */ jsx("input", {
												type: "text",
												value: form.name,
												maxLength: 80,
												onChange: (e) => setForm({
													...form,
													name: e.target.value
												}),
												placeholder: "e.g. Arjun Patel",
												className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15"
											})
										}),
										/* @__PURE__ */ jsx(Field, {
											label: "Phone Number",
											error: errors.phone,
											input: /* @__PURE__ */ jsx("input", {
												type: "tel",
												value: form.phone,
												maxLength: 16,
												onChange: (e) => setForm({
													...form,
													phone: e.target.value
												}),
												placeholder: "+91 9XXXXXXXXX",
												className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15"
											})
										}),
										/* @__PURE__ */ jsx("div", {
											className: "sm:col-span-2",
											children: /* @__PURE__ */ jsx(Field, {
												label: "Course of Interest",
												error: errors.course,
												input: /* @__PURE__ */ jsxs("select", {
													value: form.course,
													onChange: (e) => setForm({
														...form,
														course: e.target.value
													}),
													className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15",
													children: [/* @__PURE__ */ jsx("option", {
														value: "",
														children: "Select a course"
													}), courses.map((c) => /* @__PURE__ */ jsx("option", {
														value: c.title,
														children: c.title
													}, c.title))]
												})
											})
										}),
										/* @__PURE__ */ jsx("div", {
											className: "sm:col-span-2",
											children: /* @__PURE__ */ jsx(Field, {
												label: "Message (optional)",
												error: errors.message,
												input: /* @__PURE__ */ jsx("textarea", {
													value: form.message,
													maxLength: 500,
													rows: 4,
													onChange: (e) => setForm({
														...form,
														message: e.target.value
													}),
													placeholder: "Tell us about your goals...",
													className: "w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15"
												})
											})
										})
									]
								}),
								/* @__PURE__ */ jsxs("button", {
									type: "submit",
									className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-[1.01] sm:w-auto",
									children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }), "Send Inquiry"]
								}),
								submitted && /* @__PURE__ */ jsxs("div", {
									className: "mt-4 flex items-center gap-2 rounded-xl bg-accent/10 px-4 py-3 text-sm font-medium text-accent",
									style: { animation: "var(--animate-fade-up)" },
									children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }), "Thanks! We'll reach out shortly."]
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "bg-foreground text-background",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 py-14",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "grid gap-10 md:grid-cols-4",
						children: [
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ jsx("div", {
										className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary",
										children: /* @__PURE__ */ jsx(GraduationCap, { className: "h-5 w-5 text-primary-foreground" })
									}), /* @__PURE__ */ jsx("div", {
										className: "font-display text-lg font-bold",
										children: "Aaradhya Classes"
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-sm text-background/65",
									children: "Building strong foundations for academic success — trusted by 5000+ students across Ahmedabad."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-5 flex gap-2",
									children: [
										Facebook,
										Instagram,
										Youtube
									].map((Icon, i) => /* @__PURE__ */ jsx("a", {
										href: "#",
										"aria-label": "Social link",
										className: "grid h-9 w-9 place-items-center rounded-lg bg-background/10 transition-colors hover:bg-accent hover:text-accent-foreground",
										children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
									}, i))
								})
							] }),
							/* @__PURE__ */ jsx(FooterCol, {
								title: "Quick Links",
								items: [
									{
										label: "Home",
										href: "#home"
									},
									{
										label: "About",
										href: "#about"
									},
									{
										label: "Gallery",
										href: "#gallery"
									},
									{
										label: "FAQ",
										href: "#contact"
									}
								]
							}),
							/* @__PURE__ */ jsx(FooterCol, {
								title: "Courses",
								items: courses.slice(0, 5).map((c) => ({
									label: c.title,
									href: "#courses"
								}))
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "font-display text-sm font-bold uppercase tracking-wider",
								children: "Contact"
							}), /* @__PURE__ */ jsxs("ul", {
								className: "mt-4 space-y-3 text-sm text-background/70",
								children: [
									/* @__PURE__ */ jsxs("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), "Shubh Arcade, C.T.M, Amraiwadi, Ahmedabad, 380026"]
									}),
									/* @__PURE__ */ jsxs("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ jsx(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ jsx("a", {
											href: "tel:+919558902799",
											className: "hover:text-background",
											children: "+91 95589 02799"
										})]
									}),
									/* @__PURE__ */ jsxs("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ jsx(Clock, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), "Mon – Sat: 8 AM – 9 PM"]
									})
								]
							})] })
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-12 flex flex-col items-center justify-between gap-3 border-t border-background/10 pt-6 text-xs text-background/55 sm:flex-row",
						children: [/* @__PURE__ */ jsxs("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Aaradhya Classes. All rights reserved."
						] }), /* @__PURE__ */ jsx("p", { children: "Crafted with care in Ahmedabad, Gujarat." })]
					})]
				})
			}),
			/* @__PURE__ */ jsx(Lightbox, {
				src: lightbox?.src ?? null,
				alt: lightbox?.alt ?? "",
				onClose: () => setLightbox(null)
			})
		]
	});
}
function SectionHeader({ eyebrow, title, desc }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-2xl text-center",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "text-xs font-bold uppercase tracking-[0.18em] text-accent",
				children: eyebrow
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl",
				children: title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-3 text-base text-muted-foreground",
				children: desc
			})
		]
	});
}
function InfoCard({ icon: Icon, title, lines }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft",
		children: [/* @__PURE__ */ jsx("div", {
			className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground",
			children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ jsx("h4", {
				className: "text-sm font-bold",
				children: title
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-1 space-y-0.5 text-sm text-muted-foreground",
				children: lines.map((l, i) => /* @__PURE__ */ jsx("div", { children: l }, i))
			})]
		})]
	});
}
function Field({ label, input, error }) {
	return /* @__PURE__ */ jsxs("label", {
		className: "block",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "mb-1.5 block text-xs font-semibold text-foreground/80",
				children: label
			}),
			input,
			error && /* @__PURE__ */ jsx("span", {
				className: "mt-1 block text-xs text-destructive",
				children: error
			})
		]
	});
}
function FooterCol({ title, items }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
		className: "font-display text-sm font-bold uppercase tracking-wider",
		children: title
	}), /* @__PURE__ */ jsx("ul", {
		className: "mt-4 space-y-2.5 text-sm text-background/70",
		children: items.map((i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
			href: i.href,
			className: "transition-colors hover:text-accent",
			children: i.label
		}) }, i.label))
	})] });
}
//#endregion
export { Index as component };
