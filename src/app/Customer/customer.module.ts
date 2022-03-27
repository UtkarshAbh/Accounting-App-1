import { NgModule } from '@angular/core';
import { SharedModule } from '../Shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';



@NgModule({
  declarations: [
    CustomerListComponent,
    CreateCustomerComponent
  ],
  imports: [
    SharedModule,
    CustomerRoutingModule,
    DxDataGridModule
  ]
})
export class CustomerModule { }
