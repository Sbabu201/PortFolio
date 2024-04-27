import { useParams } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
    materialDark,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { MyCreations } from '../Constants';
import parse from 'html-react-parser';
import { useState } from 'react';

const SingleCreationPage = () => {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const copyToClipboard = (text, index) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopiedIndex(index); // Set the index of the copied item
                setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
            })
            .catch((err) => {
                console.error("Error copying text: ", err);
            });
    };

    const { id } = useParams();
    const items = MyCreations.filter((item) => item.id === Number(id));

    return (
        <div className='flex flex-col'>
            {items.map((item) => (
                <div className='flex flex-col gap-4 ' key={item.id}>
                    {item.items.map((value, index) => (
                        <div key={index} className='flex md:flex-row flex-col gap-4 w-full px-10'>
                            <div className='w-full md:w-[40%] flex justify-center items-center'>
                                {parse(value?.code)}
                            </div>
                            <div className='w-full md:w-[60%]' style={{ overflowX: 'auto' }}>
                                <button className={` text-sm font-times px-8 py-2 ${copiedIndex === index ? "from-purple-200 to-purple-600 bg-gradient-to-r text-white" : " bg-purple-900"}  `}
                                    onClick={() => copyToClipboard(value?.code, index)}
                                    style={{

                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                    }}
                                >
                                    {copiedIndex === index ? 'copied' : 'copy'}
                                </button>
                                <SyntaxHighlighter language="javascript" style={materialDark}>
                                    {value?.code}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SingleCreationPage;
