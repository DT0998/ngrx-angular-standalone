import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import reducers from './app/store/store.reducer';
import { provideEffects } from '@ngrx/effects';
import { CountEffects } from './app/store/count/count.effects';

bootstrapApplication(AppComponent, {
  providers: [provideStore(reducers), provideEffects([CountEffects])],
});
