import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App default
import { AppComponent } from './app.component';

// Dashboard
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Build
import { BuildComponent } from './components/build/build.component';

// Widgets
import { MetricsComponent } from './components/widgets/metrics/metrics.component';
import { VersionsComponent } from './components/widgets/versions/versions.component';
import { UnitTestsComponent } from './components/widgets/unit-tests/unit-tests.component';
import { FunctionalTestsComponent } from './components/widgets/functional-tests/functional-tests.component';
import { ResultsComponent } from './components/widgets/results/results.component';

// Services
import { DashboardService } from './services/dashboard/dashboard.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BuildComponent,
    MetricsComponent,
    VersionsComponent,
    UnitTestsComponent,
    FunctionalTestsComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
