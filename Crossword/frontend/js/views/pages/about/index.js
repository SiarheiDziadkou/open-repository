import Component from '../../component.js';

class About extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="content">
            <div class="info">
                <div class="welcome">
                    <p>С помощью доступных букв, вам необходимо составить слова длиной от 3 до 5 букв.</p>
                    <img src="images/Buttons.png" alt="buttons">
                </div>
                <div class="welcome">
                    <p>Каждую букву можно использовать только один раз.</p>
                </div>
                <div class="welcome">
                    <p>После набора слова нажмите кнопку "ПРОВЕРКА"</p>
                    <img src="images/Check.png" alt="check">
                </div>
                <div class="welcome">
                    <p>Если слово набрано верно &mdash; оно отобразиться на игровом поле.</p>
                </div>
                <div class="welcome">
                    <p>Если вы допустили ошибку при наборе &mdash; нажмите кнопку "ПРОВЕРКА"</p>
                </div>
                <div>
                    <h1>Желаем вам успехов</h1>
                    <a href="#/crossword"><button type="button" class="buttons">Перейти к игре</button></a>
                </div>
            </div>
        </div>
            `);
        });
    }
}

export default About;