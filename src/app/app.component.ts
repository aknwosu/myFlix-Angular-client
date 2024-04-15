// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
// import { MatDialog } from '@angular/material/dialog';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'myFlix-Angular-client';

//   constructor(public dialog: MatDialog) { }
//   // This is the function that will open the dialog when the signup button is clicked  
//   openUserRegistrationDialog(): void {
//     this.dialog.open(UserRegistrationFormComponent, {
//       // Assigning the dialog a width
//       width: '280px'
//     });
//   }
// }



import { Component } from '@angular/core';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFlix-Angular-client';

  constructor(public dialog: MatDialog) { }

  // open dialog on button click
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: "280px"
    });
  }
}