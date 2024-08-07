
const Page4 = () => {
    const googleFormUrl = 'https://docs.google.com/forms/d/1mEO1609n4GWEfbjKJKb47YSKfYcEZ9UQWOWsvX5Gyhs/prefill';
    return (
        <div className="contenedor">
            <img  src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/tarjeta%204%20(15)-04.jpg?alt=media&token=02169529-40b8-4ebc-ab09-52939ec1da06" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />

            <a 
            style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)'}}
        href={googleFormUrl} 
        target="_blank" rel="noopener noreferrer" 
        className=""
      >
        <button className="botonConfirmar">
        Confirmar
            </button>
      </a>
        </div>
        )
    }


export default Page4