import React, { useState }from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/elegant.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare, faPlusSquare} from '@fortawesome/free-solid-svg-icons'

export default function Editor({displayName, language, value, onChange}) {
    const [ open, setOpen ] = useState(true);
    function handleChange(editor, data, value){
        onChange(value)
    }
    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                {displayName}
                <button className="btn" type="button" onClick={()=> setOpen(prevOpen => !prevOpen)}>
                <FontAwesomeIcon icon={ open ? faMinusSquare : faPlusSquare}/>
                </button>
            </div>
            <ControlledEditor
                className="code-mirror-wrapper"
                onBeforeChange={handleChange}
                value={value}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'elegant',
                    lineNumbers: true,
                }}
            />
        </div>
    )
}
