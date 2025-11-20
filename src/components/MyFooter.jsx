import 'bootstrap/dist/css/bootstrap.min.css'

import Alert from 'react-bootstrap/Alert';



const MyFooter=function () {
  return (
    <>
    
      {[ 'light',
         ].map((variant) => (
        <Alert key={variant} variant={variant} className='text-center mt-3'>
            <div className="text-center " ><h1 >Welcome</h1>
</div>
          Qui troverai solo libri epici!
        </Alert>
      ))};
      
  
 </>
  );  }
export default MyFooter