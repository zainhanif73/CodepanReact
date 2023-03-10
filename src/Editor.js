import React from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'

export default function Editor(props) {
    const {
        language,
        displayName,
        onChange,
        value
    } = props;

    function handleChange(editor,data,value){
        onChange(value)
    }

    return (
        <div className="editor-container" style={{width:"282px"}}>
            <div className="editor-title" 
            style={{padding: "inherit"}}>
                {displayName}
            </div>
            <ControlledEditor
            onBeforeChange={handleChange}
            value={value}
            className="code-mirror-wrapper"
            style={{width:"276px"}}
            options={{
                lineWrapping:true,
                lint:true,
                mode:language,
                lineNumbers:true,
                theme:"material"
            }}
            />
        </div>
    )
    }
