### Quiz App
Solucao para o desafio de quiz App

## Motivação
Criar uma aplicação consumindo [api](https://opentdb.com/) para gerar perguntas aleatórias, conforme a quantidade que usuário deseja.


## Feature
- Retorno da API não possui  id nos objetos, então utilizei o [react-native-uuid](https://github.com/eugenehp/react-native-uuid#readme) para gerar aleatoriamente é inserir.
- Id e importante para react identificar os componentes filhos é também para futuras consultas nas listas
- Resposta correta não vem junto das  respostas incorretas, então criei uma lista e implementei array de perguntas com as incorretas é a correta.
-  Se o index for o primeiro  a pergunta correta sera inserida na posição  dois, se for par na terceira  é se for impar na última, gerando sensação de aleatoriedade

``` typescript
async function handleConfirm() {
    try {
      setLoading(true);
      setIsCorrect(true);
      const response = await api.get(
        `api.php?amount=${quantity}&type=multiple`,
      );
      const datas: DataProps = response.data;
      setAllPhrase(
        datas.results.map((item: Phrase, index) => {
          if (index === 0) {
            const phraseOne = item.incorrect_answers[0];
            const phraseTwo = item.correct_answer;
            const phraseThree = item.incorrect_answers[2];
            const phraseFour = item.incorrect_answers[1];
            return {
              id: `${uuid.v4()}`,
              question: item.question,
              correct_answer: item.correct_answer,
              incorrect_answers: [
                phraseOne,
                phraseTwo,
                phraseThree,
                phraseFour,
              ],
            };
          }
          if (index % 2 === 0) {
            const phraseOne = item.incorrect_answers[0];
            const phraseTwo = item.incorrect_answers[2];
            const phraseThree = item.correct_answer;
            const phraseFour = item.incorrect_answers[1];
            return {
              id: `${uuid.v4()}`,
              question: item.question,
              correct_answer: item.correct_answer,
              incorrect_answers: [
                phraseOne,
                phraseTwo,
                phraseThree,
                phraseFour,
              ],
            };
          }
          if (index % 2 !== 0) {
            const phraseOne = item.incorrect_answers[0];
            const phraseTwo = item.incorrect_answers[2];
            const phraseThree = item.incorrect_answers[1];
            const phraseFour = item.correct_answer;
            return {
              id: `${uuid.v4()}`,
              question: item.question,
              correct_answer: item.correct_answer,
              incorrect_answers: [
                phraseOne,
                phraseTwo,
                phraseThree,
                phraseFour,
              ],
            };
          }
        }),
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }


```
- Para evitar memoria leak ao desmontar o competente cancelei os estados no async.

``` tsx


 useEffect(() => {
    return () => {
      setTotalAnswers({} as TotalAnswer);
      setReportUser([] as UserAnswer[]);
    };
  }, []);
  
```
- Utilizei recurso interesante da flatlist, no react native, scroll view e flatlist não podem ficar na mesma direção.
- Para fazer scroll na tela toda,utilizei recurso da flat list ListHeaderComponent,assim consigo um header no topo do app 
- Instanciei um novo objeto da flatlist. Assim type script pegar as tipagens

``` javascript
//---------- arquivos de estilos ----------

export const ListContainer = styled(FlatList as new () => FlatList)`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  padding: ${getStatusBarHeight() + 20}px 20px ${getBottomSpace() + 20}px;
`;


//--------------------------//
 
 <Fragment>
      <Fragment>
        <ListContainer
          data={allPhrase}
          keyExtractor={(item) => String(item.id)}
          ListHeaderComponent={
            <Fragment>
              <StatusBar />
              <Container>
                <Pressable
                  onPress={handleBack}
                  onPressIn={handleOpacity}
                  style={{
                    opacity: isTouch ? 0.5 : 1,
                    marginBottom: 50,
                  }}
                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                >
                  <AntDesign name="left" size={15} color={colors.main} />
                </Pressable>
                <View>
                  <Title>Perguntas e respostas</Title>
                  <Subtitle>
                    Confirme no start a quantidade de perguntas ou retorne no
                    cancel
                  </Subtitle>
                </View>
                <View>
                  <TitleSection>
                    Quantidade de perguntas escolhidas:{' '}
                    <ColorQuantity> {quantity}</ColorQuantity>
                  </TitleSection>
                </View>
              </Container>
            </Fragment>
          }
          renderItem={({ item, index }) => (
            <ListPhases
              onPressIn={handlePressPhrase}
              index={index + 1}
              data={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListHeaderComponentStyle={{
            marginBottom: 20,
          }}
          contentContainerStyle={{
            paddingBottom: 50,
          }}
          ItemSeparatorComponent={() => (
            <Separator
              style={{
                marginVertical: 20,
              }}
            />
          )}
        />
        <ContainerButton>
          {loading ? (
            <ContainerLoading>
              <ActivityIndicator size="large" color={colors.main} />
            </ContainerLoading>
          ) : (
            <Fragment>
              {isCorrect ? (
                <Button
                  onPress={handleReport}
                  haveQuantity={touchPhrases}
                  title="relatorio"
                />
              ) : (
                <Fragment>
                  <ButtonConfirm onPress={handleConfirm} activeOpacity={0.5}>
                    <TextButtonConfirm>Start</TextButtonConfirm>
                  </ButtonConfirm>
                  <ButtonCancel onPress={handleCancel} activeOpacity={0.5}>
                    <TextButtonCancel>Cancel</TextButtonCancel>
                  </ButtonCancel>
                </Fragment>
              )}
            </Fragment>
          )}
        </ContainerButton>
      </Fragment>
      <Modal
        haveBack={true}
        ref={openModalRef}
        data={reportUser}
        total={totalAnswers}
      />
    </Fragment>
```
 

-  Meu modal poderia receber valores null do context api, então utilizei do operador de coalescência nulla (?) do java script

``` tsx
<FooterTotal>
              <TitleFooter>Total de perguntas respondidas:</TitleFooter>
              <ColorFooter> {total?.totalQuestions} </ColorFooter>
            </FooterTotal>
            <FooterTotal>
              <TitleFooter>Total de acertos:</TitleFooter>
              <ColorFooter>{total?.answerTotalCorrect} </ColorFooter>
            </FooterTotal>
            <FooterTotal>
              <TitleFooter>Total de erros:</TitleFooter>
              <ColorFooter>{total?.answerTotalWrong}</ColorFooter>
            </FooterTotal>
          </Footer>

  {data?.map((item) => (
        <Content key={item.id}>
          <View>
            <WrapperAnswers>
              <TitleAnswers>Reposta escolhida:</TitleAnswers>
              <SubtitleAnswers>{item.answerSelect}</SubtitleAnswers>
            </WrapperAnswers>
            <WrapperAnswers>
              <SelectAnswer>Resposta correta:</SelectAnswer>
              <SubTitleAnswer>{item.answerCorrect}</SubTitleAnswer>
            </WrapperAnswers>
          </View>
          <Separation />
        </Content>

```
 
 - Quando meus estados não estavam sendo reaproveitados nos componentes utilizei recurso useRef
 
 ```typescript
   let totalAnswersRef = useRef(0);
  let totalWrongRef = useRef(0);
  let totalAnswers = useRef(0);
 
  function handleReport(phraseSelect, report, reportSelect) {
    setIsTouched(reportSelect);
    setPhraseSelect(phraseSelect);
    setEnableTouch(false);
    setActiveOpacity(true);
    if (report === data.correct_answer) {
      totalAnswers.current += 1;
      totalAnswersRef.current += 1;
      return setIsCorrect(true);
    }
    totalAnswers.current += 1;
    totalWrongRef.current += 1;
    return setIsCorrect(false);
  
  
 ``` 
  
 
 ## Dependências
 - Algumas dependências importantes
 - [uuid](https://github.com/eugenehp/react-native-uuid#readme), para gerar id aleatórios.
 - [xhelper](https://github.com/ptelad/react-native-iphone-x-helper#readme) para lidar com a diferença entre os  hardware   IOS. 
 - [font-size-responsive](https://github.com/heyman333/react-native-responsive-fontsize/blob/master/README.md) para lidar com a diferença entre as fontes conforme as dpi
 - [async storage](https://react-native-async-storage.github.io/async-storage/docs/install/) para lidar com o storage do celular.
 - [axios](https://axios-http.com/docs/intro) para lidar com requisições http e https.
 - [styled-components](https://styled-components.com/) ótima lib para lidar com estilos.
 - [gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/) lidar com os comportamentos nativos do sistema operacional
 - [react-navigation](https://reactnavigation.org/) lidar com a navegação no app





