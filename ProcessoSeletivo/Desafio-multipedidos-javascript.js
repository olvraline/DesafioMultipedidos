//Desafio 1: JavaScript

//Para este desafio, você precisará criar um código JavaScript que resolva a seguinte lógica:

//Receba um array de usuários contendo: nome, idade e email.
//Crie uma promise que receba o array de usuários e o valor que deseja pesquisar.
//Esta promise deve percorrer todos os usuários e retornar o primeiro que tenha o mesmo valor solicitado em alguma das propriedades.
//Se não encontrar nenhum dado, o código deve tratar um erro para cair no catch.
//Após coletar o resultado pesquisado no array, exiba esse usuário.


function searchUserMultipedidos(UserRegistered, CorespondentUser) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundUserRegister = UserRegistered.find(UserRegistered =>
                Object.values(UserRegistered).some(value => value === CorespondentUser)
            );

            foundUserRegister ? resolve(foundUserRegister) : reject(new Error('Nenhum usuário encontrado, favor validar entradas fornecidas!'));
        });
    });
}

const UserRegisterArray = [
    { Nome: 'Aline', Idade: '27', Email: 'aline.oliveira@email.com' },
    { Nome: 'Carolina', Idade: '45', Email: 'carol@email.com' },
    { Nome: 'Gabriel', Idade: '67', Email: 'gab@email.com' }

];

const CorespondentUser = '67'; //substituir para usuario, idade ou email que deseja buscar no array.

searchUserMultipedidos(UserRegisterArray, CorespondentUser)
    .then(result => console.log('Usuario encontrado:', result))
    .catch(error => console.error('Erro:', error.message));
