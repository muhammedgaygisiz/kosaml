import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskScenario } from '../../models';

@Component({
  selector: 'kosaml-task-scenario',
  templateUrl: './task-scenario.component.html',
  styleUrls: ['./task-scenario.component.scss'],
})
export class TaskScenarioComponent implements OnInit {
  @Input()
  model: TaskScenario;

  taskScenarioForm: FormGroup;

  ngOnInit() {
    this.taskScenarioForm = new FormGroup({
      title: new FormControl(this.model.title),
      description: new FormControl(this.model.description),
    });
  }
}
