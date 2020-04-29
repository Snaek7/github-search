import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github/github.service';
import { User } from '../models/user';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  userInfo: User;
  userInput: string;

  constructor(private githubService: GithubService) {}

  onKey(event: any) {
    this.userInput = event.target.value;
  }

  ngOnInit(): void {}
}
