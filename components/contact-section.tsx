import { Mail, Linkedin, Github, MapPin } from "lucide-react"

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "gayathridevi@example.com",
    href: "mailto:gayathridevi@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/gayathridevi",
    href: "https://linkedin.com/in/yourprofile",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/gayathridevi",
    href: "https://github.com/yourusername",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tamil Nadu, India",
    href: null,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-2 font-mono text-sm tracking-widest text-primary">
          04.
        </h2>
        <h3 className="mb-4 text-3xl font-bold text-foreground">
          Get In Touch
        </h3>
        <p className="mx-auto mb-14 max-w-lg text-muted-foreground leading-relaxed">
          I am currently open to new opportunities and collaborations. Whether
          you have a question or just want to say hello, feel free to reach out!
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {contactItems.map((item) => {
            const Icon = item.icon
            const Wrapper = item.href ? "a" : "div"
            const wrapperProps = item.href
              ? {
                  href: item.href,
                  target: item.href.startsWith("http") ? "_blank" as const : undefined,
                  rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined,
                }
              : {}
            return (
              <Wrapper
                key={item.label}
                {...wrapperProps}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 text-left transition-all hover:border-primary/50 hover:bg-secondary"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-card-foreground transition-colors group-hover:text-primary">
                    {item.value}
                  </p>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
