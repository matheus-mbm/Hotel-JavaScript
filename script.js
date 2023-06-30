var nomeHotel = prompt('Insira o nome do hotel:');
alert(`O nome do Hotel é ${nomeHotel}!`);
var usuario = prompt('Insira o seu nome:');

senha();

function senha() {
    var senha = prompt(`${usuario}, qual sua senha de funcionário?`);

    if (senha != 2678){
        alert('Senha incorreta, operação não autorizada!')
        senha();
    } else {
        alert(`Bem vindo ao Hotel ${nomeHotel}, ${usuario}. É um imenso prazer ter você por aqui!`);
        inicio();
    }
}

function inicio() {

    var opcaoInicial = parseInt(prompt('Selecione uma opção: \n1.) Reserva de Quartos \n2.) Cadastro de Hóspedes \n3.) Reserva de Eventos \n4.) Abastecimento de Carros \n5.) Manutenção \n6.) Sair'));

    switch (opcaoInicial){
        case 1 :
            reservaQuartos();
            break;
        case 2 :
            cadastrarHospedes();
            break;
        case 3 :
            eventos();
            break;
        case 4 :
            abastecerCarro();
            break;
        case 5 :
            manutencao();
            break;
        case 6 :
            sair();
            break;
        default :
            erro();
    }
}		

function reservaQuartos() {
    var valorDiaria = parseFloat(prompt('Qual é o valor padrão da diária?'));

    if (valorDiaria <= 0){
        alert('Reserva não efetuada, valor incorreto.');

        reservaQuartos();
    } else {
        var diaria = parseInt(prompt('Quantas diárias serão necessárias?'));
    }

    if (diaria <= 0 || diaria > 30) {
        alert('Reserva não efetuada, não aceitamos menos de 1 dia ou mais de 30 dias.');

        reservaQuartos();
    } else {
        var calcDiaria = (valorDiaria * diaria);

    }

    alert(`O valor de ${diaria} dias de hospedagem é de R$${calcDiaria}.`);

    var nomeHospede = prompt('Qual é o nome do hóspede?');
    var resposta = prompt(`${usuario}, você confirma a hospedagem para ${nomeHospede} por ${diaria} dias? S/N`);

    if (resposta == 'S' || resposta == 's') {
        alert(`${usuario}, reserva efetuada para ${nomeHospede}. O valor total é de R$${calcDiaria}.`);
        
        inicio();
    } else if (resposta == 'N' || resposta == 'n') {
        alert(`${usuario}, reserva não efetuada.`);

        inicio();
    }
}

function cadastrarHospedes() {
    var lista = [];

    function escolha(){
        var opcao = parseInt(prompt('Selecione uma opção: \n1.) Cadastrar \n2.) Pesquisar \n3.) Sair'));

        switch(opcao){
            case 1 :
                cadastro();
                break;
            case 2 :
                pesquisarHospedes();
                break;
            case 3 :
                inicio();
                break;
            default :
                falha();
        }
    }
    
    function cadastro(){
        var valorDiaria = parseFloat(prompt('Qual é o valor padrão da diária?'));

        if (valorDiaria <= 0){
            alert('Reserva não efetuada, valor incorreto.');
    
            escolha();
        } else {
            var diaria = parseInt(prompt('Quantas diárias serão necessárias?'));
        }

        if (diaria <= 0 || diaria > 30) {
            alert('Reserva não efetuada, não aceitamos menos de 1 dia ou mais de 30 dias.');
    
            escolha();
        } else {
            var nomeHospede = prompt('Qual é nome do hóspede?');
        
            if (lista.length <= 15){
                lista.push(nomeHospede);

                var idadeHospede = parseInt(prompt('Qual é a idade do hóspede?'));

                    if(idadeHospede <= 6){
                        var resultado = ((valorDiaria * diaria) * 0);
                        alert(`${nomeHospede} cadastrada(o) com sucesso e possui gratuidade.\nO valor total da hospedagem é: R$${resultado} por ${diaria} dias.`);
                    } else if(idadeHospede >= 60) {
                        var resultado = ((valorDiaria * diaria)/2);
                        alert(`${nomeHospede} cadastrada(o) com sucesso e paga meia.\nO valor total da hospedagem é: R$${resultado} por ${diaria} dias.`);
                    } else {
                        var resultado = (valorDiaria * diaria);
                        alert(`${nomeHospede} cadastrada(o) com sucesso.\nO valor total da hospedagem é: R$${resultado} por ${diaria} dias.`)
                    }

                escolha();
            } else if (lista.length > 15) {
                alert('Máximo de cadastros atingido.');

                escolha();
            }
        }
    }

    function pesquisarHospedes() {
        var pesquisa = prompt('Qual é nome do hóspede?');
        var indice = lista.indexOf(pesquisa);

        if (indice !== -1) {
            alert(`Hóspede ${pesquisa} foi encontrada(o)!`);
            
            escolha();
          } else {
            alert(`Hóspede ${pesquisa} não foi encontrada(o)!`);

            escolha();
          }
    }

    function falha() {
        alert('Por favor, informe um número entre 1 e 3');
        escolha();
    }

    escolha();
}

function eventos() {

    function escolha(){
        var opcao = parseInt(prompt('Selecione uma opção de reserva: \n1.)Evento \n2.)Buffet \n3.)Auditório \n4.)Restaurante \n5.) Sair'));

        switch(opcao){
            case 1 :
                eventosCadastro();
                break;
            case 2 :
                reservaBuffet();
                break;
            case 3 :
                reservaAuditorio();
                break;
            case 4 :
                reservaRestaurante();
                break;
            case 5 :
                inicio();
                break;
            default :
                falha();
        }
    }

    function eventosCadastro(){
        var garcons = 10.50;

        var duracaoEvento = parseInt(prompt('Qual a duração do evento em horas?'));
        var quantGarcons = parseInt(prompt('Quantos garçons serão necessários?'));
        var calcGarcons = ((garcons * quantGarcons) * duracaoEvento);

        alert(`Custo total: R$${calcGarcons}`);
        var confirma = prompt('Gostaria de efetuar a reserva? S/N');

        if (confirma == 'S' || confirma == 's'){
            alert(`${usuario}, reserva efetuada com sucesso.`);

            escolha();
        } else if (confirma == 'N' || confirma == 'n'){
            alert(`Reserva não efetuada.`);

            escolha();
        }
    }

    function reservaBuffet(){
        var cafeConvidado = 0.2;
        var aguaConvidado = 0.5;
        var salgadoConvidado = 7;

        var quantConvidados = parseInt(prompt('Qual o número de convidados para o evento?'));

        if (quantConvidados > 350){
            alert('Quantidade de convidados superior à capacidade máxima, suporta apenas 350 convidados.');

            escolha();
        } else {
            var calcCafe = parseInt(cafeConvidado * quantConvidados);
            var calcAgua = parseInt(aguaConvidado * quantConvidados);
            var calcSalgado = Math.ceil((salgadoConvidado * quantConvidados)/100);
            var total = ((calcCafe * 0.8) + (calcAgua * 0.4) + (calcSalgado * 34));

            alert(`O evento precisará de ${calcCafe} litros de café, ${calcAgua} litros de água, ${calcSalgado * 100} salgados. O custo total do evento será de R$${total}.`);

            var confirma = prompt('Gostaria de efetuar a reserva? S/N');

            if (confirma == 'S' || confirma == 's'){
                alert(`${usuario}, reserva efetuada com sucesso.`);

                escolha();
            } else if (confirma == 'N' || confirma == 'n'){
                alert(`Reserva não efetuada.`)

                escolha();
            }

        }


    }

    function reservaAuditorio(){
        var auditorioLaranja = 150;
        var auditorioColorado = 350;

        var quantConvidados = parseInt(prompt('Qual o número de convidados para o evento?'));

        if (quantConvidados > auditorioColorado){
            alert('Quantidade de convidados superior à capacidade máxima, suporta apenas 350 convidados.');

            escolha();
        } else {
            if (quantConvidados <= 150){
                alert('Use o auditório Laranja');

                var confirma = prompt('Gostaria de efetuar a reserva? S/N');

                if (confirma == 'S' || confirma == 's'){
                    alert(`${usuario}, reserva efetuada com sucesso.`);

                    escolha();
                } else if (confirma == 'N' || confirma == 'n'){
                    alert(`Reserva não efetuada.`)

                    escolha();
                }

            } else if (quantConvidados <= 220){
                var calcAudLaranja = (quantConvidados - auditorioLaranja);
                
                alert(`Use o auditório Laranja (inclua mais ${calcAudLaranja} cadeiras)`);

                var confirma = prompt('Gostaria de efetuar a reserva? S/N');

                if (confirma == 'S' || confirma == 's'){
                    alert(`${usuario}, reserva efetuada com sucesso.`);

                    escolha();
                } else if (confirma == 'N' || confirma == 'n'){
                    alert(`Reserva não efetuada.`)

                    escolha();
                }

            } else if (quantConvidados > 220) {
                alert(`Use o auditório Colorado`);

                var confirma = prompt('Gostaria de efetuar a reserva? S/N');

                if (confirma == 'S' || confirma == 's'){
                    alert(`${usuario}, reserva efetuada com sucesso.`);

                    escolha();
                } else if (confirma == 'N' || confirma == 'n'){
                    alert(`Reserva não efetuada.`)

                    escolha();
                }

            }
        }
    }

    function reservaRestaurante(){
        var diaSmnInicio = 7;
        var diaSmnFinal = 23;
        var fimSmnInicio = 7;
        var fimSmnFinal = 15;

        var reserva = prompt('Qual o dia do seu evento? \n1.) Segunda \n2.) Terça \n3.) Quarta \n4.) Quinta \n5.) Sexta \n6.) Sábado \n7.) Domingo \n8.) Sair');

       switch(reserva){
            case 1 :
                segunda();
                break;
            case 2 :
                terça();
                break;
            case 3 :
                quarta();
                break;
            case 4 :
                quinta();
                break;
            case 5 :
                sexta();
                break;
            case 6 :
                sabado();
                break;
            case 7 :
                domingo();
                break;
            case 8 :
                eventosCadastro();
            default :
                error();
       }

       function segunda(){
        var hora = parseInt(prompt('Qual a hora do seu evento?'));

                if (hora < diaSmnInicio || hora > diaSmnFinal){
                    alert('Restaurante indisponível, dia da semana funcionamos das 7h até 23h.');
                    
                    escolha();
                } else {
                    var empresa = prompt('Qual o nome da empresa?');
                    alert(`Restaurante reservado para ${empresa}. Segunda às ${hora}hs.`);

                    escolha();
                }
       }

       function terça(){
        var hora = parseInt(prompt('Qual a hora do seu evento?'));

                if (hora < diaSmnInicio || hora > diaSmnFinal){
                    alert('Restaurante indisponível, dia da semana funcionamos das 7h até 23h.');
                    
                    escolha();
                } else {
                    var empresa = prompt('Qual o nome da empresa?');
                    alert(`Restaurante reservado para ${empresa}. Terça às ${hora}hs.`);

                    escolha();
                }
       }

       function quarta(){
        var hora = parseInt(prompt('Qual a hora do seu evento?'));

                if (hora < diaSmnInicio || hora > diaSmnFinal){
                    alert('Restaurante indisponível, dia da semana funcionamos das 7h até 23h.');
                    
                    escolha();
                } else {
                    var empresa = prompt('Qual o nome da empresa?');
                    alert(`Restaurante reservado para ${empresa}. Quarta às ${hora}hs.`);

                    escolha();
                }
       }

       function quinta(){
        var hora = parseInt(prompt('Qual a hora do seu evento?'));

                if (hora < diaSmnInicio || hora > diaSmnFinal){
                    alert('Restaurante indisponível, dia da semana funcionamos das 7h até 23h.');
                    
                    escolha();
                } else {
                    var empresa = prompt('Qual o nome da empresa?');
                    alert(`Restaurante reservado para ${empresa}. Segunda às ${hora}hs.`);

                    escolha();
                }
       }

       function sexta(){
        var hora = parseInt(prompt('Qual a hora do seu evento?'));

                if (hora < diaSmnInicio || hora > diaSmnFinal){
                    alert('Restaurante indisponível, dia da semana funcionamos das 7h até 23h.');
                    
                    escolha();
                } else {
                    var empresa = prompt('Qual o nome da empresa?');
                    alert(`Restaurante reservado para ${empresa}. Sexta às ${hora}hs.`);

                    escolha();
                }
       }

       function sabado(){
        var hora = parseInt(prompt('Qual a hora do seu evento?'));

                if (hora < fimSmnInicio || hora > fimSmnFinal){
                    alert('Restaurante indisponível, final da semana funcionamos das 7h até 15h.');
                    
                    escolha();
                } else {
                    var empresa = prompt('Qual o nome da empresa?');
                    alert(`Restaurante reservado para ${empresa}. Sábado às ${hora}hs.`);

                    escolha();
                }
       }

       function domingo(){
        var hora = parseInt(prompt('Qual a hora do seu evento?'));

                if (hora < fimSmnInicio || hora > fimSmnFinal){
                    alert('Restaurante indisponível, final da semana funcionamos das 7h até 15h.');
                    
                    escolha();
                } else {
                    var empresa = prompt('Qual o nome da empresa?');
                    alert(`Restaurante reservado para ${empresa}. Domingo às ${hora}hs.`);

                    escolha();
                }
       }

       function error(){
        alert('Escolha um número de 1 a 8:');

        reservaRestaurante();
       }
    }

    function falha() {
        alert('Por favor, informe um número entre 1 e 3');
        
        escolha();
    }

    escolha();
}

function abastecerCarro() {
    var wayneAlcool = parseFloat(prompt('Qual o valor do álcool no posto Wayne Oil?'));
    var wayneGasolina = parseFloat(prompt('Qual o valor da gasolina no posto Wayne Oil?'));
    var starkAlcool = parseFloat(prompt('Qual o valor do álcool no posto Stark Petrol?'));
    var starkGasolina = parseFloat(prompt('Qual o valor da gasolina no posto Stark Petrol?'));
    var tanque = 42;

    if (wayneAlcool < wayneGasolina || wayneAlcool < starkAlcool || wayneAlcool < starkGasolina){
        var calcAlcool = parseFloat(wayneAlcool * tanque)

        alert(`${usuario}, é mais barato abastecer com álcool no posto Wayne Oil \nO valor total para encher o tanque é R$${calcAlcool}.`);
        var confirma = prompt('Você deseja abastecer? S/N');

        if (confirma == 'S' || confirma == 's'){
            alert('Abastecimento realizado com sucesso.');

            inicio();
        } else if (confirma == 'N' || confirma == 'n'){
            alert('Abastecimento cancelado.');

            inicio();
        }
    } else if (wayneGasolina < wayneAlcool || wayneGasolina < starkAlcool || wayneGasolina < starkGasolina){
        var calcGasolina = parseFloat(wayneGasolina * tanque)

        alert(`${usuario}, é mais barato abastecer com gasolina no posto Wayne Oil \nO valor total para encher o tanque é R$${calcGasolina}.`);
        var confirma = prompt('Você deseja abastecer? S/N');

        if (confirma == 'S' || confirma == 's'){
            alert('Abastecimento realizado com sucesso.');

            inicio();
        } else if (confirma == 'N' || confirma == 'n'){
            alert('Abastecimento cancelado.');

            inicio();
        }
    } else if (starkAlcool < wayneAlcool || starkAlcool < wayneGasolina || starkAlcool < starkGasolina){
        var calcAlcool = parseFloat(starkAlcool * tanque)

        alert(`${usuario}, é mais barato abastecer com álcool no posto Stark Petrol \nO valor total para encher o tanque é R$${calcAlcool}.`);
        var confirma = prompt('Você deseja abastecer? S/N');

        if (confirma == 'S' || confirma == 's'){
            alert('Abastecimento realizado com sucesso.');

            inicio();
        } else if (confirma == 'N' || confirma == 'n'){
            alert('Abastecimento cancelado.');

            inicio();
        }
    } else if (starkGasolina < wayneAlcool || starkGasolina < wayneGasolina || starkGasolina < starkAlcool){
        var calcGasolina = parseFloat(wayneGasolina * tanque)

        alert(`${usuario}, é mais barato abastecer com gasolina no posto Stark Petrol \nO valor total para encher o tanque é R$${calcGasolina}.`);
        var confirma = prompt('Você deseja abastecer? S/N');

        if (confirma == 'S' || confirma == 's'){
            alert('Abastecimento realizado com sucesso.');

            inicio();
        } else if (confirma == 'N' || confirma == 'n'){
            alert('Abastecimento cancelado.');

            inicio();
        }
    }
}

function manutencao() {
    var nomeEmpresa = [];
    var valor = [];
    var start = '';
    var final = 'N'

    while (start != final){
        var empresa = prompt('Qual é o nome da empresa?');
        nomeEmpresa.push(empresa);

        var preco = parseFloat(prompt('Qual o valor por aparelho?'));
        var quantAparelhos = parseInt(prompt('Qual a quantidade de aparelhos?'));
        var desconto = parseInt(prompt('Qual a porcentagem de desconto?'));
        var minAparelhos = parseInt(prompt('Qual o número mínimo de aparelhos para conseguir o desconto?'));

        if (quantAparelhos >= minAparelhos){
            var calcManutencao = (quantAparelhos * preco);
            var calcDesconto = (( calcManutencao * desconto) / 100);
            var resultado = (calcManutencao - calcDesconto);

            alert(`O serviço de ${empresa} custará R$${resultado}.`);
            valor.push(resultado);
        } else if (quantAparelhos < minAparelhos){
            var calcManutencao = (quantAparelhos * preco);

            alert(`O serviço de ${empresa} custará R$${calcManutencao}.`);
            valor.push(calcManutencao);
        }

        var continuar = prompt(`Deseja informar novos dados, ${usuario}? (S/N)`);

        if (continuar == 'N' || continuar == 'n'){
            var start = 'N';
        } else if (continuar == 'S' || continuar == 's'){
            var start = '';
        }
    }

        var menorOrcamento = Math.min(...valor);
        var posicao = valor.indexOf(menorOrcamento);
        var nomeDaEmpresa = nomeEmpresa[posicao];
        alert(`O orçamento de menor valor é o de ${nomeDaEmpresa} por R$${menorOrcamento}.`);
        inicio();

}

function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(`Muito obrigado e até logo, ${usuario}.`)
        window.close();
    } else {
        inicio();
    }
}