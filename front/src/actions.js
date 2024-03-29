import swal from 'sweetalert2';
const apiUrl = 'http://localhost:8000';

export const SET_OBJ = 'SET_OBJ';
export const ADD_OBJ = 'ADD_OBJ';
export const OBJ_FETCHED = 'OBJ_FETCHED';
export const OBJ_UPDATED = 'OBJ_UPDATED';
export const OBJ_DELETED = 'OBJ_DELETED';

let msg = "Ocorreu algum problema com esta operação! \n Tente novamente.";

function handleResponse(response) {
  if (response.ok) {
      console.log(response);
    return response.json();
  } else {
    return response.json().then((data) => {
      msg = data.userMessage ? data.userMessage : msg;
      throw msg;
    }).catch((e) => {
      swal("Ops!", msg, "error");
      throw e;
    });
  }
}

export function setObj(obj) {
  return {
    type: SET_OBJ,
    obj
  }
}

export function addObj(obj) {
  return {
    type: ADD_OBJ,
    obj
  }
}

export function objFetched(obj) {
  return {
    type: OBJ_FETCHED,
    obj
  }
}

export function objUpdated(obj) {
  return {
    type: OBJ_UPDATED,
    obj
  }
}

export function objDeleted(id) {
  return {
    type: OBJ_DELETED,
    id
  }
}

export function saveObj(url, data) {

    return fetch(`${apiUrl}${url}`, {
      method: 'post',
      body: JSON.stringify(
        data
      ),
      headers: {
        "Content-Type": "application/json",
      }
    }).then(data => {
        swal("", "Registro salvo com sucesso!", "success");
      });
}

export function updateObj(url, data) {
  
  return fetch(`${apiUrl}${url}`, {
    method: 'put',
    body: JSON.stringify(
      data
    ),
    headers: {
      "Content-Type": "application/json",
    }
  }).then(handleResponse)
    .then(data => {
      return swal("", "Registro atualizado com sucesso!", "success");
    });
}

export function deleteObj(url, id) {

    return fetch(`${apiUrl}${url}/${id}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(data => {
        swal("", "Registro excluído com sucesso!", "success");
      });
}

export function deleteObj2(url, id, id2) {

    return fetch(`${apiUrl}${url}/${id}/${id2}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(data => {
        swal("", "Registro excluído com sucesso!", "success");
      });
}

export function fetchObjs(url, page = 1, records = 10) {

  let query = `${apiUrl}${url}`;

    return fetch(query, {})
    .then(handleResponse);
}

export function fetchObj(url, id) {

    // swal({onOpen: () => { swal.showLoading()}});
    return fetch(`${apiUrl}${url}/${id}`, {
      
    })
    .then(res => res.json());
}

export function fetchObj2(url, id, id2) {

    // swal({onOpen: () => { swal.showLoading()}});
    return fetch(`${apiUrl}${url}/${id}/${id2}`, {
      
    })
      .then(data => {
        // swal.close()
        console.log(data);
        if (data.records && data.records.length < 1) {
          swal("Ops!", "Nenhum registro encontrado : ) ", "warning");
        }
      });
}

export function autenticar(user, props) {

  const requestInfo = {
    method: 'POST',
    body: JSON.stringify({
      usuario: {
        login: user.login,
        password: user.md5Password
      }
    }),
    headers: new Headers({
      'Content-type': 'application/json'
    })
  };
  return dispatch => {
    return fetch(apiUrl + '/login/web', requestInfo)
      .then(handleResponse)
      .then(data => {
        if (data && data.records && data.records.length > 0) {
          dispatch(objFetched(data));
        }
      })
      .catch(err => {
        throw err;
      });
  }
}

export function isUsuarioLogado() {
  return localStorage.getItem('token') ? true : false;
}

export function redirectToLogin() {
  return swal({
    title: 'O usuário não está logado no sistema',
    type: 'error',
    text: 'Something went wrong!',
    showConfirmButton: true,
    confirmButtonText: 'Login',
    html:
      'Clique no botão abaixo e faça login novamente '

  }).then(function (isConfirm) {
    if (isConfirm) {
      document.location.href = '#/login';
    };
  })
}

export function application(url) {

  return dispatch => {
    return fetch(`${apiUrl}${url}`, {
      headers: {
        "token": localStorage.getItem('token')
      }
    }).then(res => res.json())
      .then(data => {
        //console.log(data);
        //dispatch(objFetched());
        swal("Aguarde!", "O comando foi enviado ao servidor ", "info");
      });
  }
}
