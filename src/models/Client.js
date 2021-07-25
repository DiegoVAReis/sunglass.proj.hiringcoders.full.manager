class Client {
    constructor(id_registro,
                nomePerson,
                cpfPerson,
                emailPerson, 
                phonePerson, 
                addressPerson, 
                addressNumberPerson, 
                addressCepPerson, 
                addressCityPerson, 
                addressUFPerson, 
                addressComplementPerson, 
                user_login_cadastro) {
        this.id_registro = id_registro;
        this.nomePerson = nomePerson;
        this.cpfPerson = cpfPerson;
        this.emailPerson = emailPerson;
        this.phonePerson = phonePerson; 
        this.addressPerson = addressPerson;
        this.addressNumberPerson = addressNumberPerson;
        this.addressCepPerson = addressCepPerson;
        this.addressCityPerson = addressCityPerson;
        this.addressUFPerson = addressUFPerson;
        this.addressComplementPerson = addressComplementPerson;
        this.user_login_cadastro = user_login_cadastro;

    }
}

export default Client()