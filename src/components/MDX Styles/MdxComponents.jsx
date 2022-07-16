import codes from './Codes';
import embeddedComponents from './Embeds';
import Images from './Images';
import lists from './Lists';
import Texts from './Texts';

const MdxComponents = {...Texts, ...embeddedComponents, ...codes, ...lists, ...Images};

export default MdxComponents;