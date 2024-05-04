import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {BrowserModule, By} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should init', () => {
    expect(app).toBeTruthy();
  });

  it("should call formGroup.valueChanges when 'input' event is dispatched", () => {
    const nameEl = fixture.debugElement.query(
      By.css('#name')
    )?.nativeElement as HTMLTextAreaElement || undefined;
    expect(nameEl).toBeTruthy();
    nameEl.value = 'ab';
    nameEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(app.reverseName).toEqual('ba');
  });
});
