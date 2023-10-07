import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styleUrls: [],
})
export class RouterMedicoComponent implements OnInit {
  id!: string;

  constructor(public router: Router, public activedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  guardaMedico() {
    this.router.navigate(['medico', '123']);
  }
}
