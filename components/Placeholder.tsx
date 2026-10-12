import {placeholder,type PlaceholderKey} from '@/content/placeholders';
export default function Placeholder({name}:{name:PlaceholderKey}){return <span className="placeholder">{placeholder(name)}</span>}
