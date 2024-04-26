import { useParams } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
    dracula, a11yDark,
    gruvboxDark,
    gruvboxLight,
    materialDark,
    materialLight,
    nightOwl,
    nord,
    okaidia,
    oneDark,
    oneLight,
    solarizedDarkAtom,
    tomorrow,
    twilight,
    vs,
    vscDarkPlus
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { MyCreations } from '../Constants';
import parse from 'html-react-parser';


const SingleCreationPage = () => {
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
