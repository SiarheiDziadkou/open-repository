import Component from '../../component.js';

class Home extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
        <div class="content">
        <div class="info">
            <div>
                <h1>Добро пожаловать</h1>
            </div>
            <div class="welcome">
                <p>Предлагаем вам немного отвлечься.</p>
                <p>Отдохнуть и поиграть в наш кроссворд.</p>
                <p>Проверить уровень вашей эрудиции и словарный запас.</p>
            </div>
            <div>
                <h1>Можете прочитать руководство</h1>
                <a href="#/about"><button type="button" class="buttons">Прочитать информацию</button></a>
            </div>

            <div>
                <h1>Или начать сразу игру</h1>
                <a href="#/crossword"><button type="button" class="buttons">Перейти к игре</button></a>
            </div>
        </div>
    </div>
        `);
        });
    }
}

export default Home;