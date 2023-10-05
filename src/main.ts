import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { CountEffects } from './app/store/count/count.effects';
import * as fromApp from './app/store/store.reducer';

bootstrapApplication(AppComponent, {
  providers: [provideStore(fromApp.appReducer), provideEffects([CountEffects])],
});
