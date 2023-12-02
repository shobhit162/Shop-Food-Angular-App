import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AuthComponent } from "./auth/auth.component";


const AppRoutes:Routes =[
    {
        path:'',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path:'shopping-list',
        component: ShoppingListComponent
    },
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path:'recipes', loadChildren: () =>import('./recipes/recipes.module').then(m=>m.RecipesModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule{

}