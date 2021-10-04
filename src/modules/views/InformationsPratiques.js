import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

function InformationsPratiques() {
  return (
    // <Box
    //   component="section"
    //   sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    // >
      // <Container
      //   sx={{
      //     mt: 10,
      //     mb: 15,
      //     position: 'relative',
      //     display: 'flex',
      //     flexDirection: 'column',
      //     alignItems: 'center',
      //   }}
      // >
      //   <Box
      //     component="img"
      //     src="/static/themes/onepirate/productCurvyLines.png"
      //     alt="curvy lines"
      //     sx={{
      //       pointerEvents: 'none',
      //       position: 'absolute',
      //       top: -180,
      //       opacity: 0.7,
      //     }}
      //   />
      <Container>
        <Typography variant="h1" marked="center" component="h2" sx={{ mb: 14 }}>
          Informations Pratiques        
        </Typography>
        <p>
      Être habillé confortablement (training, habits souples par exemple), vous allez gar- der vos vêtements.
      </p>
      <h2>
      Tarifs et durée
      </h2>
      <p>
      Une séance coûte CHF 100.–
      Paiement en espèce uniquement (non remboursé par les caisses maladie).
      Durée approximative : 60 à 90 minutes (première séance), puis entre 45 et
      60 minutes pour les suivantes. A noter que le nombre de séance ne peut être défini en avance, la prise en charge est en fonction de chaque individu.
      </p>
      <h2>
      Horaires & lieu
      </h2>
      <p>
      Tous les mercredis après-midi, au cabinet ostéopathie XXXXXXX, Notre Dame de la route XX, Villars-sur-Glâne
      </p>
      <h2>
      Liens externes      
      </h2>
      <p>
      Site de Benoît Tremblay : www.pneumacorps.com
      Site de Union PneumaCorps France : pneumacorps2021.wixsite.com/my-site-1     
      </p>
      <h2>
      Informations Covid
      </h2>
      <p>ˆ
      Les mesures usuelles sont en vigueur.   
      </p>
      </Container>
        


        // <div>
        //   <Grid container spacing={5}>
        //     <Grid item xs={12} md={4}>
        //       <Box sx={item}>
        //         <Box sx={number}>1.</Box>
        //         <Box
        //           component="img"
        //           src="/static/themes/onepirate/productHowItWorks1.svg"
        //           alt="suitcase"
        //           sx={image}
        //         />
                /* <Typography variant="h5" align="center">
                  Appointment every Wednesday 9am.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="/static/themes/onepirate/productHowItWorks2.svg"
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  First come, first served. Our offers are in limited quantities, so
                  be quick.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img" */
    //               src="/static/themes/onepirate/productHowItWorks3.svg"
    //               alt="clock"
    //               sx={image}
    //             />
    //             <Typography variant="h5" align="center">
    //               {'New offers every week. New experiences, new surprises. '}
    //               {'Your Sundays will no longer be alike.'}
    //             </Typography>
    //           </Box>
    //         </Grid>
    //       </Grid>
    //     </div>
    //     <Button
    //       color="secondary"
    //       size="large"
    //       variant="contained"
    //       component="a"
    //       href="/premium-themes/onepirate/sign-up/"
    //       sx={{ mt: 8 }}
    //     >
    //       Get started
    //     </Button>
    //   </Container>
    // </Box>
  );
}

export default InformationsPratiques;
