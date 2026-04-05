# Implement config-driven app variants

Refactor the app to load product behavior from configuration instead of a single hardcoded Hot Take setup. This creates the technical foundation for running related applications with different prompts, messaging, and styling from one system.

## Task Type

implement

## Blocked By

- [Define Meta Application Model](define-meta-application-model.md)


## Definition of Done

- The running app reads its product identity, prompt configuration, and user messaging from a structured configuration source.
- Hot Take remains supported as the default configured application.
- A second example configuration exists for a related variant such as True Confessions.
- Shared runtime behavior is separated from variant-specific content and presentation settings.
