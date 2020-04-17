import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component( {
    selector: 'doc-upload',
    templateUrl: 'upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

    SERVER_URL = "http://localhost/api/upload";
    uploadForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

    ngOnInit() {
        this.uploadForm = this.formBuilder.group( {
            docPayload: [ '' ],
            title: [ '' ],
            year: [ '' ],
            category: [ '' ],
            tags: ['']
        });
    }

    onTitleChange(event) {
        if (event.target.value.length > 0) {
            this.uploadForm.get('title').setValue(event.target.value);
        }
    }

    onTagsChange(event) {
        if (event.target.value.length > 0) {
            this.uploadForm.get('tags').setValue(event.target.value);
        }
    }

    onYearChange(event) {
        if (event.target.value.length > 0) {
            this.uploadForm.get('year').setValue(event.target.value);
        }
    }

    onCategoryChange(event) {
        this.uploadForm.get('category').setValue(event.target.value);
    }

    onFileSelect(event) {
        if (event.target.files.length > 0) {
          const file = event.target.files[0];
          this.uploadForm.get('docPayload').setValue(file);
        }
    }

    onSubmit() {
        const formData = new FormData();
        formData.append('title', this.uploadForm.get('title').value);
        formData.append('year',  this.uploadForm.get('year').value);
        formData.append('category', this.uploadForm.get('category').value);
        formData.append('tags', this.uploadForm.get('tags').value);
        formData.append('file', this.uploadForm.get('docPayload').value);

        console.log("Here is the captured formData: ");
        console.log(this.uploadForm.value);


        this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
          (res) => console.log(res),
          (err) => console.log(err)
        );

    }


}