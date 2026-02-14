# Requirements - Kiva (Project Two)

These requirements translate the austere borrower and cloud lender constraints into testable UI behavior.

## 1. Borrower USSD requirements

| KV-REQ-ID | Priority | Requirement | Acceptance criteria | Evidence |
| --- | --- | --- | --- | --- |
| KV-REQ-01 | P1 | Enforce a two-screen borrower architecture | Entry screen contains status, next action, interval, term, and loan ID | evidence/03_ops_design/project_two_kiva/README.md |
| KV-REQ-02 | P1 | Minimize keystrokes and avoid deep menus | Primary actions reachable from Screen 1 without nested navigation | evidence/03_ops_design/project_two_kiva/README.md |
| KV-REQ-03 | P1 | Require echo-back confirmation for payment entry | System repeats entered amount and requires explicit confirm before commit | evidence/03_ops_design/project_two_kiva/README.md |
| KV-REQ-04 | P1 | Preserve data honesty for derived values | Any derived repayment field is labeled "EST" | evidence/03_ops_design/project_two_kiva/README.md |
| KV-REQ-05 | P2 | Provide resilience for dropped sessions | SMS summary sent after key actions or at session end | evidence/03_ops_design/project_two_kiva/README.md |
| KV-REQ-06 | P2 | Provide fast exit for shared-device privacy | User can exit quickly and predictably | evidence/03_ops_design/project_two_kiva/README.md |

## 2. Lender cloud requirements

| KV-REQ-ID | Priority | Requirement | Acceptance criteria | Evidence |
| --- | --- | --- | --- | --- |
| KV-REQ-07 | P1 | Lead with verifiable terms and stated loan purpose | Loan detail and dashboards prioritize structured fields over narrative framing | submissions/CS319_Project_Two_Report.pdf |
| KV-REQ-08 | P1 | Preserve "EST" labeling in forecast views | Estimate labels appear anywhere derived repayment status is shown | submissions/CS319_Project_Two_Report.pdf |
| KV-REQ-09 | P1 | Use precomputed aggregates for dashboard responsiveness | Portfolio views load without scanning raw records per request | submissions/CS319_Project_Two_Report.pdf |
