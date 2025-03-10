import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, IsActiveMatchOptions, Route, Router, RouterLink } from '@angular/router';
import { PortfolioMenuItem } from 'models';

const MATCH_OPTIONS: IsActiveMatchOptions = {
  paths: "exact",
  matrixParams: 'ignored',
  queryParams: 'ignored',
  fragment: 'ignored'
};

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  items = signal<PortfolioMenuItem[]>([]);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  private _mapper = (route: Route) => ({
    label: route.data?.['label'],
    icon: route.data?.['icon'],
    route: route.path || '',
  });

  constructor() {
    const childRoutes: Route[] = this.activatedRoute.snapshot.routeConfig?.children || [];
    this.items.set(childRoutes.filter((route) => route.data?.['menu']).map(this._mapper));
  }

  isActive(path: string): boolean {
    return this.router.isActive(`/lambdas/${path}`, MATCH_OPTIONS);
  }

}
