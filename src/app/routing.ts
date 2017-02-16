// Importer les class nécessaires à l'utilisation des routes
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importer les composants à utiliser dans les routes
import { GroceryComponent } from './grocery/grocery.component';

//Déclarer une constante de type Routes = variable non modifiable
const appRoutes: Routes = [

   //Définition des routes
   {
       //Redirection de la page d'accueil
       path: '',
       redirectTo: 'grocery',
       pathMatch: 'full'
   },


   {
       //Définir l'adresse
       path: 'grocery',
       //Définir le composant à utiliser
       component: GroceryComponent
   }

   
];

//Exporter la constante des routes
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);