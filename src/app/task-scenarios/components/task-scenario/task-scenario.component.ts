import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TaskScenario } from '../../models';

@Component({
  selector: 'kosaml-task-scenario',
  templateUrl: './task-scenario.component.html',
  styleUrls: ['./task-scenario.component.scss']
})
export class TaskScenarioComponent implements OnInit {

  @Input()
  model: TaskScenario;

  taskScenarioForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.taskScenarioForm = new FormGroup({
      title: new FormControl(this.model.title),
      description: new FormControl(this.model.description),
    });
  }

}
