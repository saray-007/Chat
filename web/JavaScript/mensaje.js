/*  This file contains class Mensaje for a chat aplication
 * @author Saray Díaz
 */
class Mensaje {
    /**
     * Constructor for mensaje class
     * @param {string} texto the message text
     * @param {type} dateTime the instant the message is created
     * @returns {mensaje}
     */
    constructor(texto, dateTime) { 
        this.texto = texto; 
        this.dateTime = dateTime; 
    }
}

export { Mensaje };

