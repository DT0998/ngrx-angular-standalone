import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import reducers from './app/store/store.reducer';

bootstrapApplication(AppComponent, {
  providers: [provideStore(reducers)],
});
