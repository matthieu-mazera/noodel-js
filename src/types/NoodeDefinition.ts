import NoodeOptions from './NoodeOptions';
import ComponentContent from './ComponentContent';

/**
 * Object template used for noode creation and insertion.
 */
export default interface NoodeDefinition {
    /**
     * ID of this noode. If provided, must be unique and should NOT start with "_" .
     */
    id?: string;
    /**
     * Children noodes of this noode. Defaults to an empty array.
     */
    children?: NoodeDefinition[];
    /**
     * If provided, will mark this noode as active, overriding the default (first child).
     * If multiple siblings are marked as active, only the first one will take effect.
     */
    isActive?: boolean;
    /**
     * Content of this noode. If is a string, will be inserted as innerHTML of the nd-noode element.
     * Can also be a ComponentContent object that wraps a Vue component.
     */
    content?: string | ComponentContent;
    /**
     * Custom class(es) for this noode. Either a string of class names delimited by spaces
     * or an array.
     */
    className?: string | string[];
    /**
     * Custom styles for this noode. Either a string in inline style format
     * or an object in {"property": "value"} format.
     */
    style?: string | object;
    /**
     * Options for this noode.
     */
    options?: NoodeOptions;
    /**
     * Custom data to associate with this noode.
     */
    data?: any;
}
