import { describe, PropTypes } from 'react-desc';
import { getAvailableAtBadge } from '../../utils/mixins';
export var doc = function doc(RadioButton) {
  var DocumentedRadioButton = describe(RadioButton).availableAt(getAvailableAtBadge('RadioButton', 'Input')).description('A radio button control.').details("RadioButton should typically not be used directly.\n      Instead, use RadioButtonGroup.").usage("import { RadioButton } from 'grommet';\n<RadioButton />").intrinsicElement('input');
  DocumentedRadioButton.propTypes = {
    a11yTitle: PropTypes.string.description("Custom label to be used by screen readers.\n      When provided, an aria-label will be added to the element."),
    checked: PropTypes.bool.description('Same as React <input checked={} />'),
    children: PropTypes.func.description("Function that will be called to render the visual representation.\n      It will be passed an object indicating whether the button is checked. It\n      should return a react element.\n      For example:\n      `children={({ checked }) => <Box ...>{...}</Box>}`\n      "),
    disabled: PropTypes.bool.description("Same as React <input disabled={} />. Also adds a hidden input element\nwith the same name so form submissions work."),
    id: PropTypes.string.description('The DOM id attribute value to use for the underlying <input/> element.'),
    label: PropTypes.node.description('Label text to place next to the control.'),
    name: PropTypes.string.description("The DOM name attribute value to use for the underlying <input/>\n       element.").isRequired,
    onChange: PropTypes.func.description("Function that will be called when the user clicks the radio button. It\n      will be passed a React event object. The current state can be accessed\n      via event.target.checked. Same as React <input onChange={} />.")
  };
  return DocumentedRadioButton;
};
export var themeDoc = {
  'global.colors.control': {
    description: "The default color of the border surrounding \n    the checked icon in RadioButton checked state.",
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ dark: 'accent-1', light: 'brand'}"
  },
  'radioButton.border.color': {
    description: 'The color of the border of the Radio Button.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{dark: 'rgba(255, 255, 255, 0.5), light: 'rgba(0, 0, 0, 0.15)}"
  },
  'radioButton.border.width': {
    description: 'The width size of the border of the RadioButton.',
    type: 'string',
    defaultValue: '2px'
  },
  'radioButton.check.background.color': {
    description: 'The background color of the checked icon in the RadioButton.',
    type: 'string | {dark: string, light: string}',
    defaultValue: 'undefined'
  },
  'radioButton.check.color': {
    description: 'The color of the checked icon in the RadioButton.',
    type: 'string | { dark: string, light: string }',
    defaultValue: 'undefined'
  },
  'radioButton.check.extend': {
    description: 'Any additional style for the checked RadioButton.',
    type: 'string | (props) => {}'
  },
  'radioButton.check.radius': {
    description: 'The border-radius of the RadioButton.',
    type: 'string',
    defaultValue: '100%'
  },
  'radioButton.color': {
    description: "The color of the border surrounding the checked \n    icon in RadioButton checked state.",
    type: 'string | { dark: string, light: string }',
    defaultValue: 'undefined'
  },
  'radioButton.container.extend': {
    description: "Any additional style for the container around \n    the radio button and its label.",
    type: 'string | (props) => {}',
    defaultValue: 'undefined'
  },
  'radioButton.extend': {
    description: 'Any additional style for the radio button itself.',
    type: 'string | (props) => {}'
  },
  'radioButton.font.weight': {
    description: 'The font weight of the label.',
    type: 'number | string',
    defaultValue: undefined
  },
  'radioButton.gap': {
    description: 'The gap between the label and the RadioButton itself.',
    type: 'string',
    defaultValue: 'small'
  },
  'radioButton.hover.background.color': {
    description: "The background color of the Box surrounding the RadioButton\n    when hovered over.",
    type: 'string | { dark: string, light: string }',
    defaultValue: 'undefined'
  },
  'radioButton.hover.border.color': {
    description: "The color of the RadioButton border when hovered over.",
    type: 'string | { dark: string, light: string }',
    defaultValue: '{dark: white, light: black}'
  },
  'radioButton.icon.extend': {
    description: 'Any additional style for the RadioButton icon.',
    type: 'string | (props) => {}'
  },
  'radioButton.icon.size': {
    description: 'The size of the icon in the RadioButton.',
    type: 'string'
  },
  'radioButton.icons.circle': {
    description: 'The icon to replace the inner checked circle.',
    type: 'React.Element',
    defaultValue: undefined
  },
  'radioButton.size': {
    description: 'The size of the RadioButton.',
    type: 'string',
    defaultValue: '24px'
  }
};