import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaginainicialComponent } from "./paginainicial/paginainicial.component";
import { ReporteClientesComponent } from "./reporte-clientes/reporte-clientes.component";


const routes:Routes=[
    {path:"",component:PaginainicialComponent},
    { path: 'PaginaInicial', component: PaginainicialComponent }, 
    { path: 'ReporteCliente', component: ReporteClientesComponent }, 
    { path: 'citas', loadChildren: () => import('./modulos/citas/citas.module').then(m => m.CitasModule) },
    { path: 'recordatorios', loadChildren: () => import('./modulos/recordatorios/recordatorios.module').then(m => m.RecordatoriosModule) },
    { path: 'seguridad', loadChildren: () => import('./modulos/seguridad/seguridad.module').then(m => m.SeguridadModule) },
    { path: 'historial-medico', loadChildren: () => import('./modulos/historial-medico/historial-medico.module').then(m => m.HistorialMedicoModule) },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }