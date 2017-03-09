import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { PessoaModule } from './pessoa/pessoa.module';

const routes: Routes = [
    
    {path: 'pessoa', loadChildren: "./pessoa/pessoa.module#PessoaModule"}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
