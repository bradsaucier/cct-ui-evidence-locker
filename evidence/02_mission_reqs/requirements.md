# Requirements

These requirements translate the SafeHaven user story into testable UI behavior.

| REQ-ID | Priority | Requirement | Acceptance criteria | Evidence |
| --- | --- | --- | --- | --- |
| REQ-01 | P1 | Provide a three-state status model (Normal, Caution, Critical) | Dashboard shows state label and last update time | evidence/03_ops_design/project_one_safehaven/wireframes.md |
| REQ-02 | P1 | Enforce data freshness discipline (Fresh, Degraded, Stale, Lost) | UI shows freshness state and warns on stale or lost data | evidence/03_ops_design/project_one_safehaven/critique.md |
| REQ-03 | P1 | Provide automated escalation failover | If primary does not acknowledge in threshold, backup is alerted | assets/img/wireframes/care_circle_setup.png |
| REQ-04 | P1 | Meet target size minimum and spacing | All actions have at least 24 by 24 CSS px target area | evidence/02_mission_reqs/definitions.md |
| REQ-05 | P1 | Add intentional friction for emergency shutoff | Emergency shutoff requires press-and-hold and shows hold progress | assets/img/wireframes/stove_risk_alert.png |
| REQ-06 | P1 | Close the loop for remote commands | UI shows pending, verified, and fault states | evidence/03_ops_design/project_one_safehaven/platform_adaptation.md |
| REQ-07 | P2 | Distinguish alert classes by severity | Informational, toast, notification, confirmation are applied correctly | evidence/02_mission_reqs/definitions.md |
| REQ-08 | P1 | Protect location details on lock screen | Notification text omits precise location until unlock | evidence/02_mission_reqs/notification_privacy_policy.md |
| REQ-09 | P2 | Provide resolution closure | UI shows resolver name and timestamp when event is resolved | evidence/03_ops_design/project_one_safehaven/critique.md |
| REQ-10 | P2 | Provide platform adaptations (watch and kiosk) | Watch is glanceable, kiosk is legible and privacy-aware | evidence/03_ops_design/project_one_safehaven/platform_adaptation.md |
