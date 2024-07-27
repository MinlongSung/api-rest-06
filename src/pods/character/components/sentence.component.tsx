import React from "react";
import { Formik, Form } from 'formik';

import {
  ListItemText,
  Button,
} from 'common/components';
import { SentenceProps } from "./sentence.model";


export const SentenceComponent: React.FC<SentenceProps> = (props) => {
  const { sentence, index, onSelect, onSubmit } = props;

  return (
    <>
      <ListItemText
        primary={sentence}
      />
      <Button
        variant="outlined"
        onClick={() => onSelect(index)}
      >
        Edit
      </Button>

      <Formik
        onSubmit={onSubmit}
        initialValues={{ sentence: '', index }}
        enableReinitialize={true}
      >
        {() => (
          <Form>
            <Button
              type="submit"
              variant="text"
              color="primary"
            >
              Delete
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}
