import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface Record {
  productName: string;
  productType: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  records: Record[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    const listJson = sessionStorage.getItem('productList');
    this.records = listJson ? JSON.parse(listJson) : [];
  }

  edit(idx: number): void {
    this.router.navigate(['../dashboard/addlist'], { relativeTo: this.route.parent, queryParams: { id: idx } });
  }

  delete(idx: number): void {
    if (confirm('Delete this record?')) {
      this.records.splice(idx, 1);
      sessionStorage.setItem('productList', JSON.stringify(this.records));
    }
  }

}
