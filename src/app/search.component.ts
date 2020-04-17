import { Component, OnInit } from '@angular/core';
import { DocMgtService } from './doc-mgt.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'doc-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

      searchForm: FormGroup;
      rowData: Array<any>;
      householdDocuments: string = "/usr/local/household";

      constructor(private formBuilder: FormBuilder, private docMgtService: DocMgtService) {

        this.rowData = [];
        /*
        this.rowData.push( {"title": "Sample Title", "path": "/usr/local/household/2018/personal/mattius.pdf"});
        this.rowData.push( {"title": "Forest from the Trees", "path": "/usr/local/household/2017/government/lantiff.pdf"});
        this.rowData.push( {"title": "Pleasant Hill Sample", "path": "/usr/local/household/sample.pdf"});
        */
      }

      ngOnInit(): void {
          this.searchForm = this.formBuilder.group( {terms: ['']} );
      }

      onTermsChange(event) {
            if (event.target.value.length > 0) {
                this.searchForm.get('terms').setValue(event.target.value);
            }
      }

      onSubmit() {
        let formData = new FormData();
        formData.append('terms', this.searchForm.get('terms').value);
        console.log("Here is the captured formData: ");
        console.log(this.searchForm.value);
        let results = this.docMgtService.getMatchingDocuments(this.searchForm.get('terms').value);
        results.subscribe( (data:any) => {
            console.log("Here are the matching documents");
            console.log(data.data);
            this.rowData = data.data;
        });

     }

     groomDocumentData(inData: Array<any>): Array<any> {
        let result: Array<any> = [];
        for (let i=0; i < inData.length; i++) {
            let entry = inData[i];
            let title = entry['title'];
            let path = this.createUrl(entry['path']);
            result.push( {"title": title, "path": path});
        }
        return result;
     }
     createUrl(docPath:string): string {
        let start = docPath.indexOf(this.householdDocuments);
        let endingPath = docPath.slice(this.householdDocuments.length + start, docPath.length);
        return "assets" + endingPath;

     }
}
