import Component from '../../views/component.js';

class Header extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
                <div id="header">
                    <div>
                        <a href="#/"><button type="button" class="header-buttons">Главная</button></a>
                        <a href="#/about"><button type="button" class="header-buttons">Информация</button></a>
                        <a href="#/crossword"><button type="button" class="header-buttons">Кроссворд</button></a>
                    </div>
                </div>
            `);
        });
    }
}

export default Header;