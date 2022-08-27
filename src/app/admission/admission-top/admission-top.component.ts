import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  createPasswordStrengthValidator,
  identityRevealedValidator,
} from '../../util/Validator';

//constはまとめる？
const year: number = 100;
const restrict_age: number = 18;

@Component({
  selector: 'app-admission-top',
  templateUrl: './admission-top.component.html',
  styleUrls: ['./admission-top.component.scss'],
})
export class AdmissionTopComponent implements OnInit {
  prefectures: string[] = [
    '北海道',
    '青森県',
    '岩手県',
    '宮城県',
    '秋田県',
    '山形県',
    '福島県',
    '茨城県',
    '栃木県',
    '群馬県',
    '埼玉県',
    '千葉県',
    '東京都',
    '神奈川県',
    '新潟県',
    '富山県',
    '石川県',
    '福井県',
    '山梨県',
    '長野県',
    '岐阜県',
    '静岡県',
    '愛知県',
    '三重県',
    '滋賀県',
    '京都府',
    '大阪府',
    '兵庫県',
    '奈良県',
    '和歌山県',
    '鳥取県',
    '島根県',
    '岡山県',
    '広島県',
    '山口県',
    '徳島県',
    '香川県',
    '愛媛県',
    '高知県',
    '福岡県',
    '佐賀県',
    '長崎県',
    '熊本県',
    '大分県',
    '宮崎県',
    '鹿児島県',
    '沖縄県',
  ];

  minDate: Date = new Date(
    new Date().getFullYear() - year - restrict_age,
    0,
    1
  );
  maxDate: Date = new Date(new Date().getFullYear() - restrict_age, 0, 0);

  constructor() {}

  hide_1 = true;
  hide_2 = true;

  _admissionForm: FormGroup = new FormGroup(
    {
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      birth_day: new FormControl('', [Validators.required]),
      gender: new FormControl('', Validators.required),
      zip_cd: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(7),
      ]),
      prefecture: new FormControl('', Validators.required),
      address_1: new FormControl('', Validators.required),
      address_2: new FormControl('', Validators.required),
      building_name: new FormControl(''),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{10,11}'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        createPasswordStrengthValidator(),
      ]),
      password_confirm: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    },
    { validators: identityRevealedValidator }
  );

  get first_name() {
    return this._admissionForm.get('first_name');
  }

  get last_name() {
    return this._admissionForm.get('last_name');
  }

  get birth_day() {
    return this._admissionForm.get('birth_day');
  }

  get gender() {
    return this._admissionForm.get('gender');
  }

  get zip_cd() {
    return this._admissionForm.get('zip_cd');
  }

  get prefecture() {
    return this._admissionForm.get('prefecture');
  }

  get address_1() {
    return this._admissionForm.get('address_1');
  }

  get address_2() {
    return this._admissionForm.get('address_2');
  }

  get building_name() {
    return this._admissionForm.get('building_name');
  }

  get phone() {
    return this._admissionForm.get('phone');
  }

  get email() {
    return this._admissionForm.get('email');
  }

  get password() {
    return this._admissionForm.get('password');
  }

  get password_confirm() {
    return this._admissionForm.get('password_confirm');
  }

  ngOnInit(): void {}
}
