import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Huy Nguyễn';
  public age = 25;
  public traiCay = ['Táo', 'Nho', 'Cam', 'Quít', 'Ổi'];
  public traiCay2 = [
    { ten: 'Táo', gia: 12, haGia: true },
    { ten: 'Nho', gia: -3.234, haGia: false },
    { ten: 'Cam', gia: 34.26, haGia: false },
    { ten: 'Quít', gia: 32.45, haGia: true },
  ];

  constructor() {}

  public ngOnInit(): void {
    console.log('trai cay = ', this.traiCay2);
  }
}
