# Risk Register

This register documents hazards and mitigations for the SafeHaven UI.

| Risk-ID | Hazard | Cause | Impact | Mitigation | Residual risk | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| R-01 | Stale safe status | Sensor comms loss | Caregiver delays response | Data freshness degradation model and connection lost state | Medium | evidence/02_mission_reqs/definitions.md |
| R-02 | Accidental shutoff | Mis-tap under stress | Unintended power cut, loss of trust | Press-and-hold with progress feedback | Low | assets/img/wireframes/stove_risk_alert.png |
| R-03 | Alert fatigue | Excess non-actionable alerts | Desensitization to critical events | Severity taxonomy and aggregation guidance | Medium | evidence/02_mission_reqs/definitions.md |
| R-04 | Ambiguous escalation settings | UI implies non-editable controls | Setup errors and missed notifications | Explicit toggles and input validation | Medium | assets/img/wireframes/care_circle_setup.png |
| R-05 | Location exposure | Lock screen shows street details | Privacy breach and exploitation risk | Privacy policy and unlock gating | Low | evidence/02_mission_reqs/notification_privacy_policy.md |
| R-06 | Unverified actuator change | Command sent but not executed | False confidence, fire risk | Closed-loop verified state and fault handling | Medium | evidence/02_mission_reqs/definitions.md |
