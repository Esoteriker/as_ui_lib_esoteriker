import './Chip.css';

interface ChipProps {
    /**
     * Label text
     */
    label: string;
    /**
     * Avatar image URL
     * @default undefined
     * 
     */
    avatar?: string;
    /**
     * click handler
     * @Optional
     */
    onDelete?: () => void;
}

// Chip 组件定义
const Chip = ({ label, avatar, onDelete }: ChipProps) => {
  return (
    <div className="chip">
      {avatar && <img src={avatar} alt="Avatar" className="chip-avatar" />}
      <span className="chip-label">{label}</span>
      {onDelete && (
        <button className="chip-delete" onClick={onDelete}>
          x
        </button>
      )}
    </div>
  );
};

export default Chip;
