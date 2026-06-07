export interface ShortStep {
  title: string;
  date: string;
  description?: string;
}
export interface LongStep {
  title: string;
  begin: string;
  end: string;
  description?: string;
}
export type Step = ShortStep | LongStep;

export function instant(step: any): step is ShortStep {
  return (step as ShortStep).date !== undefined;
}

export function long(step: any): step is LongStep {
  return (step as LongStep).begin !== undefined;
}
