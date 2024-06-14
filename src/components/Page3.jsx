

const Page3 = () => {
    const locationUrl2 = "https://maps.app.goo.gl/J7dK1AnULB91aQBT7";
    return (
        <div className="contenedor">
            <img 
                src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/tarjeta%204%20(15)-03.jpg?alt=media&token=111b1b4a-f0fa-4348-afb4-23a3d9e99f81" 
                alt="" 
                style={{ maxWidth: '100%', maxHeight: '100%' }} 
            />
            <a
                style={{ position: 'absolute', top: '86%', left: '50%', transform: 'translate(-50%, -50%)' }}
                href={locationUrl2}
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="botonLlegar">Cómo llegar?</button>
            </a>
        </div>
    );
}

export default Page3;
