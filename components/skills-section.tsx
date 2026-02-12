import { Code2, Cpu, Braces, Binary, Layers, GitBranch, Lightbulb, Terminal } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Skill {
  name: string
  icon: LucideIcon
}

const programmingLanguages: Skill[] = [
  { name: "Python", icon: Terminal },
  { name: "Java", icon: Code2 },
  { name: "C", icon: Braces },
  { name: "C++", icon: Binary },
]

const coreConcepts: Skill[] = [
  { name: "Data Structures", icon: Layers },
  { name: "Algorithms", icon: GitBranch },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Software Development", icon: Cpu },
]

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon
  return (
    <div className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:bg-secondary">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
        <Icon className="h-6 w-6" />
      </div>
      <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 font-mono text-sm tracking-widest text-primary">
          02.
        </h2>
        <h3 className="mb-12 text-3xl font-bold text-foreground">
          Technical Skills
        </h3>

        <div className="space-y-12">
          {/* Programming Languages */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Programming Languages
            </h4>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {programmingLanguages.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Core Concepts */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Core Concepts
            </h4>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {coreConcepts.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
