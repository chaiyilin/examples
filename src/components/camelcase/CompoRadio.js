import React from 'react';
import { camelCase as camel } from 'lodash';
import { default as decamel } from 'decamelize';

const SPACE = 'space';
const CAMEL = 'camel';
const UNDERSCORE = 'underscore';

export class CompoRadio extends React.Component {
  state = {
    source: '',
    target: '',
    convertType: CAMEL
  };

  onSourceChange = e => {
    const source = e.target.value.toLowerCase();
    this.setState({
      source: source,
      target: this.convert(source, this.state.convertType)
    });
  };

  onConvertTypeChange = e => {
    const convertType = e.target.value;
    this.setState({
      convertType: convertType,
      target: this.convert(this.state.source, convertType)
    });
  };

  convert = (source, convertType) => {
    let target;
    if (source) {
      switch (convertType) {
        case SPACE:
          target = decamel(camel(source), ' ');
          break;
        case CAMEL:
          target = camel(source);
          break;
        case UNDERSCORE:
          target = decamel(camel(source), '_');
          break;
        default:
          break;
      }
      return target;
    }
  };

  render() {
    return (
      <div>
        <div>
          <input type="text" onChange={this.onSourceChange} />
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="convertType"
              value={SPACE}
              checked={this.state.convertType === SPACE}
              onChange={this.onConvertTypeChange}
            />space
          </label>
          <label>
            <input
              type="radio"
              name="convertType"
              value={UNDERSCORE}
              checked={this.state.convertType === UNDERSCORE}
              onChange={this.onConvertTypeChange}
            />underscore
          </label>

          <label>
            <input
              type="radio"
              name="convertType"
              value={CAMEL}
              checked={this.state.convertType === CAMEL}
              onChange={this.onConvertTypeChange}
            />camel
          </label>
        </div>

        <div>
          <input type="text" disabled value={this.state.target} />
        </div>
      </div>
    );
  }
}
