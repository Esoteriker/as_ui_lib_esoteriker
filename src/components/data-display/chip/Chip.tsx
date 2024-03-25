import './Chip.css';

interface ChipProps {
    /**
     * Label text
     * @default 'label'
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

// Chip component definition
const Chip = ({ label, avatar, onDelete }: ChipProps) => {
  return (
    <div className="chip">
      {avatar && <img src={avatar} alt="Avatar" className="chip-avatar" />}
      <span className="chip-label">{label}</span>
      {onDelete !== undefined ? (
        <button className="chip-delete" onClick={onDelete}>
          x
        </button>
      ): null}
    </div>
  );
};

export default Chip;
