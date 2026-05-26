# Contributing to QuoteHub Showcase

Thank you for your interest in contributing to the QuoteHub platform showcase. This document outlines the process for reporting issues, proposing changes, and submitting pull requests.

---

## Code of Conduct

By participating in this project, you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

---

## How to Contribute

### Reporting Bugs

Before filing a bug report, please check the [existing issues](https://github.com/rblake2320/quotehub-showcase/issues) to avoid duplicates. When filing a new bug report, use the **Bug Report** issue template and include:

- A clear, descriptive title
- Steps to reproduce the issue
- Expected vs. actual behavior
- Screenshots or screen recordings if applicable
- Browser, OS, and viewport size

### Suggesting Features

Feature requests are welcome. Use the **Feature Request** issue template and describe:

- The problem you are trying to solve
- Your proposed solution
- Any alternatives you have considered
- Whether this is related to a specific section of the showcase (e.g., Creator Brands, Trust & IP)

### Submitting Pull Requests

1. **Fork** the repository and create a branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes.** Follow the coding standards below.

3. **Test your changes** by running the dev server (`pnpm dev`) and verifying the affected sections render correctly across desktop and mobile viewports.

4. **Commit** with a clear, descriptive message following the [Conventional Commits](https://www.conventionalcommits.org/) format:
   ```
   feat(trust-section): add DMCA dispute flow visualization
   fix(creator-showcase): correct font rendering on Safari
   docs(readme): update related repositories table
   ```

5. **Push** your branch and open a pull request against `main`. Fill out the pull request template completely.

6. A maintainer will review your PR. Please be responsive to feedback.

---

## Coding Standards

### TypeScript

- All new components must be written in TypeScript with explicit prop types.
- Avoid `any` types. Use proper interfaces or type aliases.
- Keep component files focused — one primary exported component per file.

### Styling

- Use Tailwind CSS utility classes as the primary styling mechanism.
- For inline styles, use only when Tailwind utilities are insufficient (e.g., dynamic OKLCH color values).
- Follow the **Dark Tech Brutalism** design system defined in `client/src/index.css`. Do not introduce new color values without updating the design tokens.
- All new sections must be responsive (mobile-first, tested at 375px, 768px, and 1280px widths).

### Components

- Place new section components in `client/src/components/`.
- Use the `useInView` pattern (already defined in several components) for scroll-triggered animations.
- Do not store images or media in `client/public/` or `client/src/assets/`. Use the `manus-upload-file --webdev` workflow for static assets.

### Accessibility

- All interactive elements must have visible focus states.
- Use semantic HTML elements (`<section>`, `<nav>`, `<main>`, `<article>`) appropriately.
- Provide `aria-label` attributes for icon-only buttons.
- Ensure color contrast ratios meet WCAG 2.1 AA standards.

---

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/quotehub-showcase.git
cd quotehub-showcase

# Install dependencies
pnpm install

# Start the dev server
pnpm dev

# Type-check
pnpm check

# Format code
pnpm format
```

---

## Branch Naming Convention

| Type | Pattern | Example |
|---|---|---|
| Feature | `feature/short-description` | `feature/sponsor-tier-cards` |
| Bug fix | `fix/short-description` | `fix/ledger-chain-animation` |
| Documentation | `docs/short-description` | `docs/update-architecture-links` |
| Refactor | `refactor/short-description` | `refactor/trust-section-layout` |

---

## Questions?

If you have questions that are not addressed here, open a [Discussion](https://github.com/rblake2320/quotehub-showcase/discussions) rather than an issue.
