const perguntas = [{
        questao: 'Durante que guerra internacional ocorreu a revolução russa?',
        alternativas: [{
            alternativa: 'Primeira Guerra Mundial',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Segunda Guerra Mundial',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Guerras Napoleônicas',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Guerra Russo-Japonesa',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Guerra dos 100 Anos',
            rMark: false,
            wMark: false,
        }],
        correto: 0,
        locke: [0],
        voltaire: [0, 4],
        montesquieu: [0, 2, 4],
        maquiavel: [1, 2, 3],
        rousseau: [3, 4]
    },
    {
        questao: 'Qual calendário Rússia utilizou até fevereiro de 1918?',
        alternativas: [{
            alternativa: 'Calendário Juliano',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Calendário Gregoriano',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Calendário Judaico',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Calendário Islâmico',
            rMark: false,
            wMark: false,
        }],
        correto: 0,
        locke: [0],
        voltaire: [0, 3],
        montesquieu: [0, 2, 3],
        maquiavel: [1, 2, 3],
        rousseau: [2, 3]
    },
    {
        questao: 'Qual Czar foi assassinado por terroristas em 1881?',
        alternativas: [{
            alternativa: 'Nicholas I',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Alexander I',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Alexander II',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Alexander III',
            rMark: false,
            wMark: false,
        }],
        correto: 2,
        locke: [2],
        voltaire: [2, 1],
        montesquieu: [0, 2, 3],
        maquiavel: [1, 0, 3],
        rousseau: [0, 3]
    }, {
        questao: 'Onde estava o Czar durante a revolução de fevereiro?',
        alternativas: [{
            alternativa: 'No Palácio de Inverno',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Visitando soldados na frente de batalha',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Em uma conferência de paz na Europa',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'No Kremlin',
            rMark: false,
            wMark: false,
        }],
        correto: 1,
        locke: [1],
        voltaire: [0, 1],
        montesquieu: [1, 0, 3],
        maquiavel: [3, 0, 2],
        rousseau: [2, 3]
    }, {
        questao: 'Como resultado da revolução, o Czar foi',
        alternativas: [{
            alternativa: 'Exilado',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Removido do Cargo',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Executado',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Voluntariamente Abdicado',
            rMark: false,
            wMark: false,
        }],
        correto: 3,
        locke: [3],
        voltaire: [3, 0],
        montesquieu: [3, 1, 2],
        maquiavel: [1, 0, 2],
        rousseau: [1, 2]
    }, {
        questao: 'Após a revolução, quantas organização afirmaram ser o novo governo Russo?',
        alternativas: [{
            alternativa: 'Uma',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Duas',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Três',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Quatro',
            rMark: false,
            wMark: false,
        }],
        correto: 1,
        locke: [1],
        voltaire: [1, 2],
        montesquieu: [3, 1, 2],
        maquiavel: [3, 0, 2],
        rousseau: [0, 2]
    }, {
        questao: 'O governo provisório era formado de?',
        alternativas: [{
            alternativa: 'Ex-membros do Sínodo',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Revolucionários',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Ex-membros do Duma',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Ex-ministros sob o Czar',
            rMark: false,
            wMark: false,
        }],
        correto: 2,
        locke: [2],
        voltaire: [0, 2],
        montesquieu: [3, 1, 2],
        maquiavel: [3, 0, 4],
        rousseau: [3, 1]
    }, {
        questao: 'Qual governo ajudou Lenin a voltar para Russia?',
        alternativas: [{
            alternativa: 'Frances',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Alemão',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Turco',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Britânico',
            rMark: false,
            wMark: false,
        }],
        correto: 1,
        locke: [1],
        voltaire: [1, 2],
        montesquieu: [3, 1, 2],
        maquiavel: [3, 0, 2],
        rousseau: [3, 2]
    }, {
        questao: 'Slogan usado por Lenin após chegar na Russia em abril de 1917?',
        alternativas: [{
            alternativa: '“There is such a party!” (Esse partido existe!)',
            rMark: false,
            wMark: false,
        }, {
            alternativa: '“Proletarians of the world unite!” (Proletarios do mundo, Unam-se!)',
            rMark: false,
            wMark: false,
        }, {
            alternativa: '“All the power to the Soviets!” (Todo o poder para os Soviéticos!)',
            rMark: false,
            wMark: false,
        }, {
            alternativa: '“Onward to the shining future!” (Avante para o futuro brilhante!)',
            rMark: false,
            wMark: false,
        }],
        correto: 2,
        locke: [2],
        voltaire: [1, 2],
        montesquieu: [3, 1, 2],
        maquiavel: [3, 0, 1],
        rousseau: [3, 1]
    }, {
        questao: 'O Partido Bolchevique atraiu seu apoio principalmente de:',
        alternativas: [{
            alternativa: 'Camponeses',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Aristocratas',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'A Intelligentsia',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'A classe trabalhadora',
            rMark: false,
            wMark: false,
        }],
        correto: 3,
        locke: [3],
        voltaire: [3, 1],
        montesquieu: [3, 1, 2],
        maquiavel: [2, 0, 1],
        rousseau: [0, 1]
    }, {
        questao: 'Qual dos seguintes eventos enfraqueceu seriamente os bolcheviques?',
        alternativas: [{
            alternativa: 'O primeiro congresso dos sovietes',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'O golpe ou Putsch de julho',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Ofensiva de Kerensky em junho',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Assassinato de Rasputin',
            rMark: false,
            wMark: false,
        }],
        correto: 1,
        locke: [1],
        voltaire: [3, 2],
        montesquieu: [3, 1, 2],
        maquiavel: [2, 0, 3],
        rousseau: [0, 2]
    }, {
        questao: 'Quem foi Lavr Kornilov',
        alternativas: [{
            alternativa: 'Um Bolchevique',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Um cossaco rebelde',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Um general do exército monarquista',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Líder do Soviete de Petrogrado',
            rMark: false,
            wMark: false,
        }],
        correto: 2,
        locke: [2],
        voltaire: [3, 2],
        montesquieu: [3, 1, 2],
        maquiavel: [1, 0, 3],
        rousseau: [0, 1]
    }, {
        questao: 'O que aconteceu como resultado do Putsch de julho?',
        alternativas: [{
            alternativa: 'O governo provisório foi deposto',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'O exército se amotinou',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'O Soviete de Petrogrado se separou',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Vários bolcheviques proeminentes foram presos',
            rMark: false,
            wMark: false,
        }],
        correto: 3,
        locke: [3],
        voltaire: [3, 2],
        montesquieu: [3, 1, 2],
        maquiavel: [1, 0, 2],
        rousseau: [0, 1]
    }, {
        questao: 'Quais destes bolcheviques foram contra iniciar a revolução de forma repentina?',
        alternativas: [{
            alternativa: 'Kamenev e Zinoviev',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Trotsky e Dzerzhinsky',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Stalin e Lunacharsky',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Kerensky e Kornilov',
            rMark: false,
            wMark: false,
        }],
        correto: 0,
        locke: [0],
        voltaire: [0, 1],
        montesquieu: [0, 1, 2],
        maquiavel: [1, 3, 2],
        rousseau: [3, 1]
    }, {
        questao: 'Quem eram os "junkers"?',
        alternativas: [{
            alternativa: 'Oficiais do exército alemão',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Trabalhadores no ferro-velho de Petrogrado',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Cadetes do exército russo designados para defender edifícios do governo',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Unidades militares bolcheviques',
            rMark: false,
            wMark: false,
        }],
        correto: 2,
        locke: [2],
        voltaire: [2, 1],
        montesquieu: [0, 1, 3],
        maquiavel: [1, 3, 0],
        rousseau: [3, 1]
    }, {
        questao: 'O que era a Aurora?',
        alternativas: [{
            alternativa: 'Um navio de guerra russo levado a Petrogrado para defender o governo provisório',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'O primeiro porta-aviões russo, colocado em serviço no final da Primeira Guerra Mundial',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Um iate alemão onde o tratado de paz foi assinado entre a Alemanha e a Rússia',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Um cruzador russo levado a Petrogrado por marinheiros leais aos bolcheviques',
            rMark: false,
            wMark: false,
        }],
        correto: 3,
        locke: [3],
        voltaire: [3, 1],
        montesquieu: [0, 1, 3],
        maquiavel: [1, 2, 0],
        rousseau: [2, 1]
    }, {
        questao: 'Depois da Revolução de Outubro, qual foi o primeiro ato oficial de Lenin?',
        alternativas: [{
            alternativa: 'O decreto sobre divisão de terras',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'O decreto sobre propriedade',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Decreto sobre o direito de trabalho',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'O decreto de paz',
            rMark: false,
            wMark: false,
        }],
        correto: 3,
        locke: [3],
        voltaire: [3, 1],
        montesquieu: [0, 1, 3],
        maquiavel: [1, 2, 0],
        rousseau: [2, 1]
    }, {
        questao: 'O que aconteceu com Kerensky depois da revolução?',
        alternativas: [{
            alternativa: 'Ele foi preso',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Ele foi executado',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Ele fugiu do país',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Ele se uniu aos bolcheviques',
            rMark: false,
            wMark: false,
        }],
        correto: 2,
        locke: [2],
        voltaire: [1, 2],
        montesquieu: [0, 2, 3],
        maquiavel: [1, 3, 0],
        rousseau: [0, 1]
    }, {
        questao: 'Qual foi o nome oficial do novo governo de Lenin?',
        alternativas: [{
            alternativa: 'O Politburo',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'O Comitê Executivo',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'O Soviete Supremo',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'O Soviete dos Comissários do Povo',
            rMark: false,
            wMark: false,
        }],
        correto: 3,
        locke: [3],
        voltaire: [3, 2],
        montesquieu: [0, 2, 3],
        maquiavel: [1, 2, 0],
        rousseau: [0, 1]
    }, {
        questao: 'Qual ex-crítico de Lenin presidiu o Comitê Executivo?',
        alternativas: [{
            alternativa: 'Zinoviev',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Trotsky',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Kamenev',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Dzerzhinsky',
            rMark: false,
            wMark: false,
        }],
        correto: 2,
        locke: [2],
        voltaire: [3, 2],
        montesquieu: [0, 2, 3],
        maquiavel: [1, 3, 0],
        rousseau: [0, 1]
    }, {
        questao: 'Quem se tornou o ministro das Relações Exteriores da Rússia sob o poder de Lenin?',
        alternativas: [{
            alternativa: 'Zinoviev',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Trotsky',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Kamenev',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Dzerzhinsky',
            rMark: false,
            wMark: false,
        }],
        correto: 1,
        locke: [1],
        voltaire: [1, 2],
        montesquieu: [0, 1, 3],
        maquiavel: [2, 3, 0],
        rousseau: [0, 2]
    }, {
        questao: 'O Red Terror (Terror Vermelho) foi uma resposta a qual evento?',
        alternativas: [{
            alternativa: 'O começo da guerra civil',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Uma tentativa de assassinato de Lenin',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Um bombardeio terrorista em Petrogrado',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'A entrada de tropas americanas e britânicas na Rússia',
            rMark: false,
            wMark: false,
        }],
        correto: 1,
        locke: [1],
        voltaire: [1, 2],
        montesquieu: [0, 1, 3],
        maquiavel: [2, 3, 0],
        rousseau: [0, 2]
    }, {
        questao: 'A URSS finalmente entrou em colapso em',
        alternativas: [{
            alternativa: '1981',
            rMark: false,
            wMark: false,
        }, {
            alternativa: '1989',
            rMark: false,
            wMark: false,
        }, {
            alternativa: '1991',
            rMark: false,
            wMark: false,
        }, {
            alternativa: '1993',
            rMark: false,
            wMark: false,
        }],
        correto: 2,
        locke: [2],
        voltaire: [1, 2],
        montesquieu: [0, 2, 3],
        maquiavel: [1, 3, 0],
        rousseau: [0, 3]
    }, {
        questao: 'Entre quais séculos ocorreu a 1ª Guerra Mundial ?',
        alternativas: [{
            alternativa: 'Entre os séculos XVII e XVIII.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Entre os séculos XIX e início do século XX.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Durante o século XVI e início do século XVII.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Início do século XX até o século XXI.',
            rMark: false,
            wMark: false,
        }],
        correto: 1,
        locke: [1],
        voltaire: [1, 2],
        montesquieu: [0, 1, 3],
        maquiavel: [2, 3, 0],
        rousseau: [0, 3]
    }, {
        questao: 'Além da rivalidade imperialista, quais foram os outros fatores que ajudam a entender as motivações para o início da 1ª Guerra Mundial ?',
        alternativas: [{
            alternativa: 'Concorrência econômica e a produção de remédios.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Questões culturais e o desenvolvimento da África.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Aliança entre o Brasil e o Japão contra a aliança entre a Alemanha e os Estados Unidos.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Concorrência econômica, disputa colonial, nacionalismos, revanchismo francês, a crise do Marrocos, a crise balcânica',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Disputa por petróleo na região do Afeganistão.',
            rMark: false,
            wMark: false,
        }],
        correto: 3,
        locke: [3],
        voltaire: [4, 3],
        montesquieu: [0, 1, 3],
        maquiavel: [2, 4, 0],
        rousseau: [0, 4]
    }, {
        questao: 'Como forma de defesa, foram criadas alianças entre alguns países. Qual o nome da aliança feita entre a Inglaterra, França e Rússia? E qual o nome da aliança formada pela Alemanha, o Império Austro-Húngaro e a Itália? Respectivamente.',
        alternativas: [{
            alternativa: 'Tríplice dos Vencedores e Tríplice de Hitler.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Tríplice Entente e Tríplice Aliança.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Tríplice Aliança e Tríplice Entente',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Tríplice dos Unidos e Tríplice Cardial.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Tríplice Entente Cordiale e Tríplice do Nazifascismo.',
            rMark: false,
            wMark: false,
        }],
        correto: 1,
        locke: [1],
        voltaire: [1, 3],
        montesquieu: [0, 1, 3],
        maquiavel: [2, 4, 0],
        rousseau: [0, 4]
    }, {
        questao: 'Como forma de defesa, foram criadas alianças entre alguns países. Qual o nome da aliança feita entre a Inglaterra, França e Rússia? E qual o nome da aliança formada pela Alemanha, o Império Austro-Húngaro e a Itália? Respectivamente.',
        alternativas: [{
            alternativa: 'Tríplice dos Vencedores e Tríplice de Hitler.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Tríplice Entente e Tríplice Aliança.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Tríplice Aliança e Tríplice Entente',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Tríplice dos Unidos e Tríplice Cardial.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Tríplice Entente Cordiale e Tríplice do Nazifascismo.',
            rMark: false,
            wMark: false,
        }],
        correto: 1,
        locke: [1],
        voltaire: [1, 3],
        montesquieu: [0, 1, 3],
        maquiavel: [2, 4, 0],
        rousseau: [0, 4]
    }, {
        questao: 'Em que mês ocorreu a 1ª fase da revolução de 1917 ?',
        alternativas: [{
            alternativa: 'Janeiro',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Fevereiro',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Março',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Abril',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Maio',
            rMark: false,
            wMark: false,
        }],
        correto: 1,
        locke: [1],
        voltaire: [1, 3],
        montesquieu: [0, 1, 3],
        maquiavel: [2, 4, 0],
        rousseau: [0, 4]
    }, {
        questao: 'Os países envolvidos na I Guerra Mundial dividiram-se em duas coligações de nações que se enfrentaram durante os anos da guerra, formadas inicialmente por seis países. Qual das alternativas indica corretamente as coligações de nações e os países participantes?',
        alternativas: [{
            alternativa: 'Eixo, formado por Alemanha, Itália e Japão; e os Aliados, composto por França, Inglaterra e Estados Unidos.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Tríplice Aliança, composta pela Alemanha, Áustria-Hungria e Itália; e a Tríplice Entente, formada pela França, Inglaterra e Rússia.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Eixo, formado por Alemanha, Itália e Japão; e Tríplice Entente, formada pela França, Inglaterra e Rússia.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Tríplice Aliança, composta pela Alemanha, Áustria-Hungria e Itália; e os Aliados, composto por França, Inglaterra e Estados Unidos.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'URSAL vs EUAFRICA.',
            rMark: false,
            wMark: false,
        }],
        correto: 1,
        locke: [1],
        voltaire: [1, 0],
        montesquieu: [1, 2, 4],
        maquiavel: [2, 0, 3],
        rousseau: [3, 4]
    },
    {
        questao: 'Primeira Guerra Mundial (também conhecida como Grande Guerra ou Guerra das Guerras até o início da Segunda Guerra Mundial) foi uma guerra global centrada na Europa, que começou em:',
        alternativas: [{
            alternativa: '28 de julho de 1914 e durou até 11 de novembro de 1918.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: '15 de agosto de 1913 e durou até 11 de setembro de 1921.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: '24 de julho de 1914 e durou até 11 de novembro de 1918.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: '27 de julho de 1914 e durou até 12 de novembro de 1918.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: '26 de julho de 1914 e durou até 11 de novembro de 1918.',
            rMark: false,
            wMark: false,
        }],
        correto: 0,
        locke: [0],
        voltaire: [0, 1],
        montesquieu: [0, 2, 3],
        maquiavel: [1, 2, 3],
        rousseau: [3, 4]
    },
    {
        questao: 'O herdeiro do império austro-húngaro foi assassinado por um estudante sérvio-bósnio membro da jovem Bósnia, o que acabou por culminar na primeira guerra mundial. Qual era o nome do herdeiro do império austro-húngaro?',
        alternativas: [{
            alternativa: 'Frederico Ferdinando',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Frederico von Ferdinand',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Frederico Fernando',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Gavrilo Princip',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Francisco Fernando',
            rMark: false,
            wMark: false,
        }],
        correto: 4,
        locke: [4],
        voltaire: [4, 1],
        montesquieu: [4, 3, 2],
        maquiavel: [1, 2, 3],
        rousseau: [3, 0]
    },
    {
        questao: 'Qual o nome do estudante que assassinou o herdeiro do império austro-húngaro?',
        alternativas: [{
            alternativa: 'Gavrilo Princip',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'José Maria',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Frederico Fernando',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Nígel de Young',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Fernando Frederico',
            rMark: false,
            wMark: false,
        }],
        correto: 0,
        locke: [0],
        voltaire: [0, 1],
        montesquieu: [0, 2, 4],
        maquiavel: [1, 4, 3],
        rousseau: [3, 2]
    },
    {
        questao: 'Quais foram os países que compuseram a tríplice entente (no inicio da guerra)?',
        alternativas: [{
            alternativa: 'França, Império Britânico e Brasil.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Alemanha, Império Otomano e Áustria-Hungria.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'França, Império Britânico e Império Russo.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Alemanha, EUA e Império Russo.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'EUA, França e Império Britânico.',
            rMark: false,
            wMark: false,
        }],
        correto: 2,
        locke: [2],
        voltaire: [2, 4],
        montesquieu: [2, 1, 3],
        maquiavel: [1, 4, 3],
        rousseau: [3, 0]
    },
    {
        questao: 'O Brasil quando entrou na guerra lutou em qual lado da guerra ? Antes de responder a pergunta considere o texto. o vapor brasileiro "Paraná", que navegava de acordo com as exigências feitas a países neutros, foi torpedeado, supostamente por um submarino alemão. No dia 11 de abril o Brasil rompeu relações diplomáticas com os países do bloco liderado pela Alemanha. Em 20 de maio, o navio "Tijuca" foi torpedeado perto da costa francesa. Nos meses seguintes, o governo Brasileiro confiscou 42 navios alemães, austro-húngaros e turco-otomanos que estavam em portos brasileiros.',
        alternativas: [{
            alternativa: 'Lutou na tríplice entente aliando-se ao Império Russo e a Alemanha.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Lutou na tríplice aliança aliando-se aos EUA, França, Reino Unido e Império Russo.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'O texto e falso o Brasil não se envolveu na primeira guerra mundial.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Nenhuma das alternativas da questão esta correta.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Lutou na tríplice entente aliando-se aos EUA, França, Reino Unido e Império Russo.',
            rMark: false,
            wMark: false,
        }],
        correto: 4,
        locke: [4],
        voltaire: [4, 0],
        montesquieu: [4, 2, 3],
        maquiavel: [1, 2, 3],
        rousseau: [3, 1]
    },
    {
        questao: 'Nenhuma outra guerra mudou o mapa da Europa de forma tão dramática. Quatro impérios desapareceram após o fim do conflito. Quais foram esses impérios?',
        alternativas: [{
            alternativa: 'O Alemão, o Austro-Húngaro e o Francês e o Português.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'O Otomano e o Russo o Britânico e o Italiano.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'O Otomano, o Britânico, o Francês e o russo.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'O Francês, o Austro-Húngaro, o Otomano e o Russo.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'O Alemão, o Austro-Húngaro, o Otomano e o Russo.',
            rMark: false,
            wMark: false,
        }],
        correto: 4,
        locke: [4],
        voltaire: [4, 2],
        montesquieu: [4, 2, 1],
        maquiavel: [1, 2, 0],
        rousseau: [3, 0]
    },
    {
        questao: 'A primeira guerra mundial foi centrada em qual continente?',
        alternativas: [{
            alternativa: 'Europa',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Ásia',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Ámerica',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Oceania',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'África',
            rMark: false,
            wMark: false,
        }],
        correto: 0,
        locke: [0],
        voltaire: [0, 4],
        montesquieu: [0, 2, 4],
        maquiavel: [1, 2, 3],
        rousseau: [3, 4]
    },
    {
        questao: 'Quem era o presidente do Brasil durante a primeira guerra mundial?',
        alternativas: [{
            alternativa: 'Venceslau Brás',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Delfim Moreira',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Floriano Peixoto',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Getúlio Vargas',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Juscelino Kubitschek',
            rMark: false,
            wMark: false,
        }],
        correto: 0,
        locke: [0],
        voltaire: [0, 4],
        montesquieu: [0, 2, 4],
        maquiavel: [1, 2, 3],
        rousseau: [3, 4]
    },
    {
        questao: 'O que levou o Brasil a entrar na primeira guerra mundial?',
        alternativas: [{
            alternativa: 'Pressão diplomática por parte da Alemanha.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Pressão diplomática por parte da França.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Pressão diplomática por parte dos EUA.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Torpedeamento de navios brasileiros por parte da Alemanha.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Nenhuma das alternativas.',
            rMark: false,
            wMark: false,
        }],
        correto: 3,
        locke: [3],
        voltaire: [3, 4],
        montesquieu: [3, 2, 4],
        maquiavel: [1, 2, 0],
        rousseau: [1, 0]
    },
    {
        questao: 'Quem foi o presidente dos EUA durante a primeira guerra mundial?',
        alternativas: [{
            alternativa: 'Thomas Jefferson',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Thomas Woodrow Wilson',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Theodore Roosevelt',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Abraham Lincoln',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'N.D.A.',
            rMark: false,
            wMark: false,
        }],
        correto: 1,
        locke: [1],
        voltaire: [1, 4],
        montesquieu: [1, 0, 4],
        maquiavel: [0, 2, 3],
        rousseau: [3, 4]
    },
    {
        questao: 'Sobre a Primeira Guerra Mundial, é correto afirmar:',
        alternativas: [{
            alternativa: 'A Liga das Nações foi criada apenas depois da Segunda Guerra.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'O movimento Jovem Bósnia foi um dos grandes suportes do império Austro-Húngaro contra os Sérvios. ',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'A instável situação na Península Balcânica, aliada às políticas expansionistas dos países europeus, levou a efeito à Guerra.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'No Tratado de Versalhes a Alemanha foi muito prestigiada.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'As políticas nazista e fascista não se relacionam com o final da Primeira Guerra.',
            rMark: false,
            wMark: false,
        }],
        correto: 2,
        locke: [2],
        voltaire: [2, 4],
        montesquieu: [2, 3, 4],
        maquiavel: [1, 0, 3],
        rousseau: [3, 4]
    },
    {
        questao: 'A Sociedade das Nações  também conhecida como Liga das Nações, foi criada em 1919 com o objetivo de:',
        alternativas: [{
            alternativa: 'promover a paz armada, após o Tratado de Versalhes, através da liderança do governo dos Estados Unidos, que presidiu essa organização.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'unir as nações democráticas e economicamente mais poderosas, para impedir a volta do nazi-fascismo, cuja expansão causara a Primeira Guerra Mundial.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'executar as determinações previstas pelo documento conhecido como "14 pontos de Wilson" e que favoreciam os países da Tríplice Aliança.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'promover o neocolonialismo na África, Ásia e Oceania, condição fundamental para a expansão mundial do capitalismo monopolista.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'intermediar conflitos internacionais a fim de preservar a paz mundial, fiscalizando o cumprimento dos tratados pós-guerra.',
            rMark: false,
            wMark: false,
        }],
        correto: 4,
        locke: [4],
        voltaire: [4, 1],
        montesquieu: [4, 2, 0],
        maquiavel: [1, 2, 3],
        rousseau: [3, 2]
    },
    {
        questao: 'Segundo as teorias desenvolvimentistas, a guerra era concebida como:',
        alternativas: [{
            alternativa: ' uma necessidade de ampliar o mercado interno substituindo as importações.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'uma política econômica tendendo a desvalorizar a produção agrícola.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'uma forma de criar condições para a importação de tecnologia estrangeira.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'um recurso complementar e necessário à importação de produtos primários.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'uma política econômica que necessitava do apoio de todas as classes sociais para ser implementada.',
            rMark: false,
            wMark: false,
        }],
        correto: 0,
        locke: [0],
        voltaire: [0, 4],
        montesquieu: [0, 2, 4],
        maquiavel: [1, 2, 3],
        rousseau: [3, 4]
    },
    {
        questao: 'Sarajevo é atualmente palco de guerra. Nos tempos passados também foi o estopim de um conflito conhecido por:',
        alternativas: [{
            alternativa: 'Revolução Russa.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'I Guerra Mundial.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Revolução Francesa.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Guerra entre os Aliados e o Eixo.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'Guerra civil do Império Austro-Húngaro.',
            rMark: false,
            wMark: false,
        }],
        correto: 1,
        locke: [1],
        voltaire: [1, 4],
        montesquieu: [1, 2, 4],
        maquiavel: [0, 2, 3],
        rousseau: [3, 2]
    },
    {
        questao: 'Os Estados Unidos emergiram como grande potência econômica mundial após a Primeira Guerra Mundial porque:',
        alternativas: [{
            alternativa: ' apoiou a Alemanha, com o objetivo de enfraquecer a Inglaterra.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'liderou a criação da ONU (Organização das Nações Unidas).',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'fortaleceu sua economia ao fornecer equipamentos e suprimentos à Entente, enquanto as potências européias tiveram suas economias arrasadas após o conflito.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'apresentou as propostas do Tratado de Versalhes, para enfraquecer a Alemanha, a grande potência industrial do início do século.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'se manteve afastado do conflito direto com as potências européias, concentrando seus esforços no desenvolvimento interno.',
            rMark: false,
            wMark: false,
        }],
        correto: 2,
        locke: [2],
        voltaire: [2, 4],
        montesquieu: [2, 1, 4],
        maquiavel: [1, 0, 3],
        rousseau: [3, 4]
    },
    {
        questao: 'Dentre os fatores que conduziram à Primeira Guerra Mundial (1914-1918), destacamos o(a):',
        alternativas: [{
            alternativa: 'nacionalismo eslavo aliado à desagregação do Império Turco.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'acordo militar anglo-germânico visando à partilha da África.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'desequilíbrio internacional provocado pela aliança da Rússia com o Império Austro-Húngaro.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'descontentamento da França frente à ocupação no Marrocos.',
            rMark: false,
            wMark: false,
        }, {
            alternativa: 'oposição do Imperador Francisco Ferdinando à admissão da Sérvia no Império Austro-Húngaro.',
            rMark: false,
            wMark: false,
        }],
        correto: 0,
        locke: [0],
        voltaire: [0, 4],
        montesquieu: [0, 2, 4],
        maquiavel: [1, 2, 3],
        rousseau: [3, 4]
    },   {
        questao: 'Que personalidades históricas constituíram o primeiro triunvirato?',
        alternativas: [
            {
                alternativa: 'Júlio Cesar, Pompeu e Marco António',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Marco António, Lépido e Octavio',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Pompeu, Júlio Cesar e Crasso',
                rMark: false,
                wMark: false,
            }
        ],
        correto: 2,
        locke: [2],
        voltaire: [2, 0],
        montesquieu: [2, 0, 1],
        maquiavel: [0, 1],
        rousseau: [0, 1]
    },
    {
        questao: 'Quais as potências que estiveram envolvias nas guerras púnicas?',
        alternativas: [
            {
                alternativa: 'Roma e Grécia',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Roma e Egito',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Grécia e Macedónia',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Grécia e Egito',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Roma e Cartago',
                rMark: false,
                wMark: false,
            }
        ],
        correto: 4,
        locke: [4],
        voltaire: [4, 0],
        montesquieu: [4, 0, 1],
        maquiavel: [0, 1, 2],
        rousseau: [0, 1]
    },
    {
        questao: 'Qual dos seguintes é mais conhecido, enquanto ditador, pelas proscrições a que recorreu?',
        alternativas: [
            {
                alternativa: 'Gaius Julius Caesar',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Lucius Quinctius Cincinnatus',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Lucius Cornelius Sulla',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Lucius Papirius Cursor',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Quintus Fabius Maximus Rullianus',
                rMark: false,
                wMark: false,
            }
        ],
        correto: 2,
        locke: [2],
        voltaire: [2, 0],
        montesquieu: [2, 0, 1],
        maquiavel: [0, 1, 3],
        rousseau: [0, 1]
    },
    {
        questao: 'Quem assassinou Pompeu Magno?',
        alternativas: [
            {
                alternativa: 'Júlio César',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'A soldo de Ptolomeu XIII',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Morreu numa batalha',
                rMark: false,
                wMark: false,
            }
        ],
        correto: 1,
        locke: [1],
        voltaire: [1, 0],
        montesquieu: [1, 0, 2],
        maquiavel: [0, 2],
        rousseau: [0, 2]
    },
    {
        questao: 'Marco Licínio Crasso é conhecido pelas suas capacidades:',
        alternativas: [
            {
                alternativa: 'Financeiras',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Oratórias',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Bélicas',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Políticas',
                rMark: false,
                wMark: false,
            },
        ],
        correto: 0,
        locke: [0],
        voltaire: [0, 1],
        montesquieu: [0, 1, 2],
        maquiavel: [1, 2, 3],
        rousseau: [1, 2]
    },
    {
        questao: 'Marco Túlio Cícero destacou-se pelas suas competências enquanto:',
        alternativas: [
            {
                alternativa: 'general romano',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'general grego',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'advogado e político',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'ditador',
                rMark: false,
                wMark: false,
            }
        ],
        correto: 2,
        locke: [2],
        voltaire: [2, 0],
        montesquieu: [2, 0, 1],
        maquiavel: [0, 1, 3],
        rousseau: [0, 1]
    },
    {
        questao: 'De acordo com a lenda de quem descende Júlio César?',
        alternativas: [
            {
                alternativa: 'de Júpiter',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'de Vénus e de Eneias',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Marte',
                rMark: false,
                wMark: false,
            }
        ],
        correto: 1,
        locke: [1],
        voltaire: [1, 0],
        montesquieu: [1, 0, 2],
        maquiavel: [0, 2],
        rousseau: [0, 2]
    },
    {
        questao: 'Como se chama o último rei de Roma?',
        alternativas: [
            {
                alternativa: 'Tarquínio, o Soberbo',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Sérvio Túlio',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Tarquínio Prisco',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Túlio Hostílio',
                rMark: false,
                wMark: false,
            }
        ],
        correto: 0,
        locke: [0],
        voltaire: [0, 1],
        montesquieu: [0, 1, 2],
        maquiavel: [2, 1, 3],
        rousseau: [0, 1]
    },
    {
        questao: 'A república romana estabeleceu-se em que ano e desmoronou-se em que ano?',
        alternativas: [
            {
                alternativa: '500 a.C. a 1 a.C.',
                rMark: false,
                wMark: false,
            }, {
                alternativa: '456 a.C. a 2 d.C.',
                rMark: false,
                wMark: false,
            }, {
                alternativa: '500 a.C. a 3 d.C.',
                rMark: false,
                wMark: false,
            }, {
                alternativa: '509 a.C. a 27 a.C.',
                rMark: false,
                wMark: false,
            }
        ],
        correto: 3,
        locke: [3],
        voltaire: [3, 1],
        montesquieu: [3, 1, 2],
        maquiavel: [2, 1, 0],
        rousseau: [0, 1]
    },
    {
        questao: 'O Império Romano desenvolveu-se a partir de qual dessas Penínsulas?',
        alternativas: [
            {
                alternativa: 'Península Ibérica',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Península Itálica',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Península Escandinava',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Península Balcânica',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Península do Peloponeso',
                rMark: false,
                wMark: false,
            }
        ],
        correto: 1,
        locke: [1],
        voltaire: [1, 3],
        montesquieu: [1, 3, 2],
        maquiavel: [2, 3, 0],
        rousseau: [0, 2]
    },
    {
        questao: 'Embora Roma possuísse colônias e províncias, o Estado pré-Augusto era conhecido como?',
        alternativas: [
            {
                alternativa: 'República Romana',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'República Velha',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'República Democratica',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'República Grega',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'República Anteniese',
                rMark: false,
                wMark: false,
            }
        ],
        correto: 0,
        locke: [0],
        voltaire: [0, 3],
        montesquieu: [0, 3, 2],
        maquiavel: [2, 3, 1],
        rousseau: [1, 2]
    },
    {
        questao: 'O Império Romano do Oriente ou Império Bizantino, em 1453 terminou com a morte de Constantino XI e da tomada de Constantinopla pelos turcos otomanos liderados por:',
        alternativas: [
            {
                alternativa: 'Napoleão Bonaparte',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Júlio César',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Pompeu',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Mehmed II',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Mezezio',
                rMark: false,
                wMark: false,
            }
        ],
        correto: 3,
        locke: [3],
        voltaire: [3, 4],
        montesquieu: [3, 0, 2],
        maquiavel: [3, 2, 1],
        rousseau: [1, 2]
    }, {
        questao: 'O reinado de Nero é associado habitualmente à?',
        alternativas: [
            {
                alternativa: 'Socialismo e á Democrácia',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Tirania e à Extravagância',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Igualdade e à Fraternidade',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'N.D.A',
                rMark: false,
                wMark: false,
            }
        ],
        correto: 1,
        locke: [1],
        voltaire: [1, 2],
        montesquieu: [1, 0, 2],
        maquiavel: [3, 2, 0],
        rousseau: [0, 2]
    },
    {
        questao: 'Em que dia, mês e ano aconteceu a Batalha de Áccio?',
        alternativas: [
            {
                alternativa: '2 de setembro de 31 a.C',
                rMark: false,
                wMark: false,
            }, {
                alternativa: '15 de setembro de 31 a.C',
                rMark: false,
                wMark: false,
            }, {
                alternativa: '07 de setembro de 30 a.C',
                rMark: false,
                wMark: false,
            }
        ],
        correto: 0,
        locke: [0],
        voltaire: [0, 2],
        montesquieu: [0, 1, 2],
        maquiavel: [1, 2],
        rousseau: [2, 1]
    },
    {
        questao: 'A atual estrutura construída durante o reinado de Adriano, foi dedicado à adoração de todas as divindades romana. Como se chama esse edifício construído na época greco-romana?',
        alternativas: [
            {
                alternativa: 'Mercado de Trajano',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Termas romanas',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Panteão',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Arcos do triunfo',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'N.D.A',
                rMark: false,
                wMark: false,
            }
        ],
        correto: 2,
        locke: [2],
        voltaire: [2, 0],
        montesquieu: [2, 1, 3],
        maquiavel: [0, 3],
        rousseau: [1, 3]
    },
    {
        questao: 'Qual era o idioma oficial de Roma?',
        alternativas: [
            {
                alternativa: 'Latim',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Espanhol',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Português',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Inglês',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'Alemão',
                rMark: false,
                wMark: false,
            }
        ],
        correto: 0,
        locke: [0],
        voltaire: [0, 3],
        montesquieu: [0, 1, 4],
        maquiavel: [2, 3],
        rousseau: [1, 4]
    },
    {
        questao: 'Complete: Nenhum imperador poderia governar sem a ordem ___ e sem a ordem ___,',
        alternativas: [
            {
                alternativa: 'ordem senatorial e ordem equestre.',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'ordem democrática e orde partidária',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'ordem militar e ordem hereditária',
                rMark: false,
                wMark: false,
            }, {
                alternativa: 'ordem cavaleiro e ordem romana',
                rMark: false,
                wMark: false,
            }
        ],
        correto: 0,
        locke: [0],
        voltaire: [0, 3],
        montesquieu: [0, 1, 2],
        maquiavel: [2, 3],
        rousseau: [1, 3]
    }  
]

export default perguntas;