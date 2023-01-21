import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

type DeliveryFormType = { name: FormControl<string>; address: FormControl<string>; phone: FormControl<string> };

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeliveryComponent {
  public deliveryForm: FormGroup<DeliveryFormType>;
  public isShowPopup = false;

  public constructor(private readonly fb: FormBuilder, private readonly http: HttpClient, private readonly cdRef: ChangeDetectorRef) {
    this.clearForm();
  }

  public isInvalidFieldForm(name: keyof DeliveryFormType): Observable<boolean> {
    return of((this.deliveryForm.get(name).touched || this.deliveryForm.get(name).dirty) && this.deliveryForm.get(name).invalid);
  }

  public addOrder() {
    if (this.deliveryForm.status === 'VALID') {
      this.http.post('https://jsonplaceholder.typicode.com/posts', this.deliveryForm.value).subscribe({
        next: () => {
          this.clearForm();
          this.isShowPopup = true;
          this.cdRef.markForCheck();
        }
      });
    }
  }

  private clearForm() {
    this.deliveryForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^((\+7|7|8)+([0-9]){10})$/)]]
    });

    this.deliveryForm.get('name').valueChanges.subscribe((name) => {
      this.deliveryForm.get('name').patchValue(name.replace('.', ''), { emitEvent: false });
    });
  }
}
