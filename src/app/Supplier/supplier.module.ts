import { NgModule } from '@angular/core';
import { SharedModule } from '../Shared/shared.module';
import { SupplierRoutingModule } from './supplier-routing.module';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';

import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';



@NgModule({
  declarations: [
    SupplierListComponent,
    CreateSupplierComponent
  ],
  imports: [
  SharedModule,
  SupplierRoutingModule,
  DxDataGridModule
  ]
})
export class SupplierModule { }
