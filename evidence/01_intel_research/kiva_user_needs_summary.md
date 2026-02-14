# Kiva User Needs Summary (Project Two)

## 1. Borrower (embedded USSD)

Operating environment:
- Feature phones and numeric keypads
- Session timeouts and intermittent connectivity
- Shared-device usage in some households

Primary needs:
1. Rapid situational awareness at entry (who/what account, current state, next required action).
2. Minimal keystrokes and shallow navigation to reduce timeout probability.
3. Error prevention for numeric entry (confirmation before commit).
4. Data honesty when confirmed repayment history is unavailable ("EST" labeling).
5. Privacy controls for shared devices (fast exit).

## 2. Lender (cloud)

Operating environment:
- Web application with higher bandwidth and longer sessions
- Data exploration, filtering, and forecasting expectations
- Nonprofit cost constraints on compute and storage

Primary needs:
1. Fast discovery by sector, country, activity, and loan use.
2. Portfolio visibility with clear breakdowns that update quickly.
3. Forecasting views that preserve estimate labeling and avoid false precision.
4. Responsive dashboards enabled by precomputed aggregation.
