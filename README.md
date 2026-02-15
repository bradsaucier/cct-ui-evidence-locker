# CS-319 UI-UX Evidence Locker

SafeHaven (Project One) - Kiva (Project Two)

<p align="left">
  <img src="assets/img/cover.png" alt="CS-319 UI-UX Evidence Locker - SafeHaven caregiver safety and Kiva microfinance USSD design" width="100%">
</p>

<p align="left">
  <a href="https://github.com/bradsaucier/cct-ui-evidence-locker/actions/workflows/quality.yml">
    <img alt="Quality Gate - Markdown lint and spell check" src="https://github.com/bradsaucier/cct-ui-evidence-locker/actions/workflows/quality.yml/badge.svg">
  </a>
  <a href="https://github.com/bradsaucier/cct-ui-evidence-locker/actions/workflows/links.yml">
    <img alt="Link Integrity - dead link detection on every push" src="https://github.com/bradsaucier/cct-ui-evidence-locker/actions/workflows/links.yml/badge.svg">
  </a>
  <img alt="License MIT" src="https://img.shields.io/badge/License-MIT-black">
  <img alt="Repo Type documentation-first" src="https://img.shields.io/badge/Repo%20Type-documentation--first-blue">
  <img alt="Design Doctrine WCAG 2.2 HIG Material 3" src="https://img.shields.io/badge/Design%20Doctrine-WCAG%202.2%20%7C%20HIG%20%7C%20Material%203-gray">
</p>

> [!IMPORTANT]
> **BOTTOM LINE UP FRONT**
>
> **Asset:** Documentation-first UI-UX evidence locker.
> **Scope:** Two problem sets in constrained, high-consequence environments.
>
> 1. **Operation SafeHaven:** Safety-critical interface for high-stress, time-compressed environments.
> 2. **Operation Kiva:** Austere USSD borrower flow (Edge) plus cloud lender dashboard (Core) under cost discipline.
>
> **Standards:** Explicit constraints. Estimates marked "EST". Full requirements traceability.
> **SITREP:** Primary artifacts are linked below. CI badges reflect verification status.
## Table of contents

1. [Operational overview](#operational-overview)
2. [Visual intel](#visual-intel)
3. [Operation SafeHaven](#operation-safehaven-project-one)
4. [Operation Kiva](#operation-kiva-project-two)
5. [Prototype deployment](#prototype-deployment)
6. [Operational limitations](#operational-limitations)
7. [Verification and QA](#verification-and-qa)
8. [Evidence index](#evidence-index)
9. [Program controls](#program-controls)
10. [License](#license)
11. [Contact](#contact)

---
## Operational overview

| Directive | Specification |
| --- | --- |
| Doctrine | Verifiable claims. Full requirements traceability. Managed risk. |
| Deliverables | Wireframes, requirements, risk register, traceability matrix, PDFs, local prototype. |
| Verification | Markdown lint, spell check, link integrity (Lychee). |

| Quick access | Type | Link |
| --- | --- | --- |
| **SAFEHAVEN PROTOTYPE (LOCAL)** | HTML | [Launch simulation](src/prototypes/safehaven-ui-mock.html) |
| SafeHaven submission | PDF | [CS319_Project_One_Submission.pdf](submissions/CS319_Project_One_Submission.pdf) |
| Kiva written report | PDF | [CS319_Project_Two_Report.pdf](submissions/CS319_Project_Two_Report.pdf) |
| Traceability matrix | Markdown | [TRACEABILITY_MATRIX.md](TRACEABILITY_MATRIX.md) |
| Risk register | Markdown | [risk_register.md](evidence/02_mission_reqs/risk_register.md) |
| SafeHaven wireframes | PNG | [assets/img/wireframes/](assets/img/wireframes/) |
| Kiva USSD wireframe | PNG | [kiva_borrower_ussd_wireframe.png](assets/img/wireframes/kiva/kiva_borrower_ussd_wireframe.png) |
| References | Markdown | [REFERENCES.md](REFERENCES.md) |

<details>
<summary><strong>Technical specifications and standards</strong></summary>

| Category | Implementation |
| --- | --- |
| Evidence format | Markdown evidence packages, PDF submissions, PNG wireframes |
| Prototype | HTML, CSS, vanilla JavaScript (local) |
| Standards | WCAG 2.2, HIG, Material Design 3 |

</details>

---
## Visual intel

<table>
<tr>
<td width="50%" valign="top">

**SafeHaven - Home Status Dashboard (three-state status reduces cognitive load)**

<img src="assets/img/wireframes/home_status_dashboard.png" alt="SafeHaven home status dashboard wireframe showing three-state status model for caregiver at-a-glance awareness" width="100%">

</td>
<td width="50%" valign="top">

**Kiva - Borrower USSD Flow (flat menu, numeric input, shared-device privacy)**

<img src="assets/img/wireframes/kiva/kiva_borrower_ussd_wireframe.png" alt="Kiva borrower USSD wireframe showing flat menu flow with numeric input and 0-exit for shared device privacy" width="100%">

</td>
</tr>
</table>

---


---
## Operation SafeHaven (Project One)

**Status:** Submission-ready artifact set - **Role:** Lead UX engineer (course work)

### Situation

Operating Environment: Residential setting. Operator subject to fatigue and cognitive overload. The interface must reduce errors during escalation and preserve privacy during alerts.

### Doctrine

| Hazard | Control | Evidence |
| --- | --- | --- |
| Wandering beyond a safe boundary | Control: Three-state status model. Rapid alert affordances. | [wireframes.md](evidence/03_ops_design/project_one_safehaven/wireframes.md) |
| Hazard: Unattended thermal source (stove-oven) | Control: Closed-loop alerting with clear acknowledgment state. | [design_rationale_from_submission.md](evidence/03_ops_design/project_one_safehaven/design_rationale_from_submission.md) |
| Lock-screen privacy during alerts | Control: Non-descriptive notification language and policy. | [notification_privacy_policy.md](evidence/02_mission_reqs/notification_privacy_policy.md) |

### Execution

Design intent and platform adaptation are documented in the evidence package. Requirements are traced in the matrix for auditability.

### Evidence package

| Item | Link |
| --- | --- |
| Design rationale | [design_rationale_from_submission.md](evidence/03_ops_design/project_one_safehaven/design_rationale_from_submission.md) |
| Platform adaptation | [platform_adaptation.md](evidence/03_ops_design/project_one_safehaven/platform_adaptation.md) |
| Wireframes | [wireframes.md](evidence/03_ops_design/project_one_safehaven/wireframes.md) |
| Requirements traceability | [TRACEABILITY_MATRIX.md](TRACEABILITY_MATRIX.md) |
| Submission (PDF) | [CS319_Project_One_Submission.pdf](submissions/CS319_Project_One_Submission.pdf) |

---

## Operation Kiva (Project Two)

**Status:** Submission-ready artifact set - **Role:** Lead UX engineer (course work)

### Situation

Scope: Dual-interface. Austere USSD borrower flow (Edge) plus cloud lender dashboard (Core). Constraints include low bandwidth, shared devices, and cost discipline on the cloud side.

### Doctrine

| Constraint | Control | Evidence |
| --- | --- | --- |
| Low-bandwidth borrower access | Control: USSD flow with short prompts and numeric input. | [README.md](evidence/03_ops_design/project_two_kiva/README.md) |
| Shared-device privacy | Control: "0 Exit" pattern to terminate session fast. | [README.md](evidence/03_ops_design/project_two_kiva/README.md) |
| Forecast volatility | Control: Label derived values as "EST" to prevent false precision. | [requirements_kiva.md](evidence/02_mission_reqs/requirements_kiva.md) |

### Execution

USSD flow and lender dashboard intent are documented in the design brief and written report. Requirements and user needs are captured as separate artifacts for traceability.

### Evidence package

| Item | Link |
| --- | --- |
| Design brief | [README.md](evidence/03_ops_design/project_two_kiva/README.md) |
| Requirements | [requirements_kiva.md](evidence/02_mission_reqs/requirements_kiva.md) |
| User needs | [kiva_user_needs_summary.md](evidence/01_intel_research/kiva_user_needs_summary.md) |
| Wireframe | [kiva_borrower_ussd_wireframe.png](assets/img/wireframes/kiva/kiva_borrower_ussd_wireframe.png) |
| Written report (PDF) | [CS319_Project_Two_Report.pdf](submissions/CS319_Project_Two_Report.pdf) |
| Requirements traceability | [TRACEABILITY_MATRIX.md](TRACEABILITY_MATRIX.md) |

---
## Prototype deployment

1. Open: [src/prototypes/safehaven-ui-mock.html](src/prototypes/safehaven-ui-mock.html)
2. Launch locally (double-click or open with your browser).
3. Optional: review implementation notes in [src/prototypes/README.md](src/prototypes/README.md)

---
## Operational limitations

> [!WARNING]
> **OPERATIONAL LIMITATIONS**
>
> 1. **Prototype fidelity:** Static HTML proof of concept. No production services attached.
> 2. **Kiva flow scope:** UX artifact only. Carrier gateway integration is out of scope for this repository.

---
## Verification and QA

> [!TIP]
> Automated checks run on every push and pull request. Badges at the top of this page reflect current status.

| Check | What it catches |
| --- | --- |
| Markdown lint | Format and heading discipline |
| Spell check | Terminology consistency |
| Link integrity (lychee) | Broken internal and external links |

If Link Integrity fails on a known rate-limited badge provider, the lychee configuration excludes that domain to keep checks focused on content links.

---

## Evidence index

<details>
<summary><strong>Full evidence index</strong> (expand for complete directory map)</summary>

### Evidence structure

```text
evidence/
  01_intel_research/               User needs and problem framing
    user_needs_summary.md          SafeHaven user needs
    kiva_user_needs_summary.md     Kiva user needs
  02_mission_reqs/                 Requirements, definitions, risk controls
    requirements.md                SafeHaven requirements
    requirements_kiva.md           Kiva requirements
    definitions.md                 Term definitions
    risk_register.md               Risk register (both projects)
    notification_privacy_policy.md SafeHaven notification privacy
  03_ops_design/                   Project evidence packages
    project_one_safehaven/         SafeHaven design evidence
      critique.md
      design_rationale_from_submission.md
      platform_adaptation.md
      wireframes.md
    project_two_kiva/              Kiva design evidence
      README.md
  04_after_action/                 Iteration and review
    after_action_review.md
```

### Wireframe assets

```text
assets/img/wireframes/
  care_circle_setup.png            SafeHaven care circle setup screen
  home_status_dashboard.png        SafeHaven three-state dashboard
  stove_risk_alert.png             SafeHaven stove fire alert screen
  wandering_alert.png              SafeHaven wandering alert screen
  kiva/
    kiva_borrower_ussd_wireframe.png  Kiva USSD borrower flow
```

### Prototype files

```text
src/prototypes/
  safehaven-ui-mock.html           Entry point - open in browser
  app.js                           State management logic
  styles.css                       Presentation layer
  README.md                        Prototype instructions
```

### Design system

```text
design_system/
  tokens.json                      Design token values
  tokens.md                        Token documentation
```

</details>

---

## Program controls

| Control | Link |
| --- | --- |
| Traceability matrix | [TRACEABILITY_MATRIX.md](TRACEABILITY_MATRIX.md) |
| Risk register | [risk_register.md](evidence/02_mission_reqs/risk_register.md) |
| Definitions | [definitions.md](evidence/02_mission_reqs/definitions.md) |
| Design tokens | [tokens.md](design_system/tokens.md) |
| Submission index | [SUBMISSIONS.md](SUBMISSIONS.md) |
| After action review | [after_action_review.md](evidence/04_after_action/after_action_review.md) |
| References | [REFERENCES.md](REFERENCES.md) |
| Security policy | [SECURITY.md](SECURITY.md) |
| Citation | [CITATION.cff](CITATION.cff) |
| Contributing | [CONTRIBUTING.md](CONTRIBUTING.md) |

## License

MIT License. See [LICENSE](LICENSE).

## Contact

Bradley Saucier
