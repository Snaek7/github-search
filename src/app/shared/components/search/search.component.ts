import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github/github.service';
import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  userInput: String;

  constructor(private router: Router) {}

  onKey(event: any) {
    this.userInput = (<HTMLInputElement>event.target).value;
  }

  getUserInfo() {
    this.router.navigate(['/user-details'], {
      queryParams: { userInput: this.userInput },
    });
  }

  ngOnInit(): void {}
}
