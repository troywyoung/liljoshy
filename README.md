# dust

Flow state for AI coding agents.

Dust is a lightweight planning system that enables AI agents to produce work autonomously. Instead of manually managing todo lists and context, Dust structures your project so agents can understand what needs to be done and execute systematically.

## Why Dust?

AI agents need structure to work effectively. Without it, they lose context, forget requirements, and make inconsistent decisions. Manual agent management doesn't scale.

Dust solves this by storing project context as markdown artifacts in `.dust/`:
- **Tasks** — actionable work with definitions of done
- **Ideas** — proposals waiting to be refined
- **Principles** — guiding values and design constraints
- **Facts** — documentation of current system state

Agents read these artifacts to understand your project, pick tasks, implement them, and commit atomically.

## Quick Start

Install Dust in any repository:

```bash
npm install --save-dev @joshski/dust
npx dust init
```

Create your first task:

```bash
npx dust new task "Add user authentication"
```

Let an agent implement it:

```bash
npx dust implement task
```

The agent reads the task, implements the changes, deletes the task file, and commits everything atomically.

## Core Commands

```bash
npx dust tasks        # List all tasks
npx dust ideas        # List feature proposals
npx dust principles   # Show guiding values
npx dust facts        # Show current state docs
npx dust next         # Show tasks ready to work on
npx dust check        # Run quality gate checks
npx dust agent        # Agent workflow instructions
```

## How It Works

Dust follows a simple workflow:

1. **Capture** — Create tasks, ideas, principles, and facts as markdown files
2. **Pick** — Agent selects a task ready to implement
3. **Implement** — Agent makes the changes defined in the task
4. **Commit** — Agent commits atomically, including task deletion
5. **Repeat** — Continue until all tasks are complete

Each commit tells a complete story, bundling implementation changes with their corresponding documentation updates.

## Get Started

- [GitHub Repository](https://github.com/joshski/dust)
- [Documentation](https://github.com/joshski/dust#readme)
- [NPM Package](https://www.npmjs.com/package/@joshski/dust)

Install Dust today:

```bash
npm install --save-dev @joshski/dust
npx dust init
```

⭐ Star us on GitHub to support the project!

## License

MIT
