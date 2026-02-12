import { FolderOpen } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: "Linked List Visualizer",
    description:
      "An interactive implementation of singly and doubly linked lists in C++, featuring insertion, deletion, and traversal operations with clean console-based visualization.",
    tags: ["C++", "Data Structures", "OOP"],
  },
  {
    title: "Sorting Algorithm Analyzer",
    description:
      "A comparative study and implementation of Bubble Sort, Merge Sort, Quick Sort, and Heap Sort in Python, analyzing time complexity across various input sizes.",
    tags: ["Python", "Algorithms", "Analysis"],
  },
  {
    title: "Student Management System",
    description:
      "A Java-based CRUD application for managing student records with file handling, demonstrating clean code architecture and object-oriented design principles.",
    tags: ["Java", "File I/O", "OOP"],
  },
  {
    title: "Graph Pathfinder",
    description:
      "Implementation of BFS and DFS graph traversal algorithms in C to find shortest paths and connected components, applied to real-world maze-solving problems.",
    tags: ["C", "Graphs", "Problem Solving"],
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-secondary">
      <div className="mb-4 flex items-center justify-between">
        <FolderOpen className="h-8 w-8 text-primary" />
      </div>
      <h4 className="mb-2 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
        {project.title}
      </h4>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 font-mono text-sm tracking-widest text-primary">
          03.
        </h2>
        <h3 className="mb-12 text-3xl font-bold text-foreground">Projects</h3>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
