import { Scenario } from 'src/app/shared/model';

export interface TaskScenario extends Scenario {
  id: number;
  title: string;
  description: string;
}
