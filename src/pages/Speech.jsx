import React from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";

const SpeechRecognitionComponent = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <div>Browser doesn't support speech recognition.</div>;
    }

    return (
        <div>
            <button onClick={() => { SpeechRecognition.startListening({ continuous: true }) }}>Start Listening</button>
            <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
            <button onClick={resetTranscript}>Reset Transcript</button>
            <p>Listening: {listening ? "Yes" : "No"}</p>
            <p>Transcript: {transcript}</p>
        </div>
    );
};

export default SpeechRecognitionComponent;
