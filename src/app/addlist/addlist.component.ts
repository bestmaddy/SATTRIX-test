import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.scss'],
})
export class AddlistComponent implements OnInit {
  @ViewChild('listForm', { static: true })
  listForm!: NgForm;
  addlist = new addList();
  isUpdate = false;
  indexToUpdate = -1;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.queryParamMap.get('id');
    if (idParam !== null) {
      const idx = Number(idParam);
      const listJson = sessionStorage.getItem('productList');
      if (listJson) {
        const list: addList[] = JSON.parse(listJson);
        if (list[idx]) {
          this.addlist = { ...list[idx] };
          this.isUpdate = true;
          this.indexToUpdate = idx;
        }
      }
    }
  }
  replacerFunc = () => {
    const visited = new WeakSet();
    return (_key: any, value: object | null) => {
      if (typeof value === 'object' && value !== null) {
        if (visited.has(value)) {
          return;
        }
        visited.add(value);
      }
      return value;
    };
  };

  AddList(data: any) {
  console.log('data', data.value);

  const storedData = sessionStorage.getItem('productList');
  const userList = storedData ? JSON.parse(storedData) : [];

  if (data.valid) {
    if (this.isUpdate && this.indexToUpdate > -1) {
      userList[this.indexToUpdate] = { ...data.value };
      alert('Data updated successfully.');
      this.isUpdate = false;
      this.indexToUpdate = -1;
    } else {
      userList.push({ ...data.value });
      alert('Data added successfully.');
    }

    sessionStorage.setItem('productList', JSON.stringify(userList));
    this.listForm.resetForm();
  } else {
    console.log('Fill all required fields');
  }
}


  reset(UserForm: NgForm) {
    UserForm.resetForm();
  }
}

export class addList {
  productName?: string;
  productType?: string;
}
