import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/app/shared/services/github/github.service';
import { Repo } from 'src/app/shared/models/repo';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  userInfo: User;
  repoInfo: Repo[];
  actualPage: number = 1;
  nextPage: number;
  previousPage: number;
  starTotal: number;
  notFound: boolean = false;
  constructor(
    private githubService: GithubService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((param: String) => {
      let userInput = param['userInput'];

      this.githubService.getUserInfo(userInput).subscribe((data: User) => {
        console.log('DATA', data);
        this.userInfo = data;
        this.getUserRepositories(data.repos_url, 'next');
      });
    });
  }

  getUserRepositories(url: string, direction: string) {
    this.githubService
      .getUserRepos(
        url,
        direction === 'prev' ? this.previousPage : this.nextPage
      )
      .subscribe(
        (repos: Repo[]) => {
          console.log('ENTROU PORRA', repos);

          this.notFound = false;
          this.repoInfo = repos;
          this.starTotal = repos.reduce((acc, current) => {
            return acc + current.stargazers_count;
          }, 0);
        },
        (error) => {
          console.log('ERROR', error);
          if (error.status == 404) {
            this.notFound = true;
          }
        }
      );
    this.setPaginationDirections(direction);
  }

  setPaginationDirections(direction: string) {
    this.actualPage =
      direction === 'prev'
        ? this.actualPage > 1
          ? (this.actualPage -= 1)
          : 1
        : (this.actualPage += 1);
    this.nextPage = this.actualPage + 1;
    this.previousPage = this.actualPage === 1 ? 1 : this.actualPage - 1;
  }
}
