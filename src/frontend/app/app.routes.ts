import { Routes, RouterModule }   from '@angular/router';

const routes: Routes = [
     { path: '', redirectTo: '/test', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);
export const routingProviders: any[] = [];
