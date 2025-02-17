import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    sentence: [Validators.required],
  },
};

export const formValidation = createFormikValidation(validationSchema);
