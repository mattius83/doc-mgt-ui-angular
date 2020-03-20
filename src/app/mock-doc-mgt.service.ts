import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDocMgtService {

  searchResults: Array<object> = [
    { 'name': 'file_magenta_filburt.pdf', 'path': '/var/opt/uploaded_files/2019/kappa/file_magenta_filburt.pdf', 'author': 'mattius' },
    { 'name': 'semper_tasko.pdf', 'path': '/var/opt/uploaded_files/2018/dogburt/semper_tasko.pdf', 'author': 'mattius' },
    { 'name': 'flava.pdf', 'path': '/var/opt/uploaded_files/2019/kappa/file_magenta_filburt.pdf', 'author': 'glimpko' },
    { 'name': 'miso.txt', 'path': '/var/opt/uploaded_files/2019/kappa/file_magenta_filburt.pdf', 'author': 'mattius' },
    { 'name': 'ronaldo_tupi.pdf', 'path': '/var/opt/uploaded_files/2017/formula/ronaldo_tupi.pdf', 'author': 'glimpko' },
    { 'name': 'orange_tasking.pdf', 'path': '/var/opt/uploaded_files/2019/finance/orange_tasking', 'author': 'mattius' },
    { 'name': 'klutzy.pdf', 'path': '/var/opt/uploaded_files/2020/finance/klutzy.pdf', 'author': 'mattius' },
    { 'name': 'bench_insurance.pdf', 'path': '/var/opt/uploaded_files/2019/insurance/bench_insurance.pdf', 'author': 'steven' }
  ]


  constructor() { }

  getMatchingDocuments(matchTerm: string): Observable<any> {
      return of(this.searchResults);

  }
}
