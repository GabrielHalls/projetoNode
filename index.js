const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function retornar() {
    rl.question(` Selecione o numero da formula que deseja calcular:

            Digite [1] para retangulo:
            Digite [2] para triangulo:
            Digite [3] para quadrado:
            Digite [4] para trapézio:
            Digite [5] para poligono regular:
            Digite [6] para cilindro:
            Digite [7] para cone:
            Digite [8] para esfera:
            Digite [9] para prisma:
            Digite [10] para poligono irregular:

            Numero escolhido:`,(day) => {

            
                switch (day) {
                    
                    case '1':
                      console.log('você selecionou o retangulo')

                      rl.question('Digite a altura do retangulo: ',(altura)=>{
                        rl.question('Digite a largura do retangulo: ',(largura)=>{
                            const numero1 = parseFloat(altura);
                            const numero2 = parseFloat(largura);


                            if (!isNaN(numero1) && !isNaN(numero2)) {
                                const resultado = numero1 * numero2;
                                console.log(`A soma de ${numero1} e ${numero2} é: ${resultado}`);
                                rl.question(`1. voltar
                                             2. finalizar
                                             
                                             valor selecionado: `, (voltar)=>{
                                                if (voltar==1) {
                                                    retornar()
                                                }
                                                if (voltar==2) {
                                                    rl.close()
                                                } else {
                                                    console.log('valor invalido')
                                                }
                                             })
                              } else {
                                console.log('Pelo menos um dos valores não é um número válido.');
                              }

                              
                              
                        }
                    )
                      })
                        
                      break;

                    case '2':
                        console.log('você selecionou o triangulo')
                      
                        rl.question('Digite o valor da base do triangulo: ',(base)=>{
                            rl.question('Digite o valor da altura do triangulo: ', (altura)=>{
                                const numero1 = parseFloat(base)
                                const numero2 = parseFloat(altura)
                                resultado = (numero1*numero2)/2
                                console.log(resultado)
                            })
                        })
                        
                      break;

                    case '3':
                        console.log('você selecionou o quadrado')

                        rl.question('Digite o valor de uma das extremidades do quadrado: ',(extremidade)=>{                           
                                const numero1 = parseFloat(extremidade)
                                resultado = numero1*4
                                console.log(resultado)
                        })
                      break;

                    case '4':
                        console.log('você selecionou o trapézio')
                        rl.question('Digite o valor da base maior: ',(baseMaior)=>{
                            rl.question('Digite o valor da base menor: ',(baseMenor)=>{
                                rl.question('Digite o valor da altura: ',(altura)=>{

                                    const numero1 = parseFloat(baseMaior)
                                    const numero2 = parseFloat(baseMenor)
                                    const numero3 = parseFloat(altura)

                                    resultado = ((numero1+numero2)*numero3)/2
                                    
                                    console.log(resultado);
                                })
                            })
                        })
                      break;

                    case '5':
                        console.log('você selecionou o poligono regular')
                      break;

                    case '6':
                        console.log('você selecionou o cilindro')
                    break;

                    case '7':
                        console.log('você selecionou o cone')
                    break;

                    case '8':
                        console.log('você selecionou o esfera')
                    break;

                    case '9':
                        console.log('você selecionou o prisma')
                    break;

                    case '10':
                        console.log('você selecionou o poligono irregular')
                    break;
                      default:
                          console.log('Valor invalido')
                          break;
                  }
                        
                

});

}
retornar()