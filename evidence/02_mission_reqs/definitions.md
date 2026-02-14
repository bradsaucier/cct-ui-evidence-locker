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
| Fresh | Most recent expected update received | Normal display |
| Degraded | Update delayed beyond expected interval | Visible stale indicator and reduced confidence cues |
| Stale | Update missing beyond maximum tolerance | Escalate to caution and prompt verification action |

## 3. Closed-loop confirmation

A closed-loop action requires an explicit confirmation step that echoes the operator input before committing a high-impact change.

Examples:

- Press-and-hold for destructive actions
- Echo-back confirmation for numeric entry (USSD)

## 4. Estimate labeling doctrine ("EST")

When repayment transaction history is unavailable, any derived repayment metric is labeled "EST" to prevent false precision.

Rules:

- If a value is estimated at the edge, it remains estimated at every downstream view.
- If an estimate is shown, label it consistently across borrower and lender views.

## 5. Accessibility intent

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
| USSD (overview) | <https://en.wikipedia.org/wiki/Unstructured_Supplementary_Service_Data> |

## 7. Austere interaction doctrine (USSD)

USSD is session-based and time-bounded. The interface must treat keystrokes and screens as scarce resources.

| Principle | Intent |
| --- | --- |
| Critical-data-first | Put the highest value information on the first screen |
| Flat navigation | Avoid deep menus that increase timeout risk |
| Confirmation for high-impact actions | Echo-back numeric entry before commit |
| Data honesty | Label derived values as estimates when history is not available |
