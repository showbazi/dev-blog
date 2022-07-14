import codes from './Codes';
import embeddedComponents from './Embeds';
import Texts from './Texts';

const MdxComponents = {...Texts, ...embeddedComponents, ...codes};

export default MdxComponents;