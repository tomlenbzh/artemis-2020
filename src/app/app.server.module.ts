import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TransferState } from '@angular/platform-browser';

import { AppModule } from './app.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

import { translateServerLoaderFactory } from './shared/loaders/translate-server.loader';

@NgModule({
  imports: [
    AppModule,
    CoreModule,
    ServerModule,
    ServerTransferStateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateServerLoaderFactory,
        deps: [TransferState]
      }
    })
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
