# Landing Page Schematic

Create a comprehensive landing page structure for Dust that follows the established brand voice and adapts the proven Crumb landing page architecture.

## Context

The Crumb landing page (in `crumb/`) demonstrates an effective structure for communicating an agent workflow tool. Dust needs a similar landing page that:

1. Follows the brand voice guidelines (.dust/facts/brand-voice-guidelines.md)
2. Uses the core messaging: "Flow state for AI coding agents"
3. Maintains the direct, technical, practical, confident tone
4. Avoids forbidden marketing terms (revolutionize, unlock, empower, seamless, etc.)

## Landing Page Flow

### 1. Hero Section
**Tagline**: "Flow state for AI coding agents."

**Headline**: Short, direct statement about the core problem
- Example pattern from Crumb: "Stop babysitting your agents."
- Dust equivalent could focus on structure, persistence, or systematic work

**Subheadline**: Two-sentence explanation of what Dust does
- What it provides (structure, context, quality gates)
- What that enables (systematic execution, persistent memory)

**CTAs**:
- Primary: GitHub link or "Get Started" pointing to installation docs
- Secondary: "View Documentation" or "See Examples"

**Visual**: Terminal mockup showing dust CLI output or agent workflow in action
- Could show: task list, agent picking a task, dust check output
- Style: Clean, monospace, realistic - not overly designed

### 2. Grounding Paragraph
Single-paragraph explainer that clarifies Dust's positioning:
- What Dust is (lightweight planning system, markdown-based context)
- What problem it solves (agents need structure to work effectively)
- How it works at a high level (stores context as artifacts, agents read and execute)

### 3. Problem Section
**Headline**: "Why agents keep letting you down" (or similar direct framing)

**Three core problems**:

1. **Context Loss**
   - Every session starts from zero
   - Agents forget requirements, make inconsistent decisions
   - Manual context management doesn't scale

2. **Ambiguous Requirements**
   - Without specs, agents improvise
   - Code that compiles but misses the point
   - Rework loops and alignment issues

3. **No Quality Control**
   - Agents can't self-check
   - Bugs ship because there are no gates
   - You become the QA bottleneck

Each problem needs:
- Short title (3-5 words)
- Pull quote (one sentence explaining the symptom)
- Body paragraph (2-3 sentences on consequences)

### 4. Use Cases Section
**Headline**: "When Dust matters most" (or similar)

Potential use cases:
- **Solo developers**: Side projects that move at attention-span speed
- **Small teams**: Coordinating agents without Slack threads
- **Refactors**: Multi-session work that needs persistent context
- **Greenfield**: Setting architectural patterns upfront
- **Legacy codebases**: Documenting principles before agents touch code

Each use case:
- Tab label (1-2 words)
- Hook line (one sentence value prop)
- Situation paragraph
- Without Dust (pain description)
- With Dust (outcome description)

### 5. How It Works
**Headline**: "Four artifact types, one workflow"

**The Artifacts**:
1. **Tasks** - Actionable work with definitions of done
2. **Ideas** - Proposals waiting to be refined
3. **Principles** - Guiding values and design constraints
4. **Facts** - Documentation of current system state

**The Workflow**:
1. Capture → Create artifacts in `.dust/` as markdown
2. Pick → Agent reads context and selects a task
3. Implement → Agent makes changes defined in task
4. Commit → Atomic commit including task deletion
5. Repeat → Continue until backlog is clear

Visual: Simple diagram or animation showing the artifact types and workflow loop

### 6. Quick Start
**Headline**: "Two commands to start"

```bash
npm install --save-dev @joshski/dust
npx dust init
```

Three-step getting started:
1. Install and initialize
2. Create your first task
3. Let agent implement it

Include actual commands, not abstractions.

### 7. Reframe Section (Optional)
Addresses the "but I already use Claude/Cursor/etc." objection:
- Dust doesn't replace your agent
- It structures what your agent reads and writes
- Works with any coding agent (Claude Code, Cursor, Aider, etc.)

### 8. Feature Deep Dive
**Core features**:

1. **Task-First Workflow**
   - Every change starts as a documented task
   - Creates traceability between intent and outcome

2. **Atomic Commits**
   - Implementation + documentation + task deletion in one commit
   - Git history tells a complete story

3. **Quality Gates**
   - `dust check` validates before every commit
   - Configurable checks: tests, lint, types, etc.

4. **Progressive Disclosure**
   - Minimal context in task descriptions
   - Agent reads deeper artifacts as needed
   - Stays within context windows

5. **Trunk-Based Development**
   - No branching required
   - Direct commits to main
   - Fast feedback loops

### 9. Comparison Table (Optional)
If valuable, compare to:
- Manual todo lists (lose context, no structure, agent can't read)
- Project management tools (overhead, not in repo, agent can't parse)
- No system (chaos, inconsistency, rework loops)
- Dust (structured, persistent, agent-readable)

### 10. Pricing (N/A for Open Source)
Replace with:
- Open source badge
- MIT license notice
- GitHub stars count
- Link to contributing docs

### 11. FAQ
Common questions:
- How does Dust differ from [other tool]?
- Do I need to change my git workflow?
- What agents does this work with?
- How much overhead does this add?
- Can I use this with an existing codebase?

### 12. Final CTA
**Headline**: "Start building with structure"

**CTAs**:
- Primary: "Install Dust" (links to GitHub)
- Secondary: "Read the docs" (links to README)

**Caption**: "Open source · MIT license · 2-minute setup"

### 13. Footer
Standard footer content:
- Links: GitHub, Documentation, NPM Package
- License info
- Credits/attribution

## Copy Guidelines

All copy must follow brand voice:

**Direct**: Say what it does, not what it enables
- ✅ "Dust structures your project so agents can understand what needs to be done"
- ❌ "Dust empowers agents to unlock their full potential"

**Technical**: Developer-to-developer communication
- ✅ "Each commit tells a complete story, bundling implementation with documentation"
- ❌ "Our smart commit approach keeps your codebase healthy"

**Practical**: Show real commands and workflows
- ✅ "`npx dust tasks` — List all tasks"
- ❌ "Discover what needs to be done with our intuitive task interface"

**Confident**: No hedging
- ✅ "AI agents need structure to work effectively"
- ❌ "AI agents might benefit from having some structure in place"

## Visual Design Principles

Based on Crumb implementation:

1. **Color Palette**:
   - Background: Warm neutral (like `#F5F0E8`)
   - Primary: Single accent color
   - Text: High contrast, readable
   - Code blocks: Monospace, subtle background

2. **Typography**:
   - Headings: Bold, generous sizing
   - Body: Readable line height (1.6-1.8)
   - Code: Monospace font, distinct styling

3. **Components**:
   - Cards: Subtle borders, minimal shadows
   - Buttons: Clear hierarchy (primary vs secondary)
   - Spacing: Generous whitespace
   - Animations: Subtle fade-ins, no distractions

4. **Terminal Mockups**:
   - Realistic CLI output
   - Monospace fonts
   - Actual dust command examples
   - No overly polished screenshots

## Success Criteria

A successful landing page:
1. Communicates what Dust is in < 10 seconds (hero + grounding paragraph)
2. Addresses the core objection ("why do I need this?") in Problem section
3. Shows concrete workflow in How It Works
4. Provides immediate next action (install command)
5. Maintains brand voice throughout (no forbidden words, technical tone)
6. Loads quickly (minimal JS, optimized assets)
7. Works across devices (responsive design)
8. Links clearly to GitHub/docs for deeper learning

## Implementation Notes

- Use Next.js (already established in crumb/ directory)
- React components for each section
- Framer Motion for subtle animations (established pattern)
- Tailwind or inline styles (crumb uses inline, could continue that)
- Deploy to Vercel or GitHub Pages
- Ensure accessibility (semantic HTML, ARIA labels, keyboard nav)

## Related Principles

- brand-voice-guidelines.md (must follow exactly)
- progressive-disclosure.md (landing page should reveal detail gradually)
- unsurprising-ux.md (make CTAs and navigation obvious)
- easy-adoption.md (install instructions must be trivial)
- fast-feedback.md (page must load quickly)

## Open Questions

### What should the hero headline be?

#### Option: "Stop managing agents. Start building."
- Pros: Action-oriented, frames the shift from management to production
- Cons: "Start building" could feel generic

#### Option: "Structure for systematic work."
- Pros: Descriptive, technical, explains the value clearly
- Cons: Less punchy, might not hook immediately

#### Option: "Your agents forgot what you said."
- Pros: Relatable pain point, immediate problem recognition
- Cons: Negative framing might not inspire action

#### Option: "Context that persists."

- Pros: Precise technical benefit
- Cons: Assumes user already knows context loss is their problem

### Should we include a live demo or interactive element?

#### Option: Static mockups only
- Pros: Fast to implement, no maintenance, loads quickly
- Cons: Less engaging, harder to show workflow in action

#### Option: Interactive CLI simulator
- Pros: Users can try dust commands in browser, visceral understanding
- Cons: Complex to build, may break, adds maintenance burden

#### Option: Embedded video/GIF
- Pros: Shows real workflow, easy to update
- Cons: File size concerns, auto-play annoyance

### What's the primary CTA target?

#### Option: GitHub repository
- Pros: One source of truth, where devs are comfortable
- Cons: Bounces user away immediately

#### Option: Dedicated docs site
- Pros: Keeps user on controlled experience, SEO benefits
- Cons: Requires building/maintaining separate docs site

#### Option: README as docs
- Pros: Zero maintenance, all docs in one place (GitHub)
- Cons: Less polish, harder to navigate for complex docs

### Should we include testimonials or social proof?

#### Option: No testimonials
- Pros: Maintains technical Unix-utility feel, avoids marketing fluff
- Cons: Misses trust-building opportunity

#### Option: GitHub stars + usage stats
- Pros: Quantitative, verifiable, fits technical brand
- Cons: Requires actual adoption first

#### Option: Developer quotes
- Pros: Relatable, shows real-world value
- Cons: Could feel salesy if not carefully curated

### How technical should "How It Works" be?

#### Option: High-level conceptual
- Pros: Accessible to broader audience, faster to read
- Cons: Might not satisfy technical users looking for detail

#### Option: Implementation-level detail
- Pros: Shows technical depth, attracts serious users
- Cons: Overwhelming for quick evaluation

#### Option: Progressive disclosure

- Pros: Serves both audiences (summary + expandable detail)
- Cons: More complex to implement on frontend
