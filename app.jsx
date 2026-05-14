/* global React, ReactDOM */
const { useState } = React;

function App() {
  return (
    <>
      <Marquee />
      <Nav />
      <Hero />
      <DirectorsCut />
      <WhatIDo />
      <Bottlenecks />
      <StepSkipped />
      <Quote
        author="Marcus T."
        meta="Specialty Business Insurance · Burlington, ON"
        text="Prospects who Googled me found almost nothing, and what they did find didn't communicate my specialization at all. He fixed the positioning, tightened the messaging, and now I'm getting inbound from the exact commercial clients I want."
      />
      <Situations />
      <Rule />
      <About />
      <HowItStarts />
      <Engagements />
      <Contact />
      <Footer />
    </>
  );
}

function Marquee() {
  const items = ["Strategy over sparkles", "No tactics without strategy", "Find the constraint first", "Strategy over sparkles", "No tactics without strategy"];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...items, ...items].map((s, i) => (
          <span key={i} className="marquee__item">
            <span className="marquee__star">✦</span>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__brand">
        <span className="nav__mark">SC</span>
        <span className="nav__name">Strategy<span className="nav__name-light">Charlie</span></span>
      </div>
      <ul className="nav__links">
        <li><a href="#work">Approach</a></li>
        <li><a href="#bottlenecks">Bottlenecks</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#engage">Engagements</a></li>
      </ul>
      <a href="#contact" className="nav__cta">
        Book a fit-check
        <span className="nav__cta-arrow">↗</span>
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="hero__meta">
        <span className="kicker">
          <span className="kicker__dot" />
          Strategy-first digital marketing
        </span>
        <span className="hero__loc">Burlington, ON ⟶ Worldwide</span>
      </div>

      <h1 className="hero__title">
        You're great<br />
        at your craft.<br />
        <span className="hero__title-em">Your marketing —</span><br />
        <span className="hero__title-accent">could use some love.</span>
      </h1>

      <div className="hero__below">
        <p className="hero__lede">
          Most marketing advice is either too vague to use <span className="quote">("just be authentic!")</span> or too tactical to trust. I find the <em>real</em> constraint quietly capping your growth — then every dollar you spend actually turns into clients.
        </p>

        <div className="hero__cta-stack">
          <a href="#contact" className="btn btn--primary">
            <span>Book your free consultation</span>
            <span className="btn__arrow">→</span>
          </a>
          <div className="hero__cta-meta">
            <span className="dot" /> 30-min fit-check
            <span className="sep">·</span>
            You decide if we take the next step
          </div>
        </div>
      </div>

      <div className="hero__bigword">
        <span>STRATEGY</span>
        <em>over sparkles</em>
      </div>

      <div className="hero__metrics">
        <Metric n="20" suffix="yrs" label="Building websites & marketing systems" />
        <Metric n="6" label="Recurring growth bottlenecks in service businesses" />
        <Metric n="1" label="Rule, never broken: no tactics without strategy" />
        <Metric n="$10–20K" small label="Typical wasted before strategy is even named" />
      </div>
    </header>
  );
}

function Metric({ n, suffix, label, small }) {
  return (
    <div className="metric">
      <div className={"metric__n" + (small ? " metric__n--small" : "")}>
        {n}{suffix && <span className="metric__suffix">{suffix}</span>}
      </div>
      <div className="metric__label">{label}</div>
    </div>
  );
}

function DirectorsCut() {
  return (
    <section className="dcut">
      <div className="dcut__bar">
        <span className="mono">02 / Director's cut</span>
        <span className="dcut__line" />
        <span className="mono">scroll for the long version</span>
      </div>
      <p className="dcut__body">
        That was the two-minute version. Below is the director's cut. If you read the whole menu before ordering — keep scrolling, I respect that. If you already know what you want, <a href="#contact">let's talk</a>.
      </p>
    </section>
  );
}

function WhatIDo() {
  return (
    <section className="work" id="work">
      <div className="work__head">
        <span className="section-kicker">§ What I actually do</span>
        <h2 className="work__title">
          Good work deserves to be <em>found</em> — and too many people who are genuinely great at what they do are losing to competitors who are just better at being <span className="underline-accent">visible</span>.
        </h2>
      </div>

      <div className="work__grid">
        <WorkCard n="01" title="Get found"
          body="Get the right people to find you when they're actually looking — search, positioning, the foundation underneath." />
        <WorkCard n="02" title="Get trusted"
          body="Make it obvious why they should trust you over the next name on the list. Authority that compounds." />
        <WorkCard n="03" title="Get the booking"
          body="Make sure good leads don't slip through the cracks while you're busy delivering the work." />
      </div>

      <div className="work__quote">
        <span className="work__quote-mark">"</span>
        <p>
          Eddie rebuilt my website around how my ideal clients actually think and search. I started getting bookings from people who found me online and already understood what I was about <em>before</em> they walked in.
        </p>
        <div className="work__quote-attr">
          <strong>Steph C.</strong>
          <span>Private Hair Studio · Toronto, ON</span>
        </div>
      </div>
    </section>
  );
}

function WorkCard({ n, title, body }) {
  return (
    <article className="wcard">
      <div className="wcard__head">
        <span className="wcard__n">{n}</span>
        <span className="wcard__bullet">‣</span>
      </div>
      <h3 className="wcard__title">{title}</h3>
      <p className="wcard__body">{body}</p>
    </article>
  );
}

function Bottlenecks() {
  const items = [
    { t: "Invisibility", b: "The right people can't find you. Search treats you like you don't exist." },
    { t: "No stickiness", b: "The ones who do find you don't stick around long enough to care." },
    { t: "Leaky pipeline", b: "Leads slip through the cracks while you're busy delivering." },
    { t: "Weak signal", b: "Your reputation isn't pulling its weight online. Comparison shoppers leave." },
    { t: "Inconsistency", b: "Your marketing has the consistency of a New Year's resolution." },
    { t: "Invisible plumbing", b: "An entire layer of digital infrastructure is quietly working against you." }
  ];
  return (
    <section className="bottle" id="bottlenecks">
      <div className="bottle__head">
        <span className="section-kicker">§ Where growth quietly breaks</span>
        <h2 className="bottle__title">
          Revenue rarely stalls for lack of effort. It stalls because <em>one</em> quiet constraint stands in the doorway with its arms crossed — blocking everything behind it.
        </h2>
        <p className="bottle__sub">The same six bottlenecks come up again and again. Most owners recognize themselves in at least one. Some wince at two or three.</p>
      </div>

      <ol className="bottle__list">
        {items.map((it, i) => (
          <li className="bn" key={i}>
            <div className="bn__n">
              <span className="bn__num">{String(i+1).padStart(2, "0")}</span>
              <span className="bn__bar" />
            </div>
            <div className="bn__body">
              <h3 className="bn__title">{it.t}</h3>
              <p className="bn__desc">{it.b}</p>
            </div>
            <span className="bn__plus">+</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function StepSkipped() {
  return (
    <section className="skipped">
      <div className="skipped__inner">
        <span className="section-kicker section-kicker--invert">§ The step everyone skips</span>
        <p className="skipped__lede">
          Most businesses hire an agency, run ads, or redesign the site — only to discover months later that the real issue wasn't execution. It was the complete absence of <em>strategy</em>.
        </p>
        <div className="skipped__split">
          <div className="skipped__col">
            <div className="mono mono--invert">BEFORE</div>
            <p>Spend <span className="big-num">$10–20K+</span> on tactics that may or may not be aimed at the real problem.</p>
          </div>
          <div className="skipped__arrow">⟶</div>
          <div className="skipped__col">
            <div className="mono mono--invert">AFTER</div>
            <p>Identify the actual constraint first. <em>Then</em> move forward — confidently, and with intent.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Quote({ text, author, meta }) {
  return (
    <section className="pull">
      <div className="pull__mark">✦</div>
      <blockquote className="pull__text">{text}</blockquote>
      <div className="pull__attr">
        <strong>{author}</strong>
        <span>{meta}</span>
      </div>
    </section>
  );
}

function Situations() {
  const rows = [
    "A successful service firm running almost entirely on referrals — grateful for every one, but with zero intentional lead generation underneath it.",
    "A website redesign that looked gorgeous but didn't produce a single extra client.",
    "Social posting that generates likes, comments, activity — but not revenue. Likes don't pay your bills.",
    "Strong expertise paired with weak online authority. Prospects comparison-shop and hire someone louder.",
    "Marketing investments that feel expensive and never quite produce the return that justified them.",
    "A business that's 3–5 years in, doing fine by most standards — but the income, freedom, and impact all feel like they should be bigger by now."
  ];
  return (
    <section className="sits">
      <span className="section-kicker">§ Situations I see all the time</span>
      <h2 className="sits__title">Many businesses arrive in situations like these</h2>
      <ul className="sits__list">
        {rows.map((r, i) => (
          <li key={i}>
            <span className="sits__idx">{String(i+1).padStart(2,"0")}</span>
            <p>{r}</p>
          </li>
        ))}
      </ul>
      <p className="sits__close">
        In almost every case the issue isn't effort. The real constraint was <span className="hl">never identified</span> — so the effort went in the wrong direction and the revenue never came.
      </p>
    </section>
  );
}

function Rule() {
  return (
    <section className="rule">
      <div className="rule__top mono">§ The rule I never break</div>
      <div className="rule__display">
        <span>No</span>
        <span className="rule__strike">tactics</span>
        <span>without</span>
        <span className="rule__em">strategy.</span>
      </div>
      <p className="rule__body">
        Tactics only work when they're pointed at the real problem. Get the strategy right and the tactics stop being expenses — they start being <em>investments</em>. That's when the revenue moves.
      </p>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="about__left">
        <div className="about__photo">
          <div className="photo-placeholder">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="photo-placeholder__svg">
              <defs>
                <pattern id="stripes" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" strokeWidth="1" opacity="0.25"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#stripes)"/>
            </svg>
            <span className="photo-placeholder__label mono">[ portrait — Eddie at desk ]</span>
          </div>
          <div className="about__caption mono">
            EDDIE — Digital Marketing Strategist<br/>
            Websites, visibility & the stuff underneath ··· since the Hotmail era
          </div>
        </div>
      </div>

      <div className="about__right">
        <span className="section-kicker">§ Hi, I'm Eddie</span>
        <h2 className="about__title">
          I help business owners identify the constraint <em>quietly limiting</em> their growth — before they waste time or money fixing the wrong thing.
        </h2>
        <div className="about__body">
          <p>
            I've been building websites and working in digital marketing for nearly <strong>20 years</strong>. For a long time, I delivered what most owners asked for: websites, SEO, campaigns, execution. I love the build side. I like tightening copy. I like fixing broken funnels.
          </p>
          <p>
            But after enough projects, the pattern was impossible to ignore. The businesses that grew didn't grow because of a tactic — they grew because we <em>fixed the right problem first</em>. The ones that struggled poured time and money into activity without ever identifying the real constraint.
          </p>
          <p className="about__pull">
            <span className="hl">Strategy comes first</span> — not because it sounds fancy, but because it saves businesses from lighting money on fire.
          </p>
        </div>

        <div className="about__signature">
          <svg viewBox="0 0 200 60" className="signature">
            <path d="M10 40 Q 20 10, 40 30 T 80 30 Q 95 30, 100 15 T 140 35 Q 160 45, 180 25"
              stroke="var(--fg)" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
          <div className="mono">— Eddie</div>
        </div>
      </div>
    </section>
  );
}

function HowItStarts() {
  const steps = [
    { t: "Reach out", b: "Tell me what's going on and where things feel stuck. If I can help, I'll say so. If not, I'll point you in the right direction." },
    { t: "30-min fit-check", b: "Not a deep-dive strategy session — a conversation. We'll likely surface what's quietly standing between you and the revenue your business should already have." },
    { t: "Strategy session ($)", b: "If we're a fit, we go in-depth. We name the real constraint and map the move that breaks it." },
    { t: "Move forward", b: "Project-based fixes, monthly execution, or both. You decide. No chaos, no random tactics, no marketing theatre." }
  ];
  return (
    <section className="howit">
      <span className="section-kicker">§ How it starts</span>
      <div className="howit__grid">
        {steps.map((s, i) => (
          <div className="step" key={i}>
            <div className="step__head">
              <span className="step__n">0{i+1}</span>
              <span className="step__rule" />
            </div>
            <h3 className="step__title">{s.t}</h3>
            <p className="step__body">{s.b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Engagements() {
  return (
    <section className="eng" id="engage">
      <div className="eng__head">
        <span className="section-kicker">§ Ways we work together</span>
        <h2 className="eng__title">Two paths — and some choose both</h2>
      </div>

      <div className="eng__cards">
        <article className="ecard">
          <div className="ecard__top">
            <span className="mono">A · Project-based fixes</span>
            <span className="ecard__price">$3K–$15K</span>
          </div>
          <p className="ecard__body">
            We identify the constraint, build the fix, and hand you something that actually produces clients — a repositioned website, a search foundation, a follow-up system, or all of the above.
          </p>
          <ul className="ecard__list">
            <li>Repositioning & messaging</li>
            <li>Website rebuilds (around how clients search, not how you talk)</li>
            <li>Search visibility foundation</li>
            <li>Follow-up & lead-routing systems</li>
          </ul>
        </article>

        <article className="ecard ecard--accent">
          <div className="ecard__top">
            <span className="mono">B · Monthly execution</span>
            <span className="ecard__price">From $1,500/mo</span>
          </div>
          <p className="ecard__body">
            Someone in the engine room month-to-month — implementing, adjusting, keeping the strategy pointed at <em>revenue</em>, not vanity metrics.
          </p>
          <ul className="ecard__list">
            <li>Ongoing strategy & quarterly reviews</li>
            <li>Search & visibility upkeep</li>
            <li>Funnel monitoring & optimization</li>
            <li>Scales based on how fast you want to move</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", business: "", stuck: "" });

  if (sent) {
    return (
      <section className="contact" id="contact">
        <div className="contact__thanks">
          <span className="mono">✓ MESSAGE SENT</span>
          <h2>Thank you.</h2>
          <p>Got it — I'll reply as soon as I can. Usually same day, latest within 48 hours.</p>
          <button className="btn btn--ghost" onClick={() => { setSent(false); setForm({ name:"", business:"", stuck:"" }); }}>
            ← Send another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__left">
        <span className="section-kicker">§ Let's talk</span>
        <h2 className="contact__title">
          Tell me what's going on and <em>where things feel stuck.</em>
        </h2>
        <p className="contact__sub">
          If I can help, I'll say so. If not, I'll point you in the right direction.
        </p>

        <ul className="contact__channels">
          <li><span className="mono">Email</span><a href="mailto:hello@strategycharlie.com">hello@strategycharlie.com</a></li>
          <li><span className="mono">WhatsApp</span><a href="https://wa.me/14377475970">+1 (437) 747-5970</a></li>
          <li><span className="mono">Substack</span><a href="https://strategycharlie.substack.com" target="_blank" rel="noopener noreferrer">Strategy Over Sparkles ↗</a></li>
          <li><span className="mono">X</span><a href="https://x.com/strategycharlie" target="_blank" rel="noopener noreferrer">@strategycharlie ↗</a></li>
        </ul>
      </div>

      <form className="contact__form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
        <label className="field">
          <span className="field__label mono">01 — Your name</span>
          <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="First & last" required />
        </label>
        <label className="field">
          <span className="field__label mono">02 — Business / role</span>
          <input value={form.business} onChange={e => setForm({...form, business: e.target.value})} placeholder="What do you do, and for whom?" required />
        </label>
        <label className="field">
          <span className="field__label mono">03 — Where it feels stuck</span>
          <textarea rows="5" value={form.stuck} onChange={e => setForm({...form, stuck: e.target.value})} placeholder="A few sentences. The messier the better." required />
        </label>
        <button type="submit" className="btn btn--primary btn--lg">
          Send message
          <span className="btn__arrow">→</span>
        </button>
        <div className="contact__fine mono">No newsletter signup. No drip campaign. Just a reply.</div>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="foot__big">
        <span>Strategy</span>
        <em>over</em>
        <span>sparkles.</span>
      </div>
      <div className="foot__row">
        <span>© 2026 · StrategyCharlie.com</span>
        <span>Based in Burlington, ON · Canada</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
