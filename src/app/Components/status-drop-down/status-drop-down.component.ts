import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StatusEnum, StatusTypeLabelMapping } from "../../model/StatusEnum";

@Component({
  selector: 'StatusDropDown',
  templateUrl: './status-drop-down.component.html',
  styleUrls: ['./status-drop-down.component.css']
})
export class StatusDropDownComponent implements OnInit {

  @Output()
  dropdownChange = new EventEmitter<any>();


  public taskStatus = Object.values(StatusEnum);
  public statusLabelMapping = StatusTypeLabelMapping;

  constructor(private fb:FormBuilder) {
  }

  ngOnInit(): void {
  }

  public UpdateSelectedValue(item: any)
  {

  }
}
