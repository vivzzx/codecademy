const clientId = '7bd8ad62504346b09bb6c0eb3d0a7643'
const redirectUri = `${window.location}/starter`
//const redirectUri = "http://localhost:3000/starter"
const url = 'https://api.spotify.com'
let codeVerifier = generateRandomString(128);
let access_token = localStorage.getItem("access_token") ? localStorage.getItem("access_token") : ''
//let playlistEndpoint = `/v1/users/${user_id}/playlists`


const generateAcessToken = async () => {
  const urlParams = new URLSearchParams(window.location.search)

  let codeVerifier = localStorage.getItem('code_verifier');

  let body = new URLSearchParams({
    grant_type: 'authorization_code',
    code: urlParams.get('code'),
    redirect_uri: redirectUri,
    client_id: clientId,
    code_verifier: codeVerifier
  })

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
     },
      body: body
    })
    //console.log('login response',response)

    if (!response.ok) {
      throw new Error('HTTP status ' + response.status)
    }

    const data = await response.json()

    localStorage.setItem('access_token', data.access_token)
    access_token = localStorage.getItem("access_token")
    access_token !== "" ? checkLogin(true) : checkLogin(false)
    
    const responseProfile = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + access_token
      }
    });
  
    const dataProfile = await responseProfile.json();
    //console.log("data aqui", dataProfile)
    //console.log("id aqui", user_id)
    return dataProfile

  } catch (error) { 
    //console.error('Error:', error);
  }
}

const createPlaylist = async (profile_id, playlistTitle) => {
  try {
    const body = JSON.stringify({
      "name": playlistTitle,
      "description": "A playlist made in Jamming App",
      "public": false
    })
    const response = await fetch((`${url}/v1/users/${profile_id}/playlists`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      },
      body : body
    })
    if (response.ok) {
      const jsonResponse = await response.json()
      console.log("playlist criada aqui", jsonResponse)
      const playlist_id = jsonResponse.id
      return playlist_id
      
    }
  throw new Error('Request Failed')
  } catch (error) {
    console.log(error)
  }
}

const saveTracksPlaylist = async (tracksUris, playlist_id) => {
  try {
    const body = JSON.stringify({
      "uris": tracksUris,
      "position": 0
    })
    console.log("body: ", body)
    const response = await fetch((`${url}/v1/playlists/${playlist_id}/tracks`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      },
      body: body
    })
    if (response.ok) {
      const jsonResponse = await response.json()
      console.log("playlist snapshot, criado com sucesso", jsonResponse)
      return jsonResponse
    }

  } catch (error) {
    console.log(error)
  }
}

const profileId = async () => {
  try {
    const responseProfile = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + access_token
      }
    });
  
    const dataProfile = await responseProfile.json();
    //console.log("data aqui", dataProfile)
    return dataProfile.id

  } catch (error) { 
    //console.error('Error:', error);
  }
}

const saveToPlaylist = async (trackUris, playlistTitle) => {
  const profile_id = await profileId()
  const playlist_id = await createPlaylist(profile_id, playlistTitle)
  const tracksToSave = await saveTracksPlaylist(trackUris, playlist_id)
  console.log("response tracks2save:", tracksToSave)
}


const checkIsCode = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const checkCode = urlParams.get('code')
  //console.log("checkCode", checkCode, "| params:", urlParams)
  return !!checkCode
}

const checkIsToken = () => {
  //console.log("check token", access_token)
  //return access_token ? true : false
  return !!access_token
} 

const checkLogin = (isOk) => {
  /*
  if (checkIsCode() && checkIsToken()) {
    console.log("helper checkLogin: true")
    return true
  } else {
    console.log("helper checkLogin: false")
    return false
  }
  */
  return isOk
}


function generateRandomString(length) {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier) {
  function base64encode(string) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);

  return base64encode(digest);
}

const startGenerate = () => {
  generateCodeChallenge(codeVerifier).then(codeChallenge => {
    let state = generateRandomString(16);
    let scope = 'user-read-private user-read-email playlist-modify-private';
  
    localStorage.setItem('code_verifier', codeVerifier);
  
    let args = new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      scope: scope,
      redirect_uri: redirectUri,
      state: state,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge
    });
  
    window.location = 'https://accounts.spotify.com/authorize?' + args;
    //getProfile()
  })
}

const getTracks = async (word) => {
  const queryParams = '/v1/search?q='
  //const types = '&type=artist%2Ctrack&limit=10'
  const types = '&type=track&limit=10'
  const endpoint = url + queryParams + word + types

  try {
      const response = await fetch(endpoint, {
          headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('access_token')
          }
      })
      if (response.ok) {
          const jsonResponse = await response.json()
          console.log("response tracks: ", jsonResponse)
          return jsonResponse
      }
  }
  catch (error) {
      console.log(error)
  }
}


export {generateAcessToken, checkIsCode, startGenerate, checkIsToken, checkLogin, getTracks, saveToPlaylist, createPlaylist}