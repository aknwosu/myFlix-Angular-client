// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatIconModule } from "@angular/material/icon";
// import { MatToolbarModule } from '@angular/material/toolbar';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';

// @NgModule({
//     declarations: [
//         AppComponent,
//         UserRegistrationFormComponent
//     ],
//     imports: [
//         BrowserModule,
//         HttpClientModule,
//         AppRoutingModule,
//         FormsModule,
//         BrowserAnimationsModule,
//         MatInputModule,
//         MatButtonModule,
//         MatCardModule,
//         MatFormFieldModule,
//         MatDialogModule,
//         MatSnackBarModule,
//         FormsModule,
//         MatIconModule,
//         MatToolbarModule
//     ],
//     providers: [],
//     bootstrap: [AppComponent]
// })
// export class AppModule { }




import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import Angular Material modules for component use
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DirectorComponent } from './director/director.component';
import { GenreComponent } from './genre/genre.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { NavbarComponent } from './navbar/navbar.component';

/**
 * Array of route configurations for the application.
 * Defines routes and their corresponding components.
 */

const appRoutes: Routes = [
    { path: 'welcome', component: WelcomePageComponent },
    { path: 'movies', component: MovieCardComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];

@NgModule({
    declarations: [
        AppComponent,
        UserRegistrationFormComponent,
        UserLoginFormComponent,
        MovieCardComponent,
        WelcomePageComponent,
        UserProfileComponent,
        DirectorComponent,
        GenreComponent,
        SynopsisComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatDialogModule,
        MatSnackBarModule,
        MatIconModule,
        MatToolbarModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }