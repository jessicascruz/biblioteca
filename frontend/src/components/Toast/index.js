import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';


export default ({ open, handleClose, children, severity }) => (

        <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal:'right' }} onClose={handleClose}>
          <Alert onClose={handleClose} variant="filled" severity={severity}>
            {children}
          </Alert>
        </Snackbar>
)