import React, { useEffect, useState } from 'react'
import { AppText, portfolio } from '../Constants'
import SectionHeading from '../Shared/SectionHeading';
import { robo } from './../assets/index'
import Card from './Card';

const Portfolio = () => {

    const [portfolioList, setPortfolioList] = useState([]);
    const [portfolioListOrg, setPortfolioListOrg] = useState([]);

    useEffect(() => {

        setPortfolioList(portfolio);
        setPortfolioListOrg(portfolio)
    }, [])
    const filterPortfolio = (type) => {
        if (type === 'All') {
            setPortfolioList(portfolioListOrg);
        }
        else {
            const result = portfolioListOrg.filter(item => item.type === type);
            setPortfolioList(result)
            // console.log(result)
        }
    }
    return (
        <div className='mt-5 flex justify-center flex-col font-times'>
            <div className='flex flex-row px-6 md:px-0 items-center justify-center'>
                <SectionHeading firstTitle={AppText.Creative} secondTitle={AppText.Portfolio} />
                <img src={robo} alt='robo' className="w-[70px] ml-5 animate-bounce" />
            </div>
            <div className='flex flex-row justify-evenly gap-2 px-4 md:px-72'>
                <button onClick={() => filterPortfolio('website')} className='border-purple-600 border-2 
            text-purple-600 focus:text-white
            active:bg-purple-500 p-1 px-4 rounded-md
            focus:ring-violet-300 focus:bg-purple-600 focus:ring '>Web App</button>
                <button onClick={() => filterPortfolio('mobile')} className='border-purple-600 border-2 
            text-purple-600 focus:text-white
            active:bg-purple-500 p-1 px-4 rounded-md
            focus:ring-violet-300 focus:bg-purple-600 focus:ring '>Mobile App</button>
            </div>
            <div className='grid grid-cols-1 items-center content-center md:grid-cols-3 lg:grid-cols-3
        md:px-24 lg:px-48  '>
                {portfolioList.map((item, index) => {
                    console.log('item', item)
                    return (
                        <Card imageSrc={item.imageUrl} title={item?.title} description={item?.desc} link={item?.website} detailedDescription={item?.detailedDescription} />
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio