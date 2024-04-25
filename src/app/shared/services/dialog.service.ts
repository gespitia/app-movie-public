// dialog.service.ts
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable()
export class DialogService {
  constructor(public dialog: MatDialog) { }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: data // Pasando los datos aquí
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El dialogo fue cerrado');
      // Puedes hacer algo con el resultado si es necesario
    });
  }
}
