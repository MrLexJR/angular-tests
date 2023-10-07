import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterMedicoComponent } from './router-medico.component';
import { EMPTY, Observable, Subject } from 'rxjs';

class FakeRouter {
  navigate(_params: any) {}
}

class FakeActivatedRouter {
  // params: Observable<any> = EMPTY;
  private subject = new Subject();

  push(valor: any) {
    this.subject.next(valor);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRouter },
      ],
    });
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de redireccionar a Medico cuando se guarde', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    component.guardaMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe de colocar el id = nuevo', () => {
    component = fixture.componentInstance;
    const activedRoute: FakeActivatedRouter = TestBed.get(ActivatedRoute);
    activedRoute.push({ id: 'nuevo' });

    expect(component.id).toBe('nuevo');
  });
});
