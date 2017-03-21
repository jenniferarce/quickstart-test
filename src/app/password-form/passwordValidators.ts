import { FormControl, FormGroup } from '@angular/forms';
import { PasswordComponent } from './password-form.component';

export class PasswordValidators {


    static passwordMinLength(control: FormControl) {
        const minLength = 5;
        if (control.value != "") {
            if (control.value.length < minLength) {
                return { passwordMinLength: { minLength: minLength } };
            }
        }
        return null;
    }

    static equalPassword(group: FormGroup) {
        var newpass = group.get("newpassword").value;
        var renewpass = group.get('renewpassword').value;

        if (newpass == '' || renewpass == ''){
            return null;
        }

      // if (newpass != renewpass) {
         //   return { mismatchedPasswords: true };
          //  return {equalPassword : true};
        //} //---> error con el npm start / por el true

    //    return null;
    }
}


