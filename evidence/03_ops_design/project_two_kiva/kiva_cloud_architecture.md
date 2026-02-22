# Kiva cloud architecture

## Purpose

This file documents the recommended lender-side cloud architecture for CS-319 Project Two and preserves a direct link target for repository traceability.

## Primary references

- Consolidated project notes: [README.md](README.md)
- Submission report: [CS319_Project_Two_Report.pdf](../../../submissions/CS319_Project_Two_Report.pdf)

## Architecture summary

- Ingest platform data snapshots on a scheduled cadence
- Normalize fields required for lender search and portfolio analytics
- Store records with indexes optimized for aggregation drivers
- Precompute summary tables in batch jobs to reduce per-request cost
- Preserve estimate labeling discipline (EST) across borrower and lender views

## Rationale

The recommendation prioritizes nonprofit cost discipline, predictable dashboard latency, and label integrity when repayment transaction history is not available to support exact progress values.
