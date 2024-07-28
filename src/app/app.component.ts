import { Component } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  marks: number[][] = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]];
  total: number[] = [0, 0, 0, 0, 0];
  grade: string[] = ['', '', '', '', '', ''];
  title = 'StudentReportCard';
  isValid(e: any, i: number, j: number) {
    if (e.target.value <= 100 && e.target.value >= 0) {
      this.marks[i][j] = parseInt(e.target.value);
      this.calculate();
    } else {
      alert("Please enter a valid marks");
      e.target.value = 0;
    }
  }

  calculate() {
    this.total = [0, 0, 0, 0, 0];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        this.total[i] += this.marks[i][j];
      }
    }
  }

  reset() {
    this.marks = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]];
    this.grade = ['', '', '', '', ''];
    this.total = [0, 0, 0, 0, 0];
  }

  findGrade() {
    for (let i = 0; i < 5; i++) {
      let avg = this.total[i] / 5;
      if (avg <= 100 && avg >= 80) {
        this.grade[i] = 'A++';
      } else if (avg < 80 && avg >= 60) {
        this.grade[i] = 'A';
      } else if (avg < 60 && avg >= 50) {
        this.grade[i] = 'B';
      } else {
        this.grade[i] = 'C';
      }
    }
  }
}
