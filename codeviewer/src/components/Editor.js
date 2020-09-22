import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/elegant.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor({displayName, language, value, onChange}) {
    function handleChange(editor, data, value){
        onChange(value)
    }
    return (
        <div className="editor-container">
            <div className="editor-title">
                {displayName}
                <button>O/C</button>
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
