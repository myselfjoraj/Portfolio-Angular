import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { VisionComponent } from './vision/vision.component';

export const routes: Routes = [
    { path: 'projects', component: ProjectsComponent },
    { path: 'vision', component: VisionComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
