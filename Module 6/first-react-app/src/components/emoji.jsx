import {useState} from "react"

function Emoji() {

    const [emoji, setEmoji = useState('')]
    
    const handleSwitchEmoji = () => {

        let newEmoji = emoji === ''