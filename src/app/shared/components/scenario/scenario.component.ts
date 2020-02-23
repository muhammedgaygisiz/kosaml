import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Scenario } from '../../model';

@Component({
  selector: 'kosaml-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.scss']
})
export class ScenarioComponent implements OnInit {
  @Input()
  model: Scenario;

  scenarioForm: FormGroup;

  ngOnInit() {
    this.scenarioForm = new FormGroup({
      title: new FormControl(this.model.title),
      description: new FormControl(this.model.description),
    });
  }
}
