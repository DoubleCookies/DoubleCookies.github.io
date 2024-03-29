import React from 'react';
import StartTextLabel from '../StartTextLabel';
import ResultLabel from '../ResultLabel';

class QuoteReplacement extends React.Component<> {
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
                            placeholder='"Hello there"'
                            onChange={this.updateStartValue.bind(this)}
                            rows={10}
                        />
                    </div>
                    <div style={{ flexDirection: 'column', flexBasis: '50%' }}>
                        <ResultLabel />
                        <textarea
                            className="form-text-area"
                            placeholder="«Hello there»"
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
        let resultString = startValue;
        let startQuote = true;
        if (!startValue) {
            return;
        }
        while (resultString.indexOf('"') > -1) {
            resultString = resultString.replace('"', startQuote ? '«' : '»');
            startQuote = !startQuote;
        }
        this.setState({
            finishValue: resultString,
        });
    }
}

export default QuoteReplacement;
