import React, {useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/listedBooks/ListedReadList';
import ListedWishList from '../../components/listedBooks/ListedWishList';
import { IoIosArrowDown } from 'react-icons/io';


const Books = () => {

    const [sortingType, setSortingType] = useState("");

    return (
        <div className='container mx-auto px-5 lg:px-0 flex flex-col gap-14'>
            <div className="flex flex-col items-center justify-center gap-8">
                <div className="bg-[#131313]/5 rounded-2xl w-full flex items-center justify-center">
                    <h1 className='text-3xl font-bold py-8'>Books</h1>
                </div>
                <div className="">
                    <div className="dropdown dropdown-center">
                        <div tabIndex={0} role="button" className="btn btn-success text-white">Sort By : {sortingType || "Default"} <IoIosArrowDown /></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={() => setSortingType("pages")}><a>Pages</a></li>
                            <li onClick={() => setSortingType("rating")}><a>Rating</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="">
                <Tabs>
                    <TabList>
                        <Tab><p className='text-lg text-[#131313]/80'>Read Books</p></Tab>
                        <Tab><p className='text-lg text-[#131313]/80'>Wishlist Books</p></Tab>
                    </TabList>

                    <TabPanel>
                        <ListedReadList sortingType={sortingType} />
                    </TabPanel>
                    <TabPanel>
                        <ListedWishList sortingType={sortingType} />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Books;