import Component from '../../component.js';

class Crossword extends Component {
    constructor() {
        super();
        this.answer = [];
        this.trueAnswer1 = 'кот';
        this.trueAnswer2 = 'ток';
        this.trueAnswer3 = 'лоток';
        this.trueAnswer4 = 'лото';
        this.trueAnswer5 = 'толк';
        this.trueAnswer6 = 'откол';
        this.trueAnswer7 = 'лот';

        this.cat = document.getElementsByClassName('cat');
        this.amperage = document.getElementsByClassName('amperage');
        this.tray = document.getElementsByClassName('tray');
        this.lotto = document.getElementsByClassName('lotto');
        this.explanatory = document.getElementsByClassName('explanatory');
        this.spallation = document.getElementsByClassName('spallation');
        this.lot = document.getElementsByClassName('lot');
        this.startButton = document.getElementById('start');
    }
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="content">
              <div id="first-word">
                  <div class="cell">
                      <p class="cat">К</p>
                  </div>
                  <div class="cell">
                      <p class="cat">О</p>
                  </div>
                  <div class="cell">
                      <p class="cat amperage">Т</p>
                  </div>
              </div>

              <div id="second-word">
                  <div class="cell">
                      <p class="amperage">О</p>
                  </div>
              </div>

              <div id="third-word">
                  <div class="cell">
                      <p class="tray lotto">Л</p>
                  </div>
                  <div class="cell">
                      <p class="tray">О</p>
                  </div>
                  <div class="cell">
                      <p class="tray">Т</p>
                  </div>
                  <div class="cell">
                      <p class="tray spallation">О</p>
                  </div>
                  <div class="cell">
                      <p class="tray amperage">К</p>
                  </div>
              </div>
              <div>
                  <div class="cell">
                      <p class="lotto">О</p>
                  </div>
                  <div class="sixth-word">
                      <div class="cell">
                          <p class="spallation">Т</p>
                      </div>
                  </div>
              </div>
              <div>
                  <div class="cell">
                      <p class="explanatory lotto">Т</p>
                  </div>
                  <div class="cell">
                      <p class="explanatory">О</p>
                  </div>
                  <div class="cell">
                      <p class="explanatory">Л</p>
                  </div>
                  <div class="cell">
                      <p class="explanatory spallation">К</p>
                  </div>
              </div>
              <div>
                  <div class="cell">
                      <p class="lotto">О</p>
                  </div>
                  <div class="sixth-word">
                      <div class="cell">
                          <p class="spallation">О</p>
                      </div>
                  </div>
              </div>
              <div>
                  <div id="fake-cell" class="cell">X</div>
                  <div class="sixth-word">
                      <div class="cell">
                          <p class="lot spallation">Л</p>
                      </div>
                      <div class="cell">
                          <p class="lot">О</p>
                      </div>
                      <div class="cell">
                          <p class="lot">Т</p>
                         </div>
                     </div>
                  </div>
             </div>
          <div class="main-buttons">
              <div id="letter-number"></div>
              <button type="button" id="check">ПРОВЕРКА</button>
          </div>
          <div id="second-display">
              <div id="letters" class="letters-area">
                  <div class="letter-answer">О</div>
                  <div class="letter-answer">Л</div>
                  <div class="letter-answer">Т</div>
                  <div class="letter-answer">К</div>
                  <div class="letter-answer">О</div>
              </div>
          </div>
      `);
        });
    }

    afterRender() {
        if (JSON.parse(localStorage.getItem('msSeconds')) === null) {
            localStorage.setItem('minutes', 0);
            localStorage.setItem('seconds', 0);
            localStorage.setItem('msSeconds', 0);
        }
        if (localStorage.getItem('answers') == null) {
            localStorage.setItem('answers', JSON.stringify([]));
        } else {
            let answers = JSON.parse(localStorage.getItem('answers'));
            for (let i = 0; i < answers.length; i++) {
                let characters = document.getElementsByClassName(answers[i]);
                for (let j = 0; j < characters.length; j++) {
                    characters[j].classList.add('visible');
                }
            }
        }
        this.startTimer();
        this.setActions();
    }

    setActions() {
        let letters = document.getElementById('letters');
        let checkButton = document.getElementById('check');
        let letterNumber = document.getElementById('letter-number');

        letters.addEventListener('click', (event) => {
            let target = event.target;
            let targetText = target.innerHTML.toLowerCase();
            if (!target.classList.contains('active')) {
                this.answer.push(targetText);
                target.classList.add('active');
                letterNumber.innerHTML += targetText;
            }
        });

        checkButton.addEventListener('click', () => {
            this.checkAnswer();
            let letters = document.getElementsByClassName('letter-answer');
            for (let i = 0; i < letters.length; i++) {
                letters[i].classList.remove('active');
            }
        });
    }

    checkAnswer() {
        let joinedAnswer = this.answer.join('');
        switch (joinedAnswer) {
            case this.trueAnswer1:
                this.showWord(this.cat, 'cat');
                break;
            case this.trueAnswer2:
                this.showWord(this.amperage, 'amperage');
                break;
            case this.trueAnswer3:
                this.showWord(this.tray, 'tray');
                break;
            case this.trueAnswer4:
                this.showWord(this.lotto, 'lotto');
                break;
            case this.trueAnswer5:
                this.showWord(this.explanatory, 'explanatory');
                break;
            case this.trueAnswer6:
                this.showWord(this.spallation, 'spallation');
                break;
            case this.trueAnswer7:
                this.showWord(this.lot, 'lot');
                break;
            default:
                this.wrongAnswer();
        }
    }

    showWord(elements, wordClass) {
        let letterNumber = document.getElementById('letter-number');
        this.animationAnswer();
        setTimeout(() => {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add('visible');
            }
        }, 1000);
        this.answer = [];
        letterNumber.innerHTML = '';
        this.setInLs(wordClass);
    }

    setInLs(wordClass) {
        let answered = JSON.parse(localStorage.getItem('answers'));
        if (answered != '') {
            answered.push(wordClass);
        } else {
            answered = [wordClass];
        }
        localStorage.setItem('answers', JSON.stringify(answered));
        if (answered.length == 7) {
            this.endGame();
        }
    }

    wrongAnswer() {
        let letterNumber = document.getElementById('letter-number');
        swal('ОШИБКА', 'Введите другое слово', 'error');
        this.answer = [];
        letterNumber.innerHTML = '';
    }

    animationAnswer() {
        anime({
            targets: '#letter-number',
            translateX: 100,
            translateY: -440,
            scale: 1,
            autopaly: false,
            direction: 'alternate',
            rotate: '10turn'
        });
    }

    startTimer() {
        let intervalId = setInterval(function() {
            let msSeconds = +JSON.parse(localStorage.getItem('msSeconds'));
            msSeconds = msSeconds + 1;
            localStorage.setItem('msSeconds', msSeconds);
            let seconds = +JSON.parse(localStorage.getItem('seconds'));
            let minutes = +JSON.parse(localStorage.getItem('minutes'));
            if (msSeconds == 99) {
                seconds = seconds + 1;
                localStorage.setItem('seconds', seconds);
                localStorage.setItem('msSeconds', 0);
            }
            if (seconds == 60) {
                minutes = minutes + 1;
                localStorage.setItem('minutes', minutes);
                localStorage.setItem('seconds', 0);
            }
            localStorage.setItem('intervalId', intervalId);
        }, 10);
    }

    stopTimer() {
        let intervalId = localStorage.getItem('intervalId');
        clearInterval(intervalId);
    }

    endGame() {
        swal({
            title: 'Поздравляем!',
            text: `Вы справились за  ${JSON.parse(localStorage.getItem('minutes'))} : ${JSON.parse(localStorage.getItem('seconds'))} : ${JSON.parse(localStorage.getItem('msSeconds'))}`,
            icon: 'success',
            button: 'OK',
        });
        this.stopTimer();
        localStorage.clear();
    }
}
export default Crossword;