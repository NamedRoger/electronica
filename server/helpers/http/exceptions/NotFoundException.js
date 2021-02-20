class NotFoundException {
    constructor(){
        this.status = 404;
        this.message = "No se econtró el recurso";
    }
}

module.exports = NotFoundException;