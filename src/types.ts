export type OutcomeType = 'ALLOW' | 'LIMIT' | 'HOLD' | 'ESCALATE' | 'REJECT';

export type StatusBadgeType = 'VERIFIED' | 'SIMULATED' | 'PROPOSED' | 'TO VERIFY';

export interface ContextFact {
  label: string;
  value: string;
  source: string;
  isFlagged?: boolean;
}

export interface ConstraintItem {
  code: string;
  name: string;
  description: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  threshold: string;
}

export interface EvaluationStep {
  stepNumber: number;
  title: string;
  status: 'PASSED' | 'LIMITATION_APPLIED' | 'TRIGGERED_HOLD' | 'BLOCKED';
  summary: string;
  telemetryRef: string;
}

export interface EvidenceRecord {
  decisionId: string;
  timestamp: string;
  scenarioId: string;
  modelIdentity: string;
  ruleReference: string;
  detectedConflict: string;
  governedOutcome: OutcomeType;
  outcomeReason: string;
  humanReviewStatus: 'PENDING_SIGN_OFF' | 'CONDITIONAL_PASS' | 'NOT_REQUIRED' | 'FLAGGED_FOR_HUMAN';
  assignedAuditorRole: string;
  immutableDigest: string; // Labeled simulated
  evidenceStatus: StatusBadgeType;
}

export interface Scenario {
  id: string;
  industry: string;
  title: string;
  tagline: string;
  summary: string;
  badge: string;
  humanStakes?: string;
  sourceStatus: StatusBadgeType;
  aiRecommendation: {
    action: string;
    modelType: string;
    intendedBenefit: string;
    proposedMetricChange: string;
    confidence: number;
    initialParamValue?: number; // e.g., 18 for 18%
    initialParamUnit?: string;
  };
  blindSpots: string[];
  contextFacts: ContextFact[];
  constraints: ConstraintItem[];
  evaluationSteps: EvaluationStep[];
  outcome: {
    type: OutcomeType;
    governedAction: string;
    stagedParamValue?: number; // e.g., 5 for 5%
    stagedParamUnit?: string;
    explanation: string;
    safeguardApplied: string;
  };
  evidence: EvidenceRecord;
  presenterNarration: {
    setup: string;
    theBlindSpot: string;
    cceValuePitch: string;
  };
}
