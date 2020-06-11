import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Chip from '../../Chip';
import { action } from '@storybook/addon-actions';
const BooleanValue = [true, false];
export const Action = () => {

  const icon = text(
    'icon', 'assessment'
  );
  const label = text(
    'label',
    'Action'
  );
  const onCloseHandler = (name?: any) => {
    return action(`onClose: ${name}`)();
  };
  const onClickHandler = (name?: any) => {
    return action(`onClick: ${name}`)();
  };
  const style = {
    display: 'flex',
  };

  const innerStyle = {
    marginRight: '5%',
  };
  return (
    <div style={style}>
      {
        BooleanValue.map((booleanvalue, ind) => {
          return (
            <div key={ind} style={innerStyle}>
              <Chip
                icon={icon}
                label={label}
                disabled={booleanvalue}
                onClose={onCloseHandler}
                onClick={onClickHandler}
                type="action"
              />
            </div>
          );
        })
      }
    </div>
  );
};
export default {
  title: 'Atoms|Chip/Variants',
  component: Chip,
  parameters: {
    docs: {
      docPage: {
        title: 'Chip'
      }
    }
  }
};
