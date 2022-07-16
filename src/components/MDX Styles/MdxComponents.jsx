import codes from './Codes';
import Images from './Images';
import lists from './Lists';
import Texts from './Texts';

const MdxComponents = {...Texts, ...codes, ...lists, ...Images};

export default MdxComponents;