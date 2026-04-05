# Define meta application model

Define the configuration shape for app variants. Specify how shared platform behavior, per-app overrides, prompt structure, visual identity, user messaging, input modes, and feed behavior should be represented so later implementation can support Hot Take and close variants like True Confessions without hardcoded branching.

## Task Type

implement

## Blocked By

(none)


## Definition of Done

- A task output document or implementation notes define the core application configuration model.
- The model covers prompt structure, design system tokens, user messaging, enabled input modes, and feed behavior.
- The model distinguishes shared platform defaults from app-specific overrides.
- The model includes at least one concrete example for Hot Take and one for True Confessions.
- The output names the code locations or modules that should consume this configuration in the follow-up implementation task.
