//Armazenar itens HTML
const teclaLetra = document.querySelectorAll('.teclaletra');

// Criar uma lista de categorias e dentro dessas categorias, uma lista de palavras que serão usadas;

const paises = ['moçambique', 'tunisia', 'chile', 'espanha', 'lituania', 'china', 'mongolia'];
const animais = ['capivara', 'enguia', 'corvo', 'vespa', 'avestruz', 'morcego'];
const objetos = ['broca', 'brinco', 'maçarico', 'alicate', 'cortina', 'regador'];
const alimentos = ['feijao', 'carne', 'cebola', 'iogurte', 'abacate', 'vatapa'];
const anatomia = ['baço', 'nervo', 'dedo', 'nariz', 'antebraço'];

//Criar um jeito de escolher uma palavra dessa lista aleatoriamente e exibi-la no elemento html adequado;

const temas = [paises, animais, objetos, alimentos, anatomia]; 
const primeiroSorteio = Math.floor(Math.random() * temas.length);
const arrayEscolhida = temas[primeiroSorteio];

console.log(arrayEscolhida);

function escolherArray(arrayEscolhida) {
    const itemAleatorio = Math.floor(Math.random() * arrayEscolhida.length);
    return arrayEscolhida[itemAleatorio];
}

const letrasArrayEscolhida = escolherArray(arrayEscolhida); 
console.log(letrasArrayEscolhida + ' - palavra escolhida');

// Criar elementos html que sirvam de letreiro onde serão exibidas as letras corretas: o número deles é baseado na quantidade de letras que a palavra escolhida tem;

const comprimento = letrasArrayEscolhida.length;
console.log(comprimento + ' = número de letras') 

const exibirLetras = document.querySelector('#exibirLetras');
const letrasUsadas = document.querySelector('#letrasUsadas');


switch (primeiroSorteio) {
    case 0: 
    document.querySelector('#dicaDaPalavra').textContent = 'País:';   
    break; 

    case 1:
    document.querySelector('#dicaDaPalavra').textContent = 'Animal:';
    break; 
    
    case 2: 
    document.querySelector('#dicaDaPalavra').textContent = 'Objeto:';
    break;

    case 3: 
    document.querySelector('#dicaDaPalavra').textContent = 'Alimento:';
    break;

    case 4: 
    document.querySelector('#dicaDaPalavra').textContent = 'Anatomia:';
    break; 
}

for (nl = 1; nl <= comprimento; nl++) {
        function criarLetreiro() {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'letrasCertas';
            const displayDeLetras = exibirLetras.appendChild(input);
            return displayDeLetras
        }
        
        criarLetreiro();
    }  

const letreirosCriados = document.querySelectorAll('.letrasCertas');
const botoesLetras = document.querySelector('.teclaLetra');
    

// Ao escolher uma letra, verificar se a palavra escolhida possui a letra: 
// - Caso possua, mostrar a letra em um elemento html adequado. (OPCIONAL: desativar o botão);
// - Caso não possua, mostrar uma parte do boneco na forca;

    function escolherLetra(caracter) {
        let letraClicada = caracter;
        let contagemErros = 0;

        letrasArrayEscolhida.split('').forEach((letra, indice) => {
            if (letraClicada === letra) {

                letreirosCriados[indice].value = letra;
                letrasUsadas.textContent += `${letraClicada}`;
            }            
        })


    }

    escolherLetra();




    

    
    // PRA AMANHÃ: Preciso entender melhor a função ForEach.  

    /*
    function escolherLetra(caracter) {
        let letraClicada = caracter; 
            for (i = 0; i < comprimento; i++) {
                let checarLetras = letrasArrayEscolhida[i];
                
                if (letraClicada == checarLetras) {
                    indiceDaPalavraEscolhida = letrasArrayEscolhida.indexOf(letrasArrayEscolhida[i]);
                    letreirosCriados[indiceDaPalavraEscolhida].value = letraClicada; // Deu certo, mas as letras repetidas só escrevem uma vez...                      
                }
                    
            }
    }
    */ 