import { MedicoComponent } from "src/app/intermedio2/medico/medico.component";
import { Rutas } from "./app.route";

describe('Rutas Principales', () => {
    it('Debe existir la ruta /medico/"id', () => {
        expect(Rutas).toContain({
            path: 'medico/:id',
            component: MedicoComponent
        });
    });
    
    
});
