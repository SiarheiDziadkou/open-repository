import Component from '../../views/component.js';

class Footer extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div id="footer">
                <p>Developed by Siarhei Dziadkou</p>
                <p>@ All rights reserved 2020</p>
            </div>
            `);
        });
    }
}

export default Footer;