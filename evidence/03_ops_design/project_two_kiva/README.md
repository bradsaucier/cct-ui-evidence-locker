# Project Two - Kiva - Embedded USSD Borrower and Lender Cloud Recommendation

![Status](https://img.shields.io/badge/Status-Integrated-success)

## 1. Purpose

This project demonstrates UI-UX design for a shared dataset across two fundamentally different operating environments.

1. Borrower interface - embedded USSD workflow optimized for low bandwidth, session timeouts, and numeric-only input.
2. Lender interface - cloud application optimized for exploration, portfolio visibility, and forecasting under nonprofit cost discipline.

Primary dataset constraint: repayment transaction history is not available. Repayment progress therefore relies on interval and term as proxies. All derived repayment outputs are labeled "EST" (estimate) to preserve data honesty.

## 2. Artifacts

| Artifact | Format | Path |
| --- | --- | --- |
| Borrower USSD wireframe | PNG | assets/img/wireframes/kiva/kiva_borrower_ussd_wireframe.png |
| Design rationale and lender system recommendation | PDF | submissions/CS319_Project_Two_Report.pdf |

## 3. Borrower - Embedded USSD (Austere Environment)

USSD is menu-driven and session-based. Every additional screen and keystroke increases timeout risk. The design therefore enforces a two-screen architecture.

### 3.1 Screen 1 - Situation awareness and directive

Screen 1 presents critical information at entry to reduce navigation and cognitive load.

| Field | Rationale |
| --- | --- |
| Group (GRP) | Context confirmation to reduce wrong-account actions in shared or group lending scenarios |
| Status | High-level state indicator |
| Next action (NEXT) | Imperative directive that replaces raw system states with a single actionable instruction |
| Interval and term | Planning proxies required when repayment history is not available |
| Loan ID | Anchor for support, dispute resolution, and receipts |

### 3.2 Screen 2 - Execution and payment entry

Screen 2 contains the only high-stakes action: entering and confirming a payment amount.

Execution controls:
1. Numeric entry only, optimized for feature phone keypad.
2. Echo-back confirmation before commit to reduce mis-keyed payments.
3. "EST" labeling applied to derived values when confirmations are not possible from the dataset.

### 3.3 Resilience and privacy controls

Resilience:
- If the session drops, an SMS summary provides continuity and a receipt without requiring an immediate reconnect.

Privacy:
- A fast exit option supports shared-device reality and reduces exposure to the next handset user.

## 4. Lender - Cloud System Recommendation (Strategic View)

The lender dashboard should lead with verifiable terms and stated loan purpose, not curated narratives. Forecast and progress views must preserve the same "EST" discipline used on the borrower side.

Recommended core modules (screens):
1. Marketplace discovery - search and filters across sector, activity, country, loan use, amount, and status.
2. Portfolio dashboard - allocation breakdowns (sector, country, activity, repayment interval, status) built from precomputed aggregates.
3. Loan detail and recycling forecast - terms, status, and estimate-labeled repayment progress.

Architecture recommendation (cost discipline):
1. Ingestion - pull raw snapshots from the platform feed.
2. Transform - normalize fields used for aggregation (sector, country, activity, use, term, interval).
3. Data store - index on aggregation drivers first.
4. Aggregation jobs - periodic batch runs that precompute summary tables so dashboards do not scan raw records per request.

## 5. Integration rules

1. Label integrity - if a value is labeled "EST" at the edge, it remains labeled "EST" in the cloud.
2. Shallow navigation - keep borrower flow flat and time-bounded.
3. Closed-loop confirmation - any high-impact borrower action requires echo-back confirmation.
