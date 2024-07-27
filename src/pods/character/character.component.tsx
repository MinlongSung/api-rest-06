import React from "react";
import { Formik, Form } from 'formik';
import CloseIcon from '@mui/icons-material/Close';

import { saveBestSentences } from "./api";
import { Character } from "./character.vw";
import * as classes from './character.styles';
import { formValidation } from './character.validations';

import {
  Alert,
  Button,
  TextFieldComponent,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from 'common/components';
import { SentenceListComponent } from "./components/sentence-list.component";

interface Props {
  character: Character;
  onClose: () => void;
  onSubmit: (data) => void;
}
export const CharacterComponent: React.FC<Props> = (props) => {
  const { character, onClose, onSubmit } = props;

  const [selected, setSelected] = React.useState(null);
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'backdropClick') return;

    setOpen(false);
    onClose();
  }
  const handleSelect = (idx) => {
    setSelected(idx);
  };

  const handleSubmit = async ({ sentence, index }, { resetForm }) => {
    let bestSentences = [...character.bestSentences];
    if (sentence === '')
      bestSentences = bestSentences.filter((_, idx) => idx !== index);
    else if (index !== null) bestSentences.splice(index, 1, sentence);
    else bestSentences.push(sentence);

    const { status, data } = await saveBestSentences(character.id + "", bestSentences);
    if (status === 200) {
      onSubmit(data);
      resetForm();
      setSelected(null);
    } else {
      alert('Error on saving the sentence');
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth='sm'
      fullWidth={true}
    >

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <DialogTitle sx={{ m: 0, p: 2, }}>{character?.name ?? ''}</DialogTitle>

        <IconButton
          aria-label="close"
          onClick={(e) => handleClose(e, undefined)}
          sx={{
            marginLeft: 'auto'
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>

      <DialogContent dividers style={{ display: 'flex', flexDirection: 'column' }}>
        {character ? (
          <>
            <img
              src={character.image}
              alt={`${character.name}-image`}
              style={{
                width: '50%',
                margin: 'auto'
              }}
            />

            {process.env.API_SERVER == 'local' && (
              <>
                <Formik
                  onSubmit={handleSubmit}
                  initialValues={{ sentence: '', index: null }}
                  enableReinitialize={true}
                  validate={formValidation.validateForm}
                >
                  {() => (
                    <Form className={classes.root}>
                      <TextFieldComponent name="sentence" label="Sentence" />
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{
                          height: '56px',
                          marginTop: '16px',
                        }}
                      >
                        Save
                      </Button>
                    </Form>
                  )}
                </Formik>

                {character.bestSentences.length > 0 && (
                  <>
                    <h4>Best Sentences</h4>
                    <SentenceListComponent
                      sentences={character.bestSentences}
                      selected={selected}
                      onSelect={handleSelect}
                      onSubmit={handleSubmit}
                    />
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <Alert severity="info" sx={{ my: 1 }}>Character not found</Alert>
        )}
      </DialogContent>
    </Dialog>
  );
}






