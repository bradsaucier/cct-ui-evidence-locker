# Notification Privacy Policy

## Objective

Prevent accidental disclosure of sensitive caregiver information when the phone or kiosk is visible to bystanders.

## Policy

| Context | Allowed | Not allowed |
| --- | --- | --- |
| Lock screen notification | High-level alert class and severity | Precise street address, map preview, contact phone numbers |
| Unlocked in-app view | Full details needed for response | None, subject to normal privacy controls |
| Kiosk display | Status and non-sensitive summary | Personal contact details, detailed location history |

## Implementation guidance

1. Keep the lock screen payload short and action oriented.
2. Require biometric or device unlock to display location and map preview.
3. Provide call action only after unlock, or use a generic call label without numbers.

## Evidence

Design rationale and critique files cite this pattern as an OPSEC equivalent for caregiver safety contexts.

Paths
evidence/03_ops_design/project_one_safehaven/critique.md
