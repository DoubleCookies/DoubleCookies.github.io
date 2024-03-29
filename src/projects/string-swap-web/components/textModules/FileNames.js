import React from 'react';
import StartTextLabel from '../StartTextLabel';
import ResultLabel from '../ResultLabel';

class FileNames extends React.Component<> {
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
                            placeholder="1 100%&#10;1 100%&#10;3&#10;3.jpg&#10;3.jpg&#10;4&#10;4.jpg"
                            onChange={this.updateStartValue.bind(this)}
                            rows={10}
                        />
                    </div>
                    <div style={{ flexDirection: 'column', flexBasis: '50%' }}>
                        <ResultLabel />
                        <textarea
                            className="form-text-area"
                            placeholder="1 100%&#10;3.jpg&#10;4.jpg"
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
        if (!startValue) {
            return;
        }
        const stringsArray = startValue
            .split('\n')
            .filter((item) => item.length > 0)
            .filter((_, index) => index % 2 === 1);
        const resultString = stringsArray.join('\n');
        this.setState({
            finishValue: resultString,
        });
    }
}

export default FileNames;
