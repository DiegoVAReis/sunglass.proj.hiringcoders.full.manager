/* Função de autenticação falsa */
export function Auth() {
  const user_login_cadastro = localStorage.getItem('user');

  if (user_login_cadastro == null) {
    return false
  } else {
    return true
  }
} 

 

