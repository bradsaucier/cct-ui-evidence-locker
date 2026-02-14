# Traceability Matrix

## 1. Purpose

This matrix maps course competencies and operational requirements to evidence artifacts.

## 2. Course competencies to evidence

| Competency ID | Competency | Primary evidence |
| --- | --- | --- |
| CS-30694 | Analyze UI-UX design fundamentals | evidence/02_mission_reqs/definitions.md |
| CS-30695 | Develop UI-UX for embedded and cloud-based systems | evidence/03_ops_design/project_two_kiva/README.md |
| CS-30696 | Develop UI-UX for mobile and touch-based systems | evidence/03_ops_design/project_one_safehaven/wireframes.md |

## 3. Operational requirements to evidence

### 3.1 SafeHaven (Project One)

| REQ-ID | Evidence | Status |
| --- | --- | --- |
| REQ-01 | evidence/03_ops_design/project_one_safehaven/wireframes.md | Complete |
| REQ-02 | evidence/03_ops_design/project_one_safehaven/critique.md | Complete |
| REQ-03 | assets/img/wireframes/care_circle_setup.png | Complete |
| REQ-04 | evidence/02_mission_reqs/definitions.md | Complete |
| REQ-05 | assets/img/wireframes/stove_risk_alert.png | Complete |
| REQ-06 | evidence/02_mission_reqs/definitions.md | Complete |
| REQ-07 | evidence/02_mission_reqs/notification_privacy_policy.md | Complete |
| REQ-08 | evidence/02_mission_reqs/risk_register.md | Complete |
| REQ-09 | evidence/03_ops_design/project_one_safehaven/critique.md | Complete |
| REQ-10 | evidence/03_ops_design/project_one_safehaven/platform_adaptation.md | Complete |

### 3.2 Kiva (Project Two)

| KV-REQ-ID | Evidence | Status |
| --- | --- | --- |
| KV-REQ-01 | evidence/03_ops_design/project_two_kiva/README.md | Complete |
| KV-REQ-02 | evidence/03_ops_design/project_two_kiva/README.md | Complete |
| KV-REQ-03 | evidence/03_ops_design/project_two_kiva/README.md | Complete |
| KV-REQ-04 | evidence/03_ops_design/project_two_kiva/README.md | Complete |
| KV-REQ-05 | evidence/03_ops_design/project_two_kiva/README.md | Complete |
| KV-REQ-06 | evidence/03_ops_design/project_two_kiva/README.md | Complete |
| KV-REQ-07 | submissions/CS319_Project_Two_Report.pdf | Complete |
| KV-REQ-08 | submissions/CS319_Project_Two_Report.pdf | Complete |
| KV-REQ-09 | submissions/CS319_Project_Two_Report.pdf | Complete |

## 4. Verification posture

| Control | Implementation | Evidence |
| --- | --- | --- |
| Markdown hygiene | markdownlint-cli2 on all Markdown files | .github/workflows/quality.yml |
| Spell discipline | cspell strict mode | cspell.json, project-words.txt |
| Link integrity | lychee on all Markdown files | .github/workflows/links.yml |
