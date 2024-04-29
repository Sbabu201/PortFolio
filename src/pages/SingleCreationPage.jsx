import { useParams } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import parse from 'html-react-parser';
import { useState } from 'react';
import { MyCreations } from "../Constants"
const SingleCreationPage = () => {
    const [copiedIndex, setCopiedIndex] = useState(null);
    const [visibleIndex, setVisibleIndex] = useState(null);

    // Function to toggle the code visibility for a specific index
    const toggleCodeVisibility = (index) => {
        setVisibleIndex((prev) => (prev === index ? null : index)); // Toggle visibility for the specific index
    };

    const copyToClipboard = (text, index) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopiedIndex(index);
                setTimeout(() => setCopiedIndex(null), 2000);
            })
            .catch((err) => console.error("Error copying text: ", err));
    };

    const { id } = useParams();
    const items = MyCreations.filter((item) => item.id === Number(id));

    return (
        <div className='flex flex-col'>
            {items.map((item) => (
                <div className='flex flex-col gap-4 h-screen ' key={item.id}>
                    {item.items.map((value, index) => (
                        <div key={index} className='flex    border-b-2 min-h-[60%] border-purple-400 flex-col gap-4 w-full px-10'>
                            {/* Button to toggle code visibility */}
                            <button
                                className='bg-purple-900 text-white px-8 py-2 w-fit border-none border-radius-5'
                                onClick={() => toggleCodeVisibility(index)}
                            >
                                {visibleIndex === index ? 'Show Preview' : 'Show Code'}
                            </button>
                            <div className='flex flex-col gap-2'>
                                <span className='text-xl font-bold'>{value?.name}</span>
                                <span className='text-balance font-semibold'>{value?.description}</span>
                            </div>
                            <div className='w-full flex-col h-full flex items-center  gap-3 '>


                                {/* Conditionally render based on `visibleIndex` */}
                                {visibleIndex === index && (
                                    <button
                                        className={`text-sm font-times w-auto flex px-8 py-2 text-white ${copiedIndex === index ? 'from-purple-200 to-purple-600 bg-gradient-to-r ' : 'bg-purple-400'}`}
                                        onClick={() => copyToClipboard(value?.code, index)}
                                    >
                                        {copiedIndex === index ? 'Copied' : 'Copy'}
                                    </button>
                                )}
                                {visibleIndex === index ? (
                                    <SyntaxHighlighter language='javascript' style={materialDark}>
                                        {value?.code}
                                    </SyntaxHighlighter>
                                ) : (
                                    parse(value?.code) // This could be any other content or preview
                                )}
                            </div>

                            {/* Copy button, only if the code is visible */}

                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SingleCreationPage;
