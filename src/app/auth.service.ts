import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private dbService: NgxIndexedDBService) {}

  login(email: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      console.log('Email recibido en login:', email);
      console.log('Contraseña recibida en login:', password);
  
      this.dbService.getByKey<User>('users', email).subscribe(user => {
        console.log('Usuario recuperado de la base de datos:', user);
  
        if (user) {
          if (user.password === password) {
            console.log('Inicio de sesión exitoso');
            resolve(true);
          } else {
            console.log('Contraseña incorrecta');
            resolve(false);
          }
        } else {
          console.log('Usuario no encontrado');
          resolve(false);
        }
      }, error => {
        console.error('Error obteniendo el usuario:', error);
        resolve(false);
      });
    });
  }
  
  
  register(email: string, password: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.dbService.add('users', { email, password }).toPromise();
        console.log('Usuario registrado con éxito');
        resolve();
      } catch (error) {
        console.error('Error registrando el usuario:', error);
        reject(error);
      }
    });
  }
}
