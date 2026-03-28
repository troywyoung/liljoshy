# Align CLI Output with Brand Voice

Review and refine all CLI command outputs, help text, and error messages to match the established brand voice. The CLI is the primary touchpoint for users interacting with Dust, so its output should exemplify the brand's communication style: direct, technical, practical, and confident.

## Context

Based on the brand identity framework:

**Brand Voice Attributes:**
- **Direct**: Clear, no-nonsense communication. Say what it does, not what it might enable.
- **Technical**: Speaks developer-to-developer. Uses precise terminology without dumbing down.
- **Practical**: Focused on workflow, not hype. Shows real commands, real workflows.
- **Confident**: Dust knows what it is and what it's for. No hedging or over-promising.

**Examples of Good Voice:**
- "Flow state for AI coding agents."
- "Dust provides a CLI that agents use to systematically blaze through your backlog."
- "Ideas are backlog items you may or may not do later. Tasks are ready to work on now."

**Avoid:**
- "Revolutionize your development workflow..."
- "Unlock the power of..."
- "The future of development is here."

## Principles

- actionable-errors.md - Error messages should tell you what to do next
- unsurprising-ux.md - The user interface should be as "guessable" as possible
- clarity-over-brevity.md - Names should be descriptive and self-documenting

## Definition of Done

- [ ] Audit all CLI commands for help text, output messages, and error messages
- [ ] Update any messaging that doesn't match the brand voice (marketing-speak, vague language, hedging)
- [ ] Ensure error messages are actionable and specific
- [ ] Update help text to be direct and instructional
- [ ] Test all commands to verify output is accurate and helpful
- [ ] Document any changes made to CLI output in commit message

## Task Type

implement

## Blocked By

(none)
