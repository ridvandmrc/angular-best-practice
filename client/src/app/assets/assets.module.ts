import { NgModule } from '@angular/core';

import { HanbugerIcon } from './icons/hamburger.component';
import { HomeIcon } from './icons/home.component';
import { ExplorerIcon } from './icons/explorer.component';
import { LibraryIcon } from './icons/library.component';
import { MagnifyComponent } from './icons/magnify.component';
import { ConnectIcon } from './icons/connect.component';
import { ShuffleIcon } from './icons/shuffle.component';
import { RadioIcon } from './icons/radio.component';

@NgModule({
  declarations: [
    HanbugerIcon,
    HomeIcon,
    ExplorerIcon,
    LibraryIcon,
    MagnifyComponent,
    ConnectIcon,
    ShuffleIcon,
    RadioIcon,
  ],
  exports: [
    HanbugerIcon,
    HomeIcon,
    ExplorerIcon,
    LibraryIcon,
    MagnifyComponent,
    ConnectIcon,
    ShuffleIcon,
    RadioIcon,
  ],
})
export class AssestModule {}
