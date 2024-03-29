import React from 'react';
import StartTextLabel from '../StartTextLabel';
import ResultLabel from '../ResultLabel';

class NavboxGenerator extends React.Component<> {
    constructor(props) {
        super(props);

        this.state = {
            startValue: '',
            finishValue: '',
        };
    }

    render() {
        const { description } = this.props;
        const { finishValue } = this.state;
        return (
            <form>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ flexDirection: 'column', flexBasis: '50%' }}>
                        <StartTextLabel />
                        <textarea
                            className="form-text-area"
                            placeholder="abc&#10;qwerty&#10;hello"
                            onChange={this.updateStartValue.bind(this)}
                            rows={10}
                        />
                    </div>
                    <div style={{ flexDirection: 'column', flexBasis: '50%' }}>
                        <ResultLabel />
                        <textarea
                            className="form-text-area"
                            placeholder="[[abc]] • [[qwerty]] • [[hello]]"
                            value={finishValue}
                            readOnly={true}
                            rows={10}
                        />
                    </div>
                </div>
                <hr className="gradient-border" />
                {description}
            </form>
        );
    }

    async updateStartValue(event) {
        await this.setState({
            startValue: event.target.value,
        });
        this.replaceText();
    }

    replaceText() {
        const { startValue } = this.state;
        const stringsArray = startValue.split('\n').filter((item) => item.length > 0);
        let resultString = '';
        for (const str of stringsArray) {
            resultString += '[[' + str + ']] • ';
        }
        resultString = resultString.substring(0, resultString.length - 3);
        this.setState({
            finishValue: resultString,
        });
    }
}

export default NavboxGenerator;
