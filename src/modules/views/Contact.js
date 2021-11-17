import * as React from 'react';
import {HeaderTitlePurple, TextPurple, useStyles} from "../components/Styles";

function Contact() {
    const classes = useStyles();
  return (
      <div className={classes.purpleLightBox}>
          <div className={classes.blocks}>
              <HeaderTitlePurple id={'contact'}>
                  Contact
              </HeaderTitlePurple>
              <TextPurple>
                  Les rdv peuvent se prendre par téléphone ou par e-mail.
              </TextPurple>
              <TextPurple>
                  +41 78 207 70 85
              </TextPurple>
              <TextPurple>
                  info@oxalis-respiration.ch
              </TextPurple>
          </div>
      </div>
  );
}

export default Contact;
