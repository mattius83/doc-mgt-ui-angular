import { Component, OnInit } from '@angular/core';
import { MockDocMgtService } from './mock-doc-mgt.service';

@Component({
  selector: 'doc-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  title = 'doc-mgt-ui';

  columnDefs = [
      { "headerName": "Name", "field": "name" },
      { "headerName": "Path", "field": "path" },
      { "headerName": "Author", "field": "author" }
  ];

  rowData: any = {};

  constructor(private mockDocMgt: MockDocMgtService) { }

  ngOnInit(): void {
      let mockData  = this.mockDocMgt.getMatchingDocuments('bogus_term');
      mockData.subscribe( (data:any) => {
          console.log("Here are the matching documents");
          console.log(data);
          this.rowData = data;
      })
  }
}
