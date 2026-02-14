# CS-319 UI-UX Evidence Locker - SafeHaven (Project One) and Kiva (Project Two)

<p align="center">
  <img src="assets/img/cover.png" alt="SafeHaven wireframes and operational dashboard" width="1000">
</p>

<p align="center">
  <a href="https://github.com/bradsaucier/cct-ui-evidence-locker/actions/workflows/quality.yml">
    <img alt="Quality Gate" src="https://github.com/bradsaucier/cct-ui-evidence-locker/actions/workflows/quality.yml/badge.svg?branch=main">
  </a>
  <a href="https://github.com/bradsaucier/cct-ui-evidence-locker/actions/workflows/links.yml">
    <img alt="Link Integrity" src="https://github.com/bradsaucier/cct-ui-evidence-locker/actions/workflows/links.yml/badge.svg?branch=main">
  </a>
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow">
  </a>
  <img alt="Repo Type" src="https://img.shields.io/badge/Repo%20Type-documentation--first-informational">
  <img alt="Design Doctrine" src="https://img.shields.io/badge/Design%20Doctrine-WCAG%202.2%20%7C%20HIG%20%7C%20Material%203-informational">
</p>

SafeHaven is a caregiver safety concept for dementia support. The high-consequence scenarios are a wandering event beyond a safe boundary and a stove left on long enough to create fire risk.

Kiva is a dual-interface concept where a borrower uses an embedded USSD workflow under low bandwidth and session timeouts, while a lender uses a cloud dashboard for discovery and forecasting under nonprofit cost discipline.

This repository is a documentation-first evidence locker for SNHU CS-319. It consolidates wireframes, requirements, risk assessment, and platform adaptation into an auditable briefing package.

---

## Triage (Rapid Assessment)

Reviewer start point - complete this checklist in order for fastest audit.

| Order | File | Why it matters |
| --- | --- | --- |
| 1 | TRACEABILITY_MATRIX.md | Fast audit map from competencies and requirements to evidence |
| 2 | evidence/03_ops_design/project_one_safehaven/wireframes.md | SafeHaven wireframe intent and file index |
| 3 | evidence/03_ops_design/project_two_kiva/README.md | Kiva USSD borrower flow and lender cloud recommendation |
| 4 | evidence/03_ops_design/project_one_safehaven/design_rationale_from_submission.md | SafeHaven written rationale (Project One) |
| 5 | submissions/CS319_Project_Two_Report.pdf | Kiva written report (Project Two) |
| 6 | evidence/02_mission_reqs/requirements.md | SafeHaven testable UI requirements |
| 7 | evidence/02_mission_reqs/requirements_kiva.md | Kiva testable UI requirements |
| 8 | evidence/02_mission_reqs/risk_register.md | Hazards, mitigations, and residual risk for both projects |
| 9 | evidence/03_ops_design/project_one_safehaven/platform_adaptation.md | Watch and kiosk doctrine |

---

## Artifact Inventory

| Category | Artifact | Purpose | Status |
| --- | --- | --- | --- |
| Briefing | README.md | Executive briefing and review order | Complete |
| Traceability | TRACEABILITY_MATRIX.md | Map competencies and requirements to evidence | Complete |
| Submission record | SUBMISSIONS.md | Submitted vs portfolio enhancements separation | Complete |
| Wireframes (SafeHaven) | assets/img/wireframes/ | Digital wireframes for Project One | Complete |
| Wireframe (Kiva) | assets/img/wireframes/kiva/ | Borrower USSD wireframe for Project Two | Complete |
| SafeHaven execution package | evidence/03_ops_design/project_one_safehaven/ | Wireframes, critique, and platform adaptations | Complete |
| Kiva execution package | evidence/03_ops_design/project_two_kiva/ | USSD flow, constraints, and lender cloud recommendation | Complete |
| Mission requirements | evidence/02_mission_reqs/ | Requirements, definitions, and risk registers | Complete |
| Research and user needs | evidence/01_intel_research/ | User needs framing for both projects | Complete |
| Prototype (optional) | src/prototypes/ | Closed-loop UI mock used for demonstration only | Complete |

---

## Wireframes (SafeHaven)

<table>
  <tr>
    <td align="center">
      <strong>Care Circle Setup</strong><br/>
      <img src="assets/img/wireframes/care_circle_setup.png" alt="Care Circle Setup wireframe showing contacts, escalation timer, and confirm flow" width="240"/>
    </td>
    <td align="center">
      <strong>Home Status Dashboard</strong><br/>
      <img src="assets/img/wireframes/home_status_dashboard.png" alt="Home Status Dashboard wireframe showing priority tiles for wandering, wearable, and stove" width="240"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>Stove Risk Alert</strong><br/>
      <img src="assets/img/wireframes/stove_risk_alert.png" alt="Stove Risk Alert wireframe showing alert, cooking actions, and press-and-hold emergency shutoff control" width="240"/>
    </td>
    <td align="center">
      <strong>Wandering Alert</strong><br/>
      <img src="assets/img/wireframes/wandering_alert.png" alt="Wandering Alert wireframe showing map alert, navigate and call actions, and mark safe resolution control" width="240"/>
    </td>
  </tr>
</table>

---

## Wireframe (Kiva - Embedded USSD)

<p align="center">
  <img src="assets/img/wireframes/kiva/kiva_borrower_ussd_wireframe.png" alt="Kiva borrower embedded USSD wireframe showing entry screen and payment schedule screen" width="900"/>
</p>

---

## Operational Model (Safety-Critical UX - SafeHaven)

1. Context - Caregivers operate under fatigue, stress, and time pressure.
2. Priority - Situational awareness, error prevention, speed to action.
3. Core doctrine - Three-state status, closed-loop confirmation, explicit data freshness treatment.
4. Failure modes - stale status, mis-taps, alert fatigue, unverified actuator changes.
5. Mitigations - discrete status taxonomy, intentional friction for high-impact actions, and verification states.

See evidence/02_mission_reqs/definitions.md and evidence/02_mission_reqs/risk_register.md.

---

## Operational Model (Austere UX - Kiva)

1. Context - USSD is session-based under low bandwidth and session timeout pressure.
2. Priority - critical-data-first entry screen, shallow navigation, minimal keystrokes.
3. Core doctrine - echo-back confirmation for numeric entry and end-to-end "EST" labeling when repayment history is unavailable.
4. Failure modes - session drop during payment, mis-keyed amounts, false precision from derived progress.
5. Mitigations - two-screen architecture, SMS summary as a receipt, and strict label integrity across edge and cloud views.

See evidence/03_ops_design/project_two_kiva/README.md, evidence/02_mission_reqs/requirements_kiva.md, and submissions/CS319_Project_Two_Report.pdf.

---

## Operator Profile

| Field | Value |
| --- | --- |
| Name | Bradley Saucier |
| Service | USAF (Ret.) |
| Role | Deputy Operations Manager, defense tech |
| Program | B.S. Candidate, Computer Science (STEM Project Management), SNHU |

---

## Academic Integrity

This repository contains coursework artifacts produced for SNHU CS-319 and repackaged for portfolio review. All work is my own.

If any portion is reused, cite the repository and distinguish original content from derived material. See CITATION.cff.
