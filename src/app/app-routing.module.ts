import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'update-student/:id',
    loadChildren: () => import('./update-student/update-student.module').then( m => m.UpdateStudentPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'shoes',
    loadChildren: () => import('./pages/shoes/shoes.module').then( m => m.ShoesPageModule)
  },
  {
    path: 'holy',
    loadChildren: () => import('./pages/holy/holy.module').then( m => m.HolyPageModule)
  },
  {
    path: 'bench',
    loadChildren: () => import('./pages/bench/bench.module').then( m => m.BenchPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
