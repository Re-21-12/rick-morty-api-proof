import { Component, inject, OnInit } from '@angular/core';
import { RickMortyApi } from '../../services/rick-morty-api';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-show-data',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './show-data.html',
  styleUrl: './show-data.scss'
})
export class ShowData implements OnInit {

  private readonly _mortyApi = inject(RickMortyApi);
  data!:any

  form = new FormGroup({
    page: new FormControl()
  });



ngOnInit() {
this.getCharacters(1);
}
onSubmit(){
const data = this.form.getRawValue().page
this.getCharacters(data);
}
getCharacters(data:number = 1) {
   this._mortyApi.getCharacters(data).subscribe((data:any) => {
   this.data  = data.results ?? [];
    console.log(this.data);
  });
}
}
