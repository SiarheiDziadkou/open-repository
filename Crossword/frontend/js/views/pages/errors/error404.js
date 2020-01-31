import Component from '../../component.js';

class Error404 extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`                
                <h1 class="welcome"> Error 404 - Page Not Found</h1>
            `);
        });
    }
}

export default Error404;