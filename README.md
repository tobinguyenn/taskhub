# TaskHub

## Convention

This document outlines the conventions for contributing to the TaskHub project. We need to follow these guidelines to ensure a smooth development and review process.

We follow the [Airbnb React](https://airbnb.io/javascript/react/) style guide for JavaScript code.

We adhere to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification) for consistent commit messages.

## Git flow

We follow a Git branching strategy for efficient development:

- **main** branch: Stable code for deployment. Direct pushes are **not allowed**.
- Feature branches: Always checkout/base from **main** branch (format: [Branch Naming](#branch-naming)).
- Pull Requests: Submit code for review before merging into main.

### Branch Naming

Branch names must follow the format: `feature.[modifier].trello_card_id`

#### Modifier

| Name | Description | Example |
| ----------- | ----------- | ----------- |
| new | New feature | feature.new.foo |
| revamp | Update existing feature | feature.revamp.foo |
| bugfix | Fix bug | feature.bugfix.foo |

### Pull Requests (PRs)

- PR names must match the Trello card name and include the card ID in square brackets (e.g., [#CARD_ID] Add User).

**The PR URL must be attached to the corresponding Trello card.**
