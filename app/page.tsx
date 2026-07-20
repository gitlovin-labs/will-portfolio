import type { ReactNode } from "react";

const activeQuests = [
  {
    name: "Build Useful AI Applications",
    description:
      "Develop practical tools that solve real operating problems and document the process publicly.",
    status: "In progress",
  },
  {
    name: "Grow Onward Hound",
    description:
      "Improve the products, economics, and systems behind a growing pet-wellness brand.",
    status: "In progress",
  },
  {
    name: "Find the Right Party",
    description:
      "Connect with a team where commercial judgment, operating experience, and builder energy matter.",
    status: "Open",
  },
];

function RunePanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`rune-panel ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="sticky top-0 z-50 border-b-2 border-[#5c4628] bg-[#17130d]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a className="rune-title text-xl text-[#f2cf72]" href="#character">
            WM
          </a>

          <div className="hidden gap-6 text-sm font-bold text-[#d8c49a] sm:flex">
            <a className="nav-link" href="#character">
              Character
            </a>
            <a className="nav-link" href="#quests">
              Quest Log
            </a>
            <a className="nav-link" href="#achievements">
              Achievements
            </a>
            <a className="nav-link" href="#skills">
              Skills
            </a>
            <a className="nav-link" href="#contact">
              Connect
            </a>
          </div>
        </div>
      </nav>

      <section
        id="character"
        className="mx-auto grid min-h-[calc(100vh-70px)] max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.4fr_0.8fr]"
      >
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#d69b3c]">
            Commercial Operator · Founder · AI Builder
          </p>

          <h1 className="rune-title text-5xl leading-none text-[#f4e3ad] sm:text-7xl">
            Will McLaughlin
          </h1>

          <p className="mt-7 max-w-3xl text-xl leading-9 text-[#d6c8a7]">
            I build businesses, systems, and tools that turn complicated
            commercial problems into practical action.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a className="osrs-button" href="#quests">
              View Quest Log
            </a>
            <a className="osrs-button osrs-button-secondary" href="#contact">
              Open Comms
            </a>
          </div>
        </div>

        <RunePanel>
          <p className="panel-label">Character Overview</p>

          <dl className="mt-5 space-y-5">
            <div>
              <dt>Current class</dt>
              <dd>Operator / Builder</dd>
            </div>

            <div>
              <dt>Home world</dt>
              <dd>Greenville, South Carolina</dd>
            </div>

            <div>
              <dt>Current quest</dt>
              <dd>Building useful AI applications</dd>
            </div>

            <div>
              <dt>Party status</dt>
              <dd className="text-[#8fbd72]">Open to the right opportunity</dd>
            </div>
          </dl>
        </RunePanel>
      </section>

      <section id="quests" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10">
          <p className="panel-label">Active Objectives</p>
          <h2 className="rune-title mt-3 text-4xl text-[#f4e3ad]">
            Quest Log
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[#bfb18f]">
            The work currently receiving my attention, energy, and experience.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {activeQuests.map((quest, index) => (
            <RunePanel key={quest.name} className="flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <span className="quest-number">
                  Quest {String(index + 1).padStart(2, "0")}
                </span>
                <span className="quest-status">{quest.status}</span>
              </div>

              <h3 className="rune-title mt-6 text-2xl text-[#efd28a]">
                {quest.name}
              </h3>

              <p className="mt-4 leading-7 text-[#c9bb98]">
                {quest.description}
              </p>
            </RunePanel>
          ))}
        </div>
      </section>

      <section id="achievements" className="mx-auto max-w-6xl px-6 py-24">
        <RunePanel className="text-center">
          <p className="panel-label">Completed Quests</p>
          <h2 className="rune-title mt-3 text-4xl text-[#f4e3ad]">
            Achievements Loading
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#c9bb98]">
            Next, we’ll turn real career outcomes into reusable achievement
            cards.
          </p>
        </RunePanel>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <RunePanel className="text-center">
          <p className="panel-label">Capabilities</p>
          <h2 className="rune-title mt-3 text-4xl text-[#f4e3ad]">
            Skills Panel Locked
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#c9bb98]">
            Skill levels and operating capabilities will appear here.
          </p>
        </RunePanel>
      </section>

      <footer id="contact" className="border-t-2 border-[#5c4628] bg-[#17130d]">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="panel-label">Open Comms</p>
          <h2 className="rune-title mt-3 text-3xl text-[#f4e3ad]">
            Ready for the next quest.
          </h2>
          <p className="mt-4 text-[#bfb18f]">
            Contact links will be added after the core experience is built.
          </p>
        </div>
      </footer>
    </main>
  );
}