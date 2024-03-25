import './Avatar.css';

interface AvatarProps {
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
    imgPath: string;
}

// Chip component definition
const Avatar = ({ label, imgPath }: AvatarProps) => {

    console.log(label, imgPath);
    return (<>
    
    </>);
};
  
export default Avatar;