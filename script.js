document.addEventListener("DOMContentLoaded", () => {
  const choices = [
      [
        "Я не чувствую себя расстроенным, печальным.",
        "Я расстроен.",
        "Я все время расстроен и не могу от этого отключиться.",
        "Я настолько расстроен и несчастлив, что не могу это выдержать.",
      ],
      [
        "Я не тревожусь о своем будущем.",
        "Я чувствую, что озадачен будущим.",
        "Я чувствую, что меня ничего не ждет в будущем.",
        "Мое будущее безнадежно, и ничто не может измениться к лучшему.",
      ],
      [
        "Я не чувствую себя неудачником.",
        "Я чувствую, что терпел больше неудач, чем другие люди.",
        "Когда я оглядываюсь на свою жизнь, я вижу в ней много неудач.",
        "Я чувствую, что как личность я - полный неудачник.",
      ],
      [
        "Я получаю столько же удовлетворения от жизни, как раньше.",
        "Я не получаю столько же удовлетворения от жизни, как раньше.",
        "Я больше не получаю удовлетворения ни от чего.",
        "Я полностью не удовлетворен жизнью и мне все надоело.",
      ],
      [
        "Я не чувствую себя в чем-нибудь виноватым.",
        "Достаточно часто я чувствую себя виноватым.",
        "Большую часть времени я чувствую себя виноватым.",
        "Я постоянно испытываю чувство вины.",
      ],
      [
        "Я не чувствую, что могу быть наказанным за что-либо.",
        "Я чувствую, что могу быть наказан.",
        "Я ожидаю, что могу быть наказан.",
        "Я чувствую себя уже наказанным.",
      ],
      [
        "Я не разочаровался в себе.",
        "Я разочаровался в себе.",
        "Я себе противен.",
        "Я себя ненавижу.",
      ],
      [
        "Я знаю, что я не хуже других.",
        "Я критикую себя за ошибки и слабости.",
        "Я все время обвиняю себя за свои поступки.",
        "Я виню себя во всем плохом, что происходит.",
      ],
      [
        "Я никогда не думал покончить с собой.",
        "Ко мне приходят мысли покончить с собой, но я не буду их осуществлять.",
        "Я хотел бы покончить с собой.",
        "Я бы убил себя, если бы представился случай.",
      ],
      [
        "Я плачу не больше, чем обычно.",
        "Сейчас я плачу чаще, чем раньше.",
        "Теперь я все время плачу.",
        "Раньше я мог плакать, а сейчас не могу, даже если мне хочется.",
      ],
      [
        "Сейчас я раздражителен не более, чем обычно.",
        "Я более легко раздражаюсь, чем раньше.",
        "Теперь я постоянно чувствую, что раздражен.",
        "Я стал равнодушен к вещам, которые меня раньше раздражали.",
      ],
      [
        "Я не утратил интереса к другим людям.",
        "Я меньше интересуюсь другими людьми, чем раньше.",
        "Я почти потерял интерес к другим людям.",
        "Я полностью утратил интерес к другим людям.",
      ],
      [
        "Я откладываю принятие решения иногда, как и раньше.",
        "Я откладываю принятие решения иногда, как и раньше.",
        "Мне труднее принимать решения, чем раньше.",
        "Я больше не могу принимать решения.",
      ],
      [
        "Я не чувствую, что выгляжу хуже, чем обычно.",
        "Меня тревожит, что я выгляжу старым и непривлекательным.",
        "Я знаю, что в моей внешности произошли существенные изменения, делающие меня непривлекательным.",
        "Я знаю, что выгляжу безобразно.",
      ],
      [
        "Я могу работать так же хорошо, как и раньше.",
        "Мне необходимо сделать дополнительное усилие, чтобы начать делать что-нибудь.",
        "Я с трудом заставляю себя делать что-либо.",
        "Я совсем не могу выполнять никакую работу.",
      ],
      [
        "Я сплю так же хорошо, как и раньше.",
        "Сейчас я сплю хуже, чем раньше.",
        "Я просыпаюсь на 1-2 часа раньше, и мне трудно заснуть опять.",
        "Я просыпаюсь на несколько часов раньше обычного и больше не могу заснуть.",
      ],
      [
        "Я устаю не больше, чем обычно.",
        "Теперь я устаю быстрее, чем раньше.",
        "Я устаю почти от всего, что я делаю.",
        "Я не могу ничего делать из-за усталости.",
      ],
      [
        "Мой аппетит не хуже, чем обычно.",
        "Мой аппетит стал хуже, чем раньше.",
        "Мой аппетит теперь значительно хуже.",
        "У меня вообще нет аппетита.",
      ],
      [
        "В последнее время я не похудел или потеря веса была незначительной.",
        "За последнее время я потерял более 2 кг.",
        "Я потерял более 5 кг.",
        "Я потерял более 7 кr.",
      ],
      [
        "Я беспокоюсь о своем здоровье не больше, чем обычно.",
        "Меня тревожат проблемы моего физического здоровья, такие, как боли, расстройство желудка, запоры и т.д.",
        "Я очень обеспокоен своим физическим состоянием, и мне трудно думать о чем-либо другом.",
        "Я настолько обеспокоен своим физическим состоянием, что больше ни о чем не могу думать.",
      ],
    ],
    results = [
      {
        min: 0,
        max: 9,
        text: "Отсутствие депрессивных симптомов, посещение психолога для решения жизненноважных задач в отношениях  развитии.",
      },
      {
        min: 10,
        max: 15,
        text: "Легкая депрессия (субдепрессия) рекомендуется посещение психолога.",
      },
      {
        min: 16,
        max: 19,
        text: "Умеренная депрессия, посещение психолога.",
      },
      {
        min: 20,
        max: 29,
        text: "Выраженная депрессия (средней тяжести) посещение психолога и психиатра.",
      },
      {
        min: 30,
        max: Infinity,
        text: "Тяжелая депрессия, посещение психиатра и в дополнение психолога.",
      },
    ],
    resultTypes = {
      result: 0,
      answers: 1
    },
    state = {
      debug: false,
      step: 0,
      total: 0,
      resultType: resultTypes.result,
      steps: [],
    },
    app = document.getElementById("app"),
    appError = app.querySelector("#app .card__error .content"),
    appHeader = app.querySelector("#app .card__header"),
    appContent = app.querySelector("#app .card__content"),
    appFooter = app.querySelector("#app .card__footer");
  class App {
    static get_template(name) {
      const template = document.createElement("div");
      template.innerHTML = document.getElementById(name + "Template").innerHTML;
      return template;
    }
    static get_step(index) {
      if (index !== undefined) {
        return state.steps[index];
      }
      return state.steps[state.step - 1];
    }
    static error(message) {
      appError.innerHTML = message;
      appError.classList.toggle("show", true);
      setTimeout(() => {
        appError.classList.toggle("show", false);
      }, 1500);
    }
  }

  init();

  function init() {
    _toggleScroll("hidden");
    renderCard();
    _fixMinSizesOfCard();
    state.steps = choices.map(_mapChoicesToStepStateMap);
    app.addEventListener("click", _clickHandler);

    function _mapChoicesToStepStateMap(stepChoices) {
      stepChoices.forEach((choice, index) => {
        stepChoices[index] = { text: choice, checked: false };
      });
      return stepChoices;
    }
    function _fixMinSizesOfCard() {
      const card = app.querySelector(".card");
      card.style.minWidth = card.offsetWidth + "px";
      card.style.minHeight = card.offsetHeight + "px";
    }
  }

  function _clickHandler(e) {
    const target = e.target;
    if (!target.dataset.action) {
      return;
    }
    switch (target.dataset.action) {
      case "next-step":
        _changeStep(parseInt(state.step) + 1);
        break;
      case "prev-step":
        _changeStep(parseInt(state.step) - 1);
        break;
      case "checkbox":
        App.get_step()[target.value].checked = target.checked;
        state.total = target.checked
          ? parseInt(state.total) + parseInt(target.value)
          : parseInt(state.total) - parseInt(target.value);
        renderCard();
        break;
      case "get-result":
        _changeStep("result");
        break;
      case "toggle-result":
        state.resultType = resultTypes.result === state.resultType ? resultTypes.answers : resultTypes.result;
        renderCard();
        break;
    }
  }

  function renderCard(part) {
    const questionIndex = state.step - 1;

    switch (part) {
      case "header":
        _updateHeader();
        break;
      case "content":
        _updateContent();
        break;
      case "footer":
        _updateFooter();
        break;
      default:
        _updateHeader();
        _updateContent();
        _updateFooter();
    }

    function _updateHeader() {
      const template = App.get_template("h2Header");
      template.querySelector("h2").innerHTML = "Шкала депрессии Бека";
      appHeader.innerHTML = template.innerHTML; 
      if (typeof state.step === "number" && state.step > 0){
        appHeader.classList.toggle("flex", true);
        appHeader.classList.toggle("items-center", true);
        appHeader.innerHTML = `[${state.step}/${state.steps.length}]` + appHeader.innerHTML; 
      } else{
        appHeader.classList.toggle("flex", false);
        appHeader.classList.toggle("items-center", false);
      }
      if (state.debug) {
        _updateDebugData();
        function _updateDebugData() {
          const template = App.get_template("debugData");
          template.querySelector(".step").innerHTML = state.step;
          template.querySelector(".total").innerHTML = state.total;
          appHeader.innerHTML += template.innerHTML;
        }
      }
    }
    async function _updateContent(contentTemplate) {
      if (state.step === 0) {
        contentTemplate = App.get_template("contentStart");
      } else if (questionIndex < choices.length) {
        contentTemplate = App.get_template("contentStep");
        contentTemplate.querySelectorAll("label").forEach((element, index) => {
          const checked = App.get_step()[index].checked;
          element.querySelector("span").innerHTML = App.get_step()[index].text;
          if (checked) {
            const input = element.querySelector("input");
            input.outerHTML = input.outerHTML.slice(0, -1) + " checked>";
          }
        });
      } else if (state.step === "result") {
        if (state.resultType === resultTypes.result) {
          contentTemplate = App.get_template("contentResult");
          contentTemplate.querySelector("blockquote").innerHTML = _getResult();
          function _getResult() {
            return results.filter(
              (e) => e.min <= state.total && e.max >= state.total
              )[0].text;
            }
        } else {
          contentTemplate = document.createElement('div');

          state.steps.forEach((step, index) => {
            const stepElement = document.createElement('div');
            stepElement.classList.toggle('my-1rem', true);
            stepElement.innerHTML += `<div>${index+1}</div>`
            step.forEach(answer => {
              const answerRow = App.get_template("contentResultAnswerRow");
              answerRow.querySelector('span').innerHTML = answer.text;
              if (!answer.checked){
                answerRow.querySelector('svg').classList.toggle('transparent', true);
              }
              stepElement.appendChild(answerRow);
            })
            contentTemplate.appendChild(stepElement)
          })
        }
      }
      appContent.innerHTML = contentTemplate.innerHTML;
    }
    function _updateFooter(footerTemplate) {
      if (state.step === 0) {
        footerTemplate = App.get_template("footerStepStart");
      } else if (questionIndex < choices.length - 1) {
        footerTemplate = App.get_template("footerStepMiddle");
      } else if (questionIndex === choices.length - 1) {
        footerTemplate = App.get_template("footerStepEnd");
      } else if (state.step === "result") {
        footerTemplate = App.get_template("footerResult");
        if (state.resultType === resultTypes.answers) {
          footerTemplate.querySelector('button').innerHTML = 'Ваш результат';
        }
        appFooter.classList.toggle("border-top", false);
      }
      appFooter.innerHTML = footerTemplate.innerHTML;
    }
  }

  function _changeStep(newVal) {
    const stepIndex = parseInt(state.step) - 1,
      oldVal = state.step;
    let error;

    if (typeof newVal === "number") {
      if (_needAnswer() && _isForward()) {
        if (_countAnswers() > 0) {
          state.step = newVal;
        } else {
          state.step = oldVal;
          error = "Для продолжения - выберите один из вариантов.";
        }
      } else {
        state.step = newVal;
      }
    } else if (_countAnswers() > 0) {
      state.step = newVal;
    } else {
      error = "Для продолжения - выберите один из вариантов.";
    }

    if (error) {
      App.error(error);
    }

    renderCard();

    function _isForward() {
      return newVal > oldVal;
    }
    function _needAnswer() {
      return oldVal > 0 && newVal - 1 <= state.steps.length;
    }
    function _countAnswers() {
      return App.get_step(stepIndex)
        .map((step) => step.checked)
        .reduce((a, b) => a + b);
    }
  }

  function _toggleScroll(val) {
    const oldVal = document.body.style.overflow;
    let newVal;
    if (!!val) {
      newVal = val;
    } else if (oldVal != "hidden") {
      newVal = "hidden";
    } else {
      newVal = "auto";
    }
    document.body.style.overflow = newVal;
  }
});
