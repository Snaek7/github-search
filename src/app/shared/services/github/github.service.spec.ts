import { TestBed } from '@angular/core/testing';

import { GithubService } from './github.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { User } from '../../models/user';
import { Repo } from '../../models/repo';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to GET the user', () => {
    const mockUser: User = {
      login: 'login example',
      id: 0,
      node_id: '12312',
      avatar_url: 'http://fakeurl.com',
      gravatar_id: 'example',
      url: 'http://fakeurl.com',
      html_url: 'http://fakeurl.com',
      followers_url: 'http://fakeurl.com',
      following_url: 'http://fakeurl.com',
      gists_url: 'http://fakeurl.com',
      starred_url: 'http://fakeurl.com',
      subscriptions_url: 'http://fakeurl.com',
      organizations_url: 'http://fakeurl.com',
      repos_url: 'http://fakeurl.com',
      events_url: 'http://fakeurl.com',
      received_events_url: 'http://fakeurl.com',
      type: 'example',
      site_admin: false,
      name: 'john doe',
      company: 'example',
      blog: 'example',
      location: 'example',
      email: 'example@example.com',
      hireable: 'example',
      bio: 'example',
      public_repos: 0,
      public_gists: 0,
      followers: 0,
      following: 0,
      created_at: new Date(),
      updated_at: new Date(),
    };
    service.getUserInfo('Snaek7').subscribe((user) => {
      expect(user).toEqual(mockUser);
    });
  });

  it('should be able to GET the repos', () => {
    const mockRepos: Repo[] = [
      {
        name: 'repo name',
        description: 'repo desc',
        stargazers_count: 0,
      },
      {
        name: 'repo 2',
        description: 'repo desc 2',
        stargazers_count: 1,
      },
    ];
    service.getUserRepos('fake', 1).subscribe((repo) => {
      expect(repo).toEqual(mockRepos);
    });
  });
});
