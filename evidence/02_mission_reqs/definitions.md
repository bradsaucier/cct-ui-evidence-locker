# Definitions and System Models

## 1. Status taxonomy (three-state model)

| State | Meaning | Operator intent |
| --- | --- | --- |
| Normal | No active hazards detected | Monitor |
| Caution | Elevated risk or degraded confidence | Verify and prepare |
| Critical | Immediate hazard requiring action | Act now |

## 2. Data freshness degradation model

The most dangerous failure mode is "green" status based on stale data.

| Freshness state | Trigger | UI treatment |
| --- | --- | --- |
| Fresh | Updates within expected cadence | Normal status rendering |
| Degraded | Updates late but still arriving | Caution with timestamp emphasis |
| Stale | Threshold exceeded | Caution to critical escalation, show stale data |
| Lost | Heartbeat missing | Connection lost warning, suppress false safe claims |

Recommended thresholds should be tuned to the sensor update cadence. For this portfolio, a 5 minute stale threshold is used as an illustrative baseline.

## 3. Closed-loop confirmation states

Closed-loop means the UI distinguishes command sent from state verified.

| State | Meaning | Example |
| --- | --- | --- |
| Command initiated | User input confirmed | Press-and-hold completes |
| Pending acknowledgement | Request sent, awaiting confirm | Remote shutoff command in transit |
| Verified | Device reports state change | Stove reports OFF |
| Fault | Confirm not received | Timeout, comms loss, actuator failure |

## 4. Alert and interruption taxonomy

| Class | Definition | Interaction model | Objective |
| --- | --- | --- | --- |
| Informational | Passive state update | Non-blocking | Awareness |
| Toast | Feedback after user action | Auto-dismiss | Close the loop |
| Notification | Asynchronous external event | Persistent until cleared | Awareness with recall |
| Confirmation | Destructive or irreversible action | Blocking | Error prevention |

## 5. Accessibility baseline (WCAG 2.2 focus)

This portfolio emphasizes WCAG 2.2 alignment, with special attention to target size.

| Topic | Baseline | Portfolio intent |
| --- | --- | --- |
| Target size (2.5.8) | 24 by 24 CSS px minimum | Prefer 44 by 44 for caregivers under stress |
| Contrast | 4.5:1 for normal text | Use semantic color roles and keylines |
| Interaction clarity | Visible affordances | Avoid ambiguity under cognitive load |

## 6. External reference links

| Name | Link |
| --- | --- |
| WCAG 2.2 | <https://www.w3.org/TR/WCAG22/> |
| Apple HIG | <https://developer.apple.com/design/human-interface-guidelines/> |
| Material Design 3 | <https://m3.material.io/> |
| Wear OS | <https://developer.android.com/training/wearables> |
