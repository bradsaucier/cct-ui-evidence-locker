# Tactical UX-UI Critique

## 1. Executive findings

| Severity | Finding | Impact | Primary fix |
| --- | --- | --- | --- |
| S1 | Data freshness failure mode not surfaced strongly enough | False confidence during comms loss | Add explicit stale and connection lost states |
| S1 | Emergency shutoff needs closed-loop feedback states | User uncertainty after command | Show pending, verified, fault states |
| S2 | Setup screen implies static contact methods | Misconfiguration risk | Make call or text a selectable control |
| S2 | Location details may leak on lock screen | Privacy exposure | Apply notification privacy policy |

Definitions are centralized in evidence/02_mission_reqs/definitions.md.

## 2. Screen 1 - Care Circle Setup

### 2.1 Mission function

Establish caregiver chain of command and automated failover.

### 2.2 Observations

1. Hierarchy is clear (primary then backup).
2. Escalation threshold exists and is visible.
3. Test alert is present and supports user confidence.

### 2.3 Risks and remediation

| Risk | Why it matters | Remediation |
| --- | --- | --- |
| Ambiguity in contact method | User may assume call or text is editable but sees no control | Replace static labels with a toggle or dropdown |
| Input validation unclear | Wrong number equals mission failure | Add input masking and invalid number handling |
| Accessibility | Gray avatar tiles may not meet contrast needs | Ensure contrast and labeling are readable and programmatic |

## 3. Screen 2 - Home Status Dashboard

### 3.1 Mission function

Single pane of glass for situational awareness.

### 3.2 Key critique

The UI displays last updated time but does not define the transition to degraded or stale intelligence.

Add a freshness banner when updates exceed threshold.

Reference - evidence/02_mission_reqs/definitions.md section 2.

## 4. Screen 3 - Stove Risk Alert

### 4.1 Mission function

Interdict a fire risk event.

### 4.2 Strengths

1. Context fusion (stove on plus no motion) reduces false alarms.
2. Press-and-hold implies intentional friction.

### 4.3 Closed-loop gap

A remote shutoff is asynchronous. The UI must explicitly show:

1. Command sent
2. Pending confirmation
3. Verified off
4. Fault with retry

Reference - evidence/02_mission_reqs/definitions.md section 3.

## 5. Screen 4 - Wandering Alert

### 5.1 Mission function

Recover a vulnerable adult outside the safe zone.

### 5.2 OPSEC equivalent

Lock screen notifications should not show exact address or map preview.

Reference - evidence/02_mission_reqs/notification_privacy_policy.md

## 6. [WIREFRAME FIX REQUIRED] Header mismatch

The Care Circle Setup screen title reads "Home Status Dashboard". This is a wireframe defect that should be corrected before future submissions or portfolio refreshes.
