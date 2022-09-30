import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShareModule } from '../share/share.module';
import { BooksPageComponent } from './pages/book-pages/books-page.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './store/books.effects';

@NgModule({
  declarations: [BooksPageComponent, BooksListComponent],
  imports: [
    ShareModule,
    RouterModule.forChild([
      {
        path: '',
        component: BooksPageComponent,
      },
    ]),
    EffectsModule.forFeature([BooksEffects]),
  ],
  providers: [],
})
export class BooksModule {}
