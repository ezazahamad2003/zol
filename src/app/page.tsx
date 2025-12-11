"use client";

import { useState } from "react";
import { 
  Menu, 
  X, 
  Check, 
  Zap, 
  BarChart3, 
  Bot, 
  FileText, 
  MessageSquare, 
  ArrowRight, 
  Clock, 
  Users, 
  Mail,
  ChevronDown,
  LayoutDashboard,
  TrendingUp,
  Inbox,
  Phone
} from "lucide-react";

// --- Components ---

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-white">Zol</span>
            <span className="hidden text-sm font-medium text-slate-400 sm:inline-block">
              AI Automation Studio
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://calendar.app.google/onX8sBzJshWxz2jD9"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-slate-950 transition-transform hover:scale-105 hover:bg-green-400"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#020617] md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://calendar.app.google/onX8sBzJshWxz2jD9"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-4 block w-full rounded-md bg-green-500 px-3 py-3 text-center text-base font-semibold text-slate-950 hover:bg-green-400"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#4C1D95] via-[#0F172A] to-[#020617] opacity-60" />
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ship AI automations in <span className="text-green-400">days</span>, not quarters.
            </h1>
            <p className="mt-6 text-lg text-slate-300 sm:text-xl max-w-2xl mx-auto lg:mx-0">
              Zol Solutions builds and deploys done-for-you AI systems that cut manual work, follow up with leads, and streamline operations for small & mid-sized businesses.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "3–10 day delivery sprints",
                "Custom AI workflows, not generic chatbots",
                "Designed to actually increase revenue or reduce workload",
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20">
                    <Check className="h-4 w-4 text-green-400" />
                  </div>
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="https://calendar.app.google/onX8sBzJshWxz2jD9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-green-500 px-8 py-3.5 text-center text-base font-bold text-slate-950 shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-transform hover:scale-105 hover:bg-green-400 sm:w-auto"
              >
                Book a Free 30-Minute Strategy Call
              </a>
          <a
                href="#results"
                className="w-full rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                See What We’ve Built
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                "Based in Chico, California",
                "Built by engineers, not consultants",
                "3–10 day delivery",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-full bg-indigo-900/30 px-3 py-1 text-xs font-medium text-indigo-200 ring-1 ring-inset ring-indigo-500/30"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Dashboard */}
          <div className="relative hidden lg:block">
            {/* Fake Dashboard Card */}
            <div className="relative rounded-2xl border border-white/10 bg-[#0F172A]/80 p-6 backdrop-blur-xl shadow-2xl ring-1 ring-white/5">
              {/* Header */}
              <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Auto-Pilot Dashboard</div>
                    <div className="text-xs text-slate-400">Live System Status</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Active
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <Users className="h-4 w-4" />
                    <span className="text-xs font-medium">Leads Auto-Followed</span>
                  </div>
                  <div className="text-2xl font-bold text-white">143</div>
                  <div className="text-xs text-green-400 mt-1 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" /> +12 this week
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-xs font-medium">Manual Hours Saved</span>
                  </div>
                  <div className="text-2xl font-bold text-white">37h</div>
                  <div className="text-xs text-slate-500 mt-1">~ $1,850 value</div>
                </div>
                <div className="col-span-2 rounded-xl bg-white/5 p-4 border border-white/5">
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-xs font-medium">Reply Rate Increase</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="text-3xl font-bold text-white">+26%</div>
                    <div className="h-10 w-32 flex items-end gap-1">
                       {[30, 45, 35, 60, 50, 75, 80].map((h, i) => (
                         <div key={i} style={{ height: `${h}%` }} className="w-full bg-indigo-500/50 rounded-sm"></div>
                       ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity List */}
              <div className="mt-6">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Recent Actions</div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-slate-300">Lead <span className="text-white font-medium">Sara K.</span> qualified via Chatbot</span>
                    <span className="ml-auto text-xs text-slate-500">2m ago</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-slate-300">Invoice #1024 generated & sent</span>
                    <span className="ml-auto text-xs text-slate-500">14m ago</span>
                  </div>
                   <div className="flex items-center gap-3 text-sm">
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                    <span className="text-slate-300">Weekly report summarized</span>
                    <span className="ml-auto text-xs text-slate-500">1h ago</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glow effect behind card */}
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-r from-green-500/20 to-indigo-500/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Credibility() {
  return (
    <section className="bg-[#020617] py-16 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">Two builders. One mission: ship.</h2>
            <p className="mt-4 text-slate-400 text-lg">
              Zol Solutions is run by two technical founders who build AI workflows and automations end-to-end. We don't just advise; we code, test, and deploy systems that work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "Automation sprints delivered", value: "10+" },
              { label: "Avg. sprint duration", value: "7 days" },
              { label: "Response time", value: "< 24 hours" },
            ].map((stat, i) => (
              <div key={i} className="rounded-xl bg-white/5 p-4 border border-white/5 text-center sm:text-left">
                <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 bg-[#0F172A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">What we can build in 3–10 days</h2>
          <p className="mt-4 text-lg text-slate-400">Fast, scoped sprints designed to solve specific bottlenecks.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Lead & Sales Automations",
              icon: Zap,
              items: ["Auto-follow-up for inbound leads", "Lead qualification chatbots", "Inbox triage & reply suggestions"]
            },
            {
              title: "Operations & Back-Office",
              icon: LayoutDashboard,
              items: ["Intake forms to CRM sync", "AI summary of forms/docs", "Automated routing & notifications"]
            },
            {
              title: "Customer Support & FAQ Bots",
              icon: Bot,
              items: ["AI assistants trained on docs", "Ticket triage prioritization", "24/7 instant response"]
            }
          ].map((service, i) => (
            <div key={i} className="bg-[#020617] rounded-2xl p-8 border border-white/5 hover:border-indigo-500/50 transition-colors">
              <div className="h-12 w-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-400">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="py-24 bg-[#020617]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Recent sprints & results</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              label: "Dental Clinic – Lead Follow-Up",
              headline: "Turned lost inquiries into booked appointments",
              info: "Set up an AI follow-up system that emails and texts missed inquiries within minutes.",
              metrics: "+32% more consultations booked in 30 days."
            },
            {
              label: "Auto Dealership – Lead Qualification",
              headline: "Faster qualification, less time wasted",
              info: "Deployed a web chat agent to qualify test-drive requests before they hit the sales team.",
              metrics: "Saved ~15 hours/week in manual filtering."
            },
            {
              label: "Property Management – Tenant Triage",
              headline: "No more cluttered inbox",
              info: "Automated categorization & response suggestions for maintenance requests.",
              metrics: "Reduced average response time by 40%."
            }
          ].map((caseStudy, i) => (
            <div key={i} className="group relative rounded-2xl bg-[#0F172A] p-8 border border-white/5 hover:border-green-500/30 transition-all">
              <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3">{caseStudy.label}</div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">{caseStudy.headline}</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">{caseStudy.info}</p>
              <div className="pt-6 border-t border-white/5">
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-green-500" />
                  {caseStudy.metrics}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-slate-500 mb-6">TRUSTED BY LOCAL BUSINESSES</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["Summit Auto Group", "Chico Dental Care", "North Valley Properties", "Riverbend Marketing"].map((logo) => (
              <span key={logo} className="text-lg font-bold text-slate-300">{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
       {/* Decorative bg elements */}
       <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[300px] w-[300px] rounded-full bg-indigo-500/5 blur-[100px]" />
       <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[300px] w-[300px] rounded-full bg-green-500/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-white text-center mb-16">What our clients say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Sarah M.",
              role: "Owner, Chico Dental Care",
              quote: "Zol took what used to be a messy, manual process and turned it into a system. We literally started seeing more booked consultations the same week."
            },
            {
              name: "Jason L.",
              role: "GM, Summit Auto Group",
              quote: "They didn’t just talk strategy. They built, shipped, and debugged everything. Our sales team finally stops chasing cold leads."
            },
            {
              name: "Ana R.",
              role: "Operations Lead, Riverbend Marketing",
              quote: "We had zero bandwidth to figure out AI. Zol dropped in, automated the boring stuff, and our team just… breathes easier now."
            }
          ].map((t, i) => (
            <div key={i} className="bg-[#020617]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-full bg-slate-700 animate-pulse" /> {/* Generic avatar placeholder */}
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
              <p className="text-slate-300 italic">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-24 bg-[#020617]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">How a sprint with Zol works</h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent -translate-y-1/2 hidden md:block" />

          <div className="grid gap-12 md:grid-cols-3 relative z-10">
            {[
              {
                step: "01",
                title: "Discover (Day 0–1)",
                desc: ["20–30 minute call to map the bottleneck.", "We define a single clear outcome for the sprint."]
              },
              {
                step: "02",
                title: "Build (Day 1–7)",
                desc: ["We design & implement the workflow.", "You get quick Loom updates instead of long meetings."]
              },
              {
                step: "03",
                title: "Deploy & Refine (Day 7–10)",
                desc: ["We ship, test with your team, and handle tweaks.", "You get documentation and a simple way to turn it off/on."]
              }
            ].map((p, i) => (
              <div key={i} className="bg-[#0F172A] p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#020617] p-2 rounded-full border border-indigo-500/50">
                   <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                     {p.step}
                   </div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mt-4 mb-4">{p.title}</h3>
                <ul className="space-y-2">
                  {p.desc.map((d, idx) => (
                    <li key={idx} className="text-slate-400 text-sm text-center">{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0F172A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Simple, transparent sprint pricing</h2>
          <p className="mt-4 text-slate-400">All pricing is in USD. No retainers unless you want us long-term.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
          {/* Mini Sprint */}
          <div className="rounded-2xl border border-white/10 bg-[#020617] p-8">
            <h3 className="text-lg font-semibold text-white">Mini Sprint</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-white">$2,500</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">Perfect for prototypes</p>
            <ul className="mt-8 space-y-4">
              {["48-hour focused build", "Single automation/prototype", "Includes 1–2 revisions"].map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                  <Check className="h-4 w-4 text-slate-500" /> {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-8 block w-full rounded-lg bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-white/20">
              Request Mini Sprint
            </a>
          </div>

          {/* Core Sprint (Highlighted) */}
          <div className="relative rounded-2xl border-2 border-green-500 bg-[#020617] p-8 shadow-2xl shadow-green-900/20 transform lg:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 px-4 py-1 rounded-full text-xs font-bold text-slate-900">
              MOST POPULAR
            </div>
            <h3 className="text-lg font-semibold text-white">Core Sprint</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-white">$5,000</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">Standard 3-5 day build</p>
            <ul className="mt-8 space-y-4">
              {["One major workflow or system", "Strategy, build, & docs included", "Priority support during sprint", "30-day bug fix guarantee"].map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-white">
                  <Check className="h-4 w-4 text-green-500" /> {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-8 block w-full rounded-lg bg-green-500 px-4 py-3 text-center text-sm font-bold text-slate-900 hover:bg-green-400 shadow-lg shadow-green-500/25">
              Book Core Sprint
            </a>
          </div>

          {/* Full Stack Sprint */}
          <div className="rounded-2xl border border-white/10 bg-[#020617] p-8">
            <h3 className="text-lg font-semibold text-white">Full Stack Sprint</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-white">$10,000</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">7-10 day intensive</p>
            <ul className="mt-8 space-y-4">
               {["Multiple workflows", "Deeper tool integrations", "Team training session", "Advanced logic & reasoning"].map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                  <Check className="h-4 w-4 text-slate-500" /> {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-8 block w-full rounded-lg bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-white/20">
              Talk to Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Do we need to know anything about AI to work with you?", a: "No. We handle the tech stack. You just need to know what business problems you want to solve." },
    { q: "What tools do you typically use?", a: "We use a mix of LLMs (OpenAI, Anthropic), automation platforms (Make, n8n), and code. It depends on your existing stack." },
    { q: "What if we don’t like the result?", a: "We work in iterative sprints with clear success metrics defined upfront. You'll see progress throughout the build." },
    { q: "Do you work outside Chico, CA?", a: "Yes, we are 100% remote-capable and work with clients across the US and globally." }
  ];

  return (
    <section id="faqs" className="py-24 bg-[#020617]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-[#0F172A] overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-white">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xkgdqlpy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#4C1D95]/40 to-[#020617] z-0" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-extrabold text-white mb-6">Ready to ship your first AI sprint?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Tell us where you're stuck. We'll come back with a concrete proposal and timeline within 24 hours.
            </p>
            <div className="space-y-4 text-slate-400">
               <div className="flex items-center gap-3">
                 <Mail className="h-5 w-5 text-green-400" />
                 <a href="mailto:chicostategac@gmail.com" className="hover:text-white transition-colors">chicostategac@gmail.com</a>
               </div>
               <div className="flex items-center gap-3">
                 <Phone className="h-5 w-5 text-green-400" />
                 <a href="tel:5307179645" className="hover:text-white transition-colors">(530) 717-9645</a>
               </div>
               <div className="flex items-center gap-3">
                 <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                 <span>Currently accepting new sprints for next month</span>
               </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#0F172A] rounded-2xl p-8 border border-white/10 shadow-2xl">
            <div className="grid gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full rounded-lg bg-[#020617] border border-white/10 px-4 py-3 text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Work Email</label>
                <input type="email" id="email" name="email" required className="w-full rounded-lg bg-[#020617] border border-white/10 px-4 py-3 text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500" placeholder="john@company.com" />
              </div>
              <div>
                <label htmlFor="bottleneck" className="block text-sm font-medium text-slate-300 mb-2">What's the main bottleneck?</label>
                <textarea id="bottleneck" name="bottleneck" rows={4} className="w-full rounded-lg bg-[#020617] border border-white/10 px-4 py-3 text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500" placeholder="Describe the manual process you want to automate..." />
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full rounded-lg bg-green-500 px-6 py-4 text-center font-bold text-slate-900 transition-transform hover:scale-[1.02] hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
              </button>
              {status === 'success' && (
                <p className="text-center text-sm text-green-400 font-medium">✓ Thanks! We'll get back to you within 24 hours.</p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm text-red-400 font-medium">Something went wrong. Please try again or email us directly.</p>
              )}
              {status === 'idle' && (
                <p className="text-center text-xs text-slate-500 mt-4">We usually reply within 24 hours.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#020617] py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Zol Solutions. All rights reserved.
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-slate-500">
          <span>Based in Chico, California · Serving clients remotely</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <Navbar />
      <Hero />
      <Credibility />
      <Services />
      <Results />
      <Testimonials />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      </main>
  );
}
