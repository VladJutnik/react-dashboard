import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

//import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
//import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css'


const App = () => {
    const activeMenu = true
    return (
        <div>
            <BrowserRouter>
                <div className="flex relativ dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
                        <TooltipComponent content="Настройки" positon="Top">
                            <button type={"button"}
                                    className={"text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"}
                                    style={{background: 'blue', borderRadius: '50%'}}>
                                <FiSettings/>
                            </button>
                        </TooltipComponent>
                    </div>
                    {/*боковое меню:*/}
                    {activeMenu ? (
                        <div className={"w-72 fixed sidebar dark:bg-seccondary-dark-bg bg-white"}>
                            Sidebar
                        </div>
                    ) : (
                        <div className={"w-0 dark:bg-seccondary-dark-bg"}>
                            Sidebar w-0
                        </div>
                    )}
                    <div
                        className={
                            `dark:bg-main-dark-bg bg-main-bg w-full min-h-screen ${activeMenu
                                ? ' md:ml-72'
                                : ' flex-2'}`
                        }
                    >
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                            Navbar
                        </div>
                    </div>
                    <div>
                        <Routes>
                            {/* dashboard  */}
                            <Route path="/" element="Ecommerce"/>
                            <Route path="/ecommerce" element="Ecommerce"/>
                            {/* pages  */}
                            <Route path="/orders" element="Ecommerce"/>
                            <Route path="/employees" element="Ecommerce"/>
                            <Route path="/customers" element="Ecommerce"/>

                            {/* apps  */}
                            <Route path="/kanban" element="Ecommerce"/>
                            <Route path="/editor" element="Ecommerce"/>
                            <Route path="/calendar" element="Ecommerce"/>
                            <Route path="/color-picker" element="Ecommerce"/>

                            {/* charts  */}
                            <Route path="/line" element="Ecommerce"/>
                            <Route path="/area" element="Ecommerce"/>
                            <Route path="/bar" element="Ecommerce"/>
                            <Route path="/pie" element="Ecommerce"/>
                            <Route path="/financial" element="Ecommerce"/>
                            <Route path="/color-mapping" element="Ecommerce"/>
                            <Route path="/pyramid" element="Ecommerce"/>
                            <Route path="/stacked" element="Ecommerce"/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}
export default App