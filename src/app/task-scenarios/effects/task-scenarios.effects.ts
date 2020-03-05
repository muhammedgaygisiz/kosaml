import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { TaskScenario } from '../models';

const taskScenarios: TaskScenario[] = [
  {
    id: 1,
    title: 'Task Scenario 1',
    description:
      'Lorem ipsum dolor sit amet, ' +
      'consetetur sadipscing elitr, sed diam nonumy ' +
      'eirmod tempor invidunt ut labore et dolore ' +
      'magna aliquyam erat, sed diam voluptua. At ' +
      'vero eos et accusam et justo duo dolores et ea ' +
      'rebum. Stet clita kasd gubergren, no sea takimata ' +
      'sanctus est Lorem ipsum dolor sit amet. Lorem ' +
      'ipsum dolor sit amet, consetetur sadipscing elitr, ' +
      'sed diam nonumy eirmod tempor invidunt ut labore et ' +
      'dolore magna aliquyam erat, sed diam voluptua. At ' +
      'vero eos et accusam et justo duo dolores et ea rebum. ' +
      'Stet clita kasd gubergren, no sea takimata sanctus est ' +
      'Lorem ipsum dolor sit amet.',
  },
];

const taskScenariosPromise = () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(taskScenarios);
    }, 2000),
  );

@Injectable()
export class TaskScenariosEffects {

  constructor(private actions$: Actions) { }
}
