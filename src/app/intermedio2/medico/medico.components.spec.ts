import { TestBed, ComponentFixture } from "@angular/core/testing";
import { MedicoComponent } from "./medico.component"
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MedicoService } from "./medico.service";


describe('Medico Component 2', () => {
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [MedicoService],
            imports: [HttpClientModule]
        });

        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance;
    });

    it('Debe de crearse el componente', () =>{
        expect(component).toBeTruthy();
    });

    it(' Debe saludar al medico', ()=>{
        const name = 'Pedro';
        const res = component.saludarMeido(name);

        expect(res).toContain(name);
    })
});