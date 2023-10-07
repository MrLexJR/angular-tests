import { Observable, from, of, EMPTY, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  const spy = jasmine.createSpyObj('HttpClient', {
    post: of({}),
    get: of({}),
  });
  const servicio = new MedicosService(spy);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('Init: Debe de cargar los medicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];

    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });

    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debe llamar al servidor para crear medico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake(() => {
      return EMPTY.pipe();
    });

    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();
  });

  it('Debe agregar nuevo crear medico', () => {
    const medico = { id: 1, nombre: 'Alguien' };

    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

    componente.agregarMedico();
    expect(componente.medicos.length).toBe(1);
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adicion, la propiedad error, debe ser igual ', () => {
    const mensajeError = 'Esto es un error';
    spyOn(servicio, 'agregarMedico').and.returnValue(
      throwError(() => mensajeError)
    );

    expect(componente.mensajeError).toBe(mensajeError);
  });

  it('Debe llamar al servidor para borrar medico', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const espia = spyOn(servicio, 'borrarMedico').and.callFake(() => {
      return EMPTY.pipe();
    });

    componente.borrarMedico('1');

    expect(espia).toHaveBeenCalled();
  });

   it('No Debe llamar al servidor para borrar medico', () => {
     spyOn(window, 'confirm').and.returnValue(false);
     const espia = spyOn(servicio, 'borrarMedico').and.callFake(() => {
       return EMPTY.pipe();
     });

     componente.borrarMedico('1');

     expect(espia).not.toHaveBeenCalled();
   });
});

