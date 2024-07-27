import React from "react";

import {
  List,
  ListItem,
} from 'common/components';
import { SentenceComponent } from "./sentence.component";
import { SentenceEditComponent } from "./sentence-edit.component";

interface SentenceListProps {
  sentences: string[];
  selected: number;
  onSelect: (idx) => void;
  onSubmit: (data, fnReset) => void;
}
export const SentenceListComponent: React.FC<SentenceListProps> = (props) => {
  const { sentences, selected, onSelect, onSubmit } = props;

  // TODO ask on delete

  return (
    <>
      <List>
        {sentences.map((sentence, index) => (
          <ListItem key={`${sentence}_${index}`}>
            {selected !== index ? (
              <SentenceComponent
                sentence={sentence}
                index={index}
                onSelect={onSelect}
                onSubmit={onSubmit}
              />
            ) : (
              <SentenceEditComponent
                sentence={sentence}
                index={index}
                onSelect={onSelect}
                onSubmit={onSubmit}
              />
            )}
          </ListItem>
        ))}
      </List>

      {/* <ul>
        {sentences.map((sentence, index) => (
          <li key={`${sentence}_${index}`}>
            {selected !== index ? (
              <>
                <span>{sentence}</span>
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
            ) : (
              <>
                <Formik
                  onSubmit={onSubmit}
                  initialValues={{ sentence, index }}
                  enableReinitialize={true}
                  validate={formValidation.validateForm}
                >
                  {() => (
                    <Form className={classes.root}>
                      <TextFieldComponent
                        name="sentence"
                        label="Sentence"
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                      >
                        Modify
                      </Button>

                      <Button
                        onClick={() => onSelect(null)}
                        variant="text"
                        color="primary"
                      >
                        Cancel
                      </Button>
                    </Form>
                  )}
                </Formik>
              </>
            )}
          </li>
        ))}
      </ul> */}
    </>
  )
}
