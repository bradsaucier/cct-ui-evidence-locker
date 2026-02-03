# UI-UX Design Rationale - SafeHaven Caregiver Application

Source - submissions/CS319_Project_One_Submission.pdf

UI-UX Design Rationale: SafeHaven Caregiver Application

## Introduction and Design Philosophy

SafeHaven is a mobile safety application for caregivers supporting a relative with dementia. The
interface enables rapid scanning and low-friction response. It targets two time-critical risks:
wandering beyond a safe boundary and a stove left on long enough to create fire risk. The design
prioritizes reliability, speed to action, error prevention, and accessibility - critical factors for
caregivers under fatigue and time pressure.

## Screen-by-Screen Design Rationale

### Care Circle Setup - Redundancy without unnecessary notifications

#### Purpose and function - Care Circle Setup - Redundancy without unnecessary notifications

The Care Circle Setup screen defines alert order and escalation timing. The backup is engaged
only if the primary does not acknowledge in time.

#### Design rationale and customer benefit - Care Circle Setup - Redundancy without unnecessary notifications

Clear labels (Primary Contact, Backup Contact, Escalate) reduce setup errors that could cause
missed alerts. Showing each contact method (text or call) prevents ambiguity. The escalation
dropdown and Test Alert button support reliable coverage: the system engages the backup only
when the primary does not respond, and caregivers can validate the configuration before a real
event, supporting trust and reducing missed-notification risk.
Research support
This design reflects interview themes that escalation must match family roles and that trust
determines adoption.

### Home Status Dashboard - Unified status view and data freshness

#### Purpose and function - Home Status Dashboard - Unified status view and data freshness

The Home Status Dashboard provides a single-screen summary of home safety. It communicates
current safety state and data freshness, plus the areas requiring attention with direct navigation.

#### Design rationale and customer benefit - Home Status Dashboard - Unified status view and data freshness

The three-state status model (normal, caution, critical) supports quick interpretation and reduces
information overload. The "Last Updated" timestamp serves as both a trust cue and a failure
indicator, preventing false "safe" readings from stale or offline data. As a recommended
improvement based on prototype feedback, the dashboard should make stale data unmistakable
(for example, changing the timestamp styling and adding a short "Data may be outdated"
message when updates stop). Tiles grouped by priority (wandering, wearable, stove) align with
caregiver decision-making. Direct buttons (View Location, View Stove, Care Circle) shorten
time to action.
Research support
This design reflects interview findings that context prevents panic and that visible data freshness
supports trust.

### Stove Risk Alert - Safety-critical escalation with intent verification

#### Purpose and function - Stove Risk Alert - Safety-critical escalation with intent verification

The Stove Risk Alert screen is a full-screen alert used when the stove reaches the critical
threshold (stove on for 60 minutes). It displays the condition, duration, and supporting context
("No Motion Detected" with a timestamp) and provides response actions: Call Home, Mark
Cooking, and Emergency Shutoff (press-and-hold).

#### Design rationale and customer benefit - Stove Risk Alert - Safety-critical escalation with intent verification

The screen facilitates rapid risk verification and action. Duration is prominent because time-on
drives risk. The context block reduces false alarms by providing immediate supporting
information rather than forcing guesswork.

#### Key innovation

The design pairs a high-urgency alert with an immediate context signal (No Motion Detected) so
caregivers can distinguish true risk from normal cooking activity faster than a typical alert that
only reports "stove on."

#### Error prevention and confirmation

Emergency Shutoff is a high-impact action, so press-and-hold is required to prevent accidental
activation. The interface should provide closed-loop confirmation, including status updates such
as "Shutoff sent" and "Shutoff confirmed," to reduce uncertainty during a critical event. As a
recommended improvement based on prototype feedback, the press-and-hold control should
include visible progress feedback (for example, a ring or bar that fills during the hold) so the
caregiver can see that the command is being initiated.
Research support
This screen reflects interview themes that false alarms are a primary barrier to adoption and that
clear context and confirmation build trust.

### Wandering Alert - Rapid recovery with clear context and closure

#### Purpose and function - Wandering Alert - Rapid recovery with clear context and closure

The Wandering Alert screen is a full-screen alert used when the relative is out of the safe zone. It
displays the event type, location and distance, and time, with a map preview. It provides
response actions: Navigate, Call, and Mark Safe.

#### Design rationale and customer benefit - Wandering Alert - Rapid recovery with clear context and closure

The screen presents event context - what, where, and when - followed by actions. The map
preview aids rapid orientation. The actions align with caregiver response: call to verify and
navigate to recover. Mark Safe ends the alert loop and restores trust once the caregiver verifies
the relative is safe.
Research support
This design reflects interview themes that context prevents panic and that the system must
support efficient escalation and resolution.
Cross-Screen Consistency
SafeHaven uses a consistent three-state model and information pattern (event - context - actions)
across screens. Escalation is role-based: the system alerts the primary caregiver first and
escalates to the backup only if the primary does not acknowledge in time. When an event is
resolved, the system should notify the care circle to prevent duplicate responses and confusion.
Consistency reduces cognitive load and improves response speed.
Platform Adaptation

## Digital watch adaptation (Wear OS)

The watch experience should support glanceability and triage, not configuration. To maximize
glanceability, content should be short, high-contrast, and limited to the event plus one key detail,
supported by strong haptic feedback. Watch actions should be limited to one-tap responses that
match caregiver intent (Call as primary, Open on Phone as secondary). Setup, detailed maps, and
history should be deferred to the phone to keep the watch fast and time-saving.

## Touch-based kiosk adaptation (large screen)

A kiosk version functions as a home command display for passive monitoring and rapid access
during an event. It should increase typography and spacing for distance legibility, use a multi-
panel layout for simultaneous monitoring, and keep navigation shallow. Touch targets should be
larger to support older users and fast interaction. Because kiosks are shared, sensitive actions
should require authentication, and high-impact actions should provide positive confirmation for
every command sent. To maintain privacy in shared spaces, the kiosk should mask sensitive
details (for example, full addresses, contact details, and detailed location history) until a
caregiver completes authentication (for example, a simple PIN).
Research Basis and Guideline Sources
Design decisions reflect interview themes: reliability over features, context to prevent panic,
role-based escalation, accessibility as safety-critical, and trust through visible status and
confirmation. The design aligns with established platform and accessibility guidance, including
Apple Human Interface Guidelines, Google Material Design, WCAG 2.2, and Wear OS design
guidance.
