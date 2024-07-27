import React from "react";
import { Formik, Form } from 'formik';

import * as classes from '../character.styles';
import { formValidation } from '../character.validations';
import {
  TextFieldComponent,
  Button,
} from 'common/components';
import { SentenceProps } from "./sentence.model";

export const SentenceEditComponent: React.FC<SentenceProps> = (props) => {
  const { sentence, index, onSelect, onSubmit } = props;

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={{ sentence, index }}
        enableReinitialize={true}
        validate={formValidation.validateForm}
      >
        {() => (
          <Form className={classes.root} style={{ flexDirection: 'row', width: '100%' }}>
            <TextFieldComponent
              name="sentence"
              label="Sentence"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                height: '56px',
                marginTop: '16px',
              }}
            >
              Modify
            </Button>

            <Button
              onClick={() => onSelect(null)}
              variant="text"
              color="primary"
              style={{
                height: '56px',
                marginTop: '16px',
              }}
            >
              Cancel
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
