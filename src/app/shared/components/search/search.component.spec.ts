import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: Router, useValue: router }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive the event', () => {
    let event = { target: { value: 'value' } };
    component.onKey(event);
    expect(component.userInput).toEqual('value');
  });

  it('should navigate', () => {
    component.getUserInfo();
    expect(router.navigate).toHaveBeenCalledWith(
      ['/user-details'],
      Object({ queryParams: Object({ userInput: undefined }) })
    );
  });
});
