import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myControlPlain = new FormControl();
  myControlAuto = new FormControl();

  options: string[] = ['One', 'Two', 'Three'];

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControlAuto.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(value);

    let ret = this.options.filter(option => option.toLowerCase().includes(filterValue));
    console.log(ret);
    return ret;
  }
}
