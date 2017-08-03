import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App default
import { AppComponent } from './app.component';

// Dashboard
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Build
import { BuildComponent } from './components/dashboard/build/build.component';

// Firewall
import { FirewallComponent } from './components/dashboard/firewall/firewall.component';

// Widgets
import { MetricsComponent } from './components/widgets/metrics/metrics.component';
import { VersionsComponent } from './components/widgets/versions/versions.component';
import { UnitTestsComponent } from './components/widgets/unit-tests/unit-tests.component';
import { FunctionalTestsComponent } from './components/widgets/functional-tests/functional-tests.component';

// Services
import { DashboardService } from './services/dashboard/dashboard.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FirewallComponent,
    BuildComponent,
    MetricsComponent,
    VersionsComponent,
    UnitTestsComponent,
    FunctionalTestsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
