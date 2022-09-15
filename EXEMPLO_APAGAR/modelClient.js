module.exports = {
    clients: [
        {
            id: "1",
            status: "ATIVO",
            name: "teste 1",
        },
        {
            id: "2",
            status: "INATIVO",
            name: "teste 2",
        },
    ],

    selectClients() {
        return this.clients;
    },

    newClient(id,status, name) {
        this.clients.push({ id, status, name });
    },

    deleteClient(id){

    },

}