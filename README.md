# CS-319 UI-UX Evidence Locker

SafeHaven (Project One) and Kiva (Project Two)

<p align="left">
  <img src="assets/img/cover.png" alt="CS-319 UI-UX Evidence Locker cover image" width="100%">
</p>

<p align="left">
  <a href="https://github.com/bradsaucier/cct-ui-evidence-locker/actions/workflows/quality.yml">
    <img alt="Quality Gate" src="https://github.com/bradsaucier/cct-ui-evidence-locker/actions/workflows/quality.yml/badge.svg">
  </a>
  <a href="https://github.com/bradsaucier/cct-ui-evidence-locker/actions/workflows/links.yml">
    <img alt="Link Integrity" src="https://github.com/bradsaucier/cct-ui-evidence-locker/actions/workflows/links.yml/badge.svg">
  </a>
  <img alt="License MIT" src="https://img.shields.io/badge/License-MIT-black">
  <img alt="Repo Type documentation-first" src="https://img.shields.io/badge/Repo%20Type-documentation--first-blue">
  <img alt="Design Doctrine WCAG 2.2 HIG Material 3" src="https://img.shields.io/badge/Design%20Doctrine-WCAG%202.2%20%7C%20HIG%20%7C%20Material%203-gray">
</p>

> [!IMPORTANT]
> **BOTTOM LINE UP FRONT**
> This repository is a documentation-first evidence locker for two UI-UX problem sets.
>
> Scope:
>
> 1. SafeHaven - safety-critical caregiver UI under stress and time pressure.
> 2. Kiva - austere embedded USSD borrower flow plus cloud lender view under cost discipline.
>
> Standards:
>
> 1. Make constraints explicit.
> 2. Label estimates as estimates ("EST") end-to-end.
> 3. Maintain traceability from operational need to artifact.

## Contents

1. Project One - SafeHaven
   1. Evidence index: [evidence/03_ops_design/project_one_safehaven/](evidence/03_ops_design/project_one_safehaven/)
   2. Wireframes: [assets/img/wireframes/](assets/img/wireframes/)
   3. Prototype (POC): [src/prototypes/](src/prototypes/)
   4. Submission artifacts: [SUBMISSIONS.md](SUBMISSIONS.md)

2. Project Two - Kiva
   1. Evidence index: [evidence/03_ops_design/project_two_kiva/](evidence/03_ops_design/project_two_kiva/)
   2. Wireframe: [assets/img/wireframes/kiva/kiva_borrower_ussd_wireframe.png](assets/img/wireframes/kiva/kiva_borrower_ussd_wireframe.png)
   3. Written report (PDF): [submissions/CS319_Project_Two_Report.pdf](submissions/CS319_Project_Two_Report.pdf)
   4. Requirements (Kiva): [evidence/02_mission_reqs/requirements_kiva.md](evidence/02_mission_reqs/requirements_kiva.md)

3. Program controls
   1. Traceability: [TRACEABILITY_MATRIX.md](TRACEABILITY_MATRIX.md)
   2. Risk register: [evidence/02_mission_reqs/risk_register.md](evidence/02_mission_reqs/risk_register.md)
   3. Definitions: [evidence/02_mission_reqs/definitions.md](evidence/02_mission_reqs/definitions.md)
   4. Citation: [CITATION.cff](CITATION.cff)
   5. Security policy: [SECURITY.md](SECURITY.md)

## Operational context

SafeHaven is a caregiver safety concept for dementia support. The design focuses on high-consequence scenarios (wandering beyond a safe boundary and stove fire risk) and mitigates operator error through status clarity and closed-loop confirmation.

Kiva is a dual-interface concept where a borrower uses an embedded USSD workflow under low bandwidth and session timeouts, while a lender uses a cloud dashboard for discovery and forecasting under nonprofit cost discipline.

This repo consolidates wireframes, requirements, definitions, traceability, and risk controls into an auditable briefing package.

## Evidence structure

This repository uses a documentation-first layout:

- evidence/01_intel_research - user needs, context, and constraints
- evidence/02_mission_reqs - requirements, definitions, risk controls
- evidence/03_ops_design - project evidence packages (SafeHaven and Kiva)
- evidence/04_after_action - after action review and improvement deltas
- assets/img - cover and wireframe assets
- src/prototypes - interactive mock (SafeHaven proof of concept)

## Project One - SafeHaven (safety-critical caregiver UI)

Operational hazards addressed:

- Wandering beyond a safe boundary
- Stove left on long enough to create fire risk

Design controls used:

- Three-state status model to reduce cognitive load
- Closed-loop confirmations for high-impact actions
- Role separation (primary vs backup contacts) for escalation clarity

Evidence package:

- Wireframes and rationale: evidence/03_ops_design/project_one_safehaven/
- Prototype (POC): src/prototypes/

## Project Two - Kiva (austere embedded + cloud)

Operational constraints addressed:

- USSD session timeouts and limited character budget
- Numeric-only input and error-prone keypad entry
- Shared-device privacy requirements
- Cost discipline for nonprofit analytics workloads

Design doctrine:

- Flat and fast menu flow to reduce timeout risk
- "EST" labeling on derived values to prevent false precision
- "0 Exit" for privacy on shared devices

Evidence package:

- Design brief: evidence/03_ops_design/project_two_kiva/README.md
- Wireframe: assets/img/wireframes/kiva/kiva_borrower_ussd_wireframe.png
- Report: submissions/CS319_Project_Two_Report.pdf

## Verification posture

Automated checks run on every push and pull request:

- Markdown lint (format discipline)
- Spell check (terminology discipline)
- Link integrity (rot detection)

If Link Integrity fails on a known rate-limited badge provider, the lychee configuration excludes that domain to keep checks focused on content links.

## License

MIT License. See [LICENSE](LICENSE).

## Contact

Bradley Saucier
