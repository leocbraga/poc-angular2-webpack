import { NgModule } from '@angular/core';

import { PessoaRoutingModule } from './pessoa.routing';
import { PessoaComponent } from './pessoa.component';

@NgModule({
    imports: [PessoaRoutingModule],
    exports: [],
    declarations: [PessoaComponent],
    providers: []
})
export class PessoaModule {}