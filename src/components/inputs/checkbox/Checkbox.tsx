import './Checkbox.css';

// 定义 Checkbox 的 Props 接口
interface CheckboxProps {
  size?: 'small' | 'medium' | 'large';
  shape?: 'round' | 'square';
  required?: boolean;
  disabled?: boolean;
}

const Checkbox = ({
  size,
  shape,
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
