import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';
import { GithubService } from 'src/app/shared/services/github/github.service';
import { User } from 'src/app/shared/models/user';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let service: GithubService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent, SortPipe],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
    service = TestBed.inject(GithubService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;

    component.userInfo = {
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

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should GET the user Info', () => {
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

  it('should GET the repos', () => {
    component.getUserRepositories('Snaek7', 'next');
  });
});
