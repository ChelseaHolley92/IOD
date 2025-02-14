import { useState } from "react";

function MoodChanger() {

const [mood, setMood] = useState('happy');

return (
<div className="MoodChanger componentBox">
Current Mood: {mood}
</div>
    <button onClick={() => setMood('tired')}>
        Stay up Late
        </button>

        <button onClick={() => setMood('hungry')}>
            Skipped Lunch
        </button>

<button onClick={() => setMood('optimistic')}> 
    Got good sleep
    </button>
       

    </div>
 ) }
export default MoodChanger;