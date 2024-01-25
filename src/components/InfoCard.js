import React, { useRef, useState } from 'react';
import './Cards.css';
import emailjs from '@emailjs/browser';

function InfoCard() {
    const refForm = useRef();
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = "service_pm4h33z";
        const templateId = "template_y8id396";
        const apikey = "MT0F0c5YEodww0onv";

        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
            .then(result => {
                console.log(result.text);
                setIsSubmitSuccessful(true);
            })
            .catch(error => {
                console.error(error);
                setIsSubmitSuccessful(false);
            });
    }
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/message/NDIRWGDP4KLMM1', '_blank');
      };

    return (
        <div className='cardsInfo'>
            <h1 style={{textAlign:'center'}}>CONTÁCTANOS!</h1>
            <div className='whatsApp-container' onClick={handleWhatsAppClick}> 
            <h1> WhatsApp </h1>
            <img className="imagen" src='./images/whatsApp.png' alt="WhatsApp Logo" />
            </div>
            <hr/>
            <h2> Envíanos tus datos y uno de nuestros agentes te estará contactando </h2>
            {isSubmitSuccessful ? (
                <div className="success-message">
                    ¡Formulario enviado con éxito!
                </div>
            ) : (
                <div className='container-info-row'>
                    <div className='info'>
                        <form className="custom-form" ref={refForm} action='' onSubmit={handleSubmit}>
                            <fieldset>
                                <label htmlFor="name">Nombre Completo:</label>
                                <input type="text" id="name" name="username" placeholder="Ingresa tu nombre aquí..." required />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="email">Correo Electrónico:</label>
                                <input type="email" id="email" name="email" placeholder="Ej: email123@gmail.com" required />
                            </fieldset>

                            <fieldset>
                                <label htmlFor="phoneNumber">Número de Teléfono:</label>
                                <input type="tel" id="phoneNumber" name="number" placeholder="Ingresa tu número telefónico..." required />
                            </fieldset>

                            <button>Enviar</button>
                        </form>
                    </div>
                        <div className="logo-container">
                            <img className="imagen" src='./images/HaciendaPlayaBlanca-Blanco.png' alt="Hacienda Playa Blanca" />
                            <img className="imagen" src='./images/TerraticaLogo.png' alt="Terratica Logo" />
          
                    </div>
                    
                </div>
            )}


        </div>
    );
}

export default InfoCard;
