import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-3xl">
        <p className="mb-4 font-mono text-sm tracking-widest text-primary">
          Hello, I am
        </p>
        <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          <span className="text-balance">Gayathridevi E</span>
        </h1>
        <h2 className="mb-6 text-lg font-medium text-muted-foreground sm:text-xl">
          Computer Science Engineering Student
        </h2>
        <p className="mb-2 text-sm text-muted-foreground">
          Government College of Engineering, Bodinayakanur
        </p>
        <p className="mb-10 font-mono text-sm tracking-wider text-primary/70">
          {"Code \u2022 Learn \u2022 Build \u2022 Innovate"}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg border border-primary bg-primary/10 px-8 py-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Contact Me
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </a>
      </div>
    </section>
  )
}
