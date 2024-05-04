import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  reverseName: string | null | undefined = undefined;
  formGroup = new FormBuilder().group({
    name: ['']
  });

  ngOnInit() {
    this.formGroup.valueChanges.subscribe(
      data => this.reverseName = data.name?.split("").reverse().join("")
    );
  }
}
