# Brand Identity and Messaging Framework for Dust

Create a comprehensive brand identity and messaging framework for Dust. This framework will define voice, tone, positioning, and key messages.

## Context

Dust is a lightweight planning system that enables AI coding agents to work autonomously and systematically. Based on research of the codebase, Dust:

- Provides a CLI tool for managing project context in `.dust/` directories
- Organizes work into ideas, tasks, principles, and facts (all stored as markdown)
- Enables agents to pick up tasks and work through them systematically
- Supports continuous agent loops with `npx dust loop claude`
- Emphasizes atomic commits, comprehensive testing, and trunk-based development
- Works with Claude Code and other AI coding tools

### Core Principles Relevant to Brand Identity

From the 60+ principles documented in the Dust codebase, key themes emerge:

**Agent-Centric Design**
- "Dust exists to enable AI agents to produce work autonomously" (agent-autonomy.md)
- "The agent is the developer" (ideal-agent-developer-experience.md)
- "Dust exists to enable effective collaboration between humans and AI agents" (human-ai-collaboration.md)

**Flow State & Efficiency**
- "Flow is the mental state where work becomes effortless" (agentic-flow-state.md)
- "The primary feedback loop should be as fast as possible" (fast-feedback-loops.md)
- "Code should be structured within context window constraints" (context-optimised-code.md)

**Quality & Safety**
- "A project's test suite is its primary safety net" (comprehensive-test-coverage.md)
- "Developers should be able to modify code without fear" (make-changes-with-confidence.md)
- "Any worker should halt and fix a problem the moment they detect it" (stop-the-line.md)

**Simplicity & Adoption**
- "Dust should be trivially easy to adopt" (easy-adoption.md)
- "Dust should be a minimal, low-overhead planning system" (lightweight-planning.md)
- "The user interface should be as 'guessable' as possible" (unsurprising-ux.md)

### Existing Landing Page Reference

A "Crumb" landing page exists in the codebase (`crumb/` directory) that demonstrates one possible approach to marketing a similar tool. Key messaging from that page:

- Tagline: "Flow state for AI coding agents"
- Problem: Agents lack persistent memory, structured specs, quality gates, and async orchestration
- Solution: Provides structured specs, persistent context, quality gates, and runs agents asynchronously
- Positioning: "A workflow layer on top of Claude Code"

## Proposed Brand Elements

### Brand Positioning

**Primary Positioning Statement:**
Dust is the planning layer that transforms AI coding agents from helpful assistants into autonomous developers who systematically ship production-quality code.

**Target Audience:**
1. **Primary:** Developers using AI coding tools (Claude Code, Codex, etc.) who want agents to work more autonomously
2. **Secondary:** Engineering teams adopting AI-assisted development workflows
3. **Tertiary:** Solo developers and indie hackers building with AI

### Brand Voice & Tone

**Voice Attributes:**
- **Direct:** Clear, no-nonsense communication. Say what it does, not what it might enable.
- **Technical:** Speaks developer-to-developer. Uses precise terminology without dumbing down.
- **Practical:** Focused on workflow, not hype. Shows real commands, real workflows.
- **Confident:** Dust knows what it is and what it's for. No hedging or over-promising.

**Tone Variations by Context:**
- Documentation: Instructional, clear, helpful
- Marketing: Assertive, problem-focused, outcome-driven
- Error messages: Actionable, specific, constructive
- Community: Collaborative, open, welcoming

**Voice Examples:**

✅ Good:
- "Flow state for AI coding agents."
- "Dust provides a CLI that agents use to systematically blaze through your backlog."
- "Ideas are backlog items you may or may not do later. Tasks are ready to work on now."

❌ Avoid:
- "Revolutionize your development workflow with cutting-edge AI orchestration!"
- "Unlock the power of intelligent automation in your codebase."
- "The future of development is here."

### Key Messages

**Core Value Proposition:**
Give AI agents structured context, persistent memory, and automated quality gates so they can work autonomously while you're away.

**Supporting Messages:**

1. **Persistent Planning**
   - "Every task, idea, and principle lives in your repo as markdown"
   - "Agents don't start from scratch each session—they read the same context you do"
   - Addresses: Ephemeral chat history, lost context between sessions

2. **Systematic Execution**
   - "Agents pick tasks, implement them, run checks, and commit atomically"
   - "One task, one commit, with full traceability from intent to outcome"
   - Addresses: Ambiguous instructions, forgotten requirements

3. **Quality by Default**
   - "Built-in quality gates: tests, lint, type checks, coverage thresholds"
   - "Agents fix failures automatically with error context"
   - Addresses: Broken code, technical debt, lack of testing

4. **Lightweight & Adoptable**
   - "npm install @joshski/dust && npx dust init"
   - "Zero configuration, works with your existing setup"
   - Addresses: Complex onboarding, tool lock-in

5. **Agent Autonomy**
   - "Run agents in continuous loops with npx dust loop claude"
   - "Close your laptop and let agents work through the backlog"
   - Addresses: Constant babysitting, being the bottleneck

### Brand Personality

If Dust were a person, they would be:
- **The pragmatic senior engineer** who's seen trends come and go
- **The systems thinker** who solves root causes, not symptoms
- **The mentor** who shows you how to fish instead of giving you fish
- **The craftsperson** who cares about details but ships fast

### Visual Identity Considerations

While visual design is outside the scope of this framework, messaging should align with potential visual treatments:

- **Minimalist:** Clean, focused, no clutter (reflects lightweight philosophy)
- **Technical:** Monospace fonts, terminal aesthetics, code-first
- **Warm neutrals:** Not cold corporate blue, not startup gradients
- **Reference:** The Crumb landing page uses warm beige (#F5F0E8) with orange accent (#E8622A) and dark text (#1C2B3A) - this palette feels appropriate for Dust

## Messaging Architecture for Landing Page

### Hero Section
**Pre-headline:** The model isn't the problem. The workflow is.
**Headline:** Stop babysitting your agents.
**Subhead:** Give Claude Code structured specs, persistent context, and automated quality gates. Dust runs your agents while you're away—and gets smarter every session.
**CTA Primary:** Get Started (links to quick start)
**CTA Secondary:** View on GitHub

### Problem Definition
**Section title:** Why agents keep letting you down

**Problem 1: Disposable Planning**
- Every chat session starts from zero
- You brief your agent in threads that disappear
- No canonical spec, no shared memory

**Problem 2: Ambiguous Instructions**
- Without structure, agents improvise
- They optimize for plausible output, not your intent
- You find out after it's built

**Problem 3: You're Still the Bottleneck**
- Agents stall at ambiguities
- You monitor, unblock, re-run failures
- You're glued to the screen shepherding tasks

### Solution Framework
**Section title:** How Dust works

**Step 1: Capture**
- Drop tasks and ideas as markdown files in `.dust/`
- Agents read these just like you do
- Everything versioned in your repo

**Step 2: Structure**
- Tasks have clear definitions of done
- Principles guide consistent decisions
- Facts document current state

**Step 3: Execute**
- Agent picks next unblocked task
- Implements changes with full context
- Commits atomically with documentation updates

**Step 4: Validate**
- Automated quality checks run on every change
- Tests, lint, type checks, coverage
- Agents retry with failure context

**Step 5: Iterate**
- Each session builds on the last
- Full audit trail of decisions
- Continuous improvement over time

### Feature Deep Dive

**Markdown-Based Planning**
- Ideas: Future proposals, may or may not be implemented
- Tasks: Actionable work with clear definitions of done
- Principles: Guiding values that inform decisions
- Facts: Current state documentation

**CLI-First Workflow**
- `dust tasks` - List actionable work
- `dust next` - Show unblocked tasks
- `dust agent` - Get agent instructions
- `dust loop claude` - Run continuous agent iteration

**Quality Gates**
- Configure `dust check` to run your project's quality gate
- Agents automatically fix failures
- Won't ship broken code

**Atomic Commits**
- One task = one commit
- Includes implementation + docs + test updates
- Deletes completed task file
- Full traceability

### Trust Signals

**Open Source**
- MIT licensed, fully transparent
- Active development on GitHub
- Community-driven roadmap

**Zero Lock-In**
- Just markdown files in your repo
- Works with Claude Code, Codex, any AI tool
- Can stop using it anytime

**Battle-Tested**
- Used to build itself (dogfooding)
- Comprehensive test suite
- Cross-platform (Linux, macOS, Windows)

## Implementation Recommendations

1. **Start with GitHub README**: Before building a dedicated landing page, refine the Dust README to follow this messaging framework. This is the current "landing page" for most developers.

2. **Document Voice Examples**: Create a style guide with 20-30 examples of good/bad messaging across different contexts (docs, CLI output, error messages, social posts).

3. **Test Messages with Target Users**: Share positioning statements with developers in Dust's target audience. Look for immediate clarity vs. confusion.

4. **Align CLI Output**: Ensure CLI help text, command output, and error messages all reflect the brand voice (direct, actionable, technical).

5. **Consider Analogies Carefully**: Avoid comparing Dust to unrelated tools. If analogies are needed, pick tools developers actually use (git, make, npm).

6. **Measure Comprehension**: The success metric for messaging isn't "sounds good" but "developers immediately understand what Dust does and why they'd use it."

## Next Steps

To move from framework to implementation:

1. **Choose Answers to Open Questions**: Decision-makers should answer the open questions below to finalize positioning.

2. **Create Landing Page Prototype**: Design a single-page site (or GitHub Pages site) implementing this framework.

3. **Write Example Content**: Draft actual copy for hero, problem, solution, features, FAQ.

4. **Build Visual Identity**: Define color palette, typography, logo/mark (if desired).

5. **Test with Real Users**: Show to 5-10 developers not familiar with Dust. Measure:
   - Can they explain what Dust does in their own words?
   - Do they understand the value proposition?
   - Can they see themselves using it?

6. **Iterate Based on Feedback**: Refine messaging based on where confusion or skepticism appears.

## References

- Dust repository: [github.com/joshski/dust](https://github.com/joshski/dust)
- Dust principles: 60+ markdown files in `node_modules/@joshski/dust/.dust/principles/`
- Example landing page: `crumb/` directory in this repository
- Package description: "Flow state for AI coding agents"

## Open Questions

### What is the primary call-to-action goal?

#### Option 1: GitHub Stars & Community Growth

The landing page messaging should drive visitors toward a specific action, but the ideal action depends on Dust's current goals.
Focus on getting developers to star the repo, try it out, and contribute. This builds community and social proof before any commercial offering.

**Implications:**
- CTA: "Get Started" → documentation
- Secondary CTA: "Star on GitHub"
- Emphasis on open source, zero cost, easy adoption
- Success metrics: GitHub stars, npm downloads, community PRs

#### Option 2: Early Access / Beta Signups
Build a waitlist of serious users who want early access to hosted features, premium capabilities, or enterprise support.

**Implications:**
- CTA: "Request Early Access" → signup form
- Secondary CTA: "Try Open Source"
- Emphasis on exclusive features, professional support
- Success metrics: Qualified signups, conversion to paid

#### Option 3: Immediate Self-Service Adoption
Get developers using Dust right now with zero friction, optimize for time-to-value.

**Implications:**
- CTA: "Install Dust" → quick start guide
- Secondary CTA: "View Examples"
- Emphasis on 2-minute setup, instant value
- Success metrics: Active installations, session metrics

### How should Dust position against "competitors"?

#### Option 1: Complementary to Claude Code

Position Dust as a layer that makes Claude Code better, not a replacement.

**Messaging:**
- "You love Claude Code. It just needs a co-pilot."
- "Dust is a workflow layer on top of Claude Code"
- Emphasize compatibility, enhancement, not replacement

**Tradeoffs:**
- Pro: Non-threatening, easy mental model
- Pro: Aligns with existing user behavior
- Con: Might feel like a plugin vs. standalone value

#### Option 2: Alternative to Manual Agent Management
Position against the status quo: manually managing agents in chat interfaces.

**Messaging:**
- "Stop babysitting your agents"
- "The model isn't the problem. The workflow is."
- Emphasize the pain of current approaches

**Tradeoffs:**
- Pro: Clear problem statement
- Pro: Positions Dust as category creator
- Con: Requires educating market on the problem

#### Option 3: Developer Tool Category
Position Dust in the same category as task runners, build tools, and developer workflow tools (Make, Grunt, etc.).

**Messaging:**
- "Task runner for AI agents"
- "Make for autonomous development"
- Emphasize familiar mental models

**Tradeoffs:**
- Pro: Leverages existing understanding
- Pro: Clear value for experienced developers
- Con: Might undersell the novelty/impact

### What is Dust's long-term business model?

#### Option 1: Open Core

Brand messaging should plant seeds for future monetization without feeling sales-y today.
Keep CLI open source, charge for hosted features (dashboard, analytics, team collaboration, enterprise support).

**Messaging implications:**
- Free tier is generous and permanent
- Premium features clearly marked
- Emphasis on self-hosting being fully functional

#### Option 2: Pure Open Source + Services
Keep everything open source, monetize via consulting, training, enterprise support.

**Messaging implications:**
- Strong community emphasis
- Professional services prominently featured
- "Built by developers, for developers"

#### Option 3: Freemium SaaS
Hosted version with free tier, paid tiers for advanced features (more sessions, analytics, team features).

**Messaging implications:**
- Cloud-first positioning
- Self-hosting as advanced option
- Emphasis on ease of use vs. setup

### Should messaging emphasize "Dust" as a brand or stay minimal?

#### Option 1: Minimal, Tool-Focused

The Dust codebase is pragmatic and minimal—should the brand identity match that philosophy, or build something more distinctive?
Treat Dust like a Unix utility: functional name, no personality, just does its job well.

**Characteristics:**
- Name is descriptive (dust = small particles that settle everywhere, like context files)
- No mascot, no brand personality
- Documentation-style writing everywhere
- Visual identity is clean terminal aesthetics

**Tradeoffs:**
- Pro: Aligns with principles (minimal, unsurprising)
- Pro: Appeals to pragmatic developers
- Con: Harder to build community and emotional connection

#### Option 2: Distinctive, Memorable Brand
Build a recognizable brand with personality, visual identity, and community presence.

**Characteristics:**
- Name has meaning (dust settles, dust trails like breadcrumbs)
- Consistent voice and tone across touchpoints
- Visual identity with color palette, logo, iconography
- Community-building through brand

**Tradeoffs:**
- Pro: Easier to remember and recommend
- Pro: Builds loyalty and community
- Con: Risk of feeling "marketed" vs. authentic

### How technical should landing page messaging be?

#### Option 1: Show the Code

Dust's target audience is developers, but how deep should the landing page go?
Landing page includes actual CLI commands, example task files, real workflows.

**Example:**
```bash
npm install @joshski/dust
npx dust init
echo "# Fix auth bug" > .dust/tasks/fix-auth-bug.md
npx dust agent
```

**Tradeoffs:**
- Pro: Immediately credible to developers
- Pro: Sets expectations accurately
- Con: Might overwhelm non-technical visitors
- Con: Requires scrolling to understand value

#### Option 2: Concepts First, Code Later
Landing page explains the concepts (persistent context, quality gates) before showing commands.

**Example:**
- Hero: Problem and benefit
- How It Works: Conceptual workflow
- Quick Start: Code examples
- Features: Deep dive

**Tradeoffs:**
- Pro: Accessible to broader audience
- Pro: Can tell a story
- Con: Might feel like "marketing" vs. docs

#### Option 3: Interactive Demo
Landing page includes a working demo or interactive walkthrough.

**Tradeoffs:**
- Pro: Immediate hands-on experience
- Pro: Reduces friction to understanding
- Con: Significant development effort
- Con: Hard to maintain
