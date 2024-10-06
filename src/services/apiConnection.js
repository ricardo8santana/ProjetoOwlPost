import * as env from '../models/env' 

// Se NÂO estiver abrindo o site como localhost (127.0.0.1) essa url não funciona!!!!
//
// Pra funcionar fora do localhost (127.0.0.1) ou em outros dispositivos precisa 
// trocar o ip do localhost pelo ip da maquina que tá rodando o servidor da API. 
//
// EX:
//      'http://10.23.49.20:3000'; // o ip de uma maquina no senac.
// 
// Use o 'cmd' para achar seu ip da sua maquina com o camando 'ipconfig' (sem as aspas)
// procure por 'Ethernet', 'Wireless', 'Wi-fi' e pegue o endereço IPv4.

// Para mudar a configuração e não afetar o projeto, crie um arquivo '.env.local' na
// raiz do projeto e modifique o valor de:
//
// # arquivo .env.local
// VITE_API_URL='sua url'
//

// Mude a configuração no arquivo .env ou .env.local na raiz do projeto
export const urlAPI = env.API_URL !== '' ? env.API_URL : 'http://localhost:3000';