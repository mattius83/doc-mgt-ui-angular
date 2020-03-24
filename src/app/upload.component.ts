import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component( {
    selector: 'doc-upload',
    templateUrl: 'upload.component.html'
})
export class UploadComponent implements OnInit {

    SERVER_URL = "http://localhost/api/upload";
    uploadForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

    ngOnInit() {
        this.uploadForm = this.formBuilder.group( {
            docPayload: [ '' ]
        });
    }

    onFileSelect(event) {
        if (event.target.files.length > 0) {
          const file = event.target.files[0];
          this.uploadForm.get('docPayload').setValue(file);
        }
    }

    onSubmit() {
        const formData = new FormData();
        formData.append('file', this.uploadForm.get('docPayload').value);

        this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
          (res) => console.log(res),
          (err) => console.log(err)
        );
    }


}