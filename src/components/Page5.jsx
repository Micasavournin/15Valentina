
const Page5 = () => {
    const pinterestUrl = "https://pin.it/xthsFZkM7";
    return (
        <div className="contenedor">
                <img src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/tarjeta%204%20(15)-05.jpg?alt=media&token=7297b330-a7a0-4641-ae08-c12fd2e60eea" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />

                <a
            style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)'}}
          href={pinterestUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="botonInspo">

          Inspo
        </button>

        </a>
            
        </div>
        )
    }


export default Page5