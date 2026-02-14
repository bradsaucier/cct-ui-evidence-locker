# Risk Register

This register documents hazards and mitigations for the SafeHaven UI and the Kiva dual-interface concept. The intent is traceable risk thinking, not exhaustive hazard analysis.

## 1. SafeHaven (safety-critical caregiver support)

| Risk-ID | Hazard | Cause | Impact | Mitigation | Residual risk | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| SH-R-01 | False safe state due to stale data | Sensor comms loss or delayed updates | Caregiver trusts incorrect state and delays action | Data freshness model and explicit stale cues | Medium | evidence/02_mission_reqs/definitions.md |
| SH-R-02 | Accidental high-impact action | Mis-tap under stress | Unintended actuator change or alert dismissal | Positive control (press-and-hold) and confirmation patterns | Low | assets/img/wireframes/stove_risk_alert.png |
| SH-R-03 | Alert fatigue | Excess non-actionable notifications | Operator ignores real alerts | Escalation thresholds and actionable messaging | Medium | evidence/02_mission_reqs/definitions.md |
| SH-R-04 | Ambiguous configuration | Settings imply edits are applied when they are not | Misconfigured safety envelope | Validation, review screen, and error states | Medium | assets/img/wireframes/care_circle_setup.png |
| SH-R-05 | Location exposure | Sensitive details shown on shared/lock screen | Privacy loss and caregiver risk | Privacy-aware notification policy and masking | Low | evidence/02_mission_reqs/notification_privacy_policy.md |

## 2. Kiva (austere embedded USSD + cloud)

| Risk-ID | Hazard | Cause | Impact | Mitigation | Residual risk | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| KV-R-01 | Session timeout during payment | USSD session drops under latency | Abandoned payment attempt and user confusion | Two-screen flow, minimal input, and continuity via SMS receipt summary | Medium | evidence/03_ops_design/project_two_kiva/README.md |
| KV-R-02 | Mis-keyed payment amount | Numeric entry on feature phones | Wrong payment entry | Echo-back confirmation prior to commit | Low | evidence/03_ops_design/project_two_kiva/README.md |
| KV-R-03 | False precision in repayment progress | No repayment transaction history | Users act on estimates as facts | "EST" labeling for derived outputs across borrower and lender views | Medium | submissions/CS319_Project_Two_Report.pdf |
| KV-R-04 | Shared device privacy exposure | Handset is shared and screens persist | Sensitive account exposure | Fast exit (0) and minimal on-screen sensitive data | Medium | submissions/CS319_Project_Two_Report.pdf |
