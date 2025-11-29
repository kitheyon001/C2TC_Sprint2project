import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollegeService } from '../college';

@Component({
  selector: 'app-colleges',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colleges.html',
  styleUrl: './colleges.css'
})
export class CollegesComponent implements OnInit {

  colleges: any = [];

  constructor(private service: CollegeService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.colleges = data;
      console.log("DATA RECEIVED:", data);
    });
  }
}
