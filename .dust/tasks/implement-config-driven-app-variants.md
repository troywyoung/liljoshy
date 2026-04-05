# Implement config-driven app variants

Refactor the app to load product behavior from configuration instead of a single hardcoded Hot Take setup. Use the defined application model so one runtime can support related applications with different prompts, messaging, styling, and feature flags from a structured configuration source.

## Task Type

implement

## Blocked By

- [Define Meta Application Model](define-meta-application-model.md)


## Definition of Done

- The running app reads its product identity, prompt configuration, user messaging, and key presentation settings from a structured configuration source.
- Hot Take remains supported as the default configured application.
- A second example configuration exists for a related variant such as True Confessions.
- Shared runtime behavior is separated from variant-specific content and presentation settings.
- The implementation follows the configuration boundaries defined in the meta application model task.
