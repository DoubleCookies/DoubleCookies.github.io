import React from 'react';
import StartTextLabel from '../StartTextLabel';
import ResultLabel from '../ResultLabel';
import CustomLabel from '../CustomLabel';

class ReplaceText extends React.Component<> {
    constructor(props) {
        super(props);

        this.state = {
            startValue: '',
            replaceStart: '',
            replaceFinish: '',
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
                            placeholder="qwertyuiop"
                            onChange={this.updateStartValue.bind(this)}
                            rows={10}
                        />
                        <div style={{ margin: 10 }}>
                            <CustomLabel name="find" />
                            <input
                                className="form-input"
                                placeholder="uiop"
                                onChange={this.handleReplaceStart.bind(this)}
                                type="text"
                            />
                            <br />
                            <CustomLabel name="replaceWith" />
                            <input
                                className="form-input"
                                placeholder="Asdf"
                                onChange={this.handleReplaceFinish.bind(this)}
                                type="text"
                            />
                        </div>
                    </div>
                    <div style={{ flexDirection: 'column', flexBasis: '50%' }}>
                        <ResultLabel />
                        <textarea
                            className="form-text-area"
                            placeholder="qwertyAsdf"
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

    async handleReplaceStart(event) {
        await this.setState({
            replaceStart: event.target.value,
        });
        this.replaceText();
    }

    async handleReplaceFinish(event) {
        await this.setState({
            replaceFinish: event.target.value,
        });
        this.replaceText();
    }

    replaceText() {
        const { startValue, replaceStart, replaceFinish } = this.state;
        if (replaceStart) {
            const resultString = startValue.replaceAll(replaceStart, replaceFinish);
            this.setState({
                finishValue: resultString,
            });
        } else {
        }
    }
}

export default ReplaceText;
