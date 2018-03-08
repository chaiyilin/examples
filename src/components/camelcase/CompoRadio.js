import React from 'react';
import { compose, withHandlers, withState, lifecycle } from 'recompose';
import { camelCase as camel } from 'lodash';
import { default as decamel } from 'decamelize';

const SPACE = 'space';
const CAMEL = 'camel';
const UNDERSCORE = 'underscore';
const DASH = 'DASH';

const convert = (source, convertType) => {
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
      case DASH:
        target = decamel(camel(source), '-');
        break;
      default:
        break;
    }
    return target;
  }
};

export const CompoRadio = ({
  source,
  target,
  convertType,
  onSourceChange,
  onConvertTypeChange,
  onSubmit,
  onRef,
  focus
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <div>
          <input
            type="text"
            ref={onRef}
            value={source}
            onChange={onSourceChange}
          />
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="convertType"
              value={CAMEL}
              checked={convertType === CAMEL}
              onChange={onConvertTypeChange}
            />camel
          </label>

          <label>
            <input
              type="radio"
              name="convertType"
              value={SPACE}
              checked={convertType === SPACE}
              onChange={onConvertTypeChange}
            />space
          </label>
          <label>
            <input
              type="radio"
              name="convertType"
              value={UNDERSCORE}
              checked={convertType === UNDERSCORE}
              onChange={onConvertTypeChange}
            />underscore
          </label>

          <label>
            <input
              type="radio"
              name="convertType"
              value={DASH}
              checked={convertType === DASH}
              onChange={onConvertTypeChange}
            />dash
          </label>
        </div>

        <div>
          <input type="text" disabled value={target} />
        </div>
        {/* <input type="file" id="input" multiple /> */}
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

const enhance = compose(
  withState('source', 'setSource', ''),
  withState('target', 'setTarget', ''),
  withState('convertType', 'setConvertType', CAMEL),
  withHandlers(() => {
    let sourceInput = null;

    return {
      onRef: () => ref => (sourceInput = ref),
      focus: () => () => sourceInput.focus()
    };
  }),
  withHandlers({
    onSourceChange: ({ setSource, setTarget, convertType }) => e => {
      const source = e.target.value.toLowerCase();
      setSource(source);
      setTarget(convert(source, convertType));
    },
    onConvertTypeChange: ({ source, setConvertType, setTarget }) => e => {
      const convertType = e.target.value;
      setConvertType(convertType);
      setTarget(convert(source, convertType));
    },
    onSubmit: props => e => {
      e.preventDefault();
      console.log(props);
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.focus();
    }
  })
);

export default enhance(CompoRadio);
