# PROJETO PWEB ─ PARTE 2
Trabalho solicitado por **Guibson Santana**, professor de Desenvolvimento WEB do **Instituto Federal de Alagoas (IFAL)** e realizado por **Ytalo dos Santos Amorim**, turma **922A**

## Mudanças feitas desde a Parte 1 do projeto
Algumas mudanças foram feitas além do que foi solicitado pelo professor:

- No CSS:
    - Reescrita do CSS usando o conceito de Mobile First com o objetivo de obter páginas responsivas
    - Uso de ferramentas aprendidas como Grid CSS e Flexbox que não foram usadas anteriormente
    - Mudança na estruturação do CSS, usando um arquivo```.css``` para cada parte da página
    - Uso de Media Queries
- Modificação do HTML para compor melhor o CSS
- Uso de poucas e simples linhas de código de JavaScript para fazer o menu hamburguer funcionar (não quis usar muito por 1) não saber 2) deixar para a próxima etapa)
- Mudança de extensão de algumas imagens de ```.png``` para ```.svg``` para melhor qualidade dos ícones
- Composição da página de FAQ, que antes estava indisponível
- Implementação de ícone de título (ou favicon) usando arquivo de extensão ```.ico```

## Responsividade
Nessa parte do projeto quis começar a praticar responsividade do site e descobri que não é tão fácil quanto parece. No final, não fiquei muito satisfeito, pois o simulador do navegador não é o dispositivo em si, e não passa tantas informações sobre experiência de usuário. Contudo, posso, sim, dizer que o site ficou responsivo.

Os seguintes padrões de tamanhos de dispositivos foram usados como *breakpoints* para as Media Queries:

- 280px (usado apenas uma vez, tendo como base Galaxy Fold);
- Mobile (**PADRÃO!** Não foi feito *breakpoints*);
- 768px (Tablets);
- 1024px (Desktops);

OBS: Sinto que para o site ficar esteticamente bonito (nas minhas concepções) precisariam de mais algumas Media Queries. Como por ex.: 1024px é o comprimento "padrão" para Desktops, mas a página principal teve alguns comportamentos indesejados nesse tamanho, só funcionando como esperado acima de 1300px (o comprimento do meu é de 1366px)

## Dificuldades
Algumas dificuldades puderam ser observadas por mim mesmo ao desenvolvimento do projeto. Não lembrarei de todas, mas tentarei listá-las (todas as dificuldades já foram resolvidas, mas sinto que talvez seja importante anotar):

- O uso de Grid CSS (foi complicado entender no início)
- Estilização do background com a imagem na página principal de forma que ficasse responsiva (resolvido com Media Queries)
- Responsividade de vídeos (tive a ajuda da monitora Nicole nesse tópico, que juntou material para me ajudar a tornar os vídeos responsivos. O problema é que não é tão fácil manter a altura do vídeo proporcional ao comprimento, e as soluções na internet não resolviam muito bem como eu queria)
- A estilização dos input[type=ratio] para se parecerem com botões (resolvido com facilidade)
- Qualquer coisa que precisasse de JS (minha solução foi desistir e procurar outro método que não utilizasse do JS)

## Testes
Testados nos browsers:

- Google Chrome
- Mozilla Firefox
- Opera

<br><br>

##### Fim do documento
