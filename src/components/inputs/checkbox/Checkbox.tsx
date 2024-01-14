import './Checkbox.css';

// 定义 Checkbox 的 Props 接口
interface CheckboxProps {
  /**
   * Size of the checkbox.
   * 'small', 'medium', or 'large' are the allowed values.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Shape of the checkbox.
   * It can be either 'round' or 'square'.
   */
  shape?: 'round' | 'square';

  /**
   * If true, the checkbox is marked as required.
   * This could indicate a mandatory field in a form.
   */
  required?: boolean;

  /**
   * If true, the checkbox will be disabled.
   * A disabled checkbox is not interactive and typically displayed in a grayed-out state.
   */
  disabled?: boolean;
}

const Checkbox = ({
  size = 'medium',
  shape = 'square',
  required,
  disabled,
  ...props
}: CheckboxProps) => {
    const sizeClass = size ? `checkbox--${size}` : '';
    const shapeClass = shape === 'round' ? 'checkbox--round' : '';

    return (
        <label className={`checkbox ${sizeClass} ${shapeClass}`}>
            <input
                type="checkbox"
                required={required}
                disabled={disabled}
                {...props}
            />
            <span className="checkbox-custom"></span>
        </label>
    );
};

export default Checkbox;
