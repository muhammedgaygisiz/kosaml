import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'kosaml-task-scenario-page',
  templateUrl: './task-scenario-page.component.html',
  styleUrls: ['./task-scenario-page.component.scss']
})
export class TaskScenarioPageComponent implements OnInit {
  taskScenarioForm: FormGroup;

  @Input()
  title: string;

  @Input()
  description: string;

  titleFormControl: FormControl
    = new FormControl(null);
  descriptionFormControl: FormControl
    = new FormControl(null);

  constructor() { }

  ngOnInit() {
    this.taskScenarioForm = new FormGroup({
      title: this.titleFormControl,
      description: this.descriptionFormControl,
    });
  }

}
