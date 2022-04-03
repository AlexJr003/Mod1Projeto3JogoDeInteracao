console.clear();
const prompt = require('prompt-sync')();

console.log("Jogo Interativo - The Walking Dead");
console.log();

console.log("Já se passaram 5 anos desde que um vírus infectou a humanidade");
console.log("A única forma de não ser devorado por um infectado e se salvar é com um forte golpe na cabeça e não ser mordido pelo monstro.");
console.log()
console.log("Você e seu cachorro Finn devem sobreviver ao Apocalipse zumbi.");
console.log();
console.log("Esse é um jogo de escolhas, suas escolhas moldam o destino do seu personagem e daqueles que o rodeiam.");
console.log();
console.log("Explore a cidade para encontrar recursos para sobreviver");
console.log();
console.log("ATENÇÃO: Dependendo da sua relação com os outros e dos itens que possui em sua mochila, certas ações poderão ser ou não tomadas.");
console.log("Sempre que utilizar um item da sua mochila ele será perdido.");
console.log();

//Variáveis do Game

let mochila = [];
let saude = 10;
let horas = 7;
let dia = 1;
const pontos = {
    finn: 0,
    bryan: 0,
    selina: 0,

    adPontosFinn: function() {
    this.finn++
    },
    adPontosBryan: function() {
    this.bryan++
    },
    adPontosSelina: function() {
    this.selina++
    },
    tiraPontosFinn: function() {
        this.finn--
    },
    tiraPontosBryan:function() {
        this.bryan--
    },
    tiraPontosSelina: function() {
        this.selina--
    }
}

console.log(`Sua saúde atual é: ${saude}, não deixe ela ficar muito baixa, isso pode influenciar negativamente o destino do seu personagem.`);
console.log();

//functions do Game

function avancatempo(horaatual, tempopassado){
    console.log(`Se passaram ${tempopassado} horas`);
    horaatual = horaatual + tempopassado;

    return horaatual
}
//
function fezEscolha(escolha){
    if (escolha == 1){
        horas = avancatempo(horas, 10); saude = saude -3 ; mochila.push("cereal", "racao")
    } else if (escolha == 2) {
        horas = avancatempo(horas, 6); saude = saude +3
    } else if (escolha == 3) {
        console.log("Finn gostou e se lembrará disso."); pontos.adPontosFinn(); horas = avancatempo(horas, 1) 
}   else if (escolha == 4) {
    console.log("Finn gostou e se lembrará disso."); pontos.adPontosFinn(); horas = avancatempo(horas, 2); 
}   else (console.log("Opção Inválida."))
return escolha
}
//
const removeItem = (arr, item) => {
    mochila = [...arr]
    const index = mochila.findIndex((element) => element === item)
if (index !== -1) {
    mochila.splice(index,1)
    return mochila
}    
}
//
function usarItemMochila(itemUsado){
    itemUsado = prompt("Qual item vai usar?(Digite o nome do item que quer usar)").toLowerCase() 
    if (itemUsado === 'salgadinho'){
        saude = saude + 5; console.log(`Sua saúde atual é ${saude}`); removeItem(mochila, "salgadinho")
    } else if (itemUsado === "racao"){
        console.log("Finn gostou e se lembrará disso."); pontos.adPontosFinn(); removeItem(mochila, "racao")
    } else if (itemUsado === 'cereal'){
        saude = saude + 3; console.log(`Sua saúde atual é ${saude}`); removeItem(mochila, "cereal")
    } else if (itemUsado === 'pistola'){
        console.log("Esse item não vai ajudar no momento.")
    } else if (itemUsado === 'faca'){
        console.log("Esse item não vai ajudar no momento.")
    } else { 
        console.log("Você não possui este item na mochila.")
    }
    return itemUsado
}
//
function inventário(){
    console.log();
    console.log(`Agora são ${horas} horas, dia ${dia}`)
    console.log();
    console.log(`Seus itens na mochila são: ${mochila}`)
    console.log();
    console.log(`Sua saúde atual é: ${saude}`)
    console.log();
    }


//Código do Game
console.log("Você tem 7 dias para sobreviver ao apocalipse zumbi.")    
let continuar = "S";

while (continuar == "S"){

for (let i = 0; i < 1; i++){
while (horas <= 24){ 
    console.log();
    console.log(`Agora são ${horas} horas, dia ${dia}. Escolha uma opção:
    
    1 - Explorar cidade por suprimentos (+10 Horas & -3 Saúde)
    2 - Dormir (+6 Horas & +3 Saúde)
    3 - Dar carinho no Finn (+1 Hora)
    4 - Brincar com Finn (+2 Horas)`);

    let escolha = +prompt()

fezEscolha(escolha);

}
    dia++
    horas = horas - 24;

    inventário();

let resposta = "S" 

while (resposta == "S"){
    resposta = prompt(`Você quer usar algum item que você possui em sua mochila?[S/N]`).toUpperCase()
    if (resposta !== "S"){
        break
    }
    usarItemMochila();

    while (resposta != "S" && resposta != "N"){
        resposta = (`Você quer usar algum item que você possui em sua mochila?[S/N]`).toUpperCase();
    }
    
}
console.clear();
inventário();
}


//Cenário1

console.log("Você decidiu explorar um galpão com o Finn hoje, ao chegar no local vocês notaram que não há zumbis avista e encontraram uma parede com uma pequena abertura.");
let escolha1 = prompt("Mandar Finn entrar na abertura para procurar recursos?[S/N]").toUpperCase();
console.clear();
 if (escolha1 == "S" && pontos.finn >= 3) {
    console.log("Finn encontrou uma faca."); mochila.push("faca")
} else if (escolha1 == "S" && pontos.finn >= 2) {
    console.log("Finn encontrou uma pistola."); mochila.push("pistola")
} else if (escolha1 == "S" && pontos.finn <= 1) {
    console.log("Finn se recusou a entrar na abertura (Você não tem uma boa relação com seu cão).")
} else {console.log("Você decidiu não mandar o Finn explorar a abertura")}

horas = 13;
inventário();

for (let i = 0; i < 2; i++){
    while (horas <= 24){
        
        console.log(`Escolha uma opção:
        
        1 - Explorar cidade por suprimentos (+10 Horas & -3 Saúde)
        2 - Dormir (+6 Horas & +3 Saúde)
        3 - Dar carinho no Finn (+1 Hora)
        4 - Brincar com Finn (+2 Horas)`);
    
        let escolha = +prompt();
    
    fezEscolha(escolha);
    
    }
        dia++
        horas = horas - 24;
    
        inventário();
    
    let resposta = "S";
    
    while (resposta == "S"){
        resposta = prompt(`Você quer usar algum item que você possui em sua mochila?[S/N]`).toUpperCase()
        if (resposta !== "S"){
            break
        }
        usarItemMochila();
    
        while (resposta != "S" && resposta != "N"){
            resposta = (`Você quer usar algum item que você possui em sua mochila?[S/N]`).toUpperCase();
        }
    
    }
    console.clear();
    inventário();
    }
    console.clear();
    inventário();
//Cenário2
console.log("Explorando a cidade por recursos você e Finn encontram um homem com uma mochila cheia de suprimentos(Digite o número da ação que deseja tomar).");
console.log()

let escolha2 = +prompt(`\n1- Mandar Finn atacar o homem enquanto você rouba sua mochila\n2- Implorar por suprimentos ao homem\n3- Usar algum objeto da mochila para intimidar o homem\n4- Ignorar o homem e sair sem ser visto\n`);
console.clear();
if (escolha2 == 1 && pontos.finn >= 5){
    console.log("Você roubou a mochila do homem, ele jurou se vingar de você e do seu cão."); pontos.tiraPontosBryan(); mochila.push("pistola", "salgadinho", "racao", "faca");
}
else if (escolha2 == 1 && pontos.finn < 5){
    console.log("Finn se recusou a atacar o homem, o homem percebeu o que você tentava fazer e fugiu. O homem se lembrará da sua ação."); pontos.tiraPontosBryan();
} 
else if (escolha2 == 2){
    console.log(`Vocês se aproximaram do homem, que parece ser inofencivo, ele se chama Bryan e ficou feliz em lhes ajudar.\nBryan diz vir de uma comunidade segura e promete nos levar para lá, mas primeiro deve perguntar aos seus superiores.`); pontos.adPontosBryan(); mochila.push("cereal", "faca");
}
else if (escolha2 == 3){
    console.log(mochila)
    let itemDeAtaque = prompt("Qual item vai usar para atacar o homem?").toLowerCase()
if (itemDeAtaque == "pistola"){
    console.log("Você ameaça o homem e rouba seus suprimentos, ele jurou vingança. Uma horda de zumbis apareceu, você e Finn fugiram, mas na confusão você perdeu sua pistola."); pontos.tiraPontosBryan(); removeItem(mochila, "pistola"); mochila.push("salgadinho", "racao", "faca")
}
else if (itemDeAtaque == "faca"){
    console.log(`Você tentou surpreender o homem por trás com uma faca, mas ele percebeu, e rapidamente tirou a faca de sua mão, mandou vocês se afastarem e fugiu.\n\nO homem se lembrará de sua ação`); pontos.tiraPontosBryan(); removeItem(mochila, "faca")
}
else {console.log (`Esse item não vai te ajudar neste momento, o homem foi embora, você perdeu a oportunidade de realizar alguma ação.`)
}
} else if (escolha2 == 4){
    console.log("Vocês deixaram o local.")
}
else {console.log("Essa opção não é valida, você perdeu a oportunidade de interagir com o homem.")
}

horas = 13;
inventário();

for (let i = 0; i < 1; i++){
    while (horas <= 24){
        
        console.log(`Escolha uma opção:
        
        1 - Explorar cidade por suprimentos (+10 Horas & -3 Saúde)
        2 - Dormir (+6 Horas & +3 Saúde)
        3 - Dar carinho no Finn (+1 Hora)
        4 - Brincar com Finn (+2 Horas)`);
    
        let escolha = +prompt();
    
    fezEscolha(escolha);
    
    }
        dia++
        horas = horas - 24;
    
        inventário();
    
    let resposta = "S" 
    
    while (resposta == "S"){
        resposta = prompt(`Você quer usar algum item que você possui em sua mochila?[S/N]`).toUpperCase()
        if (resposta !== "S"){
            break
        }
        usarItemMochila();
    
        while (resposta != "S" && resposta != "N"){
            resposta = (`Você quer usar algum item que você possui em sua mochila?[S/N]`).toUpperCase();
        }
    
    }
    console.clear();
    inventário();
    }
   
//Cenário 3

console.log("Você e Finn voltaram de uma busca por suprimentos, mas ao chegaram em seu esconderijo encontraram uma mulher vasculhando suas coisas (Digite o número da ação que deseja tomar.)");
let escolha3 = +prompt(`\n1- Mandar Finn atacar a mulher\n2- Perguntar a mulher quem ela é\n3- Usar algum objeto da mochila para surpreender a mulher\n`);
console.clear();

if (escolha3 == 1 && pontos.finn >= 7){
    console.log(`O Finn atacou a mulher, que se desviou rapidamente e fugiu pela janela.\nA mulher se lembrará de sua ação.`); pontos.tiraPontosSelina();
}
else if (escolha3 == 1 && pontos.finn < 7){
    console.log("Finn se recusou a atacar a mulher, a mulher riu da situação, ela se apresentou como Selina e disse não saber que alguém vivia no local, ela se desculpou e deixou o local, com a promessa que vocês se veriam novamente."); pontos.adPontosSelina(); 
} 
else if (escolha3 == 2){
    console.log(`Vocês se aproximaram da mulher e você a perguntou quem ela é, ela disse se chamar Selina e disse não saber que alguém vivia no local, ela se desculpou e deixou o local, com a promessa que vocês se veriam novamente".`); pontos.adPontosSelina(); 
}
else if (escolha3 == 3){
    console.log(mochila)
    let itemDeSurpresa = prompt("Qual item vai usar para surpreender a mulher?").toLowerCase()
if (itemDeSurpresa == "pistola"){
console.log(`Você tenta surpreender a mulher com uma pistola, mas o surpreendido é você, ela se vira rapidamente e consegue tirar a arma da sua mão e apontar contra você, ela diz não saber que aquelas coisas tinham dono, ela foge pela janela.\nA mulher se lembrará de sua ação.`); pontos.tiraPontosSelina(); removeItem(mochila, "pistola")
}
else if (itemDeSurpresa == "faca"){
    console.log(`Você empunha sua faca e se aproxima devagar da mulher por trás, você coloca a faca no pescoço dela e exige explicações, ela te dá uma cabeçada e consegue se soltar, ela rouba sua faca que tinha caído no chão e foge.\nA mulher se lembrará de sua ação.`); pontos.tiraPontosSelina(); removeItem(mochila, "faca")
}
else {console.log (`Essa opção não é valida, a mulher te notou, ela se assusta e diz não saber que aqueles coisas tinham dono, ela diz se chamar Selina e agradece por você não ter a atacado e vai embora com a promessa que vocês se veram novamente.`); pontos.adPontosSelina();
}
}


horas = 13
inventário();

for (let i = 0; i < 1; i++){
    while (horas <= 24){
        
        console.log(`Escolha uma opção:
        
        1 - Explorar cidade por suprimentos (+10 Horas & -3 Saúde)
        2 - Dormir (+6 Horas & +3 Saúde)
        3 - Dar carinho no Finn (+1 Hora)
        4 - Brincar com Finn (+2 Horas)`);
    
        let escolha = +prompt();
    
    fezEscolha(escolha);
    
    }
        dia++
        horas = horas - 24;
    
        inventário();
    
    let resposta = "S";
    
    while (resposta == "S"){
        resposta = prompt(`Você quer usar algum item que você possui em sua mochila?[S/N]`).toUpperCase();
        if (resposta !== "S"){
            break
        }
        usarItemMochila();
    
        while (resposta != "S" && resposta != "N"){
            resposta = (`Você quer usar algum item que você possui em sua mochila?[S/N]`).toUpperCase();
        }
    
    }
    console.clear();
    inventário();
    }
//Cenário 4

console.log("Ao explorar a cidade, você e Finn se veem encuralados por uma horda de zumbis, é nesse momento que vocês avistam uma figura familiar, o homem que haviam visto dias atrás.");
if (pontos.bryan >= 1){
    console.log("Bryan está junto com uma grande quantidade de pessoas, devem ser da comunidade que ele havia comentado, eles se juntam a sua luta, mas são muitos zumbis, Bryan consegue te dar um mapa com a localização da comunidade e todos fogem por caminhos diferentes."); pontos.adPontosBryan();
}else if(pontos.bryan == 0 ){
    console.log("O homem está acompanhado de uma grande quantidade de pessoas, eles devem ser de uma comunidade, eles se juntam a sua luta, mas são muitos zumbis, o homem consegue te dar um mapa com a localização da comunidade e todos fogem por caminhos diferentes."); pontos.adPontosBryan();
}else if(pontos.bryan < 0 && pontos.finn >= 5){
    console.log(`O homem está acompanhado de uma grande quantidade de pessoas, todos portando rifles, o homem ordena que todos atirem contra os zumbis e contra vocês.
    Como você tem uma boa relação com seu cão, Finn te auxilia na fuga e vocês conseguem escapar por entre os zumbis sem dificuldades.`);
} else{
    console.log(`O homem está acompanhando de uma grande quantidade de pessoas, todos portando rifles, o homem ordena que todos atirem contra os zumbis e contra vocês.
    Como você não tem uma boa relação com seu cão, Finn não segue suas ordens e vocês por pouco não escapam com vida.`); saude = saude - 15
}

horas = 13;
inventário();

for (let i = 0; i < 1; i++){
    while (horas <= 24){
        
        console.log(`Escolha uma opção:
        
        1 - Explorar cidade por suprimentos (+10 Horas & -3 Saúde)
        2 - Dormir (+6 Horas & +3 Saúde)
        3 - Dar carinho no Finn (+1 Hora)
        4 - Brincar com Finn (+2 Horas)`);
    
        let escolha = +prompt()
    
    fezEscolha(escolha);
    
    }
        dia++
        horas = horas - 24;
    
        inventário();
    
    let resposta = "S" 
    
    while (resposta == "S"){
        resposta = prompt(`Você quer usar algum item que você possui em sua mochila?[S/N]`).toUpperCase();
        if (resposta !== "S"){
            break
        }
        usarItemMochila();
    
        while (resposta != "S" && resposta != "N"){
            resposta = (`Você quer usar algum item que você possui em sua mochila?[S/N]`).toUpperCase();
        }
    
    }
    console.clear();
    inventário();
    }

//Cenário 5

    console.log("Você está descansando em seu esconderijo, quando a mulher que você havia visto dias atrás aparece repentinamente.");
if (pontos.selina >= 0 ){
    console.log("Selina te oferece uma carona com um barco que ela mesmo reformou, era isso que ela fazia o outro dia enquanto vasculhava nossas coisas, procurava peças para a reforma do seu barco. Ela partirá em um dia e esperará você e o Finn no caís."); pontos.adPontosSelina();
}else if(pontos.selina < 0 && pontos.finn >= 5 ){
    console.log("A mulher aponta uma pistola para vocês e diz que vai embora da cidade com um barco e que vai roubar tudo que é nosso para sua viagem. Quando ela se aproxima o Finn a ataca e morde o seu braço, quase o arrancando, você pega a arma da mulher que havia caído no chão e manda ela ir embora e nunca mais voltar."); pontos.tiraPontosSelina(); mochila.push("pistola")
}else {
    console.log("A mulher aponta uma pistola para vocês e diz que vai embora da cidade com um barco e que vai roubar tudo que é nosso para sua viagem. Quando ela se aproxima você tenta pegar a arma de sua mão, mas acaba levando um tiro no ombro, você implora por misericórdia e a mulher te deixa viver, ela leva alguns de seus itens e vai embora. (Você deveria ter sido um melhor dono para seu cão)"); saude = saude - 15; removeItem(mochila, "salgadinho"); removeItem(mochila, "faca"); removeItem(mochila, "racao"); removeItem(mochila, "pistola"); removeItem(mochila, "cereal");
}

//Fim do Jogo
    console.log();
    console.log("A partir das escolhas feitas até agora serão apresentadas as escolhas que você pode fazer: ");
    console.log();
   
    if (pontos.selina >= 0 && pontos.bryan >= 0){
console.log("Chegou a hora de escolher como será o seu destino e o do Finn (Digite o número da ação que deseja tomar): ");
console.log();
    let escolha5 = +prompt (`\n1-Ir até o caís e encontrar um lugar seguro com o barco da Selina \n2- Ir até a comunidade do Bryan e pedir abrigo\n3- Permancer em seu esconderijo\n`);
    console.clear();
if (escolha5 == 1 && saude >= 5) {
console.log(`Você decidiu ir até o caís se encontrar com a Selina. No caminho vocês são surpreendidos por uma horda de zumbis, mas como sua saude é de ${saude}, vocês conseguiram matar os zumbis e chegaram até o caís. Selina já estava a sua espera.
Após semanas velejando vocês encontram uma ilha e ancoram nela. Vocês não veem nenhum zumbi ou sinal de destruição, ao caminharem um pouco vocês avistam um vilarejo, lá vocês são informados pelos moradores que aquela ilha era um
santuário para os sobreviventes, devido as fortes ondas os zumbis não conseguem chegar até lá, foi um milagre o barco ter aguentado a viagem.
Vocês decidem se instalar ali, vocês finalmente encontraram um lugar seguro para viver.`)
} else if (escolha5 == 1 && saude < 5) {
    console.log(`Você decidiu ir até o caís se encontrar com a Selina. No caminho vocês são surpreendidos por uma horda de zumbis, como sua saude é de ${saude}, vocês lutam contra os zumbis, mas acabam sendo encurados, em um último ato de coragem você ordena que o Finn vá até o caís encontrar a Selina e se joga na orda de zumbis, enquanto   você é devorado Finn consegue escapar.
Ao chegar no caís Finn encontra Selina que estava a sua espera, ao ver seu fiel escudeiro sozinho ela entende que você não conseguiria chegar no caís.
Selina e Finn passam semanas velejando vocês encontram uma ilha e ancoram nela. Eles não veem nenhum zumbi ou sinal de destruição, ao caminharem um pouco eles avistam um vilarejo, lá eles são informados pelos moradores que aquela ilha era um
santuário para os sobreviventes, devido as fortes ondas os zumbis não conseguem chegar até lá, foi um milagre o barco ter aguentado a viagem.
Eles decidem se instalar ali, o Finn finalmente encontrou um lugar seguro para viver e nunca esquecerá o ato do seu dono.`);
}
else if (escolha5 == 2 && pontos.finn >= 7){
    console.log(`Você decidiu ir até a comunidade do Bryan pedir abrigo. No portão da comunidade vocês avistam um grupo rival tentando invadir a comunidade e fazendo algumas pessoas de refén, eles exigiam que abrissem os portões, se não eles matariam os reféns, os invasores possuiam um tanque, você viu que ninguém estava dentro do tanque e entrou nele, você mandou Finn distrair as pessoas que ameaçavam a comunidade.
Como você possui uma boa relação com seu cão, ele o escuta, Finn consegue distrair os invasores e os afasta dos reféns, nesse momento você manda o Finn se afastar e com o tanque atira nos invasores, não deixando nenhum sobrevivente.
Você salva os réfens e juntos todos entram pelo portão, Bryan te agradece e informa ser o lídar da comunidade, ele diz que eles estão mais que felizes em nos ter como integrantes dessa comunidade e que nossas habilidades serão muito bem vindas.
Você e o Finn finalmente conseguiram encontrar um lugar seguro para viverem.`)
}
else if (escolha5 == 2 && pontos.finn < 7 ){
    console.log(`Você decidiu ir até a comunidade do Bryan pedir abrigo. No portão da comunidade vocês avistam um grupo rival tentando invadir a comunidade e fazendo algumas pessoas de refén, eles exigiam que abrissem os portões, se não eles matariam os reféns, os invasores possuiam um tanque, você viu que ninguém estava dentro do tanque e entrou nele, você mandou Finn distrair as pessoas que ameaçavam a comunidade.
Como você não possui uma boa relação com seu cão, ele não o escuta, ao invés disso ele alerta os invasores que você está no tanque, você fica sem reação, os invasores te tiram do tanque e atiram em você para servir como exemplo para os moradores da comunidade, em seus últimos suspiros você vê o Finn entrando juntamente com os invasores na comunidade, após isso uma série de tiros, infelizmente você não conseguiu evitar que a comunidade fosse tomada.(Você deveria ter sido um melhor dono para seu cão)`);
}
else {
console.log(`Você decidiu não mudar seu estilo de vida, você e o Finn vão continuar a viver um dia de cada vez, sem grandes expectativas, afinal não há nada melhor que a rotina.`)
}

}
    else if(pontos.selina >= 0){
console.log("Chegou a hora de escolher como será o seu destino e o do Finn: (Digite o número da ação que deseja tomar) ")
    let escolha6 = +prompt (`\n1-Ir até o caís e encontrar um lugar seguro no barco da Selina com o Finn \n2- Permancer em seu esconderijo com o Finn\n`)
    console.clear();
if (escolha6 == 1 && saude >= 5) {
console.log(`Você decidiu ir até o caís se encontrar com a Selina. No caminho vocês são surpreendidos por uma horda de zumbis, mas como sua saude é de ${saude}, vocês conseguiram matar os zumbis e chegaram até o caís. Selina já estava a sua espera.
Após semanas velejando vocês encontram uma ilha e ancoram nela. Vocês não veem nenhum zumbi ou sinal de destruição, ao caminharem um pouco vocês avistam um vilarejo, lá vocês são informados pelos moradores que aquela ilha era um
santuário para os sobreviventes, devido as fortes ondas os zumbis não conseguem chegar até lá, foi um milagre o barco ter aguentado a viagem.
Vocês decidem se instalar ali, vocês finalmente encontraram um lugar seguro para viver.`)
} else if (escolha6 == 1 && saude < 5){
console.log(`Você decidiu ir até o caís se encontrar com a Selina. No caminho vocês são surpreendidos por uma horda de zumbis, como sua saúde é de ${saude}, vocês lutam contra os zumbis, mas acabam sendo encurados, em um último ato de coragem você ordena que o Finn vá até o caís encontrar a Selina e se joga na orda de zumbis, enquanto você é devorado Finn consegue escapar.
Ao chegar no caís Finn encontra Selina que estava a sua espera, ao ver seu fiel escudeiro sozinho ela entende que você não conseguiria chegar no caís.
Selina e Finn passam semanas velejando vocês encontram uma ilha e ancoram nela. Eles não veem nenhum zumbi ou sinal de destruição, ao caminharem um pouco eles avistam um vilarejo, lá eles são informados pelos moradores que aquela ilha era um santuário para os sobreviventes, devido as fortes ondas os zumbis não conseguem chegar até lá, foi um milagre o barco ter aguentado a viagem.
Eles decidem se instalar ali, o Finn finalmente encontrou um lugar seguro para viver e nunca esquecerá o ato do seu dono.`)
}
else{
console.log(`Você decidiu não mudar seu estilo de vida, você e o Finn vão continuar a viver um dia de cada vez, sem grandes expectativas, afinal, não há nada melhor que a rotina.`)
}
}

else if (pontos.bryan >= 0){
    console.log("Chegou a hora de escolher como será o seu destino e o do Finn: (Digite o número da ação que deseja tomar) ")
    console.log();
    let escolha7 = +prompt (`\n1- Ir até a comunidade do Bryan e pedir abrigo para você e o Finn\n2- Permancer em seu esconderijo com o Finn\n`)
    console.clear();
if (escolha7 == 1 && pontos.finn >= 5){
console.log(`Você decidiu ir até a comunidade do Bryan pedir abrigo. No portão da comunidade vocês avistam um grupo rival tentando invadir a comunidade e fazendo algumas pessoas da comunidade do Bryan de refén, eles exigiam que abrissem os portões, se não eles matariam os reféns, os invasores possuiam um tanque, você viu que ninguém estava no tanque e entrou nele, você mandou Finn distrair as pessoas que ameaçavam a comunidade.
Como você possui uma boa relação com seu cão, ele o escuta, Finn consegue distrair os invasores e os afasta dos reféns, nesse momento você manda o Finn se afastar e com o tanque atira nos invasores, não deixando nenhum sobrevivente.
Você salva os réfens e juntos todos entram pelo portão, Bryan te agradece e informa ser o lídar da comunidade, ele diz que eles estão mais que felizes em nos ter como integrantes dessa comunidade e que nossas habilidades serão muito bem vindas.
Você e o Finn finalmente conseguiram encontrar um lugar seguro para viverem.`)
}
else if (escolha7 == 1 && pontos.finn < 5 ){
console.log(`Você decidiu ir até a comunidade do Bryan pedir abrigo. No portão da comunidade vocês avistam um grupo rival tentando invadir a comunidade e fazendo algumas pessoas da comunidade do Bryan de refén, eles exigiam que abrissem os portões, se não eles matariam os reféns, os invasores possuiam um tanque, você viu que ninguém estava no tanque e entrou nele, você mandou Finn distrair as pessoas que ameaçavam a comunidade.
Como você não possui uma boa relação com seu cão, ele não o escuta, ao invés disso ele alerta os invasores que você está no tanque, você fica sem reação, os invasores te tiram do tanque e atiram em você para servir como exemplo para os moradores da comunidade, em seu últimos suspiros você vê o Finn entrando juntamente com os invasores na comunidade, após isso uma série de tiros, infelizmente você não conseguiu evitar que a comunidade fosse tomada.`); saude = saude - 100
}
else if (escolha7 == 2){
console.log(`Você decidiu não mudar seu estilo de vida, você e o Finn vão continuar a viver um dia de cada vez, sem grandes expectativas, afinal, não há nada melhor que a rotina.`)
}

}
else {
console.log("Você e Finn estão em seu esconderijo, mas uma horda de zumbis começa a lhes atacar.")
if (saude >= 7 && pontos.finn >= 5){
console.log(`Você e o Finn lutaram bravamente contra os zumbis, como você possui um nível de saúde satisfatório e uma boa relação com o Finn, os dois conseguem sair desse situação ilesos.
Infelizmente o esconderijo de vocês foi completamente destruído, o jeito vai ser procurar um novo local para sobreviverem, o imporantante é que vocês farão isso juntos, como sempre foi!`)
} else {
console.log(`Você e o Finn lutaram bravemente contra os zumbis, mas eles eram muitos, infelizmente vocês não conseguem sair dessa...`);
}
}

//Status Final

console.log();
console.log("Você chegou ao fim da sua jornada!");
console.log();

console.log(`Você terminou o jogo com ${saude} pontos de saúde.`);
console.log(`Você terminou o jogo com ${pontos.finn} pontos com o Finn.`);
console.log(`Você terminou o jogo com ${pontos.bryan} pontos com o Bryan.`);
console.log(`Você terminou o jogo com ${pontos.selina} pontos com a Selina.`);
console.log();

if (saude >= 15 && pontos.finn >= 10 && pontos.bryan >= 2 && pontos.selina >= 2){
    console.log("Parabéns! Você é um sobrevivente nato, o apocalipse zumbi não seria nada pra você!")
} else if (saude < 15 && pontos.finn < 10 && pontos.bryan >= 2 && pontos.selina >= 2){
    console.log("Você é um sobrevivente experiente, mas suas habilidades mas podem melhorar.")
} else if (saude < 15 && pontos.finn < 10 && pontos.bryan == 1 && pontos.selina == 1){
    console.log("Você é um sobrevivente experiente, mas suas habilidades mas podem melhorar.")
} else if (saude < 10 && pontos.finn < 5 && pontos.bryan == 1 && pontos.selina == 1){
    console.log("Você é um sobrevivente junior, tem que praticar mais.")
} else if (saude < 10 && pontos.finn < 5 && pontos.bryan <= 0 && pontos.selina <= 0){
        console.log("Você é um sobrevivente aspirante, talvez na próxima vez você consiga ir melhor.")
} else {console.log("Você é um sobrevivente amador, ainda tem muito que aprender.")}  
console.log();

continuar = prompt(`Deseja jogar novamente? Todos os itens que estiverem na mochila permancerão nela.[S/N]`).toUpperCase();
if (continuar == "S"){
    horas = 7
    dia = 1
    saude = 10
    pontos.finn = 0
    pontos.bryan = 0
    pontos.selina = 0

  while (continuar != "S" && continuar != "N"){
    console.clear();  
    continuar = prompt(`Deseja jogar novamente? Todos os itens que estiverem na mochila permancerão nela.[S/N]`).toUpperCase()
    
  }
}  
}

console.clear();
console.log("Fim de Jogo!!");