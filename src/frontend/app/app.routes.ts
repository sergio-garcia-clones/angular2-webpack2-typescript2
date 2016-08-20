import { Routes, RouterModule }   from '@angular/router';

const routes: Routes = [
     { path: '', redirectTo: '/buttons', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);
export const routingProviders: any[] = [];
