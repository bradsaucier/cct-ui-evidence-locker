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
> Documentation-first evidence locker for two UI-UX problem sets built for constrained, high-consequence environments.
>
> 1. **SafeHaven** - safety-critical caregiver UI under stress and time pressure.
> 2. **Kiva** - austere USSD borrower flow plus cloud lender dashboard under cost discipline.
>
> Standards: constraints explicit, estimates labeled "EST", traceability from operational need to artifact.

---

## Mission brief

| Parameter | Operational data |
| --- | --- |
| Purpose | Reduce evaluator friction. One-click access to primary artifacts. |
| Doctrine | Evidence locker - verifiable claims, traceability, managed risk. |
| Primary deliverables | Wireframes, requirements, risk register, traceability matrix, PDFs, prototype. |
| Prototype | Static HTML proof of concept (open locally). |
| Verification | CI checks: markdown lint, spell check, link integrity. |

---

## Key artifacts

| Artifact | Type | Link |
| --- | --- | --- |
| SafeHaven submission | PDF | [CS319_Project_One_Submission.pdf](submissions/CS319_Project_One_Submission.pdf) |
| Kiva written report | PDF | [CS319_Project_Two_Report.pdf](submissions/CS319_Project_Two_Report.pdf) |
| SafeHaven prototype (entry point) | HTML | [safehaven-ui-mock.html](src/prototypes/safehaven-ui-mock.html) - open locally in a browser |
| SafeHaven wireframes (4 screens) | PNG | [assets/img/wireframes/](assets/img/wireframes/) |
| Kiva USSD wireframe | PNG | [kiva_borrower_ussd_wireframe.png](assets/img/wireframes/kiva/kiva_borrower_ussd_wireframe.png) |
| Traceability matrix | Markdown | [TRACEABILITY_MATRIX.md](TRACEABILITY_MATRIX.md) |
| Risk register | Markdown | [risk_register.md](evidence/02_mission_reqs/risk_register.md) |

---

## Wireframe previews

<table>
<tr>
<td width="50%" valign="top">

**SafeHaven - Home Status Dashboard**

<img src="assets/img/wireframes/home_status_dashboard.png" alt="SafeHaven home status dashboard wireframe showing three-state status model for caregiver at-a-glance awareness" width="100%">

</td>
<td width="50%" valign="top">

**Kiva - Borrower USSD Flow**

<img src="assets/img/wireframes/kiva/kiva_borrower_ussd_wireframe.png" alt="Kiva borrower USSD wireframe showing flat menu flow with numeric input and 0-exit for shared device privacy" width="100%">

</td>
</tr>
</table>

---

## Project One - SafeHaven

Safety-critical caregiver UI concept for dementia support. The operating environment is a home under stress, where the operator may be sleep-deprived and time-compressed. The interface must reduce cognitive load and prevent errors during escalation.

**Hazards and controls**

| Hazard | Control measure | Evidence |
| --- | --- | --- |
| Wandering beyond a safe boundary | Three-state status model + rapid alert affordances | [wireframes.md](evidence/03_ops_design/project_one_safehaven/wireframes.md) |
| Stove left on long enough to create fire risk | Closed-loop confirmations for high-impact actions | [design_rationale_from_submission.md](evidence/03_ops_design/project_one_safehaven/design_rationale_from_submission.md) |
| Lock-screen privacy during alerts | Non-descriptive notification pattern | [notification_privacy_policy.md](evidence/02_mission_reqs/notification_privacy_policy.md) |

**Evidence package**

| Item | Link |
| --- | --- |
| Design rationale | [design_rationale_from_submission.md](evidence/03_ops_design/project_one_safehaven/design_rationale_from_submission.md) |
| Tactical critique | [critique.md](evidence/03_ops_design/project_one_safehaven/critique.md) |
| Platform adaptation | [platform_adaptation.md](evidence/03_ops_design/project_one_safehaven/platform_adaptation.md) |
| Wireframe index | [wireframes.md](evidence/03_ops_design/project_one_safehaven/wireframes.md) |
| Requirements | [requirements.md](evidence/02_mission_reqs/requirements.md) |
| User needs | [user_needs_summary.md](evidence/01_intel_research/user_needs_summary.md) |
| Prototype (open locally) | [safehaven-ui-mock.html](src/prototypes/safehaven-ui-mock.html) |

---

## Project Two - Kiva

Dual-interface concept: austere USSD borrower flow under low bandwidth and session timeouts, plus a cloud lender dashboard for discovery and forecasting.

**Constraints and doctrine**

| Constraint | Design doctrine | Evidence |
| --- | --- | --- |
| USSD timeouts and character budget | Flat and fast menu flow to reduce timeout risk | [README.md](evidence/03_ops_design/project_two_kiva/README.md) |
| Numeric-only input, error-prone keypad | Input minimization, clear validation messaging | [requirements_kiva.md](evidence/02_mission_reqs/requirements_kiva.md) |
| Shared-device privacy | "0 Exit" pattern to terminate session quickly | [README.md](evidence/03_ops_design/project_two_kiva/README.md) |
| Forecast volatility | Label derived values as "EST" to prevent false precision | [requirements_kiva.md](evidence/02_mission_reqs/requirements_kiva.md) |

**Evidence package**

| Item | Link |
| --- | --- |
| Design brief | [README.md](evidence/03_ops_design/project_two_kiva/README.md) |
| Requirements | [requirements_kiva.md](evidence/02_mission_reqs/requirements_kiva.md) |
| User needs | [kiva_user_needs_summary.md](evidence/01_intel_research/kiva_user_needs_summary.md) |
| Wireframe | [kiva_borrower_ussd_wireframe.png](assets/img/wireframes/kiva/kiva_borrower_ussd_wireframe.png) |
| Written report (PDF) | [CS319_Project_Two_Report.pdf](submissions/CS319_Project_Two_Report.pdf) |

---

## Run the prototype

1. Open: [src/prototypes/safehaven-ui-mock.html](src/prototypes/safehaven-ui-mock.html)
2. Launch it locally (double-click or open with your browser).
3. Optional: review implementation notes in [src/prototypes/README.md](src/prototypes/README.md)

---

## Known limitations

- Prototype is static HTML and illustrates interaction design intent. It is not wired to production services.
- Kiva USSD flow is a design artifact. Carrier gateway integration is out of scope for this repository.

---

## Verification

> [!TIP]
> Automated checks run on every push and pull request. Badges at the top of this page reflect current status.

| Check | What it catches |
| --- | --- |
| Markdown lint | Format and heading discipline |
| Spell check | Terminology consistency |
| Link integrity (lychee) | Broken internal and external links |

If Link Integrity fails on a known rate-limited badge provider, the lychee configuration excludes that domain to keep checks focused on content links.

---

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
