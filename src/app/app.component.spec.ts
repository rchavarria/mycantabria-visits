/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { EstateComponent } from './estate/estate.component';
import { CustomerComponent } from './customer/customer.component';
import { WarningComponent } from './warning/warning.component';
import { SignaturesComponent } from './signatures/signatures.component';
import { SignatureComponent } from './signature/signature.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VisitManagementComponent } from './visit-management/visit-management.component';

describe('App: MycantabriaVisits', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EstateComponent,
        CustomerComponent,
        WarningComponent,
        SignaturesComponent,
        SignatureComponent,
        HeaderComponent,
        FooterComponent,
        VisitManagementComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should create the app without TestBed', () => {
    const component = new AppComponent();
    expect(component).toBeTruthy();
  });

  it(`should have as title 'app stops working!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app stop working!');
  }));

});
