import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
 				MatButtonModule,
 				MatCheckboxModule,
 				MatMenuModule,
 				MatToolbarModule,
 				MatIconModule,
 				MatGridListModule,
 				MatCardModule,
 				MatProgressSpinnerModule,
         MatInputModule
 			],
  exports: [
  				MatButtonModule,
  				MatCheckboxModule,
  				MatMenuModule,
  				MatToolbarModule,
          MatIconModule,
  				MatGridListModule,
  				MatCardModule,
  				MatProgressSpinnerModule,
          MatInputModule
  			],
})
export class MaterialModule { }