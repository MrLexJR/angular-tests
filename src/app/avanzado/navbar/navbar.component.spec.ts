import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe tener el link', () => {
    const element = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );

    let existe = false;
    element.forEach((elem) => {
      if (elem.attributes['routerLink'] === '/usuario') {
        existe = true;
      }
      if (elem.attributes['routerLink'] === '/hospital') {
        existe = true;
      }
    });

    expect(existe).toBeTrue();
  });
});
